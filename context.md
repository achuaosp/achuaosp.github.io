# Achu — Portfolio

Single-page Astro portfolio for a BCA student and Android ROM developer for the Redmi Note 7 Pro (codename: violet). Dark, surgical, hardware-precision aesthetic with Three.js 3D scenes.

## Tech Stack

- **Astro** 5 — static site generation
- **Three.js** — WebGL 3D scenes (hero icosahedron, particle field, glowing core, chip model)
- **GSAP** 3 — hero text scramble page-load animation
- **Intersection Observer** — CSS transition-based scroll animations
- **Vanilla CSS** — custom properties, no framework

## Project Structure

```
src/
  pages/index.astro          — main page
  components/
    Hero.astro               — hero section layout (2-col grid: text left, 3D right)
    HeroCanvas.astro         — dual-layer wireframe icosahedron with vertex distortion
    About.astro              — about section with glowing emissive core 3D scene
    Projects.astro           — project cards with floating chip/SoC ring model
    ParticlesCanvas.astro    — full-viewport fixed particle background (3000 particles)
    SpecsStrip.astro         — device spec sheet strip
    Footer.astro             — minimal footer with links
  styles/global.css          — CSS variables, reset, .anim scroll classes, grain overlay
```

## Setup

```bash
pnpm install
pnpm add three @types/three
pnpm run dev
```

## Build

```bash
pnpm run build
pnpm run preview
```

## 3D Scenes

| Scene | Location | Description |
|-------|----------|-------------|
| Hero sphere | HeroCanvas.astro | Dual icosahedrons, vertex distortion, orbiting lights, mouse parallax, scroll-linked fade |
| Particle field | ParticlesCanvas.astro | 3000 fixed-position particles (violet/white), slow rotation, behind all content |
| Glowing core | About.astro | Emissive sphere + 3 wireframe shells rotating at different speeds |
| Chip model | Projects.astro | 5 concentric torus rings with alternating colors, counter-rotating |

## Scroll Animations

All scroll-triggered reveals use Intersection Observer + CSS transitions (`.anim` classes). No ScrollTrigger dependency.

## Fonts

- IBM Plex Mono (headings, monospace text)
- Syne (body text)

Loaded from Google Fonts CDN.
