import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { Project } from '../data/portfolio';

interface ProjectCarouselProps {
  projects: readonly Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const updateControls = () => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      setCanGoBack(gallery.scrollLeft > 2);
      setCanGoForward(gallery.scrollLeft < maxScroll - 2);
    };

    updateControls();
    gallery.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);

    const observer = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(updateControls);
    observer?.observe(gallery);

    return () => {
      gallery.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
      observer?.disconnect();
    };
  }, [projects.length]);

  const scroll = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const firstCard = gallery.querySelector<HTMLElement>('.project');
    if (!firstCard) return;

    const style = window.getComputedStyle(gallery);
    const gap = Number.parseFloat(style.columnGap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    gallery.scrollBy({
      left: direction * step,
      behavior: reducedMotion ? 'instant' : 'smooth',
    });
  };

  const onGalleryKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scroll(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scroll(-1);
    }
  };

  return (
    <div className="project-carousel">
      <div className="gallery-controls" aria-label="Project gallery controls">
        <button type="button" aria-label="Previous project" onClick={() => scroll(-1)} disabled={!canGoBack}>
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" aria-label="Next project" onClick={() => scroll(1)} disabled={!canGoForward}>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div
        ref={galleryRef}
        className="project-gallery"
        role="region"
        aria-label="Featured projects"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={onGalleryKeyDown}
      >
        {projects.map(project => (
          <article className="project" key={project.id}>
            <div className="project-preview" aria-hidden="true">
              <span>Project preview coming soon</span>
            </div>
            <h3>{project.name}</h3>
            <p className="stack">{project.technologies.join(' · ')}</p>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
