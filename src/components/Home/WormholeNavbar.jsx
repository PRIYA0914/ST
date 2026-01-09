import { motion } from "framer-motion";
import "./wormholeNavbar.css";

const sections = [
  { key: "hawkins", label: "HAWKINS" },
  { key: "rift", label: "THE RIFT" },
  { key: "wormhole", label: "WORMHOLE" },
  { key: "subject011", label: "SUBJECT 011" },
  { key: "gate", label: "THE GATE" },
  { key: "upside", label: "UPSIDE DOWN" },
];

export default function WormholeNavbar({
  section,
  onNavigate,
  isTransitioning,
}) {
  // Handles click with animation for wormhole
  const handleClick = (key) => {
    if (key === "wormhole") {
      // Play portal sound and animate, then switch to upside
      const audio = new Audio("/sounds/portal.mp3");
      audio.volume = 0.5;
      audio.play();
      onNavigate("wormhole");
      setTimeout(() => {
        onNavigate("upside");
      }, 1200);
    } else {
      onNavigate(key);
    }
  };

  return (
    <nav className="st-navbar">
      <ul className="st-menu">
        {sections.map(({ key, label }) => (
          <motion.li
            key={key}
            className={`nav-item${section === key ? " active" : ""}`}
            whileHover={{
              color: "#ff1a1a",
              letterSpacing: "6px",
              textShadow: "0 0 18px rgba(255,0,0,0.7)",
            }}
            onClick={() => !isTransitioning && handleClick(key)}
            style={{ cursor: isTransitioning ? "not-allowed" : "pointer" }}
          >
            {label}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
