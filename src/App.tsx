import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectPage } from './pages/ProjectPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const labels: Record<string, string> = {
      '/': 'Software Engineering', '/projects': 'Projects', '/experience': 'Experience',
      '/about': 'About', '/contact': 'Contact',
    };
    document.title = `${labels[pathname] || 'Project'} | Paul Cumming`;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <PageTitle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
