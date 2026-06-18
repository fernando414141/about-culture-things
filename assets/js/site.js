// ─── BREAKPOINTS (match CSS --bp-md: 48rem) ─────────
const mqDesktop = window.matchMedia('(min-width: 64rem)');
const mqTablet = window.matchMedia('(min-width: 48rem)');

// ─── BACK TO TOP ─────────────────────────────────────
(function(){
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  function toggle() {
    var show = window.scrollY > 600;
    btn.classList.toggle('visible', show);
  }
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
  btn.addEventListener('click', function(){ window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();

let currentLang  = 'en';

function updateDocumentMeta(lang) {
  const t = i18n[lang];
  if (!t) return;
  if (t['meta-title']) document.title = t['meta-title'];
  const desc = document.querySelector('meta[name="description"]');
  if (desc && t['meta-description']) desc.setAttribute('content', t['meta-description']);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && t['meta-title']) ogTitle.setAttribute('content', t['meta-title']);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && t['meta-description']) ogDesc.setAttribute('content', t['meta-description']);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', ogLocales[lang] || 'en_GB');
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle && t['meta-title']) twTitle.setAttribute('content', t['meta-title']);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && t['meta-description']) twDesc.setAttribute('content', t['meta-description']);
}

function updateStructuredData(lang) {
  const t = i18n[lang];
  const c = window.SITE_CONTENT && window.SITE_CONTENT.content && window.SITE_CONTENT.content[lang];
  const node = document.getElementById('structured-data');
  if (!t || !node) return;
  let data;
  try { data = JSON.parse(node.textContent); } catch (e) { return; }
  const faq = data['@graph']?.find(item => item['@type'] === 'FAQPage' || item['@id']?.includes('#faq'));
  if (!faq) return;
  const faqItems = c && c.faq && c.faq.items ? c.faq.items : [1, 2, 3, 4, 5].map(n => ({
    question: t['faq' + n + '-q'],
    answer: t['faq' + n + '-a']
  }));
  faq.mainEntity = faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }));
  node.textContent = JSON.stringify(data);
}

function applyLang(lang, options) {
  options = options || {};
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;

  var url = new URL(location.href);
  if (lang === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
  history.replaceState({}, '', url);

  if (!options.skipRender && typeof window.renderSiteContent === 'function') {
    window.renderSiteContent(lang);
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
  document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
    const key = el.getAttribute('data-i18n-tooltip');
    if (t[key] !== undefined) el.setAttribute('data-tooltip', t[key]);
  });
  document.querySelectorAll('[data-badge-key]').forEach(el => {
    const key = el.getAttribute('data-badge-key');
    if (t[key] !== undefined) el.setAttribute('data-badge', t[key]);
  });
  document.querySelectorAll('.lang-option').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.mob-lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.footer-lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const triggerLabel = document.getElementById('lang-trigger-label');
  if (triggerLabel) triggerLabel.textContent = langCodes[lang] || lang.toUpperCase();
  if (langTrigger) {
    langTrigger.setAttribute('aria-label', `Select language. Current language: ${langNames[lang] || lang}.`);
  }

  document.documentElement.lang = (window.htmlLocales && window.htmlLocales[lang]) || lang;
  updateDocumentMeta(lang);
  updateStructuredData(lang);
  closeLangDropdown();

  var burger = document.getElementById('burger');
  if (burger) {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-label', t[open ? 'nav-close-aria' : 'nav-open-aria'] || burger.getAttribute('aria-label'));
  }
  var mobClose = document.querySelector('.mob-nav-close');
  if (mobClose && t['nav-close-aria']) mobClose.setAttribute('aria-label', t['nav-close-aria']);
  if (typeof window.refreshReviewsCarousel === 'function') window.refreshReviewsCarousel();
  if (typeof window.refreshTemplateInteractions === 'function') window.refreshTemplateInteractions();
  if (location.hash) {
    requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView({ block: 'start', behavior: 'auto' });
    });
  }
}

// ─── LANGUAGE SWITCHER ────────────────────────────────
const langSwitcher = document.getElementById('lang-switcher');
const langTrigger  = document.getElementById('lang-trigger');

const langDropdown = document.getElementById('lang-dropdown');

function closeLangDropdown() {
  if (!langSwitcher) return;
  langSwitcher.classList.remove('open');
  if (langTrigger) langTrigger.setAttribute('aria-expanded', 'false');
  if (langDropdown) langDropdown.hidden = true;
}

if (langTrigger) {
  langTrigger.addEventListener('click', e => {
    e.stopPropagation();
    const opening = !langSwitcher.classList.contains('open');
    langSwitcher.classList.toggle('open', opening);
    langTrigger.setAttribute('aria-expanded', String(opening));
    if (langDropdown) langDropdown.hidden = !opening;
  });
  langTrigger.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const options = Array.from(document.querySelectorAll('.lang-option'));
      if (!options.length) return;
      const nextIndex = e.key === 'ArrowDown' ? 0 : options.length - 1;
      langSwitcher.classList.add('open');
      langTrigger.setAttribute('aria-expanded', 'true');
      if (langDropdown) langDropdown.hidden = false;
      options[nextIndex].focus();
    }
  });
}

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  btn.addEventListener('keydown', e => {
    const options = Array.from(document.querySelectorAll('.lang-option'));
    const index = options.indexOf(btn);
    if (index === -1) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const next = options[(index + 1) % options.length];
      next.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = options[(index - 1 + options.length) % options.length];
      prev.focus();
    } else if (e.key === 'Escape') {
      closeLangDropdown();
      langTrigger?.focus();
    }
  });
});

if (langDropdown) {
  langDropdown.addEventListener('click', e => {
    const btn = e.target.closest('.lang-option');
    if (btn) applyLang(btn.dataset.lang, { skipRender: true });
  });
  langDropdown.addEventListener('keydown', e => {
    const btn = e.target.closest('.lang-option');
    if (!btn) return;
    const options = Array.from(document.querySelectorAll('.lang-option'));
    const index = options.indexOf(btn);
    if (index === -1) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      options[(index + 1) % options.length].focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      options[(index - 1 + options.length) % options.length].focus();
    } else if (e.key === 'Escape') {
      closeLangDropdown();
      langTrigger?.focus();
    }
  });
}

document.addEventListener('click', e => {
  if (langSwitcher && !langSwitcher.contains(e.target)) closeLangDropdown();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLangDropdown(); navClose(); }
});

(function(){
  const params = new URLSearchParams(location.search);
  const urlLang = params.get('lang');
  const supported = Object.keys(i18n);
  const lang = (urlLang && supported.includes(urlLang)) ? urlLang : 'en';
  const run = function () { applyLang(lang, { skipRender: true }); };
  if ('requestIdleCallback' in window) {
    requestIdleCallback(run, { timeout: 1200 });
  } else {
    requestAnimationFrame(run);
  }
})();

// ─── NAV BEHAVIOUR ───────────────────────────────────
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const mobNav = document.getElementById('mob-nav');
const navOverlay = document.getElementById('nav-overlay');
const fabWa  = document.getElementById('fab-wa');
let menuFocusReturn = null;

let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const sy = window.scrollY;
    const compactViewport = !mqDesktop.matches;
    nav.classList.toggle('elevated', sy > 10);
    if (fabWa) fabWa.classList.toggle('visible', sy > (compactViewport ? 180 : 380));
    ticking = false;
  });
}, { passive: true });

// Active nav link — Intersection Observer (more reliable than offsetTop)
(function(){
  const sections = document.querySelectorAll('#top, main section[id]');
  if (!sections.length) return;
  const visible = new Map();
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
      else visible.delete(entry.target.id);
    });
    let current = '';
    let best = 0;
    visible.forEach((ratio, id) => {
      if (ratio >= best) { best = ratio; current = id; }
    });
    document.querySelectorAll('.nav-tabs a[href^="#"]').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
  sections.forEach(sec => obs.observe(sec));
})();

function navOpen() {
  const open = mobNav.classList.toggle('open');
  document.body.classList.toggle('nav-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  mobNav.setAttribute('aria-hidden', String(!open));
  mobNav.setAttribute('aria-modal', String(open));
  if (open) mobNav.removeAttribute('inert'); else mobNav.setAttribute('inert', '');
  burger.setAttribute('aria-expanded', String(open));
  var t = i18n[currentLang] || i18n.en;
  burger.setAttribute('aria-label', t[open ? 'nav-close-aria' : 'nav-open-aria'] || (open ? 'Close menu' : 'Open menu'));
  if (open) {
    menuFocusReturn = document.activeElement;
    var first = mobNav.querySelector('.mob-nav-close, .mob-nav-body a, .mob-lang-btn');
    if (first) first.focus();
  } else if (menuFocusReturn) {
    menuFocusReturn.focus();
    menuFocusReturn = null;
  }
}

function navClose() {
  mobNav.classList.remove('open');
  document.body.classList.remove('nav-open');
  document.body.style.overflow = '';
  mobNav.setAttribute('aria-hidden', 'true');
  mobNav.setAttribute('aria-modal', 'false');
  mobNav.setAttribute('inert', '');
  burger.setAttribute('aria-expanded', 'false');
  var t = i18n[currentLang] || i18n.en;
  burger.setAttribute('aria-label', t['nav-open-aria'] || 'Open menu');
  if (menuFocusReturn) {
    menuFocusReturn.focus();
    menuFocusReturn = null;
  }
}

mobNav.addEventListener('keydown', function(e) {
  if (e.key !== 'Tab' || !mobNav.classList.contains('open')) return;
  var focusable = mobNav.querySelectorAll('a, button, select, [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  var first = focusable[0];
  var last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

window.navClose = navClose;
window.navOpen = navOpen;
window.applyLang = applyLang;

burger.addEventListener('click', navOpen);

var mobNavClose = mobNav.querySelector('.mob-nav-close');
if (mobNavClose) mobNavClose.addEventListener('click', navClose);
if (navOverlay) navOverlay.addEventListener('click', navClose);
mobNav.addEventListener('click', function (e) {
  if (e.target.closest('a')) navClose();
});
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.mob-lang-btn, .footer-lang-btn');
  if (btn) applyLang(btn.dataset.lang, { skipRender: true });
});

mqDesktop.addEventListener('change', () => {
  if (mqDesktop.matches && mobNav.classList.contains('open')) {
    navClose();
  }
});

document.addEventListener('click', e => {
  if (mobNav.classList.contains('open') && !mobNav.contains(e.target) && !burger.contains(e.target)) {
    navClose();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobNav.classList.contains('open')) {
    navClose();
  }
});

// ─── REVIEWS GRID ───────────────────────────────────
window.refreshReviewsGrid = function () {};

// ─── INTERSECTION OBSERVER — REVEAL ──────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      e.target.querySelectorAll('.anim-ready').forEach(el => el.classList.add('anim-visible'));
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

const headObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.anim-ready').forEach(el => el.classList.add('anim-visible'));
    headObs.unobserve(entry.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.sec-head, #final-cta').forEach(el => headObs.observe(el));

window.refreshTemplateInteractions = function () {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObs.observe(el));
  document.querySelectorAll('.sec-head, #final-cta').forEach(el => headObs.observe(el));
};

// ─── FAQ ACCORDION (one open at a time) ──────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-item[open]').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

document.addEventListener('toggle', e => {
  const item = e.target;
  if (!item.classList || !item.classList.contains('faq-item') || !item.open) return;
  document.querySelectorAll('.faq-item[open]').forEach(other => {
    if (other !== item) other.open = false;
  });
}, true);
