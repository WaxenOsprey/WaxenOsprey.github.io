import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export function NotFoundPage() {
  return <div className="inner-page not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Nothing here<span className="accent">.</span></h1><p>This page doesn't exist. You can head back to the portfolio.</p><Link to="/" className="text-link"><FiArrowLeft aria-hidden="true" /> Return home</Link></div>;
}
