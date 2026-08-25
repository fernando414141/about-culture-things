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
      'sintra-coast': "Hello! I'm interested in the Sintra, Pena, Cabo da Roca & Cascais tour. Could you check my dates and number of travellers?",
      'fatima-nazare-obidos': "Hello! I'm interested in the Fátima, Batalha, Nazaré & Óbidos tour. Could you check my dates and number of travellers?",
      'arrabida-wine': "Hello! I'm interested in the Arrábida, Azeitão & Two Wineries tour. Could you check my dates and number of travellers?",
      'sintra-walk': "Hello! I'm interested in the Sintra Stories walking tour. Could you check my dates and number of travellers?",
      'lisbon-walk': "Hello! I'm interested in the Lisbon Essentials walking tour. Could you check my dates and number of travellers?",
      final: "Hello About Culture Things! I'd like help choosing the right shared tour.",
      faq: 'Hello! I have a question about your shared tours.'
    },
    es: {
      default: '¡Hola, About Culture Things! Quisiera consultar plazas para un tour compartido desde Lisboa.',
      book: '¡Hola, About Culture Things! Quisiera consultar plazas para un tour compartido desde Lisboa.',
      'sintra-coast': '¡Hola! Me interesa el tour Sintra, Pena, Cabo da Roca y Cascais. ¿Pueden consultar mis fechas y número de viajeros?',
      'fatima-nazare-obidos': '¡Hola! Me interesa el tour Fátima, Batalha, Nazaré y Óbidos. ¿Pueden consultar mis fechas y número de viajeros?',
      'arrabida-wine': '¡Hola! Me interesa el tour Arrábida, Azeitão y Dos Bodegas. ¿Pueden consultar mis fechas y número de viajeros?',
      'sintra-walk': '¡Hola! Me interesa el walking tour Historias de Sintra. ¿Pueden consultar mis fechas y número de viajeros?',
      'lisbon-walk': '¡Hola! Me interesa el walking tour Lisboa Esencial. ¿Pueden consultar mis fechas y número de viajeros?',
      final: '¡Hola, About Culture Things! Quisiera ayuda para elegir el tour compartido más adecuado.',
      faq: '¡Hola! Tengo una pregunta sobre los tours compartidos.'
    },
    pt: {
      default: 'Olá, About Culture Things! Gostaria de verificar lugares para um tour partilhado a partir de Lisboa.',
      book: 'Olá, About Culture Things! Gostaria de verificar lugares para um tour partilhado a partir de Lisboa.',
      'sintra-coast': 'Olá! Tenho interesse no tour Sintra, Pena, Cabo da Roca e Cascais. Podem verificar as datas e o número de viajantes?',
      'fatima-nazare-obidos': 'Olá! Tenho interesse no tour Fátima, Batalha, Nazaré e Óbidos. Podem verificar as datas e o número de viajantes?',
      'arrabida-wine': 'Olá! Tenho interesse no tour Arrábida, Azeitão e Duas Adegas. Podem verificar as datas e o número de viajantes?',
      'sintra-walk': 'Olá! Tenho interesse no walking tour Histórias de Sintra. Podem verificar as datas e o número de viajantes?',
      'lisbon-walk': 'Olá! Tenho interesse no walking tour Lisboa Essencial. Podem verificar as datas e o número de viajantes?',
      final: 'Olá, About Culture Things! Gostaria de ajuda para escolher o tour partilhado mais indicado.',
      faq: 'Olá! Tenho uma pergunta sobre os tours partilhados.'
    }
  },
  schema: {
    types: ['TravelAgency'],
    priceRange: '€25–€75 per person',
    areaServed: ['Sintra', 'Lisbon', 'Cascais', 'Cabo da Roca', 'Óbidos', 'Nazaré', 'Fátima', 'Arrábida', 'Portugal'],
    knowsAbout: [
      'Small-group Sintra tours',
      'Sintra day trip from Lisbon',
      'Pena Palace tours',
      'Cabo da Roca tours',
      'Atlantic coast Portugal',
      'Sintra walking tours',
      'Quinta da Regaleira',
      'Castelo dos Mouros',
      'Luxury van tours Portugal',
      'Lisbon walking tours',
      'Fátima Nazaré Óbidos day tours',
      'Arrábida wine tours'
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
        title: 'Small-Group Tours in Sintra & Lisbon | About Culture Things',
        description: 'Three small-group day tours in a Mercedes-Benz Vito and two guided walking tours in Sintra and Lisbon, at direct per-person prices.',
        keywords: 'Sintra small group tour, Lisbon walking tour, Sintra walking tour, Fátima Nazaré Óbidos tour, Arrábida wine tour',
        author: 'About Culture Things',
        ogTitle: 'Small-Group Tours in Sintra & Lisbon | About Culture Things',
        ogDescription: 'Three curated van journeys and two local walking tours, with transparent direct prices.',
        twitterTitle: 'Small-Group Tours in Sintra & Lisbon',
        twitterDescription: 'Three curated van journeys and two local walking tours at direct per-person prices.',
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
        hero: 'Explore the five tours',
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
        kicker: 'Local tours from Sintra',
        title: 'Five ways to know Portugal better.',
        subtitle: 'Three road journeys in a nine-seat 2023 Mercedes-Benz Vito and two intimate walking tours—priced directly, per person.',
        secondaryCta: 'See tours',
        trust: '5.0 on TripAdvisor',
        trustAria: 'Read traveler reviews on TripAdvisor',
        highlights: 'Small groups · Direct rates · English, Spanish & Portuguese',
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
        kicker: 'Five focused experiences',
        title: 'Choose how you want to explore.',
        description: 'A clear route, meeting point and direct per-person price for every tour.',
        vanKicker: 'By Mercedes-Benz Vito',
        vanTitle: 'Small-group day tours',
        vanDescription: 'Up to 8 guests in a 2023 Mercedes-Benz Vito, with air conditioning and one central meeting point.',
        walkingKicker: 'On foot with a local guide',
        walkingTitle: 'Walking tours',
        walkingDescription: 'Meet the guide in Sintra or Lisbon. No transport is needed.',
        trustAria: 'What every tour includes',
        trust: ['Direct per-person price', 'Small groups', 'Local guide'],
        currencyNote: 'Direct website rates, per person and charged in EUR. No marketplace commission is added. Departures are subject to minimum numbers.',
        currencyLabel: 'Estimate in',
        currencyLoading: 'Updating approximate conversion…',
        currencyApprox: 'Approximate conversion. Payment is always charged in EUR.',
        currencyUnavailable: 'Conversion unavailable. Payment is charged in EUR.',
        perGroup: 'per person',
        directPrice: 'Direct price',
        routeLabel: 'Route',
        meetingLabel: 'Meet at',
        includesLabel: 'Included',
        extrasLabel: 'Not included',
        items: [
          {
            id: 'sintra-coast', kind: 'van', badge: 'Best seller',
            name: 'Sintra, Pena, Cabo da Roca & Cascais',
            tag: 'Full day · 7.5 hours · Up to 8 guests',
            stops: 'Sintra Station · Pena · Historic Sintra · Cabo da Roca · Cascais',
            fit: 'The essential first visit: palaces, forest, Europe’s western edge and the Atlantic coast in one well-paced day.',
            meeting: 'Sintra Train Station',
            includes: 'Local driver-guide, Mercedes-Benz Vito, bottled water and insurance',
            extras: 'Palace tickets and lunch',
            price: '€69', priceValue: '69',
            currency: 'EUR',
            places: 'Sintra Train Station · Pena Palace · Sintra Historic Centre · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca on the Sintra and Cascais small-group tour'
          },
          {
            id: 'fatima-nazare-obidos', kind: 'van', badge: 'Most popular northbound day',
            name: 'Fátima, Batalha, Nazaré & Óbidos',
            tag: 'Full day · 9 hours · Up to 8 guests',
            stops: 'Fátima · Batalha · Nazaré · Óbidos',
            fit: 'Faith, Gothic heritage, Atlantic views and a medieval walled village—the strongest four-stop route north of Lisbon.',
            meeting: 'Restauradores Square, Lisbon',
            includes: 'Local driver-guide, Mercedes-Benz Vito, bottled water, ginjinha and insurance',
            extras: 'Monument tickets and lunch',
            price: '€75', priceValue: '75',
            currency: 'EUR',
            places: 'Restauradores Square · Fátima Sanctuary · Batalha Monastery · Nazaré · Óbidos',
            image: 'site/images/tour-fatima-obidos-736.webp',
            imageAlt: 'Basilica of Our Lady of the Rosary in Fátima',
            imagePosition: 'center 38%'
          },
          {
            id: 'arrabida-wine', kind: 'van', badge: 'Premium food & wine',
            name: 'Arrábida, Azeitão & Two Wineries',
            tag: 'Full day · 8 hours · Up to 8 guests',
            stops: 'Palmela · Azeitão · Arrábida · Sesimbra',
            fit: 'Two contrasting wine producers, mountain panoramas and a relaxed coastal lunch stop south of Lisbon.',
            meeting: 'Restauradores Square, Lisbon',
            includes: 'Local driver-guide, Mercedes-Benz Vito, two winery visits with tastings and insurance',
            extras: 'Lunch',
            price: '€75', priceValue: '75',
            currency: 'EUR',
            places: 'Restauradores Square · Palmela · Azeitão · Arrábida Natural Park · Sesimbra',
            image: 'site/images/tour-arrabida-wine-960.webp',
            imageAlt: 'Small guided group walking through a vineyard in the Arrábida wine region'
          },
          {
            id: 'sintra-walk', kind: 'walking', badge: 'Local favourite',
            name: 'Sintra Stories, Old Town & Forest',
            tag: 'Walking tour · 3 hours · Up to 10 guests',
            stops: 'Sintra Station · Volta do Duche · Old Town · Seteais viewpoint',
            fit: 'A story-led introduction to Sintra through the old town, hidden lanes and the forest paths most visitors miss.',
            meeting: 'Sintra Train Station',
            includes: 'Local guide and one traditional pastry tasting',
            extras: 'Monument tickets',
            price: '€32', priceValue: '32', currency: 'EUR',
            places: 'Sintra Train Station · Volta do Duche · Sintra Historic Centre · Seteais viewpoint',
            image: 'site/images/tour-sintra-walk-960.webp',
            imageAlt: 'Small guided walking group on a forest path in Sintra'
          },
          {
            id: 'lisbon-walk', kind: 'walking', badge: 'Perfect first morning',
            name: 'Lisbon Essentials: Baixa, Chiado & Alfama',
            tag: 'Walking tour · 3 hours · Up to 12 guests',
            stops: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            fit: 'A compact, lively introduction to Lisbon’s history, viewpoints, tiled streets and oldest neighbourhood.',
            meeting: 'Rossio Square, by the statue',
            includes: 'Local guide and one pastel de nata',
            extras: 'Transport and additional food or drinks',
            price: '€25', priceValue: '25', currency: 'EUR',
            places: 'Rossio Square · Baixa · Chiado · Alfama · Portas do Sol',
            image: 'site/images/tour-lisbon-walk-960.webp',
            imageAlt: 'Local guide with a small walking group in historic Alfama, Lisbon'
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
          { question: 'What\'s included?', answer: 'Every tour includes a local guide and insurance. Van tours also include transport in a nine-seat Mercedes-Benz Vito and bottled water; the Arrábida tour includes two winery visits with tastings. Each product states any extras clearly.' },
          { question: 'How do departures work?', answer: 'Prices are per person. Van tours run with up to 8 guests and walking tours with up to 10 or 12. Shared departures are subject to minimum numbers; we confirm the departure and exact meeting instructions when you book.' },
          { question: 'What\'s the cancellation policy?', answer: 'Free cancellation with 24 hours\' notice.' },
          { question: 'Where do we meet?', answer: 'Sintra tours meet at Sintra Train Station. Lisbon, Fátima and Arrábida tours use the central meeting point shown on each product. We send a map pin with your confirmation.' },
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
        description: 'Small-group van journeys and guided walking tours in Sintra, Lisbon and beyond, at direct per-person prices.',
        location: 'Sintra & Lisbon, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    es: {
      seo: {
        title: 'Tours en Grupo Pequeño en Sintra y Lisboa',
        description: 'Tres tours de día en Mercedes-Benz Vito y dos walking tours guiados en Sintra y Lisboa, con precio directo por persona.',
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
        hero: 'Explorar los cinco tours',
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
        kicker: 'Tours locales desde Sintra',
        title: 'Cinco formas de conocer mejor Portugal.',
        subtitle: 'Tres rutas en una Mercedes-Benz Vito 2023 de nueve plazas y dos walking tours íntimos, con precio directo por persona.',
        secondaryCta: 'Ver tours',
        trust: '5.0 en TripAdvisor',
        trustAria: 'Leer reseñas en TripAdvisor',
        highlights: 'Grupos pequeños · Precio directo · Inglés, español y portugués',
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
        kicker: 'Cinco experiencias seleccionadas',
        title: 'Elige cómo quieres explorar.',
        description: 'Ruta, punto de encuentro y precio directo por persona claramente indicados.',
        vanKicker: 'En Mercedes-Benz Vito', vanTitle: 'Tours de día en grupo pequeño',
        vanDescription: 'Hasta 8 viajeros en una Mercedes-Benz Vito 2023, con aire acondicionado y un punto de encuentro céntrico.',
        walkingKicker: 'A pie con guía local', walkingTitle: 'Walking tours',
        walkingDescription: 'Encuentro con el guía en Sintra o Lisboa. No se necesita transporte.',
        trustAria: 'Qué incluye cada tour',
        trust: ['Precio directo por persona', 'Grupos pequeños', 'Guía local'],
        currencyNote: 'Tarifas directas del website, por persona y en EUR. No añadimos comisión de marketplace. Salidas sujetas a un mínimo de participantes.',
        currencyLabel: 'Estimación en',
        currencyLoading: 'Actualizando conversión aproximada…',
        currencyApprox: 'Conversión aproximada. El pago siempre se realiza en EUR.',
        currencyUnavailable: 'Conversión no disponible. El pago se realiza en EUR.',
        perGroup: 'por persona',
        directPrice: 'Precio directo', routeLabel: 'Ruta', meetingLabel: 'Encuentro',
        includesLabel: 'Incluye', extrasLabel: 'No incluye',
        items: [
          {
            id: 'sintra-coast', kind: 'van', badge: 'Más vendido',
            name: 'Sintra, Pena, Cabo da Roca & Cascais', tag: 'Día completo · 7,5 horas · Hasta 8 viajeros',
            stops: 'Estación de Sintra · Pena · Sintra histórica · Cabo da Roca · Cascais',
            fit: 'La primera visita esencial: palacios, bosque, el extremo occidental de Europa y la costa atlántica en un día bien organizado.',
            meeting: 'Estación de tren de Sintra', includes: 'Guía-conductor local, Mercedes-Benz Vito, agua y seguro',
            extras: 'Entradas a palacios y almuerzo', price: '€69', priceValue: '69', currency: 'EUR',
            places: 'Estación de Sintra · Palacio da Pena · Centro histórico de Sintra · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp', imageAlt: 'Cabo da Roca en el tour de Sintra y Cascais'
          },
          {
            id: 'fatima-nazare-obidos', kind: 'van', badge: 'La ruta norte más popular',
            name: 'Fátima, Batalha, Nazaré & Óbidos', tag: 'Día completo · 9 horas · Hasta 8 viajeros',
            stops: 'Fátima · Batalha · Nazaré · Óbidos',
            fit: 'Fe, patrimonio gótico, vistas atlánticas y una villa medieval amurallada en la ruta más completa al norte de Lisboa.',
            meeting: 'Plaza de Restauradores, Lisboa', includes: 'Guía-conductor local, Mercedes-Benz Vito, agua, ginjinha y seguro',
            extras: 'Entradas a monumentos y almuerzo', price: '€75', priceValue: '75', currency: 'EUR',
            places: 'Restauradores · Santuario de Fátima · Monasterio de Batalha · Nazaré · Óbidos',
            image: 'site/images/tour-fatima-obidos-736.webp', imageAlt: 'Basílica de Nuestra Señora del Rosario en Fátima', imagePosition: 'center 38%'
          },
          {
            id: 'arrabida-wine', kind: 'van', badge: 'Gastronomía y vino',
            name: 'Arrábida, Azeitão & Dos Bodegas', tag: 'Día completo · 8 horas · Hasta 8 viajeros',
            stops: 'Palmela · Azeitão · Arrábida · Sesimbra',
            fit: 'Dos productores de vino muy diferentes, panorámicas de montaña y una parada relajada para almorzar junto al mar.',
            meeting: 'Plaza de Restauradores, Lisboa', includes: 'Guía-conductor local, Mercedes-Benz Vito, dos visitas con catas y seguro',
            extras: 'Almuerzo', price: '€75', priceValue: '75', currency: 'EUR',
            places: 'Restauradores · Palmela · Azeitão · Parque Natural de Arrábida · Sesimbra',
            image: 'site/images/tour-arrabida-wine-960.webp', imageAlt: 'Grupo pequeño en un viñedo de la región de Arrábida'
          },
          {
            id: 'sintra-walk', kind: 'walking', badge: 'Favorito local',
            name: 'Historias de Sintra, Casco Antiguo & Bosque', tag: 'Walking tour · 3 horas · Hasta 10 viajeros',
            stops: 'Estación de Sintra · Volta do Duche · Casco antiguo · Mirador de Seteais',
            fit: 'Una introducción a Sintra a través de sus historias, callejuelas y senderos de bosque que muchos visitantes no llegan a ver.',
            meeting: 'Estación de tren de Sintra', includes: 'Guía local y degustación de un dulce tradicional', extras: 'Entradas a monumentos',
            price: '€32', priceValue: '32', currency: 'EUR', places: 'Estación de Sintra · Volta do Duche · Centro histórico · Mirador de Seteais',
            image: 'site/images/tour-sintra-walk-960.webp', imageAlt: 'Grupo pequeño caminando por un sendero de bosque en Sintra'
          },
          {
            id: 'lisbon-walk', kind: 'walking', badge: 'Perfecto para la primera mañana',
            name: 'Lisboa Esencial: Baixa, Chiado & Alfama', tag: 'Walking tour · 3 horas · Hasta 12 viajeros',
            stops: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            fit: 'Una introducción dinámica a la historia, miradores, azulejos y el barrio más antiguo de Lisboa.',
            meeting: 'Plaza de Rossio, junto a la estatua', includes: 'Guía local y un pastel de nata', extras: 'Transporte y otras comidas o bebidas',
            price: '€25', priceValue: '25', currency: 'EUR', places: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            image: 'site/images/tour-lisbon-walk-960.webp', imageAlt: 'Guía local con un grupo pequeño en la histórica Alfama'
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
          { question: '¿Qué incluye?', answer: 'Todos los tours incluyen guía local y seguro. Los tours en van incluyen una Mercedes-Benz Vito de nueve plazas y agua; Arrábida incluye dos visitas a bodegas con catas. Cada producto indica claramente los extras.' },
          { question: '¿Cómo funcionan las salidas?', answer: 'Los precios son por persona. Los tours en van admiten hasta 8 viajeros y los walking tours hasta 10 o 12. Las salidas están sujetas a un mínimo de participantes y se confirman al reservar.' },
          { question: '¿Cuál es la política de cancelación?', answer: 'Cancelación gratuita con 24 horas de antelación.' },
          { question: '¿Dónde nos encontramos?', answer: 'Los tours de Sintra se encuentran en la estación de tren de Sintra. Los de Lisboa, Fátima y Arrábida usan el punto céntrico indicado en cada producto. Enviamos el pin al confirmar.' },
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
        description: 'Tours en van para grupos pequeños y walking tours guiados por Sintra, Lisboa y sus alrededores, con precio directo por persona.',
        location: 'Sintra y Lisboa, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    },
    pt: {
      seo: {
        title: 'Tours em Grupo Pequeno em Sintra e Lisboa',
        description: 'Três tours de dia em Mercedes-Benz Vito e dois walking tours guiados em Sintra e Lisboa, com preço direto por pessoa.',
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
        hero: 'Explorar os cinco tours',
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
        kicker: 'Tours locais a partir de Sintra',
        title: 'Cinco formas de conhecer melhor Portugal.',
        subtitle: 'Três rotas numa Mercedes-Benz Vito 2023 de nove lugares e dois walking tours intimistas, com preço direto por pessoa.',
        secondaryCta: 'Ver tours',
        trust: '5.0 no TripAdvisor',
        trustAria: 'Ler avaliações no TripAdvisor',
        highlights: 'Grupos pequenos · Preço direto · Inglês, espanhol e português',
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
        kicker: 'Cinco experiências selecionadas',
        title: 'Escolhe como queres explorar.',
        description: 'Rota, ponto de encontro e preço direto por pessoa claramente indicados.',
        vanKicker: 'Em Mercedes-Benz Vito', vanTitle: 'Tours de dia em grupo pequeno',
        vanDescription: 'Até 8 viajantes numa Mercedes-Benz Vito 2023, com ar condicionado e um ponto de encontro central.',
        walkingKicker: 'A pé com guia local', walkingTitle: 'Walking tours',
        walkingDescription: 'Encontro com o guia em Sintra ou Lisboa. Não é necessário transporte.',
        trustAria: 'O que cada tour inclui',
        trust: ['Preço direto por pessoa', 'Grupos pequenos', 'Guia local'],
        currencyNote: 'Tarifas diretas do website, por pessoa e em EUR. Não acrescentamos comissão de marketplace. Saídas sujeitas a um número mínimo.',
        currencyLabel: 'Estimativa em',
        currencyLoading: 'A atualizar a conversão aproximada…',
        currencyApprox: 'Conversão aproximada. O pagamento é sempre cobrado em EUR.',
        currencyUnavailable: 'Conversão indisponível. O pagamento é cobrado em EUR.',
        perGroup: 'por pessoa',
        directPrice: 'Preço direto', routeLabel: 'Rota', meetingLabel: 'Encontro',
        includesLabel: 'Inclui', extrasLabel: 'Não inclui',
        items: [
          {
            id: 'sintra-coast', kind: 'van', badge: 'Mais vendido',
            name: 'Sintra, Pena, Cabo da Roca & Cascais', tag: 'Dia inteiro · 7,5 horas · Até 8 viajantes',
            stops: 'Estação de Sintra · Pena · Sintra histórica · Cabo da Roca · Cascais',
            fit: 'A primeira visita essencial: palácios, floresta, o ponto mais ocidental da Europa e a costa atlântica num dia bem organizado.',
            meeting: 'Estação de comboios de Sintra', includes: 'Guia-motorista local, Mercedes-Benz Vito, água e seguro',
            extras: 'Bilhetes para palácios e almoço', price: '€69', priceValue: '69', currency: 'EUR',
            places: 'Estação de Sintra · Palácio da Pena · Centro histórico de Sintra · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp', imageAlt: 'Cabo da Roca no tour de Sintra e Cascais'
          },
          {
            id: 'fatima-nazare-obidos', kind: 'van', badge: 'A rota norte mais popular',
            name: 'Fátima, Batalha, Nazaré & Óbidos', tag: 'Dia inteiro · 9 horas · Até 8 viajantes',
            stops: 'Fátima · Batalha · Nazaré · Óbidos',
            fit: 'Fé, património gótico, vistas atlânticas e uma vila medieval amuralhada na rota mais completa a norte de Lisboa.',
            meeting: 'Praça dos Restauradores, Lisboa', includes: 'Guia-motorista local, Mercedes-Benz Vito, água, ginjinha e seguro',
            extras: 'Bilhetes para monumentos e almoço', price: '€75', priceValue: '75', currency: 'EUR',
            places: 'Restauradores · Santuário de Fátima · Mosteiro da Batalha · Nazaré · Óbidos',
            image: 'site/images/tour-fatima-obidos-736.webp', imageAlt: 'Basílica de Nossa Senhora do Rosário em Fátima', imagePosition: 'center 38%'
          },
          {
            id: 'arrabida-wine', kind: 'van', badge: 'Gastronomia e vinho',
            name: 'Arrábida, Azeitão & Duas Adegas', tag: 'Dia inteiro · 8 horas · Até 8 viajantes',
            stops: 'Palmela · Azeitão · Arrábida · Sesimbra',
            fit: 'Dois produtores de vinho distintos, panoramas de montanha e uma pausa relaxada para almoço junto ao mar.',
            meeting: 'Praça dos Restauradores, Lisboa', includes: 'Guia-motorista local, Mercedes-Benz Vito, duas visitas com provas e seguro',
            extras: 'Almoço', price: '€75', priceValue: '75', currency: 'EUR',
            places: 'Restauradores · Palmela · Azeitão · Parque Natural da Arrábida · Sesimbra',
            image: 'site/images/tour-arrabida-wine-960.webp', imageAlt: 'Grupo pequeno numa vinha da região da Arrábida'
          },
          {
            id: 'sintra-walk', kind: 'walking', badge: 'Favorito local',
            name: 'Histórias de Sintra, Vila Velha & Floresta', tag: 'Walking tour · 3 horas · Até 10 viajantes',
            stops: 'Estação de Sintra · Volta do Duche · Vila Velha · Miradouro de Seteais',
            fit: 'Uma introdução a Sintra através das suas histórias, vielas e caminhos de floresta que muitos visitantes não chegam a ver.',
            meeting: 'Estação de comboios de Sintra', includes: 'Guia local e prova de um doce tradicional', extras: 'Bilhetes para monumentos',
            price: '€32', priceValue: '32', currency: 'EUR', places: 'Estação de Sintra · Volta do Duche · Centro histórico · Miradouro de Seteais',
            image: 'site/images/tour-sintra-walk-960.webp', imageAlt: 'Grupo pequeno a caminhar num trilho de floresta em Sintra'
          },
          {
            id: 'lisbon-walk', kind: 'walking', badge: 'Perfeito para a primeira manhã',
            name: 'Lisboa Essencial: Baixa, Chiado & Alfama', tag: 'Walking tour · 3 horas · Até 12 viajantes',
            stops: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            fit: 'Uma introdução dinâmica à história, miradouros, azulejos e ao bairro mais antigo de Lisboa.',
            meeting: 'Praça do Rossio, junto à estátua', includes: 'Guia local e um pastel de nata', extras: 'Transporte e outras comidas ou bebidas',
            price: '€25', priceValue: '25', currency: 'EUR', places: 'Rossio · Baixa · Chiado · Alfama · Portas do Sol',
            image: 'site/images/tour-lisbon-walk-960.webp', imageAlt: 'Guia local com um pequeno grupo na histórica Alfama'
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
          { question: 'O que está incluído?', answer: 'Todos os tours incluem guia local e seguro. Os tours em van incluem uma Mercedes-Benz Vito de nove lugares e água; a Arrábida inclui duas visitas a adegas com provas. Cada produto indica claramente os extras.' },
          { question: 'Como funcionam as saídas?', answer: 'Os preços são por pessoa. Os tours em van levam até 8 viajantes e os walking tours até 10 ou 12. As saídas estão sujeitas a um número mínimo e são confirmadas na reserva.' },
          { question: 'Qual é a política de cancelamento?', answer: 'Cancelamento gratuito com 24 horas de antecedência.' },
          { question: 'Onde nos encontramos?', answer: 'Os tours de Sintra encontram-se na estação de comboios de Sintra. Lisboa, Fátima e Arrábida usam o ponto central indicado em cada produto. Enviamos o pin na confirmação.' },
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
        description: 'Tours em van para grupos pequenos e walking tours guiados por Sintra, Lisboa e arredores, com preço direto por pessoa.',
        location: 'Sintra e Lisboa, Portugal',
        socialLabels: { whatsapp: 'WhatsApp', email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook', tiktok: 'TikTok' }
      }
    }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
