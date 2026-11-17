import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export function AboutPage() {
  return (
    <div className="inner-page about-page">
      <header className="inner-page__header"><p className="eyebrow">ABOUT / BACKGROUND</p><h1>About me<span className="accent">.</span></h1><p>Software engineering, curiosity and a career built on learning.</p></header>
      <div className="about-layout"><div className="about-page__intro"><h2>A different route into software.</h2><p>I work in healthcare technology, primarily with C# and .NET. My career has spanned technical support, implementation scripting, automated testing and increasingly software development.</p><p>I've found that understanding how software is used, how it fails and how it can be improved is an important part of engineering reliable systems.</p></div>
      <div className="about-page__aside"><span className="eyebrow">A LITTLE CONTEXT</span><div className="about-aside-line"><span>Based</span><strong>Scotland, United Kingdom</strong></div><div className="about-aside-line"><span>In technology since</span><strong>2023</strong></div><div className="about-aside-line"><span>Primary stack</span><strong>C# / .NET</strong></div></div></div>
      <section className="about-story"><h2>Before software</h2><p>Before entering the industry, I studied History and worked in heritage and tourism, including at Edinburgh Castle. I've always enjoyed understanding complex systems, investigating evidence and learning how things work.</p><p>I eventually decided to pursue a long-standing interest in computing professionally, completing CodeClan's Professional Software Development course in 2023. It gave me a foundation in object-oriented programming, full-stack application development, testing and collaborative delivery.</p><p>Outside work I continue to build my own projects, particularly applications that let me explore architecture, APIs, authentication and real-world integrations. I also enjoy history, music, gaming and exploring places with interesting heritage.</p></section>
      <section className="about-next"><span className="eyebrow">KEEP EXPLORING</span><h2>Interested in the technical details?</h2><div className="about-next__links"><Link to="/projects" className="text-link">See my projects <FiArrowUpRight aria-hidden="true" /></Link><Link to="/experience" className="text-link">Explore my experience <FiArrowUpRight aria-hidden="true" /></Link></div></section>
    </div>
  );
}
