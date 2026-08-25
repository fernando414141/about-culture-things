/**
 * Centralized Tours & Experiences Configuration — About Culture Things
 * Edit tour names, descriptions, prices, capacities, and active states in this single file.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.TOURS_CONFIG = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return {
    meetingPoint: {
      time: '09:00',
      location: 'Hard Rock Cafe Lisbon',
      address: 'Av. da Liberdade 2, 1250-144 Lisboa, Portugal',
      note: 'All departures leave promptly at 09:00 AM from Hard Rock Cafe Lisbon.'
    },

    // Global cancellation policy (Free cancellation up to 48 hours before tour)
    cancellationPolicyHours: 48,

    // Advance booking rule (Minimum 24 hours in advance)
    minAdvanceBookingHours: 24,

    // Shared tier discounts per guest quantity (optional bonus CRO incentive)
    quantityDiscounts: [
      { minGuests: 1, maxGuests: 2, discountPercent: 0 },
      { minGuests: 3, maxGuests: 4, discountPercent: 5 },
      { minGuests: 5, maxGuests: 8, discountPercent: 10 }
    ],

    // Default Currency
    currency: 'EUR',
    currencySymbol: '€',

    // TOURS LIST — Edit Tour A, Tour B, Tour C parameters here:
    tours: [
      {
        id: 'tour-a',
        active: true,
        kind: 'van',
        badge: 'Signature Journey',
        name: {
          en: 'Tour A: Sintra, Pena Palace & Atlantic Coast',
          es: 'Tour A: Sintra, Palacio de Pena y Costa Atlántica',
          pt: 'Tour A: Sintra, Palácio da Pena e Costa Atlântica'
        },
        description: {
          en: 'Curated luxury journey in executive Mercedes-Benz Vito. Discover Pena Palace gardens, Sintra historic center, Cabo da Roca, and Cascais.',
          es: 'Ruta de lujo en Mercedes-Benz Vito executive. Descubra los jardines de Pena, centro histórico de Sintra, Cabo da Roca y Cascais.',
          pt: 'Percurso de luxo em Mercedes-Benz Vito executive. Descubra os jardins da Pena, centro histórico de Sintra, Cabo da Roca e Cascais.'
        },
        price: 119, // Base price in EUR (per person or per group)
        pricingType: 'per_person', // 'per_person' | 'per_group'
        duration: '7.5 Hours',
        maxPersons: 8,
        image: 'site/images/tour-full-sintra-coast-640.webp',
        imageAlt: 'Sintra Atlantic coast luxury journey'
      },
      {
        id: 'tour-b',
        active: true,
        kind: 'van',
        badge: 'Cultural Heritage',
        name: {
          en: 'Tour B: Fátima Sanctuary, Batalha & Medieval Óbidos',
          es: 'Tour B: Santuario de Fátima, Batalha y Óbidos Medieval',
          pt: 'Tour B: Santuário de Fátima, Batalha e Óbidos Medieval'
        },
        description: {
          en: 'Spiritual heritage, UNESCO Gothic architecture, Atlantic sea cliffs in Nazaré, and the walled medieval town of Óbidos.',
          es: 'Patrimonio espiritual, arquitectura gótica UNESCO, acantilados de Nazaré y la villa medieval amurallada de Óbidos.',
          pt: 'Património espiritual, arquitetura gótica UNESCO, arribas de Nazaré e a vila medieval de Óbidos.'
        },
        price: 179,
        pricingType: 'per_person',
        duration: '9 Hours',
        maxPersons: 8,
        image: 'site/images/tour-fatima-obidos-736.webp',
        imageAlt: 'Fátima Sanctuary and Óbidos'
      },
      {
        id: 'tour-c',
        active: true,
        kind: 'van',
        badge: 'Exclusive Wine & Gastronomy',
        name: {
          en: 'Tour C: Arrábida Natural Park & Estate Wineries',
          es: 'Tour C: Parque Natural de Arrábida y Bodegas Privadas',
          pt: 'Tour C: Parque Natural da Arrábida e Adegas Privadas'
        },
        description: {
          en: 'Two private estate winery visits with tutored tastings, dramatic mountain ocean vistas of Arrábida, and coastal gastronomy.',
          es: 'Dos visitas a bodegas privadas con catas guiadas, vistas panorámicas de la sierra de Arrábida y gastronomía costera.',
          pt: 'Duas visitas a adegas privadas com provas comentadas, vistas panorâmicas da serra da Arrábida e gastronomia.'
        },
        price: 169,
        pricingType: 'per_person',
        duration: '8 Hours',
        maxPersons: 8,
        image: 'site/images/tour-arrabida-wine-960.webp',
        imageAlt: 'Arrábida vineyard and ocean views'
      }
    ]
  };
}));
