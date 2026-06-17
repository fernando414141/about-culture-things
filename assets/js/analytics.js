/**
 * Analytics readiness layer — GTM / GA4 stub with conversion event tracking.
 * Set SITE.analytics.gtmId or SITE.analytics.ga4Id in site-config.js.
 */
(function () {
  window.dataLayer = window.dataLayer || [];

  function pushEvent(name, params) {
    if (typeof SITE === 'undefined' || !SITE.analytics || !SITE.analytics.enabled) return;
    var payload = Object.assign({ event: name, page_path: location.pathname, page_lang: document.documentElement.lang }, params || {});
    window.dataLayer.push(payload);
    if (typeof window.gtag === 'function' && SITE.analytics.ga4Id) {
      window.gtag('event', name, params || {});
    }
  }

  function initGTM() {
    if (typeof SITE === 'undefined' || !SITE.analytics || !SITE.analytics.gtmId) return;
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0];
      var j = d.createElement(s);
      var dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', SITE.analytics.gtmId);
  }

  function initGA4() {
    if (typeof SITE === 'undefined' || !SITE.analytics || !SITE.analytics.ga4Id) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + SITE.analytics.ga4Id;
    document.head.appendChild(s);
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', SITE.analytics.ga4Id, { anonymize_ip: true, send_page_view: true });
  }

  function trackCtaClick(el) {
    var label = el.getAttribute('data-analytics-label')
      || el.getAttribute('data-i18n')
      || el.textContent.trim().slice(0, 80)
      || 'cta';
    var section = el.closest('section[id]');
    pushEvent('cta_click', {
      cta_label: label,
      cta_href: el.href || '',
      section_id: section ? section.id : 'global',
      link_type: el.href && el.href.indexOf('wa.me') !== -1 ? 'whatsapp' : (el.href && el.href.indexOf('mailto:') !== -1 ? 'email' : 'link')
    });
  }

  function bindTracking() {
    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-site-wa], [data-site-email], .btn-filled, .btn-massive, .fab-wa, .nav-book');
      if (!el || !el.href) return;
      trackCtaClick(el);
    }, { passive: true });

    document.addEventListener('change', function (e) {
      if (e.target && e.target.id === 'mob-lang-select') {
        pushEvent('language_change', { language: e.target.value });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initGTM();
    initGA4();
    bindTracking();
    pushEvent('page_view', { page_title: document.title });
  });

  window.siteAnalytics = { pushEvent: pushEvent };
})();
