# Paul Cumming — Portfolio Rebuild

A React/TypeScript portfolio built with Vite. The design retains the dark navy/teal identity of the earlier website while refreshing its code and presentation.

## Local development

```sh
cd rebuild
npm install
npm run dev
```

Production build: `npm run build` (includes TypeScript checking). Preview: `npm run preview`. There is intentionally no test suite for this personal portfolio rebuild.

## Features

- Typography-led homepage: Introduction, Selected Work, Experience, Skills & Technologies
- Native CSS scroll-snap carousel with accessible buttons and keyboard navigation
- Vertical career timeline, with a distinct marker for the current role
- Technology logos rendered through `react-icons/si` (official brand glyphs from Simple Icons); fallback labels for technologies without a suitable icon
- Project listing and individual project overview pages
- Dedicated Experience, About and Contact pages
- Responsive layout and reduced-motion support
- Static GitHub Pages deployment-ready Vite build

## Structure

- `src/data/portfolio.ts` — editable project, career and technology data
- `src/components` — reusable gallery, timeline, visual illustrations and site chrome
- `src/pages` — route-level content
- `src/styles.css` — design tokens, site layout and responsive styles

## Important content notes

Project visuals are **illustrative CSS designs**, not real application screenshots. Replace them with actual screenshots or short videos as the applications mature.

The new CV PDF has not been supplied with this repository, so the navigation **requests the CV by email** instead of linking to the previous, potentially outdated PDF. Once the new PDF is available, add it as `public/paulsamuelcumming.pdf` and point the navigation link at that asset.

The current portfolio remains active on `main`. Build and inspect this branch first. The custom domain is recorded in `public/CNAME`. The GitHub Pages deployment workflow is configured for the completed site and should be enabled at cutover, after choosing GitHub Actions as the Pages source.

## Routing on GitHub Pages

This is a static SPA with `BrowserRouter`; `public/404.html` redirects deep links back through `index.html` to restore the requested route. If migrating to a platform that supports rewrites, configure a normal fallback to `index.html` instead.
