import type { ProjectVisualId } from '../data/portfolio';

/** A single project cover reused across the home carousel, project list and detail page. */
const projectImages: Record<ProjectVisualId, { src: string; alt: string }> = {
  posterity: {
    src: '/projects/posterity/cover.webp',
    alt: "Posterity vault page showing gaming media in Odin's Apiary",
  },
  overloader: {
    src: '/projects/overloader/cover.webp',
    alt: 'OverLoader Dumbbell Flye progression chart and recommendation',
  },
  solar: {
    src: '/projects/solar-system-db/cover.webp',
    alt: 'SolarSystem.DB login screen',
  },
  phoenix: {
    src: '/projects/phoenix-trader/cover.webp',
    alt: 'PhoenixTrader portfolio overview and performance chart',
  },
  gwentish: {
    src: '/projects/gwentish/cover.webp',
    alt: 'Gwentish player setup screen',
  },
};

export function ProjectVisual({ variant }: { variant: ProjectVisualId }) {
  const image = projectImages[variant];

  return (
    <div className="project-visual">
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
    </div>
  );
}
