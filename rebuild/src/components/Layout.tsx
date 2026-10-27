import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';

const navigation = [
  { label: 'Work', to: '/#work' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Skills', to: '/#skills' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }));
    } else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  useEffect(() => { setMenuOpen(false); }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header page-container">
        <Link to="/" className="brand" aria-label="Portfolio home">PORTFOLIO<span>.</span></Link>
        <button className="mobile-menu-toggle icon-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`} aria-label="Primary navigation">
          {navigation.map(item => <Link key={item.to} to={item.to} className={pathname === item.to && !hash ? 'nav-active' : ''}>{item.label}</Link>)}
          <a className="nav-cv" href="mailto:paulsamuelcummingdev@gmail.com?subject=CV%20request" title="Request an up-to-date CV">Request CV <FiArrowUpRight aria-hidden="true" /></a>
        </nav>
      </header>
      <ScrollManager />
      <main id="main" className="page-container">{children}</main>
      <footer className="site-footer page-container">
        <div><span className="footer-name">Paul Cumming</span><span>Software Engineering · Scotland, UK</span></div>
        <div className="footer-links" aria-label="Social links">
          <a href="https://github.com/WaxenOsprey" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/paulsamuelcummingdev/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FiLinkedin /></a>
          <a href="mailto:paulsamuelcummingdev@gmail.com" aria-label="Email Paul"><FiMail /></a>
        </div>
        <small>© {new Date().getFullYear()} Paul Cumming</small>
      </footer>
    </>
  );
}
