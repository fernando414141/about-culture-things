'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');

test('homepage renders exactly one Bókun tour catalogue',()=>{
 const html=read('index.html');
 assert.match(html,/product-list\\/115653/);
 assert.doesNotMatch(html,/class="tour-directory"/);
 assert.equal((html.match(/data-tour-link=/g)||[]).length,0);
 assert.match(html,/web\\/refined\\.css\\?v=10/);
});

test('booking copy is translated while the redundant tour directory is removed',()=>{
 const js=read('web/app.js');
 assert.equal((js.match(/"productListHint"/g)||[]).length,3);
 assert.doesNotMatch(js,/"directoryShared"/);
 assert.doesNotMatch(js,/data-tour-link/);
 assert.match(js,/private bookings are priced per group/);
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
