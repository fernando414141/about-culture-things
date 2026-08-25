/**
 * Project content — About Culture Things.
 * High-ticket luxury travel positioning, social proof, tour filters, rich reviews, and lead magnet copy.
 */
const SITE_CONTENT = {
  business: {
    name: 'About Culture Things',
    shortName: 'Culture Things',
    industry: 'Boutique luxury small-group tours',
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
      default: "Hello About Culture Things! I'd like to consult availability for your private and boutique group experiences.",
      book: "Hello About Culture Things! I'd like to consult availability for your private and boutique group experiences.",
      'sintra-coast': "Hello! I'm interested in reserving seats for the Sintra, Pena, Cabo da Roca & Cascais experience. Could you share current availability?",
      'fatima-nazare-obidos': "Hello! I'm interested in reserving seats for the Fátima, Batalha, Nazaré & Óbidos experience. Could you share current availability?",
      'arrabida-wine': "Hello! I'm interested in reserving seats for the Arrábida, Azeitão & Two Wineries experience. Could you share current availability?",
      'sintra-walk': "Hello! I'm interested in the Sintra Stories walking experience. Could you share current availability?",
      'lisbon-walk': "Hello! I'm interested in the Lisbon Essentials walking experience. Could you share current availability?",
      final: "Hello About Culture Things! I'd like personal concierge assistance choosing the ideal itinerary.",
      faq: 'Hello! I have a question regarding your VIP experiences.'
    },
    es: {
      default: '¡Hola, About Culture Things! Quisiera consultar disponibilidad para sus experiencias privadas y de grupo reducido.',
      book: '¡Hola, About Culture Things! Quisiera consultar disponibilidad para sus experiencias privadas y de grupo reducido.',
      'sintra-coast': '¡Hola! Me interesa reservar plazas para la experiencia Sintra, Pena, Cabo da Roca y Cascais. ¿Podrían indicarme la disponibilidad?',
      'fatima-nazare-obidos': '¡Hola! Me interesa reservar plazas para la experiencia Fátima, Batalha, Nazaré y Óbidos. ¿Podrían indicarme la disponibilidad?',
      'arrabida-wine': '¡Hola! Me interesa reservar plazas para la experiencia Arrábida, Azeitão y Dos Bodegas. ¿Podrían indicarme la disponibilidad?',
      'sintra-walk': '¡Hola! Me interesa la experiencia guiada Historias de Sintra. ¿Podrían indicarme la disponibilidad?',
      'lisbon-walk': '¡Hola! Me interesa la experiencia guiada Lisboa Esencial. ¿Podrían indicarme la disponibilidad?',
      final: '¡Hola, About Culture Things! Quisiera atención concierge para diseñar mi itinerario privado.',
      faq: '¡Hola! Tengo una consulta sobre sus experiencias VIP.'
    },
    pt: {
      default: 'Olá, About Culture Things! Gostaria de consultar disponibilidade para as vossas experiências privadas e em grupo reduzido.',
      book: 'Olá, About Culture Things! Gostaria de consultar disponibilidade para as vossas experiências privadas e em grupo reduzido.',
      'sintra-coast': 'Olá! Gostaria de reservar lugares para a experiência Sintra, Pena, Cabo da Roca e Cascais. Podem indicar a disponibilidade?',
      'fatima-nazare-obidos': 'Olá! Gostaria de reservar lugares para a experiência Fátima, Batalha, Nazaré e Óbidos. Podem indicar a disponibilidade?',
      'arrabida-wine': 'Olá! Gostaria de reservar lugares para a experiência Arrábida, Azeitão e Duas Adegas. Podem indicar a disponibilidade?',
      'sintra-walk': 'Olá! Tenho interesse no walking tour Histórias de Sintra. Podem indicar a disponibilidade?',
      'lisbon-walk': 'Olá! Tenho interesse no walking tour Lisboa Essencial. Podem indicar a disponibilidade?',
      final: 'Olá, About Culture Things! Gostaria de apoio concierge para desenhar o meu itinerário ideal.',
      faq: 'Olá! Tenho uma questão sobre as vossas experiências VIP.'
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
  reviewItems: [
    {
      name: 'Sarah M.',
      country: 'United States 🇺🇸',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      text: 'An exquisite experience from start to finish. Traveling in the Mercedes-Benz Vito felt completely private and luxurious.',
      meta: 'TripAdvisor 5.0 · Verified Guest'
    },
    {
      name: 'Alexandre D.',
      country: 'France 🇫🇷',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      text: 'Un service irréprochable. Guide passionné, rythme parfait et sans aucun stress. Recommandé à 100% pour les voyageurs exigeants.',
      meta: 'TripAdvisor 5.0 · Verified Guest'
    },
    {
      name: 'Carlos R.',
      country: 'Spain 🇪🇸',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
      text: 'Experiencia insuperable por Sintra y la costa. El trato VIP, la comodidad del vehículo y el nivel del guía superaron todas las expectativas.',
      meta: 'TripAdvisor 5.0 · Verified Guest'
    },
    {
      name: 'Emma W.',
      country: 'United Kingdom 🇬🇧',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
      text: 'The ultimate way to explore Portugal. Personalized care, stunning scenery, and top-tier luxury hospitality.',
      meta: 'TripAdvisor 5.0 · Verified Guest'
    }
  ],
  content: {
    en: {
      seo: {
        title: 'Boutique Small-Group & Private Tours in Sintra & Lisbon | About Culture Things',
        description: 'Curated luxury journeys in executive Mercedes-Benz Vito vehicles and private walking immersions in Sintra and Lisbon.',
        keywords: 'Sintra luxury small group tour, Lisbon walking tour, Sintra private experience, Fátima Nazaré Óbidos tour, Arrábida wine tour',
        author: 'About Culture Things',
        ogTitle: 'Boutique Small-Group & Private Tours in Sintra & Lisbon',
        ogDescription: 'Exclusive small-group journeys in a luxury Mercedes-Benz Vito and historic walking immersions with elite local guides.',
        twitterTitle: 'Boutique Luxury Tours in Sintra & Lisbon',
        twitterDescription: 'Curated luxury journeys in executive Mercedes-Benz Vito vehicles.',
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
        hero: 'Reserve Exclusive Experience',
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
        kicker: 'Bespoke Small-Group & Private Journeys',
        title: 'Portugal, Experienced in Refined Comfort.',
        subtitle: 'Curated small-group journeys in a luxury Mercedes-Benz Vito and private walking immersions, hosted by expert local guides.',
        secondaryCta: 'Explore Experiences',
        trust: '5.0 Rating on TripAdvisor',
        trustAria: 'Read traveler reviews on TripAdvisor',
        highlights: 'Intimate Groups (Max 8) · Executive Mercedes-Benz Vito · Multilingual Local Experts',
        guide: 'English, Portuguese & Spanish available',
        price: '',
        priceLink: 'Explore all experiences ↓',
        imageAlt: 'Travellers on a luxury Sintra tour along the Atlantic coast'
      },
      socialProof: {
        title: 'Recognized for Excellence in Portugal',
        items: [
          { text: 'TripAdvisor Excellence 5.0', icon: '★ 5.0 Rating' },
          { text: 'Google Reviews 5.0 Rated', icon: '★ 5.0 Verified' },
          { text: 'Max 8 Guests VIP Group', icon: 'Executive Comfort' },
          { text: 'Multilingual Expert Guides', icon: 'EN · ES · PT' }
        ]
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
        kicker: 'Our Philosophy & Team',
        title: 'Planned Locally. Hosted with Care.',
        text: 'Every itinerary is crafted with insider knowledge and realistic timing. From our base in Sintra, we manage every logistical detail so your day feels smooth, authentic, and unhurried.',
        signature: 'Boutique Base in Sintra · Guiding Across Lisbon & Portugal',
        imageAlt: 'Our professional local team overlooking the Atlantic coast near Sintra'
      },
      offers: {
        kicker: 'Curated Collection',
        title: 'Select Your Experience',
        description: 'Intimate itineraries tailored for discerning travellers who appreciate comfort, culture, and context.',
        filters: [
          { key: 'all', label: 'All Experiences' },
          { key: 'van', label: 'Luxury Van Journeys' },
          { key: 'wine', label: 'Wine & Gastronomy' },
          { key: 'walking', label: 'Historic Walking' }
        ],
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
            id: 'sintra-coast', kind: 'van', category: 'van', badge: 'Signature Experience',
            name: 'Sintra, Pena, Cabo da Roca & Cascais',
            tag: '7.5 Hours · Max 8 Guests',
            tags: ['Max 8 Guests', 'Mercedes-Benz VIP', 'Local Expert'],
            stops: 'Sintra Station · Pena Palace · Historic Sintra · Cabo da Roca · Cascais',
            fit: 'The quintessential Sintra journey: royal palaces, ancient forests, Europe’s westernmost point, and the Atlantic coastline in one beautifully paced day.',
            meeting: 'Sintra Train Station',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, bottled water and insurance',
            extras: 'Palace tickets and lunch',
            price: '€119', priceValue: '119', currency: 'EUR',
            places: 'Sintra Train Station · Pena Palace · Sintra Historic Centre · Cabo da Roca · Cascais',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Cabo da Roca cliffs on the luxury Sintra journey'
          },
          {
            id: 'fatima-nazare-obidos', kind: 'van', category: 'van', badge: 'Cultural Heritage',
            name: 'Fátima, Batalha, Nazaré & Óbidos',
            tag: '9 Hours · Max 8 Guests',
            tags: ['Max 8 Guests', 'UNESCO Heritage', 'Ginja Tasting'],
            stops: 'Fátima Sanctuary · Batalha Monastery · Nazaré Coast · Óbidos Castle',
            fit: 'Spiritual heritage, UNESCO Gothic architecture, Atlantic sea cliffs, and a medieval walled town—the premier cultural day north of Lisbon.',
            meeting: 'Restauradores Square, Lisbon',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, bottled water, ginjinha tasting and insurance',
            extras: 'Monument tickets and lunch',
            price: '€179', priceValue: '179', currency: 'EUR',
            places: 'Restauradores Square · Fátima Sanctuary · Batalha Monastery · Nazaré · Óbidos',
            image: 'site/images/tour-fatima-obidos-736.webp',
            imageAlt: 'Basilica of Our Lady of the Rosary in Fátima',
            imagePosition: 'center 38%'
          },
          {
            id: 'arrabida-wine', kind: 'van', category: 'wine', badge: 'Exclusive Wine & Gastronomy',
            name: 'Arrábida, Azeitão & Two Estate Wineries',
            tag: '8 Hours · Max 8 Guests',
            tags: ['Max 8 Guests', 'Private Estates', 'Tutored Tastings'],
            stops: 'Palmela · Azeitão · Arrábida Natural Park · Sesimbra',
            fit: 'Two private estate winery visits with tutored tastings, dramatic mountain ocean vistas, and a relaxed seafood lunch on the coast.',
            meeting: 'Restauradores Square, Lisbon',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, two winery visits with tutored tastings and insurance',
            extras: 'Lunch',
            price: '€169', priceValue: '169', currency: 'EUR',
            places: 'Restauradores Square · Palmela · Azeitão · Arrábida Natural Park · Sesimbra',
            image: 'site/images/tour-arrabida-wine-960.webp',
            imageAlt: 'Guided group walking through a private vineyard in the Arrábida wine region'
          },
          {
            id: 'sintra-walk', kind: 'walking', category: 'walking', badge: 'Local Insider Walk',
            name: 'Sintra Stories, Old Town & Forest',
            tag: '3 Hours · Intimate Group',
            tags: ['Intimate Group', 'Local Historian', 'Pastry Tasting'],
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
            id: 'lisbon-walk', kind: 'walking', category: 'walking', badge: 'Essential Lisbon',
            name: 'Lisbon Essentials: Baixa, Chiado & Alfama',
            tag: '3 Hours · Intimate Group',
            tags: ['Intimate Group', 'Local Expert', 'Pastel de Nata'],
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
        ratingLabel: '5.0 out of 5 rating'
      },
      leadMagnet: {
        kicker: 'Exclusive Portugal Insider Access',
        title: 'Download Our Free VIP Portugal Guide',
        subtitle: 'Uncover secret Atlantic viewpoints, Michelin-starred wine estates, and private palace access curated by our local team.',
        emailPlaceholder: 'Enter your email or WhatsApp number',
        buttonText: 'Get Free VIP Guide',
        privacyText: '100% Private. We respect your inbox and privacy.'
      },
      whatsappWidget: {
        status: 'Online · VIP Concierge Service',
        title: 'Have a Question About Portugal?',
        actionText: 'Chat on WhatsApp'
      },
      faq: {
        kicker: 'Essential Information',
        title: 'Frequently Asked Questions',
        items: [
          { question: 'What is included in each experience?', answer: 'All journeys include a dedicated expert local guide, comprehensive legal insurance, and bottled water. Van itineraries feature transport in an executive 2023 Mercedes-Benz Vito. Wine tours include private estate visits and tutored tastings.' },
          { question: 'What is the group size and vehicle comfort?', answer: 'We strictly limit van journeys to a maximum of 8 guests to guarantee individual space, effortless conversation, and personalized attention in a 2023 Mercedes-Benz Vito.' },
          { question: 'What is the cancellation policy?', answer: 'We offer a full refund for cancellations made at least 24 hours prior to departure.' },
          { question: 'Where are the departure meeting points?', answer: 'Sintra experiences meet conveniently at Sintra Train Station. Lisbon, Fátima, and Arrábida departures meet at central, elegant city locations.' },
          { question: 'Can we request a custom private departure?', answer: 'Yes. In addition to our curated small-group departures, we offer fully bespoke private journeys tailored to your preferences.' }
        ]
      },
      finalCta: {
        kicker: 'Plan Your Travel Dates',
        title: 'Ready to Experience Portugal?',
        text: 'Share your travel dates and group details with us. Our local concierge will confirm departure availability for you.',
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
        title: 'Tours de Lujo en Grupo Reducido y Privados en Sintra y Lisboa | About Culture Things',
        description: 'Rutas exclusivas en vehículos de alta gama Mercedes-Benz Vito y paseos guiados privados en Sintra, Lisboa y alrededores.',
        keywords: 'tours de lujo Sintra, tour grupo reducido Lisboa, sintra privado mercedes vito, tour fatima obidos exclusivo, cata de vinos arrabida',
        author: 'About Culture Things',
        ogTitle: 'Tours de Lujo en Grupo Reducido y Privados en Sintra y Lisboa',
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
        hero: 'Diseña tu Experiencia Privada',
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
        kicker: 'Rutas Exclusivas & Experiencias Privadas',
        title: 'Portugal, con la elegancia y atención que mereces.',
        subtitle: 'Rutas exclusivas en grupo reducido en una Mercedes-Benz Vito de lujo y paseos guiados con expertos locales.',
        secondaryCta: 'Explorar Experiencias',
        trust: 'Valoración 5.0 en TripAdvisor',
        trustAria: 'Leer reseñas en TripAdvisor',
        highlights: 'Grupos Íntimos (Máx. 8) · Flota Mercedes-Benz Vito · Guías Locales Expertos',
        guide: 'Inglés, portugués y español disponibles',
        price: '',
        priceLink: 'Explorar todas las experiencias ↓',
        imageAlt: 'Viajeros en un tour de lujo por la costa atlántica'
      },
      socialProof: {
        title: 'Reconocidos por la Excelencia en Portugal',
        items: [
          { text: 'TripAdvisor Excelencia 5.0', icon: '★ 5.0 Rating' },
          { text: 'Google Reviews 5.0 Verificado', icon: '★ 5.0 Verificado' },
          { text: 'Grupos VIP Máx. 8 Personas', icon: 'Confort Ejecutivo' },
          { text: 'Guías Locales Multilingües', icon: 'EN · ES · PT' }
        ]
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
        kicker: 'Nuestra Filosofía y Equipo',
        title: 'Planificado con Precisión Local. Acompañado con Esmero.',
        text: 'Cada ruta nace del conocimiento profundo del territorio y de tiempos realistas. Desde nuestra base en Sintra coordinamos cada detalle para que su día sea fluido, elegante y memorable.',
        signature: 'Base Boutique en Sintra · Guías en Lisboa y Portugal',
        imageAlt: 'Equipo profesional de guías locales en la costa de Sintra'
      },
      offers: {
        kicker: 'Colección Seleccionada',
        title: 'Elija Su Experiencia',
        description: 'Itinerarios diseñados para viajeros exigentes que aprecian el confort, la cultura y el detalle.',
        filters: [
          { key: 'all', label: 'Todas las Experiencias' },
          { key: 'van', label: 'Rutas en Van de Lujo' },
          { key: 'wine', label: 'Vino & Gastronomía' },
          { key: 'walking', label: 'Rutas a Pie' }
        ],
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
            id: 'sintra-coast', kind: 'van', category: 'van', badge: 'Experiencia Emblemática',
            name: 'Sintra, Pena, Cabo da Roca & Cascais',
            tag: '7,5 Horas · Máx. 8 Viajeros',
            tags: ['Máx. 8 Personas', 'Transporte VIP Mercedes', 'Guía Local Experto'],
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
            id: 'fatima-nazare-obidos', kind: 'van', category: 'van', badge: 'Patrimonio Cultural',
            name: 'Fátima, Batalha, Nazaré & Óbidos',
            tag: '9 Horas · Máx. 8 Viajeros',
            tags: ['Máx. 8 Personas', 'Patrimonio UNESCO', 'Cata de Ginjinha'],
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
            id: 'arrabida-wine', kind: 'van', category: 'wine', badge: 'Vino & Gastronomía Exclusiva',
            name: 'Arrábida, Azeitão & Dos Bodegas',
            tag: '8 Horas · Máx. 8 Viajeros',
            tags: ['Máx. 8 Personas', 'Bodegas Privadas', 'Catas Guiadas'],
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
            id: 'sintra-walk', kind: 'walking', category: 'walking', badge: 'Ruta de Autor',
            name: 'Historias de Sintra, Casco Antiguo & Bosque',
            tag: '3 Horas · Grupo Reducido',
            tags: ['Grupo Íntimo', 'Historiador Local', 'Dulce Tradicional'],
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
            id: 'lisbon-walk', kind: 'walking', category: 'walking', badge: 'Lisboa Esencial',
            name: 'Lisboa Esencial: Baixa, Chiado & Alfama',
            tag: '3 Horas · Grupo Reducido',
            tags: ['Grupo Íntimo', 'Guía Experto', 'Pastel de Nata'],
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
        kicker: 'Testimonios de Viajeros VIP',
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
        ratingLabel: '5.0 de 5 valoración media'
      },
      leadMagnet: {
        kicker: 'Acceso Exclusivo Insider Portugal',
        title: 'Descarga Gratis la Guía VIP de Portugal',
        subtitle: 'Descubre miradores atlánticos secretos, bodegas con estrella Michelin y palacios privados seleccionados por nuestros guías locales.',
        emailPlaceholder: 'Introduce tu correo o WhatsApp',
        buttonText: 'Descargar Guía VIP',
        privacyText: '100% Privado. Respetamos tu bandeja de entrada.'
      },
      whatsappWidget: {
        status: 'En Línea · Concierge VIP',
        title: '¿Tienes Dudas Sobre Tu Viaje a Portugal?',
        actionText: 'Chatear por WhatsApp'
      },
      faq: {
        kicker: 'Información Esencial',
        title: 'Preguntas Frecuentes',
        items: [
          { question: '¿Qué incluye cada experiencia?', answer: 'Todas nuestras experiencias incluyen un guía local dedicado, seguro completo de viajeros y agua embotellada. Los recorridos en van se realizan en una Mercedes-Benz Vito 2023 ejecutiva.' },
          { question: '¿Cuál es el tamaño del grupo y el confort del vehículo?', answer: 'Limitamos estrictamente nuestras salidas en van a un máximo de 8 huéspedes para garantizar espacio individual, confort y atención personalizada.' },
          { question: '¿Cuál es la política de cancelación?', answer: 'Reembolso completo para cancelaciones realizadas al menos 24 horas antes de la salida.' },
          { question: '¿Dónde son los puntos de encuentro?', answer: 'Las salidas de Sintra se realizan en la Estación de Sintra. Las salidas desde Lisboa, Fátima y Arrábida se coordinan en puntos céntricos y elegantes.' }
        ]
      },
      finalCta: {
        kicker: 'Planifique Sus Fechas',
        title: '¿Listo para Descubrir Portugal?',
        text: 'Comparta sus fechas y detalles con nuestro concierge local. Confirmaremos la disponibilidad de su salida.',
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
        title: 'Tours de Luxo em Grupo Reduzido e Privados em Sintra e Lisboa | About Culture Things',
        description: 'Viagens exclusivas em veículos de topo Mercedes-Benz Vito e passeios guiados privados em Sintra, Lisboa e arredores.',
        keywords: 'tours de luxo Sintra, tour grupo reduzido Lisboa, sintra privado mercedes vito, tour fatima obidos exclusivo, prova de vinhos arrabida',
        author: 'About Culture Things',
        ogTitle: 'Tours de Luxo em Grupo Reduzido e Privados em Sintra e Lisboa',
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
        hero: 'Desenhe a Sua Experiência Privada',
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
        kicker: 'Viagens Exclusivas & Experiências Privadas',
        title: 'Portugal, com a elegância e atenção que merece.',
        subtitle: 'Viagens exclusivas em grupo reduzido numa Mercedes-Benz Vito de luxo e passeios guiados com especialistas locais.',
        secondaryCta: 'Explorar Experiências',
        trust: 'Classificação 5.0 no TripAdvisor',
        trustAria: 'Ler avaliações no TripAdvisor',
        highlights: 'Grupos Íntimos (Máx. 8) · Frota Mercedes-Benz Vito · Guias Locais Especialistas',
        guide: 'Inglês, português e espanhol disponíveis',
        price: '',
        priceLink: 'Explorar todas as experiências ↓',
        imageAlt: 'Viajantes num tour de luxo na costa atlântica'
      },
      socialProof: {
        title: 'Reconhecidos pela Excelência em Portugal',
        items: [
          { text: 'TripAdvisor Excelência 5.0', icon: '★ 5.0 Rating' },
          { text: 'Google Reviews 5.0 Verificado', icon: '★ 5.0 Verificado' },
          { text: 'Grupos VIP Máx. 8 Pessoas', icon: 'Conforto Executivo' },
          { text: 'Guias Locais Multilingues', icon: 'EN · ES · PT' }
        ]
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
        kicker: 'A Nossa Filosofia e Equipa',
        title: 'Planeado com Precisão Local. Acompanhado com Rigor.',
        text: 'Cada viagem nasce do conhecimento profundo do território e de horários realistas. A partir da nossa base em Sintra, coordenamos cada detalhe para que o seu dia seja fluido, elegante e inesquecível.',
        signature: 'Base Boutique em Sintra · Guias em Lisboa e Portugal',
        imageAlt: 'Equipa profissional de guias locais na costa de Sintra'
      },
      offers: {
        kicker: 'Coleção Selecionada',
        title: 'Escolha a Sua Experiência',
        description: 'Itinerários desenhados para viajantes exigentes que valorizam o conforto, a cultura e o detalhe.',
        filters: [
          { key: 'all', label: 'Todas as Experiências' },
          { key: 'van', label: 'Viagens em Van de Luxo' },
          { key: 'wine', label: 'Vinho & Gastronomia' },
          { key: 'walking', label: 'Passeios a Pé' }
        ],
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
            id: 'sintra-coast', kind: 'van', category: 'van', badge: 'Experiência Emblemática',
            name: 'Sintra, Pena, Cabo da Roca & Cascais',
            tag: '7,5 Horas · Máx. 8 Viajantes',
            tags: ['Máx. 8 Pessoas', 'Transporte VIP Mercedes', 'Guia Local Especialista'],
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
            id: 'fatima-nazare-obidos', kind: 'van', category: 'van', badge: 'Património Cultural',
            name: 'Fátima, Batalha, Nazaré & Óbidos',
            tag: '9 Horas · Máx. 8 Viajantes',
            tags: ['Máx. 8 Pessoas', 'Património UNESCO', 'Prova de Ginjinha'],
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
            id: 'arrabida-wine', kind: 'van', category: 'wine', badge: 'Vinho & Gastronomia Exclusiva',
            name: 'Arrábida, Azeitão & Duas Adegas',
            tag: '8 Horas · Máx. 8 Viajantes',
            tags: ['Máx. 8 Pessoas', 'Adegas Privadas', 'Provas Orientadas'],
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
            id: 'sintra-walk', kind: 'walking', category: 'walking', badge: 'Rota de Autor',
            name: 'Histórias de Sintra, Vila Velha & Floresta',
            tag: '3 Horas · Grupo Reduzido',
            tags: ['Grupo Íntimo', 'Historiador Local', 'Doce Tradicional'],
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
            id: 'lisbon-walk', kind: 'walking', category: 'walking', badge: 'Lisboa Essencial',
            name: 'Lisboa Essencial: Baixa, Chiado & Alfama',
            tag: '3 Horas · Grupo Reducido',
            tags: ['Grupo Íntimo', 'Guia Especialista', 'Pastel de Nata'],
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
        kicker: 'Testemunhos de Viajantes VIP',
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
        ratingLabel: '5.0 de 5 classificação média'
      },
      leadMagnet: {
        kicker: 'Acesso Exclusivo Insider Portugal',
        title: 'Descarregue Grátis o Guia VIP de Portugal',
        subtitle: 'Descubra miradouros atlânticos secretos, adegas com estrela Michelin e palácios privados selecionados pelos nossos guias locais.',
        emailPlaceholder: 'Introduza o seu email ou WhatsApp',
        buttonText: 'Descarregar Guia VIP',
        privacyText: '100% Privado. Respeitamos a sua caixa de entrada.'
      },
      whatsappWidget: {
        status: 'Online · Concierge VIP',
        title: 'Tem Dúvidas Sobre a Sua Viagem a Portugal?',
        actionText: 'Conversar no WhatsApp'
      },
      faq: {
        kicker: 'Informação Essencial',
        title: 'Perguntas Frecuentes',
        items: [
          { question: 'O que está incluído em cada experiência?', answer: 'Todas as nossas experiências incluem um guia local dedicado, seguro completo de viajantes e água engarrafada. Os percursos em van são realizados numa Mercedes-Benz Vito 2023 executiva.' },
          { question: 'Qual é o tamanho do grupo e o conforto do veículo?', answer: 'Limitamos rigorosamente as nossas saídas em van a um máximo de 8 convidados para garantir espaço individual, conforto e atenção personalizada.' },
          { question: 'Qual é a política de cancelamento?', answer: 'Reembolso total para cancelamentos efetuados com pelo menos 24 horas de antecedência em relação à partida.' },
          { question: 'Onde são os pontos de encontro?', answer: 'As saídas de Sintra realizam-se na Estação de Sintra. As saídas de Lisboa, Fátima e Arrábida encontram-se em pontos centrais e elegantes.' }
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
