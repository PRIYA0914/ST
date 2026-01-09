import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../assets/globalEffects.css";
import "./LandingSection.css";

const STRANGER = "STRANGER";
const THINGS = "THINGS";

export default function LandingSection({ onEnter }) {
  const [show, setShow] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(false);
  const [fullWord, setFullWord] = useState(false);
  const [buttonFlash, setButtonFlash] = useState(false);
  const borderRef = useRef();
  const titleRef = useRef();
  const enterBtnRef = useRef();
  const [blackout, setBlackout] = useState(true);

  // Black screen, then red glow fade in
  useEffect(() => {
    setTimeout(() => {
      setBlackout(false);
      setShow(true);
    }, 800);
  }, []);

  // Animate STRANGER THINGS text letter by letter
  useEffect(() => {
    if (show) {
      setTimeout(() => setLettersVisible(true), 200);
      setTimeout(() => setFullWord(true), 1200);
    }
  }, [show]);

  // Neon border draw
  useEffect(() => {
    if (fullWord && borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { boxShadow: "none", borderColor: "#222" },
        {
          boxShadow:
            "0 0 24px 2px var(--color-neon-border) inset, 0 0 8px 2px var(--color-neon-border)",
          borderColor: "var(--color-neon-border)",
          duration: 1.1,
          ease: "power2.out",
        }
      );
    }
  }, [fullWord]);

  // Glow breathing loop
  useEffect(() => {
    if (titleRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl.to(titleRef.current, {
        filter: "drop-shadow(0 0 32px #e50914)",
        duration: 1.2,
        ease: "power2.inOut",
      }).to(titleRef.current, {
        filter: "drop-shadow(0 0 16px #e50914)",
        duration: 1.2,
        ease: "power2.inOut",
      });
      return () => tl.kill();
    }
  }, [fullWord]);

  // ENTER button flash and shake
  const handleEnter = () => {
    setButtonFlash(true);
    gsap.fromTo(
      ".landing-root",
      { x: 0 },
      {
        x: "+=16",
        yoyo: true,
        repeat: 3,
        duration: 0.08,
        ease: "power2.inOut",
        onComplete: () => {
          setButtonFlash(false);
          if (onEnter) onEnter();
        },
      }
    );
  };

  return (
    <div className="landing-root cinematic-fade-in">
      {blackout && <div className="landing-blackout" />}
      <div className="landing-fog fog-bg" />
      <div className="landing-center">
        <div
          className={`landing-title ${fullWord ? "breathing-glow" : ""}`}
          ref={titleRef}
        >
          <span className="landing-title-stranger">
            {[...STRANGER].map((l, i) => (
              <span
                key={i}
                className={`stagger-fade-up`}
                style={{
                  animationDelay: `${0.08 * i + 0.1}s`,
                  opacity: lettersVisible ? 1 : 0,
                  transform: lettersVisible
                    ? "translateY(0)"
                    : "translateY(18px)",
                }}
              >
                {l}
              </span>
            ))}
          </span>
          <br />
          <span className="landing-title-things">
            {[...THINGS].map((l, i) => (
              <span
                key={i}
                className={`stagger-fade-up`}
                style={{
                  animationDelay: `${0.08 * (i + 8) + 0.1}s`,
                  opacity: lettersVisible ? 1 : 0,
                  transform: lettersVisible
                    ? "translateY(0)"
                    : "translateY(18px)",
                }}
              >
                {l}
              </span>
            ))}
          </span>
        </div>
        <div
          className={`landing-border neon-border cinematic-transition${
            fullWord ? "" : " hide"
          }`}
          ref={borderRef}
        />
        <button
          ref={enterBtnRef}
          className={`landing-enter-btn breathing-glow cinematic-transition${
            buttonFlash ? " flash" : ""
          }`}
          onClick={handleEnter}
        >
          <span className="landing-enter-text">ENTER</span>
        </button>
      </div>
    </div>
  );
}
