// ─── SCROLL PROGRESS ─────────────────────────────────
(function(){
  var bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;
  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? ((scrollTop / docHeight) * 100).toFixed(2) + '%' : '0%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();

// ─── HERO PARALLAX ───────────────────────────────────
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var hero = document.querySelector('.hero');
  var bg = document.querySelector('.hero-poster');
  if (!hero || !bg) return;
  var ticking = false;
  window.addEventListener('scroll', function(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      var y = window.scrollY;
      if (y < hero.offsetHeight) {
        bg.style.transform = 'scale(1.02) translateY(' + (y * 0.12).toFixed(1) + 'px)';
      }
      ticking = false;
    });
  }, { passive: true });
})();

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

// ─── BACK TO TOP ─────────────────────────────────────
(function(){
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  function toggle() {
    var desktopLike = window.innerWidth >= 768;
    btn.hidden = !desktopLike;
    btn.classList.toggle('visible', desktopLike && window.scrollY > 600);
  }
  window.addEventListener('scroll', toggle, { passive: true });
  window.addEventListener('resize', toggle);
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
  faq.mainEntity = [1, 2, 3, 4, 5, 6].map(n => ({
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
    const compactViewport = window.innerWidth < 768;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;
    nav.classList.toggle('elevated', sy > 10);
    nav.classList.toggle('nav-overlay', sy < heroHeight * 0.72 && !document.body.classList.contains('nav-open'));
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
  nav.classList.toggle('nav-overlay', !open && window.scrollY < (document.querySelector('.hero')?.offsetHeight || 600) * 0.72);
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
  nav.classList.toggle('nav-overlay', window.scrollY < (document.querySelector('.hero')?.offsetHeight || 600) * 0.72);
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

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && mobNav.classList.contains('open')) {
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

// ─── STAGGERED CARD REVEAL ───────────────────────────
const staggerObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const cards = entry.target.querySelectorAll('.pricing-card, .review-card');
    cards.forEach((card, i) => {
      card.style.transitionDelay = (i * 0.08) + 's';
      card.classList.add('in');
    });
    staggerObs.unobserve(entry.target);
  });
}, { threshold: 0.05 });

document.querySelectorAll('.tours-row, .reviews-grid').forEach(el => {
  el.querySelectorAll('.pricing-card, .review-card').forEach(card => {
    card.classList.add('reveal');
  });
  staggerObs.observe(el);
});

// ─── RATING COUNTER ──────────────────────────────────
function animateValue(el, end, duration) {
  const startTime = performance.now();
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = (end * eased).toFixed(1);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = '5.0';
  }
  requestAnimationFrame(step);
}

const ratingEl = document.querySelector('.g-number');
if (ratingEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const rObs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { animateValue(ratingEl, 5.0, 1400); rObs.disconnect(); }
  }, { threshold: 0.5 });
  rObs.observe(ratingEl);
}

// ─── EYEBROW LINE ANIMATION ──────────────────────────
const eyeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.anim-ready').forEach(el => el.classList.add('anim-visible'));
      const line = e.target.querySelector('.sec-eyebrow-line');
      if (line) {
        line.style.width = '0';
        line.style.transition = 'width 0.8s cubic-bezier(.22,1,.36,1) 0.1s';
        requestAnimationFrame(() => { line.style.width = '2rem'; });
      }
      eyeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.sec-head').forEach(el => eyeObs.observe(el));

// ─── FAQ ACCORDION (one open at a time) ──────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-item[open]').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

// ─── REVIEWS EXPAND (mobile) ─────────────────────────
(function(){
  const btn = document.getElementById('reviews-expand');
  const grid = document.getElementById('reviews-grid');
  if (!btn || !grid) return;
  const label = btn.querySelector('[data-i18n]');
  const mq = window.matchMedia('(max-width: 47.99rem)');
  function syncExpandControl() {
    const mobile = mq.matches;
    btn.hidden = !mobile;
    if (!mobile) {
      grid.classList.remove('is-expanded');
      btn.setAttribute('aria-expanded', 'false');
      if (label) {
        label.setAttribute('data-i18n', 'reviews-more');
        label.textContent = i18n[currentLang]['reviews-more'];
      }
    }
  }
  btn.addEventListener('click', () => {
    const expanded = grid.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', String(expanded));
    if (label) {
      const key = expanded ? 'reviews-less' : 'reviews-more';
      label.setAttribute('data-i18n', key);
      label.textContent = i18n[currentLang][key];
    }
  });
  mq.addEventListener('change', syncExpandControl);
  syncExpandControl();
})();

