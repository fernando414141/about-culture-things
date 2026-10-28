const {test,after}=require('node:test');
const assert=require('node:assert/strict');
process.env.STRIPE_SECRET_KEY='';
const {app}=require('../server');
const server=app.listen(0,'127.0.0.1');
after(()=>server.close());
async function get(path,options){if(!server.listening)await new Promise(r=>server.once('listening',r));return fetch(`http://127.0.0.1:${server.address().port}${path}`,options)}
test('server exposes the same three products and their booking limits',async()=>{const d=await(await get('/api/tours')).json();assert.deepEqual(d.tours.map(t=>[t.id,t.minGuests,t.maxGuests]),[['shared',2,6],['private',2,6],['walk',1,10]])});
test('pages and optimized images load',async()=>{for(const path of ['/','/experiences/sintra-coast/','/experiences/private-sintra/','/experiences/sintra-walk/','/terms/','/privacy/','/cancellation/','/site/images/sintra-pastries-480.webp'])assert.equal((await get(path)).status,200,path)});
test('backend files and customer data are never served as static assets',async()=>{for(const path of ['/server.js','/.env','/lib/booking.js','/data/bookings.json','/package.json'])assert.equal((await get(path)).status,404,path)});
test('missing payment configuration fails safely',async()=>assert.equal((await get('/api/create-checkout-session',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})).status,503));
test('sandbox-only endpoint rejects non-test keys',async()=>assert.equal((await get('/api/create-test-checkout-session',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})).status,403));
