/**
 * Reusable one-page site content.
 *
 * To create another industry variant, copy this file and change the data below.
 * The HTML, CSS, and section renderers consume this configuration directly.
 */
const SITE_CONTENT = {
  business: {
    name: 'About Culture Things',
    shortName: 'Culture Things',
    industry: 'Private tours',
    url: 'https://aboutculturethings.com',
    themeColor: '#4F6B52',
    email: 'aboutculturethings@gmail.com',
    phone: '+351968510019',
    whatsapp: '351968510019',
    location: {
      locality: 'Sintra',
      region: 'Lisbon',
      country: 'PT',
      label: 'Sintra & Lisbon, Portugal',
      geoRegion: 'PT-11',
      geoPlacename: 'Sintra, Lisbon, Portugal',
      geoPosition: '38.7977;-9.3900',
      latitude: 38.7977,
      longitude: -9.3900
    }
  },
  languages: [
    { code: 'en', label: 'English', short: 'EN', htmlLang: 'en-GB', ogLocale: 'en_GB', href: 'https://aboutculturethings.com/' },
    { code: 'es', label: 'Español', short: 'ES', htmlLang: 'es-ES', ogLocale: 'es_ES', href: 'https://aboutculturethings.com/?lang=es' },
    { code: 'pt', label: 'Português', short: 'PT', htmlLang: 'pt-PT', ogLocale: 'pt_PT', href: 'https://aboutculturethings.com/?lang=pt' }
  ],
  assets: {
    logo: 'assets/images/logo-512.webp',
    hero: {
      src: 'assets/images/hero-640.webp',
      srcset: 'assets/images/hero-640.webp 640w, assets/images/hero-960.webp 960w',
      full: 'assets/images/hero-960.webp',
      width: 960,
      height: 640
    },
    founder: {
      src: 'assets/images/logo-512.webp',
      width: 512,
      height: 512
    },
    ogImage: 'https://aboutculturethings.com/assets/images/hero-960.webp'
  },
  links: {
    instagram: 'https://www.instagram.com/aboutculturethings/',
    tripadvisor: 'https://www.tripadvisor.pt/Attraction_Review-g189158-d28016472-Reviews-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html',
    legal: {
      privacy: 'https://aboutculturethings.com/privacy',
      terms: 'https://aboutculturethings.com/terms',
      cookies: 'https://aboutculturethings.com/cookies'
    },
    social: {
      instagram: 'https://www.instagram.com/aboutculturethings/',
      linkedin: '',
      facebook: '',
      tiktok: ''
    }
  },
  whatsappMessages: {
    default: "Hi, I'd like to check dates for a private Sintra tour.",
    book: "Hi, I'd like to check dates for a private Sintra tour.",
    tour1: "Hi, I'd like to check dates for the Sintra Complete Experience.",
    tour2: "Hi, I'd like to check dates for the Sintra & Hidden Beaches Experience.",
    final: "Hi, I'd like to check dates for a private Sintra tour.",
    faq: 'Hi, I have a question.'
  },
  schema: {
    types: ['LocalBusiness', 'TouristAttraction', 'TravelAgency'],
    founderId: 'rita',
    priceRange: '€275–€299',
    areaServed: ['Sintra', 'Lisbon', 'Cascais'],
    knowsAbout: ['Sintra tours', 'Pena Palace', 'private tours Portugal', 'Atlantic coast tours', 'hidden beaches Portugal'],
    availableLanguage: ['English', 'Spanish', 'Portuguese'],
    twitter: '@aboutculturethings'
  },
  content: {
    en: {
      seo: {
        title: 'About Culture Things — Private Sintra Tours',
        description: 'Private Sintra tours from Lisbon with local experts, iconic landmarks, hidden viewpoints, flexible pacing, and Lisbon pickup. 5.0★ TripAdvisor.',
        author: 'About Culture Things',
        ogTitle: 'About Culture Things — Private Sintra Tours',
        ogDescription: 'Private Sintra tours from Lisbon with local experts, iconic landmarks, hidden viewpoints, flexible pacing, and Lisbon pickup.',
        twitterTitle: 'About Culture Things — Sintra Tours',
        twitterDescription: 'Private Sintra tours from Lisbon with local experts. 5.0★ TripAdvisor. Pena Palace, hidden beaches, Cascais.',
        imageAlt: "Private tour guests on Portugal's Atlantic coast — About Culture Things Sintra tours"
      },
      ui: {
        skipLink: 'Skip to main content',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        backToTop: 'Back to top',
        scrollToExplore: 'Scroll to explore',
        includedAria: "What's included and excluded"
      },
      nav: [
        { label: 'Tours', href: '#tours', key: 'tours' },
        { label: 'Gallery', href: '#gallery', key: 'gallery' },
        { label: 'Reviews', href: '#reviews', key: 'reviews' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Check dates',
        hero: 'Check dates on WhatsApp',
        offer: 'Check dates on WhatsApp',
        final: 'Check dates on WhatsApp',
        navAria: 'Book on WhatsApp',
        fabAria: 'Check dates on WhatsApp',
        fabTooltip: 'Check dates on WhatsApp'
      },
      hero: {
        kicker: 'Private Sintra Tours',
        title: 'Private Sintra Tours With Local Experts',
        subtitle: 'Private tours from Lisbon with flexible pacing, iconic landmarks, hidden viewpoints, and personalized experiences for your group.',
        secondaryCta: 'See tours',
        trust: '5.0 on TripAdvisor',
        trustAria: 'View customer reviews',
        highlights: 'Private Groups Up To 4 Guests · Lisbon Pickup Included',
        guide: 'Sintra-born local expertise with English, Portuguese, and Spanish support',
        price: 'From €275 per private group (up to 4)',
        priceLink: 'See both tours ↓',
        imageAlt: "Private tour guests on Portugal's Atlantic coast"
      },
      benefits: {
        kicker: 'Why choose us',
        title: 'Why Travelers Choose Our Private Sintra Tours',
        description: '',
        aria: 'Why choose About Culture Things',
        items: [
          { title: 'Private Experience', text: 'Explore at your own pace without large tour groups.', icon: 'plus' },
          { title: 'Local Expertise', text: 'Discover iconic landmarks and lesser-known locations.', icon: 'pin' },
          { title: 'Easy Planning', text: 'Simple booking and direct communication through WhatsApp.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Tours & pricing',
        title: 'Choose Your Private Sintra Tour',
        description: '',
        trustAria: 'Tour guarantees',
        trust: ['Private groups up to 4 guests', 'Lisbon pickup included', 'Flexible pacing'],
        perGroup: 'per private group',
        ticketNote: 'Palace tickets not included (~€20/person extra)',
        detailsLabel: 'Main highlights',
        included: ['Private guide', 'Lisbon pickup', 'Transport'],
        excluded: ['Meals'],
        items: [
          {
            id: 'tour1',
            badge: 'Full day · First visit',
            name: 'Sintra Complete Experience & Atlantic Coast',
            tag: '7 hours · Max 4 guests',
            stops: 'Historic Sintra · Pena · Cabo da Roca',
            fit: 'Best for first-time visitors who want Sintra, the western edge of Europe, and Cascais in one private day.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Cabo da Roca · Cascais',
            image: 'assets/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Sintra Complete Experience & Atlantic Coast',
            featured: true
          },
          {
            id: 'tour2',
            badge: 'Half day · Coast & beaches',
            name: 'Sintra & Hidden Beaches Experience',
            tag: '5 hours · Max 4 guests',
            stops: 'Sintra hills · Hidden coves · Azenhas do Mar',
            fit: 'Best for a slower coastal route, quiet viewpoints, and families who prefer a shorter private tour.',
            price: '€275',
            priceValue: '275',
            currency: 'EUR',
            places: 'Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'assets/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Sintra & Hidden Beaches Experience'
          }
        ]
      },
      gallery: {
        kicker: 'Experience gallery',
        title: 'See What Your Day In Sintra Could Look Like',
        items: [
          { src: 'assets/images/pena.webp', srcset: 'assets/images/pena-640.webp 640w, assets/images/pena.webp 1003w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1003, height: 1400, alt: 'Pena Palace rising above the forest in Sintra' },
          { src: 'assets/images/Cabo%20da%20Roca.webp', srcset: 'assets/images/Cabo%20da%20Roca-640.webp 640w, assets/images/Cabo%20da%20Roca.webp 933w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 933, height: 1400, alt: 'Cabo da Roca cliffs overlooking the Atlantic Ocean' },
          { src: 'assets/images/Azenhas%20do%20Mar.webp', srcset: 'assets/images/Azenhas%20do%20Mar-640.webp 640w, assets/images/Azenhas%20do%20Mar.webp 1050w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1050, height: 1400, alt: 'Azenhas do Mar coastal village above the Atlantic' },
          { src: 'assets/images/cascais.webp', srcset: 'assets/images/cascais-640.webp 640w, assets/images/cascais.webp 1400w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1400, height: 933, alt: 'Cascais coastline on a private Sintra day tour' },
          { src: 'assets/images/castelo.webp', srcset: 'assets/images/castelo-640.webp 640w, assets/images/castelo.webp 933w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 933, height: 1400, alt: 'Castelo dos Mouros stone walls in Sintra' },
          { src: 'assets/images/regaleira.webp', srcset: 'assets/images/regaleira-640.webp 640w, assets/images/regaleira.webp 1050w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1050, height: 1400, alt: 'Quinta da Regaleira architecture surrounded by Sintra gardens' }
        ]
      },
      reviews: {
        kicker: 'Social proof',
        title: 'What Guests Say About Their Experience',
        trustAria: 'TripAdvisor rating summary',
        averageLabel: 'average rating',
        trustNote: '★★★★★ 5.0 Rating on TripAdvisor.',
        gridAria: 'Customer reviews',
        dotsAria: 'Review pagination',
        previousAria: 'Show previous reviews',
        nextAria: 'Show next reviews',
        viewAll: 'Read more reviews on TripAdvisor',
        viewAllAria: 'Read more reviews on TripAdvisor (opens in new tab)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 out of 5 average rating',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Warm, personal, and full of local insight. Our guide made Sintra feel special from start to finish."' },
          { initials: 'MM', name: 'Monica M.', text: '"Clear, friendly, and well-paced. Our guide knew exactly where to go and how to make it easy."' },
          { initials: 'FG', name: 'Fernando G.', text: '"Local knowledge made the difference. We saw places we would never have found on our own."' },
          { initials: 'AT', name: 'Amanda T.', text: '"A relaxed private tour with great stories, smart pacing, and thoughtful local recommendations."' },
          { initials: 'LS', name: 'Laura S.', text: '"Professional, warm, and deeply knowledgeable. The whole day felt easy and well looked after."' },
          { initials: 'JW', name: 'James W.', text: '"Memorable from the first stop. Our local team showed the best viewpoints and hidden spots with care."' }
        ]
      },
      founder: {
        kicker: 'Local team',
        title: 'Local expertise behind your tour',
        trustAria: 'Local team trust points',
        name: 'About Culture Things',
        role: 'Private Tour Company',
        bio: 'Our local team designs calm, personal tours for travelers who want more than a standard sightseeing route, with local context, flexible pacing, and carefully chosen stops.',
        imageAlt: 'About Culture Things local Sintra tour team',
        trust: ['Sintra local expertise', 'Small private tours', 'English / Portuguese / Spanish']
      },
      faq: {
        kicker: 'FAQ',
        title: 'Frequently Asked Questions',
        items: [
          { question: 'What do the Sintra tours include?', answer: 'Pickup in Lisbon, private guide, and transport. Max 4 guests. Palace tickets are not included.' },
          { question: 'How do I book?', answer: 'Message us on WhatsApp to check dates, payment options, and booking details. You can also book through Viator when available.' },
          { question: 'Can I cancel?', answer: "Yes, with 24 hours' notice at no cost." },
          { question: 'Where does pickup happen?', answer: 'From your hotel or accommodation in Lisbon. Pickup details are confirmed when you book.' },
          { question: 'Can the tour be customized?', answer: 'Yes. Stops, pace, and route can be adapted for your group, weather, and interests.' }
        ]
      },
      finalCta: {
        title: 'Ready To Explore Sintra Your Way?',
        text: 'Send your preferred date and our local team will help you choose the best route.',
        trust: '★★★★★ 5.0 Rating · Private Groups · Lisbon Pickup Included'
      },
      footer: {
        contactAria: 'Contact',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    es: {
      seo: {
        title: 'About Culture Things — Tours Privados en Sintra',
        description: 'Tours privados en Sintra con expertos locales — Palacio da Pena, playas secretas, costa de Cascais. 5.0★ TripAdvisor. Recogida en Lisboa, máx. 4 personas.',
        author: 'About Culture Things',
        ogTitle: 'About Culture Things — Tours Privados en Sintra',
        ogDescription: 'Tours privados en Sintra con expertos locales — Palacio da Pena, playas secretas, costa de Cascais. 5.0★ TripAdvisor. Recogida en Lisboa, máx. 4 personas.',
        twitterTitle: 'About Culture Things — Tours en Sintra',
        twitterDescription: 'Tours privados en Sintra con expertos locales. 5.0★ TripAdvisor. Palacio da Pena, playas secretas, Cascais. Máx. 4 personas.',
        imageAlt: 'Huéspedes de un tour privado en la costa atlántica de Portugal'
      },
      ui: {
        skipLink: 'Saltar al contenido principal',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        backToTop: 'Volver arriba',
        scrollToExplore: 'Desplázate para explorar',
        includedAria: 'Qué incluye y qué no'
      },
      nav: [
        { label: 'Tours', href: '#tours', key: 'tours' },
        { label: 'Galería', href: '#gallery', key: 'gallery' },
        { label: 'Reseñas', href: '#reviews', key: 'reviews' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Consultar fechas',
        hero: 'Consultar fechas en WhatsApp',
        offer: 'Consultar fechas en WhatsApp',
        final: 'Consultar fechas en WhatsApp',
        navAria: 'Reservar por WhatsApp',
        fabAria: 'Consultar fechas en WhatsApp',
        fabTooltip: 'Consultar fechas en WhatsApp'
      },
      hero: {
        kicker: 'Tours Privados en Sintra',
        title: 'Tours Privados en Sintra con Expertos Locales',
        subtitle: 'Tours privados desde Lisboa con ritmo flexible, lugares icónicos, miradores escondidos y experiencias personalizadas para tu grupo.',
        secondaryCta: 'Ver tours',
        trust: '5.0 en TripAdvisor',
        trustAria: 'Ver reseñas de clientes',
        highlights: 'Grupos privados hasta 4 personas · Recogida en Lisboa incluida',
        guide: 'Con experiencia local de Sintra',
        price: 'Desde €275 por grupo privado (hasta 4)',
        priceLink: 'Ver ambos tours ↓',
        imageAlt: 'Huéspedes de un tour privado en la costa atlántica de Portugal'
      },
      benefits: {
        kicker: 'Por qué elegirnos',
        title: 'Por Qué Los Viajeros Eligen Nuestros Tours Privados En Sintra',
        description: '',
        aria: 'Por qué elegir About Culture Things',
        items: [
          { title: 'Experiencia Privada', text: 'Explora a tu ritmo sin grandes grupos turísticos.', icon: 'plus' },
          { title: 'Experiencia Local', text: 'Descubre lugares icónicos y ubicaciones menos conocidas.', icon: 'pin' },
          { title: 'Planificación Fácil', text: 'Reserva simple y comunicación directa por WhatsApp.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Tours y precios',
        title: 'Elige Tu Tour Privado En Sintra',
        description: '',
        trustAria: 'Garantías del tour',
        trust: ['Grupos privados hasta 4 personas', 'Recogida en Lisboa incluida', 'Ritmo flexible'],
        perGroup: 'por grupo privado',
        ticketNote: 'Entradas a palacios no incluidas (~€20/persona extra)',
        detailsLabel: 'Qué incluye e itinerario completo',
        included: ['Guía privada', 'Recogida en Lisboa', 'Transporte'],
        excluded: ['Comidas'],
        items: [
          {
            id: 'tour1',
            badge: 'Día completo · Primera visita',
            name: 'Sintra Completa & Costa Atlántica',
            tag: '7 horas · Máx. 4 personas',
            stops: 'Sintra histórica · Pena · Cabo da Roca',
            fit: 'Ideal para quienes visitan por primera vez y quieren Sintra, el extremo occidental de Europa y Cascais en un día privado.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Cabo da Roca · Cascais',
            image: 'assets/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Sintra Completa & Costa Atlántica',
            featured: true
          },
          {
            id: 'tour2',
            badge: 'Medio día · Costa y playas',
            name: 'Sintra & Playas Escondidas',
            tag: '5 horas · Máx. 4 personas',
            stops: 'Colinas de Sintra · Calas ocultas · Azenhas do Mar',
            fit: 'Ideal para una ruta costera más tranquila, miradores silenciosos y familias que prefieren un tour privado más corto.',
            price: '€275',
            priceValue: '275',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'assets/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Sintra & Playas Escondidas'
          }
        ]
      },
      gallery: {
        kicker: 'Galería',
        title: 'Mira Cómo Podría Ser Tu Día En Sintra',
        items: [
          { src: 'assets/images/pena.webp', srcset: 'assets/images/pena-640.webp 640w, assets/images/pena.webp 1003w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1003, height: 1400, alt: 'Palacio da Pena sobre el bosque de Sintra' },
          { src: 'assets/images/Cabo%20da%20Roca.webp', srcset: 'assets/images/Cabo%20da%20Roca-640.webp 640w, assets/images/Cabo%20da%20Roca.webp 933w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 933, height: 1400, alt: 'Acantilados de Cabo da Roca frente al océano Atlántico' },
          { src: 'assets/images/Azenhas%20do%20Mar.webp', srcset: 'assets/images/Azenhas%20do%20Mar-640.webp 640w, assets/images/Azenhas%20do%20Mar.webp 1050w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1050, height: 1400, alt: 'Azenhas do Mar sobre la costa atlántica' },
          { src: 'assets/images/cascais.webp', srcset: 'assets/images/cascais-640.webp 640w, assets/images/cascais.webp 1400w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1400, height: 933, alt: 'Costa de Cascais durante un tour privado por Sintra' },
          { src: 'assets/images/castelo.webp', srcset: 'assets/images/castelo-640.webp 640w, assets/images/castelo.webp 933w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 933, height: 1400, alt: 'Murallas del Castelo dos Mouros en Sintra' },
          { src: 'assets/images/regaleira.webp', srcset: 'assets/images/regaleira-640.webp 640w, assets/images/regaleira.webp 1050w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1050, height: 1400, alt: 'Arquitectura de Quinta da Regaleira entre jardines de Sintra' }
        ]
      },
      reviews: {
        kicker: 'Prueba social',
        title: 'Lo Que Dicen Los Huéspedes Sobre Su Experiencia',
        trustAria: 'Resumen de valoración en TripAdvisor',
        averageLabel: 'valoración media',
        trustNote: '★★★★★ 5.0 Valoración en TripAdvisor.',
        gridAria: 'Reseñas de clientes',
        dotsAria: 'Paginación de reseñas',
        previousAria: 'Mostrar reseñas anteriores',
        nextAria: 'Mostrar reseñas siguientes',
        viewAll: 'Leer más reseñas en TripAdvisor',
        viewAllAria: 'Leer más reseñas en TripAdvisor (se abre en una pestaña nueva)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 valoración media',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Cálida, cercana y con mucho conocimiento local. Nuestra guía hizo que Sintra se sintiera especial."' },
          { initials: 'MM', name: 'Monica M.', text: '"Muy clara, amable y bien organizada. Nuestra guía supo exactamente a dónde ir y cómo hacerlo fácil."' },
          { initials: 'FG', name: 'Fernando G.', text: '"Su conocimiento local marcó la diferencia. Vimos lugares que nunca habríamos encontrado solos."' },
          { initials: 'AT', name: 'Amanda T.', text: '"Un tour privado relajado, con buenas historias, buen ritmo y recomendaciones locales útiles."' },
          { initials: 'LS', name: 'Laura S.', text: '"Profesional, cálida y muy preparada. Todo el día se sintió fácil y bien cuidado."' },
          { initials: 'JW', name: 'James W.', text: '"Inolvidable desde la primera parada. Nuestro equipo local mostró miradores y rincones escondidos con cuidado."' }
        ]
      },
      founder: {
        kicker: 'Equipo local',
        title: 'Experiencia local detrás del tour',
        trustAria: 'Datos de confianza del equipo local',
        name: 'About Culture Things',
        role: 'Empresa de tours privados',
        bio: 'Nuestro equipo local diseña tours tranquilos y personales para viajeros que quieren algo más que una ruta turística estándar, con contexto local, ritmo flexible y paradas bien elegidas.',
        imageAlt: 'Equipo local de tours en Sintra',
        trust: ['Experiencia local en Sintra', 'Tours privados pequeños', 'Inglés / portugués / español']
      },
      faq: {
        kicker: 'FAQ',
        title: 'Preguntas Frecuentes',
        items: [
          { question: '¿Qué incluyen los tours de Sintra?', answer: 'Recogida en Lisboa, guía privada y transporte. Máx. 4 personas. Entradas a palacios no incluidas.' },
          { question: '¿Cómo reservo?', answer: 'Escríbenos por WhatsApp para consultar fechas, opciones de pago y detalles de reserva. También puedes reservar en Viator cuando esté disponible.' },
          { question: '¿Puedo cancelar?', answer: 'Sí, con 24 horas de antelación y sin coste.' },
          { question: '¿Dónde es la recogida?', answer: 'En tu hotel o alojamiento en Lisboa. Los detalles se confirman al reservar.' },
          { question: '¿Se puede personalizar el tour?', answer: 'Sí. Las paradas, el ritmo y la ruta pueden adaptarse a tu grupo, al clima y a tus intereses.' }
        ]
      },
      finalCta: {
        title: '¿Listo Para Explorar Sintra A Tu Manera?',
        text: 'Envía tu fecha preferida y nuestro equipo local te ayudará a elegir la mejor ruta.',
        trust: '★★★★★ Valoración 5.0 · Grupos privados · Recogida en Lisboa incluida'
      },
      footer: {
        contactAria: 'Contacto',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    pt: {
      seo: {
        title: 'About Culture Things — Tours Privados em Sintra',
        description: 'Tours privados em Sintra com especialistas locais — Palácio da Pena, praias escondidas, costa de Cascais. 5.0★ TripAdvisor. Recolha em Lisboa, máx. 4 pessoas.',
        author: 'About Culture Things',
        ogTitle: 'About Culture Things — Tours Privados em Sintra',
        ogDescription: 'Tours privados em Sintra com especialistas locais — Palácio da Pena, praias escondidas, costa de Cascais. 5.0★ TripAdvisor. Recolha em Lisboa, máx. 4 pessoas.',
        twitterTitle: 'About Culture Things — Tours em Sintra',
        twitterDescription: 'Tours privados em Sintra com especialistas locais. 5.0★ TripAdvisor. Palácio da Pena, praias escondidas, Cascais. Máx. 4 pessoas.',
        imageAlt: 'Hóspedes de um tour privado na costa atlântica de Portugal'
      },
      ui: {
        skipLink: 'Saltar para o conteúdo principal',
        openMenu: 'Abrir menu',
        closeMenu: 'Fechar menu',
        backToTop: 'Voltar ao topo',
        scrollToExplore: 'Desliza para explorar',
        includedAria: 'O que inclui e o que não inclui'
      },
      nav: [
        { label: 'Tours', href: '#tours', key: 'tours' },
        { label: 'Galeria', href: '#gallery', key: 'gallery' },
        { label: 'Avaliações', href: '#reviews', key: 'reviews' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Ver datas',
        hero: 'Verificar datas no WhatsApp',
        offer: 'Ver datas no WhatsApp',
        final: 'Ver datas no WhatsApp',
        navAria: 'Reservar no WhatsApp',
        fabAria: 'Ver datas no WhatsApp',
        fabTooltip: 'Ver datas no WhatsApp'
      },
      hero: {
        kicker: 'Tours Privados em Sintra',
        title: 'Tours Privados em Sintra com Especialistas Locais',
        subtitle: 'Tours privados desde Lisboa com ritmo flexível, marcos icónicos, miradouros escondidos e experiências personalizadas para o teu grupo.',
        secondaryCta: 'Ver tours',
        trust: '5.0 no TripAdvisor',
        trustAria: 'Ver avaliações de clientes',
        highlights: 'Grupos privados até 4 pessoas · Recolha em Lisboa incluída',
        guide: 'Com experiência local de Sintra',
        price: 'Desde €275 por grupo privado (até 4)',
        priceLink: 'Ver ambos os tours ↓',
        imageAlt: 'Hóspedes de um tour privado na costa atlântica de Portugal'
      },
      benefits: {
        kicker: 'Porquê escolher-nos',
        title: 'Porque Os Viajantes Escolhem Os Nossos Tours Privados Em Sintra',
        description: '',
        aria: 'Porquê escolher About Culture Things',
        items: [
          { title: 'Experiência Privada', text: 'Explora ao teu ritmo, sem grandes grupos turísticos.', icon: 'plus' },
          { title: 'Conhecimento Local', text: 'Descobre marcos icónicos e locais menos conhecidos.', icon: 'pin' },
          { title: 'Planeamento Fácil', text: 'Reserva simples e comunicação direta pelo WhatsApp.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Tours e preços',
        title: 'Escolhe O Teu Tour Privado Em Sintra',
        description: '',
        trustAria: 'Garantias do tour',
        trust: ['Grupos privados até 4 pessoas', 'Recolha em Lisboa incluída', 'Ritmo flexível'],
        perGroup: 'por grupo privado',
        ticketNote: 'Bilhetes para palácios não incluídos (~€20/pessoa extra)',
        detailsLabel: 'O que inclui e itinerário completo',
        included: ['Guia privada', 'Recolha em Lisboa', 'Transporte'],
        excluded: ['Refeições'],
        items: [
          {
            id: 'tour1',
            badge: 'Dia inteiro · Primeira visita',
            name: 'Sintra Completa & Costa Atlântica',
            tag: '7 horas · Máx. 4 pessoas',
            stops: 'Sintra histórica · Pena · Cabo da Roca',
            fit: 'Ideal para quem visita pela primeira vez e quer Sintra, o ponto mais ocidental da Europa e Cascais num dia privado.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Cabo da Roca · Cascais',
            image: 'assets/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Sintra Completa & Costa Atlântica',
            featured: true
          },
          {
            id: 'tour2',
            badge: 'Meio dia · Costa e praias',
            name: 'Sintra & Praias Escondidas',
            tag: '5 horas · Máx. 4 pessoas',
            stops: 'Colinas de Sintra · Enseadas escondidas · Azenhas do Mar',
            fit: 'Ideal para uma rota costeira mais tranquila, miradouros calmos e famílias que preferem um tour privado mais curto.',
            price: '€275',
            priceValue: '275',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'assets/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Sintra & Praias Escondidas'
          }
        ]
      },
      gallery: {
        kicker: 'Galeria',
        title: 'Vê Como Pode Ser O Teu Dia Em Sintra',
        items: [
          { src: 'assets/images/pena.webp', srcset: 'assets/images/pena-640.webp 640w, assets/images/pena.webp 1003w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1003, height: 1400, alt: 'Palácio da Pena sobre a floresta de Sintra' },
          { src: 'assets/images/Cabo%20da%20Roca.webp', srcset: 'assets/images/Cabo%20da%20Roca-640.webp 640w, assets/images/Cabo%20da%20Roca.webp 933w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 933, height: 1400, alt: 'Falésias do Cabo da Roca sobre o oceano Atlântico' },
          { src: 'assets/images/Azenhas%20do%20Mar.webp', srcset: 'assets/images/Azenhas%20do%20Mar-640.webp 640w, assets/images/Azenhas%20do%20Mar.webp 1050w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1050, height: 1400, alt: 'Azenhas do Mar sobre a costa atlântica' },
          { src: 'assets/images/cascais.webp', srcset: 'assets/images/cascais-640.webp 640w, assets/images/cascais.webp 1400w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1400, height: 933, alt: 'Costa de Cascais num tour privado por Sintra' },
          { src: 'assets/images/castelo.webp', srcset: 'assets/images/castelo-640.webp 640w, assets/images/castelo.webp 933w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 933, height: 1400, alt: 'Muralhas do Castelo dos Mouros em Sintra' },
          { src: 'assets/images/regaleira.webp', srcset: 'assets/images/regaleira-640.webp 640w, assets/images/regaleira.webp 1050w', sizes: '(max-width: 47.99rem) 100vw, (max-width: 63.99rem) 50vw, 33vw', width: 1050, height: 1400, alt: 'Arquitetura da Quinta da Regaleira entre jardins de Sintra' }
        ]
      },
      reviews: {
        kicker: 'Prova social',
        title: 'O Que Os Hóspedes Dizem Sobre A Experiência',
        trustAria: 'Resumo da classificação no TripAdvisor',
        averageLabel: 'classificação média',
        trustNote: '★★★★★ 5.0 Classificação no TripAdvisor.',
        gridAria: 'Avaliações de clientes',
        dotsAria: 'Paginação das avaliações',
        previousAria: 'Mostrar avaliações anteriores',
        nextAria: 'Mostrar avaliações seguintes',
        viewAll: 'Ler mais avaliações no TripAdvisor',
        viewAllAria: 'Ler mais avaliações no TripAdvisor (abre num novo separador)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 classificação média',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Próxima e cheia de conhecimento local. A nossa guia tornou Sintra especial do início ao fim."' },
          { initials: 'MM', name: 'Monica M.', text: '"Muito clara, simpática e bem organizada. A nossa guia soube exatamente para onde ir e como facilitar."' },
          { initials: 'FG', name: 'Fernando G.', text: '"O conhecimento local fez toda a diferença. Vimos lugares que nunca encontraríamos sozinhos."' },
          { initials: 'AT', name: 'Amanda T.', text: '"Um tour privado descontraído, com boas histórias, bom ritmo e sugestões locais úteis."' },
          { initials: 'LS', name: 'Laura S.', text: '"Profissional, calorosa e muito preparada. O dia todo foi fácil e bem cuidado."' },
          { initials: 'JW', name: 'James W.', text: '"Inesquecível desde a primeira paragem. A nossa equipa local mostrou miradouros e recantos escondidos com cuidado."' }
        ]
      },
      founder: {
        kicker: 'Equipa local',
        title: 'Experiência local por trás do tour',
        trustAria: 'Pontos de confiança da equipa local',
        name: 'About Culture Things',
        role: 'Empresa de tours privados',
        bio: 'A nossa equipa local desenha tours calmos e pessoais para viajantes que querem mais do que uma rota turística padrão, com contexto local, ritmo flexível e paragens bem escolhidas.',
        imageAlt: 'Equipa local de tours em Sintra',
        trust: ['Experiência local em Sintra', 'Tours privados pequenos', 'Inglês / português / espanhol']
      },
      faq: {
        kicker: 'FAQ',
        title: 'Perguntas Frequentes',
        items: [
          { question: 'O que incluem os tours de Sintra?', answer: 'Recolha em Lisboa, guia privada e transporte. Máx. 4 pessoas. Bilhetes de palácios não incluídos.' },
          { question: 'Como reservo?', answer: 'Envia-nos mensagem no WhatsApp para verificar datas, opções de pagamento e detalhes de reserva. Também podes reservar na Viator quando disponível.' },
          { question: 'Posso cancelar?', answer: 'Sim, com 24 horas de antecedência sem custo.' },
          { question: 'Onde é a recolha?', answer: 'No teu hotel ou alojamento em Lisboa. Os detalhes são confirmados quando reservas.' },
          { question: 'O tour pode ser personalizado?', answer: 'Sim. As paragens, ritmo e rota podem ser adaptados ao teu grupo, ao tempo e aos teus interesses.' }
        ]
      },
      finalCta: {
        title: 'Pronto Para Explorar Sintra À Tua Maneira?',
        text: 'Envia a tua data preferida e a nossa equipa local ajuda-te a escolher a melhor rota.',
        trust: '★★★★★ Classificação 5.0 · Grupos privados · Recolha em Lisboa incluída'
      },
      footer: {
        contactAria: 'Contacto',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
