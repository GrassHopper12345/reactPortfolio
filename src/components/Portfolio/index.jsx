import React from "react";
import Section from "../Section";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

function Portfolio() {
  return (
    <Section id="projects" ariaLabel="Projects and Case Studies">
      <div className="flex-row">
        <h2 className="section-title">Projects</h2>
      </div>
      <p style={{ 
        color: 'var(--neon-cyan)', 
        fontSize: '1.1rem', 
        textAlign: 'center', 
        marginBottom: '2rem',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Case studies showcasing problem-solving, technical implementation, and impact.
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
        gap: '2rem', 
        marginTop: '2rem' 
      }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Portfolio;
