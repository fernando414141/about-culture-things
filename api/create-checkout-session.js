const {stripe,SITE_URL,text,email,validEmailDomain,reference,tourById,validDate,LANGUAGES,MIN_GUESTS,MAX_GUESTS}=require('../lib/booking');
const {isBlocked}=require('../lib/availability');

function fail(res,status,code,error){return res.status(status).json({code,error})}

module.exports=async function handler(req,res){
 if(req.method!=='POST')return fail(res,405,'METHOD_NOT_ALLOWED','Method not allowed.');
 try{
  if(!stripe)return fail(res,503,'PAYMENT_UNAVAILABLE','Secure card payment is not configured yet.');
  const p=req.body||{},tour=tourById(p.tourId),persons=Number(p.persons),customerEmail=email(p.email),customerName=text(p.name,120),tourLanguage=text(p.tourLanguage,2),pickup=text(p.pickup,500)||'To be confirmed',attempt=text(p.bookingAttemptId||req.headers['idempotency-key'],100);
  if(!tour)return fail(res,404,'TOUR_NOT_FOUND','Tour not found.');
  if(!Number.isInteger(persons)||persons<MIN_GUESTS||persons>MAX_GUESTS)return fail(res,400,'INVALID_GUESTS',`Each booking must include between ${MIN_GUESTS} and ${MAX_GUESTS} guests.`);
  if(!validDate(p.date))return fail(res,400,'INVALID_DATE','Online bookings require at least 24 hours notice based on Lisbon time.');
  if(!customerName)return fail(res,400,'INVALID_NAME','Please enter your full name.');
  if(!customerEmail)return fail(res,400,'INVALID_EMAIL','Please enter a valid email address.');
  if(!LANGUAGES.includes(tourLanguage))return fail(res,400,'INVALID_LANGUAGE','Please choose a tour language.');
  if(!attempt)return fail(res,400,'INVALID_ATTEMPT','Please try again.');
  if(!(await validEmailDomain(customerEmail)))return fail(res,400,'INVALID_EMAIL','Please enter an email address that can receive booking confirmation.');
  if(await isBlocked(p.date))return fail(res,409,'DATE_UNAVAILABLE','This date is not available. Please choose another day.');
  const lng=['en','pt','es'].includes(p.lang)?p.lang:'en',tourName=tour.name[lng]||tour.name.en,ref=reference();
  const metadata={reference:ref,tourId:tour.id,tourName,date:p.date,persons:String(persons),tourLanguage,pickup,customerName,customerEmail,customerPhone:text(p.phone,60),requests:text(p.requests,500)};
  const session=await stripe.checkout.sessions.create({mode:'payment',customer_email:customerEmail,locale:lng==='pt'?'pt-BR':lng,payment_method_types:['card'],line_items:[{quantity:persons,price_data:{currency:'eur',unit_amount:tour.price*100,product_data:{name:tourName,description:`${tour.duration} · hotel pickup & return · guided in ${tourLanguage.toUpperCase()}`}}}],metadata,payment_intent_data:{metadata:{reference:ref,tourId:tour.id,date:p.date}},success_url:`${SITE_URL}/thank-you/?session_id={CHECKOUT_SESSION_ID}&ref=${encodeURIComponent(ref)}`,cancel_url:`${SITE_URL}/?book=${encodeURIComponent(tour.id)}&payment=cancelled&lang=${encodeURIComponent(lng)}`,expires_at:Math.floor(Date.now()/1000)+30*60},{idempotencyKey:attempt});
  return res.status(200).json({checkoutUrl:session.url,reference:ref});
 }catch(error){console.error('Checkout failed:',error.message);return fail(res,500,'CHECKOUT_FAILED','Secure payment could not be started.')}
};