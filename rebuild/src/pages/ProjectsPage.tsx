import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { ProjectVisual } from '../components/ProjectVisual';
import { projects, technologyNames } from '../data/portfolio';

export function ProjectsPage() {
  return (
    <div className="inner-page">
      <header className="inner-page__header"><p className="eyebrow">WORK / ALL PROJECTS</p><h1>Projects<span className="accent">.</span></h1><p>Selected recent engineering work and earlier projects that shaped my development skills.</p></header>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-list__item" key={project.slug}>
            <Link to={`/projects/${project.slug}`} className="project-list__visual" aria-label={`View ${project.name}`}><ProjectVisual variant={project.visual} /></Link>
            <div className="project-list__description"><span className="micro-label">{String(index + 1).padStart(2, '0')} / {project.category} · {project.status}</span><h2>{project.name}</h2><p>{project.summary}</p><div className="tag-list">{project.technologies.map(tech => <span className="tag" key={tech}>{technologyNames[tech]}</span>)}</div><Link to={`/projects/${project.slug}`} className="text-link">Read project overview <FiArrowUpRight aria-hidden="true" /></Link></div>
          </article>
        ))}
      </div>
    </div>
  );
}
