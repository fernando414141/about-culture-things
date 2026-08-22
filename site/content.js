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
      default: "Hi Rita! I'd like to check availability for a private tour from Lisbon.",
      book: "Hi Rita! I'd like to check availability for a private tour from Lisbon.",
      tour1: "Hi Rita! I'm interested in the Sintra Complete & Atlantic Coast private tour. Could you check my dates?",
      tour2: "Hi Rita! I'm interested in the Sintra & Hidden Beaches private tour. Could you check my dates?",
      'fatima-obidos': "Hi Rita! I'm interested in the Fátima & Óbidos private day tour. Could you check my dates?",
      final: "Hi Rita! I'd like some help choosing the right private tour.",
      faq: 'Hi Rita! I have a question about your private tours.'
    },
    es: {
      default: '¡Hola, Rita! Quisiera consultar disponibilidad para un tour privado desde Lisboa.',
      book: '¡Hola, Rita! Quisiera consultar disponibilidad para un tour privado desde Lisboa.',
      tour1: '¡Hola, Rita! Me interesa el tour privado Sintra Completa y Costa Atlántica. ¿Podrías consultar mis fechas?',
      tour2: '¡Hola, Rita! Me interesa el tour privado Sintra y Playas Escondidas. ¿Podrías consultar mis fechas?',
      'fatima-obidos': '¡Hola, Rita! Me interesa el tour privado de día completo a Fátima y Óbidos. ¿Podrías consultar mis fechas?',
      final: '¡Hola, Rita! Quisiera ayuda para elegir el tour privado más adecuado.',
      faq: '¡Hola, Rita! Tengo una pregunta sobre los tours privados.'
    },
    pt: {
      default: 'Olá, Rita! Gostaria de verificar a disponibilidade para um tour privado a partir de Lisboa.',
      book: 'Olá, Rita! Gostaria de verificar a disponibilidade para um tour privado a partir de Lisboa.',
      tour1: 'Olá, Rita! Tenho interesse no tour privado Sintra Completa e Costa Atlântica. Podes verificar as minhas datas?',
      tour2: 'Olá, Rita! Tenho interesse no tour privado Sintra e Praias Escondidas. Podes verificar as minhas datas?',
      'fatima-obidos': 'Olá, Rita! Tenho interesse no tour privado de dia inteiro a Fátima e Óbidos. Podes verificar as minhas datas?',
      final: 'Olá, Rita! Gostaria de ajuda para escolher o tour privado mais indicado.',
      faq: 'Olá, Rita! Tenho uma pergunta sobre os tours privados.'
    }
  },
  schema: {
    types: ['LocalBusiness', 'TouristAttraction', 'TravelAgency'],
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
        title: 'Private Tours from Lisbon | Sintra, Fátima & Óbidos',
        description: 'Private tours from Lisbon with Rita for up to 4 guests. Explore Sintra, the Atlantic coast, Fátima and Óbidos with hotel pickup and private transport. From €199 per group.',
        keywords: 'private tours from Lisbon, private Sintra tour, Fátima Óbidos private tour, Sintra day trip from Lisbon, Cabo da Roca tour, private tours Portugal',
        author: 'About Culture Things',
        ogTitle: 'Private Tours from Lisbon | About Culture Things',
        ogDescription: 'Explore Sintra, the Atlantic coast, Fátima and Óbidos with Rita. Private transport, Lisbon pickup and up to 4 guests.',
        twitterTitle: 'Private Tours from Lisbon | About Culture Things',
        twitterDescription: 'Private days from Lisbon with Rita. Sintra, coast, Fátima and Óbidos. Up to 4 guests, from €199 per group.',
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
        { label: 'Tours', href: '#tours', key: 'tours' },
        { label: 'Reviews', href: '#reviews', key: 'reviews' },
        { label: 'Gallery', href: '#gallery', key: 'gallery' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Check availability',
        hero: 'Check availability',
        offer: 'Check availability',
        tour1: 'Check Sintra dates',
        tour2: 'Check coastal dates',
        'fatima-obidos': 'Check Fátima & Óbidos dates',
        final: 'Message on WhatsApp',
        navAria: 'Contact us on WhatsApp',
        fabAria: 'Check tour availability on WhatsApp',
        fabTooltip: 'Check availability'
      },
      hero: {
        kicker: 'Sintra · Coast · Central Portugal',
        title: 'Private Tours from Lisbon, Made Personal',
        subtitle: 'Explore Sintra, the Atlantic coast, Fátima and Óbidos with Rita — private transport, Lisbon pickup and your own pace.',
        secondaryCta: 'See tours',
        trust: '5.0 on TripAdvisor',
        trustAria: 'Read traveler reviews on TripAdvisor',
        highlights: 'Private transport · Up to 4 guests · Lisbon pickup',
        guide: 'Personally hosted by Rita · English, Portuguese & Spanish',
        price: 'From €199 per private group (up to 4)',
        priceLink: 'See all three tours ↓',
        imageAlt: 'Travelers on a private Sintra tour along the Atlantic coast'
      },
      benefits: {
        kicker: 'Why us',
        title: 'A private day, hosted by someone local',
        description: '',
        aria: 'Why book About Culture Things',
        items: [
          { title: 'Only your group', text: 'Up to four guests, with space to slow down or change the pace.', icon: 'plus' },
          { title: 'Rita, your local host', text: 'A real person who knows the stories, roads and quieter corners.', icon: 'pin' },
          { title: 'Plan it directly', text: 'Ask questions and confirm your day with Rita on WhatsApp.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'Meet your host',
        title: 'Portugal feels different with someone local beside you',
        text: 'Rita creates relaxed private days around the people in front of her — sharing the places she knows with warmth, context and room to enjoy them.',
        signature: 'Rita · Founder & local host',
        imageAlt: 'Rita with a guest overlooking the Atlantic coast near Sintra'
      },
      offers: {
        kicker: 'Tours',
        title: 'Choose your private day from Lisbon',
        description: 'Three distinct routes, always private and designed for up to four guests.',
        trustAria: 'What every tour includes',
        trust: ['Up to 4 guests', 'Lisbon pickup included', 'Flexible pacing'],
        currencyNote: 'All prices are per private group and charged in EUR.',
        perGroup: 'per private group',
        ticketNote: 'Attraction tickets and meals are not included',
        detailsLabel: 'Itinerary & details',
        included: ['Private guide', 'Lisbon pickup', 'Transport'],
        excluded: ['Meals'],
        items: [
          {
            id: 'tour1',
            badge: 'Full day · First visit',
            name: 'Sintra Complete & Atlantic Coast',
            tag: 'Private · 7 hours · Max 4 guests',
            stops: 'Historic Sintra · Pena · Cabo da Roca',
            fit: 'First visit? Sintra, Europe\'s western edge, and Cascais in one relaxed private day.',
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
            badge: 'Half day · Coast & beaches',
            name: 'Sintra & Hidden Beaches',
            tag: 'Private · 5 hours · Max 4 guests',
            stops: 'Sintra hills · Hidden coves · Azenhas do Mar',
            fit: 'A shorter coastal route with quiet viewpoints — ideal for families or a slower pace.',
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
        kicker: 'Gallery',
        title: 'Portugal, through days shared with Rita'
      },
      reviews: {
        kicker: 'Reviews',
        title: 'What travelers say',
        trustAria: 'TripAdvisor rating',
        averageLabel: 'average rating',
        trustNote: '★★★★★ 5.0 on TripAdvisor',
        gridAria: 'Traveler reviews',
        dotsAria: 'Review pagination',
        previousAria: 'Show previous reviews',
        nextAria: 'Show next reviews',
        viewAll: 'See all on TripAdvisor',
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
        kicker: 'FAQ',
        title: 'Common questions before you book',
        items: [
          { question: 'What\'s included?', answer: 'Lisbon pickup and drop-off, private guide, and private transport for up to 4 guests. For Sintra routes, palace tickets are not included (~€20/person). Meals are not included.' },
          { question: 'How do I book?', answer: 'Message us on WhatsApp with your dates. We\'ll confirm availability, payment, and pickup details. Viator booking also available.' },
          { question: 'What\'s the cancellation policy?', answer: 'Free cancellation with 24 hours\' notice.' },
          { question: 'Where is pickup?', answer: 'From your hotel or accommodation in Lisbon. We confirm the exact time when you book.' },
          { question: 'Can we customize the route?', answer: 'Yes. Stops, pace, and timing adapt to your group, weather, and interests.' }
        ]
      },
      finalCta: {
        title: 'Ready to see Portugal your way?',
        text: 'Send your dates to Rita. She’ll help you choose a route or shape a private day around you.',
        trust: 'Free cancellation · 24h notice · 5.0 TripAdvisor'
      },
      footer: {
        contactAria: 'Contact',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    es: {
      seo: {
        title: 'Tours Privados desde Lisboa | Sintra, Fátima y Óbidos',
        description: 'Tours privados desde Lisboa con Rita para hasta 4 personas. Descubre Sintra, la costa atlántica, Fátima y Óbidos con recogida y transporte privado. Desde €199 por grupo.',
        keywords: 'tours privados desde Lisboa, tour privado Sintra, tour privado Fátima Óbidos, excursión Sintra desde Lisboa, tours privados Portugal',
        author: 'About Culture Things',
        ogTitle: 'Tours Privados desde Lisboa | About Culture Things',
        ogDescription: 'Descubre Sintra, la costa atlántica, Fátima y Óbidos con Rita. Transporte privado, recogida en Lisboa y hasta 4 personas.',
        twitterTitle: 'Tours Privados desde Lisboa | About Culture Things',
        twitterDescription: 'Días privados desde Lisboa con Rita. Sintra, costa, Fátima y Óbidos. Hasta 4 personas, desde €199 por grupo.',
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
        { label: 'Tours', href: '#tours', key: 'tours' },
        { label: 'Reseñas', href: '#reviews', key: 'reviews' },
        { label: 'Galería', href: '#gallery', key: 'gallery' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Consultar disponibilidad',
        hero: 'Consultar disponibilidad',
        offer: 'Consultar disponibilidad',
        tour1: 'Consultar fechas para Sintra',
        tour2: 'Consultar fechas para la costa',
        'fatima-obidos': 'Consultar fechas para Fátima y Óbidos',
        final: 'Escribir por WhatsApp',
        navAria: 'Contactar por WhatsApp',
        fabAria: 'Consultar disponibilidad por WhatsApp',
        fabTooltip: 'Consultar disponibilidad'
      },
      hero: {
        kicker: 'Sintra · Costa · Portugal central',
        title: 'Tours privados desde Lisboa, hechos a tu medida',
        subtitle: 'Descubre Sintra, la costa atlántica, Fátima y Óbidos con Rita — transporte privado, recogida en Lisboa y tu propio ritmo.',
        secondaryCta: 'Ver tours',
        trust: '5.0 en TripAdvisor',
        trustAria: 'Leer reseñas en TripAdvisor',
        highlights: 'Transporte privado · Hasta 4 personas · Recogida en Lisboa',
        guide: 'Rita te acompaña personalmente · Inglés, portugués y español',
        price: 'Desde €199 por grupo privado (hasta 4)',
        priceLink: 'Ver los tres tours ↓',
        imageAlt: 'Viajeros en un tour privado por la costa atlántica'
      },
      benefits: {
        kicker: 'Por qué nosotros',
        title: 'Un día privado con alguien local a tu lado',
        description: '',
        aria: 'Por qué reservar con About Culture Things',
        items: [
          { title: 'Solo tu grupo', text: 'Hasta cuatro personas, con libertad para parar o cambiar el ritmo.', icon: 'plus' },
          { title: 'Rita, tu anfitriona local', text: 'Una persona real que conoce las historias, los caminos y los rincones tranquilos.', icon: 'pin' },
          { title: 'Organízalo directamente', text: 'Pregunta y confirma el día con Rita por WhatsApp.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'Conoce a tu anfitriona',
        title: 'Portugal se vive diferente con alguien local a tu lado',
        text: 'Rita crea días privados y relajados pensando en las personas que tiene delante, compartiendo los lugares que conoce con cercanía, contexto y tiempo para disfrutarlos.',
        signature: 'Rita · Fundadora y anfitriona local',
        imageAlt: 'Rita con una viajera frente a la costa atlántica cerca de Sintra'
      },
      offers: {
        kicker: 'Tours',
        title: 'Elige tu día privado desde Lisboa',
        description: 'Tres rutas diferentes, siempre privadas y pensadas para hasta cuatro personas.',
        trustAria: 'Qué incluye cada tour',
        trust: ['Hasta 4 personas', 'Recogida en Lisboa incluida', 'Ritmo flexible'],
        currencyNote: 'Todos los precios son por grupo privado y se cobran en EUR.',
        perGroup: 'por grupo privado',
        ticketNote: 'Entradas y comidas no incluidas',
        detailsLabel: 'Itinerario y detalles',
        included: ['Guía privada', 'Recogida en Lisboa', 'Transporte'],
        excluded: ['Comidas'],
        items: [
          {
            id: 'tour1',
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
        kicker: 'Galería',
        title: 'Portugal, a través de los días compartidos con Rita'
      },
      reviews: {
        kicker: 'Reseñas',
        title: 'Lo que dicen los viajeros',
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
        kicker: 'FAQ',
        title: 'Preguntas frecuentes antes de reservar',
        items: [
          { question: '¿Qué incluye?', answer: 'Recogida y regreso a Lisboa, guía privada y transporte privado para hasta 4 personas. En las rutas de Sintra, las entradas a palacios no están incluidas (~€20/persona). Las comidas no están incluidas.' },
          { question: '¿Cómo reservo?', answer: 'Escríbenos por WhatsApp con tus fechas. Confirmamos disponibilidad, pago y recogida. También disponible en Viator.' },
          { question: '¿Cuál es la política de cancelación?', answer: 'Cancelación gratuita con 24 horas de antelación.' },
          { question: '¿Dónde es la recogida?', answer: 'En tu hotel o alojamiento en Lisboa. Confirmamos la hora exacta al reservar.' },
          { question: '¿Podemos personalizar la ruta?', answer: 'Sí. Paradas, ritmo y horarios se adaptan a tu grupo, el clima y tus intereses.' }
        ]
      },
      finalCta: {
        title: '¿Listo para conocer Portugal a tu manera?',
        text: 'Envía tus fechas a Rita. Te ayudará a elegir una ruta o a crear un día privado a tu medida.',
        trust: 'Cancelación gratuita · 24h de antelación · 5.0 TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    pt: {
      seo: {
        title: 'Tours Privados desde Lisboa | Sintra, Fátima e Óbidos',
        description: 'Tours privados desde Lisboa com a Rita para até 4 pessoas. Descobre Sintra, a costa atlântica, Fátima e Óbidos com recolha e transporte privado. Desde €199 por grupo.',
        keywords: 'tours privados desde Lisboa, tour privado Sintra, tour privado Fátima Óbidos, excursão Sintra desde Lisboa, tours privados Portugal',
        author: 'About Culture Things',
        ogTitle: 'Tours Privados desde Lisboa | About Culture Things',
        ogDescription: 'Descobre Sintra, a costa atlântica, Fátima e Óbidos com a Rita. Transporte privado, recolha em Lisboa e até 4 pessoas.',
        twitterTitle: 'Tours Privados desde Lisboa | About Culture Things',
        twitterDescription: 'Dias privados desde Lisboa com a Rita. Sintra, costa, Fátima e Óbidos. Até 4 pessoas, desde €199 por grupo.',
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
        { label: 'Tours', href: '#tours', key: 'tours' },
        { label: 'Avaliações', href: '#reviews', key: 'reviews' },
        { label: 'Galeria', href: '#gallery', key: 'gallery' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Verificar disponibilidade',
        hero: 'Verificar disponibilidade',
        offer: 'Verificar disponibilidade',
        tour1: 'Verificar datas para Sintra',
        tour2: 'Verificar datas para a costa',
        'fatima-obidos': 'Verificar datas para Fátima e Óbidos',
        final: 'Enviar mensagem no WhatsApp',
        navAria: 'Contactar por WhatsApp',
        fabAria: 'Verificar disponibilidade no WhatsApp',
        fabTooltip: 'Verificar disponibilidade'
      },
      hero: {
        kicker: 'Sintra · Costa · Portugal central',
        title: 'Tours privados desde Lisboa, feitos à tua medida',
        subtitle: 'Descobre Sintra, a costa atlântica, Fátima e Óbidos com a Rita — transporte privado, recolha em Lisboa e o teu próprio ritmo.',
        secondaryCta: 'Ver tours',
        trust: '5.0 no TripAdvisor',
        trustAria: 'Ler avaliações no TripAdvisor',
        highlights: 'Transporte privado · Até 4 pessoas · Recolha em Lisboa',
        guide: 'Acompanhamento pessoal da Rita · Inglês, português e espanhol',
        price: 'Desde €199 por grupo privado (até 4)',
        priceLink: 'Ver os três tours ↓',
        imageAlt: 'Viajantes num tour privado na costa atlântica'
      },
      benefits: {
        kicker: 'Porquê nós',
        title: 'Um dia privado com alguém local ao teu lado',
        description: '',
        aria: 'Porquê reservar com About Culture Things',
        items: [
          { title: 'Só o teu grupo', text: 'Até quatro pessoas, com liberdade para parar ou mudar o ritmo.', icon: 'plus' },
          { title: 'A Rita, a tua anfitriã local', text: 'Uma pessoa real que conhece as histórias, as estradas e os recantos tranquilos.', icon: 'pin' },
          { title: 'Combina tudo diretamente', text: 'Faz perguntas e confirma o dia com a Rita pelo WhatsApp.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'Conhece a tua anfitriã',
        title: 'Portugal sente-se diferente com alguém local ao teu lado',
        text: 'A Rita cria dias privados e descontraídos a pensar nas pessoas que tem à frente, partilhando os lugares que conhece com proximidade, contexto e tempo para os saborear.',
        signature: 'Rita · Fundadora e anfitriã local',
        imageAlt: 'A Rita com uma viajante junto à costa atlântica perto de Sintra'
      },
      offers: {
        kicker: 'Tours',
        title: 'Escolhe o teu dia privado desde Lisboa',
        description: 'Três rotas diferentes, sempre privadas e pensadas para até quatro pessoas.',
        trustAria: 'O que cada tour inclui',
        trust: ['Até 4 pessoas', 'Recolha em Lisboa incluída', 'Ritmo flexível'],
        currencyNote: 'Todos os preços são por grupo privado e cobrados em EUR.',
        perGroup: 'por grupo privado',
        ticketNote: 'Bilhetes e refeições não incluídos',
        detailsLabel: 'Itinerário e detalhes',
        included: ['Guia privada', 'Recolha em Lisboa', 'Transporte'],
        excluded: ['Refeições'],
        items: [
          {
            id: 'tour1',
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
        kicker: 'Galeria',
        title: 'Portugal, através dos dias partilhados com a Rita'
      },
      reviews: {
        kicker: 'Avaliações',
        title: 'O que dizem os viajantes',
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
        kicker: 'FAQ',
        title: 'Perguntas frequentes antes de reservar',
        items: [
          { question: 'O que está incluído?', answer: 'Recolha e regresso a Lisboa, guia privada e transporte privado para até 4 pessoas. Nas rotas de Sintra, os bilhetes para os palácios não estão incluídos (~€20/pessoa). As refeições não estão incluídas.' },
          { question: 'Como reservo?', answer: 'Envia-nos mensagem no WhatsApp com as tuas datas. Confirmamos disponibilidade, pagamento e recolha. Também disponível na Viator.' },
          { question: 'Qual é a política de cancelamento?', answer: 'Cancelamento gratuito com 24 horas de antecedência.' },
          { question: 'Onde é a recolha?', answer: 'No teu hotel ou alojamento em Lisboa. Confirmamos a hora exata quando reservas.' },
          { question: 'Podemos personalizar a rota?', answer: 'Sim. Paragens, ritmo e horários adaptam-se ao teu grupo, ao tempo e aos teus interesses.' }
        ]
      },
      finalCta: {
        title: 'Pronto para conhecer Portugal à tua maneira?',
        text: 'Envia as tuas datas à Rita. Ela ajuda-te a escolher uma rota ou a criar um dia privado à tua medida.',
        trust: 'Cancelamento gratuito · 24h de antecedência · 5.0 TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
