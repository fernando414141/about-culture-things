const {test}=require('node:test');
const assert=require('node:assert/strict');
const mailer=require('nodemailer');
const createTransport=mailer.createTransport.bind(mailer);
let mail,compiled;
// Compile real MIME with Nodemailer, but never contact an SMTP server.
mailer.createTransport=()=>({async sendMail(value){mail=value;compiled=await createTransport({streamTransport:true,buffer:true,newline:'unix'}).sendMail(value)}});
process.env.SMTP_HOST='smtp.test.invalid';process.env.SMTP_USER='test@example.com';process.env.SMTP_PASS='test-only';
const {sendConfirmation}=require('../lib/booking');
for(const [lang,phrase]of [['en','Booking confirmed'],['es','Reserva confirmada'],['pt','Reserva confirmada']])test(`confirmation email compiles in ${lang}, with correct walking calendar`,async()=>{assert.equal(await sendConfirmation({tourId:'walk',lang,reference:'ACT-TEST',date:'2099-10-26',tourName:'Sintra',persons:2,customerName:'<script>bad</script>',customerEmail:'guest@example.com',tourLanguage:lang,totalPrice:49,pickup:'Sintra'}),true);assert.ok(mail.subject.startsWith(phrase));assert.ok(!mail.html.includes('<script>'));assert.match(mail.attachments[0].content,/DTSTART;TZID=Europe\/Lisbon:20991026T093000/);assert.match(mail.attachments[0].content,/DTEND;TZID=Europe\/Lisbon:20991026T113000/);assert.ok(compiled.message.length>500)});
