/**
 * Booking Engine Controller — About Culture Things
 * Mobile-First, Multilingual, 24h Advance Rule, Real-time Price Engine, Stripe + Manual Payments.
 */
(function () {
  let modalContainer = null;
  let activeTour = null;
  let activeLang = 'en';
  let serverConfig = null;

  const i18nBooking = {
    en: {
      modalTitle: 'Book Your Luxury Experience',
      step1: '1. Tour & Date',
      step2: '2. Customer Details',
      step3: '3. Payment Method',
      selectTourLabel: 'Select Experience:',
      dateLabel: 'Select Date (Min. 24h in advance):',
      datePlaceholder: 'YYYY-MM-DD',
      guestsLabel: 'Number of Guests:',
      meetingPointLabel: 'Meeting Point:',
      meetingPointText: '09:00 AM — Hard Rock Cafe Lisbon',
      meetingPointNote: 'Exact departure pin provided upon booking confirmation.',
      perPerson: 'per guest',
      perGroup: 'per group',
      subtotal: 'Subtotal:',
      discount: 'Quantity Discount:',
      totalPrice: 'Total Price:',
      fullNameLabel: 'Full Name *',
      emailLabel: 'Email Address *',
      phoneLabel: 'Phone Number (Optional)',
      emailNote: 'Email will be our primary channel for your confirmation and itinerary details.',
      selectPaymentLabel: 'Select Payment Method:',
      stripeTitle: 'Credit Card / Apple Pay (Stripe)',
      stripeDesc: 'Instant automatic confirmation via secure Stripe checkout.',
      mbwayTitle: 'MB WAY (Manual)',
      mbwayDesc: 'Manual transfer via phone number +351968510019.',
      wiseTitle: 'Wise (Manual)',
      wiseDesc: 'Manual transfer using Wise payment link.',
      revolutTitle: 'Revolut (Manual)',
      revolutDesc: 'Manual transfer using Revolut payment link.',
      sepaTitle: 'SEPA Bank Transfer (Manual)',
      sepaDesc: 'Direct EU bank transfer with reference.',
      acceptTerms: 'I accept the cancellation policy (Free cancellation up to 48h before departure).',
      btnNext: 'Continue to Details',
      btnProceedPayment: 'Proceed to Payment',
      btnBack: 'Back',
      btnSubmitting: 'Processing Reservation...',
      confirmationTitle: 'Booking Request Received!',
      confirmationPendingMsg: 'Your booking request has been received. Your booking will be confirmed once payment is verified.',
      confirmationStripeMsg: 'Thank you! Your payment has been processed and your booking is confirmed.',
      referenceLabel: 'Booking Reference:',
      summaryHeading: 'Booking Summary',
      closeBtn: 'Close',
      errDate24h: 'Please select a date at least 24 hours in advance.',
      errRequiredFields: 'Please fill in all required fields.',
      errAcceptTerms: 'Please accept the cancellation policy to proceed.',
      errServer: 'An error occurred while creating your reservation. Please try again.'
    },
    es: {
      modalTitle: 'Reserve su Experiencia de Lujo',
      step1: '1. Tour y Fecha',
      step2: '2. Datos del Cliente',
      step3: '3. Método de Pago',
      selectTourLabel: 'Seleccione Experiencia:',
      dateLabel: 'Seleccione Fecha (Mín. 24h de anticipación):',
      datePlaceholder: 'AAAA-MM-DD',
      guestsLabel: 'Número de Personas:',
      meetingPointLabel: 'Punto de Encuentro:',
      meetingPointText: '09:00 — Hard Rock Cafe Lisbon',
      meetingPointNote: 'Ubicación exacta enviada en el email de confirmación.',
      perPerson: 'por persona',
      perGroup: 'por grupo',
      subtotal: 'Subtotal:',
      discount: 'Descuento por Grupo:',
      totalPrice: 'Precio Total:',
      fullNameLabel: 'Nombre Completo *',
      emailLabel: 'Correo Electrónico *',
      phoneLabel: 'Teléfono (Opcional)',
      emailNote: 'El email será nuestro medio principal para enviarle la confirmación y detalles.',
      selectPaymentLabel: 'Seleccione Método de Pago:',
      stripeTitle: 'Tarjeta de Crédito / Apple Pay (Stripe)',
      stripeDesc: 'Confirmación automática inmediata a través de pasarela segura Stripe.',
      mbwayTitle: 'MB WAY (Manual)',
      mbwayDesc: 'Pago manual al número +351968510019.',
      wiseTitle: 'Wise (Manual)',
      wiseDesc: 'Pago manual a través de enlace Wise.',
      revolutTitle: 'Revolut (Manual)',
      revolutDesc: 'Pago manual a través de enlace Revolut.',
      sepaTitle: 'Transferencia SEPA (Manual)',
      sepaDesc: 'Transferencia bancaria directa con referencia.',
      acceptTerms: 'Acepto la política de cancelación (Cancelación gratuita hasta 48h antes del tour).',
      btnNext: 'Continuar a Datos',
      btnProceedPayment: 'Proceder al Pago',
      btnBack: 'Atrás',
      btnSubmitting: 'Procesando Reserva...',
      confirmationTitle: '¡Solicitud de Reserva Recibida!',
      confirmationPendingMsg: 'Hemos recibido su solicitud de reserva. Su reserva quedará confirmada una vez recibido el pago.',
      confirmationStripeMsg: '¡Gracias! Su pago ha sido procesado y su reserva está confirmada.',
      referenceLabel: 'Referencia de Reserva:',
      summaryHeading: 'Resumen de la Reserva',
      closeBtn: 'Cerrar',
      errDate24h: 'Por favor seleccione una fecha con al menos 24 horas de anticipación.',
      errRequiredFields: 'Por favor complete todos los campos obligatorios.',
      errAcceptTerms: 'Debe aceptar la política de cancelación para continuar.',
      errServer: 'Ocurrió un error al procesar su reserva. Por favor intente nuevamente.'
    },
    pt: {
      modalTitle: 'Reserve a sua Experiência de Luxo',
      step1: '1. Tour e Data',
      step2: '2. Dados do Cliente',
      step3: '3. Método de Pagamento',
      selectTourLabel: 'Selecione Experiência:',
      dateLabel: 'Selecione Data (Mín. 24h de antecedência):',
      datePlaceholder: 'AAAA-MM-DD',
      guestsLabel: 'Número de Pessoas:',
      meetingPointLabel: 'Ponto de Encontro:',
      meetingPointText: '09:00 — Hard Rock Cafe Lisbon',
      meetingPointNote: 'Localização exata enviada com a confirmação.',
      perPerson: 'por pessoa',
      perGroup: 'por grupo',
      subtotal: 'Subtotal:',
      discount: 'Desconto de Grupo:',
      totalPrice: 'Preço Total:',
      fullNameLabel: 'Nome Completo *',
      emailLabel: 'Email *',
      phoneLabel: 'Telefone (Opcional)',
      emailNote: 'O email será o nosso meio principal para o envio da confirmação.',
      selectPaymentLabel: 'Selecione Método de Pagamento:',
      stripeTitle: 'Cartão de Crédito / Apple Pay (Stripe)',
      stripeDesc: 'Confirmação automática imediata via Stripe.',
      mbwayTitle: 'MB WAY (Manual)',
      mbwayDesc: 'Transferência manual para o número +351968510019.',
      wiseTitle: 'Wise (Manual)',
      wiseDesc: 'Pagamento manual via link Wise.',
      revolutTitle: 'Revolut (Manual)',
      revolutDesc: 'Pagamento manual via link Revolut.',
      sepaTitle: 'Transferência SEPA (Manual)',
      sepaDesc: 'Transferência bancária direta com referência.',
      acceptTerms: 'Aceito a política de cancelamento (Cancelamento gratuito até 48h antes do tour).',
      btnNext: 'Continuar para Dados',
      btnProceedPayment: 'Proceder ao Pagamento',
      btnBack: 'Voltar',
      btnSubmitting: 'A processar Reserva...',
      confirmationTitle: 'Pedido de Reserva Recebido!',
      confirmationPendingMsg: 'Recebemos o seu pedido de reserva. A sua reserva ficará confirmada assim que o pagamento for recebido.',
      confirmationStripeMsg: 'Obrigado! O seu pagamento foi processado e a sua reserva está confirmada.',
      referenceLabel: 'Referência da Reserva:',
      summaryHeading: 'Resumo da Reserva',
      closeBtn: 'Fechar',
      errDate24h: 'Por favor selecione uma data com pelo menos 24 horas de antecedência.',
      errRequiredFields: 'Por favor preencha todos os campos obrigatórios.',
      errAcceptTerms: 'Por favor aceite a política de cancelamento para continuar.',
      errServer: 'Ocorreu um erro ao processar a sua reserva. Por favor tente novamente.'
    }
  };

  function getMinDate24h() {
    const now = new Date();
    // 24h gap rule
    const minDateObj = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const year = minDateObj.getFullYear();
    const month = String(minDateObj.getMonth() + 1).padStart(2, '0');
    const day = String(minDateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getToursList() {
    if (window.TOURS_CONFIG && window.TOURS_CONFIG.tours) {
      return window.TOURS_CONFIG.tours.filter(t => t.active);
    }
    return [];
  }

  function calculatePrice(tour, persons) {
    if (!tour) return { subtotal: 0, discountAmount: 0, totalPrice: 0 };
    const p = parseInt(persons, 10) || 1;
    if (tour.pricingType === 'per_group') {
      return { subtotal: tour.price, discountAmount: 0, totalPrice: tour.price };
    }
    const subtotal = tour.price * p;
    let discountPercent = 0;
    const rules = (window.TOURS_CONFIG && window.TOURS_CONFIG.quantityDiscounts) || [];
    for (const rule of rules) {
      if (p >= rule.minGuests && p <= rule.maxGuests) {
        discountPercent = rule.discountPercent;
        break;
      }
    }
    const discountAmount = Math.round((subtotal * discountPercent) / 100);
    return { subtotal, discountAmount, totalPrice: subtotal - discountAmount };
  }

  function buildModalHtml() {
    const minDate = getMinDate24h();
    const tours = getToursList();
    const t = i18nBooking[activeLang] || i18nBooking.en;

    const tourOptionsHtml = tours.map(tour => {
      const tourName = typeof tour.name === 'object' ? (tour.name[activeLang] || tour.name.en) : tour.name;
      return `<option value="${tour.id}">${tourName} — €${tour.price} ${tour.pricingType === 'per_group' ? t.perGroup : t.perPerson}</option>`;
    }).join('');

    return `
      <div class="act-booking-overlay" id="act-booking-overlay">
        <div class="act-booking-drawer" role="dialog" aria-modal="true" aria-labelledby="act-modal-title">
          <div class="act-drawer-header">
            <div>
              <p class="act-drawer-kicker">About Culture Things</p>
              <h2 id="act-modal-title" class="act-drawer-title">${t.modalTitle}</h2>
            </div>
            <button type="button" class="act-drawer-close" id="act-drawer-close" aria-label="${t.closeBtn}">×</button>
          </div>

          <div class="act-drawer-steps">
            <span class="act-step-pill active" id="pill-step-1">${t.step1}</span>
            <span class="act-step-pill" id="pill-step-2">${t.step2}</span>
            <span class="act-step-pill" id="pill-step-3">${t.step3}</span>
          </div>

          <div class="act-drawer-body">
            <div id="act-booking-error" class="act-alert-error" style="display:none;"></div>

            <!-- STEP 1: Tour, Date, Guests -->
            <form id="act-step-1-form" class="act-step-form">
              <div class="act-form-group">
                <label for="act-tour-select">${t.selectTourLabel}</label>
                <select id="act-tour-select" class="act-input" required>${tourOptionsHtml}</select>
              </div>

              <div class="act-form-row">
                <div class="act-form-group flex-2">
                  <label for="act-date-input">${t.dateLabel}</label>
                  <input type="date" id="act-date-input" class="act-input" min="${minDate}" required>
                </div>
                <div class="act-form-group flex-1">
                  <label for="act-guests-input">${t.guestsLabel}</label>
                  <select id="act-guests-input" class="act-input">
                    ${[1, 2, 3, 4, 5, 6, 7, 8].map(n => `<option value="${n}">${n} ${n === 1 ? 'Guest' : 'Guests'}</option>`).join('')}
                  </select>
                </div>
              </div>

              <div class="act-meeting-box">
                <strong>📍 ${t.meetingPointLabel}</strong>
                <p>${t.meetingPointText}</p>
                <span class="act-meeting-note">${t.meetingPointNote}</span>
              </div>

              <div class="act-price-breakdown">
                <div class="act-price-line"><span>${t.subtotal}</span><span id="act-calc-subtotal">€0</span></div>
                <div class="act-price-line act-discount-line" id="act-discount-row" style="display:none;">
                  <span>${t.discount}</span><span id="act-calc-discount">-€0</span>
                </div>
                <div class="act-price-line act-total-line">
                  <span>${t.totalPrice}</span><span id="act-calc-total" class="act-gold-total">€0</span>
                </div>
              </div>

              <div class="act-drawer-footer">
                <button type="submit" class="act-btn-gold act-w-full">${t.btnNext} →</button>
              </div>
            </form>

            <!-- STEP 2: Customer Details -->
            <form id="act-step-2-form" class="act-step-form" style="display:none;">
              <div class="act-form-group">
                <label for="act-name-input">${t.fullNameLabel}</label>
                <input type="text" id="act-name-input" class="act-input" placeholder="e.g. Eleanor Vance" required>
              </div>

              <div class="act-form-group">
                <label for="act-email-input">${t.emailLabel}</label>
                <input type="email" id="act-email-input" class="act-input" placeholder="e.g. eleanor@example.com" required>
                <span class="act-input-note">${t.emailNote}</span>
              </div>

              <div class="act-form-group">
                <label for="act-phone-input">${t.phoneLabel}</label>
                <input type="tel" id="act-phone-input" class="act-input" placeholder="e.g. +1 555 123 4567">
              </div>

              <div class="act-drawer-footer act-row-btns">
                <button type="button" class="act-btn-outline" id="act-back-to-1">← ${t.btnBack}</button>
                <button type="submit" class="act-btn-gold">${t.btnNext} →</button>
              </div>
            </form>

            <!-- STEP 3: Payment Selection -->
            <form id="act-step-3-form" class="act-step-form" style="display:none;">
              <div class="act-form-group">
                <label>${t.selectPaymentLabel}</label>
                <div class="act-payment-options">
                  <label class="act-payment-card active">
                    <input type="radio" name="act-payment" value="stripe" checked>
                    <div>
                      <strong>💳 ${t.stripeTitle}</strong>
                      <p>${t.stripeDesc}</p>
                    </div>
                  </label>
                  <label class="act-payment-card">
                    <input type="radio" name="act-payment" value="mbway">
                    <div>
                      <strong>📱 ${t.mbwayTitle}</strong>
                      <p>${t.mbwayDesc}</p>
                    </div>
                  </label>
                  <label class="act-payment-card">
                    <input type="radio" name="act-payment" value="wise">
                    <div>
                      <strong>🌐 ${t.wiseTitle}</strong>
                      <p>${t.wiseDesc}</p>
                    </div>
                  </label>
                  <label class="act-payment-card">
                    <input type="radio" name="act-payment" value="revolut">
                    <div>
                      <strong>⚡ ${t.revolutTitle}</strong>
                      <p>${t.revolutDesc}</p>
                    </div>
                  </label>
                  <label class="act-payment-card">
                    <input type="radio" name="act-payment" value="sepa">
                    <div>
                      <strong>🏛️ ${t.sepaTitle}</strong>
                      <p>${t.sepaDesc}</p>
                    </div>
                  </label>
                </div>
              </div>

              <div class="act-form-group act-terms-check">
                <label class="act-checkbox-label">
                  <input type="checkbox" id="act-accept-terms" required>
                  <span>${t.acceptTerms}</span>
                </label>
              </div>

              <div class="act-drawer-footer act-row-btns">
                <button type="button" class="act-btn-outline" id="act-back-to-2">← ${t.btnBack}</button>
                <button type="submit" class="act-btn-gold" id="act-submit-btn">${t.btnProceedPayment}</button>
              </div>
            </form>

            <!-- STEP 4: Confirmation Screen -->
            <div id="act-step-4-confirm" class="act-step-form" style="display:none;">
              <div class="act-confirm-badge">✓</div>
              <h3 id="act-confirm-heading" class="act-confirm-title">${t.confirmationTitle}</h3>
              <p id="act-confirm-msg" class="act-confirm-msg">${t.confirmationPendingMsg}</p>

              <div class="act-ref-box">
                <span>${t.referenceLabel}</span>
                <strong id="act-confirm-ref" class="act-gold-ref">ACT-XXXXX</strong>
              </div>

              <div class="act-summary-card" id="act-confirm-summary"></div>

              <div class="act-drawer-footer" style="margin-top:20px;">
                <button type="button" class="act-btn-gold act-w-full" id="act-finish-btn">${t.closeBtn}</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  function initBookingModal() {
    if (document.getElementById('act-booking-overlay')) return;
    const div = document.createElement('div');
    div.innerHTML = buildModalHtml();
    document.body.appendChild(div.firstElementChild);

    modalContainer = document.getElementById('act-booking-overlay');

    // Event handlers
    document.getElementById('act-drawer-close').addEventListener('click', closeBookingModal);
    modalContainer.addEventListener('click', function (e) {
      if (e.target === modalContainer) closeBookingModal();
    });

    // Form Navigation & Calculation
    const tourSelect = document.getElementById('act-tour-select');
    const guestsSelect = document.getElementById('act-guests-input');
    const dateInput = document.getElementById('act-date-input');

    function updatePriceUI() {
      const selectedTourId = tourSelect.value;
      const tours = getToursList();
      activeTour = tours.find(t => t.id === selectedTourId) || tours[0];

      if (activeTour) {
        // Adjust max guests option
        const p = parseInt(guestsSelect.value, 10) || 1;
        const calc = calculatePrice(activeTour, p);

        document.getElementById('act-calc-subtotal').textContent = `€${calc.subtotal}`;
        const discRow = document.getElementById('act-discount-row');
        if (calc.discountAmount > 0) {
          discRow.style.display = 'flex';
          document.getElementById('act-calc-discount').textContent = `-€${calc.discountAmount}`;
        } else {
          discRow.style.display = 'none';
        }
        document.getElementById('act-calc-total').textContent = `€${calc.totalPrice}`;
      }
    }

    tourSelect.addEventListener('change', updatePriceUI);
    guestsSelect.addEventListener('change', updatePriceUI);
    updatePriceUI();

    // Step 1 Submission
    document.getElementById('act-step-1-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const errDiv = document.getElementById('act-booking-error');
      errDiv.style.display = 'none';

      const selectedDate = dateInput.value;
      if (!selectedDate) {
        errDiv.textContent = (i18nBooking[activeLang] || i18nBooking.en).errDate24h;
        errDiv.style.display = 'block';
        return;
      }

      showStep(2);
    });

    // Step 2 Submission
    document.getElementById('act-step-2-form').addEventListener('submit', function (e) {
      e.preventDefault();
      showStep(3);
    });

    document.getElementById('act-back-to-1').addEventListener('click', function () { showStep(1); });
    document.getElementById('act-back-to-2').addEventListener('click', function () { showStep(2); });

    // Payment Option selector
    document.querySelectorAll('.act-payment-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.act-payment-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    // Step 3 Final Submission
    document.getElementById('act-step-3-form').addEventListener('submit', async function (e) {
      e.preventDefault();
      const errDiv = document.getElementById('act-booking-error');
      errDiv.style.display = 'none';

      const acceptTerms = document.getElementById('act-accept-terms').checked;
      if (!acceptTerms) {
        errDiv.textContent = (i18nBooking[activeLang] || i18nBooking.en).errAcceptTerms;
        errDiv.style.display = 'block';
        return;
      }

      const submitBtn = document.getElementById('act-submit-btn');
      const t = i18nBooking[activeLang] || i18nBooking.en;
      submitBtn.disabled = true;
      submitBtn.textContent = t.btnSubmitting;

      const payload = {
        tourId: tourSelect.value,
        date: dateInput.value,
        persons: guestsSelect.value,
        name: document.getElementById('act-name-input').value,
        email: document.getElementById('act-email-input').value,
        phone: document.getElementById('act-phone-input').value,
        paymentMethod: document.querySelector('input[name="act-payment"]:checked').value,
        lang: activeLang
      };

      try {
        if (payload.paymentMethod === 'stripe') {
          const res = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          if (data.checkoutUrl) {
            window.location.href = data.checkoutUrl;
            return;
          } else {
            throw new Error(data.error || 'Stripe error');
          }
        } else {
          // Manual Payment
          const res = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          if (data.success && data.booking) {
            renderConfirmationScreen(data.booking);
          } else {
            throw new Error(data.error || t.errServer);
          }
        }
      } catch (err) {
        console.error('Booking submission error:', err);
        errDiv.textContent = err.message || t.errServer;
        errDiv.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = t.btnProceedPayment;
      }
    });

    document.getElementById('act-finish-btn').addEventListener('click', closeBookingModal);
  }

  function showStep(stepNum) {
    document.getElementById('pill-step-1').classList.toggle('active', stepNum === 1);
    document.getElementById('pill-step-2').classList.toggle('active', stepNum === 2);
    document.getElementById('pill-step-3').classList.toggle('active', stepNum === 3);

    document.getElementById('act-step-1-form').style.display = stepNum === 1 ? 'block' : 'none';
    document.getElementById('act-step-2-form').style.display = stepNum === 2 ? 'block' : 'none';
    document.getElementById('act-step-3-form').style.display = stepNum === 3 ? 'block' : 'none';
    document.getElementById('act-step-4-confirm').style.display = stepNum === 4 ? 'none' : 'none';
  }

  function renderConfirmationScreen(booking) {
    showStep(4);
    document.getElementById('act-step-1-form').style.display = 'none';
    document.getElementById('act-step-2-form').style.display = 'none';
    document.getElementById('act-step-3-form').style.display = 'none';

    const confirmDiv = document.getElementById('act-step-4-confirm');
    confirmDiv.style.display = 'block';

    const t = i18nBooking[activeLang] || i18nBooking.en;
    document.getElementById('act-confirm-heading').textContent = t.confirmationTitle;
    document.getElementById('act-confirm-msg').textContent = t.confirmationPendingMsg;
    document.getElementById('act-confirm-ref').textContent = booking.reference;

    let manualInstr = '';
    if (booking.paymentMethod === 'mbway') {
      manualInstr = `<div class="act-manual-instr"><p><strong>MB WAY:</strong> Send <strong>€${booking.totalPrice} EUR</strong> to <strong>+351968510019</strong> with reference <strong>${booking.reference}</strong>.</p></div>`;
    } else if (booking.paymentMethod === 'wise') {
      manualInstr = `<div class="act-manual-instr"><p><strong>Wise:</strong> Pay <strong>€${booking.totalPrice} EUR</strong> via <a href="https://wise.com/pay/me/anaritac83" target="_blank">wise.com/pay/me/anaritac83</a> with reference <strong>${booking.reference}</strong>.</p></div>`;
    } else if (booking.paymentMethod === 'revolut') {
      manualInstr = `<div class="act-manual-instr"><p><strong>Revolut:</strong> Pay <strong>€${booking.totalPrice} EUR</strong> via <a href="https://revolut.me/ritaa89" target="_blank">revolut.me/ritaa89</a> with reference <strong>${booking.reference}</strong>.</p></div>`;
    } else if (booking.paymentMethod === 'sepa') {
      manualInstr = `<div class="act-manual-instr"><p><strong>SEPA Bank Transfer:</strong><br>IBAN: <strong>PT50 0023 0000 45799874051 94</strong><br>Beneficiary: <strong>About Culture Things</strong><br>Reference: <strong>${booking.reference}</strong></p></div>`;
    }

    document.getElementById('act-confirm-summary').innerHTML = `
      <h4>${t.summaryHeading}</h4>
      <p><strong>Tour:</strong> ${booking.tourName}</p>
      <p><strong>Date & Time:</strong> ${booking.date} at 09:00 AM</p>
      <p><strong>Meeting Point:</strong> Hard Rock Cafe Lisbon</p>
      <p><strong>Guests:</strong> ${booking.persons}</p>
      <p><strong>Total:</strong> €${booking.totalPrice} EUR</p>
      <p><strong>Email:</strong> ${booking.customerEmail}</p>
      ${manualInstr}
    `;
  }

  function openBookingModal(tourId) {
    if (window.SITE && window.SITE.currentLang) {
      activeLang = window.SITE.currentLang;
    } else if (window.currentLang) {
      activeLang = window.currentLang;
    }

    if (!modalContainer) initBookingModal();

    if (tourId) {
      const select = document.getElementById('act-tour-select');
      if (select) {
        select.value = tourId;
        select.dispatchEvent(new Event('change'));
      }
    }

    showStep(1);
    modalContainer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    if (modalContainer) {
      modalContainer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Check URL parameters for status return from Stripe or test redirect
  document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('booking_ref');
    const status = params.get('status');

    if (ref && (status === 'success' || status === 'success_demo')) {
      setTimeout(function () {
        openBookingModal();
        fetch(`/api/bookings/${ref}`)
          .then(res => res.json())
          .then(data => {
            if (data.booking) {
              renderConfirmationScreen(data.booking);
              const heading = document.getElementById('act-confirm-heading');
              const msg = document.getElementById('act-confirm-msg');
              const t = i18nBooking[activeLang] || i18nBooking.en;
              if (heading) heading.textContent = 'Booking Confirmed!';
              if (msg) msg.textContent = t.confirmationStripeMsg;
            }
          })
          .catch(() => {});
      }, 500);
    }

    // Global event delegation for "Book" CTAs
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-open-booking]');
      if (btn) {
        e.preventDefault();
        const tourId = btn.getAttribute('data-open-booking');
        openBookingModal(tourId);
      }
    });
  });

  window.openBookingModal = openBookingModal;
  window.closeBookingModal = closeBookingModal;
})();
