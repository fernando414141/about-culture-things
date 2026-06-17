# One-Page Website Template

Reusable structure for premium single-page business websites. This project (About Culture Things) is the reference implementation.

## Tech stack

Static HTML, CSS, and vanilla JavaScript — no build step, no framework. This is intentional: fast deploy, excellent Core Web Vitals, minimal maintenance, and easy hosting on any static server or CDN.

| Layer | Choice | Why |
|-------|--------|-----|
| Markup | Single `index.html` | SEO-friendly, one canonical URL, JSON-LD in-page |
| Styles | `assets/css/main.css` | Design tokens + components in one file |
| Scripts | ES5-compatible IIFEs | Works everywhere; no bundler required |
| i18n | URL param + `data-i18n` | en / es / pt without a CMS |
| Analytics | GTM / GA4 stub | Config-driven from `site-config.js` |
| Dev tools | `npm run serve` | Local preview only; not shipped to production |

## Directory structure

```
├── index.html                  # Page markup, SEO head, sections
├── favicon.png                 # Root favicons (browser convention)
├── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── llms.txt                    # GEO summary for AI crawlers
├── package.json                # Dev dependencies only (serve, playwright)
├── assets/
│   ├── css/
│   │   └── main.css            # Design system + component styles
│   ├── js/
│   │   ├── site-config.js      # Brand config, contact URLs, analytics IDs
│   │   ├── analytics.js        # GTM/GA4 stub + CTA event tracking
│   │   ├── i18n.js             # Translation strings (en, es, pt)
│   │   └── site.js             # Navigation, interactions, language switching
│   ├── images/                 # Content images (hero, logos, tours, photos)
│   ├── media/                  # Video and large media
│   └── source/                 # Source/unused assets (not referenced in HTML)
└── template/
    └── README.md               # This file
```

## Cloning for a new brand

1. **Edit `assets/js/site-config.js`** — Update `SITE` object (name, URLs, contact, analytics IDs, WhatsApp messages).
2. **Replace images** in `assets/images/` and `assets/media/` — hero, logo, tour/product images.
3. **Replace favicons** at project root — `favicon.png`, `apple-touch-icon.png`.
4. **Update `index.html` head** — Title, meta description, canonical URL, Open Graph, JSON-LD `@id` URLs.
5. **Edit section content** — HTML copy and `data-i18n` keys in `assets/js/i18n.js`.
6. **Customize design tokens** — CSS variables in `:root` at top of `assets/css/main.css`.
7. **Update `llms.txt`** — Business summary for AI discoverability.
8. **Update `sitemap.xml` and `site.webmanifest`**.

## Local development

```bash
npm install
npm run serve
```

Open `http://localhost:3000`.

## Section pattern

Each content section follows this structure:

```html
<section id="section-id" class="section--tinted|section--light" aria-labelledby="section-heading">
  <div class="sec-head">
    <div class="sec-eyebrow" aria-hidden="true">
      <span class="sec-eyebrow-line"></span>
      <span class="sec-kicker" data-i18n="section-kicker">Kicker</span>
    </div>
    <h2 id="section-heading" class="anim-ready" data-i18n="section-h2">Heading</h2>
    <p class="sec-desc" data-i18n="section-desc">Description</p>
  </div>
  <!-- Section body -->
</section>
```

## Contact link pattern

Use `data-site-*` attributes — URLs are wired from `SITE` config on load:

| Attribute | Purpose |
|-----------|---------|
| `data-site-wa="book"` | WhatsApp (key maps to `SITE.waMessages`) |
| `data-site-email` | Email mailto link |
| `data-site-instagram` | Instagram profile |
| `data-site-tripadvisor` | TripAdvisor link |
| `data-site-credit` | Footer credit link |

## Analytics

Set `SITE.analytics.gtmId` or `SITE.analytics.ga4Id` in `site-config.js`. CTA clicks fire `cta_click` events to `dataLayer`.

## SEO / Schema

JSON-LD `@graph` in `index.html` includes: WebSite, WebPage, LocalBusiness, Person, TouristTrip, FAQPage, BreadcrumbList, Review, SpeakableSpecification.

FAQ content syncs with active language via `updateStructuredData()` in `site.js`.

## Performance notes

- Hero video (`assets/media/hero.mp4`) lazy-loads on desktop only; skipped on mobile, slow connections, save-data, and reduced-motion.
- Compress hero video to under 5 MB for best Core Web Vitals.
- Images should be WebP; use `loading="lazy"` below the fold.
- `content-visibility: auto` on sections reduces render cost.

## i18n

Languages: `en` (default), `es`, `pt`. URL param `?lang=es` or `?lang=pt`. Browser language auto-detect in inline head script.

Script load order: `site-config.js` → `analytics.js` → `i18n.js` → `site.js`.
