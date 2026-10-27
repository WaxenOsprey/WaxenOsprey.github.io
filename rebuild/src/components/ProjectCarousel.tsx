import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '../data/portfolio';
import { technologyNames } from '../data/portfolio';
import { ProjectVisual } from './ProjectVisual';

export function ProjectCarousel({ projects }: { projects: readonly Project[] }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canBack, setCanBack] = useState(false);
  const [canNext, setCanNext] = useState(projects.length > 1);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const update = () => {
      const max = Math.max(0, gallery.scrollWidth - gallery.clientWidth);
      setCanBack(gallery.scrollLeft > 2);
      setCanNext(gallery.scrollLeft < max - 2);
    };
    update();
    gallery.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    observer?.observe(gallery);
    return () => { gallery.removeEventListener('scroll', update); window.removeEventListener('resize', update); observer?.disconnect(); };
  }, [projects.length]);

  const move = (direction: number) => {
    const gallery = galleryRef.current;
    const card = gallery?.querySelector<HTMLElement>('.project-card');
    if (!gallery || !card) return;
    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gallery.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: reduced ? 'instant' : 'smooth' });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
  };

  return (
    <div className="carousel-shell">
      <div className="carousel-controls">
        <span className="carousel-hint">SCROLL TO EXPLORE</span>
        <button type="button" className="icon-button" onClick={() => move(-1)} disabled={!canBack} aria-label="Previous project"><FiArrowLeft /></button>
        <button type="button" className="icon-button" onClick={() => move(1)} disabled={!canNext} aria-label="Next project"><FiArrowRight /></button>
      </div>
      <div ref={galleryRef} className="project-carousel" role="region" aria-label="Featured projects" aria-roledescription="carousel" tabIndex={0} onKeyDown={onKeyDown}>
        {projects.map(project => (
          <article className="project-card" key={project.slug}>
            <Link to={`/projects/${project.slug}`} className="project-card__visual-link" aria-label={`View ${project.name} project details`}>
              <ProjectVisual variant={project.visual} />
            </Link>
            <div className="project-card__heading"><div><span className="micro-label">{project.category}</span><h3>{project.name}</h3></div><Link to={`/projects/${project.slug}`} aria-label={`Read about ${project.name}`} className="project-card__arrow"><FiArrowUpRight /></Link></div>
            <p>{project.summary}</p>
            <p className="project-card__stack">{project.technologies.map(id => technologyNames[id]).join(' · ')}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
