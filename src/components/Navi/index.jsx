import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { scrollToSection } from "../../utils/scrollUtils";
import { Menu, X } from "lucide-react";

function Navi({ activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "experiments", label: "Experiments" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            style={{
              background: 'transparent',
              border: '2px solid var(--neon-cyan)',
              borderRadius: '4px',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '44px',
              minHeight: '44px',
              color: 'var(--neon-cyan)',
              boxShadow: '0 0 8px rgba(0, 255, 255, 0.3)'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isMobileMenuOpen && (
            <nav 
              className="mobile-nav-menu"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'linear-gradient(135deg, var(--space-dark) 0%, var(--space-darker) 100%)',
                borderBottom: '2px solid var(--neon-cyan-border)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 12px rgba(0, 255, 255, 0.3)',
                zIndex: 10000,
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
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
                  style={{ 
                    width: '100%', 
                    minHeight: '44px',
                    justifyContent: 'center'
                  }}
                />
              ))}
            </nav>
          )}
        </>
      ) : (
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
      )}
    </>
  );
}

export default Navi;
