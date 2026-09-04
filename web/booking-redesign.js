/* Minimal one-flow booking UX. Reuses app.js availability and Stripe submit logic. */
(()=>{
  const extra={
    en:{title:'Book your tour',subtitle:'A few details, then secure payment.',route:'Your day',duration:'Duration',pickup:'Hotel pickup & return',cancel:'Free cancellation up to 48h',total:'Total',charged:'Charged securely in EUR',secure:'Secure Stripe payment',instant:'Immediate confirmation',phoneCountry:'Country',phoneNumber:'Phone / WhatsApp',optional:'Add a note (optional)'},
    pt:{title:'Reserve o seu tour',subtitle:'Só alguns dados e depois pagamento seguro.',route:'O seu dia',duration:'Duração',pickup:'Recolha e regresso ao alojamento',cancel:'Cancelamento gratuito até 48h',total:'Total',charged:'Cobrado com segurança em EUR',secure:'Pagamento seguro Stripe',instant:'Confirmação imediata',phoneCountry:'País',phoneNumber:'Telefone / WhatsApp',optional:'Adicionar nota (opcional)'},
    es:{title:'Reserva tu tour',subtitle:'Solo unos datos y después pago seguro.',route:'Tu día',duration:'Duración',pickup:'Recogida y regreso al alojamiento',cancel:'Cancelación gratuita hasta 48h',total:'Total',charged:'Cobro seguro en EUR',secure:'Pago seguro con Stripe',instant:'Confirmación inmediata',phoneCountry:'País',phoneNumber:'Teléfono / WhatsApp',optional:'Añadir una nota (opcional)'},
    fr:{title:'Réservez votre excursion',subtitle:'Quelques informations, puis paiement sécurisé.',route:'Votre journée',duration:'Durée',pickup:'Prise en charge et retour',cancel:'Annulation gratuite jusqu’à 48 h',total:'Total',charged:'Débité en EUR en toute sécurité',secure:'Paiement Stripe sécurisé',instant:'Confirmation immédiate',phoneCountry:'Pays',phoneNumber:'Téléphone / WhatsApp',optional:'Ajouter une note (facultatif)'},
    de:{title:'Tour buchen',subtitle:'Nur wenige Angaben, dann sichere Zahlung.',route:'Ihr Tag',duration:'Dauer',pickup:'Abholung und Rückfahrt',cancel:'Kostenlose Stornierung bis 48 Std.',total:'Gesamt',charged:'Sichere Abrechnung in EUR',secure:'Sichere Stripe-Zahlung',instant:'Sofortige Bestätigung',phoneCountry:'Land',phoneNumber:'Telefon / WhatsApp',optional:'Notiz hinzufügen (optional)'}
  };
  const countries=[['PT','Portugal','+351'],['ES','España','+34'],['GB','United Kingdom','+44'],['US','United States','+1'],['CA','Canada','+1'],['FR','France','+33'],['DE','Deutschland','+49'],['IT','Italia','+39'],['NL','Nederland','+31'],['BE','Belgique','+32'],['IE','Ireland','+353'],['CH','Schweiz','+41'],['AT','Österreich','+43'],['BR','Brasil','+55'],['AR','Argentina','+54'],['MX','México','+52'],['AU','Australia','+61']];
  const labels=()=>extra[lang()]||extra.en;
  const localeCountry=()=>{const raw=(navigator.languages?.[0]||navigator.language||'').replace('_','-');const region=raw.split('-')[1]?.toUpperCase();if(countries.some(c=>c[0]===region))return region;if(raw.toLowerCase().startsWith('pt'))return'PT';if(raw.toLowerCase().startsWith('es'))return'ES';if(raw.toLowerCase().startsWith('fr'))return'FR';if(raw.toLowerCase().startsWith('de'))return'DE';return'PT'};
  const countryOptions=()=>countries.map(([code,name,dial])=>`<option value="${code}" data-dial="${dial}">${name} ${dial}</option>`).join('');
  const setPrice=form=>{const tour=TOURS.find(item=>item.id===form.dataset.tourId),count=Number(form.elements.guests?.value||2);if(!tour)return;const amount=form.querySelector('[data-price-amount]'),detail=form.querySelector('[data-booking-total]');if(amount)amount.textContent=`€${count*tour.price}`;if(detail)detail.textContent=`${count} × €${tour.price} ${c().perPerson}`};
  const syncPhone=form=>{const country=form.elements.phoneCountry,local=form.elements.phoneLocal,hidden=form.elements.phone;if(!country||!local||!hidden)return;const dial=country.selectedOptions[0]?.dataset.dial||'';let n=String(local.value||'').trim().replace(/[^\d+]/g,'');if(n.startsWith('+'))hidden.value=n;else hidden.value=n?`${dial}${n.replace(/^0+/,'')}`:''};
  function hydrateForm(form){const country=form.elements.phoneCountry,language=form.elements.language;if(country)country.value=localeCountry();if(language&&['en','es','pt'].includes(lang()))language.value=lang();syncPhone(form);setPrice(form);}

  async function redesignedOpenTour(id){
    const t=TOURS.find(item=>item.id===id);if(!t)return;await loadAvailability();
    const x=c(),y=labels(),title=tourText(t,'title'),route=t.route[lang()]||t.route.en;
    dialogContent.innerHTML=`<div class="booking-modal booking-modal--simple">
      <section class="booking-modal__tour" aria-label="${esc(title)}">
        <div class="booking-modal__image"><img src="${t.image}" alt="${esc(title)}"></div>
        <div class="booking-modal__content">
          <p class="booking-modal__eyebrow">${t.hours} ${esc(x.hours)}</p><h2>${esc(title)}</h2><p class="booking-modal__summary">${esc(tourText(t,'summary'))}</p>
          <div class="booking-modal__facts booking-modal__facts--simple"><div class="booking-modal__fact">${esc(y.pickup)}</div><div class="booking-modal__fact">${esc(y.cancel)}</div></div>
          <p class="booking-modal__route-title">${esc(y.route)}</p><ol class="booking-modal__route">${route.map(item=>`<li>${esc(item)}</li>`).join('')}</ol>
        </div>
      </section>
      <section class="booking-modal__form-wrap">
        <div class="booking-modal__top"><h3>${esc(y.title)}</h3><p>${esc(y.subtitle)}</p></div>
        <form data-booking-form data-tour-id="${t.id}" novalidate>
          <div class="booking-grid three booking-primary-fields">
            <label class="booking-field">${esc(x.date)} *<input name="date" type="date" min="${availability.minDate||bookingMinDate()}" required autocomplete="off"></label>
            <label class="booking-field">${esc(x.guests)} *<select name="guests" required>${guestOptions()}</select></label>
            <label class="booking-field">${esc(x.language)} *<select name="language"><option value="en">English</option><option value="es">Español</option><option value="pt">Português</option></select></label>
          </div>
          <div class="booking-grid booking-contact-fields">
            <label class="booking-field full">${esc(x.hotel)} *<input name="pickup" required autocomplete="section-booking shipping street-address" placeholder="${esc(x.hotel)}"></label>
            <label class="booking-field">${esc(x.name)} *<input name="name" autocomplete="section-booking name" autocapitalize="words" required></label>
            <label class="booking-field">${esc(x.email)} *<input name="email" type="email" autocomplete="section-booking email" inputmode="email" autocapitalize="none" spellcheck="false" required></label>
            <div class="booking-field full"><span>${esc(y.phoneNumber)}</span><div class="booking-phone"><label class="sr-only" for="phone-country">${esc(y.phoneCountry)}</label><select id="phone-country" name="phoneCountry" autocomplete="tel-country-code" aria-label="${esc(y.phoneCountry)}">${countryOptions()}</select><input name="phoneLocal" type="tel" autocomplete="section-booking tel-national" inputmode="tel" placeholder="Phone number"><input name="phone" type="hidden"></div></div>
          </div>
          <details class="booking-note"><summary>${esc(y.optional)}</summary><label class="booking-field full"><textarea name="requests" maxlength="500" rows="2" autocomplete="off"></textarea></label></details>
          <p class="booking-help">${esc(x.bookingHelp)}</p>
          <div class="booking-pricebox"><div><p class="booking-pricebox__label">${esc(y.total)}</p><p class="booking-pricebox__total" data-price-amount>€${t.price*2}</p><p class="booking-pricebox__detail" data-booking-total>2 × €${t.price} ${esc(x.perPerson)}</p></div><div class="booking-pricebox__trust">✓ ${esc(y.secure)}<br>✓ ${esc(y.instant)}</div></div>
          <label class="booking-terms"><input name="terms" type="checkbox" required><span>${esc(x.terms)} <a href="/terms/?lang=${lang()}" target="_blank" rel="noopener">${esc(x.termsLink)} ↗</a></span></label>
          <p class="booking-status" role="alert" aria-live="polite"></p><button class="button payment-button booking-submit" type="submit">${esc(x.pay)}</button><p class="booking-footer-note">${esc(y.charged)}</p>
        </form>
      </section></div>`;
    const form=dialogContent.querySelector('[data-booking-form]');hydrateForm(form);
    form.elements.phoneCountry?.addEventListener('change',()=>syncPhone(form));form.elements.phoneLocal?.addEventListener('input',()=>syncPhone(form));
    dialog.querySelector('.dialog-close').setAttribute('aria-label',x.close);dialog.scrollTop=0;dialog.showModal();document.body.classList.add('dialog-open');
  }
  openTour=redesignedOpenTour;
  document.addEventListener('change',event=>{if(event.target.name==='guests'&&event.target.form?.matches('[data-booking-form]'))setPrice(event.target.form)});
  document.addEventListener('submit',event=>{const form=event.target;if(form.matches?.('[data-booking-form]'))syncPhone(form)},true);
})();
