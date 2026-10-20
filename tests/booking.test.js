const {test}=require('node:test');
const assert=require('node:assert/strict');
const booking=require('../lib/booking');
const availability=require('../lib/availability');
let calls=[],blocked=false;
booking.stripe={checkout:{sessions:{create:async(params,options)=>{calls.push({params,options});return{id:'cs_test_mock',url:'https://checkout.stripe.com/test',metadata:params.metadata}}}}};
booking.validEmailDomain=async()=>true;
availability.isBlocked=async()=>blocked;
const handler=require('../api/create-checkout-session');
const base={tourId:'shared',persons:2,name:'Test Guest',email:'test@domain.org',tourLanguage:'en',date:'2099-10-20',bookingAttemptId:'test-attempt-123',bookingAttemptCreatedAt:Date.now(),lang:'en'};
async function request(body,method='POST'){const res={statusCode:200,status(n){this.statusCode=n;return this},json(v){this.body=v;return this}};await handler({method,body:{...base,...body},headers:{}},res);return res}
for(const [id,max]of [['shared',6],['private',6],['walk',10]]){
 for(const n of [0,1,-1,1.5,max+1,99])test(`${id} rejects ${n} guests`,async()=>{const before=calls.length,r=await request({tourId:id,persons:n});assert.equal(r.statusCode,400);assert.equal(r.body.code,'INVALID_GUESTS');assert.equal(calls.length,before)});
 for(const n of [2,max])test(`${id} accepts ${n} and prices on server`,async()=>{const r=await request({tourId:id,persons:n,total:1,unitPrice:1,currency:'usd'});assert.equal(r.statusCode,200);const p=calls.at(-1).params;assert.equal(p.line_items[0].quantity,n);assert.equal(p.line_items[0].price_data.unit_amount,Math.round(booking.tourById(id).price*100));assert.equal(p.line_items[0].price_data.currency,'eur')});
}
test('rejects impossible, malformed and past dates',async()=>{for(const date of ['2099-02-31','2099-13-01','yesterday','2020-01-01'])assert.equal((await request({date})).body.code,'INVALID_DATE')});
test('rejects unsupported languages and product ids',async()=>{assert.equal((await request({tourLanguage:'fr'})).body.code,'INVALID_LANGUAGE');assert.equal((await request({tourId:'sintra'})).body.code,'TOUR_NOT_FOUND')});
test('requires customer and attempt',async()=>{for(const [field,code]of [['name','INVALID_NAME'],['email','INVALID_EMAIL'],['bookingAttemptId','INVALID_ATTEMPT']])assert.equal((await request({[field]:''})).body.code,code)});
test('blocked dates never reach Stripe',async()=>{blocked=true;const before=calls.length;assert.equal((await request({})).statusCode,409);assert.equal(calls.length,before);blocked=false});
test('retries have identical Stripe parameters and idempotency key',async()=>{await request({});const first=calls.at(-1);await request({});assert.deepEqual(calls.at(-1),first)});
test('Portuguese uses the Portugal checkout locale',async()=>{await request({lang:'pt'});assert.equal(calls.at(-1).params.locale,'pt')});
test('payment confirmation verifies amount, currency and guest limits',()=>{const s={payment_status:'paid',currency:'eur',amount_total:13720,metadata:{tourId:'shared',persons:'2'}};assert.equal(booking.verifiedPayment(s),true);for(const override of [{amount_total:1},{currency:'usd'},{payment_status:'unpaid'},{metadata:{tourId:'walk',persons:'1'}}])assert.equal(booking.verifiedPayment({...s,...override}),false)});
test('expired and unpaid sessions never confirm',()=>{assert.equal(booking.bookingFromSession({status:'expired'}).status,'expired');assert.equal(booking.bookingFromSession({payment_status:'unpaid'}).status,'awaiting_payment')});
test('Lisbon cutoff observes summer and winter time',()=>{assert.equal(booking.minDate(new Date('2026-10-20T17:59:00Z')),'2026-10-21');assert.equal(booking.minDate(new Date('2026-10-20T18:00:00Z')),'2026-10-22');assert.equal(booking.minDate(new Date('2026-12-20T19:00:00Z')),'2026-12-22')});
test('HTTP method restriction',async()=>assert.equal((await request({},'GET')).statusCode,405));
test('walking tour rejects weekends; vehicle tours accept them',async()=>{for(const date of ['2099-10-24','2099-10-25']){assert.equal((await request({tourId:'walk',date})).body.code,'INVALID_WEEKDAY');assert.equal((await request({tourId:'shared',date})).statusCode,200)}});
test('departure cannot be changed by a forged request',async()=>{assert.equal((await request({time:'15:00'})).body.code,'INVALID_TIME');assert.equal((await request({tourId:'walk',time:'10:00'})).statusCode,200)});
test('client and server catalogues agree on price and limits',()=>{const source=require('fs').readFileSync(require('path').join(__dirname,'../web/app.js'),'utf8');const client=JSON.parse(source.split('const TOURS=')[1].split(';\nconst COPY')[0]);for(const t of client){const server=booking.tourById(t.id);for(const key of ['price','minGuests','maxGuests','startTime'])assert.equal(t[key],server[key])}});
test('availability rejects impossible dates',()=>{assert.equal(availability.validDate('2099-02-31'),false);assert.equal(availability.validDate('2099-02-28'),true)});
test('expired or future attempt timestamps are rejected',async()=>{for(const time of [Date.now()-31*60*1000,Date.now()+120000,0])assert.equal((await request({bookingAttemptCreatedAt:time})).body.code,'EXPIRED_ATTEMPT')});
test('checkout expiration is stable and limited to one hour',async()=>{await request({});assert.equal(calls.at(-1).params.expires_at,Math.floor(base.bookingAttemptCreatedAt/1000)+3600)});
test('ECB parser accepts reference USD data and rejects malformed rates',()=>{const {parseRate}=require('../api/exchange-rate');assert.deepEqual(parseRate("<Cube time='2026-10-20'><Cube currency='USD' rate='1.1215'/></Cube>"),{rate:1.1215,date:'2026-10-20',source:'ECB'});assert.throws(()=>parseRate('<html>Error</html>'))});
test('direct discount is exactly 30 percent for all products',()=>{const source=require('fs').readFileSync(require('path').join(__dirname,'../web/app.js'),'utf8');const client=JSON.parse(source.split('const TOURS=')[1].split(';\nconst COPY')[0]);for(const t of client)assert.equal(Math.round(t.listPrice*70),Math.round(t.price*100))});
