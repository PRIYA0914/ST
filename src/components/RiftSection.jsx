import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../assets/globalEffects.css";
import "./RiftSection.css";

export default function RiftSection() {
  const [crackActive, setCrackActive] = useState(false);
  const [shockwave, setShockwave] = useState(false);
  const cracksRef = useRef();
  const mistRef = useRef();
  const riftRootRef = useRef();

  // Entry animation: darken, draw cracks
  useEffect(() => {
    gsap.fromTo(
      riftRootRef.current,
      { background: "#181c22" },
      { background: "#120a0e", duration: 1.2, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".rift-crack",
      { strokeDashoffset: 180 },
      {
        strokeDashoffset: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: "expo.out",
        onComplete: () => setCrackActive(true),
      }
    );
  }, []);

  // Crack pulse (vein effect)
  useEffect(() => {
    if (!crackActive) return;
    const pulse = gsap.to(".rift-crack", {
      filter: "drop-shadow(0 0 12px #e50914)",
      stroke: "#e50914",
      duration: 0.7,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
      stagger: 0.1,
    });
    return () => pulse.kill();
  }, [crackActive]);

  // Red mist drift
  useEffect(() => {
    if (!mistRef.current) return;
    gsap.to(mistRef.current, {
      x: 30,
      y: -20,
      opacity: 0.5,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  // Subtle vibration
  useEffect(() => {
    if (!riftRootRef.current) return;
    const vibrate = gsap.to(riftRootRef.current, {
      x: "+=1",
      yoyo: true,
      repeat: -1,
      duration: 0.08,
      ease: "sine.inOut",
    });
    return () => vibrate.kill();
  }, []);

  // Crack hover/click
  const handleCrackHover = (e) => {
    e.target.classList.add("crack-glow");
  };
  const handleCrackOut = (e) => {
    e.target.classList.remove("crack-glow");
  };
  const handleCrackClick = (e) => {
    setShockwave(true);
    setTimeout(() => setShockwave(false), 350);
  };

  return (
    <div className="rift-root cinematic-fade-in" ref={riftRootRef}>
      <div className="rift-mist" ref={mistRef} />
      <svg
        className="rift-cracks"
        ref={cracksRef}
        width="520"
        height="320"
        viewBox="0 0 520 320"
      >
        <path
          className="rift-crack"
          d="M80 160 Q180 120 260 160 Q340 200 440 160"
          stroke="#a00"
          strokeWidth="4"
          fill="none"
          strokeDasharray="180"
          strokeDashoffset="180"
          onMouseEnter={handleCrackHover}
          onMouseLeave={handleCrackOut}
          onClick={handleCrackClick}
        />
        <path
          className="rift-crack"
          d="M260 160 Q270 100 320 80"
          stroke="#a00"
          strokeWidth="3"
          fill="none"
          strokeDasharray="80"
          strokeDashoffset="80"
          onMouseEnter={handleCrackHover}
          onMouseLeave={handleCrackOut}
          onClick={handleCrackClick}
        />
        <path
          className="rift-crack"
          d="M260 160 Q250 220 200 240"
          stroke="#a00"
          strokeWidth="3"
          fill="none"
          strokeDasharray="80"
          strokeDashoffset="80"
          onMouseEnter={handleCrackHover}
          onMouseLeave={handleCrackOut}
          onClick={handleCrackClick}
        />
      </svg>
      <div className={`rift-shockwave${shockwave ? " active" : ""}`} />
      <div className="rift-content">
        <h2 className="rift-title stagger-fade-up">The Rift</h2>
        <p
          className="rift-desc stagger-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Reality is breaking. Red cracks pulse, mist leaks, and the world
          vibrates...
        </p>
      </div>
    </div>
  );
}
