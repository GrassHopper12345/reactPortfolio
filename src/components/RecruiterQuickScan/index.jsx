import React from "react";
import Section from "../Section";

function RecruiterQuickScan() {
  const quickScanData = {
    location: "Bossier City, LA",
    remote: "Remote Available",
    yearsExperience: "4+ years shipping production enterprise software",
    primaryStack: "TypeScript • Next.js • React • PrimeReact • C# (.NET) • REST APIs • SQL • AWS",
    highlights: [
      "Building and shipping features for a commissary web application using Next.js, TypeScript, and React, backed by a C# REST API in a production environment.",
      "Implementing complex enterprise UI workflows with PrimeReact, including forms, validation, data tables, and state-driven interactions.",
      "Owning features end-to-end: frontend architecture, API integration, debugging, and cross-team collaboration."
    ]
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

