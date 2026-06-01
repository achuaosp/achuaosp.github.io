# Achu — Portfolio

A premium dark-tech portfolio for **Achu**, a BCA student and Android ROM developer for the **Redmi Note 7 Pro** (codename: **violet**).

Built with Astro, Three.js, GSAP, and Lenis. Dark, surgical, hardware-precision aesthetic inspired by BIOS interfaces and brutalist editorial design.

![Status](https://img.shields.io/badge/status-active-brightgreen)

## Features

- **3D Hero Scene** — Dual-layer wireframe icosahedron with vertex distortion, orbiting point lights, mouse parallax, scroll-linked fade, and mobile-responsive positioning
- **Full-Page Particle Background** — 3000 fixed-position particles (violet/white) as an immersive backdrop
- **Glowing Emissive Core** — Rotating sphere with wireframe shells in the About section
- **Floating Chip Model** — Concentric torus rings suggesting an SoC/die in the Projects section
- **Text Scramble** — GSAP-powered character-by-character scramble on the hero name
- **Lenis Smooth Scroll** — 1.4s exponential-easing smooth scrolling across the page
- **Custom Cursor** — Violet dot + ring on desktop, scales over interactive elements
- **Hero Grid + Glow** — 60px violet grid overlay and radial violet glow behind the sphere
- **Scroll Hint** — Vertical animated violet line in the hero
- **Section Dividers** — Thin violet line with glowing center dot between every section
- **Scroll Animations** — CSS transition-based reveals via Intersection Observer (zero JS dependencies)
- **Hover Micro-interactions** — Project card top accent grows on hover, download arrow slides in, tech tags glow
- **Specs Scanline** — Animated sweep across the device spec strip
- **Grain Texture** — SVG noise filter overlay for analog/darkroom feel

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build) 5 | Static site generation |
| [Three.js](https://threejs.org) | WebGL 3D scenes |
| [GSAP](https://gsap.com) 3 | Hero page-load animation |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scroll |
| Intersection Observer | Scroll-triggered element reveals |
| Vanilla CSS | Custom properties, grid layout, transitions |

## Getting Started

```bash
# Install dependencies
npm install
npm install three @types/three lenis

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  pages/index.astro             Main page (section dividers, custom cursor, script entry)
  components/
    Hero.astro                  Hero layout with grid overlay, glow, scroll-hint
    HeroCanvas.astro            3D icosahedron scene (responsive)
    About.astro                 About section + glowing core 3D
    Projects.astro              3 project cards (Matrixx, InfinityX, LunarisAOSP) + chip 3D
    ParticlesCanvas.astro       Full-page particle background
    SpecsStrip.astro            Device spec strip with animated scanline
    Footer.astro                Site footer
  scripts/
    animations.js               Lenis smooth scroll + custom cursor
  styles/global.css             Variables, reset, scroll classes, grain, custom cursor, dividers
```

## Design Choices

- **Color palette**: Near-black `#080a0e` background, cold white `#e8eaf0` text, electric violet `#7c3aed` accent
- **Typography**: IBM Plex Mono (mono/tech), Syne (body)
- **No rounded corners** — sharp edges only (the glowing dot in section dividers and the small badge radii are the only exceptions)
- **Violet accent** sparingly — interactive elements, badges, hover states, dividers, scanline, glow
- **Grain overlay** at 3.5% opacity via SVG feTurbulence filter
- **Custom cursor** only on `(hover: hover)` devices — touch users get the native cursor
- **No third-party UI framework** — every transition, hover, and reveal is vanilla CSS

## License

MIT

