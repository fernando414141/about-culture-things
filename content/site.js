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
    themeColor: '#5C6B2A',
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
    logo: 'assets/images/logo.png',
    hero: {
      src: 'assets/images/hero-640.jpg',
      srcset: 'assets/images/hero-640.jpg 640w, assets/images/hero-960.jpg 960w, assets/images/hero.webp 1537w',
      full: 'assets/images/hero.webp',
      width: 960,
      height: 638
    },
    founder: {
      src: 'assets/images/rita.webp',
      width: 640,
      height: 800
    },
    ogImage: 'https://aboutculturethings.com/assets/images/hero.webp'
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
    default: "Hi Rita, I'd like to book a tour.",
    book: "Hi Rita, I'd like to book a tour.",
    tour1: "Hi Rita, I'd like to book the Sintra Complete Experience.",
    tour2: "Hi Rita, I'd like to book the Sintra & Hidden Beaches Experience.",
    about: "Hi Rita, I'd like to learn more about your tours.",
    final: "Hi Rita, I'd like to check dates for a private Sintra tour.",
    faq: 'Hi Rita, I have a question.'
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
        title: 'About Culture Things — Private Sintra Tours | Rita Almeida',
        description: 'Private Sintra tours with Rita Almeida — Pena Palace, hidden beaches, Cascais coast. 5.0★ TripAdvisor. Lisbon pickup, max 4 people.',
        author: 'Rita Almeida — About Culture Things',
        ogTitle: 'About Culture Things — Private Sintra Tours | Rita Almeida',
        ogDescription: 'Private Sintra tours with Rita Almeida — Pena Palace, hidden beaches, Cascais coast. 5.0★ TripAdvisor. Max 4 people, Lisbon pickup.',
        twitterTitle: 'About Culture Things — Sintra Tours',
        twitterDescription: 'Private Sintra tours with Rita Almeida. 5.0★ TripAdvisor. Pena Palace, hidden beaches, Cascais. Max 4 people, Lisbon pickup.',
        imageAlt: "Rita Almeida with private tour guests on Portugal's Atlantic coast — About Culture Things Sintra tours"
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
        { label: 'Reviews', href: '#reviews', key: 'reviews' },
        { label: 'About Rita', href: '#differentiators', key: 'about', wide: true },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Check dates',
        hero: 'Check dates on WhatsApp',
        offer: 'Check dates for this tour',
        final: 'Check dates on WhatsApp',
        about: 'Message Rita on WhatsApp',
        navAria: 'Book on WhatsApp',
        fabAria: 'Message Rita on WhatsApp',
        fabTooltip: 'Message Rita on WhatsApp'
      },
      hero: {
        kicker: 'Private Sintra Tours',
        title: 'Private Sintra tours with a local guide',
        subtitle: 'Private tours from €275 per group, with Lisbon pickup, flexible pacing, and Rita Almeida as your local guide.',
        secondaryCta: 'See tours',
        trust: '5.0 ★ TripAdvisor',
        trustAria: 'View customer reviews',
        highlights: 'Private groups up to 4 · Lisbon pickup · Free reschedule',
        guide: 'With Rita Almeida, Sintra-born guide',
        price: 'From €275 per private group (up to 4)',
        priceLink: 'See both tours ↓',
        imageAlt: "Rita Almeida with private tour guests on Portugal's Atlantic coast"
      },
      benefits: {
        kicker: 'Why choose us',
        title: 'A private tour designed around your pace',
        description: 'Skip the shared bus routine and discover Sintra with a local guide, simple planning, and room to enjoy the day.',
        aria: 'Why choose About Culture Things',
        items: [
          { title: 'Your pace, not a group schedule', text: 'Private routes for up to 4 guests, with time for viewpoints, photos, and quiet stops.', icon: 'plus' },
          { title: 'Local insight beyond the checklist', text: 'Rita blends famous sights with stories, coastal views, and places many visitors miss.', icon: 'pin' },
          { title: 'Easy from first message to pickup', text: 'Check dates on WhatsApp, confirm your route, and start with Lisbon pickup included.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Offer',
        title: 'Choose your private Sintra experience',
        description: 'Two ready-to-book routes with clear pricing, private transport, and flexible pacing.',
        trustAria: 'Tour guarantees',
        trust: ['Private-only tours', 'Lisbon pickup included', 'Free reschedule with 24h notice'],
        perGroup: 'per private group',
        ticketNote: 'Palace tickets not included (~€20/person extra)',
        detailsLabel: 'What’s included & full itinerary',
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
            image: 'assets/images/tour-full-sintra-coast.webp',
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
            image: 'assets/images/tour-hidden-beaches.webp',
            imageAlt: 'Sintra & Hidden Beaches Experience'
          }
        ]
      },
      reviews: {
        kicker: 'Social proof',
        title: 'What guests say after touring with Rita',
        trustAria: 'TripAdvisor rating summary',
        averageLabel: 'average rating',
        trustNote: '5.0 from 6 TripAdvisor reviews',
        carouselAria: 'Browse customer reviews',
        dotsAria: 'Review pagination',
        previousAria: 'Show previous reviews',
        nextAria: 'Show next reviews',
        viewAll: 'Read more reviews on TripAdvisor',
        viewAllAria: 'Read more reviews on TripAdvisor (opens in new tab)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 out of 5 average rating',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Warm, personal, and full of local insight. Rita made Sintra feel special from start to finish."' },
          { initials: 'MM', name: 'Monica M.', text: '"Clear, friendly, and well-paced. Rita knew exactly where to go and how to make it easy."' },
          { initials: 'FG', name: 'Fernando G.', text: '"Local knowledge made the difference. We saw places we would never have found on our own."' },
          { initials: 'AT', name: 'Amanda T.', text: '"A relaxed private tour with great stories, smart pacing, and thoughtful local recommendations."' },
          { initials: 'LS', name: 'Laura S.', text: '"Professional, warm, and deeply knowledgeable. The whole day felt easy and well looked after."' },
          { initials: 'JW', name: 'James W.', text: '"Memorable from the first stop. Rita showed the best viewpoints and hidden spots with care."' }
        ]
      },
      founder: {
        kicker: 'About Rita',
        title: 'Meet the local guide behind your tour',
        trustAria: 'Rita trust points',
        name: 'Rita Almeida',
        role: 'Private Tour Guide',
        bio: 'Rita is a Sintra-born private guide who designs calm, personal tours for travelers who want more than a standard sightseeing route. She brings local context, flexible pacing, and carefully chosen stops so your day feels easy, personal, and well looked after.',
        imageAlt: 'Rita Almeida, Sintra tour guide based in Portugal',
        trust: ['Sintra-born local guide', 'Small private tours', 'English / Portuguese / Spanish']
      },
      faq: {
        kicker: 'FAQ',
        title: 'Common questions before you book',
        items: [
          { question: 'What do the Sintra tours include?', answer: 'Pickup in Lisbon, private guide (Rita Almeida), and transport. Max 4 guests. Palace tickets are not included.' },
          { question: 'How do I book?', answer: 'Message Rita on WhatsApp to check dates, payment options, and booking details. You can also book through Viator when available.' },
          { question: 'Can I cancel or reschedule?', answer: "Yes — with 24 hours' notice at no cost." },
          { question: 'Where does pickup happen?', answer: 'From your hotel or accommodation in Lisbon. Rita confirms details when you book.' },
          { question: 'Can the tour be customized?', answer: 'Yes. Rita adapts stops, pace, and route for your group, weather, and interests.' },
          { question: 'What languages can the tour be done in?', answer: 'Rita offers tours in English, Portuguese, and Spanish, so guests can relax and follow along easily.' }
        ]
      },
      finalCta: {
        title: 'Ready to plan your private Sintra tour?',
        text: 'Send your preferred date and Rita will help you choose the best route.',
        trust: '✓&nbsp;Private tours • Lisbon pickup • Free reschedule with 24h notice'
      },
      footer: {
        note: 'Private Sintra tours — local guide, your pace.',
        navAria: 'Site sections',
        socialAria: 'Social media',
        contactHeading: 'Contact',
        privacy: 'Privacy',
        terms: 'Terms',
        cookies: 'Cookies',
        languageAria: 'Language',
        socialLabels: { instagram: 'Instagram', whatsapp: 'WhatsApp', email: 'Email', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    es: {
      seo: {
        title: 'About Culture Things — Tours Privados en Sintra | Rita Almeida',
        description: 'Tours privados en Sintra con Rita Almeida — Palacio da Pena, playas secretas, costa de Cascais. 5.0★ TripAdvisor. Recogida en Lisboa, máx. 4 personas.',
        author: 'Rita Almeida — About Culture Things',
        ogTitle: 'About Culture Things — Tours Privados en Sintra | Rita Almeida',
        ogDescription: 'Tours privados en Sintra con Rita Almeida — Palacio da Pena, playas secretas, costa de Cascais. 5.0★ TripAdvisor. Recogida en Lisboa, máx. 4 personas.',
        twitterTitle: 'About Culture Things — Tours en Sintra',
        twitterDescription: 'Tours privados en Sintra con Rita Almeida. 5.0★ TripAdvisor. Palacio da Pena, playas secretas, Cascais. Máx. 4 personas.',
        imageAlt: 'Rita Almeida con huéspedes de un tour privado en la costa atlántica de Portugal'
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
        { label: 'Reseñas', href: '#reviews', key: 'reviews' },
        { label: 'Sobre Rita', href: '#differentiators', key: 'about', wide: true },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Consultar fechas',
        hero: 'Consultar fechas en WhatsApp',
        offer: 'Consultar fechas de este tour',
        final: 'Consultar fechas en WhatsApp',
        about: 'Escribir a Rita por WhatsApp',
        navAria: 'Reservar por WhatsApp',
        fabAria: 'Escribir a Rita por WhatsApp',
        fabTooltip: 'Escribir a Rita por WhatsApp'
      },
      hero: {
        kicker: 'Tours Privados en Sintra',
        title: 'Tours privados en Sintra con guía local',
        subtitle: 'Tours privados desde €275 por grupo, con recogida en Lisboa, ritmo flexible y Rita Almeida como guía local.',
        secondaryCta: 'Ver tours',
        trust: '5.0 ★ TripAdvisor',
        trustAria: 'Ver reseñas de clientes',
        highlights: 'Grupos privados hasta 4 · Recogida en Lisboa · Reagenda gratis',
        guide: 'Con Rita Almeida, guía nacida en Sintra',
        price: 'Desde €275 por grupo privado (hasta 4)',
        priceLink: 'Ver ambos tours ↓',
        imageAlt: 'Rita Almeida con huéspedes de un tour privado en la costa atlántica de Portugal'
      },
      benefits: {
        kicker: 'Por qué elegirnos',
        title: 'Un tour privado diseñado a tu ritmo',
        description: 'Evita el circuito de autobús compartido y descubre Sintra con una guía local, planificación simple y tiempo para disfrutar.',
        aria: 'Por qué elegir About Culture Things',
        items: [
          { title: 'Tu ritmo, no el horario de un grupo', text: 'Rutas privadas para hasta 4 personas, con tiempo para miradores, fotos y paradas tranquilas.', icon: 'plus' },
          { title: 'Mirada local más allá del checklist', text: 'Rita combina lugares famosos con historias, vistas costeras y rincones que muchos visitantes se pierden.', icon: 'pin' },
          { title: 'Fácil desde el primer mensaje', text: 'Consulta fechas por WhatsApp, confirma la ruta y empieza con recogida en Lisboa incluida.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Oferta',
        title: 'Elige tu experiencia privada en Sintra',
        description: 'Dos rutas listas para reservar, con precio claro, transporte privado y ritmo flexible.',
        trustAria: 'Garantías del tour',
        trust: ['Tours siempre privados', 'Recogida en Lisboa incluida', 'Reagenda gratis con 24 h de antelación'],
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
            image: 'assets/images/tour-full-sintra-coast.webp',
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
            image: 'assets/images/tour-hidden-beaches.webp',
            imageAlt: 'Sintra & Playas Escondidas'
          }
        ]
      },
      reviews: {
        kicker: 'Prueba social',
        title: 'Lo que dicen los huéspedes después del tour',
        trustAria: 'Resumen de valoración en TripAdvisor',
        averageLabel: 'valoración media',
        trustNote: '5.0 de 6 reseñas en TripAdvisor',
        carouselAria: 'Navegar reseñas de clientes',
        dotsAria: 'Paginación de reseñas',
        previousAria: 'Mostrar reseñas anteriores',
        nextAria: 'Mostrar reseñas siguientes',
        viewAll: 'Leer más reseñas en TripAdvisor',
        viewAllAria: 'Leer más reseñas en TripAdvisor (se abre en una pestaña nueva)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 valoración media',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Cálida, cercana y con mucho conocimiento local. Rita hizo que Sintra se sintiera especial."' },
          { initials: 'MM', name: 'Monica M.', text: '"Muy clara, amable y bien organizada. Rita supo exactamente a dónde ir y cómo hacerlo fácil."' },
          { initials: 'FG', name: 'Fernando G.', text: '"Su conocimiento local marcó la diferencia. Vimos lugares que nunca habríamos encontrado solos."' },
          { initials: 'AT', name: 'Amanda T.', text: '"Un tour privado relajado, con buenas historias, buen ritmo y recomendaciones locales útiles."' },
          { initials: 'LS', name: 'Laura S.', text: '"Profesional, cálida y muy preparada. Todo el día se sintió fácil y bien cuidado."' },
          { initials: 'JW', name: 'James W.', text: '"Inolvidable desde la primera parada. Rita mostró miradores y rincones escondidos con cuidado."' }
        ]
      },
      founder: {
        kicker: 'Sobre Rita',
        title: 'Conoce a la guía local detrás del tour',
        trustAria: 'Datos de confianza de Rita',
        name: 'Rita Almeida',
        role: 'Guía privada',
        bio: 'Rita es una guía privada nacida en Sintra que diseña tours tranquilos y personales para viajeros que quieren algo más que una ruta turística estándar. Aporta contexto local, ritmo flexible y paradas bien elegidas para que el día se sienta fácil, cercano y bien cuidado.',
        imageAlt: 'Rita Almeida, guía de tours en Sintra, Portugal',
        trust: ['Guía local nacida en Sintra', 'Tours privados pequeños', 'Inglés / portugués / español']
      },
      faq: {
        kicker: 'FAQ',
        title: 'Preguntas frecuentes antes de reservar',
        items: [
          { question: '¿Qué incluyen los tours de Sintra?', answer: 'Recogida en Lisboa, guía privada (Rita Almeida) y transporte. Máx. 4 personas. Entradas a palacios no incluidas.' },
          { question: '¿Cómo reservo?', answer: 'Escríbele a Rita por WhatsApp para consultar fechas, opciones de pago y detalles de reserva. También puedes reservar en Viator cuando esté disponible.' },
          { question: '¿Puedo cancelar o reagendar?', answer: 'Sí — con 24 horas de antelación sin coste.' },
          { question: '¿Dónde es la recogida?', answer: 'En tu hotel o alojamiento en Lisboa. Rita confirma los detalles al reservar.' },
          { question: '¿Se puede personalizar el tour?', answer: 'Sí. Rita adapta paradas, ritmo y ruta a tu grupo, el clima y tus intereses.' },
          { question: '¿En qué idiomas se puede hacer el tour?', answer: 'Rita ofrece tours en inglés, portugués y español, para que puedas relajarte y seguirlo con facilidad.' }
        ]
      },
      finalCta: {
        title: '¿Listo para planificar tu tour privado en Sintra?',
        text: 'Envía tu fecha preferida y Rita te ayudará a elegir la mejor ruta.',
        trust: '✓&nbsp;Tours privados • Recogida en Lisboa • Reagenda gratis con 24 h de antelación'
      },
      footer: {
        note: 'Tours privados en Sintra — guía local, tu ritmo.',
        navAria: 'Secciones del sitio',
        socialAria: 'Redes sociales',
        contactHeading: 'Contacto',
        privacy: 'Privacidad',
        terms: 'Términos',
        cookies: 'Cookies',
        languageAria: 'Idioma',
        socialLabels: { instagram: 'Instagram', whatsapp: 'WhatsApp', email: 'Email', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    pt: {
      seo: {
        title: 'About Culture Things — Tours Privados em Sintra | Rita Almeida',
        description: 'Tours privados em Sintra com a Rita Almeida — Palácio da Pena, praias escondidas, costa de Cascais. 5.0★ TripAdvisor. Recolha em Lisboa, máx. 4 pessoas.',
        author: 'Rita Almeida — About Culture Things',
        ogTitle: 'About Culture Things — Tours Privados em Sintra | Rita Almeida',
        ogDescription: 'Tours privados em Sintra com a Rita Almeida — Palácio da Pena, praias escondidas, costa de Cascais. 5.0★ TripAdvisor. Recolha em Lisboa, máx. 4 pessoas.',
        twitterTitle: 'About Culture Things — Tours em Sintra',
        twitterDescription: 'Tours privados em Sintra com a Rita Almeida. 5.0★ TripAdvisor. Palácio da Pena, praias escondidas, Cascais. Máx. 4 pessoas.',
        imageAlt: 'Rita Almeida com hóspedes de um tour privado na costa atlântica de Portugal'
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
        { label: 'Avaliações', href: '#reviews', key: 'reviews' },
        { label: 'Sobre a Rita', href: '#differentiators', key: 'about', wide: true },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'Ver datas',
        hero: 'Verificar datas no WhatsApp',
        offer: 'Ver datas para este tour',
        final: 'Ver datas no WhatsApp',
        about: 'Enviar mensagem à Rita no WhatsApp',
        navAria: 'Reservar no WhatsApp',
        fabAria: 'Mensagem à Rita no WhatsApp',
        fabTooltip: 'Mensagem à Rita no WhatsApp'
      },
      hero: {
        kicker: 'Tours Privados em Sintra',
        title: 'Tours privados em Sintra com guia local',
        subtitle: 'Tours privados desde €275 por grupo, com recolha em Lisboa, ritmo flexível e a Rita Almeida como guia local.',
        secondaryCta: 'Ver tours',
        trust: '5.0 ★ TripAdvisor',
        trustAria: 'Ver avaliações de clientes',
        highlights: 'Grupos privados até 4 · Recolha em Lisboa · Reagendamento grátis',
        guide: 'Com a Rita Almeida, guia nascida em Sintra',
        price: 'Desde €275 por grupo privado (até 4)',
        priceLink: 'Ver ambos os tours ↓',
        imageAlt: 'Rita Almeida com hóspedes de um tour privado na costa atlântica de Portugal'
      },
      benefits: {
        kicker: 'Porquê escolher-nos',
        title: 'Um tour privado pensado ao teu ritmo',
        description: 'Evita o circuito de autocarro partilhado e descobre Sintra com uma guia local, planeamento simples e tempo para aproveitar.',
        aria: 'Porquê escolher About Culture Things',
        items: [
          { title: 'O teu ritmo, não o horário de um grupo', text: 'Rotas privadas para até 4 pessoas, com tempo para miradouros, fotografias e paragens calmas.', icon: 'plus' },
          { title: 'Olhar local além da lista turística', text: 'A Rita combina lugares famosos com histórias, vistas costeiras e recantos que muitos visitantes não encontram.', icon: 'pin' },
          { title: 'Fácil desde a primeira mensagem', text: 'Verifica datas no WhatsApp, confirma a rota e começa com recolha em Lisboa incluída.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Oferta',
        title: 'Escolhe a tua experiência privada em Sintra',
        description: 'Duas rotas prontas a reservar, com preço claro, transporte privado e ritmo flexível.',
        trustAria: 'Garantias do tour',
        trust: ['Tours sempre privados', 'Recolha em Lisboa incluída', 'Reagenda grátis com 24 h de antecedência'],
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
            image: 'assets/images/tour-full-sintra-coast.webp',
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
            image: 'assets/images/tour-hidden-beaches.webp',
            imageAlt: 'Sintra & Praias Escondidas'
          }
        ]
      },
      reviews: {
        kicker: 'Prova social',
        title: 'O que dizem os hóspedes depois do tour',
        trustAria: 'Resumo da classificação no TripAdvisor',
        averageLabel: 'classificação média',
        trustNote: '5.0 de 6 avaliações no TripAdvisor',
        carouselAria: 'Navegar nas avaliações de clientes',
        dotsAria: 'Paginação das avaliações',
        previousAria: 'Mostrar avaliações anteriores',
        nextAria: 'Mostrar avaliações seguintes',
        viewAll: 'Ler mais avaliações no TripAdvisor',
        viewAllAria: 'Ler mais avaliações no TripAdvisor (abre num novo separador)',
        source: 'TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 classificação média',
        items: [
          { initials: 'RB', name: 'Roman B.', text: '"Quente, próxima e cheia de conhecimento local. A Rita tornou Sintra especial do início ao fim."' },
          { initials: 'MM', name: 'Monica M.', text: '"Muito clara, simpática e bem organizada. A Rita soube exatamente para onde ir e como facilitar."' },
          { initials: 'FG', name: 'Fernando G.', text: '"O conhecimento local fez toda a diferença. Vimos lugares que nunca encontraríamos sozinhos."' },
          { initials: 'AT', name: 'Amanda T.', text: '"Um tour privado descontraído, com boas histórias, bom ritmo e sugestões locais úteis."' },
          { initials: 'LS', name: 'Laura S.', text: '"Profissional, calorosa e muito preparada. O dia todo foi fácil e bem cuidado."' },
          { initials: 'JW', name: 'James W.', text: '"Inesquecível desde a primeira paragem. A Rita mostrou miradouros e recantos escondidos com cuidado."' }
        ]
      },
      founder: {
        kicker: 'Sobre a Rita',
        title: 'Conhece a guia local por trás do tour',
        trustAria: 'Pontos de confiança da Rita',
        name: 'Rita Almeida',
        role: 'Guia privada',
        bio: 'A Rita é uma guia privada nascida em Sintra que desenha tours calmos e pessoais para viajantes que querem mais do que uma rota turística padrão. Traz contexto local, ritmo flexível e paragens bem escolhidas para que o dia seja fácil, próximo e bem cuidado.',
        imageAlt: 'Rita Almeida, guia de tours em Sintra, Portugal',
        trust: ['Guia local nascida em Sintra', 'Tours privados pequenos', 'Inglês / português / espanhol']
      },
      faq: {
        kicker: 'FAQ',
        title: 'Perguntas frequentes antes de reservar',
        items: [
          { question: 'O que incluem os tours de Sintra?', answer: 'Recolha em Lisboa, guia privada (Rita Almeida) e transporte. Máx. 4 pessoas. Bilhetes de palácios não incluídos.' },
          { question: 'Como reservo?', answer: 'Envia mensagem à Rita no WhatsApp para verificar datas, opções de pagamento e detalhes de reserva. Também podes reservar na Viator quando disponível.' },
          { question: 'Posso cancelar ou reagendar?', answer: 'Sim — com 24 horas de antecedência sem custo.' },
          { question: 'Onde é a recolha?', answer: 'No teu hotel ou alojamento em Lisboa. A Rita confirma os detalhes quando reservas.' },
          { question: 'O tour pode ser personalizado?', answer: 'Sim. A Rita adapta paragens, ritmo e rota ao teu grupo, ao tempo e aos teus interesses.' },
          { question: 'Em que idiomas o tour pode ser feito?', answer: 'A Rita oferece tours em inglês, português e espanhol, para que os hóspedes possam relaxar e acompanhar facilmente.' }
        ]
      },
      finalCta: {
        title: 'Pronto para planear o teu tour privado em Sintra?',
        text: 'Envia a tua data preferida e a Rita ajuda-te a escolher a melhor rota.',
        trust: '✓&nbsp;Tours privados • Recolha em Lisboa • Reagenda grátis com 24 h de antecedência'
      },
      footer: {
        note: 'Tours privados em Sintra — guia local, ao teu ritmo.',
        navAria: 'Secções do site',
        socialAria: 'Redes sociais',
        contactHeading: 'Contacto',
        privacy: 'Privacidade',
        terms: 'Termos',
        cookies: 'Cookies',
        languageAria: 'Idioma',
        socialLabels: { instagram: 'Instagram', whatsapp: 'WhatsApp', email: 'Email', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
