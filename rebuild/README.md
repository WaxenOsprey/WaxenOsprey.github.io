# Portfolio rebuild

React + TypeScript + Vite work-in-progress, developed independently from the existing GitHub Pages application in the repository root.

## Run locally

```sh
git switch feature/001-portfolio-rebuild-foundation
cd rebuild
npm install
npm run dev
```

## Quality checks

```sh
npm run typecheck
npm run test
npm run build
```

The initial app build was confirmed locally on 27 October 2026. Run the new tests after installing the updated dev dependencies; they have not yet been verified in the contributor's environment.

## Homepage scope

- Typography-led introduction
- Featured projects with horizontally scrolling, keyboard-accessible carousel
- Career progression timeline
- Categorised skills (actual SVG technology logos planned next)

Project screenshots, project detail pages, logo assets, production routing, automated tests and deployment workflow are follow-on tasks. Do not deploy the `rebuild/` app to the live site until the replacement is ready.
