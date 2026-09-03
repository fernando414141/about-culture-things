const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const express=require('express');
const nodemailer=require('nodemailer');
require('dotenv').config();

const app=express();
const PORT=Number(process.env.PORT||3000);
const SITE_URL=(process.env.SITE_URL||`http://localhost:${PORT}`).replace(/\/$/,'');
const stripe=process.env.STRIPE_SECRET_KEY&&!/placeholder/i.test(process.env.STRIPE_SECRET_KEY)?require('stripe')(process.env.STRIPE_SECRET_KEY):null;
const DATA_DIR=path.join(__dirname,'data');
const BOOKINGS_FILE=path.join(DATA_DIR,'bookings.json');
fs.mkdirSync(DATA_DIR,{recursive:true});
if(!fs.existsSync(BOOKINGS_FILE))fs.writeFileSync(BOOKINGS_FILE,'[]\n','utf8');

const TOURS=[
 {id:'sintra',price:75,duration:'8 h',name:{en:'Sintra, Cabo da Roca & Cascais',pt:'Sintra, Cabo da Roca e Cascais',es:'Sintra, Cabo da Roca y Cascais'}},
 {id:'fatima',price:95,duration:'9–10 h',name:{en:'Fátima, Nazaré & Óbidos',pt:'Fátima, Nazaré e Óbidos',es:'Fátima, Nazaré y Óbidos'}},
 {id:'evora',price:105,duration:'8–9 h',name:{en:'Évora & Alentejo',pt:'Évora e Alentejo',es:'Évora y Alentejo'}}
];
const LANGUAGES=['en','es','pt'];
const BOOKING_CUTOFF_HOUR=19;
const BOOKING_TIME_ZONE='Europe/Lisbon';

function readBookings(){try{const v=JSON.parse(fs.readFileSync(BOOKINGS_FILE,'utf8'));return Array.isArray(v)?v:[]}catch(e){console.error('Booking read failed:',e.message);return[]}}
function writeBookings(items){const tmp=BOOKINGS_FILE+'.tmp';fs.writeFileSync(tmp,JSON.stringify(items,null,2)+'\n','utf8');fs.renameSync(tmp,BOOKINGS_FILE)}
function text(v,max=500){return String(v||'').trim().slice(0,max)}
function email(v){const x=text(v,254).toLowerCase();return/^\S+@\S+\.\S+$/.test(x)?x:''}
function reference(){return'ACT-'+crypto.randomBytes(8).toString('hex').toUpperCase()}
function minDate(now=new Date()){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:BOOKING_TIME_ZONE,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hourCycle:'h23'}).formatToParts(now).filter(p=>p.type!=='literal').map(p=>[p.type,Number(p.value)]));
 const d=new Date(Date.UTC(parts.year,parts.month-1,parts.day+(parts.hour>=BOOKING_CUTOFF_HOUR?2:1)));
 return d.toISOString().slice(0,10);
}
function validDate(v){return/^\d{4}-\d{2}-\d{2}$/.test(v||'')&&v>=minDate()}
function tourById(id){return TOURS.find(t=>t.id===id)}
function publicBooking(b){return{reference:b.reference,tourName:b.tourName,date:b.date,persons:b.persons,tourLanguage:b.tourLanguage,pickup:b.pickup,totalPrice:b.totalPrice,currency:'EUR',status:b.status,customerName:b.customerName,customerEmail:b.customerEmail,createdAt:b.createdAt}}

function calendarInvite(b){
 const start=(b.date||'').replace(/-/g,'')+'T083000';
 const end=(b.date||'').replace(/-/g,'')+'T173000';
 const esc=v=>String(v||'').replace(/([,;\\])/g,'\\$1').replace(/\n/g,'\\n');
 return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//About Culture Things//Bookings//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',`UID:${esc(b.reference)}@aboutculturethings.com`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z')}`,`DTSTART;TZID=Europe/Lisbon:${start}`,`DTEND;TZID=Europe/Lisbon:${end}`,`SUMMARY:${esc(b.tourName)} · ${esc(b.customerName)}`,`DESCRIPTION:${esc(`${b.persons} guests · ${b.tourLanguage.toUpperCase()} · ${b.customerEmail} · ${b.customerPhone||''} · ${b.requests||''}`)}`,`LOCATION:${esc(b.pickup)}`,'END:VEVENT','END:VCALENDAR'].join('\r\n');
}
async function sendConfirmation(b){
 const smtpHost=process.env.SMTP_HOST||process.env.EMAIL_HOST,smtpUser=process.env.SMTP_USER||process.env.EMAIL_USER,smtpPass=process.env.SMTP_PASS||process.env.EMAIL_PASS;
 if(!smtpHost||!smtpUser||!smtpPass||/placeholder/i.test(smtpPass))return;
 const transport=nodemailer.createTransport({host:smtpHost,port:Number(process.env.SMTP_PORT||587),secure:String(process.env.SMTP_SECURE)==='true',auth:{user:smtpUser,pass:smtpPass}});
 const esc=v=>String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const html=`<div style="max-width:620px;margin:auto;font:15px/1.6 Arial;color:#1f2b28"><div style="padding:28px;background:#153b32;color:#fff"><h1 style="margin:0;font:30px Georgia">About Culture Things</h1><p style="margin:6px 0 0">Booking confirmed · ${esc(b.reference)}</p></div><div style="padding:28px;border:1px solid #ddd"><p>Dear ${esc(b.customerName)},</p><p>Your payment is confirmed. We will contact you before the tour if we need to coordinate pickup details.</p><table style="width:100%;border-collapse:collapse"><tr><td>Tour</td><td><strong>${esc(b.tourName)}</strong></td></tr><tr><td>Date</td><td>${esc(b.date)}</td></tr><tr><td>Guests</td><td>${b.persons}</td></tr><tr><td>Language</td><td>${esc(b.tourLanguage.toUpperCase())}</td></tr><tr><td>Pickup & return</td><td>${esc(b.pickup)}</td></tr><tr><td>Total paid</td><td><strong>€${b.totalPrice} EUR</strong></td></tr></table><p>Free cancellation is available until 48 hours before departure.</p><p>RNAAT Nº 726/2024</p></div></div>`;
 await transport.sendMail({from:process.env.SMTP_FROM||smtpUser,to:b.customerEmail,bcc:process.env.ADMIN_EMAIL||process.env.NOTIFICATION_EMAIL||'aboutculturethings@gmail.com',subject:`Booking confirmed ${b.reference} · ${b.tourName}`,html,attachments:[{filename:`${b.reference}.ics`,content:calendarInvite(b),contentType:'text/calendar; charset=utf-8; method=PUBLISH'}]});
}

app.post('/api/stripe-webhook',express.raw({type:'application/json'}),(req,res)=>{
 if(!stripe||!process.env.STRIPE_WEBHOOK_SECRET)return res.status(503).send('Webhook is not configured');
 let event;try{event=stripe.webhooks.constructEvent(req.body,req.headers['stripe-signature'],process.env.STRIPE_WEBHOOK_SECRET)}catch(e){return res.status(400).send('Invalid signature')}
 if(event.type==='checkout.session.completed'&&event.data.object.payment_status==='paid'){
  const s=event.data.object,items=readBookings(),i=items.findIndex(b=>b.reference===s.metadata?.reference||b.stripeSessionId===s.id);
  if(i>=0&&items[i].status!=='confirmed'){items[i].status='confirmed';items[i].paidAt=new Date().toISOString();items[i].stripePaymentIntentId=s.payment_intent;writeBookings(items);sendConfirmation(items[i]).catch(e=>console.error('Email failed:',e.message))}
 }
 res.json({received:true});
});

app.use(express.json({limit:'50kb'}));
app.get('/web',(req,res)=>res.redirect(301,'/'));
app.get('/web/',(req,res)=>res.redirect(301,'/'));
app.get('/favicon.ico',(req,res)=>res.sendFile(path.join(__dirname,'favicon.png')));
app.use('/data',(req,res)=>res.status(404).send('Not found'));
app.use(express.static(__dirname,{extensions:['html'],dotfiles:'deny',maxAge:process.env.NODE_ENV==='production'?'1h':0}));

app.get('/api/health',(req,res)=>res.json({ok:true,paymentConfigured:Boolean(stripe&&process.env.STRIPE_WEBHOOK_SECRET),emailConfigured:Boolean(process.env.SMTP_HOST&&process.env.SMTP_USER&&process.env.SMTP_PASS),minDate:minDate(),bookingCutoffHour:BOOKING_CUTOFF_HOUR,bookingTimeZone:BOOKING_TIME_ZONE,products:TOURS.map(t=>({id:t.id,price:t.price}))}));
app.get('/api/tours',(req,res)=>res.json({tours:TOURS,currency:'EUR',minGuests:2,minDate:minDate(),bookingCutoffHour:BOOKING_CUTOFF_HOUR,bookingTimeZone:BOOKING_TIME_ZONE,languages:LANGUAGES,cancellationPolicyHours:48}));
app.get('/api/availability',(req,res)=>{const tour=tourById(req.query.tourId),date=text(req.query.date,10);if(!tour||!validDate(date))return res.status(400).json({error:'Invalid tour or date.'});res.json({available:true})});

let checkoutQueue=Promise.resolve();
async function createCheckout(req,res){
 try{
  if(!stripe)return res.status(503).json({error:'Secure card payment is not configured yet.'});
  const p=req.body||{},tour=tourById(p.tourId),persons=Number(p.persons),customerEmail=email(p.email),customerName=text(p.name,120),tourLanguage=text(p.tourLanguage,2),pickup=text(p.pickup,500),attempt=text(p.bookingAttemptId||req.get('Idempotency-Key'),100);
  if(!tour)return res.status(404).json({error:'Tour not found.'});
  if(!Number.isInteger(persons)||persons<2||persons>30)return res.status(400).json({error:'Minimum booking is 2 guests.'});
  if(!validDate(p.date))return res.status(400).json({error:'Bookings close at 7:00 pm Lisbon time on the day before the tour.'});
  if(!customerName||!customerEmail||!LANGUAGES.includes(tourLanguage)||!pickup||!attempt)return res.status(400).json({error:'Please check the booking details.'});
  const bookings=readBookings(),existing=bookings.find(b=>b.bookingAttemptId===attempt);
  if(existing?.checkoutUrl&&Date.parse(existing.checkoutExpiresAt||'')>Date.now())return res.json({checkoutUrl:existing.checkoutUrl,reference:existing.reference});
  const ref=reference(),lng=['en','pt','es'].includes(p.lang)?p.lang:'en',tourName=tour.name[lng]||tour.name.en,totalPrice=tour.price*persons;
  const session=await stripe.checkout.sessions.create({mode:'payment',customer_email:customerEmail,locale:lng==='pt'?'pt-BR':lng,automatic_payment_methods:{enabled:true},line_items:[{quantity:persons,price_data:{currency:'eur',unit_amount:tour.price*100,product_data:{name:tourName,description:`${tour.duration} · hotel pickup & return · guided in ${tourLanguage.toUpperCase()}`}}}],metadata:{reference:ref,tourId:tour.id,date:p.date,persons:String(persons),tourLanguage},payment_intent_data:{metadata:{reference:ref}},success_url:`${SITE_URL}/thank-you/?session_id={CHECKOUT_SESSION_ID}&ref=${encodeURIComponent(ref)}`,cancel_url:`${SITE_URL}/?book=${encodeURIComponent(tour.id)}&payment=cancelled&lang=${encodeURIComponent(lng)}`,expires_at:Math.floor(Date.now()/1000)+30*60},{idempotencyKey:attempt});
  const booking={reference:ref,bookingAttemptId:attempt,tourId:tour.id,tourName,lang:lng,date:p.date,persons,tourLanguage,pickup,requests:text(p.requests,1000),unitPrice:tour.price,totalPrice,currency:'EUR',customerName,customerEmail,customerPhone:text(p.phone,60),status:'awaiting_payment',stripeSessionId:session.id,checkoutUrl:session.url,checkoutExpiresAt:new Date(session.expires_at*1000).toISOString(),createdAt:new Date().toISOString()};
  bookings.push(booking);writeBookings(bookings);res.json({checkoutUrl:session.url,reference:ref});
 }catch(e){console.error('Checkout failed:',e.message);res.status(500).json({error:'Secure payment could not be started.'})}
}
app.post('/api/create-checkout-session',(req,res)=>{const current=checkoutQueue.then(()=>createCheckout(req,res));checkoutQueue=current.catch(()=>{});return current});

app.get('/api/bookings/:ref',async(req,res)=>{
 const items=readBookings();let b=items.find(x=>x.reference===req.params.ref);if(!b)return res.status(404).json({error:'Booking not found.'});
 if(!req.query.sessionId||req.query.sessionId!==b.stripeSessionId)return res.status(403).json({error:'Booking verification is required.'});
 if(stripe&&b.status==='awaiting_payment'){try{const s=await stripe.checkout.sessions.retrieve(b.stripeSessionId);if(s.payment_status==='paid'){b.status='confirmed';b.paidAt=new Date().toISOString();b.stripePaymentIntentId=s.payment_intent;writeBookings(items);sendConfirmation(b).catch(e=>console.error('Email failed:',e.message))}}catch(e){console.error('Payment refresh failed:',e.message)}}
 res.json(publicBooking(b));
});

app.use('/api',(req,res)=>res.status(404).json({error:'Not found.'}));
if(require.main===module)app.listen(PORT,()=>console.log(`About Culture Things running at ${SITE_URL}`));
module.exports={app,minDate,validDate};
