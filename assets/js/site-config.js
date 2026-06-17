/** Site configuration for About Culture Things. */
const SITE = {
  url: 'https://aboutculturethings.com',
  name: 'About Culture Things',
  shortName: 'Culture Things',
  email: 'aboutculturethings@gmail.com',
  phone: '+351968510019',
  whatsapp: '351968510019',
  instagram: 'https://www.instagram.com/aboutculturethings/',
  tripadvisor: 'https://www.tripadvisor.pt/Attraction_Review-g189158-d28016472-Reviews-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html',
  twitter: '@aboutculturethings',
  themeColor: '#5C6B2A',
  heroPoster: 'assets/images/hero.webp',
  ogImage: 'assets/images/hero.webp',
  locale: { en: 'en-GB', es: 'es-ES', pt: 'pt-PT' },
  geo: {
    region: 'PT-11',
    placename: 'Sintra, Lisbon, Portugal',
    position: '38.7977;-9.3900'
  },
  credit: { url: 'https://fscdigital.com/', label: 'Website by FSC Digital' },
  analytics: {
    gtmId: '',       // e.g. 'GTM-XXXXXXX'
    ga4Id: '',       // e.g. 'G-XXXXXXXXXX'
    enabled: true
  },
  waMessages: {
    default: 'Hi Rita, I\'d like to book a tour.',
    tour1: 'Hi Rita, I\'d like to book the Sintra Complete Experience.',
    tour2: 'Hi Rita, I\'d like to book the Sintra & Hidden Beaches Experience.',
    about: 'Hi Rita, I\'d like to learn more about your tours.',
    faq: 'Hi Rita, I have a question.',
    book: 'Hi Rita, I\'d like to book a tour.'
  }
};

function siteWhatsAppUrl(message) {
  const text = message || SITE.waMessages.default;
  return 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(text);
}

function siteEmailUrl(subject) {
  return 'mailto:' + SITE.email + '?subject=' + encodeURIComponent(subject || 'Tour enquiry');
}

/** Wire data-site-* attributes and centralise outbound links from SITE config. */
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

document.addEventListener('DOMContentLoaded', applySiteConfig);
