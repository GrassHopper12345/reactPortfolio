import React, { useState, lazy, Suspense, useEffect } from "react";
import Section from "../Section";
import { Button } from "primereact/button";
import { scrollToSection } from "../../utils/scrollUtils";

// Lazy load the game component
const GameNavigation = lazy(() => import("../GameNavigation"));

function EngineeringExperiments() {
  const [gameActive, setGameActive] = useState(false);
  const [shouldLoadGame, setShouldLoadGame] = useState(false);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion && gameActive) {
      // If user prefers reduced motion, don't start the game automatically
      setGameActive(false);
    }
  }, [prefersReducedMotion]);

  const handlePlayClick = () => {
    setShouldLoadGame(true);
    setGameActive(true);
  };

  const handleExitGame = () => {
    setGameActive(false);
    scrollToSection('projects');
  };

  const handleEscKey = (e) => {
    if (e.key === 'Escape' && gameActive) {
      setGameActive(false);
    }
  };

  useEffect(() => {
    if (gameActive) {
      window.addEventListener('keydown', handleEscKey);
      return () => {
        window.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [gameActive]);

  return (
    <Section id="experiments" ariaLabel="Engineering Experiments">
      <div className="flex-row">
        <h2 className="section-title">Engineering Experiments</h2>
      </div>
      
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h3 style={{ 
          color: 'var(--neon-green)', 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          textShadow: '0 0 5px var(--neon-green)'
        }}>
          Galaga-Inspired Real-Time Interactive Game Loop
        </h3>
        <div style={{ 
          color: '#b0e0e6', 
          fontSize: '1rem', 
          lineHeight: '1.8',
          textAlign: 'left',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <p style={{ marginBottom: '1rem' }}>
            This interactive game demonstrates core engineering principles:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
              <strong>Game Loop & Timing:</strong> Uses requestAnimationFrame for smooth 60fps rendering with delta time calculations
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
              <strong>Input Handling:</strong> Supports keyboard, mouse, and touch events with proper event delegation
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
              <strong>Collision Detection:</strong> Axis-aligned bounding box (AABB) algorithms for efficient hit detection
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
              <strong>State Management:</strong> React hooks for game state, refs for performance-critical values
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
              <strong>Performance:</strong> Lazy loading, optimized re-renders, and frame rate management
            </li>
          </ul>
        </div>
      </div>

      {!gameActive && (
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Button
            label="Play Galaga"
            icon="pi pi-play"
            onClick={handlePlayClick}
            className="game-themed-button"
            style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
            aria-label="Start Galaga game"
          />
        </div>
      )}

      {gameActive && (
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <div style={{ 
            position: 'absolute', 
            top: '1rem', 
            right: '1rem', 
            zIndex: 10000,
            display: 'flex',
            gap: '0.5rem'
          }}>
            <Button
              label="Exit Game"
              icon="pi pi-times"
              onClick={handleExitGame}
              className="game-themed-button"
              severity="danger"
              style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
              aria-label="Exit game and return to projects"
            />
          </div>
          <Suspense fallback={
            <div style={{ 
              minHeight: '600px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--neon-cyan)'
            }}>
              Loading game...
            </div>
          }>
            <GameNavigation 
              onNavigate={handleExitGame} 
              isActive={gameActive}
              prefersReducedMotion={prefersReducedMotion}
            />
          </Suspense>
        </div>
      )}

      {prefersReducedMotion && (
        <p style={{ 
          color: '#b0e0e6', 
          fontSize: '0.9rem', 
          textAlign: 'center',
          fontStyle: 'italic',
          marginTop: '1rem'
        }}>
          Reduced motion mode detected. Animations are minimized.
        </p>
      )}
    </Section>
  );
}

export default EngineeringExperiments;

