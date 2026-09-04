(()=>{
  if(!document.querySelector('link[href^="/web/booking-ux.css"]')){const l=document.createElement('link');l.rel='stylesheet';l.href='/web/booking-ux.css?v=1';document.head.appendChild(l)}
  if(!document.querySelector('link[href^="/web/booking-redesign.css"]')){const l=document.createElement('link');l.rel='stylesheet';l.href='/web/booking-redesign.css?v=2';document.head.appendChild(l)}
  if(!document.querySelector('script[src^="/web/calendar.js"]')){const s=document.createElement('script');s.src='/web/calendar.js?v=1';s.defer=true;document.head.appendChild(s)}
  if(!document.querySelector('script[src^="/web/booking-redesign.js"]')){const s=document.createElement('script');s.src='/web/booking-redesign.js?v=1';s.defer=true;document.head.appendChild(s)}

  const header=document.querySelector('.header');
  const actions=document.querySelector('.header-actions');
  if(!header||!actions)return;

  const menu=document.createElement('button');
  menu.type='button';
  menu.className='menu-toggle';
  menu.setAttribute('aria-label','Open menu');
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-controls','mobile-menu');
  menu.innerHTML='<span></span><span></span>';
  actions.appendChild(menu);

  const drawer=document.createElement('div');
  drawer.id='mobile-menu';
  drawer.className='mobile-menu';
  drawer.setAttribute('aria-hidden','true');
  drawer.innerHTML=`<div class="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Menu">
    <nav aria-label="Mobile navigation">
      <a href="#tours" data-mobile-link>Tours</a>
      <a href="#why" data-mobile-link>Why us</a>
      <a href="#reviews" data-mobile-link>Reviews</a>
    </nav>
    <div class="mobile-menu-settings">
      <label>Language<select id="mobile-language"><option value="en">English</option><option value="pt">Português</option><option value="es">Español</option><option value="fr">Français</option><option value="de">Deutsch</option></select></label>
      <label>Currency<select id="mobile-currency"><option value="EUR">EUR €</option><option value="USD">USD $</option></select></label>
    </div>
    <a class="button mobile-menu-book" href="#tours" data-mobile-link>Book now</a>
  </div>`;
  document.body.appendChild(drawer);

  const desktopLang=document.getElementById('language');
  const desktopCurrency=document.getElementById('currency');
  const mobileLang=document.getElementById('mobile-language');
  const mobileCurrency=document.getElementById('mobile-currency');
  function syncSettings(){if(desktopLang&&mobileLang)mobileLang.value=desktopLang.value;if(desktopCurrency&&mobileCurrency)mobileCurrency.value=desktopCurrency.value}
  syncSettings();
  mobileLang?.addEventListener('change',()=>{desktopLang.value=mobileLang.value;desktopLang.dispatchEvent(new Event('change',{bubbles:true}))});
  mobileCurrency?.addEventListener('change',()=>{desktopCurrency.value=mobileCurrency.value;desktopCurrency.dispatchEvent(new Event('change',{bubbles:true}))});
  desktopLang?.addEventListener('change',syncSettings);desktopCurrency?.addEventListener('change',syncSettings);

  let previousFocus=null;
  function setMenu(open){
    previousFocus=open?document.activeElement:previousFocus;
    menu.classList.toggle('is-open',open);drawer.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open));drawer.setAttribute('aria-hidden',String(!open));document.body.classList.toggle('menu-open',open);menu.setAttribute('aria-label',open?'Close menu':'Open menu');
    if(open)drawer.querySelector('a,select,button')?.focus({preventScroll:true});else if(previousFocus instanceof HTMLElement)previousFocus.focus({preventScroll:true});
  }
  menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
  drawer.addEventListener('click',e=>{if(e.target===drawer||e.target.closest('[data-mobile-link]'))setMenu(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true')setMenu(false)});
  matchMedia('(min-width:1051px)').addEventListener?.('change',e=>{if(e.matches)setMenu(false)});

  let blocked=new Set();let serverMinDate='';
  async function loadBlocked(){try{const r=await fetch('/api/availability',{cache:'no-store'});if(r.ok){const d=await r.json();blocked=new Set(d.blockedDates||[]);serverMinDate=d.minDate||serverMinDate}}catch{}}
  loadBlocked();
  function unavailableMessage(){const l=document.documentElement.lang;return l==='pt'?'Esta data não está disponível. Escolha outro dia.':l==='es'?'Esta fecha no está disponible. Elige otro día.':'This date is not available. Please choose another day.'}
  function enhanceForm(form){
    if(!form||form.dataset.mobileEnhanced)return;form.dataset.mobileEnhanced='true';
    const date=form.querySelector('input[name="date"]'),pickup=form.querySelector('input[name="pickup"]'),name=form.querySelector('input[name="name"]'),email=form.querySelector('input[name="email"]'),phone=form.querySelector('input[name="phone"]'),requests=form.querySelector('input[name="requests"], textarea[name="requests"]'),status=form.querySelector('.booking-status');
    if(date){date.autocomplete='off';date.addEventListener('change',async()=>{await loadBlocked();const unavailable=blocked.has(date.value),tooLate=Boolean(serverMinDate&&date.value<serverMinDate);if(unavailable||tooLate){date.value='';date.setCustomValidity(tooLate?'Bookings close at 7:00 pm Lisbon time on the day before the tour.':unavailableMessage());if(status)status.textContent=date.validationMessage;date.reportValidity();setTimeout(()=>date.setCustomValidity(''),200)}else date.setCustomValidity('')})}
    if(pickup){pickup.autocomplete='street-address';pickup.autocapitalize='words';pickup.enterKeyHint='next'}if(name){name.autocomplete='name';name.autocapitalize='words';name.enterKeyHint='next'}if(email){email.autocomplete='email';email.inputMode='email';email.autocapitalize='none';email.spellcheck=false;email.enterKeyHint='next'}if(phone){phone.autocomplete='tel';phone.inputMode='tel';phone.enterKeyHint='next'}if(requests){requests.autocapitalize='sentences';requests.enterKeyHint='done'}
  }
  const observer=new MutationObserver(()=>document.querySelectorAll('[data-booking-form]').forEach(enhanceForm));observer.observe(document.getElementById('dialog-content')||document.body,{childList:true,subtree:true});document.querySelectorAll('[data-booking-form]').forEach(enhanceForm);
  document.addEventListener('click',e=>{if(e.target.closest('[data-open-tour]'))setTimeout(()=>{loadBlocked();const d=document.getElementById('tour-dialog');if(d)d.scrollTop=0},80)});
  window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>12),{passive:true});header.classList.toggle('scrolled',scrollY>12);
})();
