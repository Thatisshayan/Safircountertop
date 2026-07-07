# Safir Countertop

Marketing website for Safir Countertop — a granite, marble &amp; quartz
countertop fabrication and installation business. Built with React,
TypeScript, Vite, Tailwind v4, and Framer Motion.

See [`ideas.md`](./ideas.md) for the full design philosophy behind the
brand system, layout decisions, and signature visual devices used
throughout the site.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@theme inline`, OKLCH tokens)
- Framer Motion for scroll reveals and motion
- wouter for routing
- lucide-react for iconography

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which
typechecks, builds, and deploys `dist/` to GitHub Pages.

## Before launch — placeholders to replace

The business's Facebook and Instagram pages did not expose a public
phone number, street address, or business hours, so the following are
placeholders and **must** be replaced with real details before this
site goes live:

- Phone number, email, and street address (`src/lib/content.ts`)
- Google Maps embed (`src/lib/content.ts` → `mapEmbedSrc`)
- Business hours (`src/lib/content.ts`)
- Real logo file (currently a wordmark + vein-line SVG mark)
- Gallery/hero photography — currently royalty-free Unsplash stock
  photography of granite/marble kitchens; swap in real project photos
  from the business's Instagram/Facebook once available
- Customer reviews in `src/components/sections/Reviews.tsx` are
  representative placeholder copy, not real customer quotes
