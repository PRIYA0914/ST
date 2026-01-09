import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../assets/globalEffects.css";
import "./HawkinsSection.css";

export default function HawkinsSection() {
  const bgRef = useRef();
  const fgRef = useRef();
  const fogRef = useRef();
  const dustRef = useRef();
  const streetlightRef = useRef();

  // Cinematic fade-in
  useEffect(() => {
    gsap.fromTo(
      fgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.6, ease: "power2.inOut" }
    );
    gsap.fromTo(
      bgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2.2, ease: "power2.inOut", delay: 0.2 }
    );
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (bgRef.current && fgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.18}px)`;
        fgRef.current.style.transform = `translateY(${y * 0.32}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Streetlight flicker
  useEffect(() => {
    let flickerTimeout;
    function randomFlicker() {
      if (!streetlightRef.current) return;
      streetlightRef.current.classList.add("flicker");
      setTimeout(() => {
        if (streetlightRef.current)
          streetlightRef.current.classList.remove("flicker");
        flickerTimeout = setTimeout(randomFlicker, 4000 + Math.random() * 9000);
      }, 180);
    }
    flickerTimeout = setTimeout(randomFlicker, 3000);
    return () => clearTimeout(flickerTimeout);
  }, []);

  // Dust particles floating
  useEffect(() => {
    if (!dustRef.current) return;
    const dust = dustRef.current.children;
    for (let i = 0; i < dust.length; i++) {
      const d = dust[i];
      gsap.to(d, {
        y: `-=${10 + Math.random() * 20}`,
        x: `+=${Math.random() * 40 - 20}`,
        opacity: 0.7 + Math.random() * 0.3,
        duration: 6 + Math.random() * 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 4,
      });
    }
  }, []);

  // Hover underline glow on text
  const handleTextHover = (e) => {
    e.target.classList.add("text-glow");
  };
  const handleTextOut = (e) => {
    e.target.classList.remove("text-glow");
  };

  return (
    <div className="hawkins-root">
      <div className="hawkins-bg" ref={bgRef} />
      <div className="hawkins-fog fog-bg" ref={fogRef} />
      <div className="hawkins-dust" ref={dustRef}>
        {[...Array(18)].map((_, i) => (
          <div key={i} className="hawkins-dust-particle" />
        ))}
      </div>
      <div className="hawkins-fg" ref={fgRef}>
        <h1
          className="hawkins-title stagger-fade-up"
          onMouseEnter={handleTextHover}
          onMouseLeave={handleTextOut}
        >
          Welcome to Hawkins
        </h1>
        <div className="hawkins-streetlight" ref={streetlightRef}>
          <div className="hawkins-streetlight-glow" />
        </div>
        <p
          className="hawkins-desc stagger-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          A quiet town. Or so it seems...
        </p>
      </div>
    </div>
  );
}
