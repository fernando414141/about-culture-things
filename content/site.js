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
      src: 'assets/images/rita-640.webp',
      width: 640,
      height: 800
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
        title: 'About Culture Things — Private Sintra Tours',
        description: 'Private Sintra tours from Lisbon with local experts, iconic landmarks, hidden viewpoints, flexible pacing, and Lisbon pickup. 5.0★ TripAdvisor.',
        author: 'Rita Almeida — About Culture Things',
        ogTitle: 'About Culture Things — Private Sintra Tours',
        ogDescription: 'Private Sintra tours from Lisbon with local experts, iconic landmarks, hidden viewpoints, flexible pacing, and Lisbon pickup.',
        twitterTitle: 'About Culture Things — Sintra Tours',
        twitterDescription: 'Private Sintra tours from Lisbon with local experts. 5.0★ TripAdvisor. Pena Palace, hidden beaches, Cascais.',
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
        { label: 'Why Choose Us', href: '#benefits', key: 'why', wide: true },
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
        trust: '★★★★★ 5.0 Rating',
        trustAria: 'View customer reviews',
        highlights: 'Private Groups Up To 4 Guests · Lisbon Pickup Included',
        guide: 'Sintra-born local expertise with English, Portuguese, and Spanish support',
        price: 'From €275 per private group (up to 4)',
        priceLink: 'See both tours ↓',
        imageAlt: "Rita Almeida with private tour guests on Portugal's Atlantic coast"
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
          { src: 'https://images.unsplash.com/photo-1620832024623-9d0179fb0b8d?auto=format&fit=crop&w=1400&q=82', alt: 'Pena Palace exterior with dramatic evening light' },
          { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=82', alt: 'Cabo da Roca cliffs overlooking the Atlantic Ocean' },
          { src: 'https://images.unsplash.com/photo-1603570419989-4e917a47f232?auto=format&fit=crop&w=1400&q=82', alt: 'Azenhas do Mar coastal village above the Atlantic' },
          { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82', alt: 'Private travelers enjoying a scenic viewpoint' },
          { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=82', alt: 'Hidden beach on the Sintra coastline' },
          { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=82', alt: 'Premium private vehicle experience in Portugal' }
        ]
      },
      reviews: {
        kicker: 'Social proof',
        title: 'What Guests Say About Their Experience',
        trustAria: 'TripAdvisor rating summary',
        averageLabel: 'average rating',
        trustNote: '5.0 from 6 TripAdvisor reviews',
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
        { label: 'Por qué elegirnos', href: '#benefits', key: 'why', wide: true },
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
        trust: '★★★★★ Valoración 5.0',
        trustAria: 'Ver reseñas de clientes',
        highlights: 'Grupos privados hasta 4 personas · Recogida en Lisboa incluida',
        guide: 'Con Rita Almeida, guía nacida en Sintra',
        price: 'Desde €275 por grupo privado (hasta 4)',
        priceLink: 'Ver ambos tours ↓',
        imageAlt: 'Rita Almeida con huéspedes de un tour privado en la costa atlántica de Portugal'
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
          { src: 'https://images.unsplash.com/photo-1620832024623-9d0179fb0b8d?auto=format&fit=crop&w=1400&q=82', alt: 'Palacio da Pena exterior con luz dramática' },
          { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=82', alt: 'Acantilados de Cabo da Roca frente al océano Atlántico' },
          { src: 'https://images.unsplash.com/photo-1603570419989-4e917a47f232?auto=format&fit=crop&w=1400&q=82', alt: 'Azenhas do Mar sobre la costa atlántica' },
          { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82', alt: 'Viajeros privados disfrutando de un mirador escénico' },
          { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=82', alt: 'Playa escondida en la costa de Sintra' },
          { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=82', alt: 'Experiencia premium con vehículo privado en Portugal' }
        ]
      },
      reviews: {
        kicker: 'Prueba social',
        title: 'Lo Que Dicen Los Huéspedes Sobre Su Experiencia',
        trustAria: 'Resumen de valoración en TripAdvisor',
        averageLabel: 'valoración media',
        trustNote: '5.0 de 6 reseñas en TripAdvisor',
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
        { label: 'Porquê escolher-nos', href: '#benefits', key: 'why', wide: true },
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
        trust: '★★★★★ Classificação 5.0',
        trustAria: 'Ver avaliações de clientes',
        highlights: 'Grupos privados até 4 pessoas · Recolha em Lisboa incluída',
        guide: 'Com a Rita Almeida, guia nascida em Sintra',
        price: 'Desde €275 por grupo privado (até 4)',
        priceLink: 'Ver ambos os tours ↓',
        imageAlt: 'Rita Almeida com hóspedes de um tour privado na costa atlântica de Portugal'
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
          { src: 'https://images.unsplash.com/photo-1620832024623-9d0179fb0b8d?auto=format&fit=crop&w=1400&q=82', alt: 'Palácio da Pena exterior com luz dramática' },
          { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=82', alt: 'Falésias do Cabo da Roca sobre o oceano Atlântico' },
          { src: 'https://images.unsplash.com/photo-1603570419989-4e917a47f232?auto=format&fit=crop&w=1400&q=82', alt: 'Azenhas do Mar sobre a costa atlântica' },
          { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82', alt: 'Viajantes privados num miradouro panorâmico' },
          { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=82', alt: 'Praia escondida na costa de Sintra' },
          { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=82', alt: 'Experiência premium com veículo privado em Portugal' }
        ]
      },
      reviews: {
        kicker: 'Prova social',
        title: 'O Que Os Hóspedes Dizem Sobre A Experiência',
        trustAria: 'Resumo da classificação no TripAdvisor',
        averageLabel: 'classificação média',
        trustNote: '5.0 de 6 avaliações no TripAdvisor',
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
