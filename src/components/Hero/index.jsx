import React from "react";
import { Button } from "primereact/button";
import RecruiterQuickScan from "../RecruiterQuickScan";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    const resumePath = '/Resume.pdf';
    window.open(resumePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="hero" 
      className="hero-section"
      aria-label="Hero section"
    >
      <div className="hero-content">
        <h1 className="hero-name">Brian Hopper</h1>
        <h2 className="hero-title">Mid-Level Remote Software Engineer</h2>
        <div className="hero-recruiter-strip">
          <span>📍 Bossier City, LA</span>
          <span>•</span>
          <span>🌐 Remote</span>
          <span>•</span>
          <span>CityTeleCoin</span>
          <span>•</span>
          <span>Feb 2023 – Present</span>
          <span>•</span>
          <span>TypeScript • Next.js • React • C# • REST APIs • SQL</span>
        </div>
        <div className="hero-bullets">
          <div className="hero-bullet">
            <strong>Outcome:</strong> Building production-ready enterprise web applications with full-stack TypeScript and C# REST APIs
          </div>
          <div className="hero-bullet">
            <strong>Scope:</strong> Frontend architecture, API integration, data modeling, and cross-functional collaboration
          </div>
          <div className="hero-bullet">
            <strong>Ownership:</strong> Leading feature development from requirements to deployment in agile environment
          </div>
        </div>
        <div className="hero-cta-group">
          <Button
            label="Download Resume"
            icon="pi pi-download"
            onClick={handleDownloadResume}
            className="game-themed-button hero-cta hero-cta-primary"
            aria-label="Download resume PDF"
          />
          <Button
            label="View Projects"
            icon="pi pi-code"
            onClick={() => scrollToSection('projects')}
            className="game-themed-button hero-cta hero-cta-secondary"
            aria-label="View projects section"
          />
          <Button
            label="Play Galaga"
            icon="pi pi-gamepad"
            onClick={() => scrollToSection('experiments')}
            className="game-themed-button hero-cta hero-cta-tertiary"
            aria-label="Play Galaga game in engineering experiments section"
          />
        </div>
      </div>
      <RecruiterQuickScan />
    </section>
  );
}

export default Hero;

