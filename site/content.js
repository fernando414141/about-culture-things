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
    tripadvisor: 'https://www.tripadvisor.com.br/Attraction_Review-g189158-d28016472-Reviews-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html',
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
    default: "Hi! I'd like to check availability for a private Sintra tour.",
    book: "Hi! I'd like to check availability for a private Sintra tour.",
    tour1: "Hi! I'd like to book the Sintra Complete Experience (full day).",
    tour2: "Hi! I'd like to book the Sintra & Hidden Beaches tour.",
    final: "Hi! I'd like to check availability for a private Sintra tour.",
    faq: 'Hi! I have a question about your tours.'
  },
  schema: {
    types: ['LocalBusiness', 'TouristAttraction', 'TravelAgency'],
    priceRange: '€199–€299',
    areaServed: ['Sintra', 'Lisbon', 'Cascais'],
    knowsAbout: ['Sintra tours', 'Pena Palace', 'private tours Portugal', 'Atlantic coast tours', 'hidden beaches Portugal'],
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
        title: 'About Culture Things — Private Sintra Tours',
        description: 'Private Sintra day tours from Lisbon. Local guides, flexible pacing, Lisbon pickup, max 4 guests. 5.0★ TripAdvisor. From €199.',
        author: 'About Culture Things',
        ogTitle: 'About Culture Things — Private Sintra Tours',
        ogDescription: 'Private Sintra day tours from Lisbon with local guides. Pena Palace, Atlantic coast, hidden beaches. Max 4 guests, Lisbon pickup.',
        twitterTitle: 'About Culture Things — Sintra Tours',
        twitterDescription: 'Private Sintra tours from Lisbon. 5.0★ TripAdvisor. Pena Palace, coast & hidden beaches. From €199.',
        imageAlt: 'Travelers on a private Sintra tour along Portugal\'s Atlantic coast'
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
        { label: 'Gallery', href: '#gallery', key: 'gallery' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'WhatsApp',
        hero: 'Check availability',
        offer: 'Book this tour',
        tour1: 'Book full-day tour',
        tour2: 'Book coastal tour',
        final: 'Message on WhatsApp',
        navAria: 'Contact us on WhatsApp',
        fabAria: 'Check tour availability on WhatsApp',
        fabTooltip: 'Check availability'
      },
      hero: {
        kicker: 'Sintra & Lisbon',
        title: 'Your Private Day in Sintra',
        subtitle: 'Local guides, your pace, Lisbon pickup. Pena Palace, the coast, and spots most tourists miss — up to 4 guests.',
        secondaryCta: 'See tours',
        trust: '5.0 on TripAdvisor',
        trustAria: 'Read traveler reviews on TripAdvisor',
        highlights: 'Up to 4 guests · Lisbon pickup included',
        guide: 'Sintra-born guides · English, Portuguese & Spanish',
        price: 'From €199 per private group (up to 4)',
        priceLink: 'See both tours ↓',
        imageAlt: 'Travelers on a private Sintra tour along the Atlantic coast'
      },
      benefits: {
        kicker: 'Why us',
        title: 'Why book a private tour?',
        description: '',
        aria: 'Why book About Culture Things',
        items: [
          { title: 'Your group only', text: 'Set the pace — no buses, no crowds, no strangers.', icon: 'plus' },
          { title: 'Sintra-born guides', text: 'Local experts who know the palaces and the quiet corners.', icon: 'pin' },
          { title: 'Book in one message', text: 'WhatsApp to check dates, confirm details, and go.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Tours',
        title: 'Pick your Sintra day',
        description: '',
        trustAria: 'What every tour includes',
        trust: ['Up to 4 guests', 'Lisbon pickup included', 'Flexible pacing'],
        perGroup: 'per private group',
        ticketNote: 'Palace tickets extra (~€20/person)',
        detailsLabel: 'Itinerary & details',
        included: ['Private guide', 'Lisbon pickup', 'Transport'],
        excluded: ['Meals'],
        items: [
          {
            id: 'tour1',
            badge: 'Full day · First visit',
            name: 'Sintra Complete & Atlantic Coast',
            tag: '7 hours · Max 4 guests',
            stops: 'Historic Sintra · Pena · Cabo da Roca',
            fit: 'First visit? Sintra, Europe\'s western edge, and Cascais in one relaxed private day.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Sintra Complete & Atlantic Coast private tour',
            featured: true
          },
          {
            id: 'tour2',
            badge: 'Half day · Coast & beaches',
            name: 'Sintra & Hidden Beaches',
            tag: '5 hours · Max 4 guests',
            stops: 'Sintra hills · Hidden coves · Azenhas do Mar',
            fit: 'A shorter coastal route with quiet viewpoints — ideal for families or a slower pace.',
            price: '€199',
            priceValue: '199',
            currency: 'EUR',
            places: 'Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Sintra & Hidden Beaches private tour'
          }
        ]
      },
      gallery: {
        kicker: 'Gallery',
        title: 'Your Sintra day, in pictures'
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
          { question: 'What\'s included?', answer: 'Lisbon pickup, private guide, and transport for up to 4 guests. Palace entry tickets are not included (~€20/person).' },
          { question: 'How do I book?', answer: 'Message us on WhatsApp with your dates. We\'ll confirm availability, payment, and pickup details. Viator booking also available.' },
          { question: 'What\'s the cancellation policy?', answer: 'Free cancellation with 24 hours\' notice.' },
          { question: 'Where is pickup?', answer: 'From your hotel or accommodation in Lisbon. We confirm the exact time when you book.' },
          { question: 'Can we customize the route?', answer: 'Yes. Stops, pace, and timing adapt to your group, weather, and interests.' }
        ]
      },
      finalCta: {
        title: 'Ready to explore Sintra your way?',
        text: 'Send your dates on WhatsApp. We\'ll help you pick the right tour.',
        trust: 'Free cancellation · 24h notice · 5.0 TripAdvisor'
      },
      footer: {
        contactAria: 'Contact',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    es: {
      seo: {
        title: 'About Culture Things — Tours Privados en Sintra',
        description: 'Tours privados en Sintra desde Lisboa. Guías locales, ritmo flexible, recogida incluida, máx. 4 personas. 5.0★ TripAdvisor. Desde €199.',
        author: 'About Culture Things',
        ogTitle: 'About Culture Things — Tours Privados en Sintra',
        ogDescription: 'Tours privados en Sintra desde Lisboa. Palacio da Pena, costa atlántica y playas escondidas. Máx. 4 personas, recogida en Lisboa.',
        twitterTitle: 'About Culture Things — Tours en Sintra',
        twitterDescription: 'Tours privados en Sintra desde Lisboa. 5.0★ TripAdvisor. Pena, costa y playas escondidas. Desde €199.',
        imageAlt: 'Viajeros en un tour privado por la costa atlántica de Portugal'
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
        { label: 'Galería', href: '#gallery', key: 'gallery' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'WhatsApp',
        hero: 'Consultar disponibilidad',
        offer: 'Reservar este tour',
        tour1: 'Reservar día completo',
        tour2: 'Reservar ruta costera',
        final: 'Escribir por WhatsApp',
        navAria: 'Contactar por WhatsApp',
        fabAria: 'Consultar disponibilidad por WhatsApp',
        fabTooltip: 'Consultar disponibilidad'
      },
      hero: {
        kicker: 'Sintra y Lisboa',
        title: 'Tu día privado en Sintra',
        subtitle: 'Guías locales, tu ritmo y recogida en Lisboa. Palacio da Pena, la costa y rincones que pocos turistas ven — máx. 4 personas.',
        secondaryCta: 'Ver tours',
        trust: '5.0 en TripAdvisor',
        trustAria: 'Leer reseñas en TripAdvisor',
        highlights: 'Hasta 4 personas · Recogida en Lisboa incluida',
        guide: 'Guías de Sintra · Inglés, portugués y español',
        price: 'Desde €199 por grupo privado (hasta 4)',
        priceLink: 'Ver ambos tours ↓',
        imageAlt: 'Viajeros en un tour privado por la costa atlántica'
      },
      benefits: {
        kicker: 'Por qué nosotros',
        title: '¿Por qué un tour privado?',
        description: '',
        aria: 'Por qué reservar con About Culture Things',
        items: [
          { title: 'Solo tu grupo', text: 'Marca el ritmo — sin autobuses, sin aglomeraciones.', icon: 'plus' },
          { title: 'Guías de Sintra', text: 'Expertos locales que conocen los palacios y los rincones tranquilos.', icon: 'pin' },
          { title: 'Reserva en un mensaje', text: 'WhatsApp para consultar fechas, confirmar y listo.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Tours',
        title: 'Elige tu día en Sintra',
        description: '',
        trustAria: 'Qué incluye cada tour',
        trust: ['Hasta 4 personas', 'Recogida en Lisboa incluida', 'Ritmo flexible'],
        perGroup: 'por grupo privado',
        ticketNote: 'Entradas a palacios aparte (~€20/persona)',
        detailsLabel: 'Itinerario y detalles',
        included: ['Guía privada', 'Recogida en Lisboa', 'Transporte'],
        excluded: ['Comidas'],
        items: [
          {
            id: 'tour1',
            badge: 'Día completo · Primera visita',
            name: 'Sintra Completa & Costa Atlántica',
            tag: '7 horas · Máx. 4 personas',
            stops: 'Sintra histórica · Pena · Cabo da Roca',
            fit: '¿Primera visita? Sintra, el extremo occidental de Europa y Cascais en un día privado y relajado.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Tour privado Sintra Completa & Costa Atlántica',
            featured: true
          },
          {
            id: 'tour2',
            badge: 'Medio día · Costa y playas',
            name: 'Sintra & Playas Escondidas',
            tag: '5 horas · Máx. 4 personas',
            stops: 'Colinas de Sintra · Calas ocultas · Azenhas do Mar',
            fit: 'Ruta costera más tranquila con miradores — ideal para familias o un ritmo más pausado.',
            price: '€199',
            priceValue: '199',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Tour privado Sintra & Playas Escondidas'
          }
        ]
      },
      gallery: {
        kicker: 'Galería',
        title: 'Tu día en Sintra, en imágenes'
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
          { question: '¿Qué incluye?', answer: 'Recogida en Lisboa, guía privada y transporte para hasta 4 personas. Entradas a palacios no incluidas (~€20/persona).' },
          { question: '¿Cómo reservo?', answer: 'Escríbenos por WhatsApp con tus fechas. Confirmamos disponibilidad, pago y recogida. También disponible en Viator.' },
          { question: '¿Cuál es la política de cancelación?', answer: 'Cancelación gratuita con 24 horas de antelación.' },
          { question: '¿Dónde es la recogida?', answer: 'En tu hotel o alojamiento en Lisboa. Confirmamos la hora exacta al reservar.' },
          { question: '¿Podemos personalizar la ruta?', answer: 'Sí. Paradas, ritmo y horarios se adaptan a tu grupo, el clima y tus intereses.' }
        ]
      },
      finalCta: {
        title: '¿Listo para explorar Sintra a tu manera?',
        text: 'Envía tus fechas por WhatsApp. Te ayudamos a elegir el tour ideal.',
        trust: 'Cancelación gratuita · 24h de antelación · 5.0 TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    pt: {
      seo: {
        title: 'About Culture Things — Tours Privados em Sintra',
        description: 'Tours privados em Sintra desde Lisboa. Guias locais, ritmo flexível, recolha incluída, máx. 4 pessoas. 5.0★ TripAdvisor. Desde €199.',
        author: 'About Culture Things',
        ogTitle: 'About Culture Things — Tours Privados em Sintra',
        ogDescription: 'Tours privados em Sintra desde Lisboa. Palácio da Pena, costa atlântica e praias escondidas. Máx. 4 pessoas, recolha em Lisboa.',
        twitterTitle: 'About Culture Things — Tours em Sintra',
        twitterDescription: 'Tours privados em Sintra desde Lisboa. 5.0★ TripAdvisor. Pena, costa e praias escondidas. Desde €199.',
        imageAlt: 'Viajantes num tour privado na costa atlântica de Portugal'
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
        { label: 'Galeria', href: '#gallery', key: 'gallery' },
        { label: 'FAQ', href: '#faq', key: 'faq' }
      ],
      ctas: {
        nav: 'WhatsApp',
        hero: 'Verificar disponibilidade',
        offer: 'Reservar este tour',
        tour1: 'Reservar dia inteiro',
        tour2: 'Reservar rota costeira',
        final: 'Enviar mensagem no WhatsApp',
        navAria: 'Contactar por WhatsApp',
        fabAria: 'Verificar disponibilidade no WhatsApp',
        fabTooltip: 'Verificar disponibilidade'
      },
      hero: {
        kicker: 'Sintra e Lisboa',
        title: 'O teu dia privado em Sintra',
        subtitle: 'Guias locais, o teu ritmo e recolha em Lisboa. Palácio da Pena, a costa e sítios que a maioria dos turistas não vê — máx. 4 pessoas.',
        secondaryCta: 'Ver tours',
        trust: '5.0 no TripAdvisor',
        trustAria: 'Ler avaliações no TripAdvisor',
        highlights: 'Até 4 pessoas · Recolha em Lisboa incluída',
        guide: 'Guias de Sintra · Inglês, português e espanhol',
        price: 'Desde €199 por grupo privado (até 4)',
        priceLink: 'Ver ambos os tours ↓',
        imageAlt: 'Viajantes num tour privado na costa atlântica'
      },
      benefits: {
        kicker: 'Porquê nós',
        title: 'Porquê um tour privado?',
        description: '',
        aria: 'Porquê reservar com About Culture Things',
        items: [
          { title: 'Só o teu grupo', text: 'Define o ritmo — sem autocarros nem multidões.', icon: 'plus' },
          { title: 'Guias de Sintra', text: 'Especialistas locais que conhecem os palácios e os recantos tranquilos.', icon: 'pin' },
          { title: 'Reserva numa mensagem', text: 'WhatsApp para verificar datas, confirmar e pronto.', icon: 'bag' }
        ]
      },
      offers: {
        kicker: 'Tours',
        title: 'Escolhe o teu dia em Sintra',
        description: '',
        trustAria: 'O que cada tour inclui',
        trust: ['Até 4 pessoas', 'Recolha em Lisboa incluída', 'Ritmo flexível'],
        perGroup: 'por grupo privado',
        ticketNote: 'Bilhetes para palácios à parte (~€20/pessoa)',
        detailsLabel: 'Itinerário e detalhes',
        included: ['Guia privada', 'Recolha em Lisboa', 'Transporte'],
        excluded: ['Refeições'],
        items: [
          {
            id: 'tour1',
            badge: 'Dia inteiro · Primeira visita',
            name: 'Sintra Completa & Costa Atlântica',
            tag: '7 horas · Máx. 4 pessoas',
            stops: 'Sintra histórica · Pena · Cabo da Roca',
            fit: 'Primeira visita? Sintra, o ponto mais ocidental da Europa e Cascais num dia privado e descontraído.',
            price: '€299',
            priceValue: '299',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Tour privado Sintra Completa & Costa Atlântica',
            featured: true
          },
          {
            id: 'tour2',
            badge: 'Meio dia · Costa e praias',
            name: 'Sintra & Praias Escondidas',
            tag: '5 horas · Máx. 4 pessoas',
            stops: 'Colinas de Sintra · Enseadas escondidas · Azenhas do Mar',
            fit: 'Rota costeira mais tranquila com miradouros — ideal para famílias ou um ritmo mais calmo.',
            price: '€199',
            priceValue: '199',
            currency: 'EUR',
            places: 'Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda',
            image: 'site/images/tour-hidden-beaches-640.webp',
            imageAlt: 'Tour privado Sintra & Praias Escondidas'
          }
        ]
      },
      gallery: {
        kicker: 'Galeria',
        title: 'O teu dia em Sintra, em imagens'
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
          { question: 'O que está incluído?', answer: 'Recolha em Lisboa, guia privada e transporte para até 4 pessoas. Bilhetes de palácios não incluídos (~€20/pessoa).' },
          { question: 'Como reservo?', answer: 'Envia-nos mensagem no WhatsApp com as tuas datas. Confirmamos disponibilidade, pagamento e recolha. Também disponível na Viator.' },
          { question: 'Qual é a política de cancelamento?', answer: 'Cancelamento gratuito com 24 horas de antecedência.' },
          { question: 'Onde é a recolha?', answer: 'No teu hotel ou alojamento em Lisboa. Confirmamos a hora exata quando reservas.' },
          { question: 'Podemos personalizar a rota?', answer: 'Sim. Paragens, ritmo e horários adaptam-se ao teu grupo, ao tempo e aos teus interesses.' }
        ]
      },
      finalCta: {
        title: 'Pronto para explorar Sintra à tua maneira?',
        text: 'Envia as tuas datas no WhatsApp. Ajudamos-te a escolher o tour certo.',
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
