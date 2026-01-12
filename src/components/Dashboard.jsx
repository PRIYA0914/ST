import React from "react";
import "../assets/globalEffects.css";
import "./Dashboard.css";

const sections = [
  {
    key: "hawkins",
    title: "Hawkins",
    desc: "A quiet town. Or so it seems...",
    previewClass: "dashboard-preview-hawkins",
  },
  {
    key: "rift",
    title: "The Rift",
    desc: "Reality is tearing apart. Red light spills out.",
    previewClass: "dashboard-preview-rift",
  },
  {
    key: "wormhole",
    title: "Wormhole",
    desc: "The spiral spins, particles fall inward, and space bends...",
    previewClass: "dashboard-preview-wormhole",
  },
  {
    key: "subject011",
    title: "Subject 011",
    desc: "Anomalous activity detected. Experiment: Sensory Deprivation.",
    previewClass: "dashboard-preview-subject011",
  },
  {
    key: "gate",
    title: "The Gate",
    desc: "A pulsing, organic portal. Red light leaks through.",
    previewClass: "dashboard-preview-gate",
  },
  {
    key: "upside",
    title: "Upside Down",
    desc: "Colors desaturate, fog fills the air, and nothing feels safe...",
    previewClass: "dashboard-preview-upside",
  },
];

export default function Dashboard({ onSelect }) {
  return (
    <div className="dashboard-root">
      <h2 className="dashboard-title">Explore the Stranger Things World</h2>
      <div className="dashboard-grid">
        {sections.map((section, i) => (
          <div
            key={section.key}
            className={`dashboard-card ${section.previewClass}`}
            style={{ animationDelay: `${0.08 * i + 0.1}s` }}
            onClick={() => onSelect(section.key)}
            tabIndex={0}
            role="button"
          >
            <div className="dashboard-card-preview" />
            <div className="dashboard-card-content">
              <h3 className="dashboard-card-title">{section.title}</h3>
              <p className="dashboard-card-desc">{section.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
