(()=>{
  if(document.querySelector('.contact-float'))return;
  const PHONE='351968510019';
  const COPY={
    en:{label:'Contact us',title:'Need help?',text:'Questions about a tour or your booking? Send us a message and we’ll be happy to help.',cta:'Chat on WhatsApp',message:'Hello! I have a question about a tour with About Culture Things.'},
    pt:{label:'Contactar',title:'Precisa de ajuda?',text:'Tem alguma dúvida sobre um tour ou a sua reserva? Envie-nos uma mensagem e teremos todo o gosto em ajudar.',cta:'Falar no WhatsApp',message:'Olá! Tenho uma dúvida sobre um tour da About Culture Things.'},
    es:{label:'Contactar',title:'¿Necesitas ayuda?',text:'¿Tienes alguna duda sobre un tour o tu reserva? Escríbenos y estaremos encantados de ayudarte.',cta:'Hablar por WhatsApp',message:'¡Hola! Tengo una consulta sobre un tour de About Culture Things.'},
    fr:{label:'Nous contacter',title:'Besoin d’aide ?',text:'Une question sur une excursion ou votre réservation ? Envoyez-nous un message, nous serons ravis de vous aider.',cta:'Écrire sur WhatsApp',message:'Bonjour ! J’ai une question au sujet d’une excursion avec About Culture Things.'},
    de:{label:'Kontakt',title:'Brauchen Sie Hilfe?',text:'Fragen zu einer Tour oder Ihrer Buchung? Schreiben Sie uns – wir helfen Ihnen gerne weiter.',cta:'Über WhatsApp schreiben',message:'Hallo! Ich habe eine Frage zu einer Tour mit About Culture Things.'}
  };
  const lang=()=>{const l=(document.documentElement.lang||'en').toLowerCase().slice(0,2);return COPY[l]?l:'en'};
  const root=document.createElement('aside');root.className='contact-float';
  root.innerHTML=`<div class="contact-float__panel" hidden><h2 class="contact-float__title"></h2><p class="contact-float__text"></p><a class="contact-float__link" target="_blank" rel="noopener"></a></div><button class="contact-float__button" type="button" aria-expanded="false"><span class="sr-only"></span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.02 4.5c-6.33 0-11.48 5.13-11.48 11.44 0 2.02.53 3.99 1.54 5.72L4.5 27.5l5.99-1.57a11.5 11.5 0 0 0 5.52 1.4h.01c6.32 0 11.48-5.14 11.48-11.45S22.34 4.5 16.02 4.5Zm0 20.88h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.2-3.56.93.95-3.46-.23-.36a9.43 9.43 0 0 1-1.46-5.03c0-5.24 4.27-9.5 9.51-9.5s9.5 4.26 9.5 9.5-4.27 9.44-9.51 9.44Zm5.21-7.1c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4a8.56 8.56 0 0 1-1.57-1.95c-.17-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.03 2.82 1.17 3.01c.14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.66-.68 1.89-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.54-.33Z"/></svg></button>`;
  document.body.appendChild(root);
  const panel=root.querySelector('.contact-float__panel'),button=root.querySelector('.contact-float__button'),title=root.querySelector('.contact-float__title'),text=root.querySelector('.contact-float__text'),link=root.querySelector('.contact-float__link'),sr=root.querySelector('.sr-only');
  function sync(){const x=COPY[lang()];sr.textContent=x.label;button.setAttribute('aria-label',x.label);title.textContent=x.title;text.textContent=x.text;link.textContent=x.cta;link.href=`https://wa.me/${PHONE}?text=${encodeURIComponent(x.message)}`}
  function setOpen(open){panel.hidden=!open;button.setAttribute('aria-expanded',String(open))}
  sync();
  button.addEventListener('click',()=>setOpen(panel.hidden));
  document.addEventListener('click',e=>{if(!root.contains(e.target)&&!panel.hidden)setOpen(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){setOpen(false);button.focus()}});
  const language=document.getElementById('language');language?.addEventListener('change',()=>setTimeout(sync,0));
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
