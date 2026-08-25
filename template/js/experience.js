(function () {
  const tours = {
    'sintra-coast': {
      type: 'Shared luxury-van day tour', name: 'Sintra, Pena, Cabo da Roca & Cascais',
      deck: 'Palaces, forest and Atlantic coast in one unhurried route from Sintra.',
      duration: '7.5 hours', minimum: 'Departs from 4 guests', meeting: 'Sintra Train Station', price: '€119',
      image: '../../site/images/tour-full-sintra-coast-640.webp', position: 'center',
      intro: 'A complete first day in Sintra without turning it into a checklist. The route connects Pena, the historic centre, Cabo da Roca and Cascais in a shared 2023 Mercedes-Benz Vito luxury van—not a bus.',
      fit: 'Best for first-time visitors who want the palace landscape and Atlantic coast in one day.',
      route: ['Meet at Sintra Train Station', 'Pena area and guided local context', 'Historic Sintra and time for lunch', 'Cabo da Roca Atlantic viewpoint', 'Coastal drive and Cascais'],
      included: ['Professional local driver-guide', 'Mercedes-Benz Vito transport', 'Bottled water', 'Required passenger insurance'],
      excluded: ['Palace tickets', 'Lunch and personal expenses'],
      message: "Hello! I'm interested in the Sintra, Pena, Cabo da Roca & Cascais tour. Could you check my dates and number of travellers?"
    },
    'fatima-nazare-obidos': {
      type: 'Shared luxury-van day tour', name: 'Fátima, Batalha, Nazaré & Óbidos',
      deck: 'Faith, Gothic heritage, Atlantic views and a medieval village in one northbound day.',
      duration: '9 hours', minimum: 'Departs from 5 guests', meeting: 'Restauradores Square, Lisbon', price: '€179',
      image: '../../site/images/tour-fatima-obidos-736.webp', position: 'center 38%',
      intro: 'A carefully timed route through four distinct places north of Lisbon. The direct rate includes the real positioning and operating time from our Sintra base, so the day remains sustainable without marketplace mark-ups.',
      fit: 'Best for travellers who want cultural range and are comfortable with a full day on the road.',
      route: ['Meet at Restauradores Square', 'Fátima Sanctuary', 'Batalha Monastery exterior and context', 'Nazaré Atlantic viewpoint and lunch time', 'Óbidos walls, lanes and ginjinha'],
      included: ['Professional local driver-guide', 'Mercedes-Benz Vito transport', 'Bottled water and ginjinha', 'Required passenger insurance'],
      excluded: ['Monument tickets', 'Lunch and personal expenses'],
      message: "Hello! I'm interested in the Fátima, Batalha, Nazaré & Óbidos tour. Could you check my dates and number of travellers?"
    },
    'arrabida-wine': {
      type: 'Shared luxury-van wine tour', name: 'Arrábida, Azeitão & Two Wineries',
      deck: 'Two wine producers, mountain panoramas and a relaxed coastal pause south of Lisbon.',
      duration: '8 hours', minimum: 'Departs from 5 guests', meeting: 'Restauradores Square, Lisbon', price: '€169',
      image: '../../site/images/tour-arrabida-wine-960.webp', position: 'center',
      intro: 'A wine day that leaves room for the landscape. Two contrasting producers anchor the route, with Palmela, Arrábida and Sesimbra adding the cultural and coastal context.',
      fit: 'Best for wine-curious travellers who prefer a small shared van to a large group excursion.',
      route: ['Meet at Restauradores Square', 'Palmela landscape and heritage', 'First Azeitão winery and tasting', 'Arrábida scenic route and Sesimbra lunch pause', 'Second winery visit and tasting'],
      included: ['Professional local driver-guide', 'Mercedes-Benz Vito transport', 'Two winery visits with tastings', 'Required passenger insurance'],
      excluded: ['Lunch', 'Additional bottles or premium tastings'],
      message: "Hello! I'm interested in the Arrábida, Azeitão & Two Wineries tour. Could you check my dates and number of travellers?"
    },
    'sintra-walk': {
      type: 'Shared guided walking tour', name: 'Sintra Stories, Old Town & Forest',
      deck: 'A story-led walk through Sintra’s old town, quieter lanes and forest edge.',
      duration: '3 hours', minimum: 'Departs from 5 guests', meeting: 'Sintra Train Station', price: '€45',
      image: '../../site/images/tour-sintra-walk-960.webp', position: 'center',
      intro: 'A grounded introduction to Sintra before or instead of a monument-heavy day. The route uses the old town, viewpoints and green paths to explain why this landscape feels unlike anywhere else near Lisbon.',
      fit: 'Best for curious travellers who value stories, orientation and a slower pace.',
      route: ['Meet at Sintra Train Station', 'Volta do Duche and the valley', 'Historic centre and local stories', 'Quieter lanes and forest edge', 'Seteais viewpoint'],
      included: ['Professional local guide', 'Traditional pastry tasting', 'Tour liability insurance'],
      excluded: ['Monument tickets', 'Additional food or transport'],
      message: "Hello! I'm interested in the Sintra Stories walking tour. Could you check my dates and number of travellers?"
    },
    'lisbon-walk': {
      type: 'Shared guided walking tour', name: 'Lisbon Essentials: Baixa, Chiado & Alfama',
      deck: 'Three neighbourhoods, tiled streets and the viewpoints that make Lisbon legible.',
      duration: '3 hours', minimum: 'Departs from 5 guests', meeting: 'Rossio Square, by the statue', price: '€49',
      image: '../../site/images/tour-lisbon-walk-960.webp', position: 'center',
      intro: 'A compact first look at Lisbon with enough context to enjoy the rest of your stay independently. The walk connects the rebuilt downtown, literary Chiado and the older lanes of Alfama.',
      fit: 'Best for a first morning in Lisbon and travellers who want orientation without information overload.',
      route: ['Meet at Rossio Square', 'Baixa and the rebuilt city', 'Chiado and Lisbon’s cultural life', 'Alfama lanes and viewpoints', 'Finish near Portas do Sol'],
      included: ['Professional local guide', 'One pastel de nata', 'Tour liability insurance'],
      excluded: ['Transport', 'Additional food or drinks'],
      message: "Hello! I'm interested in the Lisbon Essentials walking tour. Could you check my dates and number of travellers?"
    }
  };

  const key = document.body.getAttribute('data-experience');
  const tour = tours[key];
  if (!tour) return;
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const wa = 'https://wa.me/351968510019?text=' + encodeURIComponent(tour.message);
  document.title = tour.name + ' | About Culture Things';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = tour.deck;
  const structuredData = document.createElement('script');
  structuredData.type = 'application/ld+json';
  structuredData.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.deck,
    touristType: 'Small group travellers',
    provider: { '@type': 'TravelAgency', name: 'About Culture Things', url: 'https://aboutculturethings.com/' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: tour.price.replace('€', ''),
      availability: 'https://schema.org/InStock',
      url: location.href
    }
  });
  document.head.appendChild(structuredData);
  document.getElementById('experience').innerHTML =
    '<section class="experience-hero"><img src="' + esc(tour.image) + '" alt="' + esc(tour.name) + '" style="object-position:' + esc(tour.position) + '"><div class="hero-shade"></div><div class="shell hero-content"><p class="eyebrow">' + esc(tour.type) + '</p><h1>' + esc(tour.name) + '</h1><p class="hero-deck">' + esc(tour.deck) + '</p><ul class="facts"><li>' + esc(tour.duration) + '</li><li>' + esc(tour.minimum) + '</li><li>Direct price · ' + esc(tour.price) + ' per person</li></ul></div></section>' +
    '<section class="intro"><div class="shell intro-grid"><h2>One clear route.<br>A better-paced day.</h2><div class="intro-copy"><p>' + esc(tour.intro) + '</p><p class="fit"><strong>Who it suits</strong>' + esc(tour.fit) + '</p></div></div></section>' +
    '<section class="day"><div class="shell"><div class="day-head"><h2>The route</h2><p>The sequence may adjust for traffic, weather and confirmed venue times, without changing the character of the experience.</p></div><div class="day-grid"><ol class="route">' + tour.route.map(stop => '<li>' + esc(stop) + '</li>').join('') + '</ol><figure class="day-media"><img src="' + esc(tour.image) + '" alt="" loading="lazy"></figure></div></div></section>' +
    '<section class="practical"><div class="shell practical-grid"><article><h2>Meet</h2><p>' + esc(tour.meeting) + '<br>Exact pin sent with confirmation.</p></article><article><h2>Included</h2><ul>' + tour.included.map(item => '<li>' + esc(item) + '</li>').join('') + '</ul></article><article><h2>Not included</h2><ul>' + tour.excluded.map(item => '<li>' + esc(item) + '</li>').join('') + '</ul></article></div></section>' +
    '<section class="booking"><div class="shell booking-grid"><div class="booking-copy"><p class="eyebrow">Direct booking</p><h2>Start with your dates.</h2><p>Send your preferred date and number of travellers. We confirm the shared departure before payment.</p></div><div class="booking-action"><p class="price">' + esc(tour.price) + '<span>per person · charged in EUR</span></p><a class="button" href="' + wa + '" target="_blank" rel="noopener noreferrer">Check availability on WhatsApp</a><p class="micro">Free cancellation with 24 hours’ notice.</p></div></div></section>';
})();
