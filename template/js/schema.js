/** JSON-LD built from site/content.js — keeps index.html lean. */
(function () {
  function cfg() { return window.SITE_CONTENT || {}; }

  function content(lang) {
    const c = cfg();
    return (c.content && c.content[lang]) || (c.content && c.content.en) || {};
  }

  function langMeta(lang) {
    const c = cfg();
    return (c.languages || []).find(function (l) { return l.code === lang; }) || {};
  }

  window.buildSchemaGraph = function (lang) {
    const site = cfg();
    const b = site.business || {};
    const base = (b.url || '').replace(/\/$/, '');
    const c = content(lang);
    const lm = langMeta(lang);
    const schema = site.schema || {};
    const links = site.links || {};
    const offers = (c.offers && c.offers.items) || [];
    const faq = (c.faq && c.faq.items) || [];
    const types = schema.types || ['LocalBusiness'];
    const pageUrl = lm.href || base + '/';

    const business = {
      '@type': types.length === 1 ? types[0] : types,
      '@id': base + '#business',
      name: b.name,
      description: c.seo && c.seo.description,
      url: base + '/',
      logo: base + '/' + (site.assets && site.assets.logo),
      image: site.assets && site.assets.ogImage,
      telephone: b.phone,
      email: b.email,
      priceRange: schema.priceRange,
      currenciesAccepted: 'EUR',
      address: {
        '@type': 'PostalAddress',
        addressLocality: b.location && b.location.locality,
        addressRegion: b.location && b.location.region,
        addressCountry: b.location && b.location.country
      },
      sameAs: [links.instagram, links.tripadvisor].filter(Boolean)
    };

    if (b.location && b.location.latitude != null) {
      business.geo = {
        '@type': 'GeoCoordinates',
        latitude: b.location.latitude,
        longitude: b.location.longitude
      };
    }

    if (schema.areaServed && schema.areaServed.length) {
      business.areaServed = schema.areaServed.map(function (area) {
        return { '@type': 'AdministrativeArea', name: area };
      });
    }

    if (schema.knowsAbout && schema.knowsAbout.length) {
      business.knowsAbout = schema.knowsAbout;
    }

    if (schema.availableLanguage && schema.availableLanguage.length) {
      business.availableLanguage = schema.availableLanguage;
    }

    if (offers.length) {
      business.hasOfferCatalog = {
        '@type': 'OfferCatalog',
        name: (c.offers && c.offers.title) || 'Private tours from Lisbon',
        itemListElement: offers.map(function (offer, index) {
          return {
            '@type': 'Offer',
            position: index + 1,
            name: offer.name,
            description: offer.fit,
            price: offer.priceValue,
            priceCurrency: offer.currency || 'EUR',
            url: base + '/experiences/' + (offer.slug || offer.id) + '/',
            itemOffered: { '@id': base + '#tour-' + offer.id }
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
        description: c.seo && c.seo.description,
        inLanguage: (site.languages || []).map(function (l) { return l.htmlLang; }),
        publisher: { '@id': base + '#business' }
      },
      {
        '@type': 'WebPage',
        '@id': pageUrl + '#webpage',
        url: pageUrl,
        name: (c.seo && c.seo.title) || b.name,
        description: c.seo && c.seo.description,
        inLanguage: lm.htmlLang || 'en-GB',
        isPartOf: { '@id': base + '#website' },
        about: { '@id': base + '#business' },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: site.assets && site.assets.ogImage,
          width: site.assets && site.assets.hero && site.assets.hero.width,
          height: site.assets && site.assets.hero && site.assets.hero.height
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.hero-desc', '.faq-list', '.benefits-grid']
        },
        dateModified: '2026-08-25'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': base + '#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: b.name, item: base + '/' },
          { '@type': 'ListItem', position: 2, name: c.offers && c.offers.title, item: pageUrl + '#tours' }
        ]
      },
      business,
      {
        '@type': 'Person',
        '@id': base + '#rita',
        name: 'Rita',
        jobTitle: 'Founder and local guide',
        worksFor: { '@id': base + '#business' }
      },
      {
        '@type': 'FAQPage',
        '@id': pageUrl + '#faq',
        mainEntity: faq.map(function (item) {
          return {
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer }
          };
        })
      }
    ];

    offers.forEach(function (offer) {
      graph.push({
        '@type': 'TouristTrip',
        '@id': base + '#tour-' + offer.id,
        name: offer.name,
        description: offer.fit,
        image: base + '/' + offer.image,
        touristType: 'Private group (max 4 guests)',
        itinerary: {
          '@type': 'ItemList',
          name: offer.stops,
          itemListElement: String(offer.places || '').split(' · ').filter(Boolean).map(function (place, i) {
            return { '@type': 'ListItem', position: i + 1, name: place };
          })
        },
        offers: {
          '@type': 'Offer',
          price: offer.priceValue,
          priceCurrency: offer.currency || 'EUR',
          url: base + '/experiences/' + (offer.slug || offer.id) + '/'
        },
        provider: { '@id': base + '#business' }
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
