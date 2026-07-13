import React from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import RecruiterQuickScan from "../RecruiterQuickScan";
import { cityTeleCoinRole } from "../../data/experience";

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
      <div className="hero-cards-container">
        <Card className="hero-main-card">
          <div className="hero-content">
            <h1 className="hero-name">Brian Hopper</h1>
            <h2 className="hero-title">Full-Stack Software Engineer · Life Sciences & Enterprise SaaS</h2>
            <div className="hero-recruiter-strip">
              <span aria-hidden="true">📍</span> Bossier City, LA
              <span>•</span>
              <span aria-hidden="true">🌐</span> Remote
              <span>•</span>
              <span>{cityTeleCoinRole.company}</span>
              <span>•</span>
              <span>{cityTeleCoinRole.title}</span>
              <span>•</span>
              <span>{cityTeleCoinRole.dates}</span>
              <span>•</span>
              <span>{cityTeleCoinRole.heroStrip}</span>
            </div>
            <div className="hero-bullets">
              <div className="hero-bullet">
                <strong>Outcome:</strong> Leading delivery of a multi-client corrections administrative platform — 4 frontends, shared TypeScript monorepo, .NET 9 API, and kiosk hardware integration
              </div>
              <div className="hero-bullet">
                <strong>Scope:</strong> Technical lead & project manager — architecture, OpenAPI integration, multi-tenant backend, Docker/K8s deployment, and Playwright E2E quality
              </div>
              <div className="hero-bullet">
                <strong>Ownership:</strong> Jira backlog, sprint planning, Bitbucket PR reviews, Jenkins CI/CD, and cross-team coordination through production launch
              </div>
              <div className="hero-bullet">
                <strong>Production:</strong> Earlier, led WCAG remediation across 15+ customer-facing PHP pages (Lighthouse 100%) and stabilized payment flows on a legacy telecom portal processing real financial transactions
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
        </Card>
        <Card className="hero-quick-scan-card">
          <RecruiterQuickScan />
        </Card>
      </div>
    </section>
  );
}

export default Hero;

