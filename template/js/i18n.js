(function () {
  const supported = ['en','pt','es','fr','de'];
  function detect() {
    const query = new URLSearchParams(location.search).get('lang');
    if (supported.includes(query)) return query;
    const saved = localStorage.getItem('act-language'); if (supported.includes(saved)) return saved;
    const browser = (navigator.languages && navigator.languages[0] || navigator.language || 'en').slice(0,2).toLowerCase();
    return supported.includes(browser) ? browser : 'en';
  }
  function setLanguage(lang, updateUrl) {
    if (!supported.includes(lang)) lang = 'en';
    const c = SITE_CONTENT[lang], locale = SITE_CONTENT.languages[lang];
    document.documentElement.lang = locale; document.title = c.metaTitle;
    document.querySelector('meta[name="description"]').content = c.metaDescription;
    document.querySelectorAll('[data-t]').forEach(el=>{const value=c.t[el.dataset.t];if(value) el.textContent=value;});
    document.getElementById('language').value=lang; localStorage.setItem('act-language',lang); window.ACT_LANG=lang;
    if (updateUrl) { const url=new URL(location.href); url.searchParams.set('lang',lang); history.replaceState({},'',url); }
    renderSite(lang); if(window.updateStructuredData) updateStructuredData(lang); if(window.refreshBooking) refreshBooking();
  }
  document.getElementById('language').addEventListener('change',e=>setLanguage(e.target.value,true));
  document.getElementById('year').textContent=new Date().getFullYear();
  window.setSiteLanguage=setLanguage; setLanguage(detect(),false);
}());
