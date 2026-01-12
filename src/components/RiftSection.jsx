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

  // Crack pulse (unstable, irregular)
  useEffect(() => {
    if (!crackActive) return;
    let running = true;
    function pulse() {
      if (!running) return;
      const duration = 0.18 + Math.random() * 0.32;
      gsap.to(".rift-crack", {
        filter: "drop-shadow(0 0 18px #e50914)",
        stroke: "#ff003c",
        duration,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
        stagger: 0.07,
        onComplete: () => {
          if (running) setTimeout(pulse, 80 + Math.random() * 180);
        },
      });
    }
    pulse();
    return () => {
      running = false;
    };
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

  // Stronger, erratic screen shake
  useEffect(() => {
    if (!riftRootRef.current) return;
    let running = true;
    function shake() {
      if (!running) return;
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 12;
      gsap.to(riftRootRef.current, {
        x,
        y,
        duration: 0.09 + Math.random() * 0.09,
        ease: "power1.inOut",
        onComplete: shake,
      });
    }
    shake();
    return () => {
      running = false;
    };
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
        width="540"
        height="340"
        viewBox="0 0 540 340"
      >
        {/* Main jagged diagonal crack */}
        <path
          className="rift-crack"
          d="M60 300 Q180 120 270 170 Q340 220 480 40"
          stroke="#e50914"
          strokeWidth="5"
          fill="none"
          strokeDasharray="260"
          strokeDashoffset="260"
          onMouseEnter={handleCrackHover}
          onMouseLeave={handleCrackOut}
          onClick={handleCrackClick}
        />
        {/* Branching cracks */}
        <path
          className="rift-crack"
          d="M270 170 Q320 120 400 110"
          stroke="#e50914"
          strokeWidth="3"
          fill="none"
          strokeDasharray="90"
          strokeDashoffset="90"
          onMouseEnter={handleCrackHover}
          onMouseLeave={handleCrackOut}
          onClick={handleCrackClick}
        />
        <path
          className="rift-crack"
          d="M270 170 Q220 220 120 260"
          stroke="#e50914"
          strokeWidth="3"
          fill="none"
          strokeDasharray="110"
          strokeDashoffset="110"
          onMouseEnter={handleCrackHover}
          onMouseLeave={handleCrackOut}
          onClick={handleCrackClick}
        />
        <path
          className="rift-crack"
          d="M320 80 Q350 60 420 30"
          stroke="#e50914"
          strokeWidth="2"
          fill="none"
          strokeDasharray="60"
          strokeDashoffset="60"
          onMouseEnter={handleCrackHover}
          onMouseLeave={handleCrackOut}
          onClick={handleCrackClick}
        />
      </svg>
      <div className={`rift-shockwave${shockwave ? " active" : ""}`} />
      <div className="rift-content neon-border floating-content">
        <h2 className="rift-title stagger-fade-up">The Rift</h2>
        <p
          className="rift-desc stagger-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="rift-highlight">Reality is tearing apart.</span>{" "}
          Violent cracks rip through space,{" "}
          <span className="rift-highlight">red light spills out</span>, and the
          world shudders in protest.
        </p>
      </div>
    </div>
  );
}
