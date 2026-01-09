import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../assets/globalEffects.css";
import "./GateSection.css";

export default function GateSection() {
  const gateRef = useRef();
  const [open, setOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const [shake, setShake] = useState(false);

  // Entry animation: closed gate, organic textures, red light leaks
  useEffect(() => {
    gsap.fromTo(
      gateRef.current,
      { scale: 0.92, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out" }
    );
  }, []);

  // Heartbeat pulse
  useEffect(() => {
    if (!gateRef.current) return;
    const pulse = gsap.to(gateRef.current, {
      scale: 1.04,
      boxShadow: "0 0 32px 8px #e50914, 0 0 8px 2px #fff",
      duration: 0.7,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
    });
    return () => pulse.kill();
  }, []);

  // Shadow crawl/flicker
  useEffect(() => {
    if (!gateRef.current) return;
    const flicker = gsap.to(gateRef.current, {
      filter: "brightness(0.95) drop-shadow(0 0 18px #e50914)",
      duration: 0.18,
      yoyo: true,
      repeat: -1,
      ease: "steps(2)",
    });
    return () => flicker.kill();
  }, []);

  // Hover: open slightly, heartbeat sound (sound optional)
  const handleHover = () => setOpen(true);
  const handleOut = () => setOpen(false);

  // Click: flash, shake, open wider
  const handleClick = () => {
    setFlash(true);
    setShake(true);
    setOpen(true);
    setTimeout(() => setFlash(false), 180);
    setTimeout(() => setShake(false), 400);
  };

  return (
    <div className="gate-root cinematic-fade-in">
      <div
        className={`gate-portal${open ? " open" : ""}${flash ? " flash" : ""}${
          shake ? " shake" : ""
        }`}
        ref={gateRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleOut}
        onClick={handleClick}
      >
        <div className="gate-texture" />
        <div className="gate-light-leak" />
        <div className="gate-shadows" />
        <div className="gate-center-text stagger-fade-up">THE GATE</div>
      </div>
    </div>
  );
}
