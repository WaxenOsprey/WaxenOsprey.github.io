import type { ProjectVisualId } from '../data/portfolio';

/** CSS-constructed illustrations, not screenshots of live applications. */
export function ProjectVisual({ variant }: { variant: ProjectVisualId }) {
  if (variant === 'posterity') {
    return (
      <div className="project-visual project-visual--posterity" role="img" aria-label="Illustrative concept of Posterity's gaming media gallery">
        <div className="visual-window-bar"><span /><span /><span /><i>POSTERITY</i></div>
        <div className="posterity-grid">
          <div className="posterity-feature"><span className="posterity-orbit" /><div className="visual-feature-label">Your moments.<br />Your vaults.</div></div>
          <div className="posterity-tile posterity-tile--one"><span /></div>
          <div className="posterity-tile posterity-tile--two"><span /></div>
        </div>
        <span className="visual-disclaimer">ILLUSTRATIVE PREVIEW</span>
      </div>
    );
  }
  if (variant === 'overloader') {
    return (
      <div className="project-visual project-visual--overloader" role="img" aria-label="Illustrative concept of OverLoader's strength progression dashboard">
        <div className="visual-window-bar"><span /><span /><span /><i>OVERLOADER</i></div>
        <div className="overloader-content">
          <div className="overloader-overline">PROGRESSIVE OVERLOAD / STRENGTH</div>
          <div className="overloader-heading">Keep getting<br /><em>stronger.</em></div>
          <div className="overloader-chart" aria-hidden="true">
            {[28, 42, 37, 57, 50, 71, 66, 91].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
          </div>
          <div className="overloader-stats"><span>SETS</span><span>REPS</span><span>WEIGHT</span><span>PROGRESS</span></div>
        </div>
        <span className="visual-disclaimer">ILLUSTRATIVE PREVIEW</span>
      </div>
    );
  }
  if (variant === 'solar') return (
    <div className="project-visual project-visual--solar" role="img" aria-label="Illustration of planets and orbital rings for SolarSystem.DB">
      <div className="solar-orbit solar-orbit--outer"/><div className="solar-orbit solar-orbit--inner"/><div className="solar-planet"/><span className="visual-art-title">SOLAR SYSTEM.DB</span>
    </div>
  );
  if (variant === 'phoenix') return (
    <div className="project-visual project-visual--phoenix" role="img" aria-label="Illustrative financial market chart for PhoenixTrader">
      <span className="visual-art-title">PHOENIX / TRADER</span><div className="phoenix-line"/><div className="phoenix-bars">{[22, 36, 28, 48, 44, 60, 53, 83].map((h, i) => <span key={i} style={{height:`${h}%`}}/>)}</div>
    </div>
  );
  return (
    <div className="project-visual project-visual--gwentish" role="img" aria-label="Stylised fantasy game cards for Gwentish">
      <div className="gwent-card gwent-card--left">✦</div><div className="gwent-card gwent-card--center">G</div><div className="gwent-card gwent-card--right">✦</div>
    </div>
  );
}
