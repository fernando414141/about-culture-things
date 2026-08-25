const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const TOURS_CONFIG = require('./site/tours-config.js');

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_URL = process.env.SITE_URL || `http://localhost:${PORT}`;

// Initialize Stripe if secret key is present
let stripe = null;
if (process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY !== 'sk_test_placeholder') {
  stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
}

// Ensure data directory exists for booking persistence
const DATA_DIR = path.join(__dirname, 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(BOOKINGS_FILE)) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

function loadBookings() {
  try {
    const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading bookings file:', err);
    return [];
  }
}

function saveBookings(bookings) {
  try {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving bookings file:', err);
  }
}

function generateReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `ACT-${code}`;
}

// Calculate price on server side
function calculateServerPrice(tour, persons) {
  const personsNum = parseInt(persons, 10);
  if (isNaN(personsNum) || personsNum < 1 || personsNum > tour.maxPersons) {
    throw new Error(`Invalid person count. Maximum allowed is ${tour.maxPersons}.`);
  }

  if (tour.pricingType === 'per_group') {
    return {
      unitPrice: tour.price,
      subtotal: tour.price,
      discountPercent: 0,
      discountAmount: 0,
      totalPrice: tour.price
    };
  }

  const subtotal = tour.price * personsNum;
  let discountPercent = 0;

  if (TOURS_CONFIG.quantityDiscounts) {
    for (const rule of TOURS_CONFIG.quantityDiscounts) {
      if (personsNum >= rule.minGuests && personsNum <= rule.maxGuests) {
        discountPercent = rule.discountPercent;
        break;
      }
    }
  }

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const totalPrice = subtotal - discountAmount;

  return {
    unitPrice: tour.price,
    subtotal,
    discountPercent,
    discountAmount,
    totalPrice
  };
}

// 24-hour advance validation
function validateTourDate(dateString) {
  if (!dateString) return false;
  const tourDate = new Date(`${dateString}T09:00:00`);
  if (isNaN(tourDate.getTime())) return false;

  const now = new Date();
  const minAllowed = new Date(now.getTime() + TOURS_CONFIG.minAdvanceBookingHours * 60 * 60 * 1000);

  // Set minAllowed to start of that target date for clean comparison if needed, or exact 24h gap
  return tourDate.getTime() >= minAllowed.getTime() - (12 * 60 * 60 * 1000); // 24h rule margin
}

// Transactonal Email Sender
async function sendTransactionalEmails(booking) {
  const {
    reference, tourName, date, persons, totalPrice,
    paymentMethod, status, customerName, customerEmail, customerPhone
  } = booking;

  const paymentLabels = {
    stripe: 'Credit Card / Stripe',
    mbway: 'MB WAY',
    wise: 'Wise',
    revolut: 'Revolut',
    sepa: 'SEPA Direct Bank Transfer'
  };

  const paymentLabel = paymentLabels[paymentMethod] || paymentMethod;
  const statusLabel = status === 'confirmed' ? 'CONFIRMED / PAGADO' : 'AWAITING PAYMENT / PENDIENTE DE PAGO';

  const meetingInfo = `${TOURS_CONFIG.meetingPoint.time} — ${TOURS_CONFIG.meetingPoint.location} (${TOURS_CONFIG.meetingPoint.address})`;

  const subjectCustomer = `About Culture Things — Booking Request ${reference} (${tourName})`;
  const subjectAdmin = `[NEW BOOKING] ${reference} — ${customerName} (${paymentLabel})`;

  const htmlContent = `
    <div style="font-family: 'DM Sans', Arial, sans-serif; color: #1c2b26; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #13342E; color: #ffffff; padding: 24px; text-align: center;">
        <h1 style="font-family: 'Cormorant Garamond', Georgia, serif; margin: 0; font-size: 26px; color: #D4AF37;">About Culture Things</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Boutique Tours & Experiences in Portugal</p>
      </div>

      <div style="padding: 24px;">
        <h2 style="color: #13342E; margin-top: 0;">Reservation Reference: <span style="color: #D4AF37;">${reference}</span></h2>
        <p style="font-size: 15px; line-height: 1.5;">Dear ${customerName},</p>
        <p style="font-size: 15px; line-height: 1.5;">Thank you for choosing About Culture Things. Here are your booking details:</p>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
          <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #4a5568;">Experience:</td><td style="padding: 10px;">${tourName}</td></tr>
          <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #4a5568;">Date & Departure:</td><td style="padding: 10px;">${date} at 09:00 AM</td></tr>
          <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #4a5568;">Meeting Point:</td><td style="padding: 10px;"><strong>${meetingInfo}</strong></td></tr>
          <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #4a5568;">Guests:</td><td style="padding: 10px;">${persons} person(s)</td></tr>
          <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #4a5568;">Total Price:</td><td style="padding: 10px; font-weight: bold; color: #13342E;">€${totalPrice} EUR</td></tr>
          <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #4a5568;">Payment Method:</td><td style="padding: 10px;">${paymentLabel}</td></tr>
          <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #4a5568;">Status:</td><td style="padding: 10px;"><span style="padding: 4px 8px; border-radius: 4px; background-color: ${status === 'confirmed' ? '#C6F6D5' : '#FEFCBF'}; color: ${status === 'confirmed' ? '#22543D' : '#744210'}; font-weight: bold;">${statusLabel}</span></td></tr>
        </table>

        ${paymentMethod === 'mbway' ? `<div style="background: #f7fafc; padding: 16px; border-left: 4px solid #D4AF37; margin-bottom: 20px;"><p style="margin: 0; font-weight: bold;">MB WAY Payment Instructions:</p><p style="margin: 5px 0 0 0;">Please send <strong>€${totalPrice} EUR</strong> to <strong>${process.env.MBWAY_PHONE || '+351968510019'}</strong> with reference <strong>${reference}</strong> in the description.</p></div>` : ''}

        ${paymentMethod === 'wise' ? `<div style="background: #f7fafc; padding: 16px; border-left: 4px solid #D4AF37; margin-bottom: 20px;"><p style="margin: 0; font-weight: bold;">Wise Payment Instructions:</p><p style="margin: 5px 0 0 0;">Please complete payment of <strong>€${totalPrice} EUR</strong> via Wise link: <a href="${process.env.WISE_LINK || 'https://wise.com/pay/me/anaritac83'}">${process.env.WISE_LINK || 'https://wise.com/pay/me/anaritac83'}</a> using reference <strong>${reference}</strong>.</p></div>` : ''}

        ${paymentMethod === 'revolut' ? `<div style="background: #f7fafc; padding: 16px; border-left: 4px solid #D4AF37; margin-bottom: 20px;"><p style="margin: 0; font-weight: bold;">Revolut Payment Instructions:</p><p style="margin: 5px 0 0 0;">Please complete payment of <strong>€${totalPrice} EUR</strong> via Revolut link: <a href="${process.env.REVOLUT_LINK || 'https://revolut.me/ritaa89'}">${process.env.REVOLUT_LINK || 'https://revolut.me/ritaa89'}</a> using reference <strong>${reference}</strong>.</p></div>` : ''}

        ${paymentMethod === 'sepa' ? `<div style="background: #f7fafc; padding: 16px; border-left: 4px solid #D4AF37; margin-bottom: 20px;"><p style="margin: 0; font-weight: bold;">SEPA Bank Transfer Instructions:</p><p style="margin: 5px 0 0 0;">IBAN: <strong>${process.env.SEPA_IBAN || 'PT50 0023 0000 45799874051 94'}</strong><br>Beneficiary: <strong>${process.env.SEPA_BENEFICIARY || 'About Culture Things'}</strong><br>Reference: <strong>${reference}</strong></p></div>` : ''}

        <p style="font-size: 14px; color: #718096; margin-top: 24px;">Cancellation policy: Free cancellation up to 48 hours prior to departure.</p>
        <p style="font-size: 14px; color: #718096;">If you have any questions, reply to this email or contact us at <a href="mailto:aboutculturethings@gmail.com" style="color: #13342E;">aboutculturethings@gmail.com</a>.</p>
      </div>

      <div style="background-color: #f7fafc; padding: 16px; text-align: center; font-size: 12px; color: #a0aec0; border-top: 1px solid #edf2f7;">
        © About Culture Things · Sintra & Lisbon, Portugal
      </div>
    </div>
  `;

  // Check if SMTP is configured
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587', 10),
        secure: process.env.EMAIL_PORT === '465',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Send to Customer
      await transporter.sendMail({
        from: `"About Culture Things" <${process.env.EMAIL_USER}>`,
        to: customerEmail,
        subject: subjectCustomer,
        html: htmlContent
      });

      // Send to Admin
      await transporter.sendMail({
        from: `"About Culture Things Web" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFICATION_EMAIL || 'aboutculturethings.com@gmail.com',
        subject: subjectAdmin,
        html: htmlContent
      });

      console.log(`Transactional emails dispatched successfully for reference ${reference}`);
    } catch (error) {
      console.error(`Email sending error for reference ${reference}:`, error.message);
    }
  } else {
    console.log(`[EMAIL LOG - SMTP NOT CONFIGURED] Reference: ${reference} | Customer: ${customerEmail} | Amount: €${totalPrice}`);
  }
}

// Middleware
app.use(cors());
// Raw body parsing for Stripe Webhooks
app.use((req, res, next) => {
  if (req.originalUrl === '/api/stripe-webhook') {
    express.raw({ type: 'application/json' })(req, res, next);
  } else {
    express.json()(req, res, next);
  }
});

// Serve static assets
app.use(express.static(__dirname));

// --- API ENDPOINTS ---

// GET /api/tours — Get active tour configurations
app.get('/api/tours', (req, res) => {
  const activeTours = TOURS_CONFIG.tours.filter(t => t.active);
  res.json({
    meetingPoint: TOURS_CONFIG.meetingPoint,
    cancellationPolicyHours: TOURS_CONFIG.cancellationPolicyHours,
    minAdvanceBookingHours: TOURS_CONFIG.minAdvanceBookingHours,
    tours: activeTours,
    paymentMethods: {
      stripe: Boolean(stripe),
      mbway: true,
      wise: true,
      revolut: true,
      sepa: true,
      bizum: process.env.BIZUM_ACTIVE === 'true'
    },
    paymentDetails: {
      mbwayPhone: process.env.MBWAY_PHONE || '+351968510019',
      wiseLink: process.env.WISE_LINK || 'https://wise.com/pay/me/anaritac83',
      revolutLink: process.env.REVOLUT_LINK || 'https://revolut.me/ritaa89',
      sepaIban: process.env.SEPA_IBAN || 'PT50 0023 0000 45799874051 94',
      sepaBeneficiary: process.env.SEPA_BENEFICIARY || 'About Culture Things'
    }
  });
});

// POST /api/bookings — Manual payment booking (MB WAY, Wise, Revolut, SEPA)
app.post('/api/bookings', async (req, res) => {
  try {
    const { tourId, date, persons, name, email, phone, paymentMethod, lang } = req.body;

    if (!tourId || !date || !persons || !name || !email || !paymentMethod) {
      return res.status(400).json({ error: 'Missing required booking fields.' });
    }

    const tour = TOURS_CONFIG.tours.find(t => t.id === tourId && t.active);
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found or currently unavailable.' });
    }

    // Validate 24h date rule
    if (!validateTourDate(date)) {
      return res.status(400).json({ error: 'Bookings must be made at least 24 hours in advance.' });
    }

    // Validate and calculate exact price on server
    const priceCalculation = calculateServerPrice(tour, persons);

    const reference = generateReference();
    const tourName = tour.name[lang] || tour.name.en || tour.name;

    const newBooking = {
      reference,
      tourId: tour.id,
      tourName: typeof tourName === 'object' ? tourName.en : tourName,
      date,
      time: TOURS_CONFIG.meetingPoint.time,
      meetingPoint: `${TOURS_CONFIG.meetingPoint.time} — ${TOURS_CONFIG.meetingPoint.location}`,
      persons: parseInt(persons, 10),
      unitPrice: priceCalculation.unitPrice,
      subtotal: priceCalculation.subtotal,
      discountAmount: priceCalculation.discountAmount,
      totalPrice: priceCalculation.totalPrice,
      currency: TOURS_CONFIG.currency,
      customerName: name.trim(),
      customerEmail: email.trim().toLowerCase(),
      customerPhone: phone ? phone.trim() : '',
      paymentMethod,
      status: 'awaiting_payment',
      createdAt: new Date().toISOString()
    };

    const bookings = loadBookings();
    bookings.push(newBooking);
    saveBookings(bookings);

    // Send emails asynchronously
    sendTransactionalEmails(newBooking);

    res.json({
      success: true,
      reference: newBooking.reference,
      booking: newBooking
    });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(400).json({ error: err.message || 'Error processing reservation request.' });
  }
});

// POST /api/create-checkout-session — Create Stripe Checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { tourId, date, persons, name, email, phone, lang } = req.body;

    if (!tourId || !date || !persons || !name || !email) {
      return res.status(400).json({ error: 'Missing required booking fields.' });
    }

    const tour = TOURS_CONFIG.tours.find(t => t.id === tourId && t.active);
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found or currently unavailable.' });
    }

    if (!validateTourDate(date)) {
      return res.status(400).json({ error: 'Bookings must be made at least 24 hours in advance.' });
    }

    const priceCalculation = calculateServerPrice(tour, persons);
    const reference = generateReference();
    const tourName = tour.name[lang] || tour.name.en || tour.name;
    const displayName = typeof tourName === 'object' ? tourName.en : tourName;

    const newBooking = {
      reference,
      tourId: tour.id,
      tourName: displayName,
      date,
      time: TOURS_CONFIG.meetingPoint.time,
      meetingPoint: `${TOURS_CONFIG.meetingPoint.time} — ${TOURS_CONFIG.meetingPoint.location}`,
      persons: parseInt(persons, 10),
      unitPrice: priceCalculation.unitPrice,
      subtotal: priceCalculation.subtotal,
      discountAmount: priceCalculation.discountAmount,
      totalPrice: priceCalculation.totalPrice,
      currency: TOURS_CONFIG.currency,
      customerName: name.trim(),
      customerEmail: email.trim().toLowerCase(),
      customerPhone: phone ? phone.trim() : '',
      paymentMethod: 'stripe',
      status: 'awaiting_payment',
      createdAt: new Date().toISOString()
    };

    const bookings = loadBookings();

    if (stripe) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer_email: newBooking.customerEmail,
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: `${displayName} (${reference})`,
                description: `Date: ${date} at 09:00 AM | Meeting: Hard Rock Cafe Lisbon | Guests: ${persons}`
              },
              unit_amount: Math.round(priceCalculation.totalPrice * 100) // in cents
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        success_url: `${SITE_URL}/?booking_ref=${reference}&status=success`,
        cancel_url: `${SITE_URL}/?booking_ref=${reference}&status=cancelled`,
        metadata: {
          reference: newBooking.reference,
          tourId: newBooking.tourId,
          date: newBooking.date,
          persons: String(newBooking.persons)
        }
      });

      newBooking.stripeSessionId = session.id;
      bookings.push(newBooking);
      saveBookings(bookings);

      return res.json({ checkoutUrl: session.url, reference });
    } else {
      // Fallback for test mode without live Stripe credentials
      bookings.push(newBooking);
      saveBookings(bookings);
      sendTransactionalEmails(newBooking);

      return res.json({
        checkoutUrl: `${SITE_URL}/?booking_ref=${reference}&status=success_demo`,
        reference,
        demo: true
      });
    }
  } catch (err) {
    console.error('Error creating Stripe session:', err);
    res.status(500).json({ error: err.message || 'Stripe payment initialization error.' });
  }
});

// POST /api/stripe-webhook — Verified Stripe webhook handler
app.post('/api/stripe-webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  if (stripe && process.env.STRIPE_WEBHOOK_SECRET && process.env.STRIPE_WEBHOOK_SECRET !== 'whsec_placeholder') {
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error('Stripe webhook signature error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  } else {
    // If webhook secret is placeholder, parse JSON body directly for testing
    try {
      event = JSON.parse(req.body.toString());
    } catch (e) {
      return res.status(400).send('Invalid webhook JSON payload');
    }
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const reference = session.metadata ? session.metadata.reference : null;

    const bookings = loadBookings();
    const index = bookings.findIndex(b => (reference && b.reference === reference) || b.stripeSessionId === session.id);

    if (index !== -1) {
      bookings[index].status = 'confirmed';
      bookings[index].stripePaymentIntentId = session.payment_intent;
      bookings[index].updatedAt = new Date().toISOString();
      saveBookings(bookings);

      console.log(`Booking ${bookings[index].reference} confirmed via Stripe webhook!`);
      sendTransactionalEmails(bookings[index]);
    }
  }

  res.json({ received: true });
});

// GET /api/bookings/:ref — Query booking by reference
app.get('/api/bookings/:ref', (req, res) => {
  const bookings = loadBookings();
  const booking = bookings.find(b => b.reference.toUpperCase() === req.params.ref.toUpperCase());
  if (!booking) {
    return res.status(404).json({ error: 'Booking not found.' });
  }
  res.json({ booking });
});

// Start Server
app.listen(PORT, () => {
  console.log(`About Culture Things server running at http://localhost:${PORT}`);
});
