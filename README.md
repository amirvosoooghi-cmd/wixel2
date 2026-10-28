# WIXEL Studio

A responsive, editorial-style website for WIXEL built with Next.js, React, TypeScript, Tailwind CSS, GSAP and ScrollTrigger.

## Requirements
- Node.js 20.9+ (recommended)
- npm

## Install and run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Notes
- Project screenshots and the supplied founder/designer references are stored locally in `public/images`.
- The page uses GSAP ScrollTrigger for restrained reveal and pinned-gallery motion.
- Loading screen is intentionally brief and exits when the app is ready; it does not fake a percentage of network progress.
- Replace the placeholder project titles/descriptions and verify permissions for team photography before publishing.
- All core layout and images are local; no external image API is required.
