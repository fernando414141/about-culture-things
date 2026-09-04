const {stripe,SITE_URL,text,email,reference,tourById,validDate,LANGUAGES,MIN_GUESTS,MAX_GUESTS}=require('../lib/booking');
const {isBlocked}=require('../lib/availability');
module.exports=async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed.'});
 try{
  if(!stripe)return res.status(503).json({error:'Secure card payment is not configured yet.'});
  const p=req.body||{},tour=tourById(p.tourId),persons=Number(p.persons),customerEmail=email(p.email),customerName=text(p.name,120),tourLanguage=text(p.tourLanguage,2),pickup=text(p.pickup,500),attempt=text(p.bookingAttemptId||req.headers['idempotency-key'],100);
  if(!tour)return res.status(404).json({error:'Tour not found.'});
  if(!Number.isInteger(persons)||persons<MIN_GUESTS||persons>MAX_GUESTS)return res.status(400).json({error:`Each booking must include between ${MIN_GUESTS} and ${MAX_GUESTS} guests.`});
  if(!validDate(p.date))return res.status(400).json({error:'Bookings close at 7:00 pm Lisbon time on the day before the tour.'});
  if(!customerName||!customerEmail||!LANGUAGES.includes(tourLanguage)||!pickup||!attempt)return res.status(400).json({error:'Please check the booking details.'});
  if(await isBlocked(p.date))return res.status(409).json({error:'This date is not available. Please choose another day.'});
  const lng=['en','pt','es'].includes(p.lang)?p.lang:'en',tourName=tour.name[lng]||tour.name.en,ref=reference();
  const metadata={reference:ref,tourId:tour.id,tourName,date:p.date,persons:String(persons),tourLanguage,pickup,customerName,customerEmail,customerPhone:text(p.phone,60),requests:text(p.requests,500)};
  const session=await stripe.checkout.sessions.create({mode:'payment',customer_email:customerEmail,locale:lng==='pt'?'pt-BR':lng,payment_method_types:['card'],line_items:[{quantity:persons,price_data:{currency:'eur',unit_amount:tour.price*100,product_data:{name:tourName,description:`${tour.duration} · hotel pickup & return · guided in ${tourLanguage.toUpperCase()}`}}}],metadata,payment_intent_data:{metadata:{reference:ref,tourId:tour.id,date:p.date}},success_url:`${SITE_URL}/thank-you/?session_id={CHECKOUT_SESSION_ID}&ref=${encodeURIComponent(ref)}`,cancel_url:`${SITE_URL}/?book=${encodeURIComponent(tour.id)}&payment=cancelled&lang=${encodeURIComponent(lng)}`,expires_at:Math.floor(Date.now()/1000)+30*60},{idempotencyKey:attempt});
  res.status(200).json({checkoutUrl:session.url,reference:ref});
 }catch(error){console.error('Checkout failed:',error.message);res.status(500).json({error:'Secure payment could not be started.'})}
};
