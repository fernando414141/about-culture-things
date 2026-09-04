const crypto=require('crypto');
const nodemailer=require('nodemailer');
const Stripe=require('stripe');

const TOURS=[
 {id:'sintra',price:75,duration:'8 h',name:{en:'Sintra, Cabo da Roca & Cascais',pt:'Sintra, Cabo da Roca e Cascais',es:'Sintra, Cabo da Roca y Cascais'}},
 {id:'fatima',price:105,duration:'10 h',name:{en:'Fátima, Nazaré & Óbidos',pt:'Fátima, Nazaré e Óbidos',es:'Fátima, Nazaré y Óbidos'}},
 {id:'evora',price:105,duration:'10 h',name:{en:'Évora & Alentejo',pt:'Évora e Alentejo',es:'Évora y Alentejo'}}
];
const LANGUAGES=['en','es','pt'];
const MIN_GUESTS=2;
const MAX_GUESTS=4;
const BOOKING_CUTOFF_HOUR=19;
const BOOKING_TIME_ZONE='Europe/Lisbon';
const SITE_URL=(process.env.SITE_URL||'https://aboutculturethings.com').replace(/\/$/,'');
const stripe=process.env.STRIPE_SECRET_KEY&&!/placeholder/i.test(process.env.STRIPE_SECRET_KEY)?new Stripe(process.env.STRIPE_SECRET_KEY):null;
function text(v,max=500){return String(v||'').trim().slice(0,max)}
function email(v){const x=text(v,254).toLowerCase();return/^\S+@\S+\.\S+$/.test(x)?x:''}
function reference(){return'ACT-'+crypto.randomBytes(8).toString('hex').toUpperCase()}
function tourById(id){return TOURS.find(t=>t.id===id)}
function minDate(now=new Date()){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:BOOKING_TIME_ZONE,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hourCycle:'h23'}).formatToParts(now).filter(p=>p.type!=='literal').map(p=>[p.type,Number(p.value)]));
 const d=new Date(Date.UTC(parts.year,parts.month-1,parts.day+(parts.hour>=BOOKING_CUTOFF_HOUR?2:1)));
 return d.toISOString().slice(0,10);
}
function validDate(v){return/^\d{4}-\d{2}-\d{2}$/.test(v||'')&&v>=minDate()}
function calendarInvite(b){const d=(b.date||'').replace(/-/g,'');const esc=v=>String(v||'').replace(/([,;\\])/g,'\\$1').replace(/\n/g,'\\n');return['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//About Culture Things//Bookings//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',`UID:${esc(b.reference)}@aboutculturethings.com`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z')}`,`DTSTART;TZID=Europe/Lisbon:${d}T083000`,`DTEND;TZID=Europe/Lisbon:${d}T173000`,`SUMMARY:${esc(b.tourName)} · ${esc(b.customerName)}`,`DESCRIPTION:${esc(`${b.persons} guests · ${b.tourLanguage.toUpperCase()} · ${b.customerEmail} · ${b.customerPhone||''} · ${b.requests||''}`)}`,`LOCATION:${esc(b.pickup)}`,'END:VEVENT','END:VCALENDAR'].join('\r\n')}
async function sendConfirmation(b){const host=process.env.SMTP_HOST||process.env.EMAIL_HOST,user=process.env.SMTP_USER||process.env.EMAIL_USER,pass=process.env.SMTP_PASS||process.env.EMAIL_PASS;if(!host||!user||!pass||/placeholder/i.test(pass))return false;const port=Number(process.env.SMTP_PORT||587);const transport=nodemailer.createTransport({host,port,secure:port===465||String(process.env.SMTP_SECURE)==='true',auth:{user,pass}});const esc=v=>String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const html=`<div style="max-width:620px;margin:auto;font:15px/1.6 Arial;color:#1f2b28"><div style="padding:28px;background:#153b32;color:#fff"><h1 style="margin:0;font:30px Georgia">About Culture Things</h1><p>Booking confirmed · ${esc(b.reference)}</p></div><div style="padding:28px;border:1px solid #ddd"><p>Dear ${esc(b.customerName)},</p><p>Your payment is confirmed. We will contact you before the tour if we need to coordinate pickup details.</p><table style="width:100%"><tr><td>Tour</td><td><strong>${esc(b.tourName)}</strong></td></tr><tr><td>Date</td><td>${esc(b.date)}</td></tr><tr><td>Guests</td><td>${b.persons}</td></tr><tr><td>Language</td><td>${esc(b.tourLanguage.toUpperCase())}</td></tr><tr><td>Pickup & return</td><td>${esc(b.pickup)}</td></tr><tr><td>Total paid</td><td><strong>€${b.totalPrice} EUR</strong></td></tr></table><p>Free cancellation is available until 48 hours before departure.</p><p>RNAAT Nº 726/2024</p></div></div>`;await transport.sendMail({from:process.env.SMTP_FROM||user,to:b.customerEmail,bcc:process.env.ADMIN_EMAIL||process.env.NOTIFICATION_EMAIL||'aboutculturethings@gmail.com',subject:`Booking confirmed ${b.reference} · ${b.tourName}`,html,attachments:[{filename:`${b.reference}.ics`,content:calendarInvite(b),contentType:'text/calendar; charset=utf-8; method=PUBLISH'}]});return true}
function bookingFromSession(s){const m=s.metadata||{};return{reference:m.reference,tourName:m.tourName,date:m.date,persons:Number(m.persons||0),tourLanguage:m.tourLanguage||'',pickup:m.pickup||'',requests:m.requests||'',customerName:m.customerName||'',customerEmail:s.customer_details?.email||s.customer_email||m.customerEmail||'',customerPhone:m.customerPhone||'',totalPrice:Number(s.amount_total||0)/100,currency:String(s.currency||'eur').toUpperCase(),status:s.payment_status==='paid'?'confirmed':'awaiting_payment'}}
module.exports={TOURS,LANGUAGES,MIN_GUESTS,MAX_GUESTS,BOOKING_CUTOFF_HOUR,BOOKING_TIME_ZONE,SITE_URL,stripe,text,email,reference,tourById,minDate,validDate,sendConfirmation,bookingFromSession};