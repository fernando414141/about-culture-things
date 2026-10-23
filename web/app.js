const LANGS=['en','es','pt'];
const TOURS=[
  {
    "id": "shared",
    "price": 68.6,
    "hours": 6,
    "image": "/site/images/sintra-pena-960.webp",
    "title": {
      "en": "Sintra, Cabo da Roca & Cascais — Shared Tour",
      "pt": "Sintra, Cabo da Roca e Cascais — Tour partilhado",
      "es": "Sintra, Cabo da Roca y Cascais — Tour compartido"
    },
    "summary": {
      "en": "Discover Sintra and the Atlantic coast with a local guide in a small shared group.",
      "pt": "Descubra Sintra e a costa atlântica num grupo reduzido com guia local.",
      "es": "Descubre Sintra y la costa atlántica en grupo reducido con guía local."
    },
    "route": {
      "en": [
        "Meet in Lisbon (details confirmed after booking)",
        "Historic Sintra",
        "Cabo da Roca",
        "Cascais",
        "Return to Lisbon"
      ],
      "pt": [
        "Encontro em Lisboa (detalhes após a reserva)",
        "Centro histórico de Sintra",
        "Cabo da Roca",
        "Cascais",
        "Regresso a Lisboa"
      ],
      "es": [
        "Encuentro en Lisboa (detalles tras reservar)",
        "Centro histórico de Sintra",
        "Cabo da Roca",
        "Cascais",
        "Regreso a Lisboa"
      ]
    },
    "minGuests": 2,
    "maxGuests": 6,
    "startTime": "08:30",
    "listPrice": 98
  },
  {
    "id": "private",
    "price": 96.6,
    "hours": 6,
    "image": "/site/images/sintra-pena-960.webp",
    "title": {
      "en": "Sintra, Cabo da Roca & Cascais — Private Tour",
      "pt": "Sintra, Cabo da Roca e Cascais — Tour privado",
      "es": "Sintra, Cabo da Roca y Cascais — Tour privado"
    },
    "summary": {
      "en": "Your vehicle and guide, exclusively for your group. Discover Sintra and the Atlantic coast.",
      "pt": "Veículo e guia exclusivos para o seu grupo. Descubra Sintra e a costa atlântica.",
      "es": "Vehículo y guía exclusivos para tu grupo. Descubre Sintra y la costa atlántica."
    },
    "route": {
      "en": [
        "Pickup at your accommodation",
        "Historic Sintra",
        "Cabo da Roca",
        "Cascais",
        "Return to your accommodation"
      ],
      "pt": [
        "Recolha no seu alojamento",
        "Centro histórico de Sintra",
        "Cabo da Roca",
        "Cascais",
        "Regresso ao seu alojamento"
      ],
      "es": [
        "Recogida en tu alojamiento",
        "Centro histórico de Sintra",
        "Cabo da Roca",
        "Cascais",
        "Regreso a tu alojamiento"
      ]
    },
    "minGuests": 2,
    "maxGuests": 6,
    "startTime": "08:30",
    "listPrice": 138
  },
  {
    "id": "walk",
    "price": 24.5,
    "hours": 2,
    "image": "/site/images/sintra-pastries-960.webp",
    "title": {
      "en": "Sintra Walking Tour — History, Pastries & Culture",
      "pt": "Sintra a Pé — História, Doçaria e Cultura",
      "es": "Sintra a Pie — Historia, Dulces y Cultura"
    },
    "summary": {
      "en": "Explore royal Sintra on foot. A traditional queijada and travesseiro are included.",
      "pt": "Descubra Sintra a pé. Inclui uma queijada e um travesseiro tradicionais.",
      "es": "Descubre Sintra a pie. Incluye una queijada y un travesseiro tradicionales."
    },
    "route": {
      "en": [
        "Meet at Sintra Town Hall (Câmara Municipal)",
        "Queijadas da Sapa — queijada tasting included",
        "Fonte Mourisca",
        "National Palace of Sintra (exterior)",
        "Casa Piriquita — travesseiro tasting included",
        "Views of the Moorish Castle"
      ],
      "pt": [
        "Encontro na Câmara Municipal de Sintra",
        "Queijadas da Sapa: prova de queijada incluída",
        "Fonte Mourisca",
        "Palácio Nacional de Sintra (exterior)",
        "Casa Piriquita: prova de travesseiro incluída",
        "Vista para o Castelo dos Mouros"
      ],
      "es": [
        "Encuentro en la Câmara Municipal de Sintra",
        "Queijadas da Sapa: degustación de queijada incluida",
        "Fonte Mourisca",
        "Palacio Nacional de Sintra (exterior)",
        "Casa Piriquita: degustación de travesseiro incluida",
        "Vistas al Castillo de los Moros"
      ]
    },
    "minGuests": 2,
    "maxGuests": 10,
    "startTime": "10:00",
    "listPrice": 35
  }
];
const COPY={
  "en": {
    "navTours": "Tours",
    "navWhy": "Why us",
    "navReviews": "Reviews",
    "book": "Book now",
    "heroKicker": "Sintra & the Atlantic coast",
    "heroTitle": "Portugal, personally guided.",
    "heroText": "Discover Sintra and the coast in a shared or private tour, or explore its culture and traditional pastries on foot.",
    "explore": "Choose your tour",
    "rating": "5.0 from 40 Tripadvisor reviews",
    "heroFacts": "Local guide · EN / ES / PT · Secure booking",
    "trust1": "Local guide",
    "trust2": "2–6 travellers per booking",
    "trust3": "Free cancellation up to 48 hours",
    "toursKicker": "Choose your day",
    "toursTitle": "One destination. Three ways to explore.",
    "toursText": "Shared and private tours: 2–6 guests. Walking tour: 2–10. All prices are per person.",
    "whyKicker": "Why book with us",
    "whyTitle": "A local day, without the logistics.",
    "why1Title": "Local knowledge",
    "why1Text": "Stories, roads and timing chosen by someone who knows each place.",
    "why2Title": "A clear meeting point",
    "why2Text": "Meet in Lisbon for the shared tour, enjoy accommodation pickup on the private tour, or meet in central Sintra for the walk.",
    "why3Title": "Personal attention",
    "why3Text": "A local guide, clear meeting details and help from Rita before your experience.",
    "reviewsKicker": "Guest reviews",
    "reviewsTitle": "The days travellers remember.",
    "faqTitle": "Good to know before booking",
    "footerText": "Local guided tours across Portugal.",
    "directTitle": "Book direct. Discover Portugal.",
    "directText": "Book with live availability and personal support from Rita.",
    "directCta": "Choose a tour",
    "flowLabel": "How booking works",
    "flow": [
      [
        "Choose a tour",
        "Compare three clear options."
      ],
      [
        "Select your date",
        "Book until 7 pm the day before."
      ],
      [
        "Pay securely",
        "Receive immediate confirmation."
      ]
    ],
    "view": "View tour & book",
    "from": "From",
    "perPerson": "per person",
    "hours": "hours",
    "pickup": "Hotel pickup & return",
    "cancelShort": "Free cancellation up to 48 hours",
    "bookTour": "Choose your date and book",
    "date": "Tour date",
    "guests": "Travellers",
    "language": "Tour language",
    "hotel": "Pickup accommodation (optional)",
    "name": "Full name",
    "email": "Email",
    "phone": "Phone / WhatsApp",
    "requests": "Notes or special requests",
    "pay": "Continue to secure payment",
    "bookingHelp": "Bookings close at 7:00 pm Lisbon time on the previous day.",
    "minGuests": "2–6 travellers per booking",
    "terms": "I accept the booking terms and cancellation policy.",
    "termsLink": "View terms",
    "total": "Total",
    "secure": "Secure Stripe payment in EUR. No booking surcharge.",
    "dateRequired": "Choose a tour date.",
    "unavailable": "This date is unavailable. Please choose another day.",
    "cutoff": "This date can no longer be booked. Book by 7:00 pm Lisbon time on the previous day.",
    "formError": "Please complete the required fields.",
    "paymentError": "We could not open secure payment. Please try again or contact us.",
    "processing": "Opening secure payment…",
    "close": "Close",
    "menuOpen": "Open menu",
    "menuClose": "Close menu",
    "languageLabel": "Language",
    "currencyLabel": "Reference currency",
    "whatsapp": "Ask us on WhatsApp",
    "google": "View Google profile and reviews",
    "tripadvisor": "Read all Tripadvisor reviews",
    "reviews": [
      [
        "Friendly, knowledgeable and made everything feel relaxed and personal.",
        "Jose M. · Tripadvisor"
      ],
      [
        "Rita made the entire day incredibly comfortable and enjoyable for our family.",
        "Kristina P. · Tripadvisor"
      ],
      [
        "It was the highlight of our trip: flexible, passionate and full of local knowledge.",
        "Tripadvisor guest"
      ]
    ],
    "faq": [
      [
        "Are monument tickets included?",
        "No. Monument tickets and meals are not included unless explicitly stated."
      ],
      [
        "Where does the tour begin?",
        "Meet in Lisbon for the shared tour, enjoy accommodation pickup on the private tour, or meet in central Sintra for the walk."
      ],
      [
        "How many people can book?",
        "Shared and private tours: 2–6 guests. Walking tour: 2–10. All prices are per person."
      ],
      [
        "Which tour languages are available?",
        "Tours are guided in English, Spanish or Portuguese."
      ],
      [
        "What is the cancellation policy?",
        "Cancel at least 48 hours before departure for a full refund."
      ]
    ],
    "catalogueNote": "Shared and private tours follow the same route. Choose the company of other travellers or a vehicle and guide exclusively for your group.",
    "badge": [
      "Shared",
      "Private",
      "Walking tour"
    ],
    "includedTour": [
      "Local guide · Shared transport",
      "Local guide · Vehicle exclusively for your group · Pickup and return",
      "Local guide · Queijada at Sapa · Travesseiro at Piriquita"
    ],
    "help": "Questions? Talk to Rita",
    "call": "Call Rita",
    "whatsappMessage": "Hello Rita, I would like some help choosing my Sintra experience.",
    "cancelled": "Payment was cancelled. Your booking is not confirmed. You can try again when ready.",
    "departure": "Departure: 08:30 · Lisbon time",
    "legal": [
      "Terms",
      "Cancellation",
      "Privacy"
    ],
    "limit": "guests per booking",
    "included": "Included",
    "excluded": "Not included",
    "routeLabel": "Your route",
    "detailsLabel": "Your details",
    "optional": "Optional requests",
    "saveDirect": "Book direct",
    "fxNote": "USD prices are estimates. Payment is charged in EUR; your bank determines the final exchange rate.",
    "rateDate": "Reference rate",
    "referencePrice": "Standard rate"
  },
  "pt": {
    "navTours": "Tours",
    "navWhy": "Porquê nós",
    "navReviews": "Avaliações",
    "book": "Reservar",
    "heroKicker": "Sintra e a costa atlântica",
    "heroTitle": "Portugal, com guia local.",
    "heroText": "Descubra Sintra e a costa num passeio partilhado ou privado, ou explore a pé a sua cultura e doçaria tradicional.",
    "explore": "Escolher tour",
    "rating": "5,0 em 40 avaliações no Tripadvisor",
    "heroFacts": "Guia local · PT / EN / ES · Reserva segura",
    "trust1": "Guia local",
    "trust2": "2–6 viajantes por reserva",
    "trust3": "Cancelamento gratuito até 48 horas",
    "toursKicker": "Escolha o seu dia",
    "toursTitle": "Um destino. Três formas de o descobrir.",
    "toursText": "Partilhado e privado: 2–6 pessoas. A pé: 2–10. Preços por pessoa.",
    "whyKicker": "Porquê reservar connosco",
    "whyTitle": "Um dia local, sem complicações.",
    "why1Title": "Conhecimento local",
    "why1Text": "Histórias, estradas e horários escolhidos por quem conhece cada lugar.",
    "why2Title": "Um ponto de encontro claro",
    "why2Text": "Encontro em Lisboa no passeio partilhado, recolha no alojamento no privado e encontro no centro de Sintra no passeio a pé.",
    "why3Title": "Atenção pessoal",
    "why3Text": "Guia local, ponto de encontro claro e apoio da Rita antes da experiência.",
    "reviewsKicker": "Avaliações",
    "reviewsTitle": "Os dias que os viajantes recordam.",
    "faqTitle": "O que saber antes de reservar",
    "footerText": "Experiências com guia local em Portugal.",
    "directTitle": "Reserve diretamente. Descubra Portugal.",
    "directText": "Reserve com disponibilidade atualizada e apoio pessoal da Rita.",
    "directCta": "Escolher tour",
    "flowLabel": "Como reservar",
    "flow": [
      [
        "Escolha um tour",
        "Compare três opções claras."
      ],
      [
        "Selecione a data",
        "Reserve até às 19h do dia anterior."
      ],
      [
        "Pague com segurança",
        "Receba confirmação imediata."
      ]
    ],
    "view": "Ver tour e reservar",
    "from": "Desde",
    "perPerson": "por pessoa",
    "hours": "horas",
    "pickup": "Recolha e regresso ao alojamento",
    "cancelShort": "Cancelamento gratuito até 48 horas",
    "bookTour": "Escolha a data e reserve",
    "date": "Data do tour",
    "guests": "Viajantes",
    "language": "Idioma do tour",
    "hotel": "Alojamento para recolha (opcional)",
    "name": "Nome completo",
    "email": "Email",
    "phone": "Telefone / WhatsApp",
    "requests": "Notas ou pedidos especiais",
    "pay": "Continuar para pagamento seguro",
    "bookingHelp": "As reservas fecham às 19:00, hora de Lisboa, no dia anterior.",
    "minGuests": "2–6 viajantes por reserva",
    "terms": "Aceito os termos da reserva e a política de cancelamento.",
    "termsLink": "Ver termos",
    "total": "Total",
    "secure": "Pagamento seguro pela Stripe em EUR. Sem taxas de reserva.",
    "dateRequired": "Escolha a data do tour.",
    "unavailable": "Esta data não está disponível. Escolha outro dia.",
    "cutoff": "Esta data já não pode ser reservada. Reserve até às 19:00, hora de Lisboa, no dia anterior.",
    "formError": "Preencha os campos obrigatórios.",
    "paymentError": "Não foi possível abrir o pagamento seguro. Tente novamente ou contacte-nos.",
    "processing": "A abrir pagamento seguro…",
    "close": "Fechar",
    "menuOpen": "Abrir menu",
    "menuClose": "Fechar menu",
    "languageLabel": "Idioma",
    "currencyLabel": "Moeda de referência",
    "whatsapp": "Fale connosco no WhatsApp",
    "google": "Ver perfil e avaliações no Google",
    "tripadvisor": "Ler todas as avaliações no Tripadvisor",
    "reviews": [
      [
        "Amigável, conhecedora e tornou tudo tranquilo e pessoal.",
        "Jose M. · Tripadvisor"
      ],
      [
        "A Rita tornou o dia inteiro muito confortável e agradável para a nossa família.",
        "Kristina P. · Tripadvisor"
      ],
      [
        "Foi o ponto alto da viagem: flexível, apaixonada e cheia de conhecimento local.",
        "Visitante no Tripadvisor"
      ]
    ],
    "faq": [
      [
        "Os bilhetes dos monumentos estão incluídos?",
        "Não. Bilhetes e refeições não estão incluídos, salvo indicação expressa."
      ],
      [
        "Onde começa o tour?",
        "Encontro em Lisboa no passeio partilhado, recolha no alojamento no privado e encontro no centro de Sintra no passeio a pé."
      ],
      [
        "Quantas pessoas podem reservar?",
        "Partilhado e privado: 2–6 pessoas. A pé: 2–10. Preços por pessoa."
      ],
      [
        "Que idiomas estão disponíveis?",
        "Os tours são guiados em inglês, espanhol ou português."
      ],
      [
        "Qual é a política de cancelamento?",
        "Cancele com pelo menos 48 horas de antecedência para receber o reembolso total."
      ]
    ],
    "catalogueNote": "Os passeios partilhado e privado seguem o mesmo percurso. Viaje com outros participantes ou desfrute de veículo e guia exclusivos para o seu grupo.",
    "badge": [
      "Partilhado",
      "Privado",
      "A pé"
    ],
    "includedTour": [
      "Guia local · Transporte partilhado",
      "Guia local · Veículo exclusivo para o seu grupo · Recolha e regresso",
      "Guia local · Queijada na Sapa · Travesseiro na Piriquita"
    ],
    "help": "Tem dúvidas? Fale com a Rita",
    "call": "Ligar à Rita",
    "whatsappMessage": "Olá Rita, gostaria de ajuda para escolher a minha experiência em Sintra.",
    "cancelled": "O pagamento foi cancelado. A sua reserva não está confirmada. Pode tentar novamente quando quiser.",
    "departure": "Partida: 08:30 · Hora de Lisboa",
    "legal": [
      "Termos",
      "Cancelamento",
      "Privacidade"
    ],
    "limit": "pessoas por reserva",
    "included": "Incluído",
    "excluded": "Não incluído",
    "routeLabel": "O seu percurso",
    "detailsLabel": "Os seus dados",
    "optional": "Pedidos opcionais",
    "saveDirect": "Reserve diretamente",
    "fxNote": "Os preços em USD são indicativos. O pagamento é cobrado em EUR; o seu banco determina o câmbio final.",
    "rateDate": "Câmbio de referência",
    "referencePrice": "Tarifa habitual"
  },
  "es": {
    "navTours": "Tours",
    "navWhy": "Por qué elegirnos",
    "navReviews": "Opiniones",
    "book": "Reservar",
    "heroKicker": "Sintra y la costa atlántica",
    "heroTitle": "Portugal, con guía local.",
    "heroText": "Descubre Sintra y la costa en un tour compartido o privado, o explora a pie su cultura y sus dulces tradicionales.",
    "explore": "Elegir tour",
    "rating": "5,0 en 40 opiniones de Tripadvisor",
    "heroFacts": "Guía local · ES / EN / PT · Reserva segura",
    "trust1": "Guía local",
    "trust2": "2–6 viajeros por reserva",
    "trust3": "Cancelación gratuita hasta 48 horas",
    "toursKicker": "Elige tu día",
    "toursTitle": "Un destino. Tres formas de descubrirlo.",
    "toursText": "Compartido y privado: 2–6 personas. A pie: 2–10. Precios por persona.",
    "whyKicker": "Por qué reservar con nosotros",
    "whyTitle": "Un día local, sin complicaciones.",
    "why1Title": "Conocimiento local",
    "why1Text": "Historias, carreteras y horarios elegidos por quien conoce cada lugar.",
    "why2Title": "Un punto de encuentro claro",
    "why2Text": "Encuentro en Lisboa para el compartido, recogida en tu alojamiento para el privado y encuentro en el centro de Sintra para el recorrido a pie.",
    "why3Title": "Atención personal",
    "why3Text": "Guía local, punto de encuentro claro y ayuda de Rita antes de tu experiencia.",
    "reviewsKicker": "Opiniones",
    "reviewsTitle": "Los días que recuerdan los viajeros.",
    "faqTitle": "Lo que debes saber antes de reservar",
    "footerText": "Experiencias con guía local en Portugal.",
    "directTitle": "Reserva directamente. Descubre Portugal.",
    "directText": "Reserva de forma segura con disponibilidad actualizada y atención personal de Rita.",
    "directCta": "Elegir tour",
    "flowLabel": "Cómo reservar",
    "flow": [
      [
        "Elige un tour",
        "Compara tres opciones claras."
      ],
      [
        "Selecciona la fecha",
        "Reserva hasta las 19h del día anterior."
      ],
      [
        "Paga con seguridad",
        "Recibe confirmación inmediata."
      ]
    ],
    "view": "Ver tour y reservar",
    "from": "Desde",
    "perPerson": "por persona",
    "hours": "horas",
    "pickup": "Recogida y regreso al alojamiento",
    "cancelShort": "Cancelación gratuita hasta 48 horas",
    "bookTour": "Elige la fecha y reserva",
    "date": "Fecha del tour",
    "guests": "Viajeros",
    "language": "Idioma del tour",
    "hotel": "Alojamiento de recogida (opcional)",
    "name": "Nombre completo",
    "email": "Email",
    "phone": "Teléfono / WhatsApp",
    "requests": "Notas o peticiones especiales",
    "pay": "Continuar al pago seguro",
    "bookingHelp": "Las reservas cierran a las 19:00, hora de Lisboa, del día anterior.",
    "minGuests": "2–6 viajeros por reserva",
    "terms": "Acepto los términos de reserva y la política de cancelación.",
    "termsLink": "Ver condiciones",
    "total": "Total",
    "secure": "Pago seguro con Stripe en EUR. Sin recargos de reserva.",
    "dateRequired": "Elige la fecha del tour.",
    "unavailable": "Esta fecha no está disponible. Elige otro día.",
    "cutoff": "Esta fecha ya no se puede reservar. Reserva hasta las 19:00, hora de Lisboa, del día anterior.",
    "formError": "Completa los campos obligatorios.",
    "paymentError": "No pudimos abrir el pago seguro. Inténtalo de nuevo o contáctanos.",
    "processing": "Abriendo pago seguro…",
    "close": "Cerrar",
    "menuOpen": "Abrir menú",
    "menuClose": "Cerrar menú",
    "languageLabel": "Idioma",
    "currencyLabel": "Moneda de referencia",
    "whatsapp": "Pregúntanos por WhatsApp",
    "google": "Ver perfil y opiniones en Google",
    "tripadvisor": "Leer todas las opiniones en Tripadvisor",
    "reviews": [
      [
        "Amable, experta e hizo que todo fuera tranquilo y personal.",
        "Jose M. · Tripadvisor"
      ],
      [
        "Rita hizo que todo el día fuera muy cómodo y agradable para nuestra familia.",
        "Kristina P. · Tripadvisor"
      ],
      [
        "Fue lo mejor del viaje: flexible, apasionada y llena de conocimiento local.",
        "Visitante de Tripadvisor"
      ]
    ],
    "faq": [
      [
        "¿Están incluidas las entradas a monumentos?",
        "No. Las entradas y comidas no están incluidas salvo indicación expresa."
      ],
      [
        "¿Dónde comienza el tour?",
        "Encuentro en Lisboa para el compartido, recogida en tu alojamiento para el privado y encuentro en el centro de Sintra para el recorrido a pie."
      ],
      [
        "¿Cuántas personas pueden reservar?",
        "Compartido y privado: 2–6 personas. A pie: 2–10. Precios por persona."
      ],
      [
        "¿Qué idiomas están disponibles?",
        "Los tours se realizan en inglés, español o portugués."
      ],
      [
        "¿Cuál es la política de cancelación?",
        "Cancela al menos 48 horas antes para recibir el reembolso total."
      ]
    ],
    "catalogueNote": "Los tours compartido y privado recorren la misma ruta. Elige viajar con otros participantes o disfrutar de vehículo y guía exclusivos para tu grupo.",
    "badge": [
      "Compartido",
      "Privado",
      "A pie"
    ],
    "includedTour": [
      "Guía local · Transporte compartido",
      "Guía local · Vehículo exclusivo para tu grupo · Recogida y regreso",
      "Guía local · Queijada en Sapa · Travesseiro en Piriquita"
    ],
    "help": "¿Tienes dudas? Habla con Rita",
    "call": "Llamar a Rita",
    "whatsappMessage": "Hola Rita, me gustaría que me ayudaras a elegir mi experiencia en Sintra.",
    "cancelled": "El pago se ha cancelado. Tu reserva no está confirmada. Puedes volver a intentarlo cuando quieras.",
    "departure": "Salida: 08:30 · Hora de Lisboa",
    "legal": [
      "Condiciones",
      "Cancelación",
      "Privacidad"
    ],
    "limit": "personas por reserva",
    "included": "Incluido",
    "excluded": "No incluido",
    "routeLabel": "Tu ruta",
    "detailsLabel": "Tus datos",
    "optional": "Peticiones opcionales",
    "saveDirect": "Reserva directa",
    "fxNote": "Los precios en USD son orientativos. El cobro se realiza en EUR; tu banco determina el cambio final.",
    "rateDate": "Cambio de referencia",
    "referencePrice": "Tarifa habitual"
  }
};
const BOKUN_CALENDARS={shared:'https://widgets.bokun.io/online-sales/0ad24c27-4662-4b4a-84b5-529459e1edd9/experience-calendar/1333724',private:'https://widgets.bokun.io/online-sales/0ad24c27-4662-4b4a-84b5-529459e1edd9/experience-calendar/1333723',walk:'https://widgets.bokun.io/online-sales/0ad24c27-4662-4b4a-84b5-529459e1edd9/experience-calendar/1333725'};
const grid=document.getElementById('tour-grid');
const dialog=document.getElementById('tour-dialog');
const dialogContent=document.getElementById('dialog-content');
const languageSelect=document.getElementById('language');
const currencySelect=document.getElementById('currency');
let currency=['EUR','USD'].includes(localStorage.getItem('act-currency'))?localStorage.getItem('act-currency'):'EUR';
let exchange={rate:1.1215,date:'2026-10-20'};
let availability={blocked:new Set(),minDate:''};

const esc=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const lang=()=>LANGS.includes(languageSelect?.value)?languageSelect.value:'en';
const c=()=>COPY[lang()];
const tourText=(tour,key)=>tour[key]?.[lang()]||tour[key]?.en||'';
const money=(price,unit=currency)=>(unit==='USD'?'≈ ':'')+new Intl.NumberFormat(lang()==='pt'?'pt-PT':lang(),{style:'currency',currency:unit}).format(price*(unit==='USD'?exchange.rate:1));
const otherMoney=price=>money(price,currency==='EUR'?'USD':'EUR');
function priceBlock(t){return '<span class="bokun-price-prompt">'+esc(({en:'See live price and availability',pt:'Ver preço e disponibilidade',es:'Ver precio y disponibilidad'})[lang()])+'</span>';}
function refreshPrices(){renderTours();document.querySelectorAll('[data-price-tour]').forEach(n=>{const t=TOURS.find(t=>t.id===n.dataset.priceTour);if(t)n.innerHTML=priceBlock(t);});const note=document.getElementById('fx-note');if(note)note.textContent='';}

function renderTours(){const x=c();grid.innerHTML=TOURS.map(t=>`<article class="tour-card"><div class="tour-media"><span class="tour-badge">${esc(x.badge[TOURS.indexOf(t)])}</span><img src="${t.image}" alt="${esc(tourText(t,'title'))}" loading="lazy" decoding="async" srcset="${t.id==='walk'?'/site/images/sintra-pastries-480.webp 480w, /site/images/sintra-pastries-960.webp 960w':'/site/images/sintra-pena-480.webp 480w, /site/images/sintra-pena-960.webp 960w'}" sizes="(max-width:760px) 100vw, 33vw" width="640" height="480"></div><div class="tour-body"><span class="tour-meta">${t.hours} ${esc(x.hours)}</span><h3>${esc(tourText(t,'title'))}</h3><p>${esc(tourText(t,'summary'))}</p><div class="tour-bottom"><p class="price">${priceBlock(t)}</p><a href="/experiences/${({shared:'sintra-coast',private:'private-sintra',walk:'sintra-walk'})[t.id]}/?lang=${lang()}" class="button card-cta" aria-label="${esc(x.view)}: ${esc(tourText(t,'title'))}">${esc(x.view)}</a></div></div></article>`).join('');}

async function openTour(id){const t=TOURS.find(item=>item.id===id);if(!t)return;const x=c(),title=tourText(t,'title'),route=t.route[lang()]||t.route.en;dialogContent.innerHTML=`<img class="dialog-hero" src="${t.image}" srcset="${t.id==='walk'?'/site/images/sintra-pastries-480.webp 480w, /site/images/sintra-pastries-960.webp 960w':'/site/images/sintra-pena-480.webp 480w, /site/images/sintra-pena-960.webp 960w, /site/images/sintra-pena-1440.webp 1440w'}" sizes="(max-width:760px) 100vw, 1160px" decoding="async" alt="${esc(title)}"><div class="dialog-body"><section class="tour-detail"><p class="eyebrow dark">${t.hours} ${esc(x.hours)} · ${t.minGuests}–${t.maxGuests} ${esc(x.limit)}</p><${document.body.dataset.tour?'h1':'h2'} id="tour-title" tabindex="-1">${esc(title)}</${document.body.dataset.tour?'h1':'h2'}><p>${esc(tourText(t,'summary'))}</p><div class="mobile-book-jump"><span class="price" data-price-tour="${t.id}">${priceBlock(t)}</span><button class="button" type="button" data-jump-booking>${esc(x.book)}</button></div><h3>${esc(x.routeLabel)}</h3><ol class="route">${route.map(item=>`<li>${esc(item)}</li>`).join('')}</ol><div class="booking-inclusions"><div><h3>${esc(x.included)}</h3><p>${esc(x.includedTour[TOURS.indexOf(t)])}</p></div><div><h3>${esc(x.excluded)}</h3><p>${esc(({en:'Monument tickets and meals (except included pastries).',pt:'Bilhetes de monumentos e refeições.',es:'Entradas a monumentos y comidas.',})[lang()])}</p></div></div><p class="cancellation-note"><a href="/cancellation/?lang=${lang()}" target="_blank" rel="noopener">${esc(({en:"Cancellation terms",pt:"Condições de cancelamento",es:"Condiciones de cancelación"})[lang()])} ↗</a></p></section><aside class="quick-booking bokun-booking"><h3>${esc(x.bookTour)}</h3><p>${esc(({en:"Select your date and group in the live booking calendar.",es:"Selecciona la fecha y el grupo en el calendario.",pt:"Selecione a data e o grupo no calendário."})[lang()])}</p><div class="bokunWidget" data-src="${BOKUN_CALENDARS[t.id]}"></div><noscript>Please enable JavaScript to book.</noscript><p class="bokun-fallback"><a href="${BOKUN_CALENDARS[t.id]}" target="_blank" rel="noopener noreferrer">${esc(({en:"Open booking in new tab",es:"Abrir reserva en otra pestaña",pt:"Abrir reserva noutra janela"})[lang()])} ↗</a></p></aside></div>`;dialog.querySelector('.dialog-close').setAttribute('aria-label',x.close);dialog.scrollTop=0;if(!dialog.open)dialog.showModal();if(!document.body.dataset.tour)document.body.classList.add('dialog-open');window.ACT_ANALYTICS?.track('view_item',{items:[{item_id:t.id,item_name:title}]});if(!document.body.dataset.tour)requestAnimationFrame(()=>dialog.querySelector('#tour-title')?.focus({preventScroll:true}));}

function setText(selector,value){const node=document.querySelector(selector);if(node)node.textContent=value;}
function applyCopy(){const x=c();localStorage.setItem('act-lang',lang());document.querySelector('.product-heading')?.remove();document.querySelector('.header nav')?.setAttribute('aria-label',x.navTours);document.documentElement.lang=lang()==='pt'?'pt-PT':lang();document.title=`${document.body.dataset.tour?tourText(TOURS.find(t=>t.id===document.body.dataset.tour),'title'):x.heroKicker} | About Culture Things`;const description=document.body.dataset.tour?tourText(TOURS.find(t=>t.id===document.body.dataset.tour),'summary'):x.heroText;document.querySelector('meta[name="description"]')?.setAttribute('content',description);document.querySelector('meta[property="og:description"]')?.setAttribute('content',description);document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title);document.querySelectorAll('[data-copy]').forEach(node=>{if(x[node.dataset.copy])node.textContent=x[node.dataset.copy];});setText('.skip',({en:'Skip to content',es:'Saltar al contenido',pt:'Saltar para o conteúdo',})[lang()]);setText('.direct-benefit strong',x.directTitle);setText('.direct-benefit span',x.directText);setText('.direct-benefit a',x.directCta+' →');document.querySelector('.booking-flow')?.setAttribute('aria-label',x.flowLabel);document.querySelectorAll('.booking-flow>div').forEach((node,i)=>{const pair=x.flow[i];if(pair){node.querySelector('strong').textContent=pair[0];node.querySelector('span').lastChild.textContent=pair[1];}});document.querySelector('.credential-strip')?.setAttribute('aria-label',x.directTitle);const credentialLinks=document.querySelectorAll('.credential-strip a');if(credentialLinks[1])credentialLinks[1].setAttribute('aria-label',x.google);const reviews=document.querySelector('.review-grid');if(reviews)reviews.innerHTML=x.reviews.map(([quote,by])=>`<blockquote><p>“${esc(quote)}”</p><footer>${esc(by)}</footer></blockquote>`).join('');const reviewLinks=document.querySelectorAll('.review-links a');if(reviewLinks[0])reviewLinks[0].textContent=x.tripadvisor+' ↗';if(reviewLinks[1])reviewLinks[1].textContent=x.google+' ↗';const faq=document.getElementById('faq-list');if(faq)faq.innerHTML=x.faq.map(([question,answer])=>`<details><summary>${esc(question)}<span aria-hidden="true">+</span></summary><p>${esc(answer)}</p></details>`).join('');const footerLinks=document.querySelectorAll('body>footer a');const mobileCta=document.querySelector('.mobile-cta');if(mobileCta)mobileCta.textContent=x.book;languageSelect.setAttribute('aria-label',x.languageLabel);currencySelect?.setAttribute('aria-label',x.currencyLabel);const whatsapp=document.querySelector('.whatsapp-float');if(whatsapp)whatsapp.setAttribute('aria-label',x.whatsapp);document.querySelectorAll('a[href^="/terms/"],a[href^="/cancellation/"],a[href^="/privacy/"]').forEach(a=>{const i=['terms','cancellation','privacy'].indexOf(a.pathname.split('/')[1]);a.textContent=x.legal[i];a.search='?lang='+lang()});document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=>a.href='https://wa.me/351968510019?text='+encodeURIComponent(x.whatsappMessage));const help=document.getElementById('rita-help');help.innerHTML=`<h2>${esc(x.help)}</h2><a href="https://wa.me/351968510019?text=${encodeURIComponent(x.whatsappMessage)}" target="_blank" rel="noopener">WhatsApp ↗</a><a href="tel:+351968510019">${esc(x.call)}</a>`;refreshPrices();window.ACT_MOBILE_COPY={navTours:x.navTours,navWhy:x.navWhy,navReviews:x.navReviews,book:x.book,language:x.languageLabel,currency:x.currencyLabel,open:x.menuOpen,close:x.menuClose};dispatchEvent(new CustomEvent('act:language-changed',{detail:window.ACT_MOBILE_COPY}));}

document.addEventListener('click',event=>{
 const opener=event.target.closest('[data-open-tour]');
 if(opener){const dest={shared:'sintra-coast',private:'private-sintra',walk:'sintra-walk'}[opener.dataset.openTour];if(dest){event.preventDefault();location.href='/experiences/'+dest+'/?lang='+lang();}}
 if(event.target.closest('.dialog-close')){if(document.body.dataset.tour)location.href='/?lang='+lang()+'#tours';else dialog.close();}
 if(event.target.closest('[data-jump-booking]'))dialog.querySelector('.bokun-booking')?.scrollIntoView({behavior:'smooth',block:'start'});
});
dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});

const detected=(navigator.language||'en').slice(0,2),requested=new URLSearchParams(location.search).get('lang');
languageSelect.value=LANGS.includes(requested)?requested:LANGS.includes(localStorage.getItem('act-lang'))?localStorage.getItem('act-lang'):LANGS.includes(detected)?detected:'en';
if(currencySelect)currencySelect.value=currency;
languageSelect.addEventListener('change',()=>{localStorage.setItem('act-lang',lang());if(document.body.dataset.tour){location.assign(location.pathname+'?lang='+lang());return;}applyCopy();});
currencySelect?.addEventListener('change',()=>{currency=currencySelect.value;localStorage.setItem('act-currency',currency);refreshPrices();});
applyCopy();
const bookingParam=document.body.dataset.tour||new URLSearchParams(location.search).get('book');
const requestedTour=({'sintra-coast':'shared','sintra':'shared'})[bookingParam]||bookingParam;
if(TOURS.some(t=>t.id===requestedTour)){if(document.body.dataset.tour)openTour(requestedTour);else location.replace('/experiences/'+({shared:'sintra-coast',private:'private-sintra',walk:'sintra-walk'})[requestedTour]+'/?lang='+lang());}
