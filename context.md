# Achu — Portfolio

Single-page Astro portfolio for a BCA student and Android ROM developer for the Redmi Note 7 Pro (codename: violet). Dark, surgical, hardware-precision aesthetic with Three.js 3D scenes, Lenis smooth scroll, and a custom violet cursor.

## Tech Stack

- **Astro** 5 — static site generation
- **Three.js** — WebGL 3D scenes (hero icosahedron, particle field, glowing core, chip model)
- **GSAP** 3 — hero text scramble page-load animation
- **Lenis** — smooth scroll (1.4s duration, exponential easing)
- **Intersection Observer** — CSS transition-based scroll animations
- **Vanilla CSS** — custom properties, no framework

## Project Structure

```
src/
  pages/index.astro          — main page (section dividers, custom cursor, script entry)
  components/
    Hero.astro               — hero section: grid overlay, radial glow, scroll-hint
    HeroCanvas.astro         — dual-layer wireframe icosahedron with vertex distortion, responsive positioning/sizing
    About.astro              — about section with glowing emissive core 3D scene
    Projects.astro           — project cards (connecting line, top accent, hover arrow) + floating chip/SoC ring model
    ParticlesCanvas.astro    — full-viewport fixed particle background (3000 particles)
    SpecsStrip.astro         — device spec sheet strip with animated scanline
    Footer.astro             — minimal footer with links
  scripts/
    animations.js            — Lenis smooth scroll + custom cursor (desktop only)
  styles/global.css          — CSS variables, reset, .anim scroll classes, grain overlay, custom cursor, section dividers
```

## Setup

```bash
npm install
npm install three @types/three lenis
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## 3D Scenes

| Scene | Location | Description |
|-------|----------|-------------|
| Hero sphere | HeroCanvas.astro | Dual icosahedrons, vertex distortion, orbiting lights, mouse parallax, scroll-linked fade, responsive positioning (centered on mobile, offset on desktop) |
| Particle field | ParticlesCanvas.astro | 3000 fixed-position particles (violet/white), slow rotation, behind all content |
| Glowing core | About.astro | Emissive sphere + 3 wireframe shells rotating at different speeds |
| Chip model | Projects.astro | 5 concentric torus rings with alternating colors, counter-rotating |

## Smooth Scroll

Lenis is initialized in `src/scripts/animations.js` with a 1.4s duration and exponential easing. It is imported and started by a non-inline `<script>` block in `index.astro`, so Astro bundles it.

## Custom Cursor

Two divs (`.custom-cursor` and `.custom-cursor-ring`) are added to `index.astro`. They are wired in `animations.js` only on devices that report `(hover: hover)` — touch devices keep the native cursor. The OS cursor is hidden via `* { cursor: none }` inside the same media query. The cursor and ring scale up and turn solid violet over interactive elements (`a`, `button`).

## Hero Section

- `::before` — 60px violet grid overlay (3% opacity)
- `.hero-glow` — radial violet glow positioned behind the sphere (right side on desktop, partially off-screen on mobile)
- `.scroll-hint` — vertical "scroll" label + animated violet line, bottom-left

## About Section

- `.about-text` — 2px violet left border with 1.5rem padding
- Tech tags — hover: violet border, light text, soft violet background, glow box-shadow

## Projects Section

- 3 cards: **Project Matrixx** (Official Maintainer), **Project InfinityX** (Maintained Build), **LunarisAOSP** (Official Maintainer)
- `.projects-grid` — `repeat(3, 1fr)` on desktop, `1fr 1fr` on tablet, `1fr` on mobile
- `.projects-grid::before` / `::after` — thin violet horizontal lines at the 1/3 and 2/3 column gaps (single center line on tablet, hidden on mobile)
- `.project-card::before` — top violet accent that grows from 0% → 100% width on hover
- `.btn-download` — `↓` arrow slides in from the left on hover

## Specs Strip

- `::after` — animated scanline gradient sweeping left → right every 4s

## Section Dividers

A `.section-divider` is placed between every section in `index.astro`. Each renders two flexing violet lines with a glowing 4px dot in the center.

## Scroll Animations

All scroll-triggered reveals use Intersection Observer + CSS transitions (`.anim` classes). No ScrollTrigger dependency.

## Fonts

- IBM Plex Mono (headings, monospace text)
- Syne (body text)

Loaded from Google Fonts CDN.

