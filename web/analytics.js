// Consent-first Google Analytics 4 (basic Consent Mode v2).
// Analytics is never downloaded before the visitor opts in.
(function () {
  'use strict';
  var MEASUREMENT_ID = 'G-KKWYQK2LQM';
  var CONSENT_KEY = 'act-analytics-consent-v1';
  var loaded = false;
  var pendingPurchase = null;
  var banner = null;
  var locales = {
    en: {title:'Analytics cookies',text:'With your permission, we use Google Analytics to understand visits and bookings. Optional analytics stays off unless you accept.',accept:'Accept analytics',reject:'Reject analytics',settings:'Cookie settings',privacy:'Privacy policy'},
    pt: {title:'Cookies de análise',text:'Com a sua autorização, usamos o Google Analytics para compreender as visitas e reservas. A análise opcional fica desativada até aceitar.',accept:'Aceitar análise',reject:'Rejeitar análise',settings:'Definições de cookies',privacy:'Política de privacidade'},
    es: {title:'Cookies de análisis',text:'Con tu permiso, usamos Google Analytics para comprender las visitas y reservas. El análisis opcional permanece desactivado hasta que aceptes.',accept:'Aceptar análisis',reject:'Rechazar análisis',settings:'Configurar cookies',privacy:'Política de privacidad'}
  };
  function getChoice() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (_) { return null; }
  }
  function language() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    var selected = document.getElementById('language') || document.getElementById('legal-language');
    var value = fromUrl || (selected && selected.value) || (function () { try {return localStorage.getItem('act-lang');} catch (_) {return null;} })() || (navigator.language || 'en').slice(0,2);
    return locales[value] ? value : 'en';
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  // Set all four consent fields before any tag or measurement command.
  window.gtag('consent', 'default', {
    analytics_storage:'denied', ad_storage:'denied',
    ad_user_data:'denied', ad_personalization:'denied'
  });
  function startAnalytics() {
    if (loaded || getChoice() !== 'accepted') return;
    loaded = true;
    window.gtag('consent', 'update', {
      analytics_storage:'granted', ad_storage:'denied',
      ad_user_data:'denied', ad_personalization:'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID);
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(tag);
    flushPurchase();
  }
  function track(name, params) {
    if (!loaded || getChoice() !== 'accepted') return;
    window.gtag('event', name, params || {});
  }
  function flushPurchase() {
    if (!pendingPurchase || getChoice() !== 'accepted') return;
    var sale = pendingPurchase;
    pendingPurchase = null;
    // Prevent refreshes/repeated payment-status checks from duplicating a purchase.
    var key = 'act-ga-purchase-' + sale.transaction_id;
    try { if (sessionStorage.getItem(key)) return; } catch (_) {}
    track('purchase', sale);
    try { sessionStorage.setItem(key, '1'); } catch (_) {}
  }
  function purchase(sale) {
    if (!sale || !sale.transaction_id || !Number.isFinite(Number(sale.value))) return;
    pendingPurchase = {
      transaction_id:String(sale.transaction_id),
      value:Number(sale.value),
      currency:'EUR',
      items:[{item_id:String(sale.tourId || 'tour'), item_name:String(sale.tourName || 'Tour'),quantity:Math.max(1,Number(sale.persons)||1)}]
    };
    flushPurchase();
  }
  function closeBanner() {
    if (banner) { banner.remove(); banner = null; }
  }
  function choose(choice) {
    var previouslyAccepted = getChoice() === 'accepted';
    try { localStorage.setItem(CONSENT_KEY, choice); } catch (_) { return; }
    closeBanner();
    if (choice === 'accepted') {
      startAnalytics();
      return;
    }
    window.gtag('consent', 'update', {
      analytics_storage:'denied', ad_storage:'denied',
      ad_user_data:'denied', ad_personalization:'denied'
    });
    // Remove a previously loaded tag from this page without sending more data.
    if (previouslyAccepted) location.reload();
  }
  function showBanner() {
    closeBanner();
    var t = locales[language()];
    banner = document.createElement('section');
    banner.className = 'act-cookie-banner';
    banner.setAttribute('role','region');
    banner.setAttribute('aria-label',t.title);
    var body = document.createElement('div');
    body.className = 'act-cookie-body';
    var heading = document.createElement('h2'); heading.textContent = t.title;
    var paragraph = document.createElement('p'); paragraph.textContent = t.text;
    var privacy = document.createElement('a'); privacy.href='/privacy/?lang='+language(); privacy.textContent=t.privacy;
    body.append(heading,paragraph,privacy);
    var actions = document.createElement('div'); actions.className='act-cookie-actions';
    var reject = document.createElement('button');reject.type='button';reject.className='act-cookie-reject';reject.textContent=t.reject;
    var accept = document.createElement('button');accept.type='button';accept.className='act-cookie-accept';accept.textContent=t.accept;
    reject.addEventListener('click',function(){choose('rejected');});
    accept.addEventListener('click',function(){choose('accepted');});
    actions.append(reject,accept);
    banner.append(body,actions);
    document.body.appendChild(banner);
  }
  function addSettingsLink() {
    var footer = document.querySelector('footer');
    if (!footer || footer.querySelector('[data-cookie-settings]')) return;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'act-cookie-settings';
    button.setAttribute('data-cookie-settings','');
    button.textContent = locales[language()].settings;
    button.addEventListener('click',showBanner);
    footer.appendChild(button);
    window.addEventListener('act:language-changed',function(){
      button.textContent=locales[language()].settings;
      if (banner) showBanner();
    });
    var legal = document.getElementById('legal-language');
    if (legal) legal.addEventListener('change',function(){button.textContent=locales[language()].settings;if (banner) showBanner();});
  }
  window.ACT_ANALYTICS = {track:track,purchase:purchase,openPreferences:showBanner};
  document.addEventListener('click',function(event) {
    var opener = event.target.closest('[data-open-tour]');
    if (opener) track('select_item',{item_list_name:'Website tours',items:[{item_id:opener.dataset.openTour}]});
  });
  addSettingsLink();
  if (getChoice() === 'accepted') startAnalytics();
  else if (getChoice() !== 'rejected') showBanner();
})();
