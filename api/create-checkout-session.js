const {stripe,SITE_URL,text,email,validEmailDomain,tourById,validDate,validTourDate,LANGUAGES}=require('../lib/booking');
const crypto=require('crypto');
const {isBlocked}=require('../lib/availability');

function fail(res,status,code,error){return res.status(status).json({code,error})}

module.exports=async function handler(req,res){
 if(req.method!=='POST')return fail(res,405,'METHOD_NOT_ALLOWED','Method not allowed.');
 try{
  if(!stripe)return fail(res,503,'PAYMENT_UNAVAILABLE','Secure card payment is not configured yet.');
  const p=req.body||{},tour=tourById(p.tourId),persons=Number(p.persons),customerEmail=email(p.email),customerName=text(p.name,120),tourLanguage=text(p.tourLanguage,2),pickup=text(p.pickup,500),attempt=text(p.bookingAttemptId||req.headers['idempotency-key'],100);
  if(!tour)return fail(res,404,'TOUR_NOT_FOUND','Tour not found.');
  if(!Number.isInteger(persons)||persons<tour.minGuests||persons>tour.maxGuests)return fail(res,400,'INVALID_GUESTS',`Each booking must include between ${tour.minGuests} and ${tour.maxGuests} guests.`);
  if(!validDate(p.date))return fail(res,400,'INVALID_DATE','Book by 7:00 pm Lisbon time on the previous day.');
  if(!validTourDate(tour,p.date))return fail(res,400,'INVALID_WEEKDAY','The walking tour runs Monday to Friday.');
  if(p.time&&p.time!==tour.startTime)return fail(res,400,'INVALID_TIME','Please choose the scheduled departure.');
  if(!customerName)return fail(res,400,'INVALID_NAME','Please enter your full name.');
  if(!customerEmail)return fail(res,400,'INVALID_EMAIL','Please enter a valid email address.');
  if(!LANGUAGES.includes(tourLanguage))return fail(res,400,'INVALID_LANGUAGE','Please choose a tour language.');
  const attemptCreatedAt=Number(p.bookingAttemptCreatedAt);
  if(!Number.isInteger(attemptCreatedAt)||attemptCreatedAt>Date.now()+60000||Date.now()-attemptCreatedAt>30*60*1000)return fail(res,400,'EXPIRED_ATTEMPT','Please restart this payment attempt.');
  if(!attempt)return fail(res,400,'INVALID_ATTEMPT','Please try again.');
  if(!(await validEmailDomain(customerEmail)))return fail(res,400,'INVALID_EMAIL','Please enter an email address that can receive booking confirmation.');
  if(await isBlocked(p.date))return fail(res,409,'DATE_UNAVAILABLE','This date is not available. Please choose another day.');
  const lng=['en','pt','es'].includes(p.lang)?p.lang:'en',tourName=tour.name[lng]||tour.name.en,ref='ACT-'+crypto.createHash('sha256').update(attempt).digest('hex').slice(0,16).toUpperCase();
  const metadata={reference:ref,lang:lng,tourId:tour.id,tourName,date:p.date,startTime:tour.startTime,persons:String(persons),tourLanguage,pickup:tour.id==='walk'?'Câmara Municipal de Sintra':pickup||({en:'Meeting details will be confirmed before departure',es:'Confirmaremos el punto de encuentro antes de la salida',pt:'Confirmaremos o ponto de encontro antes da partida'})[lng],customerName,customerEmail,customerPhone:text(p.phone,60),requests:text(p.requests,500)};
  const session=await stripe.checkout.sessions.create({mode:'payment',customer_email:customerEmail,locale:lng,payment_method_types:['card'],line_items:[{quantity:persons,price_data:{currency:'eur',unit_amount:Math.round(tour.price*100),product_data:{name:tourName,description:`${tour.duration} · ${persons} · ${tourLanguage.toUpperCase()}`}}}],metadata,payment_intent_data:{metadata:{reference:ref,tourId:tour.id,date:p.date}},success_url:`${SITE_URL}/thank-you/?session_id={CHECKOUT_SESSION_ID}&ref=${encodeURIComponent(ref)}&lang=${lng}`,expires_at:Math.floor(attemptCreatedAt/1000)+60*60,cancel_url:`${SITE_URL}/?book=${encodeURIComponent(tour.id)}&payment=cancelled&lang=${encodeURIComponent(lng)}`,},{idempotencyKey:attempt});
  return res.status(200).json({checkoutUrl:session.url,reference:ref});
 }catch(error){console.error('Checkout failed:',error.name);return fail(res,500,'CHECKOUT_FAILED','Secure payment could not be started.')}
};
