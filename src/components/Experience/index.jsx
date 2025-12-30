import React from "react";
import Section from "../Section";
import { Card } from "primereact/card";

const experience = [
  {
    company: "CityTeleCoin",
    title: "Software Engineer",
    dates: "Feb 2023 – Present",
    techStack: ["TypeScript", "Next.js", "React", "PrimeReact", "C# (.NET)", "REST APIs", "SQL", "AWS"],
    bullets: [
      "Developing a net-new commissary web application using Next.js, TypeScript, and React, backed by a C# REST API, preparing the system for production launch.",
      "Implementing complex enterprise UI workflows with PrimeReact, including forms, validation, data tables, and state-driven interactions.",
      "Integrating frontend features with backend services, managing API contracts, error handling, loading states, and permissions.",
      "Collaborating with product, QA, and engineering teams to refine requirements, debug issues, and ship iteratively.",
      "Contributing to frontend architecture decisions, improving component reuse, readability, and long-term maintainability."
    ]
  }
];

function Experience() {
  return (
    <Section id="experience" ariaLabel="Work Experience">
      <div className="flex-row">
        <h2 className="section-title">Experience</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
        {experience.length > 0 ? (
          experience.map((job, index) => (
            <Card key={index} className="experience-card" style={{ background: 'var(--space-dark)', border: '2px solid rgba(0, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 0 8px rgba(0, 255, 255, 0.15)' }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--neon-green)', fontSize: '1.5rem', marginBottom: '0.75rem', textShadow: '0 1px 3px rgba(0, 0, 0, 0.5), 0 0 4px rgba(0, 255, 0, 0.3)' }}>
                  {job.title}
                </h3>
                <p style={{ color: '#b0e0e6', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                  {job.company}
                </p>
                <p style={{ color: '#b0e0e6', fontSize: '0.9rem', opacity: 0.8 }}>
                  {job.dates}
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                {job.bullets.map((bullet, bulletIndex) => (
                  <li 
                    key={bulletIndex}
                    style={{ 
                      color: '#b0e0e6', 
                      marginBottom: '0.6rem',
                      paddingLeft: '1.5rem',
                      position: 'relative',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      textShadow: 'none'
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1rem' }}>
                {job.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    style={{
                      padding: '0.5rem 0.9rem',
                      background: 'rgba(0, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 255, 255, 0.8)',
                      borderRadius: '20px',
                      color: '#b0e0e6',
                      fontSize: '0.9rem',
                      textShadow: 'none',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 255, 255, 0.1)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))
        ) : null}
      </div>
    </Section>
  );
}

export default Experience;

