'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const read=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');

test('homepage exposes all three tour pages to search engines without depending on Bókun',()=>{
 const html=read('index.html');
 const expected=['sintra-coast','private-sintra','sintra-walk'];
 for(const slug of expected)assert.match(html,new RegExp('href="/experiences/'+slug+'/"'));
 assert.equal((html.match(/data-tour-link=/g)||[]).length,3);
 assert.match(html,/product-list\/115653/);
 assert.match(html,/web\/refined\.css\?v=9/);
});

test('directory translations and language-aware links exist',()=>{
 const js=read('web/app.js');
 for(const key of ['directoryShared','directoryPrivate','directoryWalk','directoryCta']){
  assert.equal((js.match(new RegExp('"'+key+'"','g'))||[]).length,3);
 }
 assert.match(js,/data-tour-link/);
 assert.match(js,/a\.search='\?lang='\+lang\(\)/);
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
