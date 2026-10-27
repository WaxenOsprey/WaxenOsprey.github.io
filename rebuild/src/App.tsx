const experience = [
  { id: 'development', title: 'Software Development & QA', dates: 'Mar 2025 – Present', summary: 'Developing and modernising healthcare applications with C# and .NET, supported by experience in automated testing.' },
  { id: 'implementation', title: 'Scripting & Integration', dates: 'Nov 2024 – Mar 2025', summary: 'Building and supporting scripting solutions and integrations for healthcare customers.' },
  { id: 'support', title: 'Technical Support', dates: 'Oct 2023 – Nov 2024', summary: 'Investigating software issues and collaborating with engineering teams.' },
] as const;

const skills = [
  { category: 'Backend', items: ['C#', '.NET', 'REST APIs'] },
  { category: 'Frontend', items: ['Angular', 'React', 'TypeScript'] },
  { category: 'Data', items: ['PostgreSQL', 'SQL', 'Cosmos DB'] },
  { category: 'Testing & Delivery', items: ['NUnit', 'Git', 'Azure'] },
] as const;

const projects = [
  { name: 'Posterity', stack: '.NET · Angular · PostgreSQL', description: 'Gaming media platform with a Clean Architecture backend.' },
  { name: 'OverLoader', stack: 'C# · Garmin · PostgreSQL', description: 'Strength-training progress tracker with Garmin workout integration.' },
] as const;

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
          <h2>Software Development & Engineering.</h2>
          <p className="intro">I'm a software engineering professional working primarily with C# and .NET, with experience across development, QA automation and healthcare technology.</p>
          <a className="section-link" href="#work">Explore my work ↓</a>
        </section>
        <section id="work" className="section" aria-labelledby="work-title">
          <p className="eyebrow">02 / SELECTED WORK</p>
          <div className="section-heading"><h2 id="work-title">Selected projects</h2></div>
          <div className="project-gallery" aria-label="Featured projects">
            {projects.map(project => (
              <article className="project" key={project.name}>
                <div className="project-preview" aria-hidden="true">Project preview</div>
                <h3>{project.name}</h3>
                <p className="stack">{project.stack}</p>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="section" aria-labelledby="experience-title">
          <p className="eyebrow">03 / EXPERIENCE</p>
          <h2 id="experience-title">Experience</h2>
          <ol className="timeline">
            {experience.map(role => (
              <li key={role.id}>
                <div className="role-heading"><h3>{role.title}</h3><span>{role.dates}</span></div>
                <p className="muted">The Craneware Group</p>
                <p>{role.summary}</p>
              </li>
            ))}
          </ol>
        </section>
        <section id="skills" className="section" aria-labelledby="skills-title">
          <p className="eyebrow">04 / SKILLS & TECHNOLOGIES</p>
          <h2 id="skills-title">Skills & technologies</h2>
          <div className="skills-grid">
            {skills.map(group => (
              <div key={group.category}><h3>{group.category}</h3><p>{group.items.join(' · ')}</p></div>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Paul Cumming</span><a href="https://github.com/WaxenOsprey">GitHub ↗</a></footer>
    </>
  );
}

export default App;
