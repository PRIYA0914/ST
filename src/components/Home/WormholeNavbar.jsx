import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./wormholeNavbar.css";
import AlphabetWall from "../AlphabetWall/AlphabetWall";

export default function WormholeNavbar() {
  const [showWall, setShowWall] = useState(false);

  return (
    <>
      {/* NAVBAR (STAYS STILL) */}
      <nav className="st-navbar">
        <ul className="st-menu">
          <motion.li
            className="nav-item hawkins"
            onHoverStart={() => setShowWall(true)}
            onHoverEnd={() => setShowWall(false)}
            whileHover={{
              color: "#ff1a1a",
              letterSpacing: "6px",
              textShadow: "0 0 18px rgba(255,0,0,0.7)",
            }}
          >
            HAWKINS
          </motion.li>

          <NavItem text="THE RIFT" />
          <NavItem text="WORMHOLE" />
          <NavItem text="SUBJECT 011" />
          <NavItem text="THE GATE" />
          <NavItem text="UPSIDE DOWN" />
        </ul>
      </nav>

      {/* ALPHABET WALL */}
      <AnimatePresence>{showWall && <AlphabetWall />}</AnimatePresence>
    </>
  );
}

function NavItem({ text }) {
  return (
    <motion.li
      className="nav-item"
      whileHover={{
        color: "#ff1a1a",
        letterSpacing: "6px",
        textShadow: "0 0 18px rgba(255,0,0,0.7)",
      }}
    >
      {text}
    </motion.li>
  );
}
