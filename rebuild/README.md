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
npm run build
```

The environment used to author this initial foundation could not install npm dependencies, so a successful build has **not** yet been verified. Please run the commands above locally before treating PBI 001 as complete.

## Homepage scope

- Typography-led introduction
- Featured projects with horizontally scrolling, keyboard-accessible carousel
- Career progression timeline
- Categorised skills (actual SVG technology logos planned next)

Project screenshots, project detail pages, logo assets, production routing, automated tests and deployment workflow are follow-on tasks. Do not deploy the `rebuild/` app to the live site until the replacement is ready.
