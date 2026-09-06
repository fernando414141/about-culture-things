const {stripe,SITE_URL,text,email,validEmailDomain,reference}=require('../lib/booking');

function tomorrowLisbon(){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Lisbon',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).filter(p=>p.type!=='literal').map(p=>[p.type,Number(p.value)]));
 return new Date(Date.UTC(parts.year,parts.month-1,parts.day+1)).toISOString().slice(0,10);
}

module.exports=async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed.'});
 if(!stripe)return res.status(503).json({error:'Stripe is not configured.'});
 try{
  const customerName=text(req.body?.name,120);
  const customerEmail=email(req.body?.email);
  if(!customerName)return res.status(400).json({error:'Please enter your name.'});
  if(!customerEmail||!(await validEmailDomain(customerEmail)))return res.status(400).json({error:'Please enter a valid email address.'});
  const ref=reference();
  const metadata={
   reference:ref,
   tourId:'production-test',
   tourName:'Production checkout test',
   date:tomorrowLisbon(),
   persons:'1',
   tourLanguage:'en',
   pickup:'Not applicable — payment test only',
   customerName,
   customerEmail,
   customerPhone:'',
   requests:'€1 production payment test. No tour is booked.'
  };
  const session=await stripe.checkout.sessions.create({
   mode:'payment',
   customer_email:customerEmail,
   payment_method_types:['card'],
   line_items:[{quantity:1,price_data:{currency:'eur',unit_amount:100,product_data:{name:'About Culture Things — production payment test',description:'€1 real payment to verify the live checkout, webhook and confirmation flow.'}}}],
   metadata,
   payment_intent_data:{metadata:{reference:ref,tourId:'production-test'}},
   success_url:`${SITE_URL}/test/?success=1&session_id={CHECKOUT_SESSION_ID}&ref=${encodeURIComponent(ref)}`,
   cancel_url:`${SITE_URL}/test/?cancelled=1`,
   expires_at:Math.floor(Date.now()/1000)+30*60
  });
  return res.status(200).json({checkoutUrl:session.url,reference:ref});
 }catch(error){
  console.error('Production test checkout failed:',error.message);
  return res.status(500).json({error:'Could not start the test payment.'});
 }
};
