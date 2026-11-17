import type { ProjectVisualId } from './portfolio';

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Screenshots are stored in public/projects/<slug>/.
 * Keep each project's first image in sync with its ProjectVisual cover.
 */
export const projectScreenshots: Record<ProjectVisualId, readonly ProjectScreenshot[]> = {
  posterity: [
    { src: '/projects/posterity/cover.webp', alt: "Posterity Odin's Apiary vault with shared game screenshots", caption: "Odin's Apiary — collaborative vault" },
    { src: '/projects/posterity/vaults.webp', alt: 'Posterity vault library showing several gaming collections', caption: 'Vault library' },
    { src: '/projects/posterity/community-vault.webp', alt: 'Posterity shared gaming vault with media and members', caption: 'Shared community vault' },
    { src: '/projects/posterity/vault-media.webp', alt: 'Posterity media grid with screenshots and clips', caption: 'Vault screenshots and clips' },
    { src: '/projects/posterity/media-comments.webp', alt: 'Posterity media detail page displaying a game screenshot alongside a threaded comments panel', caption: 'Media details and comments' },
    { src: '/projects/posterity/activity-feed.webp', alt: 'Posterity activity feed showing recent media and vault activity', caption: 'Activity feed' },
    { src: '/projects/posterity/profile.webp', alt: 'Posterity user profile with vaults and activity', caption: 'User profile' },
  ],
  overloader: [
    { src: '/projects/overloader/cover.webp', alt: 'OverLoader progression chart for Dumbbell Flye', caption: 'Progression recommendations' },
    { src: '/projects/overloader/dashboard.webp', alt: 'OverLoader dashboard showing training summary and recommended exercises', caption: 'Training dashboard' },
    { src: '/projects/overloader/workout-history.webp', alt: 'OverLoader workout history and training activity calendar', caption: 'Workout history' },
    { src: '/projects/overloader/maintain-target.webp', alt: 'OverLoader exercise progression with maintain-target recommendation', caption: 'Current targets and performance' },
  ],
  solar: [
    { src: '/projects/solar-system-db/cover.webp', alt: 'SolarSystem.DB login screen', caption: 'Login screen' },
    { src: '/projects/solar-system-db/system-overview.webp', alt: 'SolarSystem.DB system overview with planets', caption: 'Solar system overview' },
    { src: '/projects/solar-system-db/pluto.webp', alt: 'SolarSystem.DB Pluto page showing the dwarf planet, its description and known moons', caption: 'Pluto and its moons' },
    { src: '/projects/solar-system-db/makemake.webp', alt: 'SolarSystem.DB Makemake page showing an image and planetary data', caption: 'Makemake detail page' },
    { src: '/projects/solar-system-db/system-report.webp', alt: 'SolarSystem.DB report showing a list of visited celestial bodies', caption: 'Visited bodies report' },
  ],
  phoenix: [
    { src: '/projects/phoenix-trader/cover.webp', alt: 'PhoenixTrader portfolio overview', caption: 'Portfolio overview' },
    { src: '/projects/phoenix-trader/portfolio-performance.webp', alt: 'PhoenixTrader portfolio performance graph and account values', caption: 'Portfolio performance' },
    { src: '/projects/phoenix-trader/stock-details.webp', alt: 'PhoenixTrader Tesla stock overview with price, share trading controls and market statistics', caption: 'Stock details and trading' },
    { src: '/projects/phoenix-trader/related-news.webp', alt: 'PhoenixTrader Tesla stock chart and related financial news cards', caption: 'Stock charts and related news' },
    { src: '/projects/phoenix-trader/watchlist.webp', alt: 'PhoenixTrader watchlist showing Tesla and its stock overview', caption: 'Stock watchlist' },
  ],
  gwentish: [
    { src: '/projects/gwentish/cover.webp', alt: 'Gwentish player setup in the medieval tavern', caption: 'Player setup' },
    { src: '/projects/gwentish/gameplay.webp', alt: 'Gwentish gameplay showing hand of cards and game board', caption: 'Gameplay and card selection' },
    { src: '/projects/gwentish/game-over.webp', alt: 'Gwentish end-game screen showing Geralt as the winner', caption: 'Game over — final result' },
  ],
};
