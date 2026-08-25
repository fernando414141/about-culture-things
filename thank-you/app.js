(function () {
  'use strict';

  const COPY = {
    en: {
      htmlLang: 'en-GB', title: 'Thank you for exploring Portugal | About Culture Things',
      description: 'A thank-you from the About Culture Things team, with simple ways to share your experience and stay in touch.',
      heroEyebrow: 'A note from our team', heroTitle: 'Thank you.',
      heroText: 'We hope Portugal stays with you.', heroSignoff: '— About Culture Things',
      continue: 'One small favour', continueAria: 'Continue to share your experience',
      reviewEyebrow: 'If you have a minute', reviewTitle: 'Leave a little love.',
      reviewText: 'Your review helps more travellers find About Culture Things.',
      reviewButton: 'Review on Tripadvisor', reviewNote: 'It makes a real difference.',
      referralEyebrow: 'Pass it on', referralTitle: 'Know someone coming to Portugal?',
      referralText: 'If the day meant something to you, sharing it with someone you know helps other travellers find us.',
      referralButton: 'Share with a friend', copyLink: 'Copy tour link',
      referralAlt: 'Travellers beside the Atlantic coast', socialAlt: 'Travellers overlooking Azenhas do Mar',
      referralMessage: "I'm in Portugal and had a lovely private tour with About Culture Things. If you're visiting Lisbon or Sintra, take a look:",
      experiencesEyebrow: 'There is always more to discover', experiencesTitle: 'Still exploring Portugal?',
      experiencesText: 'Three private ways to see more.', experienceButton: 'View tour',
      customEyebrow: 'Another day', customTitle: 'See somewhere new.',
      customText: 'Tell About Culture Things what you’d love to see and we can help shape another private experience.',
      customButton: 'Ask us', customMessage: "Hello About Culture Things! Thank you again for the tour. I'm interested in exploring somewhere else in Portugal...",
      socialEyebrow: 'Stay close', socialTitle: 'Follow the journey.',
      socialText: 'Follow along, share a favourite photo and tag us so our team can see it too.',
      instagramButton: 'Instagram', instagramCopy: 'Copy @aboutculturethings',
      contactEyebrow: 'Keep in touch', contactTitle: 'Keep a local contact in Portugal 🇵🇹',
      contactText: 'If you need another experience or a local recommendation while you’re here, you know where to find us.',
      contactButton: 'Message us', contactMessage: 'Hello About Culture Things! Thank you again for the tour. I wanted to keep in touch.',
      languagesEyebrow: 'Our recommendation', languagesTitle: 'Keep learning.',
      languagesText: 'Continue practising Portuguese, Spanish or English online with FSC Languages.',
      languagesButton: 'FSC Languages',
      footerText: 'Private tours, local stories and a slower way to see Portugal.',
      copiedLink: 'Link copied — ready to share.', copiedHandle: '@aboutculturethings copied.', copyFailed: 'Copy this link:', shareTitle: 'A lovely private tour in Portugal'
    },
    es: {
      htmlLang: 'es-ES', title: 'Gracias por descubrir Portugal | About Culture Things',
      description: 'Un agradecimiento del equipo de About Culture Things, con formas sencillas de compartir la experiencia y seguir en contacto.',
      heroEyebrow: 'Una nota de nuestro equipo', heroTitle: 'Gracias.',
      heroText: 'Esperamos que se lleven un poquito de Portugal.', heroSignoff: '— About Culture Things',
      continue: 'Un pequeño favor', continueAria: 'Continuar para compartir la experiencia',
      reviewEyebrow: 'Si tienen un minuto', reviewTitle: 'Dejen un poquito de cariño.',
      reviewText: 'Su reseña ayuda a que más viajeros encuentren About Culture Things.',
      reviewButton: 'Reseñar en Tripadvisor', reviewNote: 'Ayuda a que otros viajeros puedan encontrarnos.',
      referralEyebrow: 'Compártanlo', referralTitle: '¿Conocen a alguien que venga a Portugal?',
      referralText: 'Si el día fue especial, compartirlo con alguien cercano ayuda a que otros viajeros nos encuentren.',
      referralButton: 'Compartir con un amigo', copyLink: 'Copiar enlace',
      referralAlt: 'Viajeras junto a la costa atlántica', socialAlt: 'Viajeras frente a Azenhas do Mar',
      referralMessage: 'Estoy en Portugal y disfruté muchísimo de un tour privado con About Culture Things. Si vas a visitar Lisboa o Sintra, échale un vistazo:',
      experiencesEyebrow: 'Siempre queda algo por descubrir', experiencesTitle: '¿Siguen explorando Portugal?',
      experiencesText: 'Tres formas privadas de seguir descubriendo.', experienceButton: 'Ver tour',
      customEyebrow: 'Otro día', customTitle: 'Descubran algo nuevo.',
      customText: 'Cuenten a About Culture Things qué les gustaría conocer y podremos ayudarles a diseñar otra experiencia privada.',
      customButton: 'Preguntarnos', customMessage: '¡Hola, About Culture Things! Gracias de nuevo por el tour. Me interesa conocer algún otro lugar de Portugal...',
      socialEyebrow: 'Sigan cerca', socialTitle: 'Sigan el viaje.',
      socialText: 'Sigan las próximas aventuras, compartan su foto favorita y etiqueten a nuestro equipo para que podamos verla.',
      instagramButton: 'Instagram', instagramCopy: 'Copiar @aboutculturethings',
      contactEyebrow: 'Sigamos en contacto', contactTitle: 'Guarden un contacto local en Portugal 🇵🇹',
      contactText: 'Si quieren vivir otra experiencia o necesitan una recomendación local durante el viaje, ya saben dónde encontrarnos.',
      contactButton: 'Escribirnos', contactMessage: '¡Hola, About Culture Things! Gracias de nuevo por el tour. Queríamos seguir en contacto.',
      languagesEyebrow: 'Nuestra recomendación', languagesTitle: 'Sigan aprendiendo.',
      languagesText: 'Sigan practicando portugués, español o inglés online con FSC Languages.',
      languagesButton: 'FSC Languages',
      footerText: 'Tours privados, historias locales y una forma más tranquila de conocer Portugal.',
      copiedLink: 'Enlace copiado y listo para compartir.', copiedHandle: '@aboutculturethings copiado.', copyFailed: 'Copia este enlace:', shareTitle: 'Un precioso tour privado por Portugal'
    },
    pt: {
      htmlLang: 'pt-PT', title: 'Obrigado por descobrirem Portugal | About Culture Things',
      description: 'Um agradecimento da equipa About Culture Things, com formas simples de partilhar a experiência e manter o contacto.',
      heroEyebrow: 'Uma nota da nossa equipa', heroTitle: 'Obrigado.',
      heroText: 'Esperamos que levem um pouco de Portugal convosco.', heroSignoff: '— About Culture Things',
      continue: 'Um pequeno favor', continueAria: 'Continuar para partilhar a experiência',
      reviewEyebrow: 'Se tiverem um minuto', reviewTitle: 'Deixem um pouco de carinho.',
      reviewText: 'A vossa avaliação ajuda mais viajantes a encontrar a About Culture Things.',
      reviewButton: 'Avaliar no Tripadvisor', reviewNote: 'Ajuda outros viajantes a encontrar-nos.',
      referralEyebrow: 'Passem a palavra', referralTitle: 'Conhecem alguém que venha a Portugal?',
      referralText: 'Se o dia foi especial, partilhá-lo com alguém próximo ajuda outros viajantes a encontrar-nos.',
      referralButton: 'Partilhar com um amigo', copyLink: 'Copiar ligação',
      referralAlt: 'Viajantes junto à costa atlântica', socialAlt: 'Viajantes em Azenhas do Mar',
      referralMessage: 'Estou em Portugal e adorei o tour privado com a About Culture Things. Se fores visitar Lisboa ou Sintra, vê aqui:',
      experiencesEyebrow: 'Há sempre mais para descobrir', experiencesTitle: 'Ainda estão a explorar Portugal?',
      experiencesText: 'Três formas privadas de continuar a descobrir.', experienceButton: 'Ver tour',
      customEyebrow: 'Outro dia', customTitle: 'Descubram algo novo.',
      customText: 'Contem à About Culture Things o que gostariam de ver e podemos ajudar a criar outra experiência privada.',
      customButton: 'Perguntar-nos', customMessage: 'Olá, About Culture Things! Obrigado novamente pelo tour. Gostaria de conhecer outro lugar em Portugal...',
      socialEyebrow: 'Continuem por perto', socialTitle: 'Sigam a viagem.',
      socialText: 'Acompanhem as próximas aventuras, partilhem a vossa fotografia preferida e identifiquem-nos para a nossa equipa também a ver.',
      instagramButton: 'Instagram', instagramCopy: 'Copiar @aboutculturethings',
      contactEyebrow: 'Vamos manter o contacto', contactTitle: 'Guardem um contacto local em Portugal 🇵🇹',
      contactText: 'Se quiserem outra experiência ou uma recomendação local durante a viagem, já sabem onde nos encontrar.',
      contactButton: 'Enviar-nos mensagem', contactMessage: 'Olá, About Culture Things! Obrigado novamente pelo tour. Gostaríamos de manter o contacto.',
      languagesEyebrow: 'A nossa recomendação', languagesTitle: 'Continuem a aprender.',
      languagesText: 'Continuem a praticar português, espanhol ou inglês online com a FSC Languages.',
      languagesButton: 'FSC Languages',
      footerText: 'Tours privados, histórias locais e uma forma mais tranquila de conhecer Portugal.',
      copiedLink: 'Ligação copiada e pronta a partilhar.', copiedHandle: '@aboutculturethings copiado.', copyFailed: 'Copiem esta ligação:', shareTitle: 'Um tour privado muito especial em Portugal'
    }
  };

  const cfg = window.SITE_CONTENT || {};
  const params = new URLSearchParams(location.search);
  const supportedLanguages = ['en', 'es', 'pt'];
  const supportedSources = ['direct', 'viator', 'tripadvisor', 'agency', 'hotel', 'referral', 'whatsapp', 'other'];
  const stored = readSession();
  const requestedLang = params.get('lang');
  let savedLang = '';
  try { savedLang = localStorage.getItem('act_preferred_language') || ''; } catch (error) { /* Storage may be unavailable. */ }
  let lang = supportedLanguages.includes(requestedLang) ? requestedLang : (supportedLanguages.includes(savedLang) ? savedLang : detectLanguage());
  const requestedSource = params.get('source');
  const source = requestedSource == null
    ? (stored.source || 'other')
    : (supportedSources.includes(requestedSource) ? requestedSource : 'other');
  const tour = safeValue(params.get('tour')) || stored.tour || 'unknown';
  const attribution = { source: source, tour: tour };

  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (key) {
    const value = safeValue(params.get(key));
    if (value) attribution[key] = value;
    else if (stored[key]) attribution[key] = stored[key];
  });
  writeSession(attribution);

  function safeValue(value) {
    return value && /^[a-zA-Z0-9._-]{1,64}$/.test(value) ? value : '';
  }

  function readSession() {
    try { return JSON.parse(sessionStorage.getItem('act_post_tour_attribution') || '{}'); }
    catch (error) { return {}; }
  }

  function writeSession(value) {
    try { sessionStorage.setItem('act_post_tour_attribution', JSON.stringify(value)); }
    catch (error) { /* Storage can be unavailable in private browsing. */ }
  }

  function detectLanguage() {
    const candidates = navigator.languages || [navigator.language || 'en'];
    for (let i = 0; i < candidates.length; i += 1) {
      const code = String(candidates[i]).toLowerCase().split('-')[0];
      if (supportedLanguages.includes(code)) return code;
    }
    return 'en';
  }

  function urlWithLang(path, hash) {
    return path + (lang === 'en' ? '' : '?lang=' + lang) + (hash || '#tours');
  }

  function homeReferralUrl() {
    const url = new URL('../', location.href);
    url.searchParams.set('utm_source', 'customer_referral');
    url.searchParams.set('utm_medium', 'share');
    url.searchParams.set('utm_campaign', 'post_tour');
    const content = [source !== 'other' ? source : '', tour !== 'unknown' ? tour : ''].filter(Boolean).join('-');
    if (content) url.searchParams.set('utm_content', content);
    return url.toString();
  }

  function whatsappUrl(message) {
    return 'https://wa.me/' + ((cfg.business && cfg.business.whatsapp) || '351968510019') + '?text=' + encodeURIComponent(message);
  }

  function track(name, extra) {
    const payload = Object.assign({}, attribution, {
      language: lang,
      source: source,
      tour: tour,
      event_timestamp: new Date().toISOString()
    }, extra || {});
    if (window.siteAnalytics && typeof window.siteAnalytics.pushEvent === 'function') {
      window.siteAnalytics.pushEvent(name, payload);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: name }, payload));
    }
  }

  function renderTours() {
    const content = cfg.content && (cfg.content[lang] || cfg.content.en);
    const tours = content && content.offers && content.offers.items;
    if (!tours || !tours.length) return;
    document.querySelectorAll('[data-tour-link]').forEach(function (link) {
      const id = link.getAttribute('data-tour-link');
      const item = tours.find(function (candidate) { return candidate.id === id; });
      if (!item) return;
      link.href = urlWithLang('../', '#tour-' + item.id);
      link.setAttribute('data-tour-id', item.id);
      const img = link.querySelector('img');
      const kicker = link.querySelector('.experience-copy p');
      const title = link.querySelector('h3');
      const description = link.querySelector('.experience-copy > span');
      const action = link.querySelector('strong');
      if (img) { img.src = '../' + item.image; img.alt = item.imageAlt; }
      if (kicker) kicker.textContent = item.tag;
      if (title) title.textContent = item.name;
      if (description) description.textContent = item.stops;
      if (action) action.innerHTML = escapeHtml(COPY[lang].experienceButton) + ' <span aria-hidden="true">↗</span>';
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (character) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character];
    });
  }

  function applyLanguage(nextLang, updateHistory) {
    lang = supportedLanguages.includes(nextLang) ? nextLang : 'en';
    const copy = COPY[lang];
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = copy.description;
    document.querySelectorAll('[data-copy]').forEach(function (element) {
      const key = element.getAttribute('data-copy');
      if (copy[key] != null) element.textContent = copy[key];
    });
    document.querySelectorAll('[data-copy-aria]').forEach(function (element) {
      const key = element.getAttribute('data-copy-aria');
      if (copy[key] != null) element.setAttribute('aria-label', copy[key]);
    });
    document.querySelectorAll('[data-copy-alt]').forEach(function (element) {
      const key = element.getAttribute('data-copy-alt');
      if (copy[key] != null) element.setAttribute('alt', copy[key]);
    });
    document.querySelectorAll('[data-lang]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lang') === lang));
    });
    const links = cfg.links || {};
    document.getElementById('tripadvisor-review').href = links.tripadvisorReview || document.getElementById('tripadvisor-review').href;
    document.getElementById('instagram-link').href = links.instagram || 'https://www.instagram.com/aboutculturethings';
    const fsc = new URL(links.fscLanguages || 'https://fsclanguages.com');
    fsc.searchParams.set('utm_source', 'aboutculturethings');
    fsc.searchParams.set('utm_medium', 'referral');
    fsc.searchParams.set('utm_campaign', 'post_tour');
    document.getElementById('fsc-link').href = fsc.toString();
    document.getElementById('custom-whatsapp').href = whatsappUrl(copy.customMessage);
    document.getElementById('contact-whatsapp').href = whatsappUrl(copy.contactMessage);
    const referralText = copy.referralMessage + ' ' + homeReferralUrl();
    document.getElementById('referral-share').href = 'https://wa.me/?text=' + encodeURIComponent(referralText);
    renderTours();
    if (updateHistory) {
      const url = new URL(location.href);
      if (lang === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
      history.replaceState({}, '', url);
      try { localStorage.setItem('act_preferred_language', lang); } catch (error) { /* Storage may be unavailable. */ }
      track('language_change', { selected_language: lang });
    }
  }

  let toastTimer;
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('visible'); }, 2600);
  }

  async function copyText(value, successMessage) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const field = document.createElement('textarea');
        field.value = value;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        if (!document.execCommand('copy')) throw new Error('copy failed');
        field.remove();
      }
      showToast(successMessage);
      return true;
    } catch (error) {
      window.prompt(COPY[lang].copyFailed, value);
      return false;
    }
  }

  document.querySelectorAll('[data-lang]').forEach(function (button) {
    button.addEventListener('click', function () { applyLanguage(button.getAttribute('data-lang'), true); });
  });

  document.getElementById('referral-share').addEventListener('click', async function (event) {
    const referralUrl = homeReferralUrl();
    const message = COPY[lang].referralMessage;
    if (navigator.share) {
      event.preventDefault();
      track('referral_share_click', { share_method: 'native' });
      track('social_share_click', { share_type: 'referral', share_method: 'native' });
      try { await navigator.share({ title: COPY[lang].shareTitle, text: message, url: referralUrl }); }
      catch (error) { if (error && error.name !== 'AbortError') location.href = this.href; }
    } else {
      track('referral_share_click', { share_method: 'whatsapp' });
      track('referral_whatsapp_click', { share_method: 'whatsapp' });
      track('social_share_click', { share_type: 'referral', share_method: 'whatsapp' });
    }
  });

  document.getElementById('referral-copy').addEventListener('click', async function () {
    await copyText(homeReferralUrl(), COPY[lang].copiedLink);
    track('referral_copy_click', { share_method: 'clipboard' });
  });

  document.getElementById('instagram-copy').addEventListener('click', async function () {
    await copyText((cfg.links && cfg.links.instagramHandle) || '@aboutculturethings', COPY[lang].copiedHandle);
    track('instagram_handle_copy');
  });

  document.querySelectorAll('[data-event]').forEach(function (element) {
    element.addEventListener('click', function () {
      const extra = {};
      if (element.getAttribute('data-tour-id')) extra.selected_tour = element.getAttribute('data-tour-id');
      track(element.getAttribute('data-event'), extra);
    });
  });

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 }) : null;
  document.querySelectorAll('.reveal').forEach(function (element) {
    if (observer) observer.observe(element); else element.classList.add('visible');
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  applyLanguage(lang, false);
  track('thank_you_page_view');
})();
