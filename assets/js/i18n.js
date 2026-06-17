/**
 * i18n adapter.
 *
 * The editable content lives in content/site.js. This file only flattens that
 * data into legacy data-i18n keys used by the static markup and scripts.
 */
(function () {
  const cfg = window.SITE_CONTENT || SITE_CONTENT;
  const languages = cfg.languages || [];

  function langContent(lang) {
    return (cfg.content && cfg.content[lang]) || (cfg.content && cfg.content.en) || {};
  }

  function offerByIndex(content, index) {
    return content.offers && content.offers.items ? content.offers.items[index] || {} : {};
  }

  function reviewByIndex(content, index) {
    return content.reviews && content.reviews.items ? content.reviews.items[index] || {} : {};
  }

  function faqByIndex(content, index) {
    return content.faq && content.faq.items ? content.faq.items[index] || {} : {};
  }

  function benefitByIndex(content, index) {
    return content.benefits && content.benefits.items ? content.benefits.items[index] || {} : {};
  }

  function flatten(lang) {
    const c = langContent(lang);
    const business = cfg.business || {};
    const footer = c.footer || {};
    const socialLabels = footer.socialLabels || {};
    const offer1 = offerByIndex(c, 0);
    const offer2 = offerByIndex(c, 1);
    const review1 = reviewByIndex(c, 0);
    const review2 = reviewByIndex(c, 1);
    const review3 = reviewByIndex(c, 2);
    const review4 = reviewByIndex(c, 3);
    const review5 = reviewByIndex(c, 4);
    const review6 = reviewByIndex(c, 5);
    const faq1 = faqByIndex(c, 0);
    const faq2 = faqByIndex(c, 1);
    const faq3 = faqByIndex(c, 2);
    const faq4 = faqByIndex(c, 3);
    const faq5 = faqByIndex(c, 4);
    const faq6 = faqByIndex(c, 5);
    const benefit1 = benefitByIndex(c, 0);
    const benefit2 = benefitByIndex(c, 1);
    const benefit3 = benefitByIndex(c, 2);
    const founderTrust = (c.founder && c.founder.trust) || [];

    return {
      'skip-link': c.ui && c.ui.skipLink,
      'nav-open-aria': c.ui && c.ui.openMenu,
      'nav-close-aria': c.ui && c.ui.closeMenu,
      'hero-scroll-aria': c.ui && c.ui.scrollToExplore,
      'hero-scroll': c.ui && c.ui.scrollToExplore,
      'back-to-top-aria': c.ui && c.ui.backToTop,
      'meta-title': c.seo && c.seo.title,
      'meta-description': c.seo && c.seo.description,
      'tours-trust-aria': c.offers && c.offers.trustAria,
      'nav-tours': c.nav && c.nav[0] && c.nav[0].label,
      'nav-reviews': c.nav && c.nav[1] && c.nav[1].label,
      'nav-why': c.nav && c.nav[2] && c.nav[2].label,
      'nav-faq': c.nav && c.nav[3] && c.nav[3].label,
      'nav-book': c.ctas && c.ctas.nav,
      'nav-book-aria': c.ctas && c.ctas.navAria,
      'fab-aria': c.ctas && c.ctas.fabAria,
      'fab-tooltip': c.ctas && c.ctas.fabTooltip,
      'cta-hero': c.ctas && c.ctas.hero,
      'cta-tour1': c.ctas && c.ctas.offer,
      'cta-tour2': c.ctas && c.ctas.offer,
      'cta-final': c.ctas && c.ctas.final,
      'hero-review-trust': c.hero && c.hero.trust,
      'hero-review-trust-aria': c.hero && c.hero.trustAria,
      'hero-guide': c.hero && c.hero.guide,
      'hero-price': c.hero && c.hero.price,
      'hero-price-link': c.hero && c.hero.priceLink,
      'badge-popular': offer1.badge,
      'badge-value': offer2.badge,
      'hero-kicker': c.hero && c.hero.kicker,
      'hero-h1': c.hero && c.hero.title,
      'hero-desc': c.hero && c.hero.subtitle,
      'hero-cta-secondary': c.hero && c.hero.secondaryCta,
      'benefits-kicker': c.benefits && c.benefits.kicker,
      'benefits-h2': c.benefits && c.benefits.title,
      'benefits-desc': c.benefits && c.benefits.description,
      'benefits-aria': c.benefits && c.benefits.aria,
      'benefit1-title': benefit1.title,
      'benefit1-text': benefit1.text,
      'benefit2-title': benefit2.title,
      'benefit2-text': benefit2.text,
      'benefit3-title': benefit3.title,
      'benefit3-text': benefit3.text,
      'tours-kicker': c.offers && c.offers.kicker,
      'tours-h2': c.offers && c.offers.title,
      'tours-desc': c.offers && c.offers.description,
      'trust-private': c.offers && c.offers.trust && c.offers.trust[0],
      'trust-pickup': c.offers && c.offers.trust && c.offers.trust[1],
      'trust-cancel': c.offers && c.offers.trust && c.offers.trust[2],
      'trust-languages': (cfg.schema && cfg.schema.availableLanguage || []).join(', '),
      'pc-includes-aria': c.ui && c.ui.includedAria,
      'tour-included-guide': c.offers && c.offers.included && c.offers.included[0],
      'tour-included-pickup': c.offers && c.offers.included && c.offers.included[1],
      'tour-included-transport': c.offers && c.offers.included && c.offers.included[2],
      'tour-excluded-meals': c.offers && c.offers.excluded && c.offers.excluded[0],
      'tour1-name': offer1.name,
      'tour1-tag': offer1.tag,
      'tour1-stops': offer1.stops,
      'tour1-fit': offer1.fit,
      'tour1-price': offer1.price,
      'tour1-places': offer1.places,
      'tour2-name': offer2.name,
      'tour2-tag': offer2.tag,
      'tour2-stops': offer2.stops,
      'tour2-fit': offer2.fit,
      'tour2-price': offer2.price,
      'tour2-places': offer2.places,
      'tour-per-group': c.offers && c.offers.perGroup,
      'tour-tickets-note': c.offers && c.offers.ticketNote,
      'tour-details-more': c.offers && c.offers.detailsLabel,
      'diff-kicker': c.founder && c.founder.kicker,
      'diff-h2': c.founder && c.founder.title,
      'about-trust-aria': c.founder && c.founder.trustAria,
      'diff1-h3': founderTrust[0],
      'diff2-h3': founderTrust[1],
      'diff3-h3': founderTrust[2],
      'about-bio': c.founder && c.founder.bio,
      'about-cta': c.ctas && c.ctas.about,
      'reviews-kicker': c.reviews && c.reviews.kicker,
      'reviews-h2': c.reviews && c.reviews.title,
      'reviews-trust-aria': c.reviews && c.reviews.trustAria,
      'reviews-average': c.reviews && c.reviews.averageLabel,
      'reviews-trust-note': c.reviews && c.reviews.trustNote,
      'reviews-carousel-aria': c.reviews && c.reviews.carouselAria,
      'reviews-dots-aria': c.reviews && c.reviews.dotsAria,
      'reviews-prev-aria': c.reviews && c.reviews.previousAria,
      'reviews-next-aria': c.reviews && c.reviews.nextAria,
      'reviews-view-all': c.reviews && c.reviews.viewAll,
      'reviews-view-all-aria': c.reviews && c.reviews.viewAllAria,
      'rv2-text': review1.text,
      'rv-monica-text': review2.text,
      'rv-fernando-text': review3.text,
      'rv4-text': review4.text,
      'rv5-text': review5.text,
      'rv6-text': review6.text,
      'faq-kicker': c.faq && c.faq.kicker,
      'faq-h2': c.faq && c.faq.title,
      'faq1-q': faq1.question,
      'faq1-a': faq1.answer,
      'faq2-q': faq2.question,
      'faq2-a': faq2.answer,
      'faq3-q': faq3.question,
      'faq3-a': faq3.answer,
      'faq4-q': faq4.question,
      'faq4-a': faq4.answer,
      'faq5-q': faq5.question,
      'faq5-a': faq5.answer,
      'faq6-q': faq6.question,
      'faq6-a': faq6.answer,
      'footer-note': footer.note,
      'footer-nav-aria': footer.navAria,
      'footer-social-aria': footer.socialAria,
      'footer-contact-heading': footer.contactHeading,
      'footer-location': business.location && business.location.label,
      'footer-tours': c.nav && c.nav[0] && c.nav[0].label,
      'footer-privacy': footer.privacy,
      'footer-terms': footer.terms,
      'footer-cookies': footer.cookies,
      'footer-lang-aria': footer.languageAria,
      'cta-h2': c.finalCta && c.finalCta.title,
      'cta-tagline': c.finalCta && c.finalCta.text,
      'cta-trust': c.finalCta && c.finalCta.trust,
      'foot-instagram': socialLabels.instagram,
      'foot-whatsapp': socialLabels.whatsapp,
      'foot-email': socialLabels.email,
      'foot-linkedin': socialLabels.linkedin,
      'foot-facebook': socialLabels.facebook,
      'foot-tiktok': socialLabels.tiktok
    };
  }

  window.i18n = languages.reduce(function (acc, lang) {
    acc[lang.code] = flatten(lang.code);
    return acc;
  }, {});

  window.langNames = languages.reduce(function (acc, lang) {
    acc[lang.code] = lang.label;
    return acc;
  }, {});

  window.langCodes = languages.reduce(function (acc, lang) {
    acc[lang.code] = lang.short;
    return acc;
  }, {});

  window.ogLocales = languages.reduce(function (acc, lang) {
    acc[lang.code] = lang.ogLocale;
    return acc;
  }, {});

  window.htmlLocales = languages.reduce(function (acc, lang) {
    acc[lang.code] = lang.htmlLang;
    return acc;
  }, {});
})();
