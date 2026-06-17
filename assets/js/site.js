// ─── HERO VIDEO ──────────────────────────────────────
(function(){
  var video = document.querySelector('.hero-bg-video');
  var hero = document.querySelector('.hero');
  if (!video || !hero) return;
  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn && (conn.saveData || conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g')) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute('muted', '');

  function markPlaying() { hero.classList.add('has-video-playing'); }

  function tryPlay() {
    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === 'function') {
      playAttempt.then(markPlaying).catch(function(){});
    } else if (!video.paused) markPlaying();
  }

  if (video.readyState >= 2) tryPlay();
  else video.addEventListener('loadeddata', tryPlay, { once: true });
})();

// ─── BREAKPOINTS (match CSS --bp-md: 48rem) ─────────
const mqDesktop = window.matchMedia('(min-width: 48rem)');

// ─── BACK TO TOP ─────────────────────────────────────
(function(){
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  function toggle() {
    var desktopLike = mqDesktop.matches;
    btn.hidden = !desktopLike;
    btn.classList.toggle('visible', desktopLike && window.scrollY > 600);
  }
  window.addEventListener('scroll', toggle, { passive: true });
  mqDesktop.addEventListener('change', toggle);
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
  const node = document.getElementById('structured-data');
  if (!t || !node) return;
  let data;
  try { data = JSON.parse(node.textContent); } catch (e) { return; }
  const faq = data['@graph']?.find(item => item['@type'] === 'FAQPage' || item['@id']?.includes('#faq'));
  if (!faq) return;
  faq.mainEntity = [1, 2, 3, 4, 5].map(n => ({
    '@type': 'Question',
    name: t['faq' + n + '-q'],
    acceptedAnswer: { '@type': 'Answer', text: t['faq' + n + '-a'] }
  }));
  node.textContent = JSON.stringify(data);
}

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;

  var url = new URL(location.href);
  if (lang === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
  history.replaceState({}, '', url);

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

  const triggerLabel = document.getElementById('lang-trigger-label');
  if (triggerLabel) triggerLabel.textContent = langCodes[lang] || lang.toUpperCase();
  if (langTrigger) {
    langTrigger.setAttribute('aria-label', `Select language. Current language: ${langNames[lang] || lang}.`);
  }

  const htmlLang = { en: 'en-GB', es: 'es-ES', pt: 'pt-PT' };
  document.documentElement.lang = htmlLang[lang] || lang;
  updateDocumentMeta(lang);
  updateStructuredData(lang);
  if (typeof window.updateReviewsExpand === 'function') window.updateReviewsExpand();
  closeLangDropdown();
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

document.addEventListener('click', e => {
  if (langSwitcher && !langSwitcher.contains(e.target)) closeLangDropdown();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLangDropdown(); navClose(); }
});

(function(){
  const params = new URLSearchParams(location.search);
  const urlLang = params.get('lang');
  const supported = ['en','es','pt'];
  const lang = (urlLang && supported.includes(urlLang)) ? urlLang : 'en';
  applyLang(lang);
})();

// ─── NAV BEHAVIOUR ───────────────────────────────────
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const mobNav = document.getElementById('mob-nav');
const fabWa  = document.getElementById('fab-wa');
let menuFocusReturn = null;

let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const sy = window.scrollY;
    const compactViewport = !mqDesktop.matches;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;
    nav.classList.toggle('elevated', sy > 10);
    nav.classList.toggle('nav-overlay', sy < heroHeight * 0.55 && !document.body.classList.contains('nav-open'));
    if (fabWa) fabWa.classList.toggle('visible', sy > (compactViewport ? 180 : 380));
    ticking = false;
  });
}, { passive: true });

// Active nav link — Intersection Observer (more reliable than offsetTop)
(function(){
  const navLinks = document.querySelectorAll('.nav-tabs a[href^="#"]');
  const sections = document.querySelectorAll('main section[id]');
  if (!navLinks.length || !sections.length) return;
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
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
  sections.forEach(sec => obs.observe(sec));
})();

function navOpen() {
  const open = mobNav.classList.toggle('open');
  document.body.classList.toggle('nav-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  mobNav.setAttribute('aria-hidden', String(!open));
  nav.classList.toggle('nav-overlay', !open && window.scrollY < (document.querySelector('.hero')?.offsetHeight || 600) * 0.55);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  if (open) {
    menuFocusReturn = document.activeElement;
    var first = mobNav.querySelector('.mob-nav-body a, .mob-nav-close, .mob-lang-btn');
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
  nav.classList.toggle('nav-overlay', window.scrollY < (document.querySelector('.hero')?.offsetHeight || 600) * 0.55);
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
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
mobNav.querySelectorAll('a[href^="#"], [data-site-wa]').forEach(function (a) {
  a.addEventListener('click', navClose);
});
document.querySelectorAll('.mob-lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
});

// Initial nav overlay state
nav.classList.add('nav-overlay');

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

// ─── FAQ ACCORDION (one open at a time) ──────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-item[open]').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

// ─── REVIEWS EXPAND ──────────────────────────────────
(function(){
  const TOTAL_REVIEWS = 6;
  const btn = document.getElementById('reviews-expand');
  const grid = document.getElementById('reviews-grid');
  const countEl = document.getElementById('reviews-expand-count');
  const labelEl = btn && btn.querySelector('.reviews-expand-label');
  if (!btn || !grid) return;

  const breakpoints = [
    window.matchMedia('(min-width: 120rem)'),
    window.matchMedia('(min-width: 75rem)'),
    window.matchMedia('(min-width: 48rem)'),
    window.matchMedia('(min-width: 30rem)')
  ];

  function getVisibleCount() {
    if (breakpoints[0].matches) return TOTAL_REVIEWS;
    if (breakpoints[1].matches) return 4;
    if (breakpoints[2].matches) return 3;
    if (breakpoints[3].matches) return 2;
    return 1;
  }

  function getHiddenCount() {
    return Math.max(0, TOTAL_REVIEWS - getVisibleCount());
  }

  function updateExpandControl() {
    const hidden = getHiddenCount();
    const expanded = grid.classList.contains('is-expanded');

    if (hidden === 0) {
      btn.hidden = true;
      grid.classList.remove('is-expanded');
      btn.setAttribute('aria-expanded', 'false');
      return;
    }

    btn.hidden = false;
    btn.setAttribute('aria-expanded', String(expanded));

    if (countEl) {
      countEl.textContent = expanded ? '' : '(+' + hidden + ')';
      countEl.hidden = expanded;
    }

    if (labelEl && typeof i18n !== 'undefined' && i18n[currentLang]) {
      const key = expanded ? 'reviews-less' : 'reviews-more';
      labelEl.setAttribute('data-i18n', key);
      labelEl.textContent = i18n[currentLang][key];
    }
  }

  btn.addEventListener('click', function() {
    const willExpand = !grid.classList.contains('is-expanded');
    grid.classList.toggle('is-expanded', willExpand);
    updateExpandControl();
  });

  breakpoints.forEach(function(mq) {
    mq.addEventListener('change', function() {
      grid.classList.remove('is-expanded');
      updateExpandControl();
    });
  });

  window.addEventListener('resize', updateExpandControl, { passive: true });
  updateExpandControl();
  window.updateReviewsExpand = updateExpandControl;
})();

