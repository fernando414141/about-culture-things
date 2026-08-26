(async function () {
  const root = document.getElementById('confirmation');
  const params = new URLSearchParams(location.search);
  const ref = params.get('ref');
  const sessionId = params.get('session_id');
  const esc = value => String(value || '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));

  if (!ref || !sessionId) {
    root.innerHTML = '<p class="eyebrow">About Culture Things</p><h1>We could not find this booking.</h1><p>Please use the complete payment confirmation link or contact us.</p><a class="button" href="../">Return home</a>';
    return;
  }

  try {
    const url = '/api/bookings/' + encodeURIComponent(ref) + '?sessionId=' + encodeURIComponent(sessionId);
    const response = await fetch(url);
    const booking = await response.json();
    if (!response.ok) throw new Error('booking');
    const confirmed = booking.status === 'confirmed';
    root.innerHTML = `<p class="eyebrow">${confirmed ? 'Payment confirmed' : 'Payment processing'}</p>
      <h1>${confirmed ? 'Your Portugal day is booked.' : 'We are confirming your payment.'}</h1>
      <p>${confirmed ? 'A confirmation has been sent to ' + esc(booking.customerEmail) + '.' : 'This normally takes only a moment. We will confirm by email.'}</p>
      <dl>
        <div><dt>Reference</dt><dd>${esc(booking.reference)}</dd></div>
        <div><dt>Experience</dt><dd>${esc(booking.tourName)}</dd></div>
        <div><dt>Date</dt><dd>${esc(booking.date)}</dd></div>
        <div><dt>Guests</dt><dd>${booking.persons}</dd></div>
        <div><dt>Tour language</dt><dd>${esc(booking.tourLanguage).toUpperCase()}</dd></div>
        <div><dt>Pickup / meeting</dt><dd>${esc(booking.pickup)}</dd></div>
        <div><dt>Total</dt><dd>€${booking.totalPrice} EUR</dd></div>
      </dl>
      <p class="small">We will send the precise pickup time and any monument-ticket guidance separately. Free cancellation is available until 48 hours before departure.</p>
      <a class="button" href="../">Return home</a>`;
  } catch {
    root.innerHTML = '<p class="eyebrow">Payment received</p><h1>Thank you.</h1><p>We are checking your booking. If you do not receive an email shortly, contact us with reference <strong>' + esc(ref) + '</strong>.</p><a class="button" href="mailto:aboutculturethings@gmail.com?subject=' + encodeURIComponent('Booking ' + ref) + '">Contact us</a>';
  }
}());
