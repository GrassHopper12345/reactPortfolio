import React from "react";
import Section from "../Section";
import { Card } from "primereact/card";

// TODO: Extract actual work history from Resume.pdf
// Placeholder structure - replace with real data
const experience = [
  {
    company: "Company Name",
    title: "Software Engineer",
    dates: "YYYY - Present",
    techStack: ["React", "Node.js", "TypeScript", "AWS"],
    bullets: [
      "TODO: Add 4-6 bullet points emphasizing outcomes, ownership, systems, and collaboration",
      "TODO: Include measurable impact where possible",
      "TODO: Highlight technical achievements and problem-solving",
      "TODO: Mention team collaboration and leadership if applicable"
    ]
  }
  // TODO: Add more work experience entries
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
            <Card key={index} className="experience-card" style={{ background: 'var(--space-dark)', border: '2px solid var(--neon-cyan)', borderRadius: '10px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ color: 'var(--neon-green)', fontSize: '1.5rem', marginBottom: '0.5rem', textShadow: '0 0 5px var(--neon-green)' }}>
                  {job.title}
                </h3>
                <p style={{ color: 'var(--neon-cyan)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                  {job.company}
                </p>
                <p style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', opacity: 0.8 }}>
                  {job.dates}
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                {job.bullets.map((bullet, bulletIndex) => (
                  <li 
                    key={bulletIndex}
                    style={{ 
                      color: 'var(--neon-cyan)', 
                      marginBottom: '0.75rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: 'var(--neon-green)' }}>•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {job.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(0, 255, 255, 0.1)',
                      border: '1px solid var(--neon-cyan)',
                      borderRadius: '15px',
                      color: 'var(--neon-cyan)',
                      fontSize: '0.85rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))
        ) : (
          <Card style={{ background: 'var(--space-dark)', border: '2px solid var(--neon-cyan)', borderRadius: '10px', padding: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--neon-cyan)' }}>
              TODO: Add work experience. Extract from Resume.pdf or manually add entries.
            </p>
          </Card>
        )}
      </div>
    </Section>
  );
}

export default Experience;

