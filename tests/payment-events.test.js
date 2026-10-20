const {test}=require('node:test');
const assert=require('node:assert/strict');
const {Readable}=require('node:stream');
const booking=require('../lib/booking');
let sent=0,canSend=true;
let session;
booking.stripe={webhooks:{constructEvent(body,signature){if(signature!=='test-valid')throw Error('signature');return JSON.parse(body)}},checkout:{sessions:{retrieve:async()=>session,update:async(id,{metadata})=>{Object.assign(session.metadata,metadata)}}}};
booking.sendConfirmation=async()=>{sent++;return canSend};
process.env.STRIPE_WEBHOOK_SECRET='test-secret';
const webhook=require('../api/stripe-webhook');
const lookup=require('../api/bookings/[ref]');
function response(){return{statusCode:200,status(n){this.statusCode=n;return this},json(body){this.body=body;return this},send(body){this.body=body;return this},setHeader(){}}}
function reset(){sent=0;canSend=true;session={id:'cs_test',status:'complete',payment_status:'paid',currency:'eur',amount_total:13720,metadata:{reference:'ACT-TEST',tourId:'shared',persons:'2',lang:'es'}}}
async function event(signature='test-valid'){const req=Readable.from([JSON.stringify({type:'checkout.session.completed',data:{object:session}})]);req.method='POST';req.headers={'stripe-signature':signature};const res=response();await webhook(req,res);return res}
test('signed paid event sends confirmation once on sequential retries',async()=>{reset();assert.equal((await event()).statusCode,200);assert.equal((await event()).statusCode,200);assert.equal(sent,1)});
test('forged signature cannot confirm a booking',async()=>{reset();assert.equal((await event('forged')).statusCode,400);assert.equal(sent,0)});
test('unpaid and underpaid sessions do not send confirmation',async()=>{reset();session.payment_status='unpaid';await event();assert.equal(sent,0);session.payment_status='paid';session.amount_total=1;assert.equal((await event()).statusCode,400);assert.equal(sent,0)});
test('mail failure returns retryable status and does not mark delivered',async()=>{reset();canSend=false;assert.equal((await event()).statusCode,500);assert.notEqual(session.metadata.confirmationSent,'true');canSend=true;assert.equal((await event()).statusCode,200);assert.equal(session.metadata.confirmationSent,'true')});
test('booking lookup checks both session and reference',async()=>{reset();const res=response();await lookup({method:'GET',query:{ref:'WRONG',sessionId:'cs_test'}},res);assert.equal(res.statusCode,403)});
test('booking lookup never trusts return URL as payment proof',async()=>{reset();session.payment_status='unpaid';const res=response();await lookup({method:'GET',query:{ref:'ACT-TEST',sessionId:'cs_test'}},res);assert.equal(res.body.status,'awaiting_payment')});
