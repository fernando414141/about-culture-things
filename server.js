const path=require('path');
const express=require('express');
require('dotenv').config();
const app=express();
const {minDate,validDate,TOURS,LANGUAGES}=require('./lib/booking');
// Keep local and hosted execution on the same validated handlers.
app.post('/api/stripe-webhook',require('./api/stripe-webhook'));
app.use(express.json({limit:'50kb'}));
app.all('/api/create-checkout-session',require('./api/create-checkout-session'));
app.all('/api/create-test-checkout-session',require('./api/create-test-checkout-session'));
app.all('/api/availability',require('./api/availability'));
app.all('/api/exchange-rate',require('./api/exchange-rate'));
app.all('/api/health',require('./api/health'));
app.get('/api/tours',(req,res)=>res.json({tours:TOURS,languages:LANGUAGES,currency:'EUR',minDate:minDate()}));
app.get('/api/bookings/:ref',(req,res)=>{req.query.ref=req.params.ref;return require('./api/bookings/[ref]')(req,res)});
app.use('/api',(req,res)=>res.status(404).json({error:'Not found.'}));
// Publish only web assets, never backend source or booking records.
for(const dir of ['web','site','template','experiences','terms','privacy','cancellation','thank-you','admin','test'])app.use('/'+dir,express.static(path.join(__dirname,dir),{dotfiles:'deny'}));
for(const file of ['index.html','favicon.png','apple-touch-icon.png','site.webmanifest','robots.txt','sitemap.xml','llms.txt','ai.txt'])app.get('/'+file,(req,res)=>res.sendFile(path.join(__dirname,file)));
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'index.html')));
app.get('/favicon.ico',(req,res)=>res.sendFile(path.join(__dirname,'favicon.png')));
if(require.main===module)app.listen(Number(process.env.PORT||3000),()=>console.log('About Culture Things server ready'));
module.exports={app,minDate,validDate};
