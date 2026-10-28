'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');

test('homepage renders exactly one Bókun tour catalogue',()=>{
 const html=read('index.html');
 assert.ok(html.includes('product-list/115653'));
 assert.doesNotMatch(html,/class="tour-directory"/);
 assert.equal((html.match(/data-tour-link=/g)||[]).length,0);
 assert.ok(html.includes('web/refined.css?v=10'));
});

test('booking copy is translated while the redundant tour directory is removed',()=>{
 const js=read('web/app.js');
 assert.equal((js.match(/"productListHint"/g)||[]).length,3);
 assert.doesNotMatch(js,/"directoryShared"/);
 assert.doesNotMatch(js,/data-tour-link/);
 assert.match(js,/private bookings are priced per group/);
});

test('tour detail pages use the current shared CSS and JavaScript assets',()=>{
 for(const slug of ['sintra-coast','private-sintra','sintra-walk']){
  const html=read('experiences/'+slug+'/index.html');
  assert.ok(html.includes('web/refined.css?v=10'),slug);
  assert.ok(html.includes('web/app.js?v=19'),slug);
 }
});

test('the walking tour advertises only its supported guide languages',()=>{
 const html=read('experiences/sintra-walk/index.html');
 assert.ok(html.includes('"inLanguage":["en","es"]'));
});

test('individual tour links stay discoverable without a second visible tour directory',()=>{
 const html=read('index.html');
 const start=html.indexOf('<noscript>'),end=html.indexOf('</noscript>',start);
 assert.ok(start>=0&&end>start,'missing no-JavaScript fallback');
 const noscript=html.slice(start,end);
 for(const slug of ['sintra-coast','private-sintra','sintra-walk']){
  assert.ok(noscript.includes('href="/experiences/'+slug+'/"'),slug);
 }
 const loader=html.split('\n').find(line=>line.includes('BokunWidgetsLoader.js'));
 assert.ok(loader&&loader.includes(' defer></script>'),'Bókun loader should run after locale is set');
});

test('legal policies have accessible HTML content before scripts run',()=>{
 for(const p of ['terms','cancellation','privacy']){
  const html=read(p+'/index.html');
  const inner=html.match(/id="legal-copy"[^>]*>([\s\S]*?)<\/div>/);
  assert.ok(inner,p+' has a legal section');
  assert.match(inner[1],/<p>/,p+' should not be blank without JavaScript');
  assert.match(inner[1],/aboutculturethings@gmail\.com/,p+' provides contact');
 }
});

test('sitemap lists each tour and reflects the latest website changes',()=>{
 const xml=read('sitemap.xml');
 assert.match(xml,/2026-10-28/);
 for(const slug of ['sintra-coast','private-sintra','sintra-walk']){
  assert.match(xml,new RegExp('/experiences/'+slug+'/'));
 }
});
