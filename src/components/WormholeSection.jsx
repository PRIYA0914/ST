import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../assets/globalEffects.css";
import "./WormholeSection.css";

export default function WormholeSection() {
  const vortexRef = useRef();
  const spiralRef = useRef();
  const particlesRef = useRef();
  const contentRef = useRef();
  const [blur, setBlur] = useState(true);

  // Entry animation: vortex rotate, fade in, radial blur
  useEffect(() => {
    gsap.fromTo(
      vortexRef.current,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out" }
    );
    setTimeout(() => setBlur(false), 1200);
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  // Spiral background slow rotation
  useEffect(() => {
    if (!spiralRef.current) return;
    gsap.to(spiralRef.current, {
      rotate: 360,
      duration: 38,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  // Falling particles inward
  useEffect(() => {
    if (!particlesRef.current) return;
    const nodes = particlesRef.current.children;
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];
      gsap.to(p, {
        y: "+=60",
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

  // Cursor/3D effect
  useEffect(() => {
    const handleMove = (e) => {
      if (!spiralRef.current || !contentRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      spiralRef.current.style.transform = `translate(-50%, -50%) rotateZ(0deg) scale(1.1) skewX(${
        -y * 6
      }deg) skewY(${x * 6}deg)`;
      contentRef.current.style.transform = `translateY(${
        -y * 12
      }px) translateX(${x * 12}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="wormhole-root cinematic-fade-in">
      <div className="wormhole-vortex" ref={vortexRef}>
        <div
          className={`wormhole-spiral${blur ? " wormhole-blur" : ""}`}
          ref={spiralRef}
        />
        <div className="wormhole-particles" ref={particlesRef}>
          {[...Array(18)].map((_, i) => (
            <div key={i} className="wormhole-particle" />
          ))}
        </div>
      </div>
      <div className="wormhole-content" ref={contentRef}>
        <h2 className="wormhole-title stagger-fade-up">Wormhole</h2>
        <p
          className="wormhole-desc stagger-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          The spiral spins, particles fall inward, and space bends around you...
        </p>
      </div>
    </div>
  );
}
