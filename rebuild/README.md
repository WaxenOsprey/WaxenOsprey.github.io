# Portfolio rebuild

Work-in-progress React + TypeScript + Vite application. The original portfolio lives at the repository root and stays deployed while the rebuild is developed in this directory.

## Start locally

```sh
cd rebuild
npm install
npm run dev
```

## Checks

```sh
npm run typecheck
npm run build
```

## Design

The homepage follows four sections: large typographic introduction, horizontally scrolling featured projects, experience timeline and categorised technology logos. Current project images and skills are placeholders; real images/logos and accessible carousel controls are follow-on work.

## Deployment

Do not deploy `rebuild/` to the live GitHub Pages site yet. Migration to the repository root, routing, tests and the production workflow will be handled after the new portfolio is ready.
