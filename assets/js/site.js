// ─── SCROLL PROGRESS ─────────────────────────────────
(function(){
  var bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;
  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? ((scrollTop / docHeight) * 100).toFixed(2) + '%' : '0%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();

// ─── HERO PARALLAX ───────────────────────────────────
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var hero = document.querySelector('.hero');
  var bg = document.querySelector('.hero-poster');
  if (!hero || !bg) return;
  var ticking = false;
  window.addEventListener('scroll', function(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      var y = window.scrollY;
      if (y < hero.offsetHeight) {
        bg.style.transform = 'scale(1.02) translateY(' + (y * 0.12).toFixed(1) + 'px)';
      }
      ticking = false;
    });
  }, { passive: true });
})();

// ─── HERO VIDEO ──────────────────────────────────────
(function(){
  var video = document.querySelector('.hero-bg-video');
  var hero = document.querySelector('.hero');
  if (!video || !hero) return;
  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn && (conn.saveData || conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g')) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute('muted', '');

  function markPlaying() { hero.classList.add('has-video-playing'); }

  function tryPlay() {
    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === 'function') {
      playAttempt.then(markPlaying).catch(function(){});
    } else if (!video.paused) markPlaying();
  }

  if (video.readyState >= 2) tryPlay();
  else video.addEventListener('loadeddata', tryPlay, { once: true });
})();

// ─── BACK TO TOP ─────────────────────────────────────
(function(){
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  function toggle() {
    var desktopLike = window.innerWidth >= 768;
    btn.hidden = !desktopLike;
    btn.classList.toggle('visible', desktopLike && window.scrollY > 600);
  }
  window.addEventListener('scroll', toggle, { passive: true });
  window.addEventListener('resize', toggle);
  toggle();
  btn.addEventListener('click', function(){ window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();

// ─── i18n DATA ───────────────────────────────────────
const i18n = {
  en: {
    "skip-link": "Skip to main content",
    "hero-scroll-aria": "Scroll to Why Rita section",
    "back-to-top-aria": "Back to top",
    "meta-title": "About Culture Things — Private Sintra Tours | Rita Almeida",
    "meta-description": "Private Sintra tours with Rita Almeida — Pena Palace, hidden beaches, Cascais coast. 5.0★ TripAdvisor. Lisbon pickup, max 4 people.",
    "tours-trust-aria": "Tour guarantees",
    "tours-compare-aria": "How booking works",
    "nav-tours": "Tours",
    "nav-why": "Why Rita",
    "nav-about": "About",
    "nav-reviews": "Reviews",
    "nav-faq": "FAQ",
    "nav-book": "Book",
    "mob-whatsapp": "Book now",
    "mob-nav-title": "Menu",
    "lang-kicker": "Language",
    "fab-aria": "Book on WhatsApp",
    "fab-tooltip": "Book on WhatsApp",
    "about-name": "Rita Almeida",
    "badge-popular": "Signature Journey",
    "badge-value": "Best Value",
    "nav-cta": "Book now",
    "hero-trust-1": "Private tours only",
    "hero-trust-2": "5.0 ★ TripAdvisor",
    "hero-trust-3": "Lisbon pickup included",
    "hero-trust-4": "Up to 4 guests",
    "hero-kicker": "Private Sintra Tours",
    "hero-brand": "About Culture Things",
    "hero-h1": "Private Sintra, <em>beautifully guided.</em>",
    "hero-desc": "Sintra and the Atlantic coast, privately guided by Rita Almeida — a Sintra local.",
    "hero-cta-primary": "Check availability",
    "hero-cta-secondary": "See tours",
    "why-kicker": "Why Rita",
    "why-h2": "Quiet luxury. <em>Local access</em>",
    "why-desc": "A private day shaped around your pace, with the confidence of a Sintra local guiding every stop.",
    "why1-kicker": "Sintra native",
    "why1-h3": "Born and raised in Sintra",
    "why1-p": "Rita knows the roads, timing, viewpoints, and quieter corners that typical day trips miss.",
    "why2-kicker": "Private only",
    "why2-h3": "Only your group, never mixed",
    "why2-p": "Every route, stop, and tempo is adapted to your interests instead of a rigid group schedule.",
    "why3-kicker": "Hidden spots",
    "why3-h3": "Iconic views, minus the rush",
    "why3-p": "Expect scenic detours, local perspective, and a calmer experience of Sintra and the coast.",
    "tours-kicker": "Tours",
    "tours-h2": "Choose your day",
    "tours-desc": "Two private routes, one standard: elegant pacing, local insight, and direct booking with Rita.",
    "trust-1": "5.0 TripAdvisor",
    "trust-2": "Local guide born in Sintra",
    "trust-3": "Max 4 guests",
    "trust-4": "Pickup in Lisbon included",
    "compare-1-label": "Best For",
    "compare-1-value": "First-time visitors who want the full Sintra day",
    "compare-2-label": "Format",
    "compare-2-value": "Private car tour with one guide and one group",
    "compare-3-label": "Booking",
    "compare-3-value": "Direct with Rita, with quick availability confirmation",
    "tour1-name": "Sintra Complete Experience & Atlantic Coast",
    "tour1-tag": "7 hours · Max 4 people",
    "tour1-summary": "Historic Sintra · Pena area · Cabo da Roca · Cascais",
    "tour1-highlight-1": "Best for a full first day in Sintra",
    "tour1-highlight-2": "Combines palaces, coast, and Cascais",
    "tour1-price": "€299",
    "tour1-price-sub": "From €75/person · group of 4",
    "tour1-places": "Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Cabo da Roca · Cascais",
    "tour2-name": "Sintra & Hidden Beaches Experience",
    "tour2-tag": "5 hours · Max 4 people",
    "tour2-summary": "Sintra hills · Hidden coves · Azenhas do Mar",
    "tour2-highlight-1": "Best for a shorter coastal escape",
    "tour2-highlight-2": "Focused on hidden beaches and sea views",
    "tour2-price": "€275",
    "tour2-price-sub": "From €69/person · group of 4",
    "tour2-places": "Sintra Historic Center · National Palace Area · Castelo dos Mouros Viewpoint · Serra de Sintra · Pena Palace Viewpoint · Praia das Maçãs · Azenhas do Mar · Praia da Aguda",
    "tour-per": "per group",
    "tour-note-tickets": "Tickets not included · Lisbon pickup",
    "tour1-cta": "Book full-day tour",
    "tour2-cta": "Book coastal tour",
    "tour-details-open": "Full itinerary",
    "about-kicker": "About Rita",
    "about-h2": "The person behind <em>the day</em>",
    "about-role": "Founder · Private Tour Guide",
    "about-bio": "Born and raised in Sintra, Rita hosts private tours with calm pacing, local insight, and room to enjoy the day.",
    "about-pull": "\"Private guiding with warmth, local instinct, and room to actually enjoy the day.\"",
    "about-creds-aria": "Rita Almeida's skills and credentials",
    "about-cred-1-label": "Local guide",
    "about-cred-1-value": "Born & raised in Sintra",
    "about-cred-2-label": "Rating",
    "about-cred-2-value": "5.0 TripAdvisor",
    "about-cred-3-label": "Languages",
    "about-cred-3-value": "PT · EN · ES",
    "about-cred-4-label": "Reviews",
    "about-cred-4-value": "6 verified TripAdvisor reviews",
    "about-cta": "Message Rita",
    "reviews-kicker": "Reviews",
    "reviews-h2": "Trusted by travelers",
    "reviews-google-label": "TripAdvisor",
    "reviews-count": "6 verified reviews",
    "reviews-view-btn": "View more on TripAdvisor",
    "rv-tag-tour": "Sintra Tour",
    "rv2-text": "\"Warm, personal, and full of local insight. Rita made Sintra feel special from start to finish.\"",
    "rv-monica-text": "\"Clear, friendly, and well-paced. Rita knew exactly where to go and how to make it easy.\"",
    "rv-fernando-text": "\"Local knowledge made the difference. We saw places we would never have found on our own.\"",
    "rv4-text": "\"A relaxed private tour with great stories, smart pacing, and thoughtful local recommendations.\"",
    "rv5-text": "\"Professional, warm, and deeply knowledgeable. The whole day felt easy and well looked after.\"",
    "rv6-text": "\"Memorable from the first stop. Rita showed the best viewpoints and hidden spots with care.\"",
    "faq-kicker": "FAQ",
    "faq-h2": "Common questions",
    "faq1-q": "What do the Sintra tours include?",
    "faq1-a": "All tours include pickup in Lisbon, a private guide (Rita Almeida), and transport. Maximum 4 people per tour. Palace and monument tickets are not included.",
    "faq2-q": "What payment methods do you accept?",
    "faq2-a": "We accept cryptocurrency, Revolut, Wise, MBWay, SEPA bank transfer, and cash. Payment details are sent after you check availability.",
    "faq3-q": "Can I cancel or reschedule?",
    "faq3-a": "Yes. Tours can be cancelled or rescheduled with 24 hours' notice at no cost.",
    "faq4-q": "Are the tours suitable for children or seniors?",
    "faq4-a": "Yes. Because every tour is private, Rita can adapt the pace and stops to your group.",
    "faq5-q": "Is lunch included?",
    "faq5-a": "Lunch is not included, but Rita can suggest good local places along the route.",
    "faq6-q": "Can the tour be customized?",
    "faq6-a": "Yes. Because the tours are private, Rita can tailor the stops and pace to your interests, weather, and timing.",
    "faq-cta": "Need help? Contact Rita",
    "final-kicker": "Final Step",
    "footer-note": "Private Sintra tours by Rita Almeida. Local knowledge, quiet pacing, and direct booking with one guide.",
    "footer-explore": "Explore",
    "footer-connect": "Connect",
    "footer-badges-aria": "Service highlights",
    "footer-connect-aria": "Connect with Rita",
    "reviews-more": "View more",
    "reviews-less": "View less",
    "cta-h2": "Reserve your day in Sintra",
    "cta-tagline": "Tell Rita your dates, your group size, and the kind of day you want. She’ll come back with the best route and availability.",
    "booking-steps-aria": "How booking works",
    "booking-step-1": "Message Rita on WhatsApp with your dates and group size",
    "booking-step-2": "Confirm your route, timing, and availability together",
    "booking-step-3": "Pay and enjoy your private day in Sintra",
    "cta-points-aria": "Response details",
    "cta-point-1": "Reply within 24h",
    "cta-point-2": "WhatsApp response usually within 1h",
    "cta-email-label": "Or send an email",
    "cta-book": "Message Rita on WhatsApp",
    "cta-note": "Direct with Rita · No booking fee",
    "foot-why": "Why Rita",
    "foot-tours": "Tours",
    "foot-about": "About",
    "foot-reviews": "Reviews",
    "foot-book": "Book",
    "foot-instagram-link": "Instagram",
    "foot-faq": "FAQ",
    "foot-whatsapp": "WhatsApp",
    "foot-whatsapp-aria": "WhatsApp (opens in new tab)",
    "foot-email": "Email",
    "foot-email-aria": "Email Rita",
    "foot-instagram": "Instagram",
    "foot-instagram-aria": "Instagram (opens in new tab)",
    "foot-badge-online": "Sintra & Lisbon",
    "foot-remote": "5.0★ TripAdvisor",
    "foot-worldwide": "Premium Service"
  },
  es: {
    "skip-link": "Saltar al contenido principal",
    "hero-scroll-aria": "Ir a la sección Por qué Rita",
    "back-to-top-aria": "Volver arriba",
    "meta-title": "About Culture Things — Tours Privados en Sintra | Rita Almeida",
    "meta-description": "Tours privados en Sintra con Rita Almeida — Palacio da Pena, playas secretas, costa de Cascais. 5.0★ TripAdvisor. Recogida en Lisboa, máx. 4 personas.",
    "tours-trust-aria": "Garantías del tour",
    "tours-compare-aria": "Cómo funciona la reserva",
    "nav-tours": "Tours",
    "nav-why": "Por qué Rita",
    "nav-about": "Sobre",
    "nav-reviews": "Reseñas",
    "nav-faq": "FAQ",
    "nav-book": "Reservar",
    "mob-whatsapp": "Reservar",
    "mob-nav-title": "Menú",
    "lang-kicker": "Idioma",
    "fab-aria": "Reservar por WhatsApp",
    "fab-tooltip": "Reservar por WhatsApp",
    "about-name": "Rita Almeida",
    "badge-popular": "Experiencia Exclusiva",
    "badge-value": "Mejor Valor",
    "nav-cta": "Reservar",
    "hero-trust-1": "Tours solo privados",
    "hero-trust-2": "5.0 ★ TripAdvisor",
    "hero-trust-3": "Recogida en Lisboa incluida",
    "hero-trust-4": "Hasta 4 personas",
    "hero-kicker": "Tours Privados en Sintra",
    "hero-brand": "About Culture Things",
    "hero-h1": "Sintra en privado, <em>bien guiada.</em>",
    "hero-desc": "Sintra y la costa atlántica, en privado con Rita Almeida — local de Sintra.",
    "hero-cta-primary": "Consultar disponibilidad",
    "hero-cta-secondary": "Ver tours",
    "hero-note": "Reserva directa con Rita · Respuesta habitual en 24h",
    "why-kicker": "Por qué Rita",
    "why-h2": "Lujo tranquilo. <em>Acceso local</em>",
    "why-desc": "Un día privado marcado por tu ritmo, con la seguridad de una guía local de Sintra.",
    "why1-kicker": "Nativa de Sintra",
    "why1-h3": "Nacida y criada en Sintra",
    "why1-p": "Rita conoce las carreteras, los horarios, los miradores y los rincones tranquilos que otros tours pasan por alto.",
    "why2-kicker": "Solo privado",
    "why2-h3": "Solo tu grupo, nunca mezclado",
    "why2-p": "Cada ruta, parada y ritmo se adapta a tus intereses en lugar de seguir un horario rígido de grupo.",
    "why3-kicker": "Lugares ocultos",
    "why3-h3": "Vistas icónicas, sin prisas",
    "why3-p": "Espera desvíos escénicos, perspectiva local y una forma más calmada de vivir Sintra y la costa.",
    "tours-kicker": "Tours",
    "tours-h2": "Elige tu día",
    "tours-desc": "Dos rutas privadas, un mismo estándar: ritmo elegante, mirada local y reserva directa con Rita.",
    "trust-1": "5.0 TripAdvisor",
    "trust-2": "Guía local nacida en Sintra",
    "trust-3": "Máx. 4 personas",
    "trust-4": "Recogida en Lisboa incluida",
    "compare-1-label": "Ideal Para",
    "compare-1-value": "Quienes visitan Sintra por primera vez y quieren el día completo",
    "compare-2-label": "Formato",
    "compare-2-value": "Tour privado en coche con una guía y un solo grupo",
    "compare-3-label": "Reserva",
    "compare-3-value": "Directo con Rita, con confirmación rápida de disponibilidad",
    "tour1-name": "Sintra Completa & Costa Atlántica",
    "tour1-tag": "7 horas · Máx. 4 personas",
    "tour1-summary": "Sintra histórica · Pena · Cabo da Roca · Cascais",
    "tour1-highlight-1": "Ideal para un primer día completo en Sintra",
    "tour1-highlight-2": "Combina palacios, costa y Cascais",
    "tour1-price": "€299",
    "tour1-price-sub": "Desde €75/persona · grupo de 4",
    "tour1-places": "Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Cabo da Roca · Cascais",
    "tour2-name": "Sintra & Playas Escondidas",
    "tour2-tag": "5 horas · Máx. 4 personas",
    "tour2-summary": "Colinas de Sintra · Calas ocultas · Azenhas do Mar",
    "tour2-highlight-1": "Ideal para una escapada costera más corta",
    "tour2-highlight-2": "Enfocado en playas escondidas y vistas al mar",
    "tour2-price": "€275",
    "tour2-price-sub": "Desde €69/persona · grupo de 4",
    "tour2-places": "Centro Histórico de Sintra · Zona del Palacio Nacional · Mirador Castelo dos Mouros · Serra de Sintra · Mirador Palacio de la Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda",
    "tour-per": "por grupo",
    "tour-note-tickets": "Entradas no incluidas · Recogida en Lisboa",
    "tour1-cta": "Reservar día completo",
    "tour2-cta": "Reservar tour costero",
    "tour-details-open": "Itinerario completo",
    "about-kicker": "Sobre Rita",
    "about-h2": "La persona detrás <em>del día</em>",
    "about-role": "Fundadora · Guía privada",
    "about-bio": "Nacida y criada en Sintra, Rita guía tours privados con ritmo tranquilo, conocimiento local y tiempo para disfrutar el día.",
    "about-pull": "\"Guía privada con calidez, intuición local y tiempo real para disfrutar el día.\"",
    "about-creds-aria": "Habilidades y credenciales de Rita Almeida",
    "about-cred-1-label": "Guía local",
    "about-cred-1-value": "Nacida y criada en Sintra",
    "about-cred-2-label": "Valoración",
    "about-cred-2-value": "5.0 TripAdvisor",
    "about-cred-3-label": "Idiomas",
    "about-cred-3-value": "PT · EN · ES",
    "about-cred-4-label": "Reseñas",
    "about-cred-4-value": "6 reseñas verificadas en TripAdvisor",
    "about-cta": "Escribir a Rita",
    "reviews-kicker": "Reseñas",
    "reviews-h2": "La confianza de los viajeros",
    "reviews-google-label": "TripAdvisor",
    "reviews-count": "6 reseñas verificadas",
    "reviews-view-btn": "Ver más en TripAdvisor",
    "rv-tag-tour": "Tour Sintra",
    "rv2-text": "\"Cálida, cercana y con mucho conocimiento local. Rita hizo que Sintra se sintiera especial.\"",
    "rv-monica-text": "\"Muy clara, amable y bien organizada. Rita supo exactamente a dónde ir y cómo hacerlo fácil.\"",
    "rv-fernando-text": "\"Su conocimiento local marcó la diferencia. Vimos lugares que nunca habríamos encontrado solos.\"",
    "rv4-text": "\"Un tour privado relajado, con buenas historias, buen ritmo y recomendaciones locales útiles.\"",
    "rv5-text": "\"Profesional, cálida y muy preparada. Todo el día se sintió fácil y bien cuidado.\"",
    "rv6-text": "\"Inolvidable desde la primera parada. Rita mostró miradores y rincones escondidos con cuidado.\"",
    "faq-kicker": "FAQ",
    "faq-h2": "Preguntas frecuentes",
    "faq1-q": "¿Qué incluyen los tours de Sintra?",
    "faq1-a": "Todos los tours incluyen recogida en Lisboa, guía privada (Rita Almeida) y transporte. Máximo 4 personas. Las entradas a palacios y monumentos no están incluidas.",
    "faq2-q": "¿Qué métodos de pago aceptáis?",
    "faq2-a": "Aceptamos criptomonedas, Revolut, Wise, MBWay, transferencia SEPA y efectivo. Los detalles de pago se envían después de comprobar disponibilidad.",
    "faq3-q": "¿Puedo cancelar o reagendar?",
    "faq3-a": "Sí. Los tours se pueden cancelar o reagendar con 24 horas de antelación sin coste.",
    "faq4-q": "¿Los tours son aptos para niños o personas mayores?",
    "faq4-a": "Sí. Como cada tour es privado, Rita puede adaptar el ritmo y las paradas a tu grupo.",
    "faq5-q": "¿El almuerzo está incluido?",
    "faq5-a": "El almuerzo no está incluido, pero Rita puede sugerir buenos lugares locales en la ruta.",
    "faq6-q": "¿Se puede personalizar el tour?",
    "faq6-a": "Sí. Como los tours son privados, Rita puede adaptar las paradas y el ritmo a tus intereses, el clima y el horario.",
    "faq-cta": "¿Más preguntas? Contacta a Rita",
    "final-kicker": "Último Paso",
    "footer-note": "Tours privados por Sintra con Rita Almeida. Conocimiento local, ritmo tranquilo y reserva directa con una sola guía.",
    "footer-explore": "Explorar",
    "footer-connect": "Conectar",
    "footer-badges-aria": "Destacados del servicio",
    "footer-connect-aria": "Conectar con Rita",
    "reviews-more": "Ver más",
    "reviews-less": "Ver menos",
    "cta-h2": "Reserva tu día en Sintra",
    "cta-tagline": "Cuéntale a Rita tus fechas, el tamaño de tu grupo y el tipo de día que buscas. Ella responderá con la mejor ruta y disponibilidad.",
    "booking-steps-aria": "Cómo funciona la reserva",
    "booking-step-1": "Escríbele a Rita por WhatsApp con tus fechas y el tamaño del grupo",
    "booking-step-2": "Confirmad juntos la ruta, el horario y la disponibilidad",
    "booking-step-3": "Paga y disfruta de tu día privado en Sintra",
    "cta-points-aria": "Detalles de respuesta",
    "cta-point-1": "Respuesta en 24h",
    "cta-point-2": "Respuesta por WhatsApp normalmente en 1h",
    "cta-email-label": "O envíanos un email",
    "cta-book": "Escribir a Rita por WhatsApp",
    "cta-note": "Directo con Rita · Sin comisión de reserva",
    "foot-why": "Por qué Rita",
    "foot-tours": "Tours",
    "foot-about": "Sobre",
    "foot-reviews": "Reseñas",
    "foot-book": "Reservar",
    "foot-instagram-link": "Instagram",
    "foot-faq": "FAQ",
    "foot-whatsapp": "WhatsApp",
    "foot-whatsapp-aria": "WhatsApp (se abre en una pestaña nueva)",
    "foot-email": "Email",
    "foot-email-aria": "Enviar email a Rita",
    "foot-instagram": "Instagram",
    "foot-instagram-aria": "Instagram (se abre en una pestaña nueva)",
    "foot-badge-online": "Sintra & Lisboa",
    "foot-remote": "5.0★ TripAdvisor",
    "foot-worldwide": "Servicio Premium"
  },
  pt: {
    "skip-link": "Saltar para o conteúdo principal",
    "hero-scroll-aria": "Ir para a secção Porquê a Rita",
    "back-to-top-aria": "Voltar ao topo",
    "meta-title": "About Culture Things — Tours Privados em Sintra | Rita Almeida",
    "meta-description": "Tours privados em Sintra com a Rita Almeida — Palácio da Pena, praias escondidas, costa de Cascais. 5.0★ TripAdvisor. Recolha em Lisboa, máx. 4 pessoas.",
    "tours-trust-aria": "Garantias do tour",
    "tours-compare-aria": "Como funciona a reserva",
    "nav-tours": "Tours",
    "nav-why": "Porquê a Rita",
    "nav-about": "Sobre",
    "nav-reviews": "Avaliações",
    "nav-faq": "FAQ",
    "nav-book": "Reservar",
    "mob-whatsapp": "Reservar",
    "mob-nav-title": "Menu",
    "lang-kicker": "Idioma",
    "fab-aria": "Reservar no WhatsApp",
    "fab-tooltip": "Reservar no WhatsApp",
    "about-name": "Rita Almeida",
    "badge-popular": "Experiência Assinatura",
    "badge-value": "Melhor Valor",
    "nav-cta": "Reservar",
    "hero-trust-1": "Tours apenas privados",
    "hero-trust-2": "5.0 ★ TripAdvisor",
    "hero-trust-3": "Recolha em Lisboa incluída",
    "hero-trust-4": "Até 4 pessoas",
    "hero-kicker": "Tours Privados em Sintra",
    "hero-brand": "About Culture Things",
    "hero-h1": "Sintra em privado, <em>bem guiada.</em>",
    "hero-desc": "Sintra e a costa atlântica, em privado com a Rita Almeida — local de Sintra.",
    "hero-cta-primary": "Verificar disponibilidade",
    "hero-cta-secondary": "Ver tours",
    "hero-note": "Reserva direta com a Rita · Resposta habitual em 24h",
    "why-kicker": "Porquê a Rita",
    "why-h2": "Luxo tranquilo. <em>Acesso local</em>",
    "why-desc": "Um dia privado moldado ao teu ritmo, com a confiança de uma guia local de Sintra.",
    "why1-kicker": "Nascida em Sintra",
    "why1-h3": "Nascida e criada em Sintra",
    "why1-p": "A Rita conhece as estradas, os horários, os miradouros e os recantos calmos que muitos tours não alcançam.",
    "why2-kicker": "Só privado",
    "why2-h3": "Só o teu grupo, nunca misturado",
    "why2-p": "Cada rota, paragem e ritmo é ajustado aos teus interesses, sem o formato rígido de um grupo.",
    "why3-kicker": "Lugares escondidos",
    "why3-h3": "Vistas icónicas, sem pressa",
    "why3-p": "Conta com desvios cénicos, perspetiva local e uma forma mais calma de viver Sintra e a costa.",
    "tours-kicker": "Tours",
    "tours-h2": "Escolhe o teu dia",
    "tours-desc": "Duas rotas privadas, o mesmo padrão: ritmo elegante, olhar local e reserva direta com a Rita.",
    "trust-1": "5.0 TripAdvisor",
    "trust-2": "Guia local nascida em Sintra",
    "trust-3": "Máx. 4 pessoas",
    "trust-4": "Recolha em Lisboa incluída",
    "compare-1-label": "Ideal Para",
    "compare-1-value": "Quem visita Sintra pela primeira vez e quer o dia completo",
    "compare-2-label": "Formato",
    "compare-2-value": "Tour privado de carro com uma guia e um só grupo",
    "compare-3-label": "Reserva",
    "compare-3-value": "Direto com a Rita, com confirmação rápida de disponibilidade",
    "tour1-name": "Sintra Completa & Costa Atlântica",
    "tour1-tag": "7 horas · Máx. 4 pessoas",
    "tour1-summary": "Sintra histórica · Pena · Cabo da Roca · Cascais",
    "tour1-highlight-1": "Ideal para um primeiro dia completo em Sintra",
    "tour1-highlight-2": "Junta palácios, costa e Cascais",
    "tour1-price": "€299",
    "tour1-price-sub": "Desde €75/pessoa · grupo de 4",
    "tour1-places": "Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Cabo da Roca · Cascais",
    "tour2-name": "Sintra & Praias Escondidas",
    "tour2-tag": "5 horas · Máx. 4 pessoas",
    "tour2-summary": "Colinas de Sintra · Enseadas escondidas · Azenhas do Mar",
    "tour2-highlight-1": "Ideal para uma escapadinha costeira mais curta",
    "tour2-highlight-2": "Focado em praias escondidas e vistas de mar",
    "tour2-price": "€275",
    "tour2-price-sub": "Desde €69/pessoa · grupo de 4",
    "tour2-places": "Centro Histórico de Sintra · Zona do Palácio Nacional · Miradouro Castelo dos Mouros · Serra de Sintra · Miradouro Palácio da Pena · Praia das Maçãs · Azenhas do Mar · Praia da Aguda",
    "tour-per": "por grupo",
    "tour-note-tickets": "Bilhetes não incluídos · Recolha em Lisboa",
    "tour1-cta": "Reservar dia completo",
    "tour2-cta": "Reservar tour costeiro",
    "tour-details-open": "Itinerário completo",
    "about-kicker": "Sobre a Rita",
    "about-h2": "A pessoa por trás <em>do dia</em>",
    "about-role": "Fundadora · Guia privada",
    "about-bio": "Nascida e criada em Sintra, a Rita conduz tours privados com ritmo calmo, conhecimento local e tempo para aproveitar o dia.",
    "about-pull": "\"Guia privada com calor humano, instinto local e tempo real para aproveitar o dia.\"",
    "about-creds-aria": "Competências e credenciais da Rita Almeida",
    "about-cred-1-label": "Guia local",
    "about-cred-1-value": "Nascida e criada em Sintra",
    "about-cred-2-label": "Classificação",
    "about-cred-2-value": "5.0 TripAdvisor",
    "about-cred-3-label": "Idiomas",
    "about-cred-3-value": "PT · EN · ES",
    "about-cred-4-label": "Avaliações",
    "about-cred-4-value": "6 avaliações verificadas no TripAdvisor",
    "about-cta": "Falar com a Rita",
    "reviews-kicker": "Avaliações",
    "reviews-h2": "A confiança dos viajantes",
    "reviews-google-label": "TripAdvisor",
    "reviews-count": "6 avaliações verificadas",
    "reviews-view-btn": "Ver mais no TripAdvisor",
    "rv-tag-tour": "Tour Sintra",
    "rv2-text": "\"Quente, próxima e cheia de conhecimento local. A Rita tornou Sintra especial do início ao fim.\"",
    "rv-monica-text": "\"Muito clara, simpática e bem organizada. A Rita soube exatamente para onde ir e como facilitar.\"",
    "rv-fernando-text": "\"O conhecimento local fez toda a diferença. Vimos lugares que nunca encontraríamos sozinhos.\"",
    "rv4-text": "\"Um tour privado descontraído, com boas histórias, bom ritmo e sugestões locais úteis.\"",
    "rv5-text": "\"Profissional, calorosa e muito preparada. O dia todo foi fácil e bem cuidado.\"",
    "rv6-text": "\"Inesquecível desde a primeira paragem. A Rita mostrou miradouros e recantos escondidos com cuidado.\"",
    "faq-kicker": "FAQ",
    "faq-h2": "Perguntas frequentes",
    "faq1-q": "O que incluem os tours de Sintra?",
    "faq1-a": "Todos os tours incluem recolha em Lisboa, guia privada (Rita Almeida) e transporte. Máximo 4 pessoas. Os bilhetes para palácios e monumentos não estão incluídos.",
    "faq2-q": "Como funciona o pagamento?",
    "faq2-a": "Aceitamos criptomoedas, Revolut, Wise, MBWay, transferência SEPA e dinheiro. Os detalhes de pagamento são enviados depois de verificar disponibilidade.",
    "faq3-q": "Posso cancelar ou reagendar?",
    "faq3-a": "Sim. Os tours podem ser cancelados ou reagendados com 24 horas de antecedência sem custo.",
    "faq4-q": "Os tours são adequados para crianças ou idosos?",
    "faq4-a": "Sim. Como cada tour é privado, a Rita pode adaptar o ritmo e as paragens ao teu grupo.",
    "faq5-q": "O almoço está incluído?",
    "faq5-a": "O almoço não está incluído, mas a Rita pode sugerir bons locais ao longo do percurso.",
    "faq6-q": "O tour pode ser personalizado?",
    "faq6-a": "Sim. Como os tours são privados, a Rita pode adaptar as paragens e o ritmo aos teus interesses, ao tempo e ao horário.",
    "faq-cta": "Mais perguntas? Fala com a Rita",
    "final-kicker": "Último Passo",
    "footer-note": "Tours privados em Sintra com a Rita Almeida. Conhecimento local, ritmo tranquilo e reserva direta com uma única guia.",
    "footer-explore": "Explorar",
    "footer-connect": "Contactar",
    "footer-badges-aria": "Destaques do serviço",
    "footer-connect-aria": "Contactar a Rita",
    "reviews-more": "Ver mais",
    "reviews-less": "Ver menos",
    "cta-h2": "Reserva o teu dia em Sintra",
    "cta-tagline": "Diz à Rita as tuas datas, o tamanho do grupo e o tipo de dia que procuras. Ela responde com a melhor rota e disponibilidade.",
    "booking-steps-aria": "Como funciona a reserva",
    "booking-step-1": "Envia mensagem à Rita no WhatsApp com as tuas datas e o tamanho do grupo",
    "booking-step-2": "Confirmem juntos a rota, o horário e a disponibilidade",
    "booking-step-3": "Paga e desfruta do teu dia privado em Sintra",
    "cta-points-aria": "Detalhes de resposta",
    "cta-point-1": "Resposta em 24h",
    "cta-point-2": "Resposta por WhatsApp normalmente em 1h",
    "cta-email-label": "Ou envia-nos um email",
    "cta-book": "Falar com a Rita no WhatsApp",
    "cta-note": "Direto com a Rita · Sem taxa de reserva",
    "foot-why": "Porquê a Rita",
    "foot-tours": "Tours",
    "foot-about": "Sobre",
    "foot-reviews": "Avaliações",
    "foot-book": "Reservar",
    "foot-instagram-link": "Instagram",
    "foot-faq": "FAQ",
    "foot-whatsapp": "WhatsApp",
    "foot-whatsapp-aria": "WhatsApp (abre num novo separador)",
    "foot-email": "Email",
    "foot-email-aria": "Enviar email à Rita",
    "foot-instagram": "Instagram",
    "foot-instagram-aria": "Instagram (abre num novo separador)",
    "foot-badge-online": "Sintra & Lisboa",
    "foot-remote": "5.0★ TripAdvisor",
    "foot-worldwide": "Serviço Premium"
  }
};

const langNames = { en: 'English', es: 'Español', pt: 'Português' };
const langCodes = { en: 'EN', es: 'ES', pt: 'PT' };
const ogLocales = { en: 'en_GB', es: 'es_ES', pt: 'pt_PT' };
let currentLang  = 'en';

function updateDocumentMeta(lang) {
  const t = i18n[lang];
  if (!t) return;
  if (t['meta-title']) document.title = t['meta-title'];
  const desc = document.querySelector('meta[name="description"]');
  if (desc && t['meta-description']) desc.setAttribute('content', t['meta-description']);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && t['meta-title']) ogTitle.setAttribute('content', t['meta-title']);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && t['meta-description']) ogDesc.setAttribute('content', t['meta-description']);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', ogLocales[lang] || 'en_GB');
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle && t['meta-title']) twTitle.setAttribute('content', t['meta-title']);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && t['meta-description']) twDesc.setAttribute('content', t['meta-description']);
}

function updateStructuredData(lang) {
  const t = i18n[lang];
  const node = document.getElementById('structured-data');
  if (!t || !node) return;
  let data;
  try { data = JSON.parse(node.textContent); } catch (e) { return; }
  const faq = data['@graph']?.find(item => item['@type'] === 'FAQPage' || item['@id']?.includes('#faq'));
  if (!faq) return;
  faq.mainEntity = [1, 2, 3, 4, 5, 6].map(n => ({
    '@type': 'Question',
    name: t['faq' + n + '-q'],
    acceptedAnswer: { '@type': 'Answer', text: t['faq' + n + '-a'] }
  }));
  node.textContent = JSON.stringify(data);
}

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;

  var url = new URL(location.href);
  if (lang === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
  history.replaceState({}, '', url);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });
  document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
    const key = el.getAttribute('data-i18n-tooltip');
    if (t[key] !== undefined) el.setAttribute('data-tooltip', t[key]);
  });
  document.querySelectorAll('[data-badge-key]').forEach(el => {
    const key = el.getAttribute('data-badge-key');
    if (t[key] !== undefined) el.setAttribute('data-badge', t[key]);
  });
  document.querySelectorAll('.lang-option').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.mob-lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const triggerLabel = document.getElementById('lang-trigger-label');
  if (triggerLabel) triggerLabel.textContent = langCodes[lang] || lang.toUpperCase();
  if (langTrigger) {
    langTrigger.setAttribute('aria-label', `Select language. Current language: ${langNames[lang] || lang}.`);
  }

  const htmlLang = { en: 'en-GB', es: 'es-ES', pt: 'pt-PT' };
  document.documentElement.lang = htmlLang[lang] || lang;
  updateDocumentMeta(lang);
  updateStructuredData(lang);
  closeLangDropdown();
}

// ─── LANGUAGE SWITCHER ────────────────────────────────
const langSwitcher = document.getElementById('lang-switcher');
const langTrigger  = document.getElementById('lang-trigger');

const langDropdown = document.getElementById('lang-dropdown');

function closeLangDropdown() {
  if (!langSwitcher) return;
  langSwitcher.classList.remove('open');
  if (langTrigger) langTrigger.setAttribute('aria-expanded', 'false');
  if (langDropdown) langDropdown.hidden = true;
}

if (langTrigger) {
  langTrigger.addEventListener('click', e => {
    e.stopPropagation();
    const opening = !langSwitcher.classList.contains('open');
    langSwitcher.classList.toggle('open', opening);
    langTrigger.setAttribute('aria-expanded', String(opening));
    if (langDropdown) langDropdown.hidden = !opening;
  });
  langTrigger.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const options = Array.from(document.querySelectorAll('.lang-option'));
      if (!options.length) return;
      const nextIndex = e.key === 'ArrowDown' ? 0 : options.length - 1;
      langSwitcher.classList.add('open');
      langTrigger.setAttribute('aria-expanded', 'true');
      if (langDropdown) langDropdown.hidden = false;
      options[nextIndex].focus();
    }
  });
}

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  btn.addEventListener('keydown', e => {
    const options = Array.from(document.querySelectorAll('.lang-option'));
    const index = options.indexOf(btn);
    if (index === -1) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const next = options[(index + 1) % options.length];
      next.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = options[(index - 1 + options.length) % options.length];
      prev.focus();
    } else if (e.key === 'Escape') {
      closeLangDropdown();
      langTrigger?.focus();
    }
  });
});

document.addEventListener('click', e => {
  if (langSwitcher && !langSwitcher.contains(e.target)) closeLangDropdown();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLangDropdown(); navClose(); }
});

(function(){
  const params = new URLSearchParams(location.search);
  const urlLang = params.get('lang');
  const supported = ['en','es','pt'];
  const lang = (urlLang && supported.includes(urlLang)) ? urlLang : 'en';
  applyLang(lang);
})();

// ─── NAV BEHAVIOUR ───────────────────────────────────
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const mobNav = document.getElementById('mob-nav');
const fabWa  = document.getElementById('fab-wa');
let menuFocusReturn = null;

let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const sy = window.scrollY;
    const compactViewport = window.innerWidth < 768;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 600;
    nav.classList.toggle('elevated', sy > 10);
    nav.classList.toggle('nav-overlay', sy < heroHeight * 0.72 && !document.body.classList.contains('nav-open'));
    if (fabWa) fabWa.classList.toggle('visible', sy > (compactViewport ? 180 : 380));
    ticking = false;
  });
}, { passive: true });

// Active nav link — Intersection Observer (more reliable than offsetTop)
(function(){
  const navLinks = document.querySelectorAll('.nav-tabs a[href^="#"]');
  const sections = document.querySelectorAll('main section[id]');
  if (!navLinks.length || !sections.length) return;
  const visible = new Map();
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
      else visible.delete(entry.target.id);
    });
    let current = '';
    let best = 0;
    visible.forEach((ratio, id) => {
      if (ratio >= best) { best = ratio; current = id; }
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
  sections.forEach(sec => obs.observe(sec));
})();

function navOpen() {
  const open = mobNav.classList.toggle('open');
  document.body.classList.toggle('nav-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  mobNav.setAttribute('aria-hidden', String(!open));
  nav.classList.toggle('nav-overlay', !open && window.scrollY < (document.querySelector('.hero')?.offsetHeight || 600) * 0.72);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  if (open) {
    menuFocusReturn = document.activeElement;
    var first = mobNav.querySelector('.mob-nav-body a, .mob-nav-close, .mob-lang-btn');
    if (first) first.focus();
  } else if (menuFocusReturn) {
    menuFocusReturn.focus();
    menuFocusReturn = null;
  }
}

function navClose() {
  mobNav.classList.remove('open');
  document.body.classList.remove('nav-open');
  document.body.style.overflow = '';
  mobNav.setAttribute('aria-hidden', 'true');
  nav.classList.toggle('nav-overlay', window.scrollY < (document.querySelector('.hero')?.offsetHeight || 600) * 0.72);
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
  if (menuFocusReturn) {
    menuFocusReturn.focus();
    menuFocusReturn = null;
  }
}

mobNav.addEventListener('keydown', function(e) {
  if (e.key !== 'Tab' || !mobNav.classList.contains('open')) return;
  var focusable = mobNav.querySelectorAll('a, button, select, [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  var first = focusable[0];
  var last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

window.navClose = navClose;
window.navOpen = navOpen;
window.applyLang = applyLang;

burger.addEventListener('click', navOpen);

var mobNavClose = mobNav.querySelector('.mob-nav-close');
if (mobNavClose) mobNavClose.addEventListener('click', navClose);
mobNav.querySelectorAll('a[href^="#"], [data-site-wa]').forEach(function (a) {
  a.addEventListener('click', navClose);
});
document.querySelectorAll('.mob-lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
});

// Initial nav overlay state
nav.classList.add('nav-overlay');

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && mobNav.classList.contains('open')) {
    navClose();
  }
});

document.addEventListener('click', e => {
  if (mobNav.classList.contains('open') && !mobNav.contains(e.target) && !burger.contains(e.target)) {
    navClose();
  }
});

// ─── INTERSECTION OBSERVER — REVEAL ──────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      e.target.querySelectorAll('.anim-ready').forEach(el => el.classList.add('anim-visible'));
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ─── STAGGERED CARD REVEAL ───────────────────────────
const staggerObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const cards = entry.target.querySelectorAll('.pricing-card, .review-card');
    cards.forEach((card, i) => {
      card.style.transitionDelay = (i * 0.08) + 's';
      card.classList.add('in');
    });
    staggerObs.unobserve(entry.target);
  });
}, { threshold: 0.05 });

document.querySelectorAll('.tours-row, .reviews-grid').forEach(el => {
  el.querySelectorAll('.pricing-card, .review-card').forEach(card => {
    card.classList.add('reveal');
  });
  staggerObs.observe(el);
});

// ─── RATING COUNTER ──────────────────────────────────
function animateValue(el, end, duration) {
  const startTime = performance.now();
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = (end * eased).toFixed(1);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = '5.0';
  }
  requestAnimationFrame(step);
}

const ratingEl = document.querySelector('.g-number');
if (ratingEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const rObs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { animateValue(ratingEl, 5.0, 1400); rObs.disconnect(); }
  }, { threshold: 0.5 });
  rObs.observe(ratingEl);
}

// ─── EYEBROW LINE ANIMATION ──────────────────────────
const eyeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.anim-ready').forEach(el => el.classList.add('anim-visible'));
      const line = e.target.querySelector('.sec-eyebrow-line');
      if (line) {
        line.style.width = '0';
        line.style.transition = 'width 0.8s cubic-bezier(.22,1,.36,1) 0.1s';
        requestAnimationFrame(() => { line.style.width = '2rem'; });
      }
      eyeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.sec-head').forEach(el => eyeObs.observe(el));

// ─── FAQ ACCORDION (one open at a time) ──────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-item[open]').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

// ─── REVIEWS EXPAND (mobile) ─────────────────────────
(function(){
  const btn = document.getElementById('reviews-expand');
  const grid = document.getElementById('reviews-grid');
  if (!btn || !grid) return;
  const label = btn.querySelector('[data-i18n]');
  const mq = window.matchMedia('(max-width: 47.99rem)');
  function syncExpandControl() {
    const mobile = mq.matches;
    btn.hidden = !mobile;
    if (!mobile) {
      grid.classList.remove('is-expanded');
      btn.setAttribute('aria-expanded', 'false');
      if (label) {
        label.setAttribute('data-i18n', 'reviews-more');
        label.textContent = i18n[currentLang]['reviews-more'];
      }
    }
  }
  btn.addEventListener('click', () => {
    const expanded = grid.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', String(expanded));
    if (label) {
      const key = expanded ? 'reviews-less' : 'reviews-more';
      label.setAttribute('data-i18n', key);
      label.textContent = i18n[currentLang][key];
    }
  });
  mq.addEventListener('change', syncExpandControl);
  syncExpandControl();
})();

