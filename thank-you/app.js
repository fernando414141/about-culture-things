(async function () {
  const root = document.getElementById('confirmation');
  const params = new URLSearchParams(location.search);
  const ref = params.get('ref');
  const sessionId = params.get('session_id');
  const esc = value => String(value || '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const calendarUrl = booking => {
    const day=String(booking.date||'').replace(/-/g,'');
    const q=new URLSearchParams({action:'TEMPLATE',text:`${booking.tourName} · About Culture Things`,dates:`${day}T083000/${day}T173000`,ctz:'Europe/Lisbon',location:booking.pickup||'',details:`Booking ${booking.reference} · ${booking.persons} guests · ${String(booking.tourLanguage||'').toUpperCase()} · RNAAT 726/2024`});
    return 'https://calendar.google.com/calendar/render?'+q.toString();
  };
  if (!ref || !sessionId) {root.innerHTML='<p class="eyebrow">About Culture Things</p><h1>We could not find this booking.</h1><p>Please use the complete payment confirmation link or contact us.</p><a class="button" href="../">Return home</a>';return;}
  try {
    const response=await fetch('/api/bookings/'+encodeURIComponent(ref)+'?sessionId='+encodeURIComponent(sessionId));
    const booking=await response.json();
    if(!response.ok)throw new Error('booking');
    const confirmed=booking.status==='confirmed';
    root.innerHTML=`<p class="eyebrow">${confirmed?'Payment confirmed':'Payment processing'}</p><h1>${confirmed?'Your Portugal day is booked.':'We are confirming your payment.'}</h1><p>${confirmed?'Your booking is confirmed. Save the date below and we will use your booking contact details for any pickup coordination.':'We will confirm as soon as the payment is completed.'}</p><dl><div><dt>Reference</dt><dd>${esc(booking.reference)}</dd></div><div><dt>Experience</dt><dd>${esc(booking.tourName)}</dd></div><div><dt>Date</dt><dd>${esc(booking.date)}</dd></div><div><dt>Guests</dt><dd>${booking.persons}</dd></div><div><dt>Tour language</dt><dd>${esc(booking.tourLanguage).toUpperCase()}</dd></div><div><dt>Pickup & return</dt><dd>${esc(booking.pickup)}</dd></div><div><dt>Total</dt><dd>€${booking.totalPrice} EUR</dd></div></dl><p class="small">We will coordinate any precise pickup details and monument-ticket guidance separately. Free cancellation is available until 48 hours before departure.</p>${confirmed?`<a class="button" href="${esc(calendarUrl(booking))}" target="_blank" rel="noopener">Add to Google Calendar</a>`:''}<a class="button" href="../">Return home</a>`;
  } catch {
    root.innerHTML='<p class="eyebrow">Payment received</p><h1>Thank you.</h1><p>We are checking your booking. Contact us with reference <strong>'+esc(ref)+'</strong> if you need assistance.</p><a class="button" href="mailto:aboutculturethings@gmail.com?subject='+encodeURIComponent('Booking '+ref)+'">Contact us</a>';
  }
}());
