import type { IconType } from 'react-icons';
import {
  SiAngular, SiCsharp, SiDotnet, SiGit, SiGithub, SiJavascript,
  SiMicrosoftazure, SiMongodb, SiNodedotjs, SiPostgresql, SiPython,
  SiReact, SiSpringboot, SiTypescript,
} from 'react-icons/si';
import type { TechnologyId } from '../data/portfolio';
import { technologyNames } from '../data/portfolio';

const brandIcons: Partial<Record<TechnologyId, { Icon: IconType; color: string }>> = {
  csharp: { Icon: SiCsharp, color: '#b88be0' },
  dotnet: { Icon: SiDotnet, color: '#9f8aff' },
  angular: { Icon: SiAngular, color: '#e95d6b' },
  react: { Icon: SiReact, color: '#61dafb' },
  typescript: { Icon: SiTypescript, color: '#5ca9eb' },
  postgresql: { Icon: SiPostgresql, color: '#82b4db' },
  azure: { Icon: SiMicrosoftazure, color: '#48a8ec' },
  git: { Icon: SiGit, color: '#ef7763' },
  github: { Icon: SiGithub, color: '#e1e7f2' },
  javascript: { Icon: SiJavascript, color: '#efd65c' },
  python: { Icon: SiPython, color: '#f1c66b' },
  spring: { Icon: SiSpringboot, color: '#86c875' },
  mongodb: { Icon: SiMongodb, color: '#80c99e' },
  node: { Icon: SiNodedotjs, color: '#89c887' },
};

const fallbackNames: Partial<Record<TechnologyId, string>> = {
  api: 'API', sql: 'SQL', cosmos: 'DB', nunit: 'N',
  garmin: 'G', java: 'J',
};

export function TechnologyLogo({ id, compact = false }: { id: TechnologyId; compact?: boolean }) {
  const brand = brandIcons[id];
  return (
    <span className={compact ? 'tech-logo tech-logo--compact' : 'tech-logo'} title={technologyNames[id]}>
      <span className="tech-logo__art" aria-hidden="true">
        {brand ? <brand.Icon color={brand.color} /> : <span className="tech-logo__fallback">{fallbackNames[id] ?? technologyNames[id].slice(0, 2)}</span>}
      </span>
      <span className="tech-logo__name">{technologyNames[id]}</span>
    </span>
  );
}
