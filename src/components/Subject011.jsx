import React from "react";
import "./Home/Home.css";

// 🧪 SUBJECT 011 SECTION
export default function Subject011() {
  const [glitch, setGlitch] = React.useState(false);
  // Glitch on hover
  const handleGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 400);
  };
  return (
    <div className="subject011-section section-bg">
      <div className="lab-bg" />
      <h1
        className={`main-title subject011-title${glitch ? " glitch" : ""}`}
        onMouseEnter={handleGlitch}
        tabIndex={0}
      >
        SUBJECT 011
      </h1>
      <div className="lab-effects">
        <div className="scanner-line" />
        <div className="classified-overlay">REDACTED</div>
        <div className="classified-overlay classified2">REDACTED</div>
        {/* Psychic pulse wave effect */}
        <div className="subject011-pulsewave">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="pulsewave-circle"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </div>
        <div className="subject011-particles">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="subject011-particle" />
          ))}
        </div>
      </div>
      <p className="section-desc">
        <span className="glitch-text">EXPERIMENTAL FILES</span>{" "}
        <span className="redacted">[REDACTED]</span>{" "}
        <span className="glitch-text">PSYCHIC SURGE</span>
      </p>
    </div>
  );
}
