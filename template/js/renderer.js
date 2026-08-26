(function () {
  document.documentElement.classList.add('js');
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function data(lang) { return SITE_CONTENT[lang] || SITE_CONTENT.en; }
  function tourName(tour, lang) { return tour.name[lang] || tour.name.en; }
  function render(lang) {
    const c = data(lang), ui = c.t, tours = TOURS_CONFIG.tours.filter(t => t.active);
    document.getElementById('tour-grid').innerHTML = tours.map((tour, i) => {
      const copy = c.tours[tour.id], usd = Math.round(tour.price * TOURS_CONFIG.usdReferenceRate);
      const href = tour.id === 'essential-sintra' ? 'experiences/essential-sintra/' : `experiences/${tour.id}/`;
      return `<article class="tour ${tour.featured ? 'tour-featured' : ''}" id="tour-${esc(tour.id)}" data-reveal>
        <a class="tour-image" href="${href}?lang=${lang}" aria-label="${esc(ui.viewTour)}: ${esc(tourName(tour,lang))}"><img src="${esc(tour.image)}" width="736" height="552" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async" alt="${esc(tour.imageAlt)}">${tour.featured ? `<span>${esc(ui.popular)}</span>` : ''}</a>
        <div class="tour-body"><p class="tour-meta">${esc(tour.duration)} · ${esc(ui.upTo)} ${tour.maxPersons} ${esc(ui.guests)}</p><h3><a href="${href}?lang=${lang}">${esc(tourName(tour,lang))}</a></h3><p class="tour-line">${esc(copy.line)}</p><ul>${copy.highlights.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p class="tour-guided">${esc(ui.guided)}</p><div class="tour-price"><p><small>${esc(ui.from)}</small><strong>€${tour.price}</strong><span>≈ $${usd} USD · ${esc(ui.perPerson)}</span></p><button class="text-button" data-open-booking data-tour="${esc(tour.id)}">${esc(ui.reserve)} →</button></div></div>
      </article>`;
    }).join('');
    document.getElementById('principles').innerHTML = c.principles.map((x,i)=>`<article data-reveal><span>0${i+1}</span><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></article>`).join('');
    document.getElementById('review-grid').innerHTML = c.reviews.slice(0,3).map(x=>`<blockquote data-reveal><div class="review-mark" aria-hidden="true">“</div><p>${esc(x.text.replace(/^“|”$/g,''))}</p><footer><strong>${esc(x.name)}</strong><span>${esc(x.meta)}</span></footer></blockquote>`).join('');
    document.getElementById('faq-list').innerHTML = c.faq.slice(0,6).map((x,i)=>`<details ${i===0?'open':''}><summary><span>${esc(x[0])}</span><span aria-hidden="true">+</span></summary><p>${esc(x[1])}</p></details>`).join('');
    document.querySelectorAll('[data-open-booking]').forEach(button=>button.addEventListener('click',()=>window.openBooking && window.openBooking(button.dataset.tour)));
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}}),{threshold:.12}) : null;
    document.querySelectorAll('[data-reveal]').forEach(el=>observer ? observer.observe(el) : el.classList.add('is-visible'));
  }
  window.renderSite = render;
}());
