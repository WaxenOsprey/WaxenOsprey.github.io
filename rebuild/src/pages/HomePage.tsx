import { Link } from 'react-router-dom';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { SkillsGallery } from '../components/SkillsGallery';
import { featuredProjects } from '../data/portfolio';

export function HomePage() {
  return (
    <>
      <section id="top" className="hero" aria-labelledby="home-title">
        <div className="eyebrow">01 / INTRODUCTION</div>
        <h1 id="home-title">Paul Cumming<span className="accent">.</span></h1>
        <p className="hero__tagline">Software Development<br /><span>&amp; Engineering.</span></p>
        <div className="hero__copy"><p>I'm a software engineering professional working primarily with C# and .NET, with experience spanning software development, QA automation and healthcare technology.</p><p>I enjoy solving problems, building maintainable applications and exploring software design through work and personal projects.</p></div>
        <Link className="hero__explore text-link" to="/#work">Explore my work <FiArrowDownRight aria-hidden="true" /></Link>
        <span className="hero__decoration" aria-hidden="true">&lt;/&gt;</span>
      </section>
      <section id="work" className="page-section" aria-labelledby="work-title">
        <div className="section-intro"><span className="eyebrow">02 / SELECTED WORK</span><h2 id="work-title">Things I've built<span className="accent">.</span></h2><p>Personal projects exploring application development, software architecture and integration.</p></div>
        <ProjectCarousel projects={featuredProjects} />
        <div className="section-outro"><Link to="/projects" className="text-link">Explore all projects <FiArrowUpRight aria-hidden="true" /></Link></div>
      </section>
      <section id="experience" className="page-section" aria-labelledby="experience-title">
        <div className="section-intro"><span className="eyebrow">03 / EXPERIENCE</span><h2 id="experience-title">Where I've worked<span className="accent">.</span></h2><p>My path into software engineering has taken me through several stages of the software lifecycle.</p></div>
        <ExperienceTimeline />
      </section>
      <section id="skills" className="page-section" aria-labelledby="skills-title">
        <div className="section-intro"><span className="eyebrow">04 / SKILLS &amp; TECHNOLOGIES</span><h2 id="skills-title">What I work with<span className="accent">.</span></h2><p>Tools and technologies I've used in professional development, QA and personal projects.</p></div>
        <SkillsGallery />
      </section>
      <section className="contact-prompt" aria-labelledby="contact-prompt-title"><span className="eyebrow">05 / GET IN TOUCH</span><div className="contact-prompt__row"><h2 id="contact-prompt-title">Interested in working together?</h2><Link to="/contact" className="button-link">Contact me <FiArrowUpRight aria-hidden="true" /></Link></div></section>
    </>
  );
}
