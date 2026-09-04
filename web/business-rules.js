/* Public business rules: keep product modality neutral and booking size consistent. */
(()=>{
  if(typeof COPY==='undefined')return;
  const neutral={
    en:{heroKicker:'Guided day tours across Portugal',heroTitle:'Portugal, personally guided.',heroText:'Day tours from Lisbon with hotel pickup, a local guide and easy secure booking.',trust1:'Local guided experience',trust2:'2–4 travellers per booking',why3Title:'Personal attention',why3Text:'A carefully guided experience for your booking of 2 to 4 travellers.',footerText:'Guided day tours across Portugal.',minGuests:'2–4 travellers per booking',faqPeople:'Each purchase is for 2 to 4 travellers. Other customers may book a tour on the same date.'},
    pt:{heroKicker:'Tours guiados por Portugal',heroTitle:'Portugal, com acompanhamento local.',heroText:'Tours desde Lisboa, com recolha no alojamento, guia local e reserva simples e segura.',trust1:'Experiência guiada local',trust2:'2–4 viajantes por reserva',why3Title:'Atenção pessoal',why3Text:'Uma experiência acompanhada com cuidado para reservas de 2 a 4 viajantes.',footerText:'Tours guiados por Portugal.',minGuests:'2–4 viajantes por reserva',faqPeople:'Cada compra é para 2 a 4 viajantes. Outros clientes podem reservar um tour na mesma data.'},
    es:{heroKicker:'Tours guiados por Portugal',heroTitle:'Portugal, con acompañamiento local.',heroText:'Tours desde Lisboa, con recogida en el alojamiento, guía local y reserva sencilla y segura.',trust1:'Experiencia guiada local',trust2:'2–4 viajeros por reserva',why3Title:'Atención personal',why3Text:'Una experiencia guiada con cuidado para reservas de 2 a 4 viajeros.',footerText:'Tours guiados por Portugal.',minGuests:'2–4 viajeros por reserva',faqPeople:'Cada compra es para 2 a 4 viajeros. Otros clientes pueden reservar un tour en la misma fecha.'},
    fr:{heroKicker:'Excursions guidées au Portugal',heroTitle:'Le Portugal, accompagné localement.',heroText:'Excursions depuis Lisbonne avec prise en charge à votre hébergement, guide local et réservation simple et sécurisée.',trust1:'Expérience guidée locale',trust2:'2–4 voyageurs par réservation',why3Title:'Attention personnalisée',why3Text:'Une expérience guidée avec soin pour des réservations de 2 à 4 voyageurs.',footerText:'Excursions guidées au Portugal.',minGuests:'2–4 voyageurs par réservation',faqPeople:'Chaque réservation comprend 2 à 4 voyageurs. D’autres clients peuvent réserver une excursion à la même date.'},
    de:{heroKicker:'Geführte Tagestouren durch Portugal',heroTitle:'Portugal, persönlich begleitet.',heroText:'Tagestouren ab Lissabon mit Abholung an Ihrer Unterkunft, lokaler Begleitung und einfacher sicherer Buchung.',trust1:'Lokal geführtes Erlebnis',trust2:'2–4 Reisende pro Buchung',why3Title:'Persönliche Betreuung',why3Text:'Ein sorgfältig begleitetes Erlebnis für Buchungen mit 2 bis 4 Reisenden.',footerText:'Geführte Tagestouren durch Portugal.',minGuests:'2–4 Reisende pro Buchung',faqPeople:'Jede Buchung gilt für 2 bis 4 Reisende. Andere Gäste können am selben Datum ebenfalls eine Tour buchen.'}
  };
  Object.entries(neutral).forEach(([lng,n])=>{
    const x=COPY[lng];if(!x)return;
    Object.assign(x,{heroKicker:n.heroKicker,heroTitle:n.heroTitle,heroText:n.heroText,trust1:n.trust1,trust2:n.trust2,why3Title:n.why3Title,why3Text:n.why3Text,footerText:n.footerText,minGuests:n.minGuests});
    if(Array.isArray(x.faq)&&x.faq[2])x.faq[2][1]=n.faqPeople;
  });
  try{guestOptions=()=>[2,3,4].map(n=>`<option value="${n}">${n}</option>`).join('')}catch{}
  const language=document.getElementById('language');
  if(language)language.dispatchEvent(new Event('change',{bubbles:true}));
})();
