/**
 * Section renderer for reusable one-page templates.
 * Components are data-driven; presentation stays in assets/css/main.css.
 */
(function () {
  const cfg = window.SITE_CONTENT || SITE_CONTENT;

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getContent(lang) {
    return (cfg.content && cfg.content[lang]) || (cfg.content && cfg.content.en) || {};
  }

  function icon(name) {
    if (name === 'pin') {
      return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 17s5-4.7 5-9A5 5 0 005 8c0 4.3 5 9 5 9z" stroke="currentColor" stroke-width="1.6"/><circle cx="10" cy="8" r="1.6" stroke="currentColor" stroke-width="1.5"/></svg>';
    }
    if (name === 'bag') {
      return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 7h12l-1.2 6.5a2 2 0 01-2 1.5H7.2a2 2 0 01-2-1.5L4 7z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 7V5.8A3 3 0 0110 3a3 3 0 013 2.8V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    }
    return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4v12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
  }

  function waKey(id) {
    return id || 'book';
  }

  function renderBrand() {
    const name = esc(cfg.business && cfg.business.name);
    document.querySelectorAll('.logo-name, .mob-nav-logo, .footer-logo').forEach(function (el) {
      el.textContent = name;
    });
    document.querySelectorAll('.logo').forEach(function (el) {
      el.setAttribute('aria-label', name + ' — home');
    });
    const copy = document.querySelector('.footer-copy');
    if (copy) {
      copy.innerHTML = '© <span id="footer-year"></span> ' + name;
      const yearEl = document.getElementById('footer-year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    }
  }

  function renderNav(lang) {
    const c = getContent(lang);
    const nav = c.nav || [];
    const desktop = document.querySelector('.nav-tabs');
    const mobile = document.querySelector('.mob-nav-body');
    const footer = document.querySelector('.footer-nav');

    const links = nav.map(function (item) {
      const wide = item.wide ? ' class="nav-tab-wide"' : '';
      return '<a href="' + esc(item.href) + '"' + wide + '>' + esc(item.label) + '</a>';
    }).join('');
    const plainLinks = nav.map(function (item) {
      return '<a href="' + esc(item.href) + '">' + esc(item.label) + '</a>';
    }).join('');

    if (desktop) desktop.innerHTML = links;
    if (mobile) mobile.innerHTML = plainLinks;
    if (footer) footer.innerHTML = plainLinks;
  }

  function renderLanguageControls() {
    const languages = cfg.languages || [];
    const dropdown = document.getElementById('lang-dropdown');
    const mobile = document.querySelector('.mob-lang-options');
    const footer = document.querySelector('.footer-lang');

    if (dropdown) {
      dropdown.innerHTML = languages.map(function (lang, index) {
        return '<li role="presentation"><button class="lang-option' + (index === 0 ? ' active' : '') + '" role="option" data-lang="' + esc(lang.code) + '" type="button" aria-selected="' + (index === 0 ? 'true' : 'false') + '"><span class="lang-option-name">' + esc(lang.label) + '</span><svg class="lang-option-check" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button></li>';
      }).join('');
    }

    const buttons = languages.map(function (lang, index) {
      return '<button type="button" class="mob-lang-btn' + (index === 0 ? ' active' : '') + '" data-lang="' + esc(lang.code) + '" aria-pressed="' + (index === 0 ? 'true' : 'false') + '">' + esc(lang.short) + '</button>';
    }).join('');
    if (mobile) mobile.innerHTML = buttons;
    if (footer) footer.innerHTML = buttons.replace(/mob-lang-btn/g, 'footer-lang-btn');
  }

  function renderHero(lang) {
    const c = getContent(lang);
    const hero = c.hero || {};
    const asset = cfg.assets && cfg.assets.hero;
    const img = document.querySelector('.hero-poster');
    const section = document.querySelector('.hero');
    if (section && hero.imageAlt) section.setAttribute('aria-label', hero.imageAlt);
    if (img && asset) {
      img.src = asset.src;
      img.srcset = asset.srcset || asset.src;
      img.alt = hero.imageAlt || '';
      if (asset.width) img.width = asset.width;
      if (asset.height) img.height = asset.height;
    }
  }

  function renderBenefits(lang) {
    const c = getContent(lang);
    const grid = document.querySelector('.benefits-grid');
    if (!grid || !c.benefits) return;
    grid.setAttribute('aria-label', c.benefits.aria || '');
    grid.innerHTML = (c.benefits.items || []).map(function (item, index) {
      return '<article class="benefit-card reveal d' + ((index % 3) + 1) + '"><span class="benefit-icon" aria-hidden="true">' + icon(item.icon) + '</span><h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
    }).join('');
  }

  function renderOffers(lang) {
    const c = getContent(lang);
    const offers = c.offers || {};
    const trust = document.querySelector('.pricing-trust');
    const row = document.querySelector('.tours-row');
    if (trust) {
      trust.setAttribute('aria-label', offers.trustAria || '');
      trust.innerHTML = (offers.trust || []).map(function (item) {
        return '<li>' + esc(item) + '</li>';
      }).join('');
    }
    if (!row) return;
    row.innerHTML = (offers.items || []).map(function (item, index) {
      const included = (offers.included || []).map(function (text) {
        return '<li class="pc-include">' + esc(text) + '</li>';
      }).join('');
      const excluded = (offers.excluded || []).map(function (text) {
        return '<li class="pc-exclude">' + esc(text) + '</li>';
      }).join('');
      return '<article class="pricing-card offer-card ' + (item.featured ? 'featured' : 'alt') + ' reveal d' + ((index % 3) + 1) + '" data-badge="' + esc(item.badge) + '"><div class="pc-img-wrap"><picture><source srcset="' + esc(item.image) + '" type="image/webp"><img src="' + esc(item.image) + '" alt="' + esc(item.imageAlt || item.name) + '" loading="lazy" decoding="async" width="480" height="270"></picture></div><h3 class="pc-name">' + esc(item.name) + '</h3><div class="pc-tag">' + esc(item.tag) + '</div><p class="pc-stops">' + esc(item.stops) + '</p><div class="pc-price-row"><span class="pc-price">' + esc(item.price) + '</span><span class="pc-per">' + esc(offers.perGroup) + '</span></div><p class="pc-tickets-note">' + esc(offers.ticketNote) + '</p><div class="pc-cta"><a href="#" class="btn-filled" target="_blank" rel="noopener noreferrer" data-site-wa="' + esc(waKey(item.id)) + '" data-analytics-label="' + esc(item.id) + '-book"><svg width="14" height="14" fill="currentColor" aria-hidden="true"><use href="#wa"/></svg><span>' + esc(c.ctas && c.ctas.offer) + '</span></a></div><details class="pc-details"><summary>' + esc(offers.detailsLabel) + '</summary><p class="pc-fit">' + esc(item.fit) + '</p><ul class="pc-includes" aria-label="' + esc(c.ui && c.ui.includedAria) + '">' + included + excluded + '</ul><p class="pc-places">' + esc(item.places) + '</p></details></article>';
    }).join('');
  }

  function renderReviews(lang) {
    const c = getContent(lang);
    const reviews = c.reviews || {};
    const grid = document.getElementById('reviews-grid');
    const viewport = document.getElementById('reviews-viewport');
    const trustValue = document.querySelector('.reviews-trust-value');
    const source = esc(reviews.source || '');
    if (viewport) viewport.setAttribute('aria-label', reviews.gridAria || '');
    if (trustValue) {
      trustValue.textContent = (reviews.ratingValue || '5.0') + '/5';
      trustValue.setAttribute('aria-label', reviews.ratingLabel || '');
    }
    if (!grid) return;
    grid.innerHTML = (reviews.items || []).map(function (item, index) {
      return '<article class="review-card reveal d' + (index % 3) + '"><header class="rv-header"><div class="rv-avatar" aria-hidden="true">' + esc(item.initials) + '</div><div class="rv-identity"><cite class="rv-name">' + esc(item.name) + '</cite></div></header><div class="rv-rating" aria-label="5 out of 5 stars" role="img">★★★★★</div><blockquote class="rv-text">' + esc(item.text) + '</blockquote><p class="rv-source">' + source + '</p></article>';
    }).join('');
  }

  function renderGallery(lang) {
    const c = getContent(lang);
    const gallery = c.gallery || {};
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;
    grid.innerHTML = (gallery.items || []).slice(0, 6).map(function (item, index) {
      const srcset = item.srcset ? ' srcset="' + esc(item.srcset) + '"' : '';
      const sizes = item.sizes ? ' sizes="' + esc(item.sizes) + '"' : '';
      const width = item.width || 720;
      const height = item.height || 560;
      return '<figure class="gallery-item reveal d' + ((index % 3) + 1) + '"><img src="' + esc(item.src) + '"' + srcset + sizes + ' alt="' + esc(item.alt) + '" loading="lazy" decoding="async" width="' + esc(width) + '" height="' + esc(height) + '"></figure>';
    }).join('');
  }

  function renderFaq(lang) {
    const c = getContent(lang);
    const faq = c.faq || {};
    const list = document.querySelector('.faq-list');
    if (!list) return;
    list.innerHTML = (faq.items || []).map(function (item) {
      return '<details class="faq-item"><summary><span class="faq-q">' + esc(item.question) + '</span><span class="faq-icon" aria-hidden="true">+</span></summary><p class="faq-a">' + esc(item.answer) + '</p></details>';
    }).join('');
  }

  function renderContact(lang) {
    const c = getContent(lang);
    const footer = c.footer || {};
    const mobileLinks = document.querySelector('.mob-contact-links');
    if (mobileLinks) {
      mobileLinks.innerHTML = '<a href="#" target="_blank" rel="noopener noreferrer" data-site-instagram>' + esc(footer.socialLabels && footer.socialLabels.instagram) + '</a><a href="#" data-site-email data-site-email-subject="Tour enquiry">' + esc(footer.socialLabels && footer.socialLabels.email) + '</a>';
    }
  }

  function renderSiteContent(lang) {
    renderBrand();
    renderLanguageControls();
    renderNav(lang);
    renderHero(lang);
    renderBenefits(lang);
    renderOffers(lang);
    renderGallery(lang);
    renderReviews(lang);
    renderFaq(lang);
    renderContact(lang);
    if (typeof window.applySiteConfig === 'function') window.applySiteConfig();
  }

  window.renderSiteContent = renderSiteContent;
})();
