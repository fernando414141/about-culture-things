/**
 * Project content — About Culture Things.
 * Elevated luxury boutique travel positioning across EN, ES, and PT.
 */
const SITE_CONTENT = {
  business: {
    name: 'About Culture Things',
    shortName: 'Culture Things',
    industry: 'Boutique small-group tours',
    url: 'https://aboutculturethings.com',
    themeColor: '#13342E',
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
      default: "Hello About Culture Things! I'd like to check dates and availability for your boutique group experience.",
      book: "Hello About Culture Things! I'd like to check dates and availability for your boutique group experience.",
      'sintra-coast': "Hello! I'm interested in reserving seats for the Sintra, Pena, Cabo da Roca & Cascais experience. Could you share current availability?",
      'fatima-nazare-obidos': "Hello! I'm interested in reserving seats for the Fátima, Batalha, Nazaré & Óbidos experience. Could you share current availability?",
      'arrabida-wine': "Hello! I'm interested in reserving seats for the Arrábida, Azeitão & Two Wineries experience. Could you share current availability?",
      'sintra-walk': "Hello! I'm interested in the Sintra Stories walking experience. Could you share current availability?",
      'lisbon-walk': "Hello! I'm interested in the Lisbon Essentials walking experience. Could you share current availability?",
      final: "Hello About Culture Things! I'd like assistance selecting the ideal itinerary for my trip.",
      faq: 'Hello! I have a question regarding your boutique experiences.'
    },
    es: {
      default: '¡Hola, About Culture Things! Quisiera consultar fechas y disponibilidad para sus experiencias de grupo reducido.',
      book: '¡Hola, About Culture Things! Quisiera consultar fechas y disponibilidad para sus experiencias de grupo reducido.',
      'sintra-coast': '¡Hola! Me interesa reservar plazas para la experiencia Sintra, Pena, Cabo da Roca y Cascais. ¿Podrían indicarme la disponibilidad?',
      'fatima-nazare-obidos': '¡Hola! Me interesa reservar plazas para la experiencia Fátima, Batalha, Nazaré y Óbidos. ¿Podrían indicarme la disponibilidad?',
      'arrabida-wine': '¡Hola! Me interesa reservar plazas para la experiencia Arrábida, Azeitão y Dos Bodegas. ¿Podrían indicarme la disponibilidad?',
      'sintra-walk': '¡Hola! Me interesa la experiencia guiada Historias de Sintra. ¿Podrían indicarme la disponibilidad?',
      'lisbon-walk': '¡Hola! Me interesa la experiencia guiada Lisboa Esencial. ¿Podrían indicarme la disponibilidad?',
      final: '¡Hola, About Culture Things! Quisiera ayuda para elegir el itinerario ideal para mi viaje.',
      faq: '¡Hola! Tengo una consulta sobre sus experiencias exclusivas.'
    },
    pt: {
      default: 'Olá, About Culture Things! Gostaria de consultar datas e disponibilidade para as vossas experiências em grupo reduzido.',
      book: 'Olá, About Culture Things! Gostaria de consultar datas e disponibilidade para as vossas experiências em grupo reduzido.',
      'sintra-coast': 'Olá! Gostaria de reservar lugares para a experiência Sintra, Pena, Cabo da Roca e Cascais. Podem indicar a disponibilidade?',
      'fatima-nazare-obidos': 'Olá! Gostaria de reservar lugares para a experiência Fátima, Batalha, Nazaré e Óbidos. Podem indicar a disponibilidade?',
      'arrabida-wine': 'Olá! Gostaria de reservar lugares para a experiência Arrábida, Azeitão e Duas Adegas. Podem indicar a disponibilidade?',
      'sintra-walk': 'Olá! Tenho interesse no walking tour Histórias de Sintra. Podem indicar a disponibilidade?',
      'lisbon-walk': 'Olá! Tenho interesse no walking tour Lisboa Essencial. Podem indicar a disponibilidade?',
      final: 'Olá, About Culture Things! Gostaria de ajuda para escolher o itinerário ideal para a minha viagem.',
      faq: 'Olá! Tenho uma questão sobre as vossas experiências exclusivas.'
    }
  },
  schema: {
    types: ['TravelAgency'],
    priceRange: '€45–€179 per person',
    areaServed: ['Sintra', 'Lisbon', 'Cascais', 'Cabo da Roca', 'Óbidos', 'Nazaré', 'Fátima', 'Arrábida', 'Portugal'],
    knowsAbout: [
      'Boutique Sintra luxury tours',
      'Small-group Sintra day trip from Lisbon',
      'Pena Palace private-feel tours',
      'Cabo da Roca Atlantic tours',
      'Atlantic coast Portugal',
      'Sintra guided walking tours',
      'Quinta da Regaleira',
      'Mercedes-Benz Vito luxury tours Portugal',
      'Lisbon historic walking tours',
      'Fátima Nazaré Óbidos day journeys',
      'Arrábida exclusive wine tours'
    ],
    availableLanguage: ['English', 'Spanish', 'Portuguese'],
    twitter: '@aboutculturethings'
  },
  galleryItems: [
    { src: 'site/images/pena-640.webp', width: 640, height: 893, alt: { en: 'Pena Palace rising above the Sintra forest', es: 'Palacio da Pena sobre el bosque de Sintra', pt: 'Palácio da Pena sobre a floresta de Sintra' } },
    { src: 'site/images/Cabo%20da%20Roca-640.webp', width: 640, height: 958, alt: { en: 'Cabo da Roca cliffs overlooking the Atlantic Ocean', es: 'Acantilados de Cabo da Roca frente al océano Atlántico', pt: 'Falésias do Cabo da Roca sobre o oceano Atlântico' } },
    { src: 'site/images/Azenhas%20do%20Mar-640.webp', width: 640, height: 853, alt: { en: 'Azenhas do Mar coastal village above the Atlantic', es: 'Azenhas do Mar sobre la costa atlántica', pt: 'Azenhas do Mar sobre a costa atlântica' } },
    { src: 'site/images/cascais-640.webp', width: 640, height: 427, alt: { en: 'Cascais coastline on a luxury Sintra day journey', es: 'Costa de Cascais durante un tour de lujo por Sintra', pt: 'Costa de Cascais num tour de luxo por Sintra' } },
    { src: 'site/images/castelo-640.webp', width: 640, height: 958, alt: { en: 'Castelo dos Mouros stone walls in Sintra', es: 'Murallas del Castelo dos Mouros en Sintra', pt: 'Muralhas do Castelo dos Mouros em Sintra' } },
    { src: 'site/images/regaleira-640.webp', width: 640, height: 853, alt: { en: 'Quinta da Regaleira architecture surrounded by Sintra gardens', es: 'Arquitectura de Quinta da Regaleira entre jardines de Sintra', pt: 'Arquitetura da Quinta da Regaleira entre jardins de Sintra' } }
  ],
  reviewItems: [
    { name: '_P8031OX', text: 'We felt every story come alive. An effortless, high-end way to experience Sintra.', meta: 'TripAdvisor Verified Guest' },
    { name: 'Road14564539690', text: 'An exquisite experience from start to finish. Professional, elegant, and perfectly paced.', meta: 'TripAdvisor Verified Guest' },
    { name: 'Kristina P', text: 'We never felt rushed. The comfort of the Mercedes-Benz Vito and local insight made all the difference.', meta: 'TripAdvisor Verified Guest' }
  ],
  content: {
    en: {
      seo: {
        title: 'Boutique Small-Group Tours in Sintra & Lisbon | About Culture Things',
        description: 'Curated small-group journeys in a luxury Mercedes-Benz Vito and private walking immersions through Sintra, Lisbon & beyond.',
        keywords: 'Sintra luxury small group tour, Lisbon walking tour, Sintra private experience, Fátima Nazaré Óbidos tour, Arrábida wine tour',
        author: 'About Culture Things',
        ogTitle: 'Boutique Small-Group Tours in Sintra & Lisbon | About Culture Things',
        ogDescription: 'Exclusive small-group journeys in a luxury Mercedes-Benz Vito and historic walking immersions with elite local guides.',
        twitterTitle: 'Boutique Small-Group Tours in Sintra & Lisbon',
        twitterDescription: 'Curated small-group journeys in a luxury Mercedes-Benz Vito and private walking immersions.',
        imageAlt: 'Travellers on a luxury Sintra journey along Portugal\'s Atlantic coast'
      },
      ui: {
        skipLink: 'Skip to main content',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        backToTop: 'Back to top',
        scrollToExplore: 'Scroll to explore',
        includedAria: "What's included in your experience",
        languageSelector: 'Select language. Current language: {language}.'
      },
      nav: [
        { label: 'Experiences', href: '#tours', key: 'tours' },
        { label: 'Reviews', href: '#reviews', key: 'reviews' },
        { label: 'Our approach', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Request Availability',
        hero: 'Explore Experiences',
        offer: 'Request Availability',
        tour1: 'Request Availability',
        tour2: 'Request Availability',
        'fatima-obidos': 'Request Availability',
        final: 'Reserve Your Departure',
        navAria: 'Contact us on WhatsApp',
        fabAria: 'Request tour availability on WhatsApp',
        fabTooltip: 'Request availability'
      },
      hero: {
        kicker: 'Bespoke Small-Group Journeys',
        title: 'Portugal, Experienced in Refined Comfort.',
        subtitle: 'Curated small-group journeys in a luxury Mercedes-Benz Vito and private walking immersions, hosted by expert local guides.',
        secondaryCta: 'Explore Experiences',
        trust: '5.0 on TripAdvisor',
        trustAria: 'Read traveler reviews on TripAdvisor',
        highlights: 'Intimate Groups (Max 8) · Executive Mercedes-Benz Vito · Multilingual Local Experts',
        guide: 'English, Portuguese & Spanish available',
        price: '',
        priceLink: 'Explore all experiences ↓',
        imageAlt: 'Travellers on a luxury Sintra tour along the Atlantic coast'
      },
      benefits: {
        kicker: 'The About Culture Things Standard',
        title: 'The Luxury of Unrushed Discovery',
        description: 'An intimate group size ensures absolute personal comfort, tailored pacing, and genuine cultural engagement without the crowds of tour buses.',
        aria: 'Why choose About Culture Things',
        items: [
          { title: 'Executive Mercedes-Benz Vito', text: 'Travel in a 2023 luxury van featuring individual leather seating, dual climate control, and generous personal space.', icon: 'plus' },
          { title: 'Dedicated Local Host', text: 'An expert driver-guide ensures seamless travel, rich historical context, and unhurried exploration from start to finish.', icon: 'pin' },
          { title: 'Curated Local Access', text: 'Thoughtfully planned timing and insider route knowledge allow you to discover iconic monuments and quiet corners at an effortless pace.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'Our Philosophy',
        title: 'Planned Locally. Hosted with Care.',
        text: 'Every itinerary is crafted with insider knowledge and realistic timing. From our base in Sintra, we manage every logistical detail so your day feels smooth, authentic, and unhurried.',
        signature: 'Boutique Base in Sintra · Guiding Across Lisbon & Portugal',
        imageAlt: 'Guests overlooking the Atlantic coast near Sintra'
      },
      offers: {
        kicker: 'Curated Collection',
        title: 'Select Your Experience',
        description: 'Intimate itineraries tailored for discerning travellers who appreciate comfort, culture, and context.',
        vanKicker: 'Luxury Road Journeys',
        vanTitle: 'Small-Group Van Journeys',
        vanDescription: 'Travel in an executive Mercedes-Benz Vito (max 8 guests) with climate control and a dedicated host.',
        walkingKicker: 'Cultural Immersions',
        walkingTitle: 'Historic Walking Journeys',
        walkingDescription: 'Intimate walking journeys through historic Sintra & Lisbon, revealing centuries of hidden stories.',
        trustAria: 'Experience standards',
        trust: ['Intimate groups (Max 8)', 'Executive Mercedes-Benz Vito', 'Expert local host'],
        currencyNote: 'Transparent luxury pricing per guest in EUR. Departures guaranteed with small numbers.',
        currencyLabel: 'Approximate in',
        currencyLoading: 'Updating conversion…',
        currencyApprox: 'Approximate conversion. Payment is processed in EUR.',
        currencyUnavailable: 'Conversion unavailable. Payment is processed in EUR.',
        perGroup: 'per guest',
        directPrice: 'Experience Rate',
        detailsCta: 'Explore Experience',
        routeLabel: 'Itinerary',
        meetingLabel: 'Departure Point',
        includesLabel: 'Included',
        extrasLabel: 'Not included',
        items: [
          {
            id: 'sintra-coast', kind: 'van', badge: 'Signature Journey',
            name: 'Sintra, Pena, Cabo da Roca & Cascais',
            tag: '7.5 Hours · Max 8 Guests',
            stops: 'Sintra Station · Pena Palace · Historic Sintra · Cabo da Roca · Cascais',
            fit: 'The quintessential Sintra journey: royal palaces, ancient forests, Europe’s westernmost point, and the Atlantic coastline in one beautifully paced day.',
            meeting: 'Sintra Train Station',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, bottled water and insurance',
            extras: 'Palace tickets and lunch',
            price: '€119', priceValue: '119',
            currency: 'EUR',
            places: 'Sintra Train Station · Pena Palace · Sintra Historic Centre · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca cliffs on the luxury Sintra journey'
          },
          {
            id: 'fatima-nazare-obidos', kind: 'van', badge: 'Cultural Heritage',
            name: 'Fátima, Batalha, Nazaré & Óbidos',
            tag: '9 Hours · Max 8 Guests',
            stops: 'Fátima Sanctuary · Batalha Monastery · Nazaré Coast · Óbidos Castle',
            fit: 'Spiritual heritage, UNESCO Gothic architecture, Atlantic sea cliffs, and a medieval walled town—the premier cultural day north of Lisbon.',
            meeting: 'Restauradores Square, Lisbon',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, bottled water, ginjinha tasting and insurance',
            extras: 'Monument tickets and lunch',
            price: '€179', priceValue: '179',
            currency: 'EUR',
            places: 'Restauradores Square · Fátima Sanctuary · Batalha Monastery · Nazaré · Óbidos',
            image: 'site/images/tour-fatima-obidos-736.webp',
            imageAlt: 'Basilica of Our Lady of the Rosary in Fátima',
            imagePosition: 'center 38%'
          },
          {
            id: 'arrabida-wine', kind: 'van', badge: 'Exclusive Wine & Gastronomy',
            name: 'Arrábida, Azeitão & Two Estate Wineries',
            tag: '8 Hours · Max 8 Guests',
            stops: 'Palmela · Azeitão · Arrábida Natural Park · Sesimbra',
            fit: 'Two private estate winery visits with tutored tastings, dramatic mountain ocean vistas, and a relaxed seafood lunch on the coast.',
            meeting: 'Restauradores Square, Lisbon',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, two winery visits with tutored tastings and insurance',
            extras: 'Lunch',
            price: '€169', priceValue: '169',
            currency: 'EUR',
            places: 'Restauradores Square · Palmela · Azeitão · Arrábida Natural Park · Sesimbra',
            image: 'site/images/tour-arrabida-wine-960.webp',
            imageAlt: 'Guided group walking through a private vineyard in the Arrábida wine region'
          },
          {
            id: 'sintra-walk', kind: 'walking', badge: 'Local Insider Walk',
            name: 'Sintra Stories, Old Town & Forest',
            tag: '3 Hours · Intimate Group',
            stops: 'Sintra Station · Volta do Duche · Historic Center · Seteais Viewpoint',
            fit: 'An immersive walking journey through Sintra’s historic center, romantic alleys, and forested estates missed by casual visitors.',
            meeting: 'Sintra Train Station',
            includes: 'Expert local historian guide and traditional Sintra pastry tasting',
            extras: 'Monument entry tickets',
            price: '€45', priceValue: '45', currency: 'EUR',
            places: 'Sintra Train Station · Volta do Duche · Sintra Historic Centre · Seteais viewpoint',
            image: 'site/images/tour-sintra-walk-960.webp',
            imageAlt: 'Guided walking group on a scenic forest path in Sintra'
          },
          {
            id: 'lisbon-walk', kind: 'walking', badge: 'Essential Lisbon',
            name: 'Lisbon Essentials: Baixa, Chiado & Alfama',
            tag: '3 Hours · Intimate Group',
            stops: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            fit: 'An elegant, engaging introduction to Lisbon’s history, panoramic viewpoints, tiled facades, and historic quarters.',
            meeting: 'Rossio Square, Lisbon',
            includes: 'Expert local guide and artisanal pastel de nata',
            extras: 'Transport and additional refreshments',
            price: '€49', priceValue: '49', currency: 'EUR',
            places: 'Rossio Square · Baixa · Chiado · Alfama · Portas do Sol',
            image: 'site/images/tour-lisbon-walk-960.webp',
            imageAlt: 'Local guide with an intimate walking group in historic Alfama, Lisbon'
          }
        ]
      },
      gallery: {
        kicker: 'Portugal in Focus',
        title: 'Moments of Timeless Elegance'
      },
      reviews: {
        kicker: 'Guest Testimonials',
        title: 'What Our Guests Remember',
        trustAria: 'TripAdvisor rating',
        averageLabel: 'average rating',
        trustNote: '5.0 Rating on TripAdvisor',
        gridAria: 'Guest reviews',
        dotsAria: 'Review pagination',
        previousAria: 'Show previous reviews',
        nextAria: 'Show next reviews',
        viewAll: 'View All Reviews on TripAdvisor',
        viewAllAria: 'See all reviews on TripAdvisor',
        source: 'Verified TripAdvisor Review',
        ratingValue: '5.0',
        ratingLabel: '5.0 out of 5 rating',
        items: []
      },
      faq: {
        kicker: 'Essential Information',
        title: 'Frequently Asked Questions',
        items: [
          { question: 'What is included in each experience?', answer: 'All journeys include a dedicated expert local guide, comprehensive legal insurance, and bottled water. Van itineraries feature transport in an executive 2023 Mercedes-Benz Vito. Wine tours include private estate visits and tutored tastings. Entry tickets and meals are specified on each experience page.' },
          { question: 'What is the group size and vehicle comfort?', answer: 'We strictly limit van journeys to a maximum of 8 guests to guarantee individual space, effortless conversation, and personalized attention. You will travel in a luxury 2023 Mercedes-Benz Vito with individual leather seats and climate control.' },
          { question: 'What is the cancellation policy?', answer: 'We offer a full refund for cancellations made at least 24 hours prior to departure.' },
          { question: 'Where are the departure meeting points?', answer: 'Sintra experiences meet conveniently at Sintra Train Station. Lisbon, Fátima, and Arrábida departures meet at central, elegant city locations detailed in your confirmation.' },
          { question: 'Can we request a custom private departure?', answer: 'Yes. In addition to our curated small-group departures, we offer fully bespoke private journeys tailored to your preferences.' },
          { question: 'Who will guide our experience?', answer: 'Your experience is hosted by an expert local driver-guide from our core team who brings rich historical depth, local connections, and warm hospitality.' }
        ]
      },
      finalCta: {
        kicker: 'Plan Your Travel Dates',
        title: 'Ready to Experience Portugal?',
        text: 'Share your travel dates and group details with us. Our local team will confirm departure availability for you.',
        trust: 'Free cancellation up to 24 hours before departure · 5.0 TripAdvisor Rating'
      },
      footer: {
        contactAria: 'Contact',
        description: 'Boutique small-group van journeys and private walking immersions in Sintra, Lisbon, and Portugal.',
        location: 'Sintra & Lisbon, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    es: {
      seo: {
        title: 'Tours de Lujo en Grupo Reducido en Sintra y Lisboa | About Culture Things',
        description: 'Experiencias exclusivas en grupo reducido en Mercedes-Benz Vito de lujo y walking tours guiados en Sintra, Lisboa y alrededores.',
        keywords: 'tours de lujo Sintra, tour grupo reducido Lisboa, sintra privado mercedes vito, tour fatima obidos exclusivo, cata de vinos arrabida',
        author: 'About Culture Things',
        ogTitle: 'Tours de Lujo en Grupo Reducido en Sintra y Lisboa',
        ogDescription: 'Rutas exclusivas en grupo reducido en una Mercedes-Benz Vito de lujo y paseos guiados con expertos locales.',
        twitterTitle: 'Tours de Lujo en Grupo Reducido | About Culture Things',
        twitterDescription: 'Experiencias exclusivas en Mercedes-Benz Vito de lujo desde Lisboa y Sintra.',
        imageAlt: 'Viajeros en un tour de lujo por la costa atlántica de Portugal'
      },
      ui: {
        skipLink: 'Saltar al contenido principal',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        backToTop: 'Volver arriba',
        scrollToExplore: 'Desplázate para explorar',
        includedAria: 'Detalles incluidos en su experiencia',
        languageSelector: 'Seleccionar idioma. Idioma actual: {language}.'
      },
      nav: [
        { label: 'Experiencias', href: '#tours', key: 'tours' },
        { label: 'Reseñas', href: '#reviews', key: 'reviews' },
        { label: 'Nuestro Enfoque', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Consultar Disponibilidad',
        hero: 'Explorar Experiencias',
        offer: 'Consultar Disponibilidad',
        tour1: 'Consultar Disponibilidad',
        tour2: 'Consultar Disponibilidad',
        'fatima-obidos': 'Consultar Disponibilidad',
        final: 'Reservar Su Salida',
        navAria: 'Contactar por WhatsApp',
        fabAria: 'Consultar disponibilidad por WhatsApp',
        fabTooltip: 'Consultar disponibilidad'
      },
      hero: {
        kicker: 'Rutas Exclusivas en Grupo Reducido',
        title: 'Portugal, con la elegancia y atención que mereces.',
        subtitle: 'Rutas exclusivas en grupo reducido en una Mercedes-Benz Vito de lujo y paseos guiados con expertos locales.',
        secondaryCta: 'Explorar Experiencias',
        trust: '5.0 en TripAdvisor',
        trustAria: 'Leer reseñas en TripAdvisor',
        highlights: 'Grupos Íntimos (Máx. 8) · Flota Mercedes-Benz Vito · Guías Locales Expertos',
        guide: 'Inglés, portugués y español disponibles',
        price: '',
        priceLink: 'Explorar todas las experiencias ↓',
        imageAlt: 'Viajeros en un tour de lujo por la costa atlántica'
      },
      benefits: {
        kicker: 'El Estándar About Culture Things',
        title: 'El Lujo de Descubrir sin Prisas',
        description: 'Un grupo reducido garantiza máximo confort personal, flexibilidad e interacción auténtica sin las aglomeraciones ni prisas de los autobuses turísticos.',
        aria: 'Por qué elegir About Culture Things',
        items: [
          { title: 'Mercedes-Benz Vito Ejecutiva', text: 'Viajen en una van de alta gama Mercedes-Benz Vito 2023 con asientos individuales de cuero, climatización bizona y amplio espacio personal.', icon: 'plus' },
          { title: 'Anfitrión Local Dedicado', text: 'Un guía-conductor local se encarga de la fluidez del día, la seguridad y de transmitir la rica historia de cada lugar.', icon: 'pin' },
          { title: 'Itinerarios de Autor', text: 'Tiempos realistas y lugares auténticos seleccionados con precisión para disfrutar de cada destino sin prisas.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'Nuestra Filosofía',
        title: 'Planificado con Precisión Local. Acompañado con Esmero.',
        text: 'Cada ruta nace del conocimiento profundo del territorio y de tiempos realistas. Desde nuestra base en Sintra coordinamos cada detalle para que su día sea fluido, elegante y memorable.',
        signature: 'Base Boutique en Sintra · Guías en Lisboa y Portugal',
        imageAlt: 'Viajeras contemplando la costa atlántica en Sintra'
      },
      offers: {
        kicker: 'Colección Seleccionada',
        title: 'Elija Su Experiencia',
        description: 'Itinerarios diseñados para viajeros exigentes que aprecian el confort, la cultura y el detalle.',
        vanKicker: 'Rutas en Van de Lujo',
        vanTitle: 'Tours de Día en Grupo Reducido',
        vanDescription: 'Vehículo ejecutivo Mercedes-Benz Vito (máximo 8 plazas) con ambiente climatizado y anfitrión local.',
        walkingKicker: 'Inmersiones Culturales',
        walkingTitle: 'Walking Tours Guiados',
        walkingDescription: 'Paseos a pie guiados por la Sintra histórica y Lisboa, revelando siglos de leyendas y patrimonio.',
        trustAria: 'Estándares de nuestras experiencias',
        trust: ['Grupos íntimos (Máx. 8)', 'Mercedes-Benz Vito Ejecutiva', 'Guía local experto'],
        currencyNote: 'Tarifas transparentes por persona en EUR. Salidas garantizadas en grupo reducido.',
        currencyLabel: 'Aproximado en',
        currencyLoading: 'Actualizando conversión…',
        currencyApprox: 'Conversión aproximada. El pago se procesa en EUR.',
        currencyUnavailable: 'Conversión no disponible. El pago se procesa en EUR.',
        perGroup: 'por viajero',
        directPrice: 'Tarifa de Experiencia',
        detailsCta: 'Ver Experiencia',
        routeLabel: 'Itinerario',
        meetingLabel: 'Punto de Encuentro',
        includesLabel: 'Incluye',
        extrasLabel: 'No incluye',
        items: [
          {
            id: 'sintra-coast', kind: 'van', badge: 'Experiencia Emblemática',
            name: 'Sintra, Pena, Cabo da Roca & Cascais',
            tag: '7,5 Horas · Máx. 8 Viajeros',
            stops: 'Estación de Sintra · Palacio da Pena · Sintra Histórica · Cabo da Roca · Cascais',
            fit: 'La ruta imprescindible: palacios reales, bosque de leyenda, el extremo occidental de Europa y la costa atlántica en un día perfectamente organizado.',
            meeting: 'Estación de tren de Sintra',
            includes: 'Guía-conductor local experto, Mercedes-Benz Vito de lujo, agua embotellada y seguro',
            extras: 'Entradas a palacios y almuerzo',
            price: '€119', priceValue: '119', currency: 'EUR',
            places: 'Estación de Sintra · Palacio da Pena · Centro histórico de Sintra · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp', imageAlt: 'Acantilados de Cabo da Roca en la ruta de lujo de Sintra'
          },
          {
            id: 'fatima-nazare-obidos', kind: 'van', badge: 'Patrimonio Cultural',
            name: 'Fátima, Batalha, Nazaré & Óbidos',
            tag: '9 Horas · Máx. 8 Viajeros',
            stops: 'Santuario de Fátima · Monasterio de Batalha · Costa de Nazaré · Villa de Óbidos',
            fit: 'Patrimonio espiritual, arquitectura gótica UNESCO, acantilados atlánticos y la villa medieval amurallada en la ruta norte más completa.',
            meeting: 'Plaza de Restauradores, Lisboa',
            includes: 'Guía-conductor local experto, Mercedes-Benz Vito de lujo, agua, cata de ginjinha y seguro',
            extras: 'Entradas a monumentos y almuerzo',
            price: '€179', priceValue: '179', currency: 'EUR',
            places: 'Restauradores · Santuario de Fátima · Monasterio de Batalha · Nazaré · Óbidos',
            image: 'site/images/tour-fatima-obidos-736.webp', imageAlt: 'Basílica de Nuestra Señora del Rosario en Fátima', imagePosition: 'center 38%'
          },
          {
            id: 'arrabida-wine', kind: 'van', badge: 'Vino & Gastronomía Exclusiva',
            name: 'Arrábida, Azeitão & Dos Bodegas',
            tag: '8 Horas · Máx. 8 Viajeros',
            stops: 'Palmela · Azeitão · Parque Natural de Arrábida · Sesimbra',
            fit: 'Visita privada a dos fincas vinícolas con catas comentadas, vistas panorámicas entre mar y montaña, y almuerzo marinero en la costa.',
            meeting: 'Plaza de Restauradores, Lisboa',
            includes: 'Guía-conductor local experto, Mercedes-Benz Vito de lujo, dos visitas a bodegas con catas y seguro',
            extras: 'Almuerzo',
            price: '€169', priceValue: '169', currency: 'EUR',
            places: 'Restauradores · Palmela · Azeitão · Parque Natural de Arrábida · Sesimbra',
            image: 'site/images/tour-arrabida-wine-960.webp', imageAlt: 'Grupo reducido paseando por un viñedo en Arrábida'
          },
          {
            id: 'sintra-walk', kind: 'walking', badge: 'Ruta de Autor',
            name: 'Historias de Sintra, Casco Antiguo & Bosque',
            tag: '3 Horas · Grupo Reducido',
            stops: 'Estación de Sintra · Volta do Duche · Casco Antiguo · Mirador de Seteais',
            fit: 'Una inmersión a pie guiada por historiadores locales a través del casco antiguo, callejuelas románticas y senderos entre quintas históricas.',
            meeting: 'Estación de tren de Sintra',
            includes: 'Guía local experto e historia y degustación de dulce tradicional de Sintra',
            extras: 'Entradas a monumentos',
            price: '€45', priceValue: '45', currency: 'EUR',
            places: 'Estación de Sintra · Volta do Duche · Centro histórico · Mirador de Seteais',
            image: 'site/images/tour-sintra-walk-960.webp', imageAlt: 'Grupo reducido caminando por un sendero de bosque en Sintra'
          },
          {
            id: 'lisbon-walk', kind: 'walking', badge: 'Lisboa Esencial',
            name: 'Lisboa Esencial: Baixa, Chiado & Alfama',
            tag: '3 Horas · Grupo Reducido',
            stops: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            fit: 'Una elegante introducción a la historia de Lisboa, sus miradores panorámicos, fachadas de azulejos y barrios históricos.',
            meeting: 'Plaza de Rossio, Lisboa',
            includes: 'Guía local experto y pastel de nata artesanal',
            extras: 'Transporte y consumiciones adicionales',
            price: '€49', priceValue: '49', currency: 'EUR',
            places: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            image: 'site/images/tour-lisbon-walk-960.webp', imageAlt: 'Guía local con grupo reducido en Alfama, Lisboa'
          }
        ]
      },
      gallery: {
        kicker: 'Portugal al Detalle',
        title: 'Momentos de Elegancia Intemporal'
      },
      reviews: {
        kicker: 'Testimonios de Viajeros',
        title: 'Lo Que Recuerdan Nuestros Huéspedes',
        trustAria: 'Valoración en TripAdvisor',
        averageLabel: 'valoración media',
        trustNote: 'Valoración 5.0 en TripAdvisor',
        gridAria: 'Reseñas de huéspedes',
        dotsAria: 'Paginación de reseñas',
        previousAria: 'Mostrar reseñas anteriores',
        nextAria: 'Mostrar reseñas siguientes',
        viewAll: 'Ver Todas las Reseñas en TripAdvisor',
        viewAllAria: 'Ver todas las reseñas en TripAdvisor',
        source: 'Reseña Verificada de TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 valoración media',
        items: []
      },
      faq: {
        kicker: 'Información Esencial',
        title: 'Preguntas Frecuentes',
        items: [
          { question: '¿Qué incluye cada experiencia?', answer: 'Todas nuestras experiencias incluyen un guía local dedicado, seguro completo de viajeros y agua embotellada. Los recorridos en van se realizan en una Mercedes-Benz Vito 2023 ejecutiva. Los tours de vino incluyen visitas privadas a bodegas y catas comentadas.' },
          { question: '¿Cuál es el tamaño del grupo y el confort del vehículo?', answer: 'Limitamos estrictamente nuestras salidas en van a un máximo de 8 huéspedes para garantizar espacio individual, confort y atención personalizada. Viajarán en una Mercedes-Benz Vito 2023 con asientos individuales de cuero y climatización.' },
          { question: '¿Cuál es la política de cancelación?', answer: 'Reembolso completo para cancelaciones realizadas al menos 24 horas antes de la salida.' },
          { question: '¿Dónde son los puntos de encuentro?', answer: 'Las salidas de Sintra se realizan en la Estación de Sintra. Las salidas desde Lisboa, Fátima y Arrábida se coordinan en puntos céntricos y de fácil acceso detallados en su confirmación.' },
          { question: '¿Es posible solicitar un tour privado personalizado?', answer: 'Sí. Además de nuestras salidas en grupo reducido, diseñamos itinerarios privados completamente a medida según sus preferencias.' },
          { question: '¿Quién guiará nuestra experiencia?', answer: 'Su experiencia estará guiada por un profesional local de nuestro equipo principal, apasionado por la historia, la cultura y la hospitalidad.' }
        ]
      },
      finalCta: {
        kicker: 'Planifique Sus Fechas',
        title: '¿Listo para Descubrir Portugal?',
        text: 'Comparta sus fechas y detalles con nuestro equipo local. Confirmaremos la disponibilidad de su salida.',
        trust: 'Cancelación gratuita hasta 24h antes de la salida · Valoración 5.0 en TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        description: 'Experiencias de lujo en grupo reducido y paseos guiados por Sintra, Lisboa y Portugal.',
        location: 'Sintra y Lisboa, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    pt: {
      seo: {
        title: 'Tours de Luxo em Grupo Reduzido em Sintra e Lisboa | About Culture Things',
        description: 'Experiências exclusivas em grupo reduzido numa Mercedes-Benz Vito de luxo e walking tours guiados em Sintra, Lisboa e arredores.',
        keywords: 'tours de luxo Sintra, tour grupo reduzido Lisboa, sintra privado mercedes vito, tour fatima obidos exclusivo, prova de vinhos arrabida',
        author: 'About Culture Things',
        ogTitle: 'Tours de Luxo em Grupo Reduzido em Sintra e Lisboa',
        ogDescription: 'Viagens exclusivas em grupo reduzido numa Mercedes-Benz Vito de luxo e passeios guiados com especialistas locais.',
        twitterTitle: 'Tours de Luxo em Grupo Reduzido | About Culture Things',
        twitterDescription: 'Experiências exclusivas em Mercedes-Benz Vito de luxo a partir de Lisboa e Sintra.',
        imageAlt: 'Viajantes num tour de luxo na costa atlântica de Portugal'
      },
      ui: {
        skipLink: 'Saltar para o conteúdo principal',
        openMenu: 'Abrir menu',
        closeMenu: 'Fechar menu',
        backToTop: 'Voltar ao topo',
        scrollToExplore: 'Desliza para explorar',
        includedAria: 'Detalhes incluídos na sua experiência',
        languageSelector: 'Selecionar idioma. Idioma atual: {language}.'
      },
      nav: [
        { label: 'Experiências', href: '#tours', key: 'tours' },
        { label: 'Avaliações', href: '#reviews', key: 'reviews' },
        { label: 'A Nossa Abordagem', href: '#about', key: 'about' }
      ],
      ctas: {
        nav: 'Consultar Disponibilidade',
        hero: 'Explorar Experiências',
        offer: 'Consultar Disponibilidade',
        tour1: 'Consultar Disponibilidade',
        tour2: 'Consultar Disponibilidade',
        'fatima-obidos': 'Consultar Disponibilidade',
        final: 'Reservar a Sua Saída',
        navAria: 'Contactar por WhatsApp',
        fabAria: 'Verificar disponibilidade no WhatsApp',
        fabTooltip: 'Verificar disponibilidade'
      },
      hero: {
        kicker: 'Viagens Exclusivas em Grupo Reduzido',
        title: 'Portugal, com a elegância e atenção que merece.',
        subtitle: 'Viagens exclusivas em grupo reduzido numa Mercedes-Benz Vito de luxo e passeios guiados com especialistas locais.',
        secondaryCta: 'Explorar Experiências',
        trust: '5.0 no TripAdvisor',
        trustAria: 'Ler avaliações no TripAdvisor',
        highlights: 'Grupos Íntimos (Máx. 8) · Frota Mercedes-Benz Vito · Guias Locais Especialistas',
        guide: 'Inglês, português e espanhol disponíveis',
        price: '',
        priceLink: 'Explorar todas as experiências ↓',
        imageAlt: 'Viajantes num tour de luxo na costa atlântica'
      },
      benefits: {
        kicker: 'O Padrão About Culture Things',
        title: 'O Luxo de Descobrir sem Pressas',
        description: 'Um grupo reduzido garante máximo conforto pessoal, flexibilidade e atenção dedicada sem o ritmo dos autocarros turísticos.',
        aria: 'Porquê escolher About Culture Things',
        items: [
          { title: 'Mercedes-Benz Vito Executiva', text: 'Viajem numa van de gama alta Mercedes-Benz Vito 2023 com lugares individuais em pele e ambiente climatizado.', icon: 'plus' },
          { title: 'Anfitrião Local Dedicado', text: 'Um guia-motorista local assegura o conforto do dia, a segurança e a transmissão da história de cada local.', icon: 'pin' },
          { title: 'Itinerários Selecionados', text: 'Horários ponderados e locais autênticos selecionados para desfrutar de cada destino ao seu próprio ritmo.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'A Nossa Filosofia',
        title: 'Planeado com Precisão Local. Acompanhado com Rigor.',
        text: 'Cada viagem nasce do conhecimento profundo do território e de horários realistas. A partir da nossa base em Sintra, coordenamos cada detalhe para que o seu dia seja fluido, elegante e inesquecível.',
        signature: 'Base Boutique em Sintra · Guias em Lisboa e Portugal',
        imageAlt: 'Viajantes junto à costa atlântica perto de Sintra'
      },
      offers: {
        kicker: 'Coleção Selecionada',
        title: 'Escolha a Sua Experiência',
        description: 'Itinerários desenhados para viajantes exigentes que valorizam o conforto, a cultura e o detalhe.',
        vanKicker: 'Viagens em Van de Luxo',
        vanTitle: 'Tours de Dia em Grupo Reduzido',
        vanDescription: 'Veículo executivo Mercedes-Benz Vito (máximo 8 lugares) com ambiente climatizado e guia local.',
        walkingKicker: 'Imersões Culturais',
        walkingTitle: 'Walking Tours Guiados',
        walkingDescription: 'Passeios a pé pela Sintra histórica e Lisboa, revelando séculos de património e segredos.',
        trustAria: 'Padrões das nossas experiências',
        trust: ['Grupos íntimos (Máx. 8)', 'Mercedes-Benz Vito Executiva', 'Guia local especialista'],
        currencyNote: 'Tarifas transparentes por visitante em EUR. Saídas garantidas em grupo reduzido.',
        currencyLabel: 'Aproximado em',
        currencyLoading: 'A atualizar conversão…',
        currencyApprox: 'Conversão aproximada. O pagamento é processado em EUR.',
        currencyUnavailable: 'Conversão indisponível. O pagamento é processado em EUR.',
        perGroup: 'por visitante',
        directPrice: 'Tarifa de Experiência',
        detailsCta: 'Ver Experiência',
        routeLabel: 'Itinerário',
        meetingLabel: 'Ponto de Encontro',
        includesLabel: 'Inclui',
        extrasLabel: 'Não inclui',
        items: [
          {
            id: 'sintra-coast', kind: 'van', badge: 'Experiência Emblemática',
            name: 'Sintra, Pena, Cabo da Roca & Cascais',
            tag: '7,5 Horas · Máx. 8 Viajantes',
            stops: 'Estação de Sintra · Palácio da Pena · Sintra Histórica · Cabo da Roca · Cascais',
            fit: 'A viagem fundamental: palácios reais, floresta secular, o ponto mais ocidental da Europa e a costa atlântica num dia perfeitamente ritmado.',
            meeting: 'Estação de comboios de Sintra',
            includes: 'Guia-motorista local especialista, Mercedes-Benz Vito de luxo, água engarrafada e seguro',
            extras: 'Bilhetes para palácios e almoço',
            price: '€119', priceValue: '119', currency: 'EUR',
            places: 'Estação de Sintra · Palácio da Pena · Centro histórico de Sintra · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp', imageAlt: 'Falésias do Cabo da Roca no tour de luxo de Sintra'
          },
          {
            id: 'fatima-nazare-obidos', kind: 'van', badge: 'Património Cultural',
            name: 'Fátima, Batalha, Nazaré & Óbidos',
            tag: '9 Horas · Máx. 8 Viajantes',
            stops: 'Santuário de Fátima · Mosteiro da Batalha · Costa da Nazaré · Vila de Óbidos',
            fit: 'Património espiritual, arquitetura gótica UNESCO, falésias atlânticas e a vila medieval amuralhada na rota norte mais completa.',
            meeting: 'Praça dos Restauradores, Lisboa',
            includes: 'Guia-motorista local especialista, Mercedes-Benz Vito de luxo, água, prova de ginjinha e seguro',
            extras: 'Bilhetes para monumentos e almoço',
            price: '€179', priceValue: '179', currency: 'EUR',
            places: 'Restauradores · Santuário de Fátima · Mosteiro da Batalha · Nazaré · Óbidos',
            image: 'site/images/tour-fatima-obidos-736.webp', imageAlt: 'Basílica de Nossa Senhora do Rosário em Fátima', imagePosition: 'center 38%'
          },
          {
            id: 'arrabida-wine', kind: 'van', badge: 'Vinho & Gastronomia Exclusiva',
            name: 'Arrábida, Azeitão & Duas Adegas',
            tag: '8 Horas · Máx. 8 Viajantes',
            stops: 'Palmela · Azeitão · Parque Natural da Arrábida · Sesimbra',
            fit: 'Visita privada a duas adegas históricas com provas orientadas, panoramas deslumbrantes da serra ao mar e almoço gastronómico na costa.',
            meeting: 'Praça dos Restauradores, Lisboa',
            includes: 'Guia-motorista local especialista, Mercedes-Benz Vito de luxo, duas visitas a adegas com provas e seguro',
            extras: 'Almoço',
            price: '€169', priceValue: '169', currency: 'EUR',
            places: 'Restauradores · Palmela · Azeitão · Parque Natural da Arrábida · Sesimbra',
            image: 'site/images/tour-arrabida-wine-960.webp', imageAlt: 'Grupo reduzido numa vinha na região da Arrábida'
          },
          {
            id: 'sintra-walk', kind: 'walking', badge: 'Rota de Autor',
            name: 'Histórias de Sintra, Vila Velha & Floresta',
            tag: '3 Horas · Grupo Reduzido',
            stops: 'Estação de Sintra · Volta do Duche · Vila Velha · Miradouro de Seteais',
            fit: 'Uma imersão a pé guiada por historiadores locais através do centro histórico, caminhos românticos e bosques reservados.',
            meeting: 'Estação de comboios de Sintra',
            includes: 'Guia local especialista e degustação de doce tradicional de Sintra',
            extras: 'Bilhetes para monumentos',
            price: '€45', priceValue: '45', currency: 'EUR',
            places: 'Estação de Sintra · Volta do Duche · Centro histórico · Miradouro de Seteais',
            image: 'site/images/tour-sintra-walk-960.webp', imageAlt: 'Grupo reduzido a caminhar num trilho de floresta em Sintra'
          },
          {
            id: 'lisbon-walk', kind: 'walking', badge: 'Lisboa Essencial',
            name: 'Lisboa Essencial: Baixa, Chiado & Alfama',
            tag: '3 Horas · Grupo Reducido',
            stops: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            fit: 'Uma elegante introdução à história de Lisboa, miradouros panorâmicos, fachadas de azulejos e bairros históricos.',
            meeting: 'Praça do Rossio, Lisboa',
            includes: 'Guia local especialista e pastel de nata artesanal',
            extras: 'Transporte e consumições adicionais',
            price: '€49', priceValue: '49', currency: 'EUR',
            places: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            image: 'site/images/tour-lisbon-walk-960.webp', imageAlt: 'Guia local com pequeno grupo em Alfama, Lisboa'
          }
        ]
      },
      gallery: {
        kicker: 'Portugal em Detalhe',
        title: 'Momentos de Elegância Intemporal'
      },
      reviews: {
        kicker: 'Testemunhos de Viajantes',
        title: 'O Que os Nossos Convidados Recordam',
        trustAria: 'Classificação no TripAdvisor',
        averageLabel: 'classificação média',
        trustNote: 'Classificação 5.0 no TripAdvisor',
        gridAria: 'Avaliações de convidados',
        dotsAria: 'Paginação das avaliações',
        previousAria: 'Mostrar avaliações anteriores',
        nextAria: 'Mostrar avaliações seguintes',
        viewAll: 'Ver Todas as Avaliações no TripAdvisor',
        viewAllAria: 'Ver todas as avaliações no TripAdvisor',
        source: 'Avaliação Verificada do TripAdvisor',
        ratingValue: '5.0',
        ratingLabel: '5.0 de 5 classificação média',
        items: []
      },
      faq: {
        kicker: 'Informação Essencial',
        title: 'Perguntas Frequentes',
        items: [
          { question: 'O que está incluído em cada experiência?', answer: 'Todas as nossas experiências incluem um guia local dedicado, seguro completo de viajantes e água engarrafada. Os percursos em van são realizados numa Mercedes-Benz Vito 2023 executiva. Os tours de vinho incluem visitas privadas a adegas e provas orientadas.' },
          { question: 'Qual é o tamanho do grupo e o conforto do veículo?', answer: 'Limitamos rigorosamente as nossas saídas em van a um máximo de 8 convidados para garantir espaço individual, conforto e atenção personalizada. Viajarão numa Mercedes-Benz Vito 2023 com lugares individuais em pele e climatização.' },
          { question: 'Qual é a política de cancelamento?', answer: 'Reembolso total para cancelamentos efetuados com pelo menos 24 horas de antecedência em relação à partida.' },
          { question: 'Onde são os pontos de encontro?', answer: 'As saídas de Sintra realizam-se na Estação de Sintra. As saídas de Lisboa, Fátima e Arrábida encontram-se em pontos centrais e de fácil acesso detalhados na sua confirmação.' },
          { question: 'É possível solicitar um tour privado personalizado?', answer: 'Sim. Além das nossas saídas em grupo reduzido, desenhamos itinerários privados totalmente à medida das suas preferências.' },
          { question: 'Quem vai guiar a nossa experiência?', answer: 'A sua experiência será guiada por um profissional local da nossa equipa principal, apaixonado pela história, cultura e hospitalidade.' }
        ]
      },
      finalCta: {
        kicker: 'Planeie as Suas Datas',
        title: 'Pronto para Descobrir Portugal?',
        text: 'Partilhe as suas datas e detalhes com a nossa equipa local. Confirmaremos a disponibilidade da sua viagem.',
        trust: 'Cancelamento gratuito até 24h antes da saída · Classificação 5.0 no TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        description: 'Experiências de luxo em grupo reduzido e passeios guiados por Sintra, Lisboa e Portugal.',
        location: 'Sintra e Lisboa, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
