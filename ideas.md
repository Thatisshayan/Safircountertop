# Safir Countertop - Design Philosophy

## Design Direction: "Refined Stone Craft"

### Brand Essence
**Positioning:** A precision granite & marble countertop fabricator/installer — natural stone, expert templating, and clean installs for kitchens and bathrooms.
**Personality:** Precise, Elegant, Trustworthy

### Design Movement
Modern material-led minimalism — inspired by natural stone showrooms and high-end kitchen design studios. Let the stone textures do the talking; the UI stays quiet, structured, and precise (thin rules, generous whitespace, sharp edges over rounded blobs) so the actual slabs read as the hero.

### Core Principles
1. **Stone-First Imagery** — every section anchors to a real material photograph, never a flat color block standing in for texture.
2. **Quarried Palette** — deep charcoal/graphite base with a warm brass/gold vein accent (echoes gold veining in marble) and a soft warm-white for breathing room.
3. **Precision Grid** — sharp-cornered cards, thin 1px hairline borders, asymmetric bento layout for services (no uniform 3-col grid).
4. **Confident Restraint** — motion is subtle (fade+rise, no bounce), never gimmicky — stone is a permanent, serious purchase.

### Color Philosophy (OKLCH)
- `--background`: oklch(0.15 0.01 260) — near-black graphite (evokes polished dark granite)
- `--foreground`: oklch(0.97 0.005 90) — warm off-white
- `--primary` (brass/gold vein accent): oklch(0.72 0.13 80) — a muted brass gold, signals precious veining without looking gaudy
- `--card`: oklch(0.19 0.01 260) — slightly lifted charcoal panel
- `--muted-foreground`: oklch(0.65 0.01 260)
- Rationale: charcoal + brass reads "natural stone showroom," not "generic home services blue." The gold is used sparingly — CTAs, hover glow, section eyebrows, vein-line dividers — exactly like the baseline's single signature accent rule.

### Layout Paradigm
Asymmetric hero (image right, content left, diagonal vein-line divider) + bento services grid (one large featured card + smaller cards) + alternating full-bleed image break sections for rhythm.

### Signature Elements
1. **Vein Line** — a thin animated diagonal gold gradient line (mimics a marble vein) used as a section divider and as a card corner accent instead of the baseline's bracket corners.
2. **Slab Frame Card** — cards get a 1px brass hairline border that brightens + a corner vein-flick (small diagonal gold tick in one corner) on hover — this is the project's card language, used everywhere (never a plain bordered div).
3. **Chiseled Eyebrow** — small caps label with a short gold vein-line rule beside it above every section heading.
4. **Polished Counter Stat Bar** — animated counters with a thin brass progress-fill bar beneath (years experience, slabs installed, etc.) instead of a static number.
5. **Numbered Process Markers** — custom brass-outlined numeral badges (01–04) replacing default list bullets in the "How It Works" section.

### Interaction Philosophy
- Hover: card lifts 4px + brass border brightens + corner vein-flick fades in (cubic-bezier(0.16, 1, 0.3, 1), 300ms). Never scale+lift together.
- Buttons: scale to 0.96 on press, brass glow ring on focus-visible.
- Scroll reveal: fade + 24px rise, stagger 0.08s between siblings.

### Animation Guidelines
- Entrance: 500ms duration, ease [0.16,1,0.3,1]
- Counter animation: 1.8s, triggered once on viewport entry (IntersectionObserver / whileInView)
- prefers-reduced-motion: all durations collapse to 0.01ms, transforms removed, opacity-only fallback

### Typography System
- Display: "Cormorant" (elegant high-contrast serif — evokes stone showroom signage, premium/editorial) for H1/H2
- Body: "Inter" (highly legible humanist sans) for body/UI text
- Rationale: a serif display font signals craftsmanship/heritage (like a stone yard's engraved sign) while Inter keeps forms/nav/body crisp and modern — deliberate contrast, not a same-family pairing.
- Fluid scale: h1 clamp(2.5rem, 5vw + 1rem, 4.5rem), h2 clamp(2rem, 3vw + 1rem, 3rem), body 1rem/1.6

### Brand Voice
**Headlines:** Verb + Outcome. "Transform Your Kitchen With Natural Stone" not "Welcome to Safir Countertop."
**CTAs:** "Get My Free Estimate", "See Our Slab Gallery" — never "Submit" or "Click Here."
**Microcopy:** Specific and material-literate ("3cm Calacatta slab, honed finish") not generic ("high quality materials").

### Signature Brand Color
Brass/gold (`oklch(0.72 0.13 80)`) — appears in: CTA buttons, vein-line dividers, eyebrow rules, stat progress bars, card hover accents, active nav underline, numbered process badges.

### Visual Assets
Real stone/countertop photography needed: hero kitchen island shot, granite/marble slab close-ups (gallery), fabrication/installation in-progress shot, finished kitchen shots (before/after style). Sourced from Unsplash (royalty-free) since the business's real social photos aren't scrapeable via API without login. **Flagged for client**: swap in real project photos and logo when available.

### Accessibility Standards
WCAG AA 4.5:1 text contrast (verified against oklch background/foreground pair), focus-visible brass ring on all interactive elements, labeled form fields, full keyboard nav, prefers-reduced-motion respected, semantic landmarks + single h1 per page.

### Performance Targets
LCP < 2.5s (hero image preloaded + responsive srcset), CLS < 0.1 (explicit image dimensions), fonts preloaded with font-display swap, animate only transform/opacity, route-level code splitting.

### Responsive Breakpoints
Mobile 320–767px (primary design target) → Tablet 768–1023px → Desktop 1024–1439px → Large 1440px+. Fluid clamp()-based type/spacing throughout, no breakpoint-jump layouts.

### Style Decisions
1. Sharp corners (no border-radius) on primary CTAs and slab-frame cards — precision-cut stone edges, not soft rounded SaaS-style buttons.
2. Dark graphite base instead of light/white — most premium stone showrooms lean dark to make slab color/veining pop; also differentiates from generic light "home services" templates.
3. No stock icon-in-a-circle feature grid — replaced with the bento services layout + slab-frame cards so nothing reads as a default template section.
4. Single accent color discipline — brass only, never introduce a second "pop" color, to keep the material photography as the visual star.
5. Logo: no official logo asset available from social scrape — using a wordmark (styled "Safir" in Cormorant + a thin vein-line mark) as placeholder, flagged for client to replace with their real logo file.
