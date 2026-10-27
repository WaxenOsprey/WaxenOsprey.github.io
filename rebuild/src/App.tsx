import { ProjectCarousel } from './components/ProjectCarousel';
import { experience, featuredProjects, skillGroups } from './data/portfolio';

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top">PORTFOLIO</a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
        </nav>
      </header>
      <main id="top">
        <section className="section hero" aria-labelledby="intro-title">
          <p className="eyebrow">01 / INTRODUCTION</p>
          <h1 id="intro-title">Paul Cumming<span className="accent">.</span></h1>
          <h2>Software Development &amp; Engineering.</h2>
          <p className="intro">I'm a software engineering professional working primarily with C# and .NET, with experience across development, QA automation and healthcare technology.</p>
          <a className="section-link" href="#work">Explore my work ↓</a>
        </section>
        <section id="work" className="section" aria-labelledby="work-title">
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2 id="work-title">Selected projects</h2>
          <ProjectCarousel projects={featuredProjects} />
        </section>
        <section id="experience" className="section" aria-labelledby="experience-title">
          <p className="eyebrow">03 / EXPERIENCE</p>
          <h2 id="experience-title">Experience</h2>
          <ol className="timeline">
            {experience.map(role => (
              <li key={role.id}>
                <div className="role-heading"><h3>{role.title}</h3><span>{role.start} – {role.end}</span></div>
                <p className="muted">{role.company}</p>
                <p>{role.summary}</p>
              </li>
            ))}
          </ol>
        </section>
        <section id="skills" className="section" aria-labelledby="skills-title">
          <p className="eyebrow">04 / SKILLS &amp; TECHNOLOGIES</p>
          <h2 id="skills-title">Skills &amp; technologies</h2>
          <div className="skills-grid">
            {skillGroups.map(group => (
              <div key={group.category}><h3>{group.category}</h3><p>{group.items.join(' · ')}</p></div>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Paul Cumming</span><a href="https://github.com/WaxenOsprey" target="_blank" rel="noopener noreferrer">GitHub ↗</a></footer>
    </>
  );
}

export default App;
