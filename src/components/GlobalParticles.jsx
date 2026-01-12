import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const GlobalParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="global-tsparticles"
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            particles: {
              number: { value: 120, density: { enable: true, area: 800 } },
              color: { value: ["#e50914", "#fff", "#b3b3b3"] },
              shape: { type: "circle" },
              opacity: { value: 0.7, random: true },
              size: { value: 3, random: true },
              move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 80, duration: 0.4 },
                push: { quantity: 4 },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
};

export default GlobalParticles;
