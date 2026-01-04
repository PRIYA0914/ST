import React, { useRef } from "react";
import "./PortalNavbar.css";

const PortalNavbar = () => {
  const overlayRef = useRef(null);
  const rumbleRef = useRef(null);

  // WORMHOLE click handler
  const handleWormhole = () => {
    const overlay = overlayRef.current;
    const rumble = rumbleRef.current;
    if (rumble) {
      rumble.currentTime = 0;
      rumble.play();
    }
    document.body.style.filter = "blur(2px)";
    document.body.style.transition = "filter 3.2s ease";
    if (overlay) overlay.classList.add("active");
    setTimeout(() => {
      if (overlay) overlay.classList.add("aftershock");
    }, 2600);
    setTimeout(() => {
      // navigation could go here
      if (overlay) overlay.classList.remove("active", "aftershock");
      document.body.style.filter = "none";
    }, 3400);
  };

  // UPSIDE DOWN click handler
  const handleUpsideDown = () => {
    document.body.classList.add("flip");
    document.body.style.filter = "invert(1)";
    setTimeout(() => {
      document.body.classList.remove("flip");
      document.body.style.filter = "none";
      // navigation could go here
    }, 700);
  };

  return (
    <>
      <nav className="st-navbar">
        <ul className="st-menu">
          <li data-type="normal">HAWKINS</li>
          <li data-type="rift">THE RIFT</li>
          <li data-type="wormhole" onClick={handleWormhole}>
            WORMHOLE
          </li>
          <li data-type="eleven">SUBJECT 011</li>
          <li data-type="gate">THE GATE</li>
          <li data-type="upside" onClick={handleUpsideDown}>
            UPSIDE DOWN
          </li>
        </ul>
      </nav>
      <div className="fx-overlay" ref={overlayRef}></div>
      <audio
        id="rumble"
        ref={rumbleRef}
        src="/sounds/rumble.mp3"
        preload="auto"
      />
    </>
  );
};

export default PortalNavbar;
