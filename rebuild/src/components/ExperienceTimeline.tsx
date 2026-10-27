import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { roles } from '../data/portfolio';

export function ExperienceTimeline() {
  return (
    <div className="experience-summary">
      <ol className="timeline">
        {roles.map((role, index) => (
          <li key={role.id} className={index === 0 ? 'timeline__entry timeline__entry--current' : 'timeline__entry'}>
            <div className="timeline__heading"><div><h3>{role.title}</h3><p className="timeline__company">{role.company}</p></div><span className="timeline__period">{role.period}</span></div>
            <p className="timeline__summary">{role.summary}</p>
          </li>
        ))}
      </ol>
      <Link to="/experience" className="text-link">More about my experience <FiArrowUpRight aria-hidden="true" /></Link>
    </div>
  );
}
