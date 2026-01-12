// import AlphabetWall from "../AlphabetWall/AlphabetWall";
// import PortalNavbar from "./PortalNavbar";
import "./Home.css";

import React, { useRef, useState } from "react";
import WormholeNavbar from "./WormholeNavbar";

function Home({ onEnterHawkins, mode, WormholeNavbarProps }) {
  const audioRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [shake, setShake] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setAudioError(true));
      }
    }
    setShake(true);
    setTimeout(() => {
      setShake(false);
      setEntered(true);
      if (onEnterHawkins) {
        setTimeout(() => {
          onEnterHawkins();
        }, 500);
      }
    }, 700); // shake duration
  };

  return (
    <div className={`home modern-home${shake ? " shake" : ""}`}>
      {/* Modern hero section */}
      {!entered && (
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="main-title">STRANGER THINGS</h1>
            <p className="subtitle">Welcome to Hawkins. Enter if you dare...</p>
            <button className="enter-btn cinematic" onClick={handleEnter}>
              ENTER
            </button>
            {audioError && (
              <div className="audio-error">
                🔇 Music could not be played automatically. Please check your
                browser settings.
              </div>
            )}
          </div>
          <div className="hero-glow-frame">
            <div className="vertical-seam" />
          </div>
        </section>
      )}
      {entered && WormholeNavbarProps && (
        <WormholeNavbar {...WormholeNavbarProps} />
      )}
      {/* Hawkins section effects */}
      {entered && mode === "hawkins" && (
        <>
          <div className="hawkins-fog" />
          <div className="hawkins-dust">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="hawkins-dust-particle" />
            ))}
          </div>
          <div className="hawkins-streetlight">
            <div className="light-pole" />
            <div className="light-glow" />
          </div>
          {/* Animated lightning effect */}
          <div className="hawkins-lightning">
            {Array.from({ length: 2 }).map((_, i) => (
              <svg
                key={i}
                className="lightning-svg"
                width="120"
                height="320"
                viewBox="0 0 120 320"
              >
                <polyline
                  className="lightning-bolt"
                  points="60,0 70,60 50,120 80,180 60,240 90,300"
                />
              </svg>
            ))}
          </div>
        </>
      )}
      {/* Wormhole section effects */}
      {entered && mode === "wormhole" && (
        <>
          <div className="wormhole-vortex">
            <div className="wormhole-spiral" />
            <div className="wormhole-spiral wormhole-spiral2" />
            <div className="wormhole-gravity" />
            <div className="wormhole-distort" />
            {/* Swirling portal ring effect */}
            <div className="wormhole-portal-ring" />
            <div className="wormhole-particles">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="wormhole-particle" />
              ))}
            </div>
          </div>
          <div className="wormhole-floating-text">
            <span>TRAVELING THROUGH THE WORMHOLE...</span>
          </div>
        </>
      )}
      {/* Audio element for music */}
      <audio ref={audioRef} src="/sounds/portal.mp3" preload="auto" />
      {/* AlphabetWall removed as requested */}
      {mode === "upside" && <h1 className="upside-text">UPSIDE DOWN</h1>}
      <div className="mist"></div>
    </div>
  );
}

export default Home;
