
import React, { useState } from "react";




import WormholeSection from "./components/WormholeSection";
import HawkinsSection from "./components/HawkinsSection";
import RiftSection from "./components/RiftSection";
import Subject011Section from "./components/Subject011Section";
import GateSection from "./components/GateSection";
import UpsideDownSection from "./components/UpsideDownSection";
import LandingSection from "./components/LandingSection";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";



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
  let MainContent = null;
  if (section === "landing") {
    MainContent = <LandingSection onEnter={() => setSection("dashboard")} />;
  } else if (section === "dashboard") {
    MainContent = <Dashboard onSelect={setSection} />;
  } else if (section === "hawkins") {
    MainContent = <HawkinsSection />;
  } else if (section === "rift") {
    MainContent = <RiftSection />;
  } else if (section === "wormhole") {
    MainContent = <WormholeSection />;
  } else if (section === "subject011") {
    MainContent = <Subject011Section />;
  } else if (section === "gate") {
    MainContent = <GateSection />;
  } else if (section === "upside") {
    MainContent = <UpsideDownSection />;
  }

  return (
    <div className={`app ${section}`}>
      {/* Header with navbar links */}
      {section !== "landing" && section !== "dashboard" && (
        <Header onNavigate={handleSectionChange} />
      )}
      <div>
        {MainContent}
      </div>
      {/* Portal transition overlay for wormhole */}
      {section === "wormhole" && isTransitioning && (
        <div className="portal-transition" />
      )}
      {/* Footer removed as requested */}
    </div>
  );
}

export default App;

