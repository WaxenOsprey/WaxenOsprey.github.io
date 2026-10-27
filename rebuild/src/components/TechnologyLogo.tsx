import type { TechnologyId } from '../data/portfolio';
import { technologyNames } from '../data/portfolio';

/**
 * Local SVG assets from Devicon. Avoid importing brand icons by named export:
 * not every Simple Icons release exposes every brand (notably C#).
 */
const logoAssets: Partial<Record<TechnologyId, string>> = {
  csharp: 'csharp',
  dotnet: 'dotnet',
  angular: 'angular',
  react: 'react',
  typescript: 'typescript',
  postgresql: 'postgresql',
  sql: 'sql',
  azure: 'azure',
  git: 'git',
  github: 'github',
  javascript: 'javascript',
  python: 'python',
  spring: 'spring',
  mongodb: 'mongodb',
  node: 'node',
  java: 'java',
};

const fallbackNames: Partial<Record<TechnologyId, string>> = {
  api: 'API',
  cosmos: 'DB',
  nunit: 'N',
  garmin: 'G',
};

export function TechnologyLogo({ id, compact = false }: { id: TechnologyId; compact?: boolean }) {
  const asset = logoAssets[id];
  return (
    <span className={compact ? 'tech-logo tech-logo--compact' : 'tech-logo'} title={technologyNames[id]}>
      <span className="tech-logo__art" aria-hidden="true">
        {asset
          ? <img className={id === 'github' ? 'tech-logo__image tech-logo__image--invert' : 'tech-logo__image'} src={`/logos/${asset}.svg`} alt="" loading="lazy" />
          : <span className="tech-logo__fallback">{fallbackNames[id] ?? technologyNames[id].slice(0, 2)}</span>}
      </span>
      <span className="tech-logo__name">{technologyNames[id]}</span>
    </span>
  );
}
