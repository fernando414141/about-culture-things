# Booking operations

## Launch checklist

1. Add live Stripe keys and the production `SITE_URL` to the hosting environment.
2. Register `/api/stripe-webhook` in Stripe and subscribe to `checkout.session.completed`.
3. Add working SMTP credentials and set `ADMIN_EMAIL` to the reservations inbox.
4. Make one low-value live booking, confirm the customer email and verify the owner receives the BCC copy.
5. Check the booking in `data/bookings.json` on the server. This directory is blocked from public HTTP access and must remain excluded from source control.

## What happens after a sale

- The checkout validates date, guest count, language and pickup details.
- One transport resource is protected across both day-tour routes, so two different van routes cannot be sold for the same date by mistake.
- Stripe holds the checkout for 30 minutes. Unpaid holds then stop consuming capacity.
- A successful webhook marks the booking confirmed and emails both the customer and the reservations inbox.
- The owner follows up with exact pickup time and monument-ticket guidance.

## Refunds and changes

Process refunds in Stripe and record any operational change in the reservations inbox. The public policy promises a full refund when cancellation is made at least 48 hours before departure. Do not confirm extra capacity from a freelancer until that person has accepted the date in writing.

## Pricing review

Keep Stripe fees inside the advertised price. Review contribution margin monthly using actual fuel, guide or freelancer cost, insurance, VAT, pickup mileage and payment fees. Do not add public group discounts until occupancy data shows that they increase margin rather than merely lowering the average selling price.
