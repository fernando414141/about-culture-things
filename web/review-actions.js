(()=>{
 const COPY={
  en:{googleProfile:'View Google profile',tripRead:'Read TripAdvisor reviews',tripLeave:'Leave a TripAdvisor review',googleLeave:'Leave a Google review'},
  pt:{googleProfile:'Ver perfil no Google',tripRead:'Ler avaliações no TripAdvisor',tripLeave:'Deixar uma avaliação no TripAdvisor',googleLeave:'Deixar uma avaliação no Google'},
  es:{googleProfile:'Ver perfil en Google',tripRead:'Leer opiniones en TripAdvisor',tripLeave:'Dejar una opinión en TripAdvisor',googleLeave:'Dejar una reseña en Google'},
  fr:{googleProfile:'Voir le profil Google',tripRead:'Lire les avis TripAdvisor',tripLeave:'Laisser un avis sur TripAdvisor',googleLeave:'Laisser un avis sur Google'},
  de:{googleProfile:'Google-Profil ansehen',tripRead:'TripAdvisor-Bewertungen lesen',tripLeave:'Auf TripAdvisor bewerten',googleLeave:'Auf Google bewerten'}
 };
 function lang(){const l=(document.documentElement.lang||'en').slice(0,2).toLowerCase();return COPY[l]?l:'en'}
 function sync(){const c=COPY[lang()];document.querySelectorAll('[data-review-copy="googleProfile"]').forEach(el=>el.textContent=c.googleProfile);document.querySelectorAll('[data-review-copy="tripRead"]').forEach(el=>el.textContent=c.tripRead);document.querySelectorAll('[data-review-copy="tripLeave"]').forEach(el=>el.textContent=c.tripLeave);document.querySelectorAll('[data-review-copy="googleLeave"]').forEach(el=>el.textContent=c.googleLeave)}
 sync();new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
