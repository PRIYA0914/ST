import React from "react";
import "./Home/Home.css";

// 🔴 THE RIFT SECTION

export default function Rift() {
  // Pulse ripple state
  const [ripples, setRipples] = React.useState([]);
  const [shake, setShake] = React.useState(false);

  // Add a ripple at mouse position
  const handleCrackClick = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    // Randomize ripple color for tension
    const colors = ["#ff1a1a99", "#b30000cc", "#ff3b3b88", "#ff1a1a55"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    setRipples((prev) => [
      ...prev,
      { x, y, color, id: Date.now() + Math.random() },
    ]);
    setShake(true);
    setTimeout(() => setShake(false), 400);
    setTimeout(() => setRipples((prev) => prev.slice(1)), 900);
  };

  // Subtle embers
  const embers = Array.from({ length: 32 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 7;
    const size = 2 + Math.random() * 4;
    const opacity = 0.18 + Math.random() * 0.25;
    return (
      <div
        key={i}
        className="rift-ember"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          width: `${size}px`,
          height: `${size * 2.5}px`,
          opacity,
          background: `linear-gradient(180deg, #ffb199 0%, #ff1a1a 100%)`,
          filter: `blur(${0.5 + Math.random()}px)`,
        }}
      />
    );
  });

  return (
    <div className={`rift-section section-bg${shake ? " rift-shake" : ""}`}>
      <h1 className="main-title">THE RIFT</h1>
      {/* Dimensional distortion shimmer */}
      <div className="rift-distortion" />
      {/* Animated cracks and mist */}
      <div
        className="cracks-veil"
        onClick={handleCrackClick}
        tabIndex={0}
        aria-label="Cracks interactive layer"
      >
        {/* SVG cracks - more organic */}
        <svg
          className="cracks-svg"
          width="100%"
          height="100%"
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
        >
          <path
            className="crack-main"
            d="M400,0 Q420,80 380,140 Q440,200 400,240 Q420,300 390,340 Q410,370 400,400"
          />
          <path className="crack-vein" d="M400,140 Q370,180 390,220" />
          <path className="crack-vein" d="M400,140 Q430,190 410,230" />
          <path className="crack-vein" d="M400,240 Q370,280 390,320" />
          <path className="crack-vein" d="M400,240 Q430,290 410,330" />
        </svg>
        {/* Red mist overlay - more intense */}
        <div className="rift-mist rift-mist-intense" />
        {/* Subtle embers */}
        <div className="rift-embers">{embers}</div>
        {/* Ripples on click */}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="rift-ripple"
            style={{
              left: r.x,
              top: r.y,
              background: `radial-gradient(circle, ${r.color} 0%, transparent 80%)`,
            }}
          />
        ))}
      </div>
      <p className="section-desc">
        Reality is breaking. Red cracks widen and pulse. Hover to intensify the
        glow. Click to pulse the rift.
      </p>
    </div>
  );
}
