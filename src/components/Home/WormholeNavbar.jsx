import { motion } from "framer-motion";
import "./wormholeNavbar.css";

export default function WormholeNavbar() {
  return (
    <>
      {/* NAVBAR (STAYS STILL) */}
      <nav className="st-navbar">
        <ul className="st-menu">
          <motion.li
            className="nav-item hawkins"
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
