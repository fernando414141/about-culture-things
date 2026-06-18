/** Link/contact adapter derived from site/content.js. */
(function () {
  const cfg = window.SITE_CONTENT || SITE_CONTENT;
  const business = cfg.business || {};
  const links = cfg.links || {};

  window.SITE = {
    url: business.url,
    name: business.name,
    shortName: business.shortName,
    email: business.email,
    phone: business.phone,
    whatsapp: business.whatsapp,
    instagram: links.instagram,
    social: links.social || {},
    legal: links.legal || {},
    tripadvisor: links.tripadvisor,
    twitter: cfg.schema && cfg.schema.twitter,
    themeColor: business.themeColor,
    heroPoster: cfg.assets && cfg.assets.hero && cfg.assets.hero.full,
    ogImage: cfg.assets && cfg.assets.ogImage,
    locale: (cfg.languages || []).reduce(function (acc, lang) {
      acc[lang.code] = lang.htmlLang;
      return acc;
    }, {}),
    geo: {
      region: business.location && business.location.geoRegion,
      placename: business.location && business.location.geoPlacename,
      position: business.location && business.location.geoPosition
    },
    credit: { url: 'https://fscdigital.com/', label: 'Website by FSC Digital' },
    analytics: {
      gtmId: '',
      ga4Id: '',
      enabled: true
    },
    waMessages: cfg.whatsappMessages || {}
  };

  function siteWhatsAppUrl(message) {
    const text = message || SITE.waMessages.default;
    return 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(text);
  }

  function siteEmailUrl(subject) {
    return 'mailto:' + SITE.email + '?subject=' + encodeURIComponent(subject || 'Tour enquiry');
  }

  function applySiteConfig() {
    document.querySelectorAll('[data-site-wa]').forEach(function (el) {
      var key = el.getAttribute('data-site-wa');
      var msg = SITE.waMessages[key] || SITE.waMessages.default;
      el.href = siteWhatsAppUrl(msg);
      if (el.getAttribute('target') === '_blank') {
        el.rel = 'noopener noreferrer';
      }
    });

    document.querySelectorAll('[data-site-email]').forEach(function (el) {
      var subject = el.getAttribute('data-site-email-subject') || 'Tour enquiry';
      el.href = siteEmailUrl(subject);
    });

    document.querySelectorAll('[data-site-instagram]').forEach(function (el) {
      el.href = SITE.instagram;
      el.rel = 'noopener noreferrer';
      el.target = '_blank';
    });

    document.querySelectorAll('[data-site-social]').forEach(function (el) {
      var network = el.getAttribute('data-site-social');
      var url = SITE.social && SITE.social[network];
      if (!url) {
        el.remove();
        return;
      }
      el.href = url;
      el.rel = 'noopener noreferrer';
      el.target = '_blank';
    });

    var privacyLink = document.querySelector('.footer-legal-link[data-i18n="footer-privacy"]');
    if (privacyLink && SITE.legal && SITE.legal.privacy) privacyLink.href = SITE.legal.privacy;
    var termsLink = document.querySelector('.footer-legal-link[data-i18n="footer-terms"]');
    if (termsLink && SITE.legal && SITE.legal.terms) termsLink.href = SITE.legal.terms;
    var cookiesLink = document.querySelector('.footer-legal-link[data-i18n="footer-cookies"]');
    if (cookiesLink && SITE.legal && SITE.legal.cookies) cookiesLink.href = SITE.legal.cookies;

    document.querySelectorAll('[data-site-tripadvisor]').forEach(function (el) {
      el.href = SITE.tripadvisor;
      el.rel = 'noopener noreferrer';
      el.target = '_blank';
    });

    var credit = document.querySelector('[data-site-credit]');
    if (credit && SITE.credit) {
      credit.href = SITE.credit.url;
      credit.textContent = SITE.credit.label;
      credit.target = '_blank';
      credit.rel = 'noopener noreferrer';
    }

    var yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  window.applySiteConfig = applySiteConfig;
  window.siteWhatsAppUrl = siteWhatsAppUrl;
  window.siteEmailUrl = siteEmailUrl;

  document.addEventListener('DOMContentLoaded', applySiteConfig);
})();
