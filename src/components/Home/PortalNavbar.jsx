import React, { useEffect, useRef } from "react";
import "./PortalNavbar.css";

const PortalNavbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 30) {
        navRef.current.classList.add("bleed");
      } else {
        navRef.current.classList.remove("bleed");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="st-navbar" ref={navRef}>
        <ul className="st-menu">
          <li data-type="normal">HAWKINS</li>
          <li data-type="rift">THE RIFT</li>
          <li
            data-type="wormhole"
            onClick={() => {
              const overlay = document.querySelector(".wormhole-overlay");
              if (overlay) {
                overlay.classList.add("active");
                setTimeout(() => {
                  // window.location.href = "/wormhole";
                  overlay.classList.remove("active");
                }, 2600);
              }
            }}
          >
            WORMHOLE
          </li>
          <li data-type="eleven">SUBJECT 011</li>
          <li data-type="gate">THE GATE</li>
          <li data-type="upside">UPSIDE DOWN</li>
        </ul>
      </nav>
      <div className="wormhole-overlay"></div>
    </>
  );
};

export default PortalNavbar;
