const {stripe,bookingFromSession}=require('../../lib/booking');
module.exports=async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({error:'Method not allowed.'});
 if(!stripe)return res.status(503).json({error:'Payment service is not configured.'});
 try{
  const ref=String(req.query.ref||''),sessionId=String(req.query.sessionId||'');
  if(!ref||!sessionId)return res.status(400).json({error:'Booking verification is required.'});
  const session=await stripe.checkout.sessions.retrieve(sessionId);
  if(session.metadata?.reference!==ref)return res.status(403).json({error:'Booking verification failed.'});
  if(session.livemode===false&&session.metadata?.tourId==='sandbox-test')return res.status(200).json({reference:ref,totalPrice:Number(session.amount_total||0)/100,status:session.payment_status==='paid'&&session.amount_total===100&&session.currency==='eur'?'test_paid':'awaiting_payment'});
  return res.status(200).json(bookingFromSession(session));
 }catch(error){console.error('Booking lookup failed:',error.name);return res.status(404).json({error:'Booking not found.'})}
};
