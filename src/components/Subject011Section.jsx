import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../assets/globalEffects.css";
import "./Subject011Section.css";

const lines = [
  "SUBJECT: 011",
  "STATUS: UNKNOWN",
  "EXPERIMENT: SENSORY DEPRIVATION",
  "RESULT: ████████",
  "NOTES: ANOMALOUS ACTIVITY DETECTED",
];

export default function Subject011Section() {
  const [crtOn, setCrtOn] = useState(false);
  const [showLines, setShowLines] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [showRedacted, setShowRedacted] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const contentRef = useRef();
  const scannerRef = useRef();

  // CRT flicker entry
  useEffect(() => {
    setTimeout(() => setCrtOn(true), 120);
    setTimeout(() => setShowLines([true, false, false, false, false]), 400);
    setTimeout(() => setShowLines([true, true, false, false, false]), 700);
    setTimeout(() => setShowLines([true, true, true, false, false]), 1000);
    setTimeout(() => setShowLines([true, true, true, true, false]), 1300);
    setTimeout(() => setShowLines([true, true, true, true, true]), 1600);
    setTimeout(() => setShowRedacted(true), 1800);
  }, []);

  // Scanner lines
  useEffect(() => {
    if (!scannerRef.current) return;
    gsap.to(scannerRef.current, {
      y: 320,
      duration: 2.2,
      repeat: -1,
      ease: "linear",
      yoyo: false,
      delay: 0.2,
    });
  }, []);

  // Random glitch flashes
  useEffect(() => {
    let glitchTimeout;
    function doGlitch() {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120 + Math.random() * 80);
      glitchTimeout = setTimeout(doGlitch, 2200 + Math.random() * 3000);
    }
    glitchTimeout = setTimeout(doGlitch, 1800);
    return () => clearTimeout(glitchTimeout);
  }, []);

  // Hover glitch on text
  const handleTextHover = (e) => {
    e.target.classList.add("text-glitch");
    setTimeout(() => e.target.classList.remove("text-glitch"), 220);
  };

  return (
    <div
      className={`subject011-root cinematic-fade-in${crtOn ? " crt-on" : ""}${
        glitch ? " glitch" : ""
      }`}
    >
      <div className="subject011-scanner" ref={scannerRef} />
      <div className="subject011-static" />
      <div className="subject011-content" ref={contentRef}>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`subject011-line stagger-fade-up${
              showLines[i] ? " show" : ""
            }`}
            style={{ animationDelay: `${0.12 * i + 0.2}s` }}
            onMouseEnter={handleTextHover}
          >
            {line.includes("█") && showRedacted ? (
              <span className="redacted-bar">REDACTED</span>
            ) : (
              line
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
