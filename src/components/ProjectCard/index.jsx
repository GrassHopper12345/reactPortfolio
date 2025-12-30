import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className="project-card case-study-card"
      style={{ 
        background: 'var(--space-dark)', 
        border: '2px solid rgba(0, 255, 255, 0.8)', 
        borderRadius: '10px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ marginBottom: '1rem', position: 'relative' }}>
        {project.mostRelevant && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'linear-gradient(135deg, var(--neon-green), var(--neon-cyan))',
            color: 'var(--space-dark)',
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            zIndex: 10,
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            ⭐ Most Relevant
          </div>
        )}
        <a 
          href={project.links.github} 
          target="_blank" 
          rel="noreferrer noopener"
          aria-label={`View ${project.title} on GitHub`}
        >
          <img
            src={project.image}
            alt={project.alt}
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '8px', 
              marginBottom: '1rem', 
              boxShadow: '0 2px 8px rgba(0, 255, 255, 0.2)',
              cursor: 'pointer'
            }}
          />
        </a>
        <h3 style={{ 
          color: 'var(--neon-green)', 
          fontSize: '1.5rem', 
          marginBottom: '0.5rem',
          textShadow: '0 0 5px var(--neon-green)'
        }}>
          {project.title}
        </h3>
        <p style={{ color: '#b0e0e6', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', textShadow: 'none' }}>
          {project.shortPitch}
        </p>
      </div>

      {isExpanded && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h4 style={{ color: 'var(--neon-green)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Problem
            </h4>
            <p style={{ color: '#b0e0e6', fontSize: '0.95rem', lineHeight: '1.6', textShadow: 'none' }}>
              {project.problem}
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--neon-green)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              What I Built
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.whatIBuilt.map((item, index) => (
                <li 
                  key={index}
                  style={{ 
                    color: '#b0e0e6', 
                    marginBottom: '0.5rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    textShadow: 'none'
                  }}
                >
                  <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--neon-green)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Impact
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.impact.map((item, index) => (
                <li 
                  key={index}
                  style={{ 
                    color: '#b0e0e6', 
                    marginBottom: '0.5rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    textShadow: 'none'
                  }}
                >
                  <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              style={{
                padding: '0.25rem 0.75rem',
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.8)',
                borderRadius: '15px',
                color: '#b0e0e6',
                fontSize: '0.85rem',
                textShadow: 'none'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '0.75rem', 
        marginTop: 'auto',
        flexWrap: 'wrap'
      }}>
        <Button
          label={isExpanded ? "Show Less" : "View Details"}
          icon={isExpanded ? "pi pi-chevron-up" : "pi pi-chevron-down"}
          onClick={() => setIsExpanded(!isExpanded)}
          className="game-themed-button"
          outlined
          style={{ flex: 1, minWidth: '120px' }}
          aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
        />
        <Button
          label="GitHub"
          icon="pi pi-github"
          onClick={() => window.open(project.links.github, '_blank', 'noopener,noreferrer')}
          className="game-themed-button"
          outlined
          style={{ flex: 1, minWidth: '120px' }}
          aria-label={`View ${project.title} on GitHub`}
        />
        {project.links.live && (
          <Button
            label="Live Demo"
            icon="pi pi-external-link"
            onClick={() => window.open(project.links.live, '_blank', 'noopener,noreferrer')}
            className="game-themed-button"
            style={{ flex: 1, minWidth: '120px' }}
            aria-label={`View live demo of ${project.title}`}
          />
        )}
      </div>
    </Card>
  );
}

export default ProjectCard;

