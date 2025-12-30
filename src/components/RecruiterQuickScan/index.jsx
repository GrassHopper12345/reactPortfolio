import React from "react";
import Section from "../Section";

function RecruiterQuickScan() {
  // TODO: Replace with actual values from resume/experience
  const quickScanData = {
    location: "Bossier City, LA",
    remote: "Remote Available",
    yearsExperience: "TODO: Add years of experience",
    primaryStack: "React • Node.js • Express • MongoDB • TypeScript • AWS",
    highlights: [
      "TODO: Add strongest highlight (e.g., 'Built admin tooling used by X users')",
      "TODO: Add second highlight (e.g., 'Reduced page load by Y%')",
      "TODO: Add third highlight (e.g., 'Implemented role-based permissions')"
    ]
  };

  return (
    <div className="recruiter-quick-scan">
      <div className="quick-scan-container">
        <div className="quick-scan-item">
          <span className="quick-scan-label">📍</span>
          <span className="quick-scan-value">{quickScanData.location}</span>
          <span className="quick-scan-badge">{quickScanData.remote}</span>
        </div>
        <div className="quick-scan-item">
          <span className="quick-scan-label">💼</span>
          <span className="quick-scan-value">{quickScanData.yearsExperience}</span>
        </div>
        <div className="quick-scan-item quick-scan-stack">
          <span className="quick-scan-label">⚡</span>
          <span className="quick-scan-value">{quickScanData.primaryStack}</span>
        </div>
        <div className="quick-scan-highlights">
          {quickScanData.highlights.map((highlight, index) => (
            <div key={index} className="quick-scan-highlight">
              <span className="highlight-icon">✨</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecruiterQuickScan;

