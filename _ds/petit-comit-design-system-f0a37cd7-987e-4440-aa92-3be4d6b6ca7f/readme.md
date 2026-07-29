# Petit Comité — Design System

**Petit Comité** is a small cocktail bar in the centre of València (C/ de Moratín, 11) built around one idea: 80s and 90s music. Its slogan is *"Let the music play!"* and its whole public presence is a five-page presentation website with a cocktail & wine list, a photo gallery of the room, opening hours, and a WhatsApp button for reservations. There is no online ordering, no booking engine, no login — one CTA, one channel.

This design system captures that site's visual language so new artefacts (landing pages, promos, menus, social mockups) look like they came from the same bar.

## Sources given to me
| Source | What it contained |
| --- | --- |
| `PetiiComite/` (mounted local folder) | Saved copy of the live site: `Home - Petit Comité.html` + `Home - Petit Comité_files/` with the Elementor CSS (`post-15.css` = global kit, `post-2351.css` = header, `post-1931.css` = footer, `post-463.css` = home page), the four Google-font CSS files, and 9 photographs. |
| `PetiiComite/contenido/*.md` | Extracted copy for all five pages plus a business summary. |
| `PetiiComite/capturas/*.jpg` | Screenshots of Home, Servicios, Carta, Galería, Contacto. |
| `PetiiComite/imagenes/` | `logo.png` (150×171, transparent) + `manifest-imagenes.txt` listing all 65 media files on the server. |
| `uploads/logo.png` | Same logo, uploaded separately. |
| Live site | https://www.petitcomitevalencia.com |

Platform: WordPress + Elementor 4.2 + Royal Elementor Addons (`wpr-*`), Chaty (WhatsApp), WPForms. Site credit in the footer: *Design by Amievastudio*.

**Not available to me:** the 2026 cocktail/wine list PDF (`carta-petit-comite-2026.pdf`, 17 MB — linked in the manifest but not shipped), the wood-plank texture used on the home page, and ~30 of the gallery photographs. See "Gaps" below.

---

## CONTENT FUNDAMENTALS

**Language.** Spanish (Spain), always. Never bilingual, never English body copy — with one exception: the English slogan **"Let the music play!"**, which is the brand's own line and is left untranslated.

**Voice.** Warm, first-person plural, inviting. The bar says *"nuestra selección"*, *"Ven a Petit Comité"*, *"Esperamos verte pronto"*. It addresses the reader with the informal **tú** in invitations (*"Descubre…"*, *"Prueba…"*, *"Transpórtate…"*) but slips into formal **usted** in the thank-you line (*"Esperamos que haya tenido una gran experiencia"*) — a small inconsistency inherited from the live site; prefer **tú** for new copy.

**Sentence shape.** Short. One idea per line. Imperative verbs open most sentences: *Descubre*, *Prueba*, *Ven*. Exclamation marks are used freely and sincerely — *"¡Gracias por visitarnos!"*, *"¡Esperamos verte pronto!"*, *"…y mucho más!"* — usually one per block, never two in a row.

**Proof by name-dropping.** Instead of adjectives about the music, the copy lists the artists: *"al ritmo de Cyndi Lauper, Wham, Eurythmics, Hall & Oates, Erasure, Alphaville y mucho más!"*. Do the same when you need credibility: name the drink, the grape, the artist.

**Casing.** Sentence case in prose and titles (*"Prueba los mejores vinos y cócteles"*). Navigation is the only place that is uppercased, and that is done in CSS (`text-transform`), not in the source text. Never SHOUT in body copy.

**Emoji.** None anywhere on the live site. Do not introduce them. Where a small mark is needed, use a Font Awesome glyph in amber.

**Verbatim strings worth reusing**
- `Let the music play!`
- `Descubre nuestra selección de éxitos de los 80 y 90`
- `Prueba los mejores vinos y cócteles` · button `Ver carta`
- `¡Gracias por visitarnos!` … `¡Esperamos verte pronto!`
- `Martes – Jueves: 17:00 – 01:00` · `Viernes – Sábado: 17:00 – 02:00` · `Domingo: 17:00 – 01:00`
- `C/ de Moratín, 11, 46002 València, Valencia` · WhatsApp `+34 633 41 91 16`
- Footer: `Política privacidad © 2023 Petit Comité – Design by Amievastudio`

**Vibe in one line.** A neighbourhood bar that trusts its playlist: intimate, unpretentious, a bit nostalgic, never trendy or corporate.

---

## VISUAL FOUNDATIONS

**Colour.** One accent and a stack of charcoals. Amber **#ED8C00** carries every CTA, eyebrow, rule, icon and active state; a second near-identical amber (#EB8C20) exists in the kit but is interchangeable. Structure is charcoal **#42464B** (header, colour bands) and near-black **#232222** (footer). Body copy is grey **#7A7A7A** on white; headings over white are almost-black **#050505**; text over photography is the kit's warm white **#FFFDFD**. WhatsApp green **#49E670** is functional only — it never appears as decoration. Two background colours per page, maximum.

**Type.** Three families, strictly divided by job. **Cormorant** (serif, 600/700) for every headline: 75px hero, 42px section title, 35px card title — tight line-heights (1em and 0.9em) so the serif reads as a block. **Oswald** (500, +1.3px tracking) only for the small kicker above a title, at 29px on light panels and 23px over photography. **Poppins** for everything else: 21px light leads, 16px body, 14px buttons and card copy, 13px light-italic quotes, 11px footer. **Kalam** (handwritten) appears exactly once on the live site — nav sub-menu items — and should stay that rare.

**Backgrounds.** Photography does the work. Full-bleed bar photographs, always dimmed: 28% charcoal under hero sliders, 51% warm grey on photo cards, a 70% grey wash at 76% opacity on full-width bands, and a 90% amber wash on the one promo card per page. Between photo sections sit plain white or flat charcoal blocks. The home page also uses a wood-plank texture behind its first band (asset not shipped). No gradients — the only "gradient" in the system is the optional bottom scrim (`--scrim-bottom`) for text laid on a photo without a band. No hand-drawn illustration except the logo itself.

**Imagery mood.** Warm and low-light: amber practical lighting, dark rooms, glassware catching highlights, hands and faces cropped close. Real phone photos of the room (portrait 3:4, slightly noisy) sit next to warmer stock cocktail shots. Nothing bright, cool, white-cyc or heavily graded; no black and white; no grain filter.

**Spacing & layout.** Boxed 1140px container; the intro panel narrows to 837px. 100px of air above and below every section, 20px between widgets. Header is a fixed 100px charcoal bar (z-index 9999) with the logo overhanging it. Hero sections run 500–787px tall; photo cards are 385px minimum with 50px inner padding (18px in the 4-up row). Photo grids have **zero** gutters — images butt against each other.

**Corners.** Square is the rule: buttons 2px, everything else 0. Two exceptions only — the translucent review panel (10px, with a 5px inner box) and circles for dots (8px), the WhatsApp FAB (44px) and star bullets.

**Borders.** Hairlines, mostly revealed on hover: 1px amber inset 15px inside photo cards, 2px white 93% inside the amber card, 1px white 80% on slider arrows. The one always-visible decorative border is the **3px amber rule, 8% wide, centred** under every section eyebrow.

**Shadows.** None. Depth comes from dark overlays over photography, not from elevation. Cards have no shadow, no border and no lift. The only shadows in the token set are for the two fixed floating controls, which need to separate from photography.

**Transparency & blur.** Transparency is used constantly (all the photographic overlays; the 62% review panel). Blur is never used — no frosted glass, no backdrop-filter anywhere.

**Animation.** Restrained and long. Colour and text transitions 0.3s ease-in-out; overlay and image reveals 0.6s; the amber card 0.4s; outline buttons 0.2s. Background photographs slowly zoom in on card hover (`wpr-bg-anim-zoom-in`). Section content fades/slides up once on scroll. No bounce, no spring, no stagger, no parallax on the important content.

**Hover states.** Photo card: overlay clears to transparent while the photo zooms and a 1px amber frame fades in. Amber card: wash flips from amber 90% to charcoal 72%, 2px white frame appears. Nav link: amber → white. Slider arrow: amber → white. Scroll-top button: amber → charcoal. Buttons keep their fill (the live site sets hover to the same amber) — do not invent a darker amber.

**Press states.** None are defined in the source. Keep the hover state on press; do not add a shrink/scale-down.

**Fixed elements.** Sticky charcoal header; WhatsApp circle fixed bottom-left 25px in; amber square scroll-to-top fixed bottom-right (40px / 30px), fading in after 800px of scroll.

---

## ICONOGRAPHY

The site has **no bespoke icon set**. Elementor renders **Font Awesome 5 Free** as inline SVG (`e-font-icon-svg`, e.g. `e-fas-chevron-up`), and that is the entire vocabulary: chevrons for slider and scroll-to-top, stars for ratings, a quote mark on testimonials, and the WhatsApp brand glyph in the floating button. Sizes observed: 13–16px inside buttons and arrows, 22px for stars, 27px for card/section icons. Icons are amber (#ED8C00) or white; the WhatsApp glyph is white on green.

Because Font Awesome's binaries are not in the saved package (only `all.min.css`), this system **links Font Awesome 5.15.4 from CDN** — same major version and style set as the live site. This is a substitution of delivery, not of style; if you have the site's `webfonts/` folder, drop it in `assets/fa/` and point at it instead.

- **PNG icons:** none. **SVG icons:** only Font Awesome's inline output, plus the logo. **Emoji as icons:** never. **Unicode as icons:** the en-dash in hours (`17:00 – 01:00`) is the only special character used consistently.
- Never hand-roll an SVG for this brand — pick the nearest Font Awesome 5 solid glyph.

**Logo.** `assets/logo.png` — an illustrated barmaid in headphones pouring a drink, on a dark oval, with a wooden ribbon reading *Petit Comité*. Only a 150×171 transparent PNG exists in the sources (`assets/logo-150.png` is the same crop from the theme). It is used at ~130px tall in the header, overhanging the bar. **There is no vector logo and no SVG wordmark** — ask the owner for the original artwork before scaling it above 150px.

---

## Index

**Root**
- `styles.css` — the only file consumers link; `@import`s everything below.
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `borders.css` · `effects.css`
- `thumbnail.html` — homepage tile.
- `readme.md` (this file) · `SKILL.md`

**Assets** — `assets/logo.png`, `assets/logo-150.png`, `assets/img/` (3 stock cocktail photos: `coctel-barista`, `camarero-coctel`, `manos-cocteles`; 5 real photos of the bar: `local-01…05`).

**Components** (`window.PetitComitDesignSystem_f0a37c.*`)
| Group | Components |
| --- | --- |
| `components/core/` | `Button`, `Divider`, `SectionHeading`, `StarRating` |
| `components/cards/` | `PhotoCard`, `AmberCard`, `TestimonialCard` |
| `components/layout/` | `SiteHeader`, `HeroSlider`, `PageHero`, `GalleryGrid`, `SiteFooter` |
| `components/actions/` | `WhatsappFab`, `ScrollTopButton`, `InfoBlock` |

Each directory has a `*.card.html` thumbnail; each component has a `.d.ts` contract and a `.prompt.md` usage note.

**Intentional additions** (no direct counterpart in the source)
- `InfoBlock` — the Contacto page builds hours/address from loose Elementor heading + text widgets; this bundles that pattern so it stays consistent.
- `Divider` and `StarRating` are extracted from Elementor's generic divider / star-rating widgets rather than being bespoke brand components.

**Guidelines** — `guidelines/*.card.html`: 19 specimen cards across Colors, Type, Spacing and Brand.

**Template** — `templates/pagina-web/PaginaWeb.dc.html`: a ready-to-edit interior page (header → photo hero → intro panel → 3 photo cards → amber card → footer + WhatsApp button), with tweaks for hero height, CTA label and the WhatsApp button.

**UI kit** — `ui_kits/website/` (`index.html` + one JSX per page + `README.md`): click-through recreation of all five pages.

## Gaps to close
1. **Carta PDF** — the 2026 cocktail/wine list was not included; the Carta screen offers a download link instead of typeset content.
2. **Logo artwork** — only a 150px PNG. A vector or high-res original is needed for anything print or large-format.
3. **Wood texture + full gallery** — `material-fondo-textura-tablon-madera.jpg` and ~30 gallery photos live on the server but were not shipped.
4. **Font files** — the four families are loaded from Google Fonts CDN rather than the site's self-hosted copies. Same families, same weights.
