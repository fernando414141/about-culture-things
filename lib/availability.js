const crypto=require('crypto');
const Stripe=require('stripe');

const stripe=process.env.STRIPE_SECRET_KEY&&!/placeholder/i.test(process.env.STRIPE_SECRET_KEY)?new Stripe(process.env.STRIPE_SECRET_KEY):null;
const STORE_FLAG='act_availability_store';
const PASSWORD_HASH='dfd81a00c21a7f538b2f9ad68011cb655956d55c172b8e03ebb07695259e462a';

function configured(){return Boolean(stripe)}
function validDate(v){return /^\d{4}-\d{2}-\d{2}$/.test(String(v||''))}
function dateFrom(s){const [y,m,d]=s.split('-').map(Number);return new Date(Date.UTC(y,m-1,d))}
function dateString(d){return d.toISOString().slice(0,10)}
function nextDay(s){const d=dateFrom(s);d.setUTCDate(d.getUTCDate()+1);return dateString(d)}
function expandRanges(value){
 const out=[];
 for(const part of String(value||'').split(',').filter(Boolean)){
  const [start,end=start]=part.split(':');
  if(!validDate(start)||!validDate(end)||start>end)continue;
  for(let d=start;d<=end;d=nextDay(d)){out.push(d);if(out.length>1500)break}
 }
 return [...new Set(out)].sort();
}
function compressDates(dates){
 const a=[...new Set((dates||[]).filter(validDate))].sort();
 const ranges=[];
 for(let i=0;i<a.length;i++){
  const start=a[i];let end=start;
  while(i+1<a.length&&a[i+1]===nextDay(end)){end=a[++i]}
  ranges.push(start===end?start:`${start}:${end}`);
 }
 return ranges.join(',');
}
async function store(){
 if(!stripe)return null;
 let starting_after;
 do{
  const page=await stripe.products.list({limit:100,starting_after});
  const found=page.data.find(p=>p.metadata?.[STORE_FLAG]==='1');
  if(found)return found;
  if(!page.has_more)break;
  starting_after=page.data[page.data.length-1]?.id;
 }while(starting_after);
 return stripe.products.create({name:'About Culture Things — Availability',description:'Internal availability settings. Do not delete.',metadata:{[STORE_FLAG]:'1',blocked_ranges:''}});
}
async function blockedDates(){const p=await store();return p?expandRanges(p.metadata?.blocked_ranges):[]}
async function isBlocked(date){if(!validDate(date))return false;return (await blockedDates()).includes(date)}
async function updateDates(action,dates){
 if(!stripe)throw new Error('Stripe is not configured.');
 const p=await store(),set=new Set(expandRanges(p.metadata?.blocked_ranges));
 for(const d of [...new Set((dates||[]).filter(validDate))]) action==='unblock'?set.delete(d):set.add(d);
 const blocked_ranges=compressDates([...set]);
 if(blocked_ranges.length>480)throw new Error('Too many separate blocked periods.');
 await stripe.products.update(p.id,{metadata:{...p.metadata,[STORE_FLAG]:'1',blocked_ranges}});
 return expandRanges(blocked_ranges);
}
function adminAuthorized(value){
 const actual=crypto.createHash('sha256').update(String(value||'')).digest('hex');
 return crypto.timingSafeEqual(Buffer.from(actual),Buffer.from(PASSWORD_HASH));
}
module.exports={configured,validDate,blockedDates,isBlocked,updateDates,adminAuthorized};
