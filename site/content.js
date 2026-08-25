/**
 * Project content — About Culture Things.
 * High-ticket luxury travel positioning, social proof, tour filters, female guest reviews, and booking integration.
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
    legal: {
      privacy: 'https://aboutculturethings.com/privacy',
      terms: 'https://aboutculturethings.com/terms',
      cookies: 'https://aboutculturethings.com/cookies'
    }
  },
  reviewItems: [
    {
      name: 'Sarah M.',
      country: 'United States 🇺🇸',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      text: 'An exquisite experience from start to finish. Traveling in the Mercedes-Benz Vito felt completely private, relaxed, and luxurious.',
      meta: 'TripAdvisor 5.0 · Verified Guest'
    },
    {
      name: 'Elena R.',
      country: 'Spain 🇪🇸',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
      text: 'Experiencia insuperable por Sintra y la costa atlántica. El trato VIP, la comodidad del vehículo ejecutivo y el nivel del guía superaron todas las expectativas.',
      meta: 'TripAdvisor 5.0 · Verified Guest'
    },
    {
      name: 'Sophie B.',
      country: 'France 🇫🇷',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
      text: 'Un service irréprochable. Guide passionné, rythme parfait et sans aucun stress. Recommandé à 100% pour les viajeros exigeants.',
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
        description: 'Curated luxury journeys in executive Mercedes-Benz Vito vehicles in Sintra and Lisbon.',
        keywords: 'Sintra luxury small group tour, Sintra private experience, Fátima Nazaré Óbidos tour, Arrábida wine tour',
        author: 'About Culture Things',
        ogTitle: 'Boutique Small-Group & Private Tours in Sintra & Lisbon',
        ogDescription: 'Exclusive small-group journeys in a luxury Mercedes-Benz Vito with elite local guides.',
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
        nav: 'Book Experience',
        hero: 'Book Exclusive Experience',
        offer: 'Book Experience',
        final: 'Book Your Experience',
        navAria: 'Book experience online',
        fabAria: 'Contact concierge via email or WhatsApp',
        fabTooltip: 'Concierge help'
      },
      hero: {
        kicker: 'Bespoke Small-Group & Private Journeys',
        title: 'Portugal, Experienced in Refined Comfort.',
        subtitle: 'Curated small-group journeys in a luxury Mercedes-Benz Vito hosted by expert local guides.',
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
        description: 'An intimate group size ensures absolute personal comfort, tailored pacing, and genuine cultural engagement without crowds.',
        aria: 'Why choose About Culture Things',
        items: [
          { title: 'Executive Mercedes-Benz Vito', text: 'Travel in a luxury van featuring individual leather seating, dual climate control, and generous personal space.', icon: 'plus' },
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
          { key: 'all', label: 'All Experiences' }
        ],
        vanKicker: 'Luxury Road Journeys',
        vanTitle: 'Small-Group Van Journeys',
        vanDescription: 'Travel in an executive Mercedes-Benz Vito (max 8 guests) with climate control and a dedicated host.',
        trustAria: 'Experience standards',
        trust: ['Intimate groups (Max 8)', 'Executive Mercedes-Benz Vito', 'Expert local host'],
        currencyNote: 'Transparent luxury pricing per guest in EUR. Departures guaranteed with small numbers.',
        currencyLabel: 'Approximate in',
        perGroup: 'per guest',
        directPrice: 'Experience Rate',
        detailsCta: 'Book Experience',
        routeLabel: 'Itinerary',
        meetingLabel: 'Departure Point',
        includesLabel: 'Included',
        extrasLabel: 'Not included',
        items: [
          {
            id: 'tour-a', kind: 'van', category: 'van', badge: 'Signature Experience',
            name: 'Tour A: Sintra, Pena Palace & Atlantic Coast',
            tag: '7.5 Hours · Max 8 Guests',
            tags: ['Max 8 Guests', 'Mercedes-Benz VIP', 'Local Expert'],
            stops: 'Hard Rock Cafe Lisbon · Pena Palace · Historic Sintra · Cabo da Roca · Cascais',
            fit: 'The quintessential Sintra journey: royal palaces, ancient forests, Europe’s westernmost point, and the Atlantic coastline in one beautifully paced day.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, bottled water and insurance',
            extras: 'Palace tickets and lunch',
            price: '€119', priceValue: '119', currency: 'EUR',
            image: 'site/images/tour-full-sintra-coast-640.webp',
            imageAlt: 'Sintra Atlantic coast luxury journey'
          },
          {
            id: 'tour-b', kind: 'van', category: 'van', badge: 'Cultural Heritage',
            name: 'Tour B: Fátima Sanctuary, Batalha & Medieval Óbidos',
            tag: '9 Hours · Max 8 Guests',
            tags: ['Max 8 Guests', 'UNESCO Heritage', 'Ginja Tasting'],
            stops: 'Hard Rock Cafe Lisbon · Fátima Sanctuary · Batalha Monastery · Nazaré Coast · Óbidos Castle',
            fit: 'Spiritual heritage, UNESCO Gothic architecture, Atlantic sea cliffs, and a medieval walled town—the premier cultural day north of Lisbon.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, bottled water, ginjinha tasting and insurance',
            extras: 'Monument tickets and lunch',
            price: '€179', priceValue: '179', currency: 'EUR',
            image: 'site/images/tour-fatima-obidos-736.webp',
            imageAlt: 'Basilica of Our Lady of the Rosary in Fátima',
            imagePosition: 'center 38%'
          },
          {
            id: 'tour-c', kind: 'van', category: 'wine', badge: 'Exclusive Wine & Gastronomy',
            name: 'Tour C: Arrábida Natural Park & Estate Wineries',
            tag: '8 Hours · Max 8 Guests',
            tags: ['Max 8 Guests', 'Private Estates', 'Tutored Tastings'],
            stops: 'Hard Rock Cafe Lisbon · Palmela · Azeitão · Arrábida Natural Park · Sesimbra',
            fit: 'Two private estate winery visits with tutored tastings, dramatic mountain ocean vistas, and a relaxed seafood lunch on the coast.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Expert local driver-guide, Mercedes-Benz Vito luxury van, two winery visits with tutored tastings and insurance',
            extras: 'Lunch',
            price: '€169', priceValue: '169', currency: 'EUR',
            image: 'site/images/tour-arrabida-wine-960.webp',
            imageAlt: 'Guided group walking through a private vineyard in the Arrábida wine region'
          }
        ]
      },
      reviews: {
        kicker: 'Guest Testimonials',
        title: 'What Our Guests Remember',
        trustAria: 'TripAdvisor rating',
        averageLabel: 'average rating',
        trustNote: '5.0 Rating on TripAdvisor',
        gridAria: 'Guest reviews',
        viewAll: 'View All Reviews on TripAdvisor',
        items: [
          {
            name: 'Sarah M.',
            country: 'United States 🇺🇸',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
            text: 'An exquisite experience from start to finish. Traveling in the Mercedes-Benz Vito felt completely private, relaxed, and luxurious.',
            meta: 'TripAdvisor 5.0 · Verified Guest'
          },
          {
            name: 'Elena R.',
            country: 'Spain 🇪🇸',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
            text: 'Unsurpassed day through Sintra and the Atlantic coast. The VIP hospitality, executive vehicle comfort, and local context were outstanding.',
            meta: 'TripAdvisor 5.0 · Verified Guest'
          },
          {
            name: 'Sophie B.',
            country: 'France 🇫🇷',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
            text: 'Flawless service. Knowledgeable host, unhurried pacing, and complete peace of mind. Highly recommended for discerning travelers.',
            meta: 'TripAdvisor 5.0 · Verified Guest'
          },
          {
            name: 'Emma W.',
            country: 'United Kingdom 🇬🇧',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
            text: 'The ultimate way to explore Portugal. Personalized care, stunning scenery, and top-tier luxury hospitality.',
            meta: 'TripAdvisor 5.0 · Verified Guest'
          }
        ]
      },
      faq: {
        kicker: 'Essential Information',
        title: 'Frequently Asked Questions',
        items: [
          { question: 'What is included in each experience?', answer: 'All journeys include a dedicated expert local guide, comprehensive legal insurance, bottled water, and transport in an executive Mercedes-Benz Vito. Wine tours include estate visits and tastings.' },
          { question: 'What is the departure point and time?', answer: 'All tours depart promptly at 09:00 AM from Hard Rock Cafe Lisbon. Exact location details are provided in your confirmation.' },
          { question: 'What is the cancellation policy?', answer: 'We offer free cancellation up to 48 hours before departure for a 100% full refund.' },
          { question: 'How can I contact About Culture Things if I do not use WhatsApp?', answer: 'You can email us directly at aboutculturethings@gmail.com or complete your booking online. Email is our primary communication channel.' }
        ]
      },
      finalCta: {
        kicker: 'Plan Your Departure',
        title: 'Ready to Experience Portugal?',
        text: 'Select your preferred departure date and group details to book your boutique experience.',
        trust: 'Free cancellation up to 48 hours before departure · 5.0 TripAdvisor Rating'
      },
      footer: {
        contactAria: 'Contact',
        description: 'Boutique small-group van journeys in Sintra, Lisbon, and Portugal.',
        location: 'Sintra & Lisbon, Portugal',
        socialLabels: { email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram' }
      }
    },
    es: {
      seo: {
        title: 'Tours de Lujo en Grupo Reducido y Privados en Sintra y Lisboa | About Culture Things',
        description: 'Rutas exclusivas en vehículos de alta gama Mercedes-Benz Vito en Sintra, Lisboa y alrededores.',
        keywords: 'tours de lujo Sintra, tour grupo reducido Lisboa, sintra privado mercedes vito, tour fatima obidos exclusivo',
        author: 'About Culture Things',
        ogTitle: 'Tours de Lujo en Grupo Reducido en Sintra y Lisboa',
        ogDescription: 'Rutas exclusivas en grupo reducido en Mercedes-Benz Vito de lujo con guías locales expertos.',
        twitterTitle: 'Tours de Lujo en Grupo Reducido | About Culture Things',
        twitterDescription: 'Experiencias exclusivas en Mercedes-Benz Vito de lujo desde Lisboa.'
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
        nav: 'Reservar Experiencia',
        hero: 'Reservar Experiencia Exclusiva',
        offer: 'Reservar Experiencia',
        final: 'Reservar Su Salida',
        navAria: 'Reservar experiencia online'
      },
      hero: {
        kicker: 'Rutas Exclusivas & Experiencias Privadas',
        title: 'Portugal, con la elegancia y atención que mereces.',
        subtitle: 'Rutas exclusivas en grupo reducido en una Mercedes-Benz Vito de lujo con guías locales expertos.',
        secondaryCta: 'Explorar Experiencias',
        trust: 'Valoración 5.0 en TripAdvisor',
        highlights: 'Grupos Íntimos (Máx. 8) · Flota Mercedes-Benz Vito · Guías Locales Expertos'
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
        description: 'Un grupo reducido garantiza máximo confort personal, flexibilidad e interacción auténtica sin prisas.',
        aria: 'Por qué elegir About Culture Things',
        items: [
          { title: 'Mercedes-Benz Vito Ejecutiva', text: 'Viajen en una van de alta gama Mercedes-Benz Vito con asientos individuales de cuero y amplio espacio personal.', icon: 'plus' },
          { title: 'Anfitrión Local Dedicado', text: 'Un guía-conductor local se encarga de la fluidez del día, la seguridad y de transmitir la rica historia.', icon: 'pin' },
          { title: 'Itinerarios de Autor', text: 'Tiempos realistas y lugares auténticos seleccionados con precisión para disfrutar de cada destino.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'Nuestra Filosofía y Equipo',
        title: 'Planificado con Precisión Local. Acompañado con Esmero.',
        text: 'Cada ruta nace del conocimiento profundo del territorio y de tiempos realistas. Desde nuestra base en Sintra coordinamos cada detalle para que su día sea fluido, elegante y memorable.',
        signature: 'Base Boutique en Sintra · Guías en Lisboa y Portugal'
      },
      offers: {
        kicker: 'Colección Seleccionada',
        title: 'Elija Su Experiencia',
        description: 'Itinerarios diseñados para viajeros exigentes que aprecian el confort, la cultura y el detalle.',
        filters: [{ key: 'all', label: 'Todas las Experiencias' }],
        vanKicker: 'Rutas en Van de Lujo',
        vanTitle: 'Tours de Día en Grupo Reducido',
        vanDescription: 'Vehículo ejecutivo Mercedes-Benz Vito (máximo 8 plazas) con ambiente climatizado y anfitrión local.',
        currencyNote: 'Tarifas transparentes por persona en EUR. Salidas garantizadas en grupo reducido.',
        perGroup: 'por viajero',
        directPrice: 'Tarifa de Experiencia',
        detailsCta: 'Reservar Experiencia',
        meetingLabel: 'Punto de Encuentro',
        items: [
          {
            id: 'tour-a', kind: 'van', category: 'van', badge: 'Experiencia Emblemática',
            name: 'Tour A: Sintra, Palacio de Pena y Costa Atlántica',
            tag: '7,5 Horas · Máx. 8 Viajeros',
            tags: ['Máx. 8 Personas', 'Transporte VIP Mercedes', 'Guía Local Experto'],
            stops: 'Hard Rock Cafe Lisboa · Palacio de Pena · Sintra Histórica · Cabo da Roca · Cascais',
            fit: 'La ruta imprescindible: palacios reales, bosque de leyenda, el extremo occidental de Europa y la costa atlántica en un día perfectamente organizado.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Guía-conductor local experto, Mercedes-Benz Vito de lujo, agua embotellada y seguro',
            extras: 'Entradas a palacios y almuerzo',
            price: '€119', priceValue: '119', currency: 'EUR',
            image: 'site/images/tour-full-sintra-coast-640.webp'
          },
          {
            id: 'tour-b', kind: 'van', category: 'van', badge: 'Patrimonio Cultural',
            name: 'Tour B: Santuario de Fátima, Batalha y Óbidos Medieval',
            tag: '9 Horas · Máx. 8 Viajeros',
            tags: ['Máx. 8 Personas', 'Patrimonio UNESCO', 'Cata de Ginjinha'],
            stops: 'Hard Rock Cafe Lisboa · Santuario de Fátima · Monasterio de Batalha · Costa de Nazaré · Villa de Óbidos',
            fit: 'Patrimonio espiritual, arquitectura gótica UNESCO, acantilados atlánticos y la villa medieval amurallada en la ruta norte más completa.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Guía-conductor local experto, Mercedes-Benz Vito de lujo, agua, cata de ginjinha y seguro',
            extras: 'Entradas a monumentos y almuerzo',
            price: '€179', priceValue: '179', currency: 'EUR',
            image: 'site/images/tour-fatima-obidos-736.webp', imagePosition: 'center 38%'
          },
          {
            id: 'tour-c', kind: 'van', category: 'wine', badge: 'Vino & Gastronomía Exclusiva',
            name: 'Tour C: Parque Natural de Arrábida y Bodegas Privadas',
            tag: '8 Horas · Máx. 8 Viajeros',
            tags: ['Máx. 8 Personas', 'Bodegas Privadas', 'Catas Guiadas'],
            stops: 'Hard Rock Cafe Lisboa · Palmela · Azeitão · Parque Natural de Arrábida · Sesimbra',
            fit: 'Visita privada a dos fincas vinícolas con catas comentadas, vistas panorámicas entre mar y montaña, y almuerzo marinero en la costa.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Guía-conductor local experto, Mercedes-Benz Vito de lujo, dos visitas a bodegas con catas y seguro',
            extras: 'Almuerzo',
            price: '€169', priceValue: '169', currency: 'EUR',
            image: 'site/images/tour-arrabida-wine-960.webp'
          }
        ]
      },
      reviews: {
        kicker: 'Testimonios de Viajantes',
        title: 'Lo Que Recuerdan Nuestros Clientes',
        trustNote: 'Valoración 5.0 en TripAdvisor',
        viewAll: 'Ver Todas las Reseñas en TripAdvisor',
        items: [
          {
            name: 'Sarah M.',
            country: 'Estados Unidos 🇺🇸',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
            text: 'Una experiencia exquisita de principio a fin. Viajar en la Mercedes-Benz Vito fue totalmente privado, relajado y de gran lujo.',
            meta: 'TripAdvisor 5.0 · Cliente Verificada'
          },
          {
            name: 'Elena R.',
            country: 'España 🇪🇸',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
            text: 'Experiencia insuperable por Sintra y la costa atlántica. El trato VIP, la comodidad del vehículo ejecutivo y el nivel del guía superaron todas las expectativas.',
            meta: 'TripAdvisor 5.0 · Cliente Verificada'
          },
          {
            name: 'Sophie B.',
            country: 'Francia 🇫🇷',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
            text: 'Un servicio impecable. Guía apasionado, ritmo perfecto sin ningún estrés y atención al detalle. 100% recomendado para viajeros exigentes.',
            meta: 'TripAdvisor 5.0 · Cliente Verificada'
          },
          {
            name: 'Emma W.',
            country: 'Reino Unido 🇬🇧',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
            text: 'La mejor manera de explorar Portugal. Atención personalizada, paisajes imponentes y hospitalidad de lujo de primer nivel.',
            meta: 'TripAdvisor 5.0 · Cliente Verificada'
          }
        ]
      },
      faq: {
        kicker: 'Información Esencial',
        title: 'Preguntas Frecuentes',
        items: [
          { question: '¿Qué está incluido en cada experiencia?', answer: 'Todas las rutas incluyen un guía local dedicado, seguro completo, agua embotellada y transporte en Mercedes-Benz Vito ejecutiva.' },
          { question: '¿Cuál es el punto de salida?', answer: 'Todas las salidas comienzan puntualmente a las 09:00 AM en el Hard Rock Cafe Lisbon.' },
          { question: '¿Cuál es la política de cancelación?', answer: 'Ofrecemos cancelación gratuita hasta 48 horas antes de la salida para un reembolso del 100%.' },
          { question: '¿Cómo puedo contactar si no uso WhatsApp?', answer: 'Puede escribirnos directamente a aboutculturethings@gmail.com o reservar online. El email es nuestro medio principal.' }
        ]
      },
      finalCta: {
        kicker: 'Planifique Su Salida',
        title: '¿Listo para Descubrir Portugal?',
        text: 'Seleccione la fecha y datos del grupo para reservar su experiencia boutique.',
        trust: 'Cancelación gratuita hasta 48 horas antes de la salida · Valoración 5.0 en TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        description: 'Experiencias de lujo en grupo reducido por Sintra, Lisboa y Portugal.',
        location: 'Sintra y Lisboa, Portugal',
        socialLabels: { email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram' }
      }
    },
    pt: {
      seo: {
        title: 'Tours de Luxo em Grupo Reduzido e Privados em Sintra e Lisboa | About Culture Things',
        description: 'Viagens exclusivas em veículos de topo Mercedes-Benz Vito em Sintra, Lisboa e arredores.',
        keywords: 'tours de luxo Sintra, tour grupo reduzido Lisboa, sintra privado mercedes vito, tour fatima obidos exclusivo',
        author: 'About Culture Things',
        ogTitle: 'Tours de Luxo em Grupo Reduzido em Sintra e Lisboa',
        ogDescription: 'Viagens exclusivas em grupo reduzido numa Mercedes-Benz Vito de luxo com guias locais.'
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
        nav: 'Reservar Experiência',
        hero: 'Reservar Experiência Exclusiva',
        offer: 'Reservar Experiência',
        final: 'Reservar a Sua Saída',
        navAria: 'Reservar experiência online'
      },
      hero: {
        kicker: 'Viagens Exclusivas & Experiências Privadas',
        title: 'Portugal, com a elegância e atenção que merece.',
        subtitle: 'Viagens exclusivas em grupo reduzido numa Mercedes-Benz Vito de luxo com guias locais.',
        secondaryCta: 'Explorar Experiências',
        trust: 'Classificação 5.0 no TripAdvisor',
        highlights: 'Grupos Íntimos (Máx. 8) · Frota Mercedes-Benz Vito · Guias Locais Especialistas'
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
        description: 'Um grupo reduzido garante máximo conforto pessoal, flexibilidade e atenção dedicada.',
        aria: 'Porquê escolher About Culture Things',
        items: [
          { title: 'Mercedes-Benz Vito Executiva', text: 'Viajem numa van de gama alta Mercedes-Benz Vito com lugares individuais em pele e ambiente climatizado.', icon: 'plus' },
          { title: 'Anfitrião Local Dedicado', text: 'Um guia-motorista local assegura o conforto do dia, a segurança e a transmissão da história.', icon: 'pin' },
          { title: 'Itinerários Selecionados', text: 'Horários ponderados e locais autênticos selecionados para desfrutar de cada destino.', icon: 'bag' }
        ]
      },
      story: {
        kicker: 'A Nossa Filosofia e Equipa',
        title: 'Planeado com Precisão Local. Acompanhado com Rigor.',
        text: 'Cada viagem nasce do conhecimento profundo do território e de horários realistas. Desde a nossa base em Sintra, coordenamos cada detalhe.',
        signature: 'Base Boutique em Sintra · Guias em Lisboa e Portugal'
      },
      offers: {
        kicker: 'Coleção Selecionada',
        title: 'Escolha a Sua Experiência',
        description: 'Itinerários desenhados para viajantes exigentes que valorizam o conforto, a cultura e o detalhe.',
        filters: [{ key: 'all', label: 'Todas as Experiências' }],
        vanKicker: 'Viagens em Van de Luxo',
        vanTitle: 'Tours de Dia em Grupo Reduzido',
        vanDescription: 'Veículo executivo Mercedes-Benz Vito (máximo 8 lugares) com ambiente climatizado e guia local.',
        currencyNote: 'Tarifas transparentes por visitante em EUR. Saídas garantidas em grupo reduzido.',
        perGroup: 'por visitante',
        directPrice: 'Tarifa de Experiência',
        detailsCta: 'Reservar Experiência',
        meetingLabel: 'Ponto de Encontro',
        items: [
          {
            id: 'tour-a', kind: 'van', category: 'van', badge: 'Experiência Emblemática',
            name: 'Tour A: Sintra, Palácio da Pena e Costa Atlântica',
            tag: '7,5 Horas · Máx. 8 Viajantes',
            tags: ['Máx. 8 Pessoas', 'Transporte VIP Mercedes', 'Guia Local Especialista'],
            stops: 'Hard Rock Cafe Lisboa · Palácio da Pena · Sintra Histórica · Cabo da Roca · Cascais',
            fit: 'A viagem fundamental: palácios reais, floresta secular, o ponto mais ocidental da Europa e a costa atlântica num dia perfeitamente ritmado.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Guia-motorista local especialista, Mercedes-Benz Vito de luxo, água engarrafada e seguro',
            extras: 'Bilhetes para palácios e almoço',
            price: '€119', priceValue: '119', currency: 'EUR',
            image: 'site/images/tour-full-sintra-coast-640.webp'
          },
          {
            id: 'tour-b', kind: 'van', category: 'van', badge: 'Património Cultural',
            name: 'Tour B: Santuário de Fátima, Batalha e Óbidos Medieval',
            tag: '9 Horas · Máx. 8 Viajantes',
            tags: ['Máx. 8 Pessoas', 'Património UNESCO', 'Prova de Ginjinha'],
            stops: 'Hard Rock Cafe Lisboa · Santuário de Fátima · Mosteiro da Batalha · Costa da Nazaré · Vila de Óbidos',
            fit: 'Património espiritual, arquitetura gótica UNESCO, falésias atlânticas e a vila medieval amuralhada na rota norte mais completa.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Guia-motorista local especialista, Mercedes-Benz Vito de luxo, água, prova de ginjinha e seguro',
            extras: 'Bilhetes para monumentos e almoço',
            price: '€179', priceValue: '179', currency: 'EUR',
            image: 'site/images/tour-fatima-obidos-736.webp', imagePosition: 'center 38%'
          },
          {
            id: 'tour-c', kind: 'van', category: 'wine', badge: 'Vinho & Gastronomia Exclusiva',
            name: 'Tour C: Parque Natural da Arrábida e Adegas Privadas',
            tag: '8 Horas · Máx. 8 Viajantes',
            tags: ['Máx. 8 Pessoas', 'Adegas Privadas', 'Provas Orientadas'],
            stops: 'Hard Rock Cafe Lisboa · Palmela · Azeitão · Parque Natural da Arrábida · Sesimbra',
            fit: 'Visita privada a duas adegas históricas com provas orientadas, panoramas deslumbrantes da serra ao mar e almoço gastronómico na costa.',
            meeting: '09:00 — Hard Rock Cafe Lisbon',
            includes: 'Guia-motorista local especialista, Mercedes-Benz Vito de luxo, duas visitas a adegas com provas e seguro',
            extras: 'Almoço',
            price: '€169', priceValue: '169', currency: 'EUR',
            image: 'site/images/tour-arrabida-wine-960.webp'
          }
        ]
      },
      reviews: {
        kicker: 'Testemunhos de Viajantes',
        title: 'O Que os Nossos Convidados Recordam',
        trustNote: 'Classificação 5.0 no TripAdvisor',
        viewAll: 'Ver Todas as Avaliações no TripAdvisor',
        items: [
          {
            name: 'Sarah M.',
            country: 'Estados Unidos 🇺🇸',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
            text: 'Uma experiência requintada do início ao fim. Viajar na Mercedes-Benz Vito foi totalmente privado, relaxado e de grande luxo.',
            meta: 'TripAdvisor 5.0 · Convidada Verificada'
          },
          {
            name: 'Elena R.',
            country: 'Espanha 🇪🇸',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
            text: 'Experiência insuperável por Sintra e pela costa atlântica. O atendimento VIP, o conforto do veículo executivo e o conhecimento foram soberbos.',
            meta: 'TripAdvisor 5.0 · Convidada Verificada'
          },
          {
            name: 'Sophie B.',
            country: 'França 🇫🇷',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
            text: 'Serviço impecável. Guia apaixonado, ritmo perfeito sem qualquer stress e atenção aos detalhes. Recomendado a 100% para viajantes exigentes.',
            meta: 'TripAdvisor 5.0 · Convidada Verificada'
          },
          {
            name: 'Emma W.',
            country: 'Reino Unido 🇬🇧',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
            text: 'A melhor forma de explorar Portugal. Atenção personalizada, paisagens deslumbrantes e hospitalidade de luxo de primeiro nível.',
            meta: 'TripAdvisor 5.0 · Convidada Verificada'
          }
        ]
      },
      faq: {
        kicker: 'Informação Essencial',
        title: 'Perguntas Frequentes',
        items: [
          { question: 'O que está incluído em cada experiência?', answer: 'Todas as nossas experiências incluem um guia local dedicado, seguro completo de viajantes, água engarrafada e transporte em Mercedes-Benz Vito executiva.' },
          { question: 'Onde é o ponto de encontro?', answer: 'Todas as saídas realizam-se pontualmente às 09:00 AM no Hard Rock Cafe Lisbon.' },
          { question: 'Qual é a política de cancelamento?', answer: 'Cancelamento gratuito até 48 horas antes da saída para um reembolso total de 100%.' },
          { question: 'Como posso contactar se não usar WhatsApp?', answer: 'Pode enviar email para aboutculturethings@gmail.com ou reservar online. O email é o nosso meio principal.' }
        ]
      },
      finalCta: {
        kicker: 'Planeie a Sua Saída',
        title: 'Pronto para Descobrir Portugal?',
        text: 'Selecione a data e os detalhes do seu grupo para reservar a sua viagem boutique.',
        trust: 'Cancelamento gratuito até 48h antes da saída · Classificação 5.0 no TripAdvisor'
      },
      footer: {
        contactAria: 'Contacto',
        description: 'Experiências de luxo em grupo reduzido por Sintra, Lisboa e Portugal.',
        location: 'Sintra e Lisboa, Portugal',
        socialLabels: { email: 'Email', tripadvisor: 'TripAdvisor', instagram: 'Instagram' }
      }
    }
  }
};

window.SITE_CONTENT = SITE_CONTENT;
