# One-Page Website Template

Reusable master template for local businesses, freelancers, agencies, and service providers.

## Page structure (fixed order)

1. **Hero** — video background + primary CTA
2. **Problem** — 3 pain-point cards
3. **Services / Pricing** — 2 pricing cards (`#tours`)
4. **Why Choose Us** — founder card + 3 benefits (`#differentiators`)
5. **Reviews** — rating summary + 3 reviews (`#reviews`)
6. **FAQ** — 5 questions (`#faq`)
7. **Final CTA** — booking steps + WhatsApp/email (`#final-cta`)
8. **Footer** — Brand · Navigation · Contact

## Customize per client

| File | What to change |
|------|----------------|
| `assets/js/site-config.js` | URL, contact, WhatsApp messages, analytics IDs, brand colors (optional CSS vars) |
| `assets/js/i18n.js` | All visible copy (EN / ES / PT) |
| `index.html` | Structured data, meta tags, images, video (`assets/media/hero.mp4`) |
| `assets/css/main.css` | `:root` brand tokens only — spacing, type, radius are fixed |

## Design system (do not fragment)

- **Spacing:** `--s1` (16px) · `--s2` (24px) · `--s3` (48px) · `--s4` (80px section mobile)
- **Typography:** `--text-sm` · `--text-base` · `--text-lg` · `--text-xl`
- **Radius:** buttons `999px` · cards/images `24px` · inputs `16px`
- **Shadows:** `--shadow-1` · `--shadow-2` · `--shadow-3` (subtle only)
- **Buttons:** `.btn-filled` (primary) · `.btn-outlined` (secondary) · `.btn-massive` (final CTA)
- **Container:** max `1200px` · content `1120px` · pad `24px` mobile / `32px` desktop

## Clone checklist

1. Replace `assets/media/hero.mp4` and poster image
2. Update `site-config.js` contact links
3. Replace tour/service images in `assets/images/`
4. Edit all strings in `i18n.js`
5. Update JSON-LD in `index.html`
6. Regenerate favicons from `assets/source/favicon-source.png`
7. Update `llms.txt`, `sitemap.xml`, `robots.txt` domain

## Used for

- About Culture Things (tour guide)
- FSC Languages · FSC Digital · Careca Car Care · consultants · agencies
