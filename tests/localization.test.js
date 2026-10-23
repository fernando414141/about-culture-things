'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const pages=['index.html','experiences/private-sintra/index.html','experiences/sintra-coast/index.html','experiences/sintra-walk/index.html','terms/index.html','privacy/index.html','cancellation/index.html','thank-you/index.html'];

test('every public page initializes the selected language early',()=>{
 for(const page of pages){
  const html=read(page);
  assert.match(html,/document\.documentElement\.lang=l/,page);
  assert.match(html,/new URLSearchParams\(location\.search\)/,page);
 }
});

test('Bókun iframe and booking fallback preserve English Spanish Portuguese',()=>{
 const src=read('web/app.js');
 const match=src.match(/const localizedBokunUrl=id=>([^;]+);/);
 assert.ok(match,'missing locale-aware Bókun URL builder');
 for(const locale of ['en','es','pt']){
  const localized=new Function('BOKUN_CALENDARS','lang','encodeURIComponent',`return id=>${match[1]};`)({
   private:'https://widgets.bokun.io/online-sales/channel/experience-calendar/1333723'
  },()=>locale,encodeURIComponent);
  assert.equal(new URL(localized('private')).searchParams.get('lang'),locale);
 }
 assert.match(src,/data-src="\$\{localizedBokunUrl\(t\.id\)\}"/);
 assert.match(src,/href="\$\{localizedBokunUrl\(t\.id\)\}"/);
});

test('translated navigation and legal documents stay consistent',()=>{
 assert.match(read('web/mobile.js'),/encodeURIComponent\(lang\(\)\)/);
 const legal=read('template/js/legal.js');
 assert.match(legal,/Las entradas a monumentos y las comidas no están incluidas/);
 assert.match(legal,/Os bilhetes para monumentos e as refeições não estão incluídos/);
 assert.match(read('thank-you/app.js'),/pendingTotal/);
});
