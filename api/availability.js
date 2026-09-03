const {configured,blockedDates,updateDates,adminAuthorized}=require('../lib/availability');
const {minDate,BOOKING_CUTOFF_HOUR,BOOKING_TIME_ZONE}=require('../lib/booking');
module.exports=async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 try{
  if(req.method==='GET')return res.status(200).json({ok:true,storageConfigured:configured(),blockedDates:await blockedDates(),minDate:minDate(),bookingCutoffHour:BOOKING_CUTOFF_HOUR,bookingTimeZone:BOOKING_TIME_ZONE});
  if(req.method!=='POST')return res.status(405).json({error:'Method not allowed.'});
  if(!process.env.ADMIN_AVAILABILITY_TOKEN)return res.status(503).json({error:'ADMIN_AVAILABILITY_TOKEN is not configured.'});
  if(!adminAuthorized(req.headers['x-admin-password']))return res.status(401).json({error:'Invalid password.'});
  const action=req.body?.action==='unblock'?'unblock':'block';
  const dates=Array.isArray(req.body?.dates)?req.body.dates:[];
  return res.status(200).json({ok:true,blockedDates:await updateDates(action,dates)});
 }catch(error){console.error('Availability API failed:',error.message);return res.status(500).json({error:'Availability could not be updated.'})}
};
