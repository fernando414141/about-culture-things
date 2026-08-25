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
    industry: 'Private tours',
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
      default: "Hello About Culture Things! I'd like to check availability for a private tour from Lisbon.",
      book: "Hello About Culture Things! I'd like to check availability for a private tour from Lisbon.",
      tour1: "Hello! I'm interested in the Sintra Complete & Atlantic Coast private tour. Could you check my dates?",
      tour2: "Hello! I'm interested in the Sintra & Hidden Beaches private tour. Could you check my dates?",
      'fatima-obidos': "Hello! I'm interested in the Fátima & Óbidos private day tour. Could you check my dates?",
      final: "Hello About Culture Things! I'd like help choosing the right private experience.",
      faq: 'Hello! I have a question about your private tours.'
    },
    es: {
      default: '¡Hola, About Culture Things! Quisiera consultar disponibilidad para un tour privado desde Lisboa.',
      book: '¡Hola, About Culture Things! Quisiera consultar disponibilidad para un tour privado desde Lisboa.',
      tour1: '¡Hola! Me interesa el tour privado Sintra Completa y Costa Atlántica. ¿Podrían consultar mis fechas?',
      tour2: '¡Hola! Me interesa el tour privado Sintra y Playas Escondidas. ¿Podrían consultar mis fechas?',
      'fatima-obidos': '¡Hola! Me interesa el tour privado de día completo a Fátima y Óbidos. ¿Podrían consultar mis fechas?',
      final: '¡Hola, About Culture Things! Quisiera ayuda para elegir la experiencia privada más adecuada.',
      faq: '¡Hola! Tengo una pregunta sobre los tours privados.'
    },
    pt: {
      default: 'Olá, About Culture Things! Gostaria de verificar a disponibilidade para um tour privado a partir de Lisboa.',
      book: 'Olá, About Culture Things! Gostaria de verificar a disponibilidade para um tour privado a partir de Lisboa.',
      tour1: 'Olá! Tenho interesse no tour privado Sintra Completa e Costa Atlântica. Podem verificar as minhas datas?',
      tour2: 'Olá! Tenho interesse no tour privado Sintra e Praias Escondidas. Podem verificar as minhas datas?',
      'fatima-obidos': 'Olá! Tenho interesse no tour privado de dia inteiro a Fátima e Óbidos. Podem verificar as minhas datas?',
      final: 'Olá, About Culture Things! Gostaria de ajuda para escolher a experiência privada mais indicada.',
      faq: 'Olá! Tenho uma pergunta sobre os tours privados.'
    }
  },
  schema: {
    types: ['TravelAgency'],
    priceRange: '€199–€500',
    areaServed: ['Sintra', 'Lisbon', 'Cascais', 'Cabo da Roca', 'Óbidos', 'Fátima', 'Lisbon District', 'Portugal'],
    knowsAbout: [
      'Private Sintra tours',
      'Sintra day trip from Lisbon',
      'Pena Palace tours',
      'Cabo da Roca tours',
      'Atlantic coast Portugal',
      'Hidden beaches Sintra',
      'Quinta da Regaleira',
      'Castelo dos Mouros',
      'Private tour guide Portugal',
      'Lisbon hotel pickup tours',
      'Fátima private tours from Lisbon',
      'Óbidos private day tours'
    ],
    availableLanguage: ['English', 'Spanish', 'Portuguese'],
    twitter: '@aboutculturethings'
  },
  galleryItems: [
    { src: 'site/images/pena-640.webp', width: 640, height: 893, alt: { en: 'Pena Palace rising above the forest in Sintra', es: 'Palacio da Pena sobre el bosque de Sintra', pt: 'Palácio da Pena sobre a floresta de Sintra' } },
    { src: 'site/images/Cabo%20da%20Roca-640.webp', width: 640, height: 958, alt: { en: 'Cabo da Roca cliffs overlooking the Atlantic Ocean', es: 'Acantilados de Cabo da Roca frente al océano Atlántico', pt: 'Falésias do Cabo da Roca sobre o oceano Atlântico' } },
    { src: 'site/images/Azenhas%20do%20Mar-640.webp', width: 640, height: 853, alt: { en: 'Azenhas do Mar coastal village above the Atlantic', es: 'Azenhas do Mar sobre la costa atlántica', pt: 'Azenhas do Mar sobre a costa atlântica' } },
    { src: 'site/images/cascais-640.webp', width: 640, height: 427, alt: { en: 'Cascais coastline on a private Sintra day tour', es: 'Costa de Cascais durante un tour privado por Sintra', pt: 'Costa de Cascais num tour privado por Sintra' } },
    { src: 'site/images/castelo-640.webp', width: 640, height: 958, alt: { en: 'Castelo dos Mouros stone walls in Sintra', es: 'Murallas del Castelo dos Mouros en Sintra', pt: 'Muralhas do Castelo dos Mouros em Sintra' } },
    { src: 'site/images/regaleira-640.webp', width: 640, height: 853, alt: { en: 'Quinta da Regaleira architecture surrounded by Sintra gardens', es: 'Arquitectura de Quinta da Regaleira entre jardines de Sintra', pt: 'Arquitetura da Quinta da Regaleira entre jardins de Sintra' } }
  ],
  content: {
    en: {
      seo: {
        title: 'Private Tours from Lisbon | About Culture Things',
        description: 'Private guided experiences from Lisbon to Sintra, the Atlantic coast, Fátima and Óbidos, with private transport, hotel pickup and flexible pacing.',
        keywords: 'private tours from Lisbon, private Sintra tour, Fátima Óbidos private tour, Sintra day trip from Lisbon, Cabo da Roca tour, private tours Portugal',
        author: 'About Culture Things',
        ogTitle: 'Private Tours from Lisbon | About Culture Things',
        ogDescription: 'Private days from Lisbon with local knowledge, thoughtful pacing and transport arranged for your group.',
        twitterTitle: 'Private Tours from Lisbon | About Culture Things',
        twitterDescription: 'Private guided experiences from Lisbon to Sintra, the Atlantic coast, Fátima and Óbidos.',
        imageAlt: 'Travelers on a private Sintra tour along Portugal\'s Atlantic coast'
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
        { label: 'Why private', href: '#approach', key: 'approach' },
        { label: 'Reviews', href: '#reviews', key: 'reviews' },
        { label: 'About', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Check availability',
        hero: 'Explore experiences',
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
        kicker: 'Private guided experiences in Portugal',
        title: 'Private tours from Lisbon, shaped around your day.',
        subtitle: 'Explore Sintra, the Atlantic coast, Fátima and Óbidos with private transport, local knowledge and room to set the pace.',
        secondaryCta: 'See tours',
        trust: '5.0 on TripAdvisor',
        trustAria: 'Read traveler reviews on TripAdvisor',
        highlights: 'Private transport · Up to 4 guests · Lisbon pickup',
        guide: 'English, Portuguese & Spanish available',
        price: '',
        priceLink: 'See all three tours ↓',
        imageAlt: 'Travelers on a private Sintra tour along the Atlantic coast'
      },
      benefits: {
        kicker: 'The About Culture Things standard',
        title: 'The difference is how the day feels.',
        description: 'A private day removes the group logistics and gives your time back to the places, stories and people you came to experience.',
        aria: 'Why book About Culture Things',
        items: [
          { title: 'Only your group', text: 'No shared coach or fixed group agenda. Up to four guests have space to stop, ask and take in the place.', icon: 'plus' },
          { title: 'A considered pace', text: 'The route has a clear plan, while timing can respond to your group, the weather and what matters most that day.', icon: 'pin' },
          { title: 'Local decisions', text: 'Context, practical choices and quieter corners turn a list of landmarks into a day that makes sense.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'Founder story',
        title: 'A local point of view, carried by the brand.',
        text: 'Rita founded About Culture Things and works as a local guide. Her warm, precise and attentive way of hosting shaped the standard behind every experience.',
        signature: 'Rita · Founder and local guide',
        imageAlt: 'Rita with a guest overlooking the Atlantic coast near Sintra'
      },
      offers: {
        kicker: 'Private experiences from Lisbon',
        title: 'Choose the day that fits you.',
        description: 'Each route has a clear shape, with flexibility in the pace and practical decisions along the way.',
        trustAria: 'What every tour includes',
        trust: ['Up to 4 guests', 'Lisbon pickup included', 'Flexible pacing'],
        currencyNote: 'All prices are per private group and charged in EUR.',
        currencyLabel: 'Estimate in',
        currencyLoading: 'Updating approximate conversion…',
        currencyApprox: 'Approximate conversion. Payment is always charged in EUR.',
        currencyUnavailable: 'Conversion unavailable. Payment is charged in EUR.',
        perGroup: 'per private group',
        ticketNote: 'Attraction tickets and meals are not included',
        detailsLabel: 'Itinerary & details',
        experienceLabel: 'View experience',
        included: ['Private guide', 'Lisbon pickup', 'Transport'],
        excluded: ['Meals'],
        items: [
          {
            id: 'tour1',
            slug: 'sintra-atlantic-coast',
            badge: 'Full day · First visit',
            name: 'Sintra Complete & Atlantic Coast',
            tag: 'Private · 7 hours · Max 4 guests',
            stops: 'Historic Sintra · Pena · Cabo da Roca',
            fit: 'For a first visit to Sintra: the historic town, mountain viewpoints, the Atlantic edge and Cascais in one private day without managing the route yourself.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca on the Sintra Complete and Atlantic Coast private tour',
            ticketNote: 'Palace tickets extra (~€20/person)',
            featured: true
          },
          {
            id: 'tour2',
            slug: 'sintra-hidden-beaches',
            badge: 'Half day · Coast & beaches',
            name: 'Sintra & Hidden Beaches',
            tag: 'Private · 5 hours · Max 4 guests',
            stops: 'Sintra hills · Hidden coves · Azenhas do Mar',
            fit: 'A shorter day with Sintra’s hills, quiet viewpoints and Atlantic villages. A good fit for families and travellers who value a slower coastal pace.',
            price: '€199',
            priceValue: '199',
            currency: 'EUR',
            places: 'Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Azenhas do Mar on the Sintra and Hidden Beaches private tour',
            ticketNote: 'Palace tickets extra (~€20/person)'
          },
          {
            id: 'fatima-obidos',
            slug: 'fatima-obidos',
            badge: 'Full day · Heritage & reflection',
            name: 'Fátima & Óbidos Private Day Tour',
            tag: 'Private · Full day · Max 4 guests',
            stops: 'Lisbon · Óbidos · Fátima · Lisbon',
            fit: 'Walk Óbidos’ medieval lanes, then experience the calm and significance of Fátima in one unhurried private day.',
            price: '€500',
            priceValue: '500',
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
        title: 'Known for the details that make a day easy.',
        trustAria: 'TripAdvisor rating',
        averageLabel: 'average rating',
        trustNote: '★★★★★ 5.0 on TripAdvisor',
        gridAria: 'Traveler reviews',
        dotsAria: 'Review pagination',
        previousAria: 'Show previous reviews',
        nextAria: 'Show next reviews',
        viewAll: 'Read all reviews on TripAdvisor',
        viewAllAria: 'See all reviews on TripAdvisor (opens in new tab)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 out of 5 average rating',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Warm, personal, and full of local insight. Sintra felt special from the first stop."' },
          { initials: 'MM', name: 'Monica M.', text: '"Clear, friendly, and well-paced — exactly where to go without any stress."' },
          { initials: 'FG', name: 'Fernando G.', text: '"Local knowledge made the difference. We found places we\'d never reach alone."' },
          { initials: 'AT', name: 'Amanda T.', text: '"Relaxed private tour with great stories and smart pacing throughout."' },
          { initials: 'LS', name: 'Laura S.', text: '"Professional and warm. The whole day felt easy and well looked after."' },
          { initials: 'JW', name: 'James W.', text: '"Memorable viewpoints and hidden spots, shown with real care."' }
        ]
      },
      faq: {
        kicker: 'Before you book',
        title: 'Practical answers, upfront.',
        items: [
          { question: 'What\'s included?', answer: 'Lisbon pickup and drop-off, private guide, and private transport for up to 4 guests. For Sintra routes, palace tickets are not included (~€20/person). Meals are not included.' },
          { question: 'How do I book?', answer: 'Message us on WhatsApp with your dates. We\'ll confirm availability, payment, and pickup details. Viator booking also available.' },
          { question: 'What\'s the cancellation policy?', answer: 'Free cancellation with 24 hours\' notice.' },
          { question: 'Where is pickup?', answer: 'From your hotel or accommodation in Lisbon. We confirm the exact time when you book.' },
          { question: 'Can we customize the route?', answer: 'Yes. Stops, pace, and timing adapt to your group, weather, and interests.' },
          { question: 'Who will guide our experience?', answer: 'Rita is the founder and a local guide behind About Culture Things. Your booking confirmation includes the practical details for your day.' }
        ]
      },
      finalCta: {
        kicker: 'Start with your dates',
        title: 'Tell us what would make the day work for you.',
        text: 'Share your dates, group size and what you want from the day. About Culture Things will help you choose.',
        trust: 'Free cancellation with 24 hours’ notice · 5.0 on TripAdvisor'
      },
      footer: {
        contactAria: 'Contact',
        description: 'Private guided experiences from Lisbon, across Sintra, the Atlantic coast, Fátima and Óbidos.',
        location: 'Sintra & Lisbon, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    es: {
      seo: {
        title: 'Tours Privados desde Lisboa | Sintra, Fátima y Óbidos',
        description: 'Experiencias privadas desde Lisboa a Sintra, la costa atlántica, Fátima y Óbidos, con transporte privado, recogida y ritmo flexible.',
        keywords: 'tours privados desde Lisboa, tour privado Sintra, tour privado Fátima Óbidos, excursión Sintra desde Lisboa, tours privados Portugal',
        author: 'About Culture Things',
        ogTitle: 'Tours Privados desde Lisboa | About Culture Things',
        ogDescription: 'Días privados desde Lisboa con conocimiento local, un ritmo bien pensado y transporte para tu grupo.',
        twitterTitle: 'Tours Privados desde Lisboa | About Culture Things',
        twitterDescription: 'Experiencias privadas desde Lisboa a Sintra, la costa atlántica, Fátima y Óbidos.',
        imageAlt: 'Viajeros en un tour privado por la costa atlántica de Portugal'
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
        { label: 'Por qué privado', href: '#approach', key: 'approach' },
        { label: 'Reseñas', href: '#reviews', key: 'reviews' },
        { label: 'Nosotros', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Consultar disponibilidad',
        hero: 'Ver experiencias',
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
        kicker: 'Experiencias privadas guiadas en Portugal',
        title: 'Tours privados desde Lisboa, pensados para tu día.',
        subtitle: 'Descubre Sintra, la costa atlántica, Fátima y Óbidos con transporte privado, conocimiento local y libertad para marcar el ritmo.',
        secondaryCta: 'Ver tours',
        trust: '5.0 en TripAdvisor',
        trustAria: 'Leer reseñas en TripAdvisor',
        highlights: 'Transporte privado · Hasta 4 personas · Recogida en Lisboa',
        guide: 'Inglés, portugués y español disponibles',
        price: '',
        priceLink: 'Ver los tres tours ↓',
        imageAlt: 'Viajeros en un tour privado por la costa atlántica'
      },
      benefits: {
        kicker: 'El estándar About Culture Things',
        title: 'La diferencia está en cómo se vive el día.',
        description: 'Un día privado elimina la logística de los grupos y devuelve tu tiempo a los lugares, las historias y las personas que viniste a conocer.',
        aria: 'Por qué reservar con About Culture Things',
        items: [
          { title: 'Solo tu grupo', text: 'Sin autobús compartido ni agenda de grupo. Hasta cuatro personas con espacio para parar, preguntar y disfrutar.', icon: 'plus' },
          { title: 'Un ritmo bien pensado', text: 'La ruta tiene un plan claro, pero el horario puede adaptarse al grupo, al clima y a lo que más importe ese día.', icon: 'pin' },
          { title: 'Decisiones locales', text: 'El contexto, las decisiones prácticas y los rincones tranquilos convierten una lista de lugares en un día con sentido.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'Historia de la fundadora',
        title: 'Una mirada local que vive en la marca.',
        text: 'Rita fundó About Culture Things y trabaja como guía local. Su forma cálida, precisa y atenta de recibir dio forma al estándar de cada experiencia.',
        signature: 'Rita · Fundadora y guía local',
        imageAlt: 'Rita con una viajera frente a la costa atlántica cerca de Sintra'
      },
      offers: {
        kicker: 'Experiencias privadas desde Lisboa',
        title: 'Elige el día que encaje contigo.',
        description: 'Cada ruta tiene una forma clara, con flexibilidad en el ritmo y en las decisiones prácticas del camino.',
        trustAria: 'Qué incluye cada tour',
        trust: ['Hasta 4 personas', 'Recogida en Lisboa incluida', 'Ritmo flexible'],
        currencyNote: 'Todos los precios son por grupo privado y se cobran en EUR.',
        currencyLabel: 'Estimación en',
        currencyLoading: 'Actualizando conversión aproximada…',
        currencyApprox: 'Conversión aproximada. El pago siempre se realiza en EUR.',
        currencyUnavailable: 'Conversión no disponible. El pago se realiza en EUR.',
        perGroup: 'por grupo privado',
        ticketNote: 'Entradas y comidas no incluidas',
        detailsLabel: 'Itinerario y detalles',
        experienceLabel: 'Ver experiencia',
        included: ['Guía privada', 'Recogida en Lisboa', 'Transporte'],
        excluded: ['Comidas'],
        items: [
          {
            id: 'tour1',
            slug: 'sintra-atlantic-coast',
            badge: 'Día completo · Primera visita',
            name: 'Sintra Completa & Costa Atlántica',
            tag: 'Privado · 7 horas · Máx. 4 personas',
            stops: 'Sintra histórica · Pena · Cabo da Roca',
            fit: '¿Primera visita? Sintra, el extremo occidental de Europa y Cascais en un día privado y relajado.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca en el tour privado Sintra Completa y Costa Atlántica',
            ticketNote: 'Entradas a palacios aparte (~€20/persona)',
            featured: true
          },
          {
            id: 'tour2',
            slug: 'sintra-hidden-beaches',
            badge: 'Medio día · Costa y playas',
            name: 'Sintra & Playas Escondidas',
            tag: 'Privado · 5 horas · Máx. 4 personas',
            stops: 'Colinas de Sintra · Calas ocultas · Azenhas do Mar',
            fit: 'Ruta costera más tranquila con miradores — ideal para familias o un ritmo más pausado.',
            price: '€199',
            priceValue: '199',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Azenhas do Mar en el tour privado Sintra y Playas Escondidas',
            ticketNote: 'Entradas a palacios aparte (~€20/persona)'
          },
          {
            id: 'fatima-obidos',
            slug: 'fatima-obidos',
            badge: 'Día completo · Patrimonio y reflexión',
            name: 'Tour Privado Fátima & Óbidos',
            tag: 'Privado · Día completo · Máx. 4 personas',
            stops: 'Lisboa · Óbidos · Fátima · Lisboa',
            fit: 'Recorre las calles medievales de Óbidos y descubre después la calma y el significado de Fátima en un día privado y sin prisas.',
            price: '€500',
            priceValue: '500',
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
        title: 'Reconocidos por los detalles que hacen el día fácil.',
        trustAria: 'Valoración en TripAdvisor',
        averageLabel: 'valoración media',
        trustNote: '★★★★★ 5.0 en TripAdvisor',
        gridAria: 'Reseñas de viajeros',
        dotsAria: 'Paginación de reseñas',
        previousAria: 'Mostrar reseñas anteriores',
        nextAria: 'Mostrar reseñas siguientes',
        viewAll: 'Ver todo en TripAdvisor',
        viewAllAria: 'Ver todas las reseñas en TripAdvisor (se abre en una pestaña nueva)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 valoración media',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Cálida, cercana y con mucho conocimiento local. Sintra se sintió especial desde el primer momento."' },
          { initials: 'MM', name: 'Monica M.', text: '"Muy clara, amable y bien organizada — supo exactamente a dónde ir sin estrés."' },
          { initials: 'FG', name: 'Fernando G.', text: '"Su conocimiento local marcó la diferencia. Encontramos lugares imposibles por nuestra cuenta."' },
          { initials: 'AT', name: 'Amanda T.', text: '"Tour privado relajado, con buenas historias y un ritmo muy bien pensado."' },
          { initials: 'LS', name: 'Laura S.', text: '"Profesional y cálida. Todo el día fue fácil y muy bien cuidado."' },
          { initials: 'JW', name: 'James W.', text: '"Miradores inolvidables y rincones escondidos, mostrados con mucho cuidado."' }
        ]
      },
      faq: {
        kicker: 'Antes de reservar',
        title: 'Respuestas prácticas, desde el principio.',
        items: [
          { question: '¿Qué incluye?', answer: 'Recogida y regreso a Lisboa, guía privada y transporte privado para hasta 4 personas. En las rutas de Sintra, las entradas a palacios no están incluidas (~€20/persona). Las comidas no están incluidas.' },
          { question: '¿Cómo reservo?', answer: 'Escríbenos por WhatsApp con tus fechas. Confirmamos disponibilidad, pago y recogida. También disponible en Viator.' },
          { question: '¿Cuál es la política de cancelación?', answer: 'Cancelación gratuita con 24 horas de antelación.' },
          { question: '¿Dónde es la recogida?', answer: 'En tu hotel o alojamiento en Lisboa. Confirmamos la hora exacta al reservar.' },
          { question: '¿Podemos personalizar la ruta?', answer: 'Sí. Paradas, ritmo y horarios se adaptan a tu grupo, el clima y tus intereses.' },
          { question: '¿Quién guiará nuestra experiencia?', answer: 'Rita es la fundadora y guía local de About Culture Things. La confirmación de la reserva incluye los detalles prácticos de su día.' }
        ]
      },
      finalCta: {
        kicker: 'Empiecen por sus fechas',
        title: 'Cuéntanos qué haría que el día funcionase para ustedes.',
        text: 'Comparte las fechas, el tamaño del grupo y lo que esperan del día. About Culture Things les ayudará a elegir.',
        trust: 'Cancelación gratuita con 24h de antelación · 5.0 en TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        description: 'Experiencias privadas guiadas desde Lisboa por Sintra, la costa atlántica, Fátima y Óbidos.',
        location: 'Sintra y Lisboa, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    pt: {
      seo: {
        title: 'Tours Privados desde Lisboa | Sintra, Fátima e Óbidos',
        description: 'Experiências privadas desde Lisboa a Sintra, à costa atlântica, Fátima e Óbidos, com transporte privado, recolha e ritmo flexível.',
        keywords: 'tours privados desde Lisboa, tour privado Sintra, tour privado Fátima Óbidos, excursão Sintra desde Lisboa, tours privados Portugal',
        author: 'About Culture Things',
        ogTitle: 'Tours Privados desde Lisboa | About Culture Things',
        ogDescription: 'Dias privados desde Lisboa com conhecimento local, um ritmo bem pensado e transporte para o teu grupo.',
        twitterTitle: 'Tours Privados desde Lisboa | About Culture Things',
        twitterDescription: 'Experiências privadas desde Lisboa a Sintra, à costa atlântica, Fátima e Óbidos.',
        imageAlt: 'Viajantes num tour privado na costa atlântica de Portugal'
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
        { label: 'Porquê privado', href: '#approach', key: 'approach' },
        { label: 'Avaliações', href: '#reviews', key: 'reviews' },
        { label: 'Sobre nós', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Ver disponibilidade',
        hero: 'Ver experiências',
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
        kicker: 'Experiências privadas guiadas em Portugal',
        title: 'Tours privados desde Lisboa, pensados para o teu dia.',
        subtitle: 'Descobre Sintra, a costa atlântica, Fátima e Óbidos com transporte privado, conhecimento local e liberdade para definir o ritmo.',
        secondaryCta: 'Ver tours',
        trust: '5.0 no TripAdvisor',
        trustAria: 'Ler avaliações no TripAdvisor',
        highlights: 'Transporte privado · Até 4 pessoas · Recolha em Lisboa',
        guide: 'Inglês, português e espanhol disponíveis',
        price: '',
        priceLink: 'Ver os três tours ↓',
        imageAlt: 'Viajantes num tour privado na costa atlântica'
      },
      benefits: {
        kicker: 'O padrão About Culture Things',
        title: 'A diferença está na forma como se vive o dia.',
        description: 'Um dia privado elimina a logística dos grupos e devolve o teu tempo aos lugares, às histórias e às pessoas que vieste conhecer.',
        aria: 'Porquê reservar com About Culture Things',
        items: [
          { title: 'Só o teu grupo', text: 'Sem autocarro partilhado nem agenda de grupo. Até quatro pessoas com espaço para parar, perguntar e apreciar.', icon: 'plus' },
          { title: 'Um ritmo bem pensado', text: 'A rota tem um plano claro, mas o horário pode adaptar-se ao grupo, ao tempo e ao que mais importa nesse dia.', icon: 'pin' },
          { title: 'Decisões locais', text: 'O contexto, as escolhas práticas e os recantos tranquilos transformam uma lista de lugares num dia com sentido.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'História da fundadora',
        title: 'Um olhar local que vive na marca.',
        text: 'A Rita fundou a About Culture Things e trabalha como guia local. A sua forma calorosa, precisa e atenta de receber definiu o padrão de cada experiência.',
        signature: 'Rita · Fundadora e guia local',
        imageAlt: 'A Rita com uma viajante junto à costa atlântica perto de Sintra'
      },
      offers: {
        kicker: 'Experiências privadas desde Lisboa',
        title: 'Escolhe o dia que combina contigo.',
        description: 'Cada rota tem uma forma clara, com flexibilidade no ritmo e nas decisões práticas pelo caminho.',
        trustAria: 'O que cada tour inclui',
        trust: ['Até 4 pessoas', 'Recolha em Lisboa incluída', 'Ritmo flexível'],
        currencyNote: 'Todos os preços são por grupo privado e cobrados em EUR.',
        currencyLabel: 'Estimativa em',
        currencyLoading: 'A atualizar a conversão aproximada…',
        currencyApprox: 'Conversão aproximada. O pagamento é sempre cobrado em EUR.',
        currencyUnavailable: 'Conversão indisponível. O pagamento é cobrado em EUR.',
        perGroup: 'por grupo privado',
        ticketNote: 'Bilhetes e refeições não incluídos',
        detailsLabel: 'Itinerário e detalhes',
        experienceLabel: 'Ver experiência',
        included: ['Guia privada', 'Recolha em Lisboa', 'Transporte'],
        excluded: ['Refeições'],
        items: [
          {
            id: 'tour1',
            slug: 'sintra-atlantic-coast',
            badge: 'Dia inteiro · Primeira visita',
            name: 'Sintra Completa & Costa Atlântica',
            tag: 'Privado · 7 horas · Máx. 4 pessoas',
            stops: 'Sintra histórica · Pena · Cabo da Roca',
            fit: 'Primeira visita? Sintra, o ponto mais ocidental da Europa e Cascais num dia privado e descontraído.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca no tour privado Sintra Completa e Costa Atlântica',
            ticketNote: 'Bilhetes para palácios à parte (~€20/pessoa)',
            featured: true
          },
          {
            id: 'tour2',
            slug: 'sintra-hidden-beaches',
            badge: 'Meio dia · Costa e praias',
            name: 'Sintra & Praias Escondidas',
            tag: 'Privado · 5 horas · Máx. 4 pessoas',
            stops: 'Colinas de Sintra · Enseadas escondidas · Azenhas do Mar',
            fit: 'Rota costeira mais tranquila com miradouros — ideal para famílias ou um ritmo mais calmo.',
            price: '€199',
            priceValue: '199',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Azenhas do Mar no tour privado Sintra e Praias Escondidas',
            ticketNote: 'Bilhetes para palácios à parte (~€20/pessoa)'
          },
          {
            id: 'fatima-obidos',
            slug: 'fatima-obidos',
            badge: 'Dia inteiro · Património e reflexão',
            name: 'Tour Privado Fátima & Óbidos',
            tag: 'Privado · Dia inteiro · Máx. 4 pessoas',
            stops: 'Lisboa · Óbidos · Fátima · Lisboa',
            fit: 'Percorre as ruas medievais de Óbidos e vive depois a serenidade e o significado de Fátima num dia privado e sem pressas.',
            price: '€500',
            priceValue: '500',
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
        title: 'Reconhecidos pelos detalhes que tornam o dia fácil.',
        trustAria: 'Classificação no TripAdvisor',
        averageLabel: 'classificação média',
        trustNote: '★★★★★ 5.0 no TripAdvisor',
        gridAria: 'Avaliações de viajantes',
        dotsAria: 'Paginação das avaliações',
        previousAria: 'Mostrar avaliações anteriores',
        nextAria: 'Mostrar avaliações seguintes',
        viewAll: 'Ver tudo no TripAdvisor',
        viewAllAria: 'Ver todas as avaliações no TripAdvisor (abre num novo separador)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 classificação média',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Próxima e cheia de conhecimento local. Sintra foi especial desde o primeiro momento."' },
          { initials: 'MM', name: 'Monica M.', text: '"Muito clara, simpática e bem organizada — soube exatamente para onde ir sem stress."' },
          { initials: 'FG', name: 'Fernando G.', text: '"O conhecimento local fez toda a diferença. Encontrámos lugares impossíveis sozinhos."' },
          { initials: 'AT', name: 'Amanda T.', text: '"Tour privado descontraído, com boas histórias e um ritmo muito bem pensado."' },
          { initials: 'LS', name: 'Laura S.', text: '"Profissional e calorosa. O dia todo foi fácil e muito bem cuidado."' },
          { initials: 'JW', name: 'James W.', text: '"Miradouros inesquecíveis e recantos escondidos, mostrados com muito cuidado."' }
        ]
      },
      faq: {
        kicker: 'Antes de reservar',
        title: 'Respostas práticas, logo à partida.',
        items: [
          { question: 'O que está incluído?', answer: 'Recolha e regresso a Lisboa, guia privada e transporte privado para até 4 pessoas. Nas rotas de Sintra, os bilhetes para os palácios não estão incluídos (~€20/pessoa). As refeições não estão incluídas.' },
          { question: 'Como reservo?', answer: 'Envia-nos mensagem no WhatsApp com as tuas datas. Confirmamos disponibilidade, pagamento e recolha. Também disponível na Viator.' },
          { question: 'Qual é a política de cancelamento?', answer: 'Cancelamento gratuito com 24 horas de antecedência.' },
          { question: 'Onde é a recolha?', answer: 'No teu hotel ou alojamento em Lisboa. Confirmamos a hora exata quando reservas.' },
          { question: 'Podemos personalizar a rota?', answer: 'Sim. Paragens, ritmo e horários adaptam-se ao teu grupo, ao tempo e aos teus interesses.' },
          { question: 'Quem vai guiar a nossa experiência?', answer: 'A Rita é a fundadora e guia local da About Culture Things. A confirmação da reserva inclui os detalhes práticos do vosso dia.' }
        ]
      },
      finalCta: {
        kicker: 'Comecem pelas datas',
        title: 'Conta-nos o que faria o dia resultar para vocês.',
        text: 'Partilha as datas, o tamanho do grupo e o que esperam do dia. A About Culture Things ajuda-vos a escolher.',
        trust: 'Cancelamento gratuito com 24h de antecedência · 5.0 no TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        description: 'Experiências privadas guiadas desde Lisboa por Sintra, a costa atlântica, Fátima e Óbidos.',
        location: 'Sintra e Lisboa, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
