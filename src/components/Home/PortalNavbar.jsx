export default function PortalNavbar({ onPortalClick }) {
  return (
    <nav className="portal-navbar">
      <div className="nav-half normal">
        <span className="nav-item">NORMAL</span>
      </div>

      <div className="nav-portal" onClick={onPortalClick}>
        <div className="portal-orb" />
      </div>

      <div className="nav-half upside">
        <span className="nav-item">UPSIDE DOWN</span>
      </div>
    </nav>
  );
}
