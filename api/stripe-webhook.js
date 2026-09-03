const {stripe,bookingFromSession,sendConfirmation}=require('../lib/booking');
module.exports.config={api:{bodyParser:false}};
async function rawBody(req){const chunks=[];for await(const chunk of req)chunks.push(Buffer.isBuffer(chunk)?chunk:Buffer.from(chunk));return Buffer.concat(chunks)}
module.exports=async function handler(req,res){
 if(req.method!=='POST')return res.status(405).send('Method not allowed');
 if(!stripe||!process.env.STRIPE_WEBHOOK_SECRET)return res.status(503).send('Webhook is not configured');
 try{
  const body=await rawBody(req),event=stripe.webhooks.constructEvent(body,req.headers['stripe-signature'],process.env.STRIPE_WEBHOOK_SECRET);
  if(event.type==='checkout.session.completed'&&event.data.object.payment_status==='paid'){
   const session=event.data.object;
   if(session.metadata?.confirmationSent!=='true'){
    try{const booking=bookingFromSession(session),sent=await sendConfirmation(booking);if(sent)await stripe.checkout.sessions.update(session.id,{metadata:{...session.metadata,confirmationSent:'true'}})}catch(e){console.error('Webhook confirmation failed:',e.message)}
   }
  }
  res.status(200).json({received:true});
 }catch(error){console.error('Webhook failed:',error.message);res.status(400).send('Invalid webhook')}
};
