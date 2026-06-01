# Achu — Portfolio

A premium dark-tech portfolio for **Achu**, a BCA student and Android ROM developer for the **Redmi Note 7 Pro** (codename: **violet**).

Built with Astro, Three.js, and GSAP. Dark, surgical, hardware-precision aesthetic inspired by BIOS interfaces and brutalist editorial design.

![Screenshot](https://img.shields.io/badge/status-active-brightgreen)

## Features

- **3D Hero Scene** — Dual-layer wireframe icosahedron with vertex distortion, orbiting point lights, mouse parallax, and scroll-linked fade
- **Full-Page Particle Background** — 3000 fixed-position particles (violet/white) as an immersive backdrop
- **Glowing Emissive Core** — Rotating sphere with wireframe shells in the About section
- **Floating Chip Model** — Concentric torus rings suggesting an SoC/die in the Projects section
- **Text Scramble** — GSAP-powered character-by-character scramble on the hero name
- **Scroll Animations** — CSS transition-based reveals via Intersection Observer (zero JS dependencies)
- **Grain Texture** — SVG noise filter overlay for analog/darkroom feel

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build) 5 | Static site generation |
| [Three.js](https://threejs.org) | WebGL 3D scenes |
| [GSAP](https://gsap.com) 3 | Hero page-load animation |
| Intersection Observer | Scroll-triggered element reveals |
| Vanilla CSS | Custom properties, grid layout, transitions |

## Getting Started

```bash
# Install dependencies
pnpm install
pnpm add three @types/three

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Project Structure

```
src/
  pages/index.astro             Main page
  components/
    Hero.astro                  Hero layout (2-column grid)
    HeroCanvas.astro            3D icosahedron scene
    About.astro                 About section + glowing core 3D
    Projects.astro              Project cards + chip 3D model
    ParticlesCanvas.astro       Full-page particle background
    SpecsStrip.astro            Device spec strip
    Footer.astro                Site footer
  styles/global.css             Variables, reset, scroll classes, grain
```

## Design Choices

- **Color palette**: Near-black `#080a0e` background, cold white `#e8eaf0` text, electric violet `#7c3aed` accent
- **Typography**: IBM Plex Mono (mono/tech), Syne (body)
- **No rounded corners** — sharp edges only
- **Violet accent** sparingly — interactive elements, badges, hover states only
- **Grain overlay** at 3.5% opacity via SVG feTurbulence filter

## License

MIT
