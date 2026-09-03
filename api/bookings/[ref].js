const {stripe,bookingFromSession,sendConfirmation}=require('../../lib/booking');
module.exports=async function handler(req,res){
 if(req.method!=='GET')return res.status(405).json({error:'Method not allowed.'});
 if(!stripe)return res.status(503).json({error:'Payment service is not configured.'});
 try{
  const ref=String(req.query.ref||''),sessionId=String(req.query.sessionId||'');
  if(!ref||!sessionId)return res.status(400).json({error:'Booking verification is required.'});
  const session=await stripe.checkout.sessions.retrieve(sessionId);
  if(session.metadata?.reference!==ref)return res.status(403).json({error:'Booking verification failed.'});
  const booking=bookingFromSession(session);
  if(booking.status==='confirmed'&&session.metadata?.confirmationSent!=='true'){
    try{const sent=await sendConfirmation(booking);if(sent)await stripe.checkout.sessions.update(session.id,{metadata:{...session.metadata,confirmationSent:'true'}})}catch(e){console.error('Confirmation email failed:',e.message)}
  }
  res.status(200).json(booking);
 }catch(error){console.error('Booking lookup failed:',error.message);res.status(404).json({error:'Booking not found.'})}
};
