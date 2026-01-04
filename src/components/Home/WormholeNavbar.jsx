import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./wormholeNavbar.css";

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

/* ALPHABET WALL COMPONENT */
function AlphabetWall() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <motion.div
      className="alphabet-wall"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {letters.map((l, i) => (
        <motion.span
          key={i}
          className="wall-letter"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            delay: i * 0.05,
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          {l}
        </motion.span>
      ))}
    </motion.div>
  );
}
