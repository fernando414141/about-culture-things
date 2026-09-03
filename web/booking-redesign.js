/* Booking modal UX redesign. Loaded after app.js and intentionally reuses its booking/payment logic. */
(()=>{
  const extra={
    en:{step:'Complete your booking',title:'Plan your day',subtitle:'Choose the essentials first. You will review the total before secure payment.',details:'Tour details',contact:'Your details',route:'Your day at a glance',duration:'Duration',group:'Booking size',pickupShort:'Door-to-door',cancel:'Flexible plans',included:'Hotel pickup & return',people:'2–6 travellers',cancelText:'Free cancellation up to 48h',total:'Booking total',charged:'Charged securely in EUR',secure:'Secure Stripe payment',instant:'Immediate confirmation',support:'Direct local support'},
    pt:{step:'Concluir reserva',title:'Planeie o seu dia',subtitle:'Escolha primeiro o essencial. Verá o total antes do pagamento seguro.',details:'Detalhes do tour',contact:'Os seus dados',route:'O seu dia em resumo',duration:'Duração',group:'Tamanho da reserva',pickupShort:'Porta a porta',cancel:'Planos flexíveis',included:'Recolha e regresso ao alojamento',people:'2–6 viajantes',cancelText:'Cancelamento gratuito até 48h',total:'Total da reserva',charged:'Cobrado com segurança em EUR',secure:'Pagamento seguro Stripe',instant:'Confirmação imediata',support:'Apoio local direto'},
    es:{step:'Completa tu reserva',title:'Planifica tu día',subtitle:'Elige primero lo esencial. Verás el total antes del pago seguro.',details:'Detalles del tour',contact:'Tus datos',route:'Tu día de un vistazo',duration:'Duración',group:'Tamaño de la reserva',pickupShort:'Puerta a puerta',cancel:'Planes flexibles',included:'Recogida y regreso al alojamiento',people:'2–6 viajeros',cancelText:'Cancelación gratuita hasta 48h',total:'Total de la reserva',charged:'Cobro seguro en EUR',secure:'Pago seguro con Stripe',instant:'Confirmación inmediata',support:'Soporte local directo'},
    fr:{step:'Finaliser la réservation',title:'Planifiez votre journée',subtitle:'Choisissez d’abord l’essentiel. Le total apparaît avant le paiement sécurisé.',details:'Détails de l’excursion',contact:'Vos coordonnées',route:'Votre journée en un coup d’œil',duration:'Durée',group:'Taille de la réservation',pickupShort:'Porte à porte',cancel:'Plans flexibles',included:'Prise en charge et retour',people:'2–6 voyageurs',cancelText:'Annulation gratuite jusqu’à 48 h',total:'Total de la réservation',charged:'Débité en EUR en toute sécurité',secure:'Paiement Stripe sécurisé',instant:'Confirmation immédiate',support:'Assistance locale directe'},
    de:{step:'Buchung abschließen',title:'Planen Sie Ihren Tag',subtitle:'Wählen Sie zuerst das Wesentliche. Vor der sicheren Zahlung sehen Sie den Gesamtpreis.',details:'Tourdetails',contact:'Ihre Angaben',route:'Ihr Tag auf einen Blick',duration:'Dauer',group:'Buchungsgröße',pickupShort:'Tür zu Tür',cancel:'Flexible Planung',included:'Abholung und Rückfahrt',people:'2–6 Reisende',cancelText:'Kostenlose Stornierung bis 48 Std.',total:'Buchungssumme',charged:'Sichere Abrechnung in EUR',secure:'Sichere Stripe-Zahlung',instant:'Sofortige Bestätigung',support:'Direkter lokaler Support'}
  };
  const labels=()=>extra[lang()]||extra.en;
  const setPrice=(form)=>{
    const tour=TOURS.find(item=>item.id===form.dataset.tourId);
    const count=Number(form.elements.guests?.value||2);
    if(!tour)return;
    const amount=form.querySelector('[data-price-amount]');
    const detail=form.querySelector('[data-booking-total]');
    if(amount)amount.textContent=`€${count*tour.price}`;
    if(detail)detail.textContent=`${count} × €${tour.price} ${c().perPerson}`;
  };

  async function redesignedOpenTour(id){
    const t=TOURS.find(item=>item.id===id);if(!t)return;
    await loadAvailability();
    const x=c(),y=labels(),title=tourText(t,'title'),route=t.route[lang()]||t.route.en;
    dialogContent.innerHTML=`
      <div class="booking-modal">
        <section class="booking-modal__tour" aria-label="${esc(title)}">
          <div class="booking-modal__image"><img src="${t.image}" alt="${esc(title)}"></div>
          <div class="booking-modal__content">
            <p class="booking-modal__eyebrow">${t.hours} ${esc(x.hours)} · ${esc(x.minGuests)}</p>
            <h2>${esc(title)}</h2>
            <p class="booking-modal__summary">${esc(tourText(t,'summary'))}</p>
            <div class="booking-modal__facts">
              <div class="booking-modal__fact"><strong>${esc(y.duration)}</strong>${t.hours} ${esc(x.hours)}</div>
              <div class="booking-modal__fact"><strong>${esc(y.group)}</strong>${esc(y.people)}</div>
              <div class="booking-modal__fact"><strong>${esc(y.pickupShort)}</strong>${esc(y.included)}</div>
              <div class="booking-modal__fact"><strong>${esc(y.cancel)}</strong>${esc(y.cancelText)}</div>
            </div>
            <p class="booking-modal__route-title">${esc(y.route)}</p>
            <ol class="booking-modal__route">${route.map(item=>`<li>${esc(item)}</li>`).join('')}</ol>
          </div>
        </section>
        <section class="booking-modal__form-wrap">
          <div class="booking-modal__top">
            <p class="booking-modal__step-label">${esc(y.step)}</p>
            <h3>${esc(y.title)}</h3>
            <p>${esc(y.subtitle)}</p>
          </div>
          <form data-booking-form data-tour-id="${t.id}" novalidate>
            <div class="booking-panel">
              <p class="booking-panel__title"><span class="booking-panel__number">1</span>${esc(y.details)}</p>
              <div class="booking-grid three">
                <label class="booking-field">${esc(x.date)} *<input name="date" type="date" min="${availability.minDate||bookingMinDate()}" required autocomplete="off"></label>
                <label class="booking-field">${esc(x.guests)} *<select name="guests" required>${guestOptions()}</select></label>
                <label class="booking-field">${esc(x.language)} *<select name="language"><option value="en">English</option><option value="es">Español</option><option value="pt">Português</option></select></label>
                <label class="booking-field full">${esc(x.hotel)} *<input name="pickup" required autocomplete="street-address" placeholder="${esc(x.hotel)}"></label>
              </div>
              <p style="margin:10px 1px 0;color:var(--muted);font-size:10px">${esc(x.bookingHelp)}</p>
            </div>
            <div class="booking-panel">
              <p class="booking-panel__title"><span class="booking-panel__number">2</span>${esc(y.contact)}</p>
              <div class="booking-grid">
                <label class="booking-field">${esc(x.name)} *<input name="name" autocomplete="name" required></label>
                <label class="booking-field">${esc(x.email)} *<input name="email" type="email" autocomplete="email" required></label>
                <label class="booking-field full">${esc(x.phone)}<input name="phone" type="tel" autocomplete="tel" placeholder="+351 …"></label>
                <label class="booking-field full">${esc(x.requests)}<textarea name="requests" maxlength="500" rows="2"></textarea></label>
              </div>
            </div>
            <div class="booking-pricebox">
              <div><p class="booking-pricebox__label">${esc(y.total)}</p><p class="booking-pricebox__total" data-price-amount>€${t.price*2}</p><p class="booking-pricebox__detail" data-booking-total>2 × €${t.price} ${esc(x.perPerson)}</p></div>
              <div class="booking-pricebox__trust">✓ ${esc(y.secure)}<br>✓ ${esc(y.instant)}</div>
            </div>
            <label class="booking-terms"><input name="terms" type="checkbox" required><span>${esc(x.terms)} <a href="/terms/?lang=${lang()}" target="_blank" rel="noopener">${esc(x.termsLink)} ↗</a></span></label>
            <p class="booking-status" role="alert" aria-live="polite"></p>
            <button class="button payment-button booking-submit" type="submit">${esc(x.pay)}</button>
            <p class="booking-footer-note"><span>🔒 ${esc(y.charged)}</span><span>·</span><span>${esc(y.support)}</span></p>
          </form>
        </section>
      </div>`;
    dialog.querySelector('.dialog-close').setAttribute('aria-label',x.close);
    dialog.scrollTop=0;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }

  openTour=redesignedOpenTour;
  document.addEventListener('change',event=>{
    if(event.target.name==='guests'&&event.target.form?.matches('[data-booking-form]'))setPrice(event.target.form);
  });
})();
