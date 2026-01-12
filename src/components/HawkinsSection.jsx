import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../assets/globalEffects.css";
import "./HawkinsSection.css";
// import dustVideo from "../assets/vecteezy_dust-particle-bokeh-abstract-on-black-background_2043153.mov";
// import HawkinsParticles from "./HawkinsParticles";

const HawkinsSection = () => {
  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const streetlightRef = useRef(null);

  const hawkinsArt =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

  useEffect(() => {
    // Fade in background and foreground
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

  // No streetlight flicker for calm Hawkins

  // Hover underline glow on text
  const handleTextHover = (e) => {
    e.target.classList.add("text-glow");
  };
  const handleTextOut = (e) => {
    e.target.classList.remove("text-glow");
  };

  return (
    <div className="hawkins-root">
      {/* Removed video background */}
      {/* Overlay for contrast */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(10,10,20,0.55)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        className="hawkins-bg"
        ref={bgRef}
        style={{ position: "relative", zIndex: 2 }}
      >
        <img src={hawkinsArt} alt="Hawkins Art" className="hawkins-art-img" />
      </div>
      {/* No fog for Hawkins */}
      <div
        className="hawkins-fg content-container"
        ref={fgRef}
        style={{ position: "relative", zIndex: 3 }}
      >
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
};

export default HawkinsSection;
