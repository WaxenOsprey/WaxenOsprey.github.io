import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import type { ProjectVisualId } from '../data/portfolio';
import { projectScreenshots } from '../data/projectScreenshots';

export function ProjectGallery({ projectName, variant }: { projectName: string; variant: ProjectVisualId }) {
  const screenshots = projectScreenshots[variant];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const active = screenshots[selectedIndex];

  const goTo = (direction: number) => {
    setSelectedIndex(index => (index + direction + screenshots.length) % screenshots.length);
  };

  return (
    <section className="project-detail__gallery" aria-label={`${projectName} screenshots`}>
      <div className="project-gallery__heading">
        <div>
          <p className="eyebrow">A CLOSER LOOK</p>
          <h2>Screenshots</h2>
        </div>
        <span className="project-gallery__count" aria-label={`Screenshot ${selectedIndex + 1} of ${screenshots.length}`}>
          {String(selectedIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
        </span>
      </div>

      <figure className="project-gallery__figure">
        <a
          className="project-gallery__main"
          href={active.src}
          target="_blank"
          rel="noreferrer"
          title="Open image at full size"
          aria-label={`Open ${active.caption} screenshot in a new tab`}
        >
          <img key={active.src} src={active.src} alt={active.alt} decoding="async" />
          <span className="project-gallery__open"><FiExternalLink aria-hidden="true" /> VIEW FULL SIZE</span>
        </a>
        <figcaption className="project-gallery__caption">
          <span aria-live="polite">{active.caption}</span>
          <div className="project-gallery__controls">
            <button type="button" className="icon-button" onClick={() => goTo(-1)} disabled={screenshots.length < 2} aria-label="Previous screenshot"><FiChevronLeft aria-hidden="true" /></button>
            <button type="button" className="icon-button" onClick={() => goTo(1)} disabled={screenshots.length < 2} aria-label="Next screenshot"><FiChevronRight aria-hidden="true" /></button>
          </div>
        </figcaption>
      </figure>

      {screenshots.length > 1 && (
        <div className="project-gallery__thumbnails" role="group" aria-label="Choose a screenshot">
          {screenshots.map((screenshot, index) => (
            <button
              type="button"
              key={screenshot.src}
              className="project-gallery__thumbnail"
              aria-pressed={selectedIndex === index}
              aria-label={`Show screenshot ${index + 1}: ${screenshot.caption}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={screenshot.src} alt="" loading="lazy" decoding="async" />
              <span>{screenshot.caption}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
