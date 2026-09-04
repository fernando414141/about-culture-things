(()=>{
 const GOOGLE='https://maps.app.goo.gl/JosKiKLDV5rY35Hz5';
 const TRIP_READ='https://www.tripadvisor.co.uk/Attraction_Review-g189158-d28016472-Reviews-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html';
 const TRIP_REVIEW='https://www.tripadvisor.com/UserReviewEdit-g189158-d28016472-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html';
 const COPY={
  en:{tripRead:'Read TripAdvisor reviews',tripLeave:'Leave a TripAdvisor review',googleLeave:'Review us on Google',trust:['Local guides','Hotel pickup & return','Free cancellation up to 48 hours','Secure Stripe payment']},
  pt:{tripRead:'Ler avaliações no TripAdvisor',tripLeave:'Deixar uma avaliação no TripAdvisor',googleLeave:'Avaliar-nos no Google',trust:['Guias locais','Recolha e regresso ao alojamento','Cancelamento gratuito até 48 horas','Pagamento seguro pela Stripe']},
  es:{tripRead:'Leer opiniones en TripAdvisor',tripLeave:'Dejar una opinión en TripAdvisor',googleLeave:'Déjanos una reseña en Google',trust:['Guías locales','Recogida y regreso al alojamiento','Cancelación gratuita hasta 48 horas','Pago seguro con Stripe']},
  fr:{tripRead:'Lire les avis TripAdvisor',tripLeave:'Laisser un avis sur TripAdvisor',googleLeave:'Nous laisser un avis Google',trust:['Guides locaux','Prise en charge et retour à l’hébergement','Annulation gratuite jusqu’à 48 h','Paiement sécurisé par Stripe']},
  de:{tripRead:'TripAdvisor-Bewertungen lesen',tripLeave:'Auf TripAdvisor bewerten',googleLeave:'Auf Google bewerten',trust:['Lokale Guides','Abholung und Rückfahrt zur Unterkunft','Kostenlose Stornierung bis 48 Std.','Sichere Stripe-Zahlung']}
 };
 function lang(){const l=(document.documentElement.lang||'en').slice(0,2).toLowerCase();return COPY[l]?l:'en'}
 function cleanStructure(){
  document.querySelector('.credential-strip')?.remove();
  document.querySelector('.direct-benefit')?.remove();
  document.querySelector('.booking-flow')?.remove();
  const reviews=document.querySelector('#reviews');
  if(reviews){
   let links=reviews.querySelector('.review-links,.review-actions');
   if(!links){links=document.createElement('div');reviews.appendChild(links)}
   links.className='review-links';
   links.innerHTML=`<a href="${TRIP_READ}" target="_blank" rel="noopener" data-review-copy="tripRead"></a><a class="review-primary" href="${TRIP_REVIEW}" target="_blank" rel="noopener" data-review-copy="tripLeave"></a><a href="${GOOGLE}" target="_blank" rel="noopener" data-review-copy="googleLeave"></a>`;
  }
  const footer=document.querySelector('footer');
  if(footer){footer.querySelectorAll('a').forEach(a=>{const t=(a.textContent||'').trim().toLowerCase();if(t==='google')a.href=GOOGLE;if(t==='tripadvisor')a.href=TRIP_READ})}
  const schema=[...document.querySelectorAll('script[type="application/ld+json"]')].find(s=>s.textContent.includes('TravelAgency'));
  if(schema){try{const data=JSON.parse(schema.textContent);const graph=data['@graph'];if(Array.isArray(graph)){const business=graph.find(x=>x&&x['@type']==='TravelAgency');if(business){const same=new Set(business.sameAs||[]);same.add(GOOGLE);same.add(TRIP_READ);business.sameAs=[...same]}}schema.textContent=JSON.stringify(data)}catch{}}
 }
 function sync(){
  const c=COPY[lang()];
  const trust=document.querySelector('.trust');if(trust)trust.innerHTML=c.trust.map(x=>`<span>${x}</span>`).join('');
  document.querySelectorAll('[data-review-copy="tripRead"]').forEach(el=>el.textContent=c.tripRead);
  document.querySelectorAll('[data-review-copy="tripLeave"]').forEach(el=>el.textContent=c.tripLeave);
  document.querySelectorAll('[data-review-copy="googleLeave"]').forEach(el=>el.textContent=c.googleLeave);
 }
 cleanStructure();sync();
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
