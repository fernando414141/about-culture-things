/** Canonical product and price configuration shared by browser and server. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TOURS_CONFIG = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  return {
    currency: 'EUR', currencySymbol: '€', usdReferenceRate: 1.1662, usdReferenceDate: '2026-08-25',
    cancellationPolicyHours: 48, minAdvanceBookingHours: 24, quantityDiscounts: [], tourLanguages: ['en', 'es', 'pt'],
    tours: [
      { id: 'essential-sintra', active: false, kind: 'day', resource: 'van', price: 99, pricingType: 'per_person', duration: '6 h', maxPersons: 8, pickupType: 'lisbon', name: { en: 'Essential Sintra', es: 'Sintra Esencial', pt: 'Sintra Essencial', fr: 'Sintra Essentiel', de: 'Sintra Essentials' }, image: 'site/images/pena-640.webp', imageAlt: 'Pena Palace above the forested hills of Sintra' },
      { id: 'sintra-coast', active: true, kind: 'day', resource: 'van', price: 119, pricingType: 'per_person', duration: '8 h', maxPersons: 8, pickupType: 'lisbon', featured: true, name: { en: 'Sintra, Cabo da Roca & Cascais', es: 'Sintra, Cabo da Roca y Cascais', pt: 'Sintra, Cabo da Roca e Cascais', fr: 'Sintra, Cabo da Roca et Cascais', de: 'Sintra, Cabo da Roca & Cascais' }, image: 'site/images/tour-full-sintra-coast-640.webp', imageAlt: 'Atlantic cliffs at Cabo da Roca near Sintra' },
      { id: 'sintra-walk', active: true, kind: 'walking', resource: 'walking', price: 45, pricingType: 'per_person', duration: '3 h', maxPersons: 10, pickupType: 'sintra', name: { en: 'Sintra Walking Tour', es: 'Walking Tour por Sintra', pt: 'Walking Tour por Sintra', fr: 'Visite à pied de Sintra', de: 'Sintra Rundgang' }, image: 'site/images/tour-sintra-walk-960.webp', imageAlt: 'Historic lanes and tiled buildings in central Sintra' },
      { id: 'fatima-nazare-obidos', active: true, kind: 'day', resource: 'van', price: 129, pricingType: 'per_person', duration: '9 h', maxPersons: 8, pickupType: 'lisbon', name: { en: 'Fátima, Nazaré & Óbidos', es: 'Fátima, Nazaré y Óbidos', pt: 'Fátima, Nazaré e Óbidos', fr: 'Fátima, Nazaré et Óbidos', de: 'Fátima, Nazaré & Óbidos' }, image: 'site/images/tour-fatima-obidos-736.webp', imageAlt: 'Sanctuary of Fátima and the medieval town of Óbidos' }
    ]
  };
}));
