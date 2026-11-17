import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export function ContactPage() {
  return (
    <div className="inner-page contact-page"><header className="inner-page__header"><p className="eyebrow">CONTACT / GET IN TOUCH</p><h1>Let's talk<span className="accent">.</span></h1><p>I'm always happy to discuss software development, engineering opportunities and interesting projects.</p></header>
      <div className="contact-methods"><a href="mailto:paulsamuelcummingdev@gmail.com" className="contact-method"><span><FiMail aria-hidden="true" /> Email</span><strong>paulsamuelcummingdev@gmail.com</strong><FiArrowUpRight aria-hidden="true" /></a><a href="https://www.linkedin.com/in/paulsamuelcummingdev/" target="_blank" rel="noreferrer" className="contact-method"><span><FiLinkedin aria-hidden="true" /> LinkedIn</span><strong>Connect with me</strong><FiArrowUpRight aria-hidden="true" /></a><a href="https://github.com/WaxenOsprey" target="_blank" rel="noreferrer" className="contact-method"><span><FiGithub aria-hidden="true" /> GitHub</span><strong>Explore the code</strong><FiArrowUpRight aria-hidden="true" /></a></div>
      <p className="contact-location">Based in Scotland, United Kingdom.</p>
    </div>
  );
}
