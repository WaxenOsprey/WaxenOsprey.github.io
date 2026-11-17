import { skillGroups } from '../data/portfolio';
import { TechnologyLogo } from './TechnologyLogo';

export function SkillsGallery() {
  return (
    <div className="skills-gallery">
      {skillGroups.map(group => (
        <section className="skills-group" key={group.title} aria-label={group.title}>
          <h3>{group.title}</h3>
          <div className="skills-group__logos">
            {group.technologies.map(id => <TechnologyLogo id={id} key={id} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
