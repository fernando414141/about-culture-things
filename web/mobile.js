// Navigation and reduced-motion preference. Booking validation lives in app.js.
(() => {
 const header=document.querySelector('.header');
 const button=document.createElement('button');
 button.className='mobile-menu-button';button.type='button';button.textContent='☰';
 button.setAttribute('aria-controls','mobile-navigation');button.setAttribute('aria-expanded','false');
 header.querySelector('.header-actions').append(button);
 const drawer=document.createElement('nav');drawer.id='mobile-navigation';drawer.className='mobile-drawer';drawer.hidden=true;
 document.body.append(drawer);
 function close(){drawer.hidden=true;button.setAttribute('aria-expanded','false');button.textContent='☰';button.setAttribute('aria-label',c().menuOpen);document.body.classList.remove('menu-open')}
 function translate(){button.setAttribute('aria-label',drawer.hidden?c().menuOpen:c().menuClose);drawer.setAttribute('aria-label',c().menuOpen);drawer.innerHTML=`<a href="${document.body.dataset.tour?'/':''}#tours">${esc(c().navTours)}</a><a href="${document.body.dataset.tour?'/':''}#why">${esc(c().navWhy)}</a><a href="${document.body.dataset.tour?'/':''}#reviews">${esc(c().navReviews)}</a>`}
 button.addEventListener('click',()=>{if(!drawer.hidden){close();return}drawer.hidden=false;button.setAttribute('aria-expanded','true');button.setAttribute('aria-label',c().menuClose);button.textContent='×';document.body.classList.add('menu-open');drawer.querySelector('a').focus()});
 drawer.addEventListener('click',e=>{if(e.target.closest('a'))close()});
 document.addEventListener('keydown',e=>{if(drawer.hidden)return;if(e.key==='Escape'){close();button.focus()}if(e.key==='Tab'){const links=[button,...drawer.querySelectorAll('a')];if(e.shiftKey&&document.activeElement===links[0]){e.preventDefault();links.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===links.at(-1)){e.preventDefault();button.focus()}}});
 matchMedia('(min-width:1101px)').addEventListener('change',e=>{if(e.matches)close()});
 const video=document.querySelector('.hero-video');
 const motion=video?document.createElement('button'):null;function motionLabel(){if(motion)motion.textContent=({en:video.paused?'Play video':'Pause video',es:video.paused?'Reproducir vídeo':'Pausar vídeo',pt:video.paused?'Reproduzir vídeo':'Pausar vídeo'})[lang()]}if(motion){motion.type='button';motion.className='hero-motion';video.closest('.hero').querySelector('.hero-proof').append(motion);motion.addEventListener('click',()=>{if(video.paused)video.play().catch(()=>{});else video.pause()});video.addEventListener('play',motionLabel);video.addEventListener('pause',motionLabel);window.addEventListener('act:language-changed',motionLabel);motionLabel()}
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');if(video&&reduced.matches){video.autoplay=false;video.pause()}reduced.addEventListener('change',e=>{if(video&&e.matches)video.pause()});
 window.addEventListener('act:language-changed',translate);translate();
 const onScroll=()=>header.classList.toggle('scrolled',window.scrollY>24);window.addEventListener('scroll',onScroll,{passive:true});onScroll();
})();
