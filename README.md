# Paul Cumming — Portfolio

Personal software engineering portfolio built with **React 19, TypeScript and Vite 7**. The current portfolio replaced an earlier Create React App implementation in November 2026.

## Local development

Requirements: Node.js 22+ and npm.

```sh
npm ci
npm run dev
```

Visit the local URL reported by Vite (normally http://localhost:5173/).

For a production build, run `npm run build`; this checks TypeScript and outputs a static site to `dist/`. To preview the built site, run `npm run preview`.

## Structure

- `src/data/portfolio.ts` — editable projects, experience, skills and technology metadata
- `src/components/` — project carousel, screenshot visuals, skills gallery and shared layout
- `src/pages/` — individual routes and portfolio pages
- `src/styles.css` — global styles and responsive rules
- `public/projects/` — project cover screenshots
- `public/logos/` — technology SVG logos and their source credits
- `public/404.html` — GitHub Pages SPA deep-link redirect
- `public/CNAME` — custom domain configuration

The three project-display surfaces (home carousel, project index, and project detail) share the same cover image for each project. Individual gallery and video embeds can be added separately.

## Deploying on GitHub Pages

The workflow `.github/workflows/deploy-portfolio.yml` runs on pushes to `main`, installs dependencies using `npm ci`, runs the Vite build, and deploys the generated `dist/` folder using GitHub Actions.

In **GitHub → Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. Ensure the custom domain remains `www.paulsamuelcumming.dev`. The custom domain is carried through by `public/CNAME`.

The site uses `BrowserRouter`; `public/404.html` redirects deep links through `index.html`. If moving to a host that supports rewrites, configure the usual SPA rewrite to `/index.html`.

## Historical implementation

The earlier portfolio was built with Create React App and remains recoverable from Git history (for example, commit `291104a`). The former `rebuild/` source tree was promoted into the repository root when this version became the primary site. There is intentionally no duplicated application folder.
