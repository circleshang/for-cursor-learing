---
name: Technical Precision Portfolio
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#c3c6d1'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8d919b'
  outline-variant: '#424750'
  surface-tint: '#a8c8ff'
  primary: '#b5cfff'
  on-primary: '#003061'
  primary-container: '#8ab4f8'
  on-primary-container: '#0d4582'
  inverse-primary: '#315f9d'
  secondary: '#98d2bd'
  on-secondary: '#00382b'
  secondary-container: '#145040'
  on-secondary-container: '#87c1ac'
  tertiary: '#c9ceda'
  on-tertiary: '#2b313a'
  tertiary-container: '#adb3be'
  on-tertiary-container: '#3f454f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a8c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#114784'
  secondary-fixed: '#b4efd9'
  secondary-fixed-dim: '#98d2bd'
  on-secondary-fixed: '#002118'
  on-secondary-fixed-variant: '#145040'
  tertiary-fixed: '#dde3ef'
  tertiary-fixed-dim: '#c1c7d2'
  on-tertiary-fixed: '#161c24'
  on-tertiary-fixed-variant: '#414751'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the intersection of Apple’s material restraint, Linear’s dark-mode engineering precision, and Vercel’s structural clarity. Grounded in International Typographic Style (Swiss Grid), it prioritizes rationalism, high signal-to-noise ratio, and mathematical alignment over ornamental embellishments.

### Key Brand Characteristics
- **Personality:** Rational, calm, deeply technical, authoritative yet quiet.
- **Target Audience:** Engineers, engineering leaders, founders, systems architects, and collaborators seeking depth and craft.
- **Atmosphere:** An obsidian terminal room bathed in low-radiance ambient screens; crisp hairline dividers, deep spatial recessions, and purposeful interactive friction.

### Visual Foundations
- **Precision Grid & Coordinate Matrix:** Background subtle coordinate axes, hairline intersections (`1px` with low opacity), and discrete mathematical dot grids (8px step).
- **Sub-perceptual Particle Network:** Canvas-rendered, low-contrast interactive particulate mesh responsive to mouse proximity with strict dampening, preserving baseline legibility.
- **Light Disciplines:** Directional micro-glows (`#8AB4F8` at 6–12% opacity) tethered to mouse vectors, paired with subtle frosted-glass backdrops (`backdrop-filter: blur(12px)`).

## Colors

The palette is engineered strictly for dark visual ergonomics, preventing eye fatigue while maintaining AA/AAA contrast ratios across deep black and slate-tinted canvas tiers.

### Surface Hierarchy
- **Canvas Base (`#090B0F`):** Deep space obsidian. Applied to global viewport root and low-priority backgrounds.
- **Surface Elevation 1 (`#11151B`):** Secondary container surface, section breaks, and navigation chassis.
- **Surface Elevation 2 (`#171C23`):** Interactive cards, code execution previews, and modular widgets.
- **Hairline Border (`#252B34`):** Crisp, uniform 1px boundary separating structural grids and card perimeters.

### Accents & Semantic States
- **Ice Blue (`#8AB4F8`):** Primary action vector, interactive state indicators, key link hovers, and focused nodes.
- **Terminal Green (`#7FB8A4`):** Status indicator (operational / available for projects), telemetry metrics, and successful system traces.
- **Muted Border Glow (`rgba(138, 180, 248, 0.15)`): Radial hover highlight layer for interactive cards.

### Text Contrast Tiers
- **Text Primary (`#E8EBEF`):** Headings, technical metrics, code syntax keywords, active tab labels.
- **Text Secondary (`#8A929E`):** Explanatory prose, descriptive meta, timestamp coordinates, inactive icons.
- **Text Tertiary (`#505866`):** Grid column line markers, breadcrumbs dividers, inline line numbers.

## Typography

The typographic hierarchy prioritizes technical legibility and stark vertical rhythm.

### Type Pairings & Font Fallbacks
- **Primary & Headings:** `Geist`, `Inter`, `-apple-system`, `PingFang SC`, `Noto Sans SC`, sans-serif. Chinese glyphs naturally fall back to `PingFang SC` or `Source Han Sans` with optical size matching.
- **Code, Telemetry & Status:** `JetBrains Mono`, `SF Mono`, `Menlo`, monospace.

### Type Application Rules
- **Display Hero:** Reserved strictly for the primary positioning statement and homepage title. Uses tight negative letter-spacing for architectural cohesion.
- **Mono Labels:** All auxiliary metadata, coordinates, article published dates, version strings, and architecture diagram nodes must use `label-mono` or `code-sm` set in all-caps or strict lower-case with tabular figures (`font-variant-numeric: tabular-nums`).
- **Prose Reading Width:** Set article and content body blocks to an explicit `max-width: 68ch` to safeguard scanning comfort against dark backgrounds.

## Layout & Spacing

The structural layout strictly honors the Swiss grid discipline: predictable columns, uniform gutters, and deliberate mathematical white space.

### Grid Architecture
- **Desktop (>= 1024px):** 12-column fluid grid, maximum content container width `1200px`, centered with `margin: 3rem` outer boundaries and `1.5rem` (`24px`) gutters.
- **Tablet (768px - 1023px):** 8-column layout, `gutter: 1.25rem`, `margin: 2rem`.
- **Mobile (< 768px):** 4-column layout, `gutter: 1rem`, `margin: 1.25rem`.

### Layout Rhythm
- Section vertical spacing follows strict increments: `80px` (`5rem`) between core landing modules on desktop, scaling to `48px` (`3rem`) on mobile devices.
- Interior card paddings use `space-lg` (`24px`) on desktop, collapsing to `space-md` (`16px`) on mobile viewports.

## Elevation & Depth

Visual hierarchy rejects heavy drop shadows in favor of tonal layered surfaces, ambient chromatic micro-glows, and structural hairline frontiers.

### Tonal Stratification
- **Plane 0 (Canvas):** `#090B0F` (Base background with optional dot-matrix overlay at 4% alpha).
- **Plane 1 (Barriers & Navbars):** `#11151B` at 80% opacity paired with `backdrop-filter: blur(16px)` and a `1px solid #252B34` bottom boundary.
- **Plane 2 (Cards & Modules):** `#171C23` with `1px solid #252B34`.

### Ambient Micro-Glow
- Cards utilize a cursor-following pseudo-element radiating a radial gradient: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(138, 180, 248, 0.08), transparent 40%)`.
- Hover elevation is conveyed by elevating border luminance from `#252B34` to `#3E4756`, along with an ambient wash: `0 8px 30px rgba(0, 0, 0, 0.5)`.

## Shapes

The geometric silhouette remains disciplined, subtle, and utilitarian (`roundedness: 1`).

- **Base Radius (4px / 0.25rem):** Used for micro-badges, inline code pills, tooltips, and system status tags.
- **Container Radius (8px / 0.5rem):** Used for project cards, preview terminals, dialog windows, and input elements.
- **Pill Silhouette (`rounded-full`):** Reserved exclusively for active filter tags and primary floating dynamic navigation bars.
- **Divider Lines:** Strict geometric lines at `1px` with zero corner radius, spanning full column increments.

## Components

### Buttons
- **Primary:** Background `transparent`, border `1px solid #8AB4F8`, text `#8AB4F8`. On hover, background transitions to `rgba(138, 180, 248, 0.12)` with a slight glow.
- **Secondary:** Background `#171C23`, border `1px solid #252B34`, text `#E8EBEF`. Hover elevates border to `#8A929E`.
- **Text / Ghost:** Background `transparent`, text `#8A929E`. On hover, text shifts to `#E8EBEF` with an underline offset of `4px`.
- **Dimensions:** Height `36px` (compact) or `42px` (regular); font `JetBrains Mono` or `Geist` medium, `13px`.

### Badges & Status Chips
- **Telemetry Indicators:** Background `rgba(127, 184, 164, 0.1)`, border `1px solid rgba(127, 184, 164, 0.3)`, text `#7FB8A4`. Contains a pulsating circular beacon (`6px`, `#7FB8A4`) with CSS animation.
- **Tag / Technology Pill:** Background `#11151B`, border `1px solid #252B34`, text `#8A929E`, typography `code-sm`.

### Cards & Project Showcases
- Surface `#171C23`, boundary `1px solid #252B34`, border-radius `8px`.
- Interactive cards feature a top-right arrow glyph (`↗`) transitioning `4px` top-right on hover.
- Background incorporates an optional faint blueprint graph background or dynamic canvas node graph with mouse-deflection dynamics.

### Form Inputs & Terminal Controls
- Background `#11151B`, border `1px solid #252B34`, text `#E8EBEF`, placeholder `#505866`.
- Focus state: border turns `#8AB4F8`, box-shadow `0 0 0 1px #8AB4F8`.

### Navigation Bar
- Fixed desktop dock or header with `backdrop-filter: blur(16px)` and background `rgba(9, 11, 15, 0.8)`.
- Border-bottom: `1px solid #252B34`.
- Active item indicated by `#E8EBEF` text and an animated sliding underline or pill background.