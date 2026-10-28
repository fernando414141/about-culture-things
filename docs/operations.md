# Booking operations — Bókun

## Current website

- The homepage uses Bókun Product List `115653` as the only visible catalogue.
- Products: private tour `1333723`, small-group tour `1333724`, walking tour `1333725`.
- Manage tour descriptions, translations, current prices, capacity, dates, cutoff times, pickup and cancellations **in Bókun**. Its live booking widgets handle selection and payment.
- The website supports English, European Portuguese and Spanish via the `lang` parameter on each Bókun widget. Translate product content separately in Bókun.
- The three `/experiences/` pages explain inclusions and provide Bókun calendars. Keep website statements consistent with the corresponding live product.
- Never use the legacy server catalogue in `lib/booking.js` or `/api/tours` to infer current Bókun prices or availability.

## Retired Stripe checkout

- `/api/create-checkout-session` returns HTTP 410 by default to prevent new direct Stripe reservations with outdated prices and unsynchronised capacity.
- The code is retained temporarily for tests and migration. `LEGACY_CHECKOUT_ENABLED=true` deliberately reopens it; **do not set this in production**.
- Existing Stripe payment confirmation, webhook and thank-you handling remain in place so previous paid bookings can still be verified and serviced.
- `/api/create-test-checkout-session` only accepts Stripe test keys and never creates live reservations.
- `/admin/` and `/api/availability` are historical Stripe tools. Their blocks **do not** synchronize to Bókun and must not be used for current tour availability.

## Verification

- Run `npm test` before publishing; Vercel also uses it as the build command.
- Check EN/ES/PT, mobile and desktop, the Bókun Product List and the three detailed booking calendars.
- Confirm new bookings and cancellations in Bókun; do not test with live card charges.
- The iframe and product descriptions are maintained in Bókun, not GitHub, and require a separate operational check.
