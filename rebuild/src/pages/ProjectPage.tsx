import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { ProjectVisual } from '../components/ProjectVisual';
import { TechnologyLogo } from '../components/TechnologyLogo';
import { projects } from '../data/portfolio';
import { NotFoundPage } from './NotFoundPage';

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  if (!project) return <NotFoundPage />;
  return (
    <article className="inner-page project-detail">
      <Link className="text-link back-link" to="/projects"><FiArrowLeft aria-hidden="true" /> All projects</Link>
      <header className="inner-page__header"><p className="eyebrow">{project.category.toUpperCase()} / {project.status.toUpperCase()}</p><h1>{project.name}<span className="accent">.</span></h1><p>{project.summary}</p></header>
      <div className="project-detail__visual"><ProjectVisual variant={project.visual} /></div>
      <div className="project-detail__body">
        <div><p className="eyebrow">THE PROJECT</p><h2>Overview</h2><p>{project.overview}</p>
          {project.sourceUrl && <a className="button-link button-link--outline" href={project.sourceUrl} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> View repository <FiArrowUpRight aria-hidden="true" /></a>}
          {!project.sourceUrl && <p className="project-detail__note">Public repository link not currently available.</p>}
        </div>
        <div><p className="eyebrow">IMPLEMENTATION</p><h2>Key areas</h2><ul className="detail-list">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div>
      </div>
      <section className="project-detail__stack"><p className="eyebrow">TECH STACK</p><h2>Technologies</h2><div className="detail-tech-list">{project.technologies.map(id => <TechnologyLogo key={id} id={id} />)}</div></section>
      <div className="bottom-nav"><Link to="/projects" className="text-link"><FiArrowLeft aria-hidden="true" /> Back to all projects</Link></div>
    </article>
  );
}
