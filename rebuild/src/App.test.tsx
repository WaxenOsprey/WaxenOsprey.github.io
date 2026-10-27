import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Portfolio homepage', () => {
  it('shows the introduction and primary navigation landmarks', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /Paul Cumming/i })).toBeInTheDocument();
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    expect(within(nav).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    expect(within(nav).getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(within(nav).getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
  });

  it('renders featured projects, experience timeline and categorised skills', () => {
    render(<App />);

    const gallery = screen.getByRole('region', { name: 'Featured projects' });
    expect(within(gallery).getAllByRole('article')).toHaveLength(2);
    expect(within(gallery).getByRole('heading', { name: 'Posterity' })).toBeInTheDocument();
    expect(within(gallery).getByRole('heading', { name: 'OverLoader' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous project' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next project' })).toBeInTheDocument();

    const timeline = screen.getByRole('list');
    expect(within(timeline).getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByRole('heading', { name: 'Backend' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Frontend' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Data' })).toBeInTheDocument();
  });
});
