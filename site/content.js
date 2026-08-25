/**
 * Project content — edit this file when customizing a new site.
 *
 * Copy the whole project folder, then update business data, copy, images
 * in site/images/, and root files (sitemap.xml, llms.txt, site.webmanifest).
 * Leave template/ unchanged unless you are improving the shared engine.
 */
const SITE_CONTENT = {
  business: {
    name: 'About Culture Things',
    shortName: 'Culture Things',
    industry: 'Shared small-group tours',
    url: 'https://aboutculturethings.com',
    themeColor: '#3D5A47',
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
    logo: 'site/images/logo-512.webp',
    hero: {
      src: 'site/images/hero-640.webp',
      srcset: 'site/images/hero-640.webp 640w, site/images/hero-960.webp 960w',
      full: 'site/images/hero-960.webp',
      width: 960,
      height: 640
    },
    ogImage: 'https://aboutculturethings.com/site/images/hero-960.webp'
  },
  links: {
    instagram: 'https://www.instagram.com/aboutculturethings/',
    instagramHandle: '@aboutculturethings',
    tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g189158-d28016472-Reviews-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html',
    tripadvisorReview: 'https://www.tripadvisor.com/UserReviewEdit-g189158-d28016472-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html',
    fscLanguages: 'https://fsclanguages.com',
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
    en: {
      default: "Hello About Culture Things! I'd like to check seats for a shared tour from Lisbon.",
      book: "Hello About Culture Things! I'd like to check seats for a shared tour from Lisbon.",
      tour1: "Hello! I'm interested in the shared Sintra Complete & Atlantic Coast tour. Could you check my dates and number of travellers?",
      tour2: "Hello! I'm interested in the shared Sintra & Hidden Beaches tour. Could you check my dates and number of travellers?",
      'fatima-obidos': "Hello! I'm interested in the shared Fátima & Óbidos day tour. Could you check my dates and number of travellers?",
      final: "Hello About Culture Things! I'd like help choosing the right shared tour.",
      faq: 'Hello! I have a question about your shared tours.'
    },
    es: {
      default: '¡Hola, About Culture Things! Quisiera consultar plazas para un tour compartido desde Lisboa.',
      book: '¡Hola, About Culture Things! Quisiera consultar plazas para un tour compartido desde Lisboa.',
      tour1: '¡Hola! Me interesa el tour compartido Sintra Completa y Costa Atlántica. ¿Podrían consultar mis fechas y número de viajeros?',
      tour2: '¡Hola! Me interesa el tour compartido Sintra y Playas Escondidas. ¿Podrían consultar mis fechas y número de viajeros?',
      'fatima-obidos': '¡Hola! Me interesa el tour compartido de día completo a Fátima y Óbidos. ¿Podrían consultar mis fechas y número de viajeros?',
      final: '¡Hola, About Culture Things! Quisiera ayuda para elegir el tour compartido más adecuado.',
      faq: '¡Hola! Tengo una pregunta sobre los tours compartidos.'
    },
    pt: {
      default: 'Olá, About Culture Things! Gostaria de verificar lugares para um tour partilhado a partir de Lisboa.',
      book: 'Olá, About Culture Things! Gostaria de verificar lugares para um tour partilhado a partir de Lisboa.',
      tour1: 'Olá! Tenho interesse no tour partilhado Sintra Completa e Costa Atlântica. Podem verificar as datas e o número de viajantes?',
      tour2: 'Olá! Tenho interesse no tour partilhado Sintra e Praias Escondidas. Podem verificar as datas e o número de viajantes?',
      'fatima-obidos': 'Olá! Tenho interesse no tour partilhado de dia inteiro a Fátima e Óbidos. Podem verificar as datas e o número de viajantes?',
      final: 'Olá, About Culture Things! Gostaria de ajuda para escolher o tour partilhado mais indicado.',
      faq: 'Olá! Tenho uma pergunta sobre os tours partilhados.'
    }
  },
  schema: {
    types: ['TravelAgency'],
    priceRange: '€139–€259 per person',
    areaServed: ['Sintra', 'Lisbon', 'Cascais', 'Cabo da Roca', 'Óbidos', 'Fátima', 'Lisbon District', 'Portugal'],
    knowsAbout: [
      'Shared Sintra tours',
      'Sintra day trip from Lisbon',
      'Pena Palace tours',
      'Cabo da Roca tours',
      'Atlantic coast Portugal',
      'Hidden beaches Sintra',
      'Quinta da Regaleira',
      'Castelo dos Mouros',
      'Luxury van tours Portugal',
      'Lisbon hotel pickup tours',
      'Fátima shared tours from Lisbon',
      'Óbidos shared day tours'
    ],
    availableLanguage: ['English', 'Spanish', 'Portuguese'],
    twitter: '@aboutculturethings'
  },
  galleryItems: [
    { src: 'site/images/pena-640.webp', width: 640, height: 893, alt: { en: 'Pena Palace rising above the forest in Sintra', es: 'Palacio da Pena sobre el bosque de Sintra', pt: 'Palácio da Pena sobre a floresta de Sintra' } },
    { src: 'site/images/Cabo%20da%20Roca-640.webp', width: 640, height: 958, alt: { en: 'Cabo da Roca cliffs overlooking the Atlantic Ocean', es: 'Acantilados de Cabo da Roca frente al océano Atlántico', pt: 'Falésias do Cabo da Roca sobre o oceano Atlântico' } },
    { src: 'site/images/Azenhas%20do%20Mar-640.webp', width: 640, height: 853, alt: { en: 'Azenhas do Mar coastal village above the Atlantic', es: 'Azenhas do Mar sobre la costa atlántica', pt: 'Azenhas do Mar sobre a costa atlântica' } },
    { src: 'site/images/cascais-640.webp', width: 640, height: 427, alt: { en: 'Cascais coastline on a shared Sintra day tour', es: 'Costa de Cascais durante un tour compartido por Sintra', pt: 'Costa de Cascais num tour partilhado por Sintra' } },
    { src: 'site/images/castelo-640.webp', width: 640, height: 958, alt: { en: 'Castelo dos Mouros stone walls in Sintra', es: 'Murallas del Castelo dos Mouros en Sintra', pt: 'Muralhas do Castelo dos Mouros em Sintra' } },
    { src: 'site/images/regaleira-640.webp', width: 640, height: 853, alt: { en: 'Quinta da Regaleira architecture surrounded by Sintra gardens', es: 'Arquitectura de Quinta da Regaleira entre jardines de Sintra', pt: 'Arquitetura da Quinta da Regaleira entre jardins de Sintra' } }
  ],
  reviewItems: [
    { name: '_P8031OX', text: 'We felt every story come alive.', meta: 'Dec 2025' },
    { name: 'Road14564539690', text: 'Excellent tour!! Complete and fun.', meta: 'Apr 2026 · Family or couples' },
    { name: 'Kristina P', text: 'We never felt rushed, and her flexibility made a huge difference.', meta: 'Jun 2026 · Family' }
  ],
  content: {
    en: {
      seo: {
        title: 'Shared Luxury Van Tours from Lisbon | About Culture Things',
        description: 'Shared guided tours from Lisbon to Sintra, the Atlantic coast, Fátima and Óbidos in a luxury Mercedes-Benz Vito, with Lisbon pickup and a local guide.',
        keywords: 'shared tours from Lisbon, small group Sintra tour, Fátima Óbidos shared tour, luxury van tour Lisbon, Cabo da Roca tour',
        author: 'About Culture Things',
        ogTitle: 'Shared Luxury Van Tours from Lisbon | About Culture Things',
        ogDescription: 'Small shared tours from Lisbon with a local guide and travel in a luxury Mercedes-Benz Vito—not a coach.',
        twitterTitle: 'Shared Luxury Van Tours from Lisbon | About Culture Things',
        twitterDescription: 'Shared guided tours from Lisbon to Sintra, the Atlantic coast, Fátima and Óbidos.',
        imageAlt: 'Travellers on a shared Sintra tour along Portugal\'s Atlantic coast'
      },
      ui: {
        skipLink: 'Skip to main content',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        backToTop: 'Back to top',
        scrollToExplore: 'Scroll to explore',
        includedAria: "What's included and excluded",
        languageSelector: 'Select language. Current language: {language}.'
      },
      nav: [
        { label: 'Experiences', href: '#tours', key: 'tours' },
        { label: 'Reviews', href: '#reviews', key: 'reviews' },
        { label: 'Our approach', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Check availability',
        hero: 'See the experiences',
        offer: 'Check availability',
        tour1: 'Check availability',
        tour2: 'Check availability',
        'fatima-obidos': 'Check availability',
        final: 'Check availability',
        navAria: 'Contact us on WhatsApp',
        fabAria: 'Check tour availability on WhatsApp',
        fabTooltip: 'Check availability'
      },
      hero: {
        kicker: 'Shared tours from Lisbon',
        title: 'Small group. A better way to travel.',
        subtitle: 'Sintra, the Atlantic coast, Fátima and Óbidos with a local guide and a luxury Mercedes-Benz Vito—not a coach.',
        secondaryCta: 'See tours',
        trust: '5.0 on TripAdvisor',
        trustAria: 'Read traveler reviews on TripAdvisor',
        highlights: 'Shared luxury van · Price per person · Lisbon pickup',
        guide: 'English, Portuguese & Spanish available',
        price: '',
        priceLink: 'See all three tours ↓',
        imageAlt: 'Travellers on a shared Sintra tour along the Atlantic coast'
      },
      benefits: {
        kicker: 'The About Culture Things standard',
        title: 'The difference is how the day feels.',
        description: 'A thoughtfully sized shared tour offers the comfort and attention of a van journey without the scale or timetable of a coach.',
        aria: 'Why book About Culture Things',
        items: [
          { title: 'A van, never a coach', text: 'Travel in a nine-seat Mercedes-Benz Vito luxury van, with an assigned seat for every traveller and no large-bus experience.', icon: 'plus' },
          { title: 'Guide and driver', text: 'Separate professionals keep the journey safe and the stories flowing, without asking one person to do both jobs.', icon: 'pin' },
          { title: 'Local decisions', text: 'Context, practical choices and quieter corners turn a list of landmarks into a day that makes sense.', icon: 'bag' }
        ]
      },
      story: {
        kicker: '',
        title: 'Planned locally. Hosted with care.',
        text: 'Our team brings together local knowledge, a dedicated driver and comfortable shared transport. The route is planned; the experience still feels personal.',
        signature: 'Based in Sintra · Guiding from Lisbon',
        imageAlt: 'Guests overlooking the Atlantic coast near Sintra'
      },
      offers: {
        kicker: 'Shared experiences from Lisbon',
        title: 'Three ways to share the road.',
        description: 'Per-person pricing, Lisbon pickup and the comfort of a luxury Mercedes-Benz Vito.',
        trustAria: 'What every tour includes',
        trust: ['Shared luxury van', 'Lisbon pickup included', 'Guide and driver'],
        currencyNote: 'Direct website rates, per person and charged in EUR. No marketplace commission is added. Each traveller has an assigned seat.',
        currencyLabel: 'Estimate in',
        currencyLoading: 'Updating approximate conversion…',
        currencyApprox: 'Approximate conversion. Payment is always charged in EUR.',
        currencyUnavailable: 'Conversion unavailable. Payment is charged in EUR.',
        perGroup: 'per person',
        ticketNote: 'Attraction tickets and meals are not included',
        detailsLabel: 'Itinerary & details',
        experienceLabel: 'View experience',
        included: ['Local guide', 'Dedicated driver', 'Shared luxury van', 'Lisbon pickup'],
        excluded: ['Meals'],
        items: [
          {
            id: 'tour1',
            slug: 'sintra-atlantic-coast',
            badge: 'Full day · First visit',
            name: 'Sintra Complete & Atlantic Coast',
            tag: 'Shared · 7 hours · Luxury van',
            stops: 'Historic Sintra · Pena · Cabo da Roca',
            fit: 'For a first visit to Sintra: the historic town, mountain viewpoints, the Atlantic edge and Cascais in one well-paced shared day.',
            price: '€179',
            priceValue: '179',
            currency: 'EUR',
            places: 'Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca on the shared Sintra Complete and Atlantic Coast tour',
            ticketNote: 'Palace tickets extra (~€20/person)',
            featured: true
          },
          {
            id: 'tour2',
            slug: 'sintra-hidden-beaches',
            badge: 'Half day · Coast & beaches',
            name: 'Sintra & Hidden Beaches',
            tag: 'Shared · 5 hours · Luxury van',
            stops: 'Sintra hills · Hidden coves · Azenhas do Mar',
            fit: 'A shorter day with Sintra’s hills, quiet viewpoints and Atlantic villages. A good fit for families and travellers who value a slower coastal pace.',
            price: '€139',
            priceValue: '139',
            currency: 'EUR',
            places: 'Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Azenhas do Mar on the shared Sintra and Hidden Beaches tour',
            ticketNote: 'Palace tickets extra (~€20/person)'
          },
          {
            id: 'fatima-obidos',
            slug: 'fatima-obidos',
            badge: 'Full day · Heritage & reflection',
            name: 'Fátima & Óbidos Shared Day Tour',
            tag: 'Shared · Full day · Luxury van',
            stops: 'Lisbon · Óbidos · Fátima · Lisbon',
            fit: 'Walk Óbidos’ medieval lanes, then experience the calm and significance of Fátima in one unhurried shared day.',
            price: '€259',
            priceValue: '259',
            currency: 'EUR',
            places: 'Lisbon pickup · Óbidos medieval village · Fátima Sanctuary · Lisbon drop-off',
            image: 'site/images/tour-fatima-obidos-736.webp',
            imageAlt: 'Visitor looking towards the Basilica of Our Lady of the Rosary in Fátima',
            imagePosition: 'center 38%',
            ticketNote: 'Meals are not included'
          }
        ]
      },
      gallery: {
        kicker: 'Portugal in detail',
        title: 'The places are only half the story.'
      },
      reviews: {
        kicker: 'Traveller reviews',
        title: 'What travellers remember.',
        trustAria: 'TripAdvisor rating',
        averageLabel: 'average rating',
        trustNote: '5.0 on Tripadvisor',
        gridAria: 'Traveler reviews',
        dotsAria: 'Review pagination',
        previousAria: 'Show previous reviews',
        nextAria: 'Show next reviews',
        viewAll: 'Read all reviews on TripAdvisor',
        viewAllAria: 'See all reviews on TripAdvisor (opens in new tab)',
        source: 'Excerpt from a Tripadvisor traveller review',
        ratingValue: '5.0',
        ratingLabel: '5.0 out of 5 average rating',
        items: []
      },
      faq: {
        kicker: 'Before you book',
        title: 'Good to know.',
        items: [
          { question: 'What\'s included?', answer: 'Lisbon pickup and drop-off, a local guide, a dedicated driver and shared transport in a luxury Mercedes-Benz Vito. Palace tickets and meals are not included.' },
          { question: 'How do shared departures work?', answer: 'Prices are per person and each traveller has an assigned seat. The nine-seat Vito is a luxury van, not a coach. Larger parties can be arranged with additional vehicles, subject to availability.' },
          { question: 'What\'s the cancellation policy?', answer: 'Free cancellation with 24 hours\' notice.' },
          { question: 'Where is pickup?', answer: 'From your hotel or accommodation in Lisbon. We confirm the exact time when you book.' },
          { question: 'Can the route change?', answer: 'The shared itinerary is fixed so every traveller knows what to expect. The guide may adjust timing for traffic, weather and conditions on the day.' },
          { question: 'Who will guide our experience?', answer: 'Your experience is hosted by a local guide from our team. Your booking confirmation includes the guide and practical details for your day.' }
        ]
      },
      finalCta: {
        kicker: 'Start with your dates',
        title: 'Have dates in mind?',
        text: 'Send us your dates and number of travellers. We’ll confirm the best shared departure.',
        trust: 'Free cancellation with 24 hours’ notice · 5.0 on TripAdvisor'
      },
      footer: {
        contactAria: 'Contact',
        description: 'Shared guided tours from Lisbon in a luxury Mercedes-Benz Vito, across Sintra, the Atlantic coast, Fátima and Óbidos.',
        location: 'Sintra & Lisbon, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    es: {
      seo: {
        title: 'Tours Compartidos en Van de Lujo desde Lisboa',
        description: 'Tours compartidos desde Lisboa a Sintra, la costa atlántica, Fátima y Óbidos en una Mercedes-Benz Vito de lujo, con recogida y guía local.',
        keywords: 'tours compartidos desde Lisboa, tour Sintra grupo pequeño, tour Fátima Óbidos compartido, van de lujo Lisboa',
        author: 'About Culture Things',
        ogTitle: 'Tours Compartidos en Van de Lujo desde Lisboa',
        ogDescription: 'Tours compartidos en grupos cuidados, con guía local y una Mercedes-Benz Vito de lujo; no un autobús.',
        twitterTitle: 'Tours Compartidos desde Lisboa | About Culture Things',
        twitterDescription: 'Tours compartidos desde Lisboa a Sintra, la costa atlántica, Fátima y Óbidos.',
        imageAlt: 'Viajeros en un tour compartido por la costa atlántica de Portugal'
      },
      ui: {
        skipLink: 'Saltar al contenido principal',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        backToTop: 'Volver arriba',
        scrollToExplore: 'Desplázate para explorar',
        includedAria: 'Qué incluye y qué no',
        languageSelector: 'Seleccionar idioma. Idioma actual: {language}.'
      },
      nav: [
        { label: 'Experiencias', href: '#tours', key: 'tours' },
        { label: 'Reseñas', href: '#reviews', key: 'reviews' },
        { label: 'Nuestro enfoque', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Consultar disponibilidad',
        hero: 'Ver las experiencias',
        offer: 'Consultar disponibilidad',
        tour1: 'Consultar disponibilidad',
        tour2: 'Consultar disponibilidad',
        'fatima-obidos': 'Consultar disponibilidad',
        final: 'Consultar disponibilidad',
        navAria: 'Contactar por WhatsApp',
        fabAria: 'Consultar disponibilidad por WhatsApp',
        fabTooltip: 'Consultar disponibilidad'
      },
      hero: {
        kicker: 'Tours compartidos desde Lisboa',
        title: 'Grupo pequeño. Otra forma de viajar.',
        subtitle: 'Sintra, la costa atlántica, Fátima y Óbidos con guía local y una Mercedes-Benz Vito de lujo; no un autobús.',
        secondaryCta: 'Ver tours',
        trust: '5.0 en TripAdvisor',
        trustAria: 'Leer reseñas en TripAdvisor',
        highlights: 'Van de lujo compartida · Precio por persona · Recogida en Lisboa',
        guide: 'Inglés, portugués y español disponibles',
        price: '',
        priceLink: 'Ver los tres tours ↓',
        imageAlt: 'Viajeros en un tour compartido por la costa atlántica'
      },
      benefits: {
        kicker: 'El estándar About Culture Things',
        title: 'La diferencia está en cómo se vive el día.',
        description: 'Un tour compartido bien dimensionado ofrece la comodidad y atención de una van sin la escala ni los horarios de un autobús.',
        aria: 'Por qué reservar con About Culture Things',
        items: [
          { title: 'Una van, nunca un autobús', text: 'Viajen en una Mercedes-Benz Vito de lujo de nueve asientos, con una plaza asignada para cada viajero.', icon: 'plus' },
          { title: 'Guía y conductor', text: 'Profesionales separados mantienen el viaje seguro y las historias presentes, sin pedir a una sola persona que haga ambas tareas.', icon: 'pin' },
          { title: 'Decisiones locales', text: 'El contexto, las decisiones prácticas y los rincones tranquilos convierten una lista de lugares en un día con sentido.', icon: 'bag' }
        ]
      },
      story: {
        kicker: '',
        title: 'Planificado aquí. Cuidado en cada detalle.',
        text: 'Nuestro equipo combina conocimiento local, un conductor dedicado y transporte compartido confortable. La ruta está planificada; la experiencia sigue siendo cercana.',
        signature: 'En Sintra · Guiando desde Lisboa',
        imageAlt: 'Viajeras frente a la costa atlántica cerca de Sintra'
      },
      offers: {
        kicker: 'Experiencias compartidas desde Lisboa',
        title: 'Tres formas de compartir el camino.',
        description: 'Precio por persona, recogida en Lisboa y la comodidad de una Mercedes-Benz Vito de lujo.',
        trustAria: 'Qué incluye cada tour',
        trust: ['Van de lujo compartida', 'Recogida en Lisboa incluida', 'Guía y conductor'],
        currencyNote: 'Tarifas directas del website, por persona y en EUR. No añadimos comisión de marketplace. Cada viajero tiene una plaza asignada.',
        currencyLabel: 'Estimación en',
        currencyLoading: 'Actualizando conversión aproximada…',
        currencyApprox: 'Conversión aproximada. El pago siempre se realiza en EUR.',
        currencyUnavailable: 'Conversión no disponible. El pago se realiza en EUR.',
        perGroup: 'por persona',
        ticketNote: 'Entradas y comidas no incluidas',
        detailsLabel: 'Itinerario y detalles',
        experienceLabel: 'Ver experiencia',
        included: ['Guía local', 'Conductor dedicado', 'Van de lujo compartida', 'Recogida en Lisboa'],
        excluded: ['Comidas'],
        items: [
          {
            id: 'tour1',
            slug: 'sintra-atlantic-coast',
            badge: 'Día completo · Primera visita',
            name: 'Sintra Completa & Costa Atlántica',
            tag: 'Compartido · 7 horas · Van de lujo',
            stops: 'Sintra histórica · Pena · Cabo da Roca',
            fit: '¿Primera visita? Sintra, el extremo occidental de Europa y Cascais en un día compartido con un ritmo cuidado.',
            price: '€179',
            priceValue: '179',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca en el tour compartido Sintra Completa y Costa Atlántica',
            ticketNote: 'Entradas a palacios aparte (~€20/persona)',
            featured: true
          },
          {
            id: 'tour2',
            slug: 'sintra-hidden-beaches',
            badge: 'Medio día · Costa y playas',
            name: 'Sintra & Playas Escondidas',
            tag: 'Compartido · 5 horas · Van de lujo',
            stops: 'Colinas de Sintra · Calas ocultas · Azenhas do Mar',
            fit: 'Ruta costera más tranquila con miradores — ideal para familias o un ritmo más pausado.',
            price: '€139',
            priceValue: '139',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Azenhas do Mar en el tour compartido Sintra y Playas Escondidas',
            ticketNote: 'Entradas a palacios aparte (~€20/persona)'
          },
          {
            id: 'fatima-obidos',
            slug: 'fatima-obidos',
            badge: 'Día completo · Patrimonio y reflexión',
            name: 'Tour Compartido Fátima & Óbidos',
            tag: 'Compartido · Día completo · Van de lujo',
            stops: 'Lisboa · Óbidos · Fátima · Lisboa',
            fit: 'Recorre las calles medievales de Óbidos y descubre después la calma y el significado de Fátima en un día compartido y sin prisas.',
            price: '€259',
            priceValue: '259',
            currency: 'EUR',
            places: 'Recogida en Lisboa · Villa medieval de Óbidos · Santuario de Fátima · Regreso a Lisboa',
            image: 'site/images/tour-fatima-obidos-736.webp',
            imageAlt: 'Visitante contemplando la Basílica de Nuestra Señora del Rosario en Fátima',
            imagePosition: 'center 38%',
            ticketNote: 'Comidas no incluidas'
          }
        ]
      },
      gallery: {
        kicker: 'Portugal al detalle',
        title: 'Los lugares son solo la mitad de la historia.'
      },
      reviews: {
        kicker: 'Reseñas de viajeros',
        title: 'Lo que recuerdan los viajeros.',
        trustAria: 'Valoración en TripAdvisor',
        averageLabel: 'valoración media',
        trustNote: '5.0 en Tripadvisor',
        gridAria: 'Reseñas de viajeros',
        dotsAria: 'Paginación de reseñas',
        previousAria: 'Mostrar reseñas anteriores',
        nextAria: 'Mostrar reseñas siguientes',
        viewAll: 'Ver todo en TripAdvisor',
        viewAllAria: 'Ver todas las reseñas en TripAdvisor (se abre en una pestaña nueva)',
        source: 'Extracto de una reseña en Tripadvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 valoración media',
        items: []
      },
      faq: {
        kicker: 'Antes de reservar',
        title: 'Conviene saberlo.',
        items: [
          { question: '¿Qué incluye?', answer: 'Recogida y regreso a Lisboa, guía local, conductor dedicado y transporte compartido en una Mercedes-Benz Vito de lujo. Entradas y comidas no incluidas.' },
          { question: '¿Cómo funcionan las salidas compartidas?', answer: 'Los precios son por persona y cada viajero tiene una plaza asignada. La Vito de nueve asientos es una van de lujo, no un autobús. Para grupos mayores podemos coordinar vehículos adicionales, sujetos a disponibilidad.' },
          { question: '¿Cuál es la política de cancelación?', answer: 'Cancelación gratuita con 24 horas de antelación.' },
          { question: '¿Dónde es la recogida?', answer: 'En tu hotel o alojamiento en Lisboa. Confirmamos la hora exacta al reservar.' },
          { question: '¿Puede cambiar la ruta?', answer: 'El itinerario compartido está definido para que todos sepan qué esperar. El guía puede ajustar tiempos por tráfico, clima o condiciones del día.' },
          { question: '¿Quién guiará nuestra experiencia?', answer: 'La experiencia estará acompañada por un guía local de nuestro equipo. La confirmación incluye el guía y los detalles prácticos del día.' }
        ]
      },
      finalCta: {
        kicker: 'Empiecen por sus fechas',
        title: '¿Ya tienen fechas?',
        text: 'Envíennos sus fechas y número de viajeros. Confirmaremos la mejor salida compartida.',
        trust: 'Cancelación gratuita con 24h de antelación · 5.0 en TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        description: 'Tours compartidos desde Lisboa en una Mercedes-Benz Vito de lujo por Sintra, la costa atlántica, Fátima y Óbidos.',
        location: 'Sintra y Lisboa, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    pt: {
      seo: {
        title: 'Tours Partilhados em Van de Luxo desde Lisboa',
        description: 'Tours partilhados desde Lisboa a Sintra, à costa atlântica, Fátima e Óbidos numa Mercedes-Benz Vito de luxo, com recolha e guia local.',
        keywords: 'tours partilhados desde Lisboa, tour Sintra grupo pequeno, tour Fátima Óbidos partilhado, van de luxo Lisboa',
        author: 'About Culture Things',
        ogTitle: 'Tours Partilhados em Van de Luxo desde Lisboa',
        ogDescription: 'Tours partilhados em grupos cuidados, com guia local e uma Mercedes-Benz Vito de luxo; não um autocarro.',
        twitterTitle: 'Tours Partilhados desde Lisboa | About Culture Things',
        twitterDescription: 'Tours partilhados desde Lisboa a Sintra, à costa atlântica, Fátima e Óbidos.',
        imageAlt: 'Viajantes num tour partilhado na costa atlântica de Portugal'
      },
      ui: {
        skipLink: 'Saltar para o conteúdo principal',
        openMenu: 'Abrir menu',
        closeMenu: 'Fechar menu',
        backToTop: 'Voltar ao topo',
        scrollToExplore: 'Desliza para explorar',
        includedAria: 'O que inclui e o que não inclui',
        languageSelector: 'Selecionar idioma. Idioma atual: {language}.'
      },
      nav: [
        { label: 'Experiências', href: '#tours', key: 'tours' },
        { label: 'Avaliações', href: '#reviews', key: 'reviews' },
        { label: 'A nossa abordagem', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Ver disponibilidade',
        hero: 'Ver as experiências',
        offer: 'Ver disponibilidade',
        tour1: 'Ver disponibilidade',
        tour2: 'Ver disponibilidade',
        'fatima-obidos': 'Ver disponibilidade',
        final: 'Ver disponibilidade',
        navAria: 'Contactar por WhatsApp',
        fabAria: 'Verificar disponibilidade no WhatsApp',
        fabTooltip: 'Verificar disponibilidade'
      },
      hero: {
        kicker: 'Tours partilhados desde Lisboa',
        title: 'Grupo pequeno. Outra forma de viajar.',
        subtitle: 'Sintra, a costa atlântica, Fátima e Óbidos com guia local e uma Mercedes-Benz Vito de luxo; não um autocarro.',
        secondaryCta: 'Ver tours',
        trust: '5.0 no TripAdvisor',
        trustAria: 'Ler avaliações no TripAdvisor',
        highlights: 'Van de luxo partilhada · Preço por pessoa · Recolha em Lisboa',
        guide: 'Inglês, português e espanhol disponíveis',
        price: '',
        priceLink: 'Ver os três tours ↓',
        imageAlt: 'Viajantes num tour partilhado na costa atlântica'
      },
      benefits: {
        kicker: 'O padrão About Culture Things',
        title: 'A diferença está na forma como se vive o dia.',
        description: 'Um tour partilhado bem dimensionado oferece o conforto e a atenção de uma van sem a escala nem os horários de um autocarro.',
        aria: 'Porquê reservar com About Culture Things',
        items: [
          { title: 'Uma van, nunca um autocarro', text: 'Viajem numa Mercedes-Benz Vito de luxo de nove lugares, com um lugar atribuído a cada viajante.', icon: 'plus' },
          { title: 'Guia e motorista', text: 'Profissionais separados mantêm a viagem segura e as histórias presentes, sem pedir a uma só pessoa que faça ambas as funções.', icon: 'pin' },
          { title: 'Decisões locais', text: 'O contexto, as escolhas práticas e os recantos tranquilos transformam uma lista de lugares num dia com sentido.', icon: 'bag' }
        ]
      },
      story: {
        kicker: '',
        title: 'Planeado aqui. Cuidado em cada detalhe.',
        text: 'A nossa equipa combina conhecimento local, um motorista dedicado e transporte partilhado confortável. A rota é planeada; a experiência continua próxima.',
        signature: 'Em Sintra · A guiar a partir de Lisboa',
        imageAlt: 'Viajantes junto à costa atlântica perto de Sintra'
      },
      offers: {
        kicker: 'Experiências partilhadas desde Lisboa',
        title: 'Três formas de partilhar a estrada.',
        description: 'Preço por pessoa, recolha em Lisboa e o conforto de uma Mercedes-Benz Vito de luxo.',
        trustAria: 'O que cada tour inclui',
        trust: ['Van de luxo partilhada', 'Recolha em Lisboa incluída', 'Guia e motorista'],
        currencyNote: 'Tarifas diretas do website, por pessoa e em EUR. Não acrescentamos comissão de marketplace. Cada viajante tem um lugar atribuído.',
        currencyLabel: 'Estimativa em',
        currencyLoading: 'A atualizar a conversão aproximada…',
        currencyApprox: 'Conversão aproximada. O pagamento é sempre cobrado em EUR.',
        currencyUnavailable: 'Conversão indisponível. O pagamento é cobrado em EUR.',
        perGroup: 'por pessoa',
        ticketNote: 'Bilhetes e refeições não incluídos',
        detailsLabel: 'Itinerário e detalhes',
        experienceLabel: 'Ver experiência',
        included: ['Guia local', 'Motorista dedicado', 'Van de luxo partilhada', 'Recolha em Lisboa'],
        excluded: ['Refeições'],
        items: [
          {
            id: 'tour1',
            slug: 'sintra-atlantic-coast',
            badge: 'Dia inteiro · Primeira visita',
            name: 'Sintra Completa & Costa Atlântica',
            tag: 'Partilhado · 7 horas · Van de luxo',
            stops: 'Sintra histórica · Pena · Cabo da Roca',
            fit: 'Primeira visita? Sintra, o ponto mais ocidental da Europa e Cascais num dia partilhado com um ritmo cuidado.',
            price: '€179',
            priceValue: '179',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca no tour partilhado Sintra Completa e Costa Atlântica',
            ticketNote: 'Bilhetes para palácios à parte (~€20/pessoa)',
            featured: true
          },
          {
            id: 'tour2',
            slug: 'sintra-hidden-beaches',
            badge: 'Meio dia · Costa e praias',
            name: 'Sintra & Praias Escondidas',
            tag: 'Partilhado · 5 horas · Van de luxo',
            stops: 'Colinas de Sintra · Enseadas escondidas · Azenhas do Mar',
            fit: 'Rota costeira mais tranquila com miradouros — ideal para famílias ou um ritmo mais calmo.',
            price: '€139',
            priceValue: '139',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Azenhas do Mar no tour partilhado Sintra e Praias Escondidas',
            ticketNote: 'Bilhetes para palácios à parte (~€20/pessoa)'
          },
          {
            id: 'fatima-obidos',
            slug: 'fatima-obidos',
            badge: 'Dia inteiro · Património e reflexão',
            name: 'Tour Partilhado Fátima & Óbidos',
            tag: 'Partilhado · Dia inteiro · Van de luxo',
            stops: 'Lisboa · Óbidos · Fátima · Lisboa',
            fit: 'Percorre as ruas medievais de Óbidos e vive depois a serenidade e o significado de Fátima num dia partilhado e sem pressas.',
            price: '€259',
            priceValue: '259',
            currency: 'EUR',
            places: 'Recolha em Lisboa · Vila medieval de Óbidos · Santuário de Fátima · Regresso a Lisboa',
            image: 'site/images/tour-fatima-obidos-736.webp',
            imageAlt: 'Visitante a observar a Basílica de Nossa Senhora do Rosário em Fátima',
            imagePosition: 'center 38%',
            ticketNote: 'Refeições não incluídas'
          }
        ]
      },
      gallery: {
        kicker: 'Portugal em detalhe',
        title: 'Os lugares são apenas metade da história.'
      },
      reviews: {
        kicker: 'Avaliações de viajantes',
        title: 'O que os viajantes recordam.',
        trustAria: 'Classificação no TripAdvisor',
        averageLabel: 'classificação média',
        trustNote: '5.0 no Tripadvisor',
        gridAria: 'Avaliações de viajantes',
        dotsAria: 'Paginação das avaliações',
        previousAria: 'Mostrar avaliações anteriores',
        nextAria: 'Mostrar avaliações seguintes',
        viewAll: 'Ver tudo no TripAdvisor',
        viewAllAria: 'Ver todas as avaliações no TripAdvisor (abre num novo separador)',
        source: 'Excerto de uma avaliação no Tripadvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 classificação média',
        items: []
      },
      faq: {
        kicker: 'Antes de reservar',
        title: 'É bom saber.',
        items: [
          { question: 'O que está incluído?', answer: 'Recolha e regresso a Lisboa, guia local, motorista dedicado e transporte partilhado numa Mercedes-Benz Vito de luxo. Bilhetes e refeições não incluídos.' },
          { question: 'Como funcionam as saídas partilhadas?', answer: 'Os preços são por pessoa e cada viajante tem um lugar atribuído. A Vito de nove lugares é uma van de luxo, não um autocarro. Para grupos maiores podemos coordenar veículos adicionais, sujeitos a disponibilidade.' },
          { question: 'Qual é a política de cancelamento?', answer: 'Cancelamento gratuito com 24 horas de antecedência.' },
          { question: 'Onde é a recolha?', answer: 'No teu hotel ou alojamento em Lisboa. Confirmamos a hora exata quando reservas.' },
          { question: 'A rota pode mudar?', answer: 'O itinerário partilhado está definido para que todos saibam o que esperar. O guia pode ajustar horários devido ao trânsito, tempo ou condições do dia.' },
          { question: 'Quem vai guiar a nossa experiência?', answer: 'A experiência será acompanhada por um guia local da nossa equipa. A confirmação inclui o guia e os detalhes práticos do dia.' }
        ]
      },
      finalCta: {
        kicker: 'Comecem pelas datas',
        title: 'Já têm datas?',
        text: 'Enviem-nos as datas e o número de viajantes. Confirmaremos a melhor saída partilhada.',
        trust: 'Cancelamento gratuito com 24h de antecedência · 5.0 no TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        description: 'Tours partilhados desde Lisboa numa Mercedes-Benz Vito de luxo por Sintra, a costa atlântica, Fátima e Óbidos.',
        location: 'Sintra e Lisboa, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
