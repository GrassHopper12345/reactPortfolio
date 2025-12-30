import React from "react";
import { Button } from "primereact/button";
import { scrollToSection } from "../../utils/scrollUtils";

function Navi({ activeSection }) {
  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "experiments", label: "Experiments" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <nav 
      style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <Button
          key={item.id}
          label={item.label}
          onClick={() => handleNavClick(item.id)}
          className={`nav-button game-themed-button ${activeSection === item.id ? 'active' : ''}`}
          severity={activeSection === item.id ? "info" : "secondary"}
          outlined={activeSection !== item.id}
          aria-label={`Navigate to ${item.label} section`}
          aria-current={activeSection === item.id ? 'page' : undefined}
        />
      ))}
    </nav>
  );
}

export default Navi;
