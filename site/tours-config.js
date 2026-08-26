/**
 * Centralized Tours & Experiences Configuration — About Culture Things
 * Focused product line: two private road tours + one private walking tour.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.TOURS_CONFIG = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return {
    meetingPoint: {
      time: '09:00',
      location: 'Lisbon / Sintra pickup',
      address: 'Lisbon or Sintra, Portugal',
      note: 'Private road tours include pickup in Lisbon or Sintra. Walking-tour meeting point is confirmed after booking.'
    },
    cancellationPolicyHours: 48,
    minAdvanceBookingHours: 24,
    quantityDiscounts: [],
    currency: 'EUR',
    currencySymbol: '€',
    tours: [
      {
        id: 'tour-a', active: true, kind: 'van', badge: 'Signature Private Day',
        name: {
          en: 'Private Sintra, Cabo da Roca & Cascais — Full Day',
          es: 'Sintra, Cabo da Roca y Cascais Privado — Día Completo',
          pt: 'Sintra, Cabo da Roca e Cascais Privado — Dia Inteiro'
        },
        description: {
          en: 'A private 7–8 hour journey through Sintra, Cabo da Roca and Cascais with a dedicated local driver-guide and premium vehicle.',
          es: 'Ruta privada de 7–8 horas por Sintra, Cabo da Roca y Cascais con guía-conductor local y vehículo premium.',
          pt: 'Viagem privada de 7–8 horas por Sintra, Cabo da Roca e Cascais com guia-motorista local e veículo premium.'
        },
        price: 499, pricingType: 'per_group', duration: '7–8 Hours', maxPersons: 8,
        image: 'site/images/tour-full-sintra-coast-640.webp', imageAlt: 'Private Sintra Cabo da Roca and Cascais tour'
      },
      {
        id: 'tour-b', active: true, kind: 'van', badge: 'Private Half Day',
        name: {
          en: 'Private Sintra Highlights — Half Day',
          es: 'Lo Esencial de Sintra Privado — Medio Día',
          pt: 'Destaques de Sintra Privado — Meio Dia'
        },
        description: {
          en: 'A focused 4–5 hour private Sintra experience for guests who want the essential highlights with premium transport and local context.',
          es: 'Experiencia privada de 4–5 horas por Sintra para descubrir lo esencial con transporte premium y contexto local.',
          pt: 'Experiência privada de 4–5 horas em Sintra para descobrir o essencial com transporte premium e contexto local.'
        },
        price: 349, pricingType: 'per_group', duration: '4–5 Hours', maxPersons: 8,
        image: 'site/images/tour-fatima-obidos-736.webp', imageAlt: 'Private Sintra highlights half day tour'
      },
      {
        id: 'tour-c', active: true, kind: 'walking', badge: 'Private Local Experience',
        name: {
          en: 'Private Lisbon Walking Tour',
          es: 'Walking Tour Privado por Lisboa',
          pt: 'Walking Tour Privado por Lisboa'
        },
        description: {
          en: 'A private 3-hour Lisbon walk with a local guide, designed for travellers who want history, neighbourhood character and personal attention.',
          es: 'Recorrido privado de 3 horas por Lisboa con guía local, historia, barrios auténticos y atención personalizada.',
          pt: 'Passeio privado de 3 horas por Lisboa com guia local, história, bairros autênticos e atenção personalizada.'
        },
        price: 199, pricingType: 'per_group', duration: '3 Hours', maxPersons: 8,
        image: 'site/images/tour-arrabida-wine-960.webp', imageAlt: 'Private Lisbon walking tour'
      }
    ]
  };
}));

/* Keep the visible multilingual catalogue aligned with the commercial product config. */
(function () {
  if (typeof window === 'undefined' || !window.SITE_CONTENT) return;
  var cfg = window.SITE_CONTENT;
  var shared = {
    en: [
      { id:'tour-a', kind:'van', category:'van', badge:'Signature Private Day', name:'Private Sintra, Cabo da Roca & Cascais — Full Day', tag:'7–8 Hours · Private Group · Up to 8 Guests', tags:['Private Group','Premium Vehicle','Local Driver-Guide'], stops:'Lisbon / Sintra pickup · Sintra · Cabo da Roca · Cascais', fit:'The complete private day for travellers who want Sintra’s landmarks and Atlantic coast without sharing the experience with strangers.', meeting:'Private pickup in Lisbon or Sintra', includes:'Dedicated local driver-guide, private premium vehicle, bottled water and insurance', extras:'Monument tickets and lunch', price:'€499', priceValue:'499', currency:'EUR', image:'site/images/tour-full-sintra-coast-640.webp', imageAlt:'Private Sintra Cabo da Roca and Cascais tour' },
      { id:'tour-b', kind:'van', category:'van', badge:'Private Half Day', name:'Private Sintra Highlights — Half Day', tag:'4–5 Hours · Private Group · Up to 8 Guests', tags:['Private Group','Premium Vehicle','Local Driver-Guide'], stops:'Lisbon / Sintra pickup · Sintra highlights · Scenic viewpoints', fit:'A shorter premium option focused on Sintra’s essential highlights, ideal when you want a private experience without committing a full day.', meeting:'Private pickup in Lisbon or Sintra', includes:'Dedicated local driver-guide, private premium vehicle, bottled water and insurance', extras:'Monument tickets and meals', price:'€349', priceValue:'349', currency:'EUR', image:'site/images/tour-full-sintra-coast-640.webp', imageAlt:'Private Sintra half day tour' },
      { id:'tour-c', kind:'walking', category:'walking', badge:'Private Local Experience', name:'Private Lisbon Walking Tour', tag:'3 Hours · Private Group', tags:['Private','Local Guide','Flexible Pace'], stops:'Historic Lisbon · Local neighbourhoods · Viewpoints', fit:'A personal introduction to Lisbon for travellers who value local context, conversation and a flexible pace.', meeting:'Central Lisbon — exact point confirmed after booking', includes:'Dedicated private local guide', extras:'Food, drinks and attraction tickets', price:'€199', priceValue:'199', currency:'EUR', image:'site/images/guests-sintra-coast-720.webp', imageAlt:'Private Lisbon walking tour' }
    ],
    es: [
      { id:'tour-a', kind:'van', category:'van', badge:'Día Privado Emblemático', name:'Sintra, Cabo da Roca y Cascais Privado — Día Completo', tag:'7–8 Horas · Grupo Privado · Hasta 8 Personas', tags:['Grupo Privado','Vehículo Premium','Guía-Conductor Local'], stops:'Recogida Lisboa / Sintra · Sintra · Cabo da Roca · Cascais', fit:'El día privado completo para descubrir Sintra y la costa atlántica sin compartir la experiencia con desconocidos.', meeting:'Recogida privada en Lisboa o Sintra', includes:'Guía-conductor local dedicado, vehículo premium privado, agua y seguro', extras:'Entradas a monumentos y almuerzo', price:'€499', priceValue:'499', currency:'EUR', image:'site/images/tour-full-sintra-coast-640.webp' },
      { id:'tour-b', kind:'van', category:'van', badge:'Medio Día Privado', name:'Lo Esencial de Sintra Privado — Medio Día', tag:'4–5 Horas · Grupo Privado · Hasta 8 Personas', tags:['Grupo Privado','Vehículo Premium','Guía Local'], stops:'Recogida Lisboa / Sintra · Principales lugares de Sintra · Miradores', fit:'Una opción premium más corta centrada en lo esencial de Sintra.', meeting:'Recogida privada en Lisboa o Sintra', includes:'Guía-conductor local dedicado, vehículo premium privado, agua y seguro', extras:'Entradas y comidas', price:'€349', priceValue:'349', currency:'EUR', image:'site/images/tour-full-sintra-coast-640.webp' },
      { id:'tour-c', kind:'walking', category:'walking', badge:'Experiencia Local Privada', name:'Walking Tour Privado por Lisboa', tag:'3 Horas · Grupo Privado', tags:['Privado','Guía Local','Ritmo Flexible'], stops:'Lisboa histórica · Barrios locales · Miradores', fit:'Una introducción personal a Lisboa para viajeros que valoran el contexto local y un ritmo flexible.', meeting:'Centro de Lisboa — punto exacto tras reservar', includes:'Guía local privado dedicado', extras:'Comida, bebidas y entradas', price:'€199', priceValue:'199', currency:'EUR', image:'site/images/guests-sintra-coast-720.webp' }
    ],
    pt: [
      { id:'tour-a', kind:'van', category:'van', badge:'Dia Privado de Assinatura', name:'Sintra, Cabo da Roca e Cascais Privado — Dia Inteiro', tag:'7–8 Horas · Grupo Privado · Até 8 Pessoas', tags:['Grupo Privado','Veículo Premium','Guia-Motorista Local'], stops:'Recolha Lisboa / Sintra · Sintra · Cabo da Roca · Cascais', fit:'O dia privado completo para descobrir Sintra e a costa atlântica sem partilhar a experiência com desconhecidos.', meeting:'Recolha privada em Lisboa ou Sintra', includes:'Guia-motorista local dedicado, veículo premium privado, água e seguro', extras:'Bilhetes para monumentos e almoço', price:'€499', priceValue:'499', currency:'EUR', image:'site/images/tour-full-sintra-coast-640.webp' },
      { id:'tour-b', kind:'van', category:'van', badge:'Meio Dia Privado', name:'Destaques de Sintra Privado — Meio Dia', tag:'4–5 Horas · Grupo Privado · Até 8 Pessoas', tags:['Grupo Privado','Veículo Premium','Guia Local'], stops:'Recolha Lisboa / Sintra · Principais locais de Sintra · Miradouros', fit:'Uma opção premium mais curta centrada no essencial de Sintra.', meeting:'Recolha privada em Lisboa ou Sintra', includes:'Guia-motorista local dedicado, veículo premium privado, água e seguro', extras:'Bilhetes e refeições', price:'€349', priceValue:'349', currency:'EUR', image:'site/images/tour-full-sintra-coast-640.webp' },
      { id:'tour-c', kind:'walking', category:'walking', badge:'Experiência Local Privada', name:'Walking Tour Privado por Lisboa', tag:'3 Horas · Grupo Privado', tags:['Privado','Guia Local','Ritmo Flexível'], stops:'Lisboa histórica · Bairros locais · Miradouros', fit:'Uma introdução pessoal a Lisboa para viajantes que valorizam contexto local e um ritmo flexível.', meeting:'Centro de Lisboa — ponto exato confirmado após reserva', includes:'Guia local privado dedicado', extras:'Comida, bebidas e bilhetes', price:'€199', priceValue:'199', currency:'EUR', image:'site/images/guests-sintra-coast-720.webp' }
    ]
  };
  ['en','es','pt'].forEach(function (lang) {
    var c = cfg.content && cfg.content[lang];
    if (!c || !c.offers) return;
    c.offers.items = shared[lang];
    c.offers.perGroup = lang === 'en' ? 'per private group' : (lang === 'es' ? 'por grupo privado' : 'por grupo privado');
    c.offers.currencyNote = lang === 'en' ? 'Private-group pricing in EUR. No per-person surcharge within the stated capacity.' : (lang === 'es' ? 'Precio por grupo privado en EUR, dentro de la capacidad indicada.' : 'Preço por grupo privado em EUR, dentro da capacidade indicada.');
    c.offers.vanTitle = lang === 'en' ? 'Private Premium Road Tours' : (lang === 'es' ? 'Tours Privados Premium en Vehículo' : 'Tours Privados Premium em Veículo');
    c.offers.vanDescription = lang === 'en' ? 'Private premium transport with a dedicated local driver-guide. Current vehicle serves up to 4 guests; capacity expands to 8 with the larger vehicle.' : (lang === 'es' ? 'Transporte premium privado con guía-conductor local. Vehículo actual hasta 4 personas; capacidad de hasta 8 con el vehículo de mayor tamaño.' : 'Transporte premium privado com guia-motorista local. Veículo atual até 4 pessoas; capacidade até 8 com o veículo de maior dimensão.');
  });
}());
