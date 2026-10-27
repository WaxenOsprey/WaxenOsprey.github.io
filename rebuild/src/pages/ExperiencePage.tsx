import { roles, technologyNames } from '../data/portfolio';

export function ExperiencePage() {
  return (
    <div className="inner-page">
      <header className="inner-page__header"><p className="eyebrow">CAREER / EXPERIENCE</p><h1>Experience<span className="accent">.</span></h1><p>A career progression from troubleshooting and integration work through QA automation into software development.</p></header>
      <div className="experience-detail-list">
        {roles.map((role, index) => (
          <article className="experience-detail" key={role.id}>
            <div className="experience-detail__meta"><span className="eyebrow">{String(index + 1).padStart(2, '0')} / {role.period}</span><p>{role.company}</p></div>
            <div><h2>{role.title}</h2><p className="experience-detail__position">{role.position}</p><p className="experience-detail__summary">{role.summary}</p><ul className="detail-list">{role.achievements.map(point => <li key={point}>{point}</li>)}</ul><div className="tag-list">{role.technologies.map(id => <span className="tag" key={id}>{technologyNames[id]}</span>)}</div></div>
          </article>
        ))}
      </div>
    </div>
  );
}
