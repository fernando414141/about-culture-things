# Booking operations

## Launch checklist

1. Add live Stripe keys and the production `SITE_URL` to the hosting environment.
2. Register `/api/stripe-webhook` in Stripe and subscribe to `checkout.session.completed`.
3. Add working SMTP credentials and set `ADMIN_EMAIL` to the reservations inbox.
4. Add a long random `ADMIN_AVAILABILITY_TOKEN` to the hosting environment. The operator enters this private key at `/admin/`; never commit or share the real value publicly.
5. Make one low-value live booking, confirm the customer email and verify the owner receives the BCC copy.
6. Check the booking in Stripe and confirm the availability panel can block and unblock a test date.

## What happens after a sale

- The checkout validates the selected tour, date, guest count, tour language, customer name and email. Pickup details may be confirmed later.
- Online bookings require at least 24 hours of notice based on Europe/Lisbon time. For the standard 08:30 start, the booking cutoff is 08:30 on the previous day; after that cutoff the earliest bookable date moves forward one additional day.
- A normal booking does not automatically close the date. Additional bookings can remain available while About Culture Things organises the required guide and vehicle resources.
- Dates are closed only when they are explicitly blocked through `/admin/` or otherwise rejected by the availability rules.
- Stripe Checkout expires after 30 minutes if payment is not completed.
- A successful paid Stripe session is confirmed through the webhook and the confirmation flow. Confirmation email sending is protected against duplicate sends.
- The owner follows up when necessary with exact pickup time and monument-ticket guidance.

## Availability administration

The `/admin/` panel reads the same availability data used by the public booking flow. Blocking or unblocking a date requires the private `ADMIN_AVAILABILITY_TOKEN`. Availability is stored in Stripe metadata; the public API exposes only the resulting blocked dates and booking rules, never the admin token.

## Refunds and changes

Process refunds in Stripe and record any operational change in the reservations inbox. The public policy promises a full refund when cancellation is made at least 48 hours before departure. Do not confirm extra capacity from a freelancer until that person has accepted the date in writing.

## Pricing review

Keep Stripe fees inside the advertised price. Review contribution margin monthly using actual fuel, guide or freelancer cost, insurance, VAT, pickup mileage and payment fees. Do not add public group discounts until occupancy data shows that they increase margin rather than merely lowering the average selling price.
