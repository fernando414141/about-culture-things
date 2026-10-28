const crypto=require('crypto');
const dns=require('dns').promises;
const nodemailer=require('nodemailer');
const Stripe=require('stripe');

const TOURS=[{"id": "shared", "price": 68.6, "duration": "6 h", "name": {"en": "Sintra, Cabo da Roca & Cascais — Shared Tour", "pt": "Sintra, Cabo da Roca e Cascais — Partilhado", "es": "Sintra, Cabo da Roca y Cascais — Compartido"}, "minGuests": 2, "maxGuests": 6, "startTime": "08:30", "weekdays": [0, 1, 2, 3, 4, 5, 6]}, {"id": "private", "price": 96.6, "duration": "6 h", "name": {"en": "Sintra, Cabo da Roca & Cascais — Private Tour", "pt": "Sintra, Cabo da Roca e Cascais — Privado", "es": "Sintra, Cabo da Roca y Cascais — Privado"}, "minGuests": 2, "maxGuests": 6, "startTime": "08:30", "weekdays": [0, 1, 2, 3, 4, 5, 6]}, {"id": "walk", "price": 24.5, "duration": "2 h", "name": {"en": "Sintra Walking Tour — History, Pastries & Culture", "pt": "Sintra a Pé — História, Doçaria e Cultura", "es": "Sintra a Pie — Historia, Dulces y Cultura"}, "minGuests": 1, "maxGuests": 10, "startTime": "09:30", "weekdays": [1, 2, 3, 4, 5]}];
const LANGUAGES=['en','es','pt'];
const MIN_GUESTS=2;
const MAX_GUESTS=10;
const BOOKING_CUTOFF_HOUR=19;
const BOOKING_CUTOFF_MINUTE=0;
const MIN_ADVANCE_HOURS=0;
const TOUR_START_TIME='08:30';
const BOOKING_TIME_ZONE='Europe/Lisbon';
const SITE_URL=(process.env.SITE_URL||'https://aboutculturethings.com').replace(/\/$/,'');
const stripe=process.env.STRIPE_SECRET_KEY&&!/placeholder/i.test(process.env.STRIPE_SECRET_KEY)?new Stripe(process.env.STRIPE_SECRET_KEY):null;
function text(v,max=500){return String(v||'').trim().slice(0,max)}
function email(v){const x=text(v,254).toLowerCase();return/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(x)?x:''}
async function validEmailDomain(address){
 const clean=email(address);if(!clean)return false;
 const domain=clean.split('@')[1];
 if(['example.com','example.org','example.net','invalid','localhost'].includes(domain))return false;
 const withTimeout=p=>Promise.race([p,new Promise((_,reject)=>setTimeout(()=>reject(new Error('dns timeout')),1800))]);
 try{const mx=await withTimeout(dns.resolveMx(domain));if(Array.isArray(mx)&&mx.length)return true}catch{}
 try{const a=await withTimeout(dns.resolve4(domain));if(Array.isArray(a)&&a.length)return true}catch{}
 try{const aaaa=await withTimeout(dns.resolve6(domain));return Array.isArray(aaaa)&&aaaa.length>0}catch{}
 return false;
}
function reference(){return'ACT-'+crypto.randomBytes(8).toString('hex').toUpperCase()}
function tourById(id){return TOURS.find(t=>t.id===id)}
function minDate(now=new Date()){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:BOOKING_TIME_ZONE,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).filter(p=>p.type!=='literal').map(p=>[p.type,Number(p.value)]));
 const nowMinutes=parts.hour*60+parts.minute;
 const cutoffMinutes=BOOKING_CUTOFF_HOUR*60+BOOKING_CUTOFF_MINUTE;
 const daysAhead=nowMinutes>=cutoffMinutes?2:1;
 const d=new Date(Date.UTC(parts.year,parts.month-1,parts.day+daysAhead));
 return d.toISOString().slice(0,10);
}
function validDate(v){return/^\d{4}-\d{2}-\d{2}$/.test(v||'')&&Number.isFinite(Date.parse(v))&&new Date(v).toISOString().slice(0,10)===v&&v>=minDate()}
function validTourDate(tour,date){return validDate(date)&&tour.weekdays.includes(new Date(date+'T12:00:00Z').getUTCDay())}
function calendarInvite(b){const d=(b.date||'').replace(/-/g,''),tour=tourById(b.tourId),start=(tour?.startTime||'08:30').replace(':','')+'00',end=tour?.id==='walk'?'113000':'143000';const esc=v=>String(v||'').replace(/([,;\\])/g,'\\$1').replace(/\n/g,'\\n');return['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//About Culture Things//Bookings//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',`UID:${esc(b.reference)}@aboutculturethings.com`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z')}`,`DTSTART;TZID=Europe/Lisbon:${d}T${start}`,`DTEND;TZID=Europe/Lisbon:${d}T${end}`,`SUMMARY:${esc(b.tourName)} · ${esc(b.customerName)}`,`DESCRIPTION:${esc(`${b.persons} guests · ${b.tourLanguage.toUpperCase()} · ${b.customerEmail} · ${b.customerPhone||''} · ${b.requests||''}`)}`,`LOCATION:${esc(b.pickup)}`,'END:VEVENT','END:VCALENDAR'].join('\r\n')}
async function sendConfirmation(b){
 const host=process.env.SMTP_HOST||process.env.EMAIL_HOST,user=process.env.SMTP_USER||process.env.EMAIL_USER,pass=process.env.SMTP_PASS||process.env.EMAIL_PASS;
 if(!host||!user||!pass||/placeholder/i.test(pass))return false;
 const x=require('./confirmation-copy.json')[b.lang]||require('./confirmation-copy.json').en;
 const port=Number(process.env.SMTP_PORT||587),transport=nodemailer.createTransport({host,port,secure:port===465,auth:{user,pass}});
 const esc=v=>String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const values=[b.tourName,b.date,b.persons,b.tourLanguage.toUpperCase(),b.pickup,new Intl.NumberFormat(b.lang==='pt'?'pt-PT':b.lang||'en',{style:'currency',currency:'EUR'}).format(b.totalPrice)];
 const html='<h1>'+esc(x.confirmed)+'</h1><p>'+esc(x.hello)+' '+esc(b.customerName)+'</p><p>'+esc(x.paid)+'</p><p>'+esc(b.reference)+'</p><table>'+values.map((v,i)=>'<tr><th>'+esc(x.fields[i])+'</th><td>'+esc(v)+'</td></tr>').join('')+'</table><p>'+esc(x.policy)+'</p><p>About Culture Things · RNAAT Nº 726/2024</p>';
 await transport.sendMail({from:process.env.SMTP_FROM||user,to:b.customerEmail,bcc:process.env.ADMIN_EMAIL||process.env.NOTIFICATION_EMAIL||'aboutculturethings@gmail.com',subject:x.confirmed+' '+b.reference,html,attachments:[{filename:b.reference+'.ics',content:calendarInvite(b),contentType:'text/calendar; charset=utf-8'}]});return true;
}
function verifiedPayment(s){const m=s.metadata||{},t=tourById(m.tourId),n=Number(m.persons);return Boolean(t&&Number.isInteger(n)&&n>=t.minGuests&&n<=t.maxGuests&&s.payment_status==='paid'&&s.currency==='eur'&&s.amount_total===Math.round(t.price*100)*n)}
function bookingFromSession(s){const m=s.metadata||{};return{startTime:tourById(m.tourId)?.startTime||'08:30',duration:tourById(m.tourId)?.duration||'6 h',tourId:m.tourId,lang:LANGUAGES.includes(m.lang)?m.lang:'en',reference:m.reference,tourName:m.tourName,date:m.date,persons:Number(m.persons||0),tourLanguage:m.tourLanguage||'',pickup:m.pickup||'',requests:m.requests||'',customerName:m.customerName||'',customerEmail:s.customer_details?.email||s.customer_email||m.customerEmail||'',customerPhone:m.customerPhone||'',totalPrice:Number(s.amount_total||0)/100,currency:String(s.currency||'eur').toUpperCase(),status:verifiedPayment(s)?'confirmed':s.status==='expired'?'expired':'awaiting_payment'}}
module.exports={TOURS,LANGUAGES,MIN_GUESTS,MAX_GUESTS,BOOKING_CUTOFF_HOUR,BOOKING_CUTOFF_MINUTE,MIN_ADVANCE_HOURS,TOUR_START_TIME,BOOKING_TIME_ZONE,SITE_URL,stripe,text,email,validEmailDomain,reference,tourById,minDate,validDate,validTourDate,sendConfirmation,verifiedPayment,bookingFromSession};
