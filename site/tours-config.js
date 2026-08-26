/**
 * Tours & Experiences Configuration — About Culture Things
 * Scalable model: shared small-group departures sold per person.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TOURS_CONFIG = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  return {
    meetingPoint: {
      time: '09:00',
      location: 'Hard Rock Cafe Lisbon',
      address: 'Av. da Liberdade 2, 1250-144 Lisboa, Portugal',
      note: 'Shared road tours depart from central Lisbon. Exact meeting instructions are sent after booking.'
    },
    cancellationPolicyHours: 48,
    minAdvanceBookingHours: 24,
    quantityDiscounts: [],
    currency: 'EUR', currencySymbol: '€',
    tours: [
      {
        id:'tour-a', active:true, kind:'van', badge:'Signature Small Group',
        name:{en:'Sintra, Cabo da Roca & Cascais — Small Group',es:'Sintra, Cabo da Roca y Cascais — Grupo Reducido',pt:'Sintra, Cabo da Roca e Cascais — Grupo Reduzido'},
        description:{en:'A full-day small-group journey from Lisbon with a local driver-guide. Maximum 8 guests per vehicle.',es:'Día completo desde Lisboa en grupo reducido con guía-conductor local. Máximo 8 personas por vehículo.',pt:'Dia inteiro desde Lisboa em grupo reduzido com guia-motorista local. Máximo 8 pessoas por veículo.'},
        price:79, pricingType:'per_person', minPersons:1, maxPersons:8, duration:'7–8 Hours',
        image:'site/images/tour-full-sintra-coast-640.webp', imageAlt:'Sintra Cabo da Roca and Cascais small group tour'
      },
      {
        id:'tour-b', active:true, kind:'van', badge:'Sintra Essential',
        name:{en:'Sintra Highlights — Small Group Half Day',es:'Lo Esencial de Sintra — Medio Día en Grupo Reducido',pt:'Destaques de Sintra — Meio Dia em Grupo Reduzido'},
        description:{en:'A focused half-day small-group Sintra experience with local context and comfortable transport.',es:'Experiencia de medio día por Sintra en grupo reducido, con contexto local y transporte cómodo.',pt:'Experiência de meio dia em Sintra, em grupo reduzido, com contexto local e transporte confortável.'},
        price:59, pricingType:'per_person', minPersons:1, maxPersons:8, duration:'4–5 Hours',
        image:'site/images/tour-full-sintra-coast-640.webp', imageAlt:'Sintra small group half day tour'
      },
      {
        id:'tour-c', active:true, kind:'walking', badge:'Local Experience',
        name:{en:'Lisbon Walking Tour — Small Group',es:'Walking Tour por Lisboa — Grupo Reducido',pt:'Walking Tour por Lisboa — Grupo Reduzido'},
        description:{en:'A three-hour small-group walk through historic Lisbon with a local guide.',es:'Recorrido de tres horas por la Lisboa histórica en grupo reducido con guía local.',pt:'Passeio de três horas pela Lisboa histórica em grupo reduzido com guia local.'},
        price:39, pricingType:'per_person', minPersons:1, maxPersons:10, duration:'3 Hours',
        image:'site/images/guests-sintra-coast-720.webp', imageAlt:'Lisbon small group walking tour'
      }
    ]
  };
}));

(function () {
  if (typeof window === 'undefined' || !window.SITE_CONTENT) return;
  var cfg=window.SITE_CONTENT;
  var items={
    en:[
      {id:'tour-a',kind:'van',category:'van',badge:'Signature Small Group',name:'Sintra, Cabo da Roca & Cascais — Small Group',tag:'7–8 Hours · Max 8 Guests / Vehicle',tags:['€79 per guest','Max 8 / vehicle','Local Driver-Guide'],stops:'Lisbon · Sintra · Cabo da Roca · Cascais',fit:'A complete small-group day designed to combine a personal feel with a more accessible per-person price.',meeting:'09:00 — Central Lisbon',includes:'Local driver-guide, air-conditioned transport, bottled water and insurance',extras:'Monument tickets and lunch',price:'€79',priceValue:'79',currency:'EUR',image:'site/images/tour-full-sintra-coast-640.webp'},
      {id:'tour-b',kind:'van',category:'van',badge:'Sintra Essential',name:'Sintra Highlights — Small Group Half Day',tag:'4–5 Hours · Max 8 Guests / Vehicle',tags:['€59 per guest','Max 8 / vehicle','Local Guide'],stops:'Lisbon · Sintra highlights · Scenic viewpoints',fit:'A shorter, easy-to-book Sintra experience for travellers who want the essentials without using a full day.',meeting:'Central Lisbon — details after booking',includes:'Local driver-guide, air-conditioned transport, bottled water and insurance',extras:'Monument tickets and meals',price:'€59',priceValue:'59',currency:'EUR',image:'site/images/tour-full-sintra-coast-640.webp'},
      {id:'tour-c',kind:'walking',category:'walking',badge:'Local Experience',name:'Lisbon Walking Tour — Small Group',tag:'3 Hours · Small Group',tags:['€39 per guest','Local Guide','Walkable Lisbon'],stops:'Historic Lisbon · Local neighbourhoods · Viewpoints',fit:'An accessible introduction to Lisbon with local context, conversation and a small-group atmosphere.',meeting:'Central Lisbon — exact point after booking',includes:'Local guide',extras:'Food, drinks and attraction tickets',price:'€39',priceValue:'39',currency:'EUR',image:'site/images/guests-sintra-coast-720.webp'}
    ],
    es:[
      {id:'tour-a',kind:'van',category:'van',badge:'Grupo Reducido Emblemático',name:'Sintra, Cabo da Roca y Cascais — Grupo Reducido',tag:'7–8 Horas · Máx. 8 Personas / Vehículo',tags:['€79 por persona','Máx. 8 / vehículo','Guía-Conductor Local'],stops:'Lisboa · Sintra · Cabo da Roca · Cascais',fit:'Un día completo en grupo reducido que mantiene una experiencia personal con un precio accesible por persona.',meeting:'09:00 — Centro de Lisboa',includes:'Guía-conductor local, transporte climatizado, agua y seguro',extras:'Entradas y almuerzo',price:'€79',priceValue:'79',currency:'EUR',image:'site/images/tour-full-sintra-coast-640.webp'},
      {id:'tour-b',kind:'van',category:'van',badge:'Sintra Esencial',name:'Lo Esencial de Sintra — Medio Día en Grupo Reducido',tag:'4–5 Horas · Máx. 8 Personas / Vehículo',tags:['€59 por persona','Máx. 8 / vehículo','Guía Local'],stops:'Lisboa · Principales lugares de Sintra · Miradores',fit:'Una opción corta y fácil de reservar para conocer lo esencial de Sintra.',meeting:'Centro de Lisboa — detalles tras reservar',includes:'Guía-conductor local, transporte climatizado, agua y seguro',extras:'Entradas y comidas',price:'€59',priceValue:'59',currency:'EUR',image:'site/images/tour-full-sintra-coast-640.webp'},
      {id:'tour-c',kind:'walking',category:'walking',badge:'Experiencia Local',name:'Walking Tour por Lisboa — Grupo Reducido',tag:'3 Horas · Grupo Reducido',tags:['€39 por persona','Guía Local','Lisboa a Pie'],stops:'Lisboa histórica · Barrios locales · Miradores',fit:'Una introducción accesible a Lisboa con contexto local y ambiente de grupo reducido.',meeting:'Centro de Lisboa — punto exacto tras reservar',includes:'Guía local',extras:'Comida, bebidas y entradas',price:'€39',priceValue:'39',currency:'EUR',image:'site/images/guests-sintra-coast-720.webp'}
    ],
    pt:[
      {id:'tour-a',kind:'van',category:'van',badge:'Grupo Reduzido de Assinatura',name:'Sintra, Cabo da Roca e Cascais — Grupo Reduzido',tag:'7–8 Horas · Máx. 8 Pessoas / Veículo',tags:['€79 por pessoa','Máx. 8 / veículo','Guia-Motorista Local'],stops:'Lisboa · Sintra · Cabo da Roca · Cascais',fit:'Um dia completo em grupo reduzido que mantém uma experiência pessoal com preço acessível por pessoa.',meeting:'09:00 — Centro de Lisboa',includes:'Guia-motorista local, transporte climatizado, água e seguro',extras:'Bilhetes e almoço',price:'€79',priceValue:'79',currency:'EUR',image:'site/images/tour-full-sintra-coast-640.webp'},
      {id:'tour-b',kind:'van',category:'van',badge:'Sintra Essencial',name:'Destaques de Sintra — Meio Dia em Grupo Reduzido',tag:'4–5 Horas · Máx. 8 Pessoas / Veículo',tags:['€59 por pessoa','Máx. 8 / veículo','Guia Local'],stops:'Lisboa · Principais locais de Sintra · Miradouros',fit:'Uma opção curta e fácil de reservar para conhecer o essencial de Sintra.',meeting:'Centro de Lisboa — detalhes após reserva',includes:'Guia-motorista local, transporte climatizado, água e seguro',extras:'Bilhetes e refeições',price:'€59',priceValue:'59',currency:'EUR',image:'site/images/tour-full-sintra-coast-640.webp'},
      {id:'tour-c',kind:'walking',category:'walking',badge:'Experiência Local',name:'Walking Tour por Lisboa — Grupo Reduzido',tag:'3 Horas · Grupo Reduzido',tags:['€39 por pessoa','Guia Local','Lisboa a Pé'],stops:'Lisboa histórica · Bairros locais · Miradouros',fit:'Uma introdução acessível a Lisboa com contexto local e ambiente de grupo reduzido.',meeting:'Centro de Lisboa — ponto exato após reserva',includes:'Guia local',extras:'Comida, bebidas e bilhetes',price:'€39',priceValue:'39',currency:'EUR',image:'site/images/guests-sintra-coast-720.webp'}
    ]
  };
  ['en','es','pt'].forEach(function(lang){var c=cfg.content&&cfg.content[lang];if(!c||!c.offers)return;c.offers.items=items[lang];c.offers.perGroup=lang==='en'?'per guest':(lang==='es'?'por persona':'por pessoa');c.offers.currencyNote=lang==='en'?'Simple per-person pricing. Book from 1 guest; shared departures may combine travellers, with a maximum of 8 guests per road-tour vehicle.':(lang==='es'?'Precio simple por persona. Reserva desde 1 persona; las salidas pueden reunir viajeros, con máximo 8 por vehículo.':'Preço simples por pessoa. Reserva desde 1 pessoa; as saídas podem reunir viajantes, com máximo 8 por veículo.');c.offers.vanTitle=lang==='en'?'Small-Group Road Tours':(lang==='es'?'Tours en Grupo Reducido':'Tours em Grupo Reduzido');c.offers.vanDescription=lang==='en'?'Shared departures in comfortable vehicles, capped at 8 guests per vehicle. Additional vans and guides can be assigned as demand grows.':(lang==='es'?'Salidas compartidas en vehículos cómodos, máximo 8 personas por vehículo. Se pueden asignar más vans y guías según la demanda.':'Saídas partilhadas em veículos confortáveis, máximo 8 pessoas por veículo. Podem ser atribuídas mais vans e guias conforme a procura.');});
}());
