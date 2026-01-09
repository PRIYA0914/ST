import React, { useEffect, useRef, useState } from "react";
import "./Home/Home.css";

// ⚫ UPSIDE DOWN SECTION
export default function UpsideDown() {
  const [gravity, setGravity] = useState(false);
  const ashRef = useRef([]);
  const [flicker, setFlicker] = useState(false);

  // Gravity distortion on mount and on interaction
  useEffect(() => {
    setGravity(true);
    setTimeout(() => setGravity(false), 1200);
  }, []);
  const triggerGravity = () => {
    if (!gravity) {
      setGravity(true);
      setTimeout(() => setGravity(false), 1200);
    }
  };

  // Flicker dripping text
  useEffect(() => {
    const interval = setInterval(() => setFlicker((f) => !f), 1800);
    return () => clearInterval(interval);
  }, []);

  // Generate random ash positions, size, opacity
  const ashParticles = Array.from({ length: 160 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 6;
    const size = 2 + Math.random() * 7;
    const opacity = 0.25 + Math.random() * 0.7;
    return (
      <div
        key={i}
        className="ash-particle"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          width: `${size}px`,
          height: `${size * (2.5 + Math.random() * 2.5)}px`,
          opacity,
          background: `linear-gradient(180deg, #fff ${
            Math.random() * 40
          }%, #ff1a1a 100%)`,
          filter: `blur(${0.5 + Math.random()}px)`,
        }}
        ref={(el) => (ashRef.current[i] = el)}
      />
    );
  });

  return (
    <div
      className={`upsidedown-section section-bg${
        gravity ? " gravity-pull" : ""
      }`}
      onClick={triggerGravity}
      onMouseEnter={triggerGravity}
      tabIndex={0}
      aria-label="Upside Down interactive layer"
    >
      <div className="red-fog intensified" />
      <div className="ash-fall">{ashParticles}</div>
      {/* Writhing vine tendrils effect */}
      <div className="upside-vines">
        {Array.from({ length: 7 }).map((_, i) => (
          <svg
            key={i}
            className="upside-vine"
            width="80"
            height="320"
            viewBox="0 0 80 320"
          >
            <path
              className="upside-vine-path"
              d={`M${10 + i * 10},0 Q${20 + i * 8},80 ${30 + i * 6},160 Q${
                20 + i * 12
              },240 ${40 + i * 5},320`}
            />
          </svg>
        ))}
      </div>
      <div className="upside-texture" />
      <h1 className={`main-title dripping-text${flicker ? " flicker" : ""}`}>
        {"UPSIDE DOWN".split("").map((ch, i) => (
          <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
        ))}
      </h1>
      <p className="section-desc">
        <span className={`dripping-text${flicker ? " flicker" : ""}`}>
          INVERTED REALITY
        </span>
        <span className="ash-desc">
          — Ash falls, red fog swirls, and gravity feels wrong.
        </span>
      </p>
    </div>
  );
}
