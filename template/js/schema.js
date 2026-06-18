/** JSON-LD built from site/content.js — keeps index.html lean. */
(function () {
  function cfg() { return window.SITE_CONTENT || {}; }

  function content(lang) {
    const c = cfg();
    return (c.content && c.content[lang]) || (c.content && c.content.en) || {};
  }

  function stripQuote(text) {
    return String(text || '').replace(/^"|"$/g, '');
  }

  window.buildSchemaGraph = function (lang) {
    const site = cfg();
    const b = site.business || {};
    const base = (b.url || '').replace(/\/$/, '');
    const c = content(lang);
    const schema = site.schema || {};
    const links = site.links || {};
    const offers = (c.offers && c.offers.items) || [];
    const faq = (c.faq && c.faq.items) || [];
    const reviews = (c.reviews && c.reviews.items) || [];
    const types = schema.types || ['LocalBusiness'];

    const business = {
      '@type': types.length === 1 ? types[0] : types,
      '@id': base + '#business',
      name: b.name,
      url: base + '/',
      logo: base + '/' + (site.assets && site.assets.logo),
      image: site.assets && site.assets.ogImage,
      telephone: b.phone,
      email: b.email,
      priceRange: schema.priceRange,
      address: {
        '@type': 'PostalAddress',
        addressLocality: b.location && b.location.locality,
        addressRegion: b.location && b.location.region,
        addressCountry: b.location && b.location.country
      },
      sameAs: [links.instagram, links.tripadvisor].filter(Boolean)
    };

    if (reviews.length) {
      business.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: (c.reviews && c.reviews.ratingValue) || '5.0',
        reviewCount: String(reviews.length),
        bestRating: '5',
        worstRating: '1'
      };
    }

    if (offers.length) {
      business.hasOfferCatalog = {
        '@type': 'OfferCatalog',
        name: 'Private Tours',
        itemListElement: offers.map(function (offer) {
          return {
            '@type': 'Offer',
            name: offer.name,
            price: offer.priceValue,
            priceCurrency: offer.currency || 'EUR'
          };
        })
      };
    }

    const graph = [
      {
        '@type': 'WebSite',
        '@id': base + '#website',
        url: base + '/',
        name: b.name,
        inLanguage: (site.languages || []).map(function (l) { return l.htmlLang; }),
        publisher: { '@id': base + '#business' }
      },
      {
        '@type': 'WebPage',
        '@id': base + '#webpage',
        url: base + '/',
        name: (c.seo && c.seo.title) || b.name,
        description: c.seo && c.seo.description,
        isPartOf: { '@id': base + '#website' },
        about: { '@id': base + '#business' },
        primaryImageOfPage: site.assets && site.assets.ogImage
      },
      business,
      {
        '@type': 'FAQPage',
        '@id': base + '#faq',
        mainEntity: faq.map(function (item) {
          return {
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer }
          };
        })
      }
    ];

    reviews.slice(0, 3).forEach(function (item) {
      graph.push({
        '@type': 'Review',
        author: { '@type': 'Person', name: item.name },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: stripQuote(item.text),
        itemReviewed: { '@id': base + '#business' }
      });
    });

    return { '@context': 'https://schema.org', '@graph': graph };
  };

  window.updateStructuredData = function (lang) {
    const node = document.getElementById('structured-data');
    if (!node || typeof window.buildSchemaGraph !== 'function') return;
    node.textContent = JSON.stringify(buildSchemaGraph(lang));
  };
})();
