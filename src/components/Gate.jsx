import React, { useState } from "react";
import "./Home/Home.css";

// 🚪 THE GATE SECTION
export default function Gate() {
  const [shake, setShake] = useState(false);
  const [energy, setEnergy] = useState(false);

  // Subtle embers
  const embers = Array.from({ length: 24 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const size = 2 + Math.random() * 4;
    const opacity = 0.15 + Math.random() * 0.22;
    return (
      <div
        key={i}
        className="gate-ember"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          width: `${size}px`,
          height: `${size * 2.5}px`,
          opacity,
          background: `linear-gradient(180deg, #fffbe6 0%, #ff1a1a 100%)`,
          filter: `blur(${0.5 + Math.random()}px)`,
        }}
      />
    );
  });

  // Shake and energy pulse on click
  const handleTearClick = () => {
    setShake(true);
    setEnergy(true);
    setTimeout(() => setShake(false), 600);
    setTimeout(() => setEnergy(false), 1200);
  };

  return (
    <div className={`gate-section section-bg${shake ? " gate-shake" : ""}`}>
      <h1 className="main-title">THE GATE</h1>
      <div
        className="vertical-tear-container"
        onClick={handleTearClick}
        tabIndex={0}
        aria-label="Vertical tear interactive layer"
      >
        <svg
          className="vertical-tear-svg"
          width="120"
          height="420"
          viewBox="0 0 120 420"
          preserveAspectRatio="none"
        >
          <path
            className="tear-main"
            d="M60,0 Q70,80 50,140 Q90,200 60,240 Q80,300 55,340 Q75,370 60,420"
          />
        </svg>
        <div className={`gate-energy${energy ? " gate-energy-pulse" : ""}`} />
        <div className="gate-glow" />
        {/* Pulsing red lightning effect */}
        <svg
          className="gate-lightning"
          width="80"
          height="320"
          viewBox="0 0 80 320"
        >
          <polyline
            className="gate-lightning-bolt"
            points="40,0 50,60 30,120 60,180 40,240 70,300"
          />
        </svg>
        <div className="gate-embers">{embers}</div>
      </div>
      <p className="section-desc">
        A tall, unstable vertical tear pulses with red energy. Click the tear
        for a surge.
      </p>
    </div>
  );
}
