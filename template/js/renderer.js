/**
 * Section renderer for one-page site templates.
 * Components are data-driven; presentation stays in template/css/main.css.
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
    const year = document.getElementById('footer-year');
    if (year) year.textContent = new Date().getFullYear();
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
      return '<article class="benefit-card reveal d' + ((index % 3) + 1) + '"><span class="benefit-number" aria-hidden="true">0' + (index + 1) + '</span><h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
    }).join('');
  }

  function renderOffers(lang) {
    const c = getContent(lang);
    const offers = c.offers || {};
    const trust = document.querySelector('.pricing-trust');
    const currencyLabel = document.getElementById('currency-label');
    if (currencyLabel) currencyLabel.textContent = offers.currencyLabel || '';
    if (trust) {
      trust.setAttribute('aria-label', offers.trustAria || '');
      trust.innerHTML = (offers.trust || []).map(function (item) {
        return '<li>' + esc(item) + '</li>';
      }).join('');
    }
    document.querySelectorAll('[data-offers-label]').forEach(function (el) {
      el.textContent = offers[el.getAttribute('data-offers-label')] || '';
    });

    document.querySelectorAll('[data-tour-kind]').forEach(function (grid) {
      const kind = grid.getAttribute('data-tour-kind');
      const items = (offers.items || []).filter(function (item) { return item.kind === kind; });
      grid.innerHTML = items.map(function (item, index) {
        const ctaLabel = (c.ctas && (c.ctas[item.id] || c.ctas.offer)) || '';
        const imageStyle = item.imagePosition ? ' style="object-position:' + esc(item.imagePosition) + '"' : '';
        const detailHref = 'experiences/' + esc(item.id) + '/';
        return '<article id="tour-' + esc(item.id) + '" class="offer-card reveal d' + ((index % 3) + 1) + '">' +
          '<a class="pc-img-wrap" href="' + detailHref + '" aria-label="' + esc(offers.detailsCta + ': ' + item.name) + '"><img src="' + esc(item.image) + '" alt="' + esc(item.imageAlt || item.name) + '" loading="lazy" decoding="async" width="960" height="640"' + imageStyle + '></a>' +
          '<div class="tour-copy"><div class="pc-overline"><span>' + esc(item.badge || '') + '</span><span>' + esc(item.tag || '') + '</span></div>' +
          '<h3 class="pc-name"><a href="' + detailHref + '">' + esc(item.name) + '</a></h3><p class="pc-fit">' + esc(item.fit || '') + '</p>' +
          '<p class="tour-meeting"><span>' + esc(offers.meetingLabel) + '</span>' + esc(item.meeting || '') + '</p>' +
          '<div class="tour-summary"><p class="pc-price-row"><span class="pc-price-label">' + esc(offers.directPrice) + '</span><span class="pc-price">' + esc(item.price) + '</span><span class="pc-per">' + esc(offers.perGroup) + '</span></p><div class="tour-actions"><a href="' + detailHref + '" class="tour-detail">' + esc(offers.detailsCta) + ' <span aria-hidden="true">→</span></a><a href="#" class="tour-enquire" target="_blank" rel="noopener noreferrer" data-site-wa="' + esc(waKey(item.id)) + '" data-analytics-label="' + esc(item.id) + '-book"><span>' + esc(ctaLabel) + '</span><span aria-hidden="true">↗</span></a></div></div></div></article>';
      }).join('');
    });
  }

  function renderStory(lang) {
    const c = getContent(lang);
    const story = c.story || {};
    const section = document.getElementById('about');
    if (!section) return;
    const image = section.querySelector('.story-image img');
    const kicker = section.querySelector('.story-kicker');
    const title = section.querySelector('.story-title');
    const text = section.querySelector('.story-text');
    const signature = section.querySelector('.story-signature');
    if (image) image.alt = story.imageAlt || '';
    if (kicker) kicker.textContent = story.kicker || '';
    if (title) title.textContent = story.title || '';
    if (text) text.textContent = story.text || '';
    if (signature) signature.textContent = story.signature || '';
  }

  function renderReviews(lang) {
    const c = getContent(lang);
    const reviews = c.reviews || {};
    const grid = document.getElementById('reviews-grid');
    const source = esc(reviews.source || '');
    const items = (reviews.items && reviews.items.length) ? reviews.items : (cfg.reviewItems || []);
    if (grid) {
      grid.setAttribute('aria-label', reviews.gridAria || '');
      grid.innerHTML = items.slice(0, 3).map(function (item, index) {
        return '<article class="review-card reveal d' + (index + 1) + '"><div class="rv-source"><span class="rv-bubbles" aria-label="5 out of 5 bubbles" role="img">●●●●●</span><span>' + source + '</span></div><blockquote class="rv-text">“' + esc(item.text) + '”</blockquote><p class="rv-byline"><cite class="rv-name">' + esc(item.name) + '</cite><span>' + esc(item.meta || '') + '</span></p></article>';
      }).join('');
    }
  }

  function renderGallery(lang) {
    const c = getContent(lang);
    const gallery = c.gallery || {};
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;
    const shared = cfg.galleryItems || [];
    const items = (gallery.items && gallery.items.length) ? gallery.items : shared.map(function (item) {
      const altMap = item.alt || {};
      return {
        src: item.src,
        width: item.width,
        height: item.height,
        alt: altMap[lang] || altMap.en || ''
      };
    });
    grid.innerHTML = items.slice(0, 6).map(function (item, index) {
      const width = item.width || 640;
      const height = item.height || 480;
      return '<figure class="gallery-item reveal d' + ((index % 3) + 1) + '"><img src="' + esc(item.src) + '" alt="' + esc(item.alt) + '" loading="lazy" decoding="async" width="' + esc(width) + '" height="' + esc(height) + '"></figure>';
    }).join('');
  }

  function renderFaq(lang) {
    const c = getContent(lang);
    const faq = c.faq || {};
    const list = document.querySelector('.faq-list');
    if (!list) return;
    const essential = [faq.items && faq.items[0], faq.items && faq.items[1], faq.items && faq.items[2], faq.items && faq.items[5]].filter(Boolean);
    list.innerHTML = essential.map(function (item) {
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
    renderStory(lang);
    renderOffers(lang);
    renderGallery(lang);
    renderReviews(lang);
    renderFaq(lang);
    renderContact(lang);
    if (typeof window.applySiteConfig === 'function') window.applySiteConfig(lang);
  }

  window.renderSiteContent = renderSiteContent;
})();
