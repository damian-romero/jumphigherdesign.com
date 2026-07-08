# jumphigherdesign.com — Launch Plan

**Date:** 2026-07-06 · **Status of draft:** structurally complete, content-blocked on 3 items.
Stack: Jekyll (no theme) → Netlify build → Squarespace DNS → Hostinger mail (info@).
Pricing source of truth: `_data/services.yml` — verified consistent with business plan v2.7
(static $5,500–9,500, Odoo $7,500–11,000, branding $2,500/$5,500/$9,500/$14,000 — FINAL ladder 2026-07-06, split 75/25 with Fede).

## Current state

Pages: Inicio, Servicios, Acerca, Contacto (+ Gracias, 404, Aviso de privacidad).
**Showcase is unpublished** (`published: false`, out of nav/footer/home preview) until there is
real client work — decision 2026-07-06, see README §7 and `showcase.html` front matter.
Netlify form is wired (honeypot + consent). SEO plugins, sitemap, feed in place.

## Phase 1 — Launch blockers (can't go live without these)

| # | Item | Owner | Notes |
|---|------|-------|-------|
| 1 | Aviso de privacidad real | Lawyer → you | **Draft v1 in the page as of 2026-07-08** (LFPDPPP-structured, tú-voice, JHD-specific). Still marked BORRADOR — needs lawyer validation before launch on: domicilio del responsable, plazo ARCO (20 días hábiles), mechanism for opting out of secondary purposes. |
| 2 | WhatsApp number | You | `_config.yml` still has placeholder `525500000000`. 5-minute fix once you decide which number is client-facing. |
| 3 | Favicon set | You | Generate at realfavicongenerator.net from `assets/img/isotype.png`, files to site root, replace `_includes/favicon.html` snippet. If the isotype is illegible at 16px, launch with a simple one-color placeholder and swap when Fede delivers the simplified icon (Phase 3). |

## Phase 2 — Launch day

1. Deploy to Netlify (`bundle exec jekyll build` → `_site`, per `netlify.toml`). Commit `Gemfile.lock`.
2. Point DNS (Squarespace → Netlify), verify HTTPS on apex + www.
3. Netlify → Forms: confirm form "contacto" appears; set notification email to info@.
4. **Send a real test submission** and confirm it arrives at info@ (Hostinger). Test the honeypot doesn't block real entries.
5. Verify /gracias/ redirect after submit, 404 page, and that **/showcase/ returns 404** (it should — unpublished).
6. Google Search Console: verify domain, submit `sitemap.xml`.
7. Share a link in WhatsApp/Slack to check OG preview (will be ugly until Phase 3 OG image — acceptable).

## Phase 3 — Post-launch, blocked on Fede (don't hold launch for these)

- Corrected "Higher" lockup (current SVG says "Higer" — vectorized, must be regenerated at source).
- Light/white logo versions for dark nav/footer (currently Playfair text wordmark — fine as interim).
- Simplified one-color icon for favicon/small UI.
- OG/social image from the corrected logo → add to `_includes/head.html` via seo-tag.

None of these block launch: the site deliberately uses the text wordmark, not the broken SVG.

## Phase 4 — Showcase republication (when real work exists)

Trigger: **first delivered client project with permission to show it.** Then:

1. Replace illustrative cards in `showcase.html` with real work (keep the static-vs-Odoo comparison section — it's the strongest sales content on the page).
2. Set `published: true` in `showcase.html` front matter.
3. Re-add nav entry in `_data/nav.yml` and footer link in `_includes/footer.html`.
4. Uncomment the preview section in `index.html` (swap illustrative cards for real ones there too).

Until then the home flow is Hero → Servicios → Por qué nosotros → CTA, which stands on its own.

## Phase 5 — Content roadmap (nice-to-have, post-launch)

- **Proceso page or section** ("cómo trabajamos"): fixed-price + defined-timeline + asset handoff is the core differentiator; today it's only implied in the why-us cards. Strongest candidate for the next content addition — it partially compensates for the missing portfolio.
- Decide whether to surface the **tienda a medida** offering ($14,000 base, per plan v2.4/v2.6 rate card) on Servicios. Currently hidden behind "A medida — Cotización". Publishing the base price reinforces the fixed-price positioning.
- Link or embed the **Cotizador** (Cotizador_Netlify) once its plan-tracking is stable — decide if it's public or send-on-request.
- Blog/FAQ only if lead gen needs it. Not before.

## Open decisions

- ~~Branding ladder~~ — RESOLVED 2026-07-06: final ladder $2,500/$5,500/$9,500/$14,000, split 75/25 with Fede. Applied to services.yml, business plan v2.7, and cotizador in the same pass.
- Tienda a medida visibility on Servicios (see Phase 5).
- Pending Fede confirmation: source files (AI) + full commercial rights at every tier, including Básico — currently promised on the site.

## Suggested order of execution

Today: send privacy notice **draft (currently on `/aviso-de-privacidad/`)** to lawyer → set WhatsApp number → generate interim favicon.
When lawyer returns validated version: swap the borrador infobox for the final wording, deploy, run the Phase 2 checklist. Everything else is post-launch.
