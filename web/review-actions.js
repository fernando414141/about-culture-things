(()=>{
 const GOOGLE='https://maps.app.goo.gl/JosKiKLDV5rY35Hz5';
 const TRIP_PROFILE='https://www.tripadvisor.co.uk/Attraction_Review-g189158-d28016472-Reviews-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html';
 const TRIP_REVIEW='https://www.tripadvisor.com/UserReviewEdit-g189158-d28016472-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html';
 const COPY={
  en:{googleProfile:'View Google profile',tripRead:'Read TripAdvisor reviews',tripLeave:'Leave a TripAdvisor review',googleLeave:'Leave a Google review'},
  pt:{googleProfile:'Ver perfil no Google',tripRead:'Ler avaliações no TripAdvisor',tripLeave:'Deixar uma avaliação no TripAdvisor',googleLeave:'Deixar uma avaliação no Google'},
  es:{googleProfile:'Ver perfil en Google',tripRead:'Leer opiniones en TripAdvisor',tripLeave:'Dejar una opinión en TripAdvisor',googleLeave:'Dejar una reseña en Google'},
  fr:{googleProfile:'Voir le profil Google',tripRead:'Lire les avis TripAdvisor',tripLeave:'Laisser un avis sur TripAdvisor',googleLeave:'Laisser un avis sur Google'},
  de:{googleProfile:'Google-Profil ansehen',tripRead:'TripAdvisor-Bewertungen lesen',tripLeave:'Auf TripAdvisor bewerten',googleLeave:'Auf Google bewerten'}
 };
 function lang(){const l=(document.documentElement.lang||'en').slice(0,2).toLowerCase();return COPY[l]?l:'en'}
 function sync(){
  const c=COPY[lang()];
  document.querySelectorAll('a[href*="google.com/maps/search"],a[href*="maps.app.goo.gl"]').forEach(a=>{a.href=GOOGLE;if(a.closest('.credential-strip')){a.classList.add('review-profile-link');a.innerHTML='<b>Google</b> <span data-review-copy="googleProfile"></span>'}else if(a.closest('footer')){a.textContent='Google'};});
  document.querySelectorAll('a[href*="Attraction_Review-g189158-d28016472"]').forEach(a=>{a.href=TRIP_PROFILE});
  document.querySelectorAll('[data-review-copy="googleProfile"]').forEach(el=>el.textContent=c.googleProfile);
  const area=document.querySelector('#reviews .review-links');
  if(area){area.className='review-actions';area.innerHTML=`<a href="${TRIP_PROFILE}" target="_blank" rel="noopener" data-review-copy="tripRead"></a><a class="review-actions__primary" href="${TRIP_REVIEW}" target="_blank" rel="noopener" data-review-copy="tripLeave"></a><a href="${GOOGLE}" target="_blank" rel="noopener" data-review-copy="googleLeave"></a>`;}
  document.querySelectorAll('[data-review-copy="tripRead"]').forEach(el=>el.textContent=c.tripRead);
  document.querySelectorAll('[data-review-copy="tripLeave"]').forEach(el=>el.textContent=c.tripLeave);
  document.querySelectorAll('[data-review-copy="googleLeave"]').forEach(el=>el.textContent=c.googleLeave);
 }
 sync();new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
