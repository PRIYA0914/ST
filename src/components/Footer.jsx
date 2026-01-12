import React from "react";
import "./Footer.css";

const pages = [
  { name: "Hawkins", key: "hawkins" },
  { name: "The Rift", key: "rift" },
  { name: "Wormhole", key: "wormhole" },
  { name: "Subject 011", key: "subject011" },
  { name: "The Gate", key: "gate" },
  { name: "Upside Down", key: "upside" },
];

function Footer({ onNavigate, onlyNav = false, className = "" }) {
  const nav = (
    <nav>
      <ul className="footer-pages">
        {pages.map((page) => (
          <li key={page.key}>
            <button
              onClick={() => onNavigate && onNavigate(page.key)}
              className="footer-link"
            >
              {page.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
  if (onlyNav) {
    return <div className={className}>{nav}</div>;
  }
  return (
    <footer className={`modern-footer expose-animate ${className}`}>
      {nav}
      <div className="footer-credit">
        &copy; {new Date().getFullYear()} Stranger Things Portal
      </div>
    </footer>
  );
}

export default Footer;
