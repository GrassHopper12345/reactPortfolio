import React from "react";
import { cityTeleCoinRole } from "../../data/experience";

function RecruiterQuickScan() {
  const quickScanData = {
    location: "Bossier City, LA",
    remote: "Remote Available",
    role: `${cityTeleCoinRole.title} · ${cityTeleCoinRole.company}`,
    yearsExperience: "4+ years shipping production enterprise software",
    primaryStack: cityTeleCoinRole.techStack.slice(0, 8).join(" · "),
    highlights: cityTeleCoinRole.quickScanHighlights,
  };

  return (
    <div className="recruiter-quick-scan-inner">
      <div className="quick-scan-container">
        <div className="quick-scan-item">
          <span className="quick-scan-label" aria-hidden="true">📍</span>
          <span className="quick-scan-value">{quickScanData.location}</span>
          <span className="quick-scan-badge">{quickScanData.remote}</span>
        </div>
        <div className="quick-scan-item">
          <span className="quick-scan-label" aria-hidden="true">💼</span>
          <span className="quick-scan-value">{quickScanData.role}</span>
        </div>
        <div className="quick-scan-item">
          <span className="quick-scan-label" aria-hidden="true">⏱️</span>
          <span className="quick-scan-value">{quickScanData.yearsExperience}</span>
        </div>
        <div className="quick-scan-item quick-scan-stack">
          <span className="quick-scan-label" aria-hidden="true">⚡</span>
          <span className="quick-scan-value">{quickScanData.primaryStack}</span>
        </div>
        <div className="quick-scan-highlights">
          {quickScanData.highlights.map((highlight, index) => (
            <div key={index} className="quick-scan-highlight">
              <span className="highlight-icon" aria-hidden="true">✨</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecruiterQuickScan;
