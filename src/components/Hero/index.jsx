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
        <p className="hero-value">
          Full-stack developer building enterprise web applications with TypeScript, Next.js, React, and C# REST APIs.
        </p>
        <div className="hero-tech-stack">
          <span className="tech-label">Tech Stack:</span>
          <span className="tech-items">TypeScript • Next.js • React • PrimeReact • C# (.NET) • REST APIs • SQL • AWS</span>
        </div>
        <div className="hero-cta-group">
          <Button
            label="View Projects"
            icon="pi pi-code"
            onClick={() => scrollToSection('projects')}
            className="game-themed-button hero-cta"
            aria-label="View projects section"
          />
          <Button
            label="Download Resume"
            icon="pi pi-download"
            onClick={handleDownloadResume}
            className="game-themed-button hero-cta"
            aria-label="Download resume PDF"
          />
          <Button
            label="Play Galaga"
            icon="pi pi-gamepad"
            onClick={() => scrollToSection('experiments')}
            className="game-themed-button hero-cta"
            aria-label="Play Galaga game in engineering experiments section"
          />
        </div>
      </div>
      <RecruiterQuickScan />
    </section>
  );
}

export default Hero;

