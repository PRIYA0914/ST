import { useState } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig";
import Portal from "./Portal";

import WormholeNavbar from "./WormholeNavbar";
import "./Home.css";

function Home() {
  const [crackOpen, setCrackOpen] = useState(false);
  const [shake, setShake] = useState(false);
  const [crackPos, setCrackPos] = useState({ x: 0, y: 0 });
  const [showNavbar, setShowNavbar] = useState(false);

  const handleEnter = (e) => {
    // Mouse position relative to viewport
    setCrackPos({
      x: e.clientX,
      y: e.clientY,
    });

    const audio = new Audio("/sounds/portal.mp3");
    audio.volume = 0.5;
    audio.play();

    setCrackOpen(true);

    setTimeout(() => {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }, 400);

    setTimeout(() => {
      setShowNavbar(true);
      // Optionally call onEnter();
    }, 3000);
  };

  // Reverse transition (exit Upside Down)
  // const exitUpsideDown = (onBack) => {
  //   const portal = document.getElementById("portalOverlay");
  //   if (!portal) return;
  //   portal.classList.remove("portal-open");
  //   portal.classList.add("portal-close");
  //   setPortalActive(true);
  //   setTimeout(() => {
  //     onBack();
  //   }, 900);
  //   setTimeout(() => {
  //     portal.classList.remove("portal-close");
  //     setPortalActive(false);
  //   }, 2200);
  // };

  // Only use the gradient for the background, no image
  const homeBg = {
    background: "linear-gradient(120deg, #ff1a1a44 0%, #000 100%)",
    backgroundSize: "cover",
    backgroundBlendMode: "lighten, screen",
    opacity: 1,
  };

  return (
    <div className="home" style={homeBg}>
      <div className="mist" />
      {showNavbar ? (
        <>
          <WormholeNavbar />
        </>
      ) : (
        <div id="gravityLayer">
          <div id="shakeLayer" className={shake ? "shake" : ""}>
            <Particles options={particlesConfig} className="particles" />
            <div className="texture" />

            <div className="content">
              <h1 className="main-title">STRANGER THINGS</h1>
              <button className="enter-btn" onClick={handleEnter}>
                ENTER THE UPSIDE DOWN
              </button>
            </div>

            {crackOpen && <Portal x={crackPos.x} y={crackPos.y} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
