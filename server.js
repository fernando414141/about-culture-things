const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const express=require('express');
const nodemailer=require('nodemailer');
require('dotenv').config();
const TOURS_CONFIG=require('./site/tours-config.js');

const app=express();
const PORT=Number(process.env.PORT||3000);
const SITE_URL=(process.env.SITE_URL||`http://localhost:${PORT}`).replace(/\/$/,'');
const stripe=process.env.STRIPE_SECRET_KEY&&!/placeholder/i.test(process.env.STRIPE_SECRET_KEY)?require('stripe')(process.env.STRIPE_SECRET_KEY):null;
const DATA_DIR=path.join(__dirname,'data');
const BOOKINGS_FILE=path.join(DATA_DIR,'bookings.json');
fs.mkdirSync(DATA_DIR,{recursive:true});
if(!fs.existsSync(BOOKINGS_FILE))fs.writeFileSync(BOOKINGS_FILE,'[]\n','utf8');

function readBookings(){try{const value=JSON.parse(fs.readFileSync(BOOKINGS_FILE,'utf8'));return Array.isArray(value)?value:[];}catch(error){console.error('Booking store read failed:',error.message);return[];}}
function writeBookings(items){const temp=BOOKINGS_FILE+'.tmp';fs.writeFileSync(temp,JSON.stringify(items,null,2)+'\n','utf8');fs.renameSync(temp,BOOKINGS_FILE);}
function reference(){return'ACT-'+crypto.randomBytes(8).toString('hex').toUpperCase();}
function text(value,max=500){return String(value||'').trim().slice(0,max);}
function email(value){const v=text(value,254).toLowerCase();return/^\S+@\S+\.\S+$/.test(v)?v:'';}
function ymd(date){return`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
function minDate(){const d=new Date(Date.now()+TOURS_CONFIG.minAdvanceBookingHours*36e5);if(d.getHours()>=9)d.setDate(d.getDate()+1);return ymd(d);}
function validDate(value){return/^\d{4}-\d{2}-\d{2}$/.test(value||'')&&value>=minDate();}
function publicBooking(b){return{reference:b.reference,tourName:b.tourName,date:b.date,persons:b.persons,tourLanguage:b.tourLanguage,pickup:b.pickup,totalPrice:b.totalPrice,currency:'EUR',status:b.status,customerName:b.customerName,customerEmail:b.customerEmail,createdAt:b.createdAt};}
function holdsCapacity(booking){
  if(booking.status==='confirmed')return true;
  if(booking.status!=='awaiting_payment')return false;
  const expiresAt=Date.parse(booking.checkoutExpiresAt||'');
  return Number.isFinite(expiresAt)&&expiresAt>Date.now();
}
function tourById(id){return TOURS_CONFIG.tours.find(t=>t.id===id);}
function hasResourceConflict(bookings,tour,date){return bookings.some(b=>b.date===date&&holdsCapacity(b)&&b.tourId!==tour.id&&tourById(b.tourId)?.resource===tour.resource);}

async function sendConfirmation(booking){
  const smtpHost=process.env.SMTP_HOST||process.env.EMAIL_HOST,smtpUser=process.env.SMTP_USER||process.env.EMAIL_USER,smtpPass=process.env.SMTP_PASS||process.env.EMAIL_PASS;
  if(!smtpHost||!smtpUser||!smtpPass||/placeholder/i.test(smtpPass))return;
  const transport=nodemailer.createTransport({host:smtpHost,port:Number(process.env.SMTP_PORT||process.env.EMAIL_PORT||587),secure:String(process.env.SMTP_SECURE)==='true',auth:{user:smtpUser,pass:smtpPass}});
  const esc=v=>String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const html=`<div style="max-width:620px;margin:auto;font:15px/1.6 Arial;color:#1f2b28"><div style="padding:28px;background:#153b32;color:white"><h1 style="margin:0;font:30px Georgia">About Culture Things</h1><p style="margin:6px 0 0">Booking confirmed · ${esc(booking.reference)}</p></div><div style="padding:28px;border:1px solid #ddd"><p>Dear ${esc(booking.customerName)},</p><p>Your payment is confirmed. We will email the precise pickup time and any monument-ticket recommendation separately.</p><table style="width:100%;border-collapse:collapse"><tr><td>Experience</td><td><strong>${esc(booking.tourName)}</strong></td></tr><tr><td>Date</td><td>${esc(booking.date)}</td></tr><tr><td>Guests</td><td>${booking.persons}</td></tr><tr><td>Tour language</td><td>${esc(booking.tourLanguage)}</td></tr><tr><td>Pickup / meeting</td><td>${esc(booking.pickup)}</td></tr><tr><td>Total paid</td><td><strong>€${booking.totalPrice} EUR</strong></td></tr></table><p>Free cancellation is available until 48 hours before departure.</p></div></div>`;
  await transport.sendMail({from:process.env.SMTP_FROM||smtpUser,to:booking.customerEmail,bcc:process.env.ADMIN_EMAIL||process.env.NOTIFICATION_EMAIL||'aboutculturethings@gmail.com',subject:`Booking confirmed ${booking.reference} · ${booking.tourName}`,html});
}

/* Stripe needs the untouched request body for signature verification. */
app.post('/api/stripe-webhook',express.raw({type:'application/json'}),(req,res)=>{
  if(!stripe||!process.env.STRIPE_WEBHOOK_SECRET)return res.status(503).send('Webhook is not configured');
  let event;try{event=stripe.webhooks.constructEvent(req.body,req.headers['stripe-signature'],process.env.STRIPE_WEBHOOK_SECRET);}catch(error){return res.status(400).send('Invalid signature');}
  if(event.type==='checkout.session.completed'&&event.data.object.payment_status==='paid'){
    const session=event.data.object,items=readBookings(),index=items.findIndex(b=>b.reference===session.metadata?.reference||b.stripeSessionId===session.id);
    if(index>=0&&items[index].status!=='confirmed'){
      items[index].status='confirmed';items[index].paidAt=new Date().toISOString();items[index].stripePaymentIntentId=session.payment_intent;writeBookings(items);
      sendConfirmation(items[index]).catch(error=>console.error('Confirmation email failed:',error.message));
    }
  }
  res.json({received:true});
});

app.use(express.json({limit:'50kb'}));
app.get('/favicon.ico',(req,res)=>res.sendFile(path.join(__dirname,'favicon.png')));
app.use('/data',(req,res)=>res.status(404).send('Not found'));
app.use(express.static(__dirname,{extensions:['html'],dotfiles:'deny',maxAge:process.env.NODE_ENV==='production'?'1h':0}));

app.get('/api/health',(req,res)=>res.json({ok:true,paymentConfigured:Boolean(stripe&&process.env.STRIPE_WEBHOOK_SECRET),minDate:minDate()}));
app.get('/api/tours',(req,res)=>res.json({tours:TOURS_CONFIG.tours.filter(t=>t.active),currency:'EUR',minDate:minDate(),tourLanguages:TOURS_CONFIG.tourLanguages,cancellationPolicyHours:TOURS_CONFIG.cancellationPolicyHours}));

let checkoutQueue=Promise.resolve();
async function createCheckout(req,res){
  try{
    if(!stripe)return res.status(503).json({error:'Secure card payment is not configured yet.'});
    const p=req.body||{},tour=TOURS_CONFIG.tours.find(t=>t.active&&t.id===p.tourId),persons=Number(p.persons),customerEmail=email(p.email),customerName=text(p.name,120),tourLanguage=text(p.tourLanguage,2),pickup=text(p.pickup,500),attempt=text(p.bookingAttemptId||req.get('Idempotency-Key'),100);
    if(!tour)return res.status(404).json({error:'Experience not found.'});
    if(!Number.isInteger(persons)||persons<1||persons>tour.maxPersons)return res.status(400).json({error:'Invalid guest count.'});
    if(!validDate(p.date)||!customerName||!customerEmail||!TOURS_CONFIG.tourLanguages.includes(tourLanguage)||!pickup||!attempt)return res.status(400).json({error:'Please check the booking details.'});
    const bookings=readBookings(),existing=bookings.find(b=>b.bookingAttemptId===attempt);
    if(existing?.checkoutUrl&&holdsCapacity(existing))return res.json({checkoutUrl:existing.checkoutUrl,reference:existing.reference});
    if(hasResourceConflict(bookings,tour,p.date))return res.status(409).json({error:'The transport assigned to this date is already reserved for another route.'});
    const reservedSeats=bookings.filter(b=>b.tourId===tour.id&&b.date===p.date&&holdsCapacity(b)).reduce((sum,b)=>sum+Number(b.persons||0),0);
    if(reservedSeats+persons>tour.maxPersons)return res.status(409).json({error:'This date no longer has enough places for your group.'});
    const ref=reference(),lang=['en','pt','es','fr','de'].includes(p.lang)?p.lang:'en',tourName=tour.name[lang]||tour.name.en,totalPrice=tour.price*persons;
    const session=await stripe.checkout.sessions.create({
      mode:'payment',customer_email:customerEmail,locale:lang==='pt'?'pt-BR':lang,
      automatic_payment_methods:{enabled:true},
      line_items:[{quantity:persons,price_data:{currency:'eur',unit_amount:tour.price*100,product_data:{name:tourName,description:`${tour.duration} · guided in ${tourLanguage.toUpperCase()}`}}}],
      metadata:{reference:ref,tourId:tour.id,date:p.date,persons:String(persons),tourLanguage},
      payment_intent_data:{metadata:{reference:ref}},
      success_url:`${SITE_URL}/thank-you/?session_id={CHECKOUT_SESSION_ID}&ref=${encodeURIComponent(ref)}`,
      cancel_url:`${SITE_URL}/?book=${encodeURIComponent(tour.id)}&payment=cancelled&lang=${encodeURIComponent(lang)}`,
      expires_at:Math.floor(Date.now()/1000)+30*60
    },{idempotencyKey:attempt});
    const booking={reference:ref,bookingAttemptId:attempt,tourId:tour.id,tourName,lang,date:p.date,persons,tourLanguage,pickup,requests:text(p.requests,1000),unitPrice:tour.price,totalPrice,currency:'EUR',customerName,customerEmail,customerPhone:text(p.phone,60),status:'awaiting_payment',stripeSessionId:session.id,checkoutUrl:session.url,checkoutExpiresAt:new Date(session.expires_at*1000).toISOString(),createdAt:new Date().toISOString()};
    bookings.push(booking);writeBookings(bookings);res.json({checkoutUrl:session.url,reference:ref});
  }catch(error){console.error('Checkout session failed:',error.message);res.status(500).json({error:'Secure payment could not be started.'});}
}
app.post('/api/create-checkout-session',(req,res)=>{
  const current=checkoutQueue.then(()=>createCheckout(req,res));
  checkoutQueue=current.catch(()=>{});
  return current;
});

app.get('/api/bookings/:ref',async(req,res)=>{
  const items=readBookings();let booking=items.find(b=>b.reference===req.params.ref);if(!booking)return res.status(404).json({error:'Booking not found.'});
  if(!req.query.sessionId||req.query.sessionId!==booking.stripeSessionId)return res.status(403).json({error:'Booking verification is required.'});
  if(stripe&&booking.status==='awaiting_payment'&&booking.stripeSessionId){try{const session=await stripe.checkout.sessions.retrieve(booking.stripeSessionId);if(session.payment_status==='paid'){booking.status='confirmed';booking.paidAt=new Date().toISOString();booking.stripePaymentIntentId=session.payment_intent;writeBookings(items);sendConfirmation(booking).catch(error=>console.error('Confirmation email failed:',error.message));}}catch(error){console.error('Payment status refresh failed:',error.message);}}
  res.json(publicBooking(booking));
});

app.get('/api/availability',(req,res)=>{
  const tour=TOURS_CONFIG.tours.find(t=>t.active&&t.id===req.query.tourId),date=text(req.query.date,10);
  if(!tour||!validDate(date))return res.status(400).json({error:'Invalid experience or date.'});
  const bookings=readBookings();
  if(hasResourceConflict(bookings,tour,date))return res.json({available:false,availableSeats:0});
  const reserved=bookings.filter(b=>b.tourId===tour.id&&b.date===date&&holdsCapacity(b)).reduce((sum,b)=>sum+Number(b.persons||0),0);
  const availableSeats=Math.max(0,tour.maxPersons-reserved);
  res.json({available:availableSeats>0,availableSeats});
});

app.use('/api',(req,res)=>res.status(404).json({error:'Not found.'}));
app.listen(PORT,()=>console.log(`About Culture Things running at ${SITE_URL}`));
