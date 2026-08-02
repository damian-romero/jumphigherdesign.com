# Jump Higher Design — sitio (Jekyll)

Sitio multipágina hecho desde cero (sin tema). Hospedaje: Netlify. Dominio: Squarespace (DNS). Correo: Hostinger (info@).
TEST CHANGES


## Correr en local
```bash
bundle install
bundle exec jekyll serve          # tu alias: jyserve
# http://127.0.0.1:4000
```
Después de `bundle install`, **commitea `Gemfile.lock`** para que Netlify use las mismas versiones.

## Estructura
```
_config.yml          Config + datos de negocio (email, whatsapp) — EDITA AQUÍ
netlify.toml         Build de Netlify (bundle exec jekyll build → _site)
_data/
  nav.yml            Enlaces del menú
  services.yml       PRECIOS (estático / odoo / branding) — fuente única
  home.yml           Tarjetas de inicio (servicios + por qué nosotros)
  values.yml         Valores (página Acerca)
_includes/           head, favicon, header (nav), footer, hero, cta, formulario, pricing-grid
_layouts/            default → page
_sass/               tokens + base + componentes (compilan a assets/css/main.css)
assets/img/isotype.png   Isotipo (saltamontes) sin texto — usable
*.html               Páginas (permalinks limpios: /servicios/, /contacto/, etc.)
```

## Pendientes ANTES de publicar

### 1. Logo mal escrito (BLOQUEANTE)
Los archivos de logo con texto (`Logo_y_Nombre_con_Slogan__Negro_.svg` y los PNG) dicen
**"Jump Higer Design"** — falta la segunda "h" de "Higher". El SVG son trazos vectorizados
(no texto editable), así que **no se puede corregir editando: Fede debe regenerarlo desde el origen.**
El sitio NO usa ese archivo: el wordmark en nav/footer es texto Playfair (bien escrito).

### 2. Activos que faltan de Fede
- Versión corregida ("Higher") del lockup.
- Versiones **claras/blancas** del logo (las subidas son solo "Negro", para fondos claros; el nav/footer son oscuros).
- Un **ícono simplificado de un color** para favicon y UI chica (el isotipo detallado no se lee a 16–32px; el mínimo digital de marca es 80px).
- Una imagen **OG/social** (para compartir enlaces) hecha con el logo corregido.

### 3. Favicon
Genera el set en https://realfavicongenerator.net/ a partir de `assets/img/isotype.png`,
pon los archivos en la RAÍZ del sitio y reemplaza el snippet en `_includes/favicon.html`
con el exacto que te dé RFG. Evalúa la legibilidad a 16px (ver punto 2).

### 4. Formulario (Netlify)
El formulario está listo (HTML estático con `data-netlify`, honeypot y consentimiento).
Tras el primer deploy: **Netlify → Forms → notificaciones → email a info@**. Verifica que
el form "contacto" aparezca en el dashboard. Netlify envía desde sus servidores; no se
configura SMTP de Hostinger.

### 5. Aviso de privacidad
`aviso-de-privacidad.html` contiene el **borrador v1 (2026-07-08)** — LFPDPPP-structured, tú-voice, JHD-específico. Sigue marcado como BORRADOR: enviar al abogado para validar (domicilio del responsable, plazo ARCO, mecanismo de consentimiento para finalidades secundarias) y luego reemplazar el infobox de borrador por el texto final antes de lanzar.

### 6. Precios de branding — RESUELTO (2026-07-06)
Escala FINAL acordada con Fede: **$2,500 / $5,500 / $9,500 / $14,000** (reparto 75/25).
Contenidos por paquete actualizados en `_data/services.yml` (único lugar). La escala
alternativa ($2,000–11,000) quedó descartada.

### 7. Showcase (sin portafolio) — RESUELTO (2026-07-06)
Decisión: **oculto hasta tener trabajo real.** `showcase.html` tiene `published: false`,
se quitó de `_data/nav.yml` y del footer, y la sección de preview en `index.html` está
comentada. Para republicar: revierte esos cuatro puntos (instrucciones en el front matter
de `showcase.html`).

### 8. WhatsApp
`whatsapp` en `_config.yml` es un placeholder (`525500000000`). Pon el número real
(52 + 10 dígitos, sin + ni espacios).
