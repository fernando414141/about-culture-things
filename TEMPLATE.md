# One-page site template

Plantilla reutilizable para webs de una sola página con i18n, secciones data-driven y CTA por WhatsApp.

## Estructura

```
/
├── index.html              # Shell HTML (estructura de secciones; poco texto hardcodeado)
├── robots.txt              # SEO — actualizar si cambia el dominio
├── sitemap.xml             # SEO — actualizar URL y fechas
├── llms.txt                # Resumen para LLMs — reescribir por proyecto
├── site.webmanifest        # PWA — nombre, colores, iconos
├── favicon.png             # Icono del sitio
├── apple-touch-icon.png    # Icono iOS
│
├── site/                   # ← PERSONALIZAR POR PROYECTO
│   ├── content.js          # Negocio, copy, tours, FAQ, i18n (SITE_CONTENT)
│   └── images/             # Todas las imágenes del proyecto
│
└── template/               # ← MOTOR REUTILIZABLE (no tocar al duplicar)
    ├── css/
    │   └── main.css        # Estilos
    └── js/
        ├── app.js          # Interacciones: menú, idioma, scroll, animaciones
        ├── i18n.js         # Adaptador: content.js → claves data-i18n
        ├── renderer.js     # Render dinámico de secciones desde SITE_CONTENT
        ├── links.js        # WhatsApp, email, redes, analytics config
        ├── schema.js       # JSON-LD generado desde content.js
        └── analytics.js    # Eventos de conversión (GTM / GA4)
```

## Crear un proyecto nuevo

1. **Duplicar** la carpeta completa del repositorio.
2. **Editar `site/content.js`** — negocio, URLs, idiomas, copy, tours, reseñas, FAQ.
3. **Sustituir `site/images/`** — hero, logo, tours, galería (mantener nombres o actualizar rutas en `content.js`).
4. **Actualizar en la raíz:**
   - `index.html` — meta tags iniciales, JSON-LD, preloads de hero (o dejar que i18n/renderer los actualicen).
   - `sitemap.xml` — dominio y `lastmod`.
   - `llms.txt` — resumen del negocio.
   - `site.webmanifest` — `name`, `short_name`, `theme_color`.
   - `favicon.png` y `apple-touch-icon.png`.
5. **Opcional:** en `template/js/links.js`, configurar `analytics.gtmId` / `ga4Id` y `credit`.

No hace falta renombrar archivos dentro de `template/` — esa carpeta es el motor compartido.

## Convenciones de nombres

| Antes (legacy)        | Ahora              | Rol                          |
|-----------------------|--------------------|------------------------------|
| `content/site.js`     | `site/content.js`  | Datos del proyecto           |
| `assets/images/`      | `site/images/`     | Medios del proyecto          |
| `assets/css/main.css` | `template/css/main.css` | Estilos globales      |
| `assets/js/site.js`   | `template/js/app.js`    | Lógica de UI          |
| `assets/js/site-config.js` | `template/js/links.js` | Enlaces y SITE global |
| `assets/js/template-renderer.js` | `template/js/renderer.js` | Render de secciones |

## Orden de carga (index.html)

```html
<script src="site/content.js" defer></script>
<script src="template/js/i18n.js" defer></script>
<script src="template/js/links.js" defer></script>
<script src="template/js/renderer.js" defer></script>
<script src="template/js/schema.js" defer></script>
<script src="template/js/app.js" defer></script>
<script src="template/js/analytics.js" defer></script>
```

## Rutas de imágenes en content.js

Usar siempre rutas relativas desde la raíz:

```js
logo: 'site/images/logo-512.webp',
hero: { src: 'site/images/hero-640.webp', ... }
```

Para Open Graph absoluto:

```js
ogImage: 'https://tudominio.com/site/images/hero-960.webp'
```

## Galería compartida (`galleryItems`)

Las imágenes de galería viven una sola vez en `site/content.js` (raíz del objeto), con alt por idioma:

```js
galleryItems: [
  { src: 'site/images/pena-640.webp', width: 640, height: 893, alt: { en: '...', es: '...', pt: '...' } }
]
```

Usa siempre variantes `-640.webp` en galería; no hace falta duplicar por idioma.

## Optimización

- **HTML mínimo** — tours, reseñas, galería y FAQ se renderizan desde JS; el hero queda en HTML para LCP.
- **JSON-LD dinámico** — `template/js/schema.js` genera structured data desde `content.js`.
- **Imágenes** — solo variantes necesarias en `site/images/` (hero 640+960, tours 640, galería 640).
- **Analytics** — carga al final; sin GTM/GA4 configurado no añade peso de red.

## Secciones soportadas

Hero · Benefits · Tours/Pricing · Reviews · Gallery · FAQ · Final CTA · Footer

La visibilidad y el copy de cada sección se controlan desde `site/content.js`. El HTML en `index.html` define la estructura; `renderer.js` hidrata contenido dinámico al cambiar idioma.
