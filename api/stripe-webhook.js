const {stripe,verifiedPayment,bookingFromSession,sendConfirmation}=require('../lib/booking');
module.exports.config={api:{bodyParser:false}};
async function rawBody(req){const chunks=[];for await(const chunk of req)chunks.push(Buffer.isBuffer(chunk)?chunk:Buffer.from(chunk));return Buffer.concat(chunks)}
module.exports=async function handler(req,res){
 if(req.method!=='POST')return res.status(405).send('Method not allowed');
 if(!stripe||!process.env.STRIPE_WEBHOOK_SECRET)return res.status(503).send('Webhook is not configured');
 let event;
 try{event=stripe.webhooks.constructEvent(await rawBody(req),req.headers['stripe-signature'],process.env.STRIPE_WEBHOOK_SECRET)}catch{return res.status(400).send('Invalid signature')}
 try{
  if(['checkout.session.completed','checkout.session.async_payment_succeeded'].includes(event.type)&&event.data.object.payment_status==='paid'){
   const session=await stripe.checkout.sessions.retrieve(event.data.object.id);
   if(session.livemode===false&&session.metadata?.tourId==='sandbox-test')return res.status(200).json({received:true,testOnly:true});
   if(!verifiedPayment(session))return res.status(400).send('Booking payment does not match');
   if(session.metadata?.confirmationSent!=='true'){
    const sent=await sendConfirmation(bookingFromSession(session));
    if(!sent)throw new Error('Confirmation email service unavailable');
    await stripe.checkout.sessions.update(session.id,{metadata:{confirmationSent:'true',confirmationSentAt:new Date().toISOString()}});
   }
  }
  return res.status(200).json({received:true});
 }catch(error){console.error('Confirmation delivery failed:',error.name);return res.status(500).send('Confirmation delivery will be retried')}
};
