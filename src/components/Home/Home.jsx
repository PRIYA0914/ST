import { useState } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig";
import Menu from "./Menu";
import Portal from "./Portal";
import "./Home.css";

export default function Home({ onEnter }) {
  const [crackOpen, setCrackOpen] = useState(false);
  const [shake, setShake] = useState(false);
  const [crackPos, setCrackPos] = useState({ x: 0, y: 0 });

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
      onEnter();
    }, 3000);
  };

  return (
    <div className={`home ${shake ? "shake" : ""}`}>
      <Particles options={particlesConfig} className="particles" />
      <div className="texture" />
      <Menu />

      <div className="content">
        <h1 className="main-title">STRANGER THINGS</h1>
        <button className="enter-btn" onClick={handleEnter}>
          ENTER THE UPSIDE DOWN
        </button>
      </div>

      {crackOpen && <Portal x={crackPos.x} y={crackPos.y} />}
    </div>
  );
}
