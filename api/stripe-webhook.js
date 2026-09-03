const {stripe,bookingFromSession,sendConfirmation,calendarConfigured,createCalendarEvent}=require('../lib/booking');
module.exports.config={api:{bodyParser:false}};
async function rawBody(req){const chunks=[];for await(const chunk of req)chunks.push(Buffer.isBuffer(chunk)?chunk:Buffer.from(chunk));return Buffer.concat(chunks)}
module.exports=async function handler(req,res){
 if(req.method!=='POST')return res.status(405).send('Method not allowed');
 if(!stripe||!process.env.STRIPE_WEBHOOK_SECRET)return res.status(503).send('Webhook is not configured');
 try{
  const body=await rawBody(req),event=stripe.webhooks.constructEvent(body,req.headers['stripe-signature'],process.env.STRIPE_WEBHOOK_SECRET);
  if(event.type==='checkout.session.completed'&&event.data.object.payment_status==='paid'){
   const session=event.data.object,booking=bookingFromSession(session),metadata={...session.metadata};
   let changed=false;
   if(metadata.confirmationSent!=='true'){
    try{const sent=await sendConfirmation(booking);if(sent){metadata.confirmationSent='true';changed=true}}catch(e){console.error('Webhook confirmation failed:',e.message)}
   }
   if(calendarConfigured()&&metadata.calendarEventCreated!=='true'){
    try{const eventCreated=await createCalendarEvent(booking);if(eventCreated){metadata.calendarEventCreated='true';metadata.calendarEventId=String(eventCreated.id||'').slice(0,200);changed=true}}catch(e){console.error('Webhook calendar failed:',e.message)}
   }
   if(changed)await stripe.checkout.sessions.update(session.id,{metadata});
  }
  res.status(200).json({received:true});
 }catch(error){console.error('Webhook failed:',error.message);res.status(400).send('Invalid webhook')}
};
