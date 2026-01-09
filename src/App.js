
import React, { useState } from "react";



import WormholeSection from "./components/WormholeSection";
import HawkinsSection from "./components/HawkinsSection";
import RiftSection from "./components/RiftSection";
import Subject011Section from "./components/Subject011Section";
import GateSection from "./components/GateSection";
import UpsideDownSection from "./components/UpsideDownSection";
import PortalNavbar from "./components/Home/PortalNavbar";
import LandingSection from "./components/LandingSection";



function App() {
  const [section, setSection] = useState("landing");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handles animated section switching
  const handleSectionChange = (nextSection) => {
    if (section === "wormhole" && nextSection === "upside") {
      setIsTransitioning(true);
      setTimeout(() => {
        setSection(nextSection);
        setIsTransitioning(false);
      }, 1200); // match portal animation duration
    } else {
      setSection(nextSection);
    }
  };

  // Section rendering logic
  let SectionComponent = null;
  if (section === "landing") SectionComponent = <LandingSection onEnter={() => setSection("hawkins")} />;
  if (section === "hawkins") SectionComponent = <HawkinsSection />;
  if (section === "rift") SectionComponent = <RiftSection />;
  if (section === "wormhole") SectionComponent = <WormholeSection />;
  if (section === "subject011") SectionComponent = <Subject011Section />;
  if (section === "gate") SectionComponent = <GateSection />;
  if (section === "upside") SectionComponent = <UpsideDownSection />;

  return (
    <div className={`app ${section}`}>
      {section !== "landing" && <PortalNavbar onNavigate={handleSectionChange} />}
      <div style={{ marginTop: section !== "landing" ? 60 : 0 }}>
        {SectionComponent}
      </div>
      {/* Portal transition overlay for wormhole */}
      {section === "wormhole" && isTransitioning && (
        <div className="portal-transition" />
      )}
    </div>
  );
}

export default App;

