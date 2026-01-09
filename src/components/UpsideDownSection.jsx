import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../assets/globalEffects.css";
import "./UpsideDownSection.css";

export default function UpsideDownSection() {
  const fogRef = useRef();
  const sporesRef = useRef();
  const vinesRef = useRef();
  const dripsRef = useRef();
  const contentRef = useRef();
  const [flicker, setFlicker] = useState(false);
  const [jitter, setJitter] = useState(false);

  // Entry: invert, fog, fade in
  useEffect(() => {
    gsap.fromTo(
      ".upside-root",
      { filter: "invert(0.1) grayscale(0.2)" },
      {
        filter: "invert(0.18) grayscale(0.7)",
        duration: 1.2,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      fogRef.current,
      { opacity: 0 },
      { opacity: 0.7, duration: 1.2, delay: 0.2, ease: "power2.inOut" }
    );
  }, []);

  // Spores float upward
  useEffect(() => {
    if (!sporesRef.current) return;
    const nodes = sporesRef.current.children;
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];
      gsap.to(p, {
        y: "-=60",
        x: `+=${Math.random() * 40 - 20}`,
        opacity: 0.7 + Math.random() * 0.3,
        duration: 7 + Math.random() * 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 4,
      });
    }
  }, []);

  // Vines sway
  useEffect(() => {
    if (!vinesRef.current) return;
    const nodes = vinesRef.current.children;
    for (let i = 0; i < nodes.length; i++) {
      const v = nodes[i];
      gsap.to(v, {
        rotate: `+=${Math.random() * 8 - 4}`,
        duration: 6 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    }
  }, []);

  // Dripping particles
  useEffect(() => {
    if (!dripsRef.current) return;
    const nodes = dripsRef.current.children;
    for (let i = 0; i < nodes.length; i++) {
      const d = nodes[i];
      gsap.to(d, {
        y: "+=44",
        opacity: 0.7 + Math.random() * 0.3,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    }
  }, []);

  // Camera drift
  useEffect(() => {
    gsap.to(".upside-root", {
      x: "+=12",
      y: "+=8",
      duration: 12,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  // Flicker and text jitter
  useEffect(() => {
    let flickerTimeout;
    function doFlicker() {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 80);
      flickerTimeout = setTimeout(doFlicker, 4000 + Math.random() * 8000);
    }
    flickerTimeout = setTimeout(doFlicker, 2000);
    return () => clearTimeout(flickerTimeout);
  }, []);
  useEffect(() => {
    let jitterTimeout;
    function doJitter() {
      setJitter(true);
      setTimeout(() => setJitter(false), 60);
      jitterTimeout = setTimeout(doJitter, 3000 + Math.random() * 4000);
    }
    jitterTimeout = setTimeout(doJitter, 1200);
    return () => clearTimeout(jitterTimeout);
  }, []);

  // Cursor halo
  useEffect(() => {
    const handleMove = (e) => {
      const halo = document.getElementById("upside-cursor-halo");
      if (halo) {
        halo.style.left = `${e.clientX - 24}px`;
        halo.style.top = `${e.clientY - 24}px`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Hover: background distort
  const handleHover = () => {
    if (fogRef.current)
      fogRef.current.style.filter = "blur(8px) brightness(1.2)";
  };
  const handleOut = () => {
    if (fogRef.current) fogRef.current.style.filter = "";
  };

  return (
    <div
      className={`upside-root cinematic-fade-in${
        flicker ? " upside-flicker" : ""
      }`}
    >
      <div className="upside-fog" ref={fogRef} />
      <div className="upside-spores" ref={sporesRef}>
        {[...Array(14)].map((_, i) => (
          <div key={i} className="upside-spore" />
        ))}
      </div>
      <div className="upside-vines" ref={vinesRef}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="upside-vine" />
        ))}
      </div>
      <div className="upside-drips" ref={dripsRef}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="upside-drip" />
        ))}
      </div>
      <div id="upside-cursor-halo" className="upside-cursor-halo" />
      <div
        className={`upside-content${jitter ? " upside-jitter" : ""}`}
        ref={contentRef}
      >
        <h2
          className="upside-title stagger-fade-up"
          onMouseEnter={handleHover}
          onMouseLeave={handleOut}
        >
          The Upside Down
        </h2>
        <p
          className="upside-desc stagger-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Colors desaturate, fog fills the air, and nothing feels safe...
        </p>
      </div>
    </div>
  );
}
