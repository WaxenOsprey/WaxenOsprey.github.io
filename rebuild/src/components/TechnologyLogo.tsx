import type { TechnologyId } from '../data/portfolio';
import { technologyNames } from '../data/portfolio';

/**
 * Locally stored SVGs. See public/logos/SOURCES.md for original assets and credits.
 * Each technology must map to a real SVG: no text-only placeholder tiles.
 */
const logoAssets: Record<TechnologyId, string> = {
  csharp: 'csharp',
  dotnet: 'dotnet',
  aspnetcore: 'dotnetcore',
  webforms: 'dotnet',
  visualbasic: 'visualbasic',
  angular: 'angular',
  react: 'react',
  typescript: 'typescript',
  javascript: 'javascript',
  html: 'html',
  css: 'css',
  postgresql: 'postgresql',
  sql: 'sql',
  cosmos: 'cosmos',
  mongodb: 'mongodb',
  entityframework: 'entityframework',
  azure: 'azure',
  git: 'git',
  github: 'github',
  azuredevops: 'azuredevops',
  nunit: 'nunit',
  nsubstitute: 'nsubstitute',
  postman: 'postman',
  api: 'api',
  python: 'python',
  flask: 'flask',
  node: 'node',
  express: 'express',
  spring: 'spring',
  garmin: 'garmin',
  java: 'java',
};

// Monochrome marks are drawn dark by their sources, so render them light on
// the dark portfolio background. Keep other logos in their original colours.
const lightIconIds = new Set<TechnologyId>(['github', 'express', 'flask', 'garmin']);

export function TechnologyLogo({ id, compact = false }: { id: TechnologyId; compact?: boolean }) {
  const classNames = ['tech-logo__image'];
  if (lightIconIds.has(id)) classNames.push('tech-logo__image--invert');
  if (id === 'garmin') classNames.push('tech-logo__image--wordmark');

  return (
    <span className={compact ? 'tech-logo tech-logo--compact' : 'tech-logo'} title={technologyNames[id]}>
      <span className="tech-logo__art" aria-hidden="true">
        <img
          className={classNames.join(' ')}
          src={`/logos/${logoAssets[id]}.svg`}
          alt=""
          loading="lazy"
        />
      </span>
      <span className="tech-logo__name">{technologyNames[id]}</span>
    </span>
  );
}
