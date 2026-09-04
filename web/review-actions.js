(()=>{
 const GOOGLE='https://maps.app.goo.gl/JosKiKLDV5rY35Hz5';
 const TRIP_READ='https://www.tripadvisor.co.uk/Attraction_Review-g189158-d28016472-Reviews-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html';
 const TRIP_REVIEW='https://www.tripadvisor.com/UserReviewEdit-g189158-d28016472-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html';
 const COPY={
  en:{tripRead:'See all TripAdvisor reviews',tripLeave:'Write a TripAdvisor review',googleLeave:'Review us on Google',ratingLabel:'Excellent',ratingMeta:'5.0 · 40 reviews on TripAdvisor',verified:'Guest review',trust:['Local guides','Hotel pickup & return','Free cancellation up to 48 hours','Secure Stripe payment']},
  pt:{tripRead:'Ver todas no TripAdvisor',tripLeave:'Escrever no TripAdvisor',googleLeave:'Avaliar-nos no Google',ratingLabel:'Excelente',ratingMeta:'5,0 · 40 avaliações no TripAdvisor',verified:'Avaliação de viajante',trust:['Guias locais','Recolha e regresso ao alojamento','Cancelamento gratuito até 48 horas','Pagamento seguro pela Stripe']},
  es:{tripRead:'Ver todas en TripAdvisor',tripLeave:'Escribir en TripAdvisor',googleLeave:'Déjanos una reseña en Google',ratingLabel:'Excelente',ratingMeta:'5,0 · 40 opiniones en TripAdvisor',verified:'Opinión de viajero',trust:['Guías locales','Recogida y regreso al alojamiento','Cancelación gratuita hasta 48 horas','Pago seguro con Stripe']},
  fr:{tripRead:'Voir tous les avis TripAdvisor',tripLeave:'Écrire un avis TripAdvisor',googleLeave:'Nous laisser un avis Google',ratingLabel:'Excellent',ratingMeta:'5,0 · 40 avis sur TripAdvisor',verified:'Avis voyageur',trust:['Guides locaux','Prise en charge et retour à l’hébergement','Annulation gratuite jusqu’à 48 h','Paiement sécurisé par Stripe']},
  de:{tripRead:'Alle TripAdvisor-Bewertungen',tripLeave:'TripAdvisor-Bewertung schreiben',googleLeave:'Auf Google bewerten',ratingLabel:'Ausgezeichnet',ratingMeta:'5,0 · 40 Bewertungen auf TripAdvisor',verified:'Gästebewertung',trust:['Lokale Guides','Abholung und Rückfahrt zur Unterkunft','Kostenlose Stornierung bis 48 Std.','Sichere Stripe-Zahlung']}
 };
 function lang(){const l=(document.documentElement.lang||'en').slice(0,2).toLowerCase();return COPY[l]?l:'en'}
 function cleanStructure(){
  document.querySelector('.credential-strip')?.remove();
  document.querySelector('.direct-benefit')?.remove();
  document.querySelector('.booking-flow')?.remove();
  const reviews=document.querySelector('#reviews');
  if(reviews){
   let summary=reviews.querySelector('.review-summary');
   if(!summary){
    summary=document.createElement('div');
    summary.className='review-summary';
    const grid=reviews.querySelector('.review-grid');
    reviews.insertBefore(summary,grid);
   }
   summary.innerHTML=`<div class="review-score"><div class="review-score__stars" aria-hidden="true">★★★★★</div><div><strong data-review-copy="ratingLabel"></strong><span data-review-copy="ratingMeta"></span></div></div><a href="${TRIP_READ}" target="_blank" rel="noopener" class="review-summary__link" data-review-copy="tripRead"></a>`;
   reviews.querySelectorAll('.review-grid blockquote').forEach(q=>{if(!q.querySelector('.review-card__meta')){const f=q.querySelector('footer');const meta=document.createElement('div');meta.className='review-card__meta';meta.innerHTML='<span class="review-card__stars" aria-hidden="true">★★★★★</span><span data-review-copy="verified"></span>';q.insertBefore(meta,q.firstChild);if(f)f.classList.add('review-card__author')}});
   let links=reviews.querySelector('.review-links,.review-actions');
   if(!links){links=document.createElement('div');reviews.appendChild(links)}
   links.className='review-actions';
   links.innerHTML=`<a class="review-actions__primary" href="${TRIP_REVIEW}" target="_blank" rel="noopener" data-review-copy="tripLeave"></a><a href="${GOOGLE}" target="_blank" rel="noopener" data-review-copy="googleLeave"></a>`;
  }
  const footer=document.querySelector('footer');
  if(footer){footer.querySelectorAll('a').forEach(a=>{const t=(a.textContent||'').trim().toLowerCase();if(t==='google')a.href=GOOGLE;if(t==='tripadvisor')a.href=TRIP_READ})}
 }
 function sync(){
  const c=COPY[lang()];
  const trust=document.querySelector('.trust');if(trust)trust.innerHTML=c.trust.map(x=>`<span>${x}</span>`).join('');
  ['tripRead','tripLeave','googleLeave','ratingLabel','ratingMeta','verified'].forEach(k=>document.querySelectorAll(`[data-review-copy="${k}"]`).forEach(el=>el.textContent=c[k]));
 }
 cleanStructure();sync();
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
