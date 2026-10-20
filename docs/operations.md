# Booking operations

## Architecture

`lib/booking.js` contains server catalogue, participant limits, Lisbon cutoff, weekday rules, payment verification and confirmation email generation. `api/` handlers run both on Vercel and through `server.js` locally. `web/app.js` renders the homepage and all three experience pages; a regression test keeps its catalogue aligned with the backend. Retired template scripts and override layers are removed.

## Rules

- Shared/private: 2–6 participants per booking, daily at 08:30 Lisbon time.
- Walking: 2–10 participants, Monday–Friday at 10:00 Lisbon time.
- Book before 19:00 Lisbon time on the preceding day. Server validation rejects invalid calendar dates, weekends for walking tours, unsupported departure times and out-of-range participant counts.
- The owner explicitly allows multiple vehicle tours per date and arranges resources operationally. No fixed daily capacity is advertised or inferred. `/admin/` continues to block/unblock whole dates through Stripe metadata.
- EUR prices are computed in integer cents on the server. No surcharge is added by the booking handler.

## Payment and email

- Stripe Checkout remains the provider. Stable parameters and the same idempotency key are reused for retries; the browser retains the attempt in session storage across a reload for the same details.
- Sessions expire one hour after the attempt starts. The server validates the attempt timestamp and uses a stable expiration for retries, avoiding idempotency conflicts. The operational cutoff is validated when checkout is created.
- Confirmation requires a retrieved paid Stripe session whose currency, amount, product and participant count match the server rules. A success URL alone is not evidence of payment.
- Register `checkout.session.completed` and `checkout.session.async_payment_succeeded` at `/api/stripe-webhook`.
- A valid signature is required. SMTP failures return 500 for Stripe retries; sequential deliveries are deduplicated with session metadata. Simultaneous webhook processing across instances can still repeat an email because SMTP and Stripe metadata are not one atomic transaction.
- EN/ES/PT confirmations and calendar attachments use the booked departure time and duration.
- `/api/create-test-checkout-session` is restricted to `sk_test_` keys. Production keys are rejected. It is an isolated sandbox diagnostic, not a tour reservation.

## Verification

Run `npm test` for request validation, tampered totals, retries, dates/cutoffs, webhook handling, booking verification and local HTTP routes. For a real sandbox payment, configure valid test Stripe credentials and a test webhook endpoint; the checked-in environment example is insufficient. Never test using a live charge.

Required runtime configuration: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `SITE_URL`, SMTP credentials, and `ADMIN_AVAILABILITY_TOKEN`. Do not commit credentials. Production credentials must not be copied into a local test run.

Before a release: test all three locales and the homepage/product pages at mobile, tablet and desktop widths, then verify the deployed commit and public API after Git deployment.

Vercel runs `npm test` before publishing each deployment. Its route rules deny public access to backend helpers, tests, internal docs, package manifests and booking data. Functions can still import those files internally.
