import { useState } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig";
import Menu from "./Menu";
import Portal from "./Portal";
import "./Home.css";

export default function Home({ onEnter }) {
  const [crackOpen, setCrackOpen] = useState(false);
  const [shake, setShake] = useState(false);

  const handleEnter = () => {
    const audio = new Audio("/sounds/portal.mp3");
    audio.volume = 0.5;
    audio.play();

    // start crack
    setCrackOpen(true);

    // camera shake shortly after crack starts
    setTimeout(() => {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }, 500);

    // navigate after full opening
    setTimeout(() => {
      onEnter();
    }, 2800);
  };

  return (
    <div className={`home${shake ? " shake" : ""}`}>
      <Particles options={particlesConfig} className="particles" />
      <div className="texture" />
      <Menu />

      <div className="content">
        <h1 className="main-title">STRANGER THINGS</h1>
        <button className="enter-btn" onClick={handleEnter}>
          ENTER THE UPSIDE DOWN
        </button>
      </div>

      {/* ✅ Portal ONLY renders after click */}
      {crackOpen && <Portal open />}
    </div>
  );
}
