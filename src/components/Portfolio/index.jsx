import React, { useState, useMemo } from "react";
import Section from "../Section";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

function Portfolio() {
  const [filter, setFilter] = useState("most-relevant");

  // Sorting function: featured first, then by tier priority, then by recency
  const sortedProjects = useMemo(() => {
    const tierPriority = { primary: 1, secondary: 2, experimental: 3, legacy: 3 };
    
    return [...projects].sort((a, b) => {
      // Featured projects first within tier
      if (a.featured !== b.featured) return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      
      // Tier priority
      const aTier = tierPriority[a.relevanceTier] || 4;
      const bTier = tierPriority[b.relevanceTier] || 4;
      if (aTier !== bTier) return aTier - bTier;
      
      // Recency within tier (newest first)
      const aDate = a.lastUpdated ? new Date(a.lastUpdated) : new Date(0);
      const bDate = b.lastUpdated ? new Date(b.lastUpdated) : new Date(0);
      if (aDate.getTime() !== bDate.getTime()) return bDate.getTime() - aDate.getTime();
      
      // Fallback to title alphabetical
      return a.title.localeCompare(b.title);
    });
  }, []);

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    switch (filter) {
      case "most-relevant":
        return sortedProjects.filter(p => p.featured === true);
      case "production-style":
        return sortedProjects.filter(p => p.relevanceTier === "primary");
      case "legacy-updating":
        return sortedProjects.filter(p => p.relevanceTier === "experimental" || p.relevanceTier === "legacy");
      default:
        return sortedProjects;
    }
  }, [sortedProjects, filter]);

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "most-relevant", label: "Most Relevant" },
    { id: "production-style", label: "Production-style" },
    { id: "legacy-updating", label: "Legacy/Updating" }
  ];

  return (
    <Section id="projects" ariaLabel="Projects and Case Studies">
      <div className="flex-row">
        <h2 className="section-title">Projects</h2>
      </div>
      <p style={{ 
        color: '#b0e0e6', 
        fontSize: '1.1rem', 
        textAlign: 'center', 
        marginBottom: '2rem',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Case studies showcasing problem-solving, technical implementation, and impact.
      </p>
      
      {/* Filter buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '2rem'
      }}>
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            style={{
              padding: '0.5rem 1.25rem',
              background: filter === btn.id 
                ? 'linear-gradient(135deg, var(--neon-green), var(--neon-cyan))'
                : 'transparent',
              color: filter === btn.id ? 'var(--space-dark)' : 'var(--neon-cyan)',
              border: `2px solid ${filter === btn.id ? 'var(--neon-green)' : 'var(--neon-cyan-border)'}`,
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: filter === btn.id ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'none',
              boxShadow: filter === btn.id ? '0 2px 6px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 255, 0, 0.3)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (filter !== btn.id) {
                e.target.style.borderColor = 'var(--neon-green)';
                e.target.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 255, 255, 0.25)';
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== btn.id) {
                e.target.style.borderColor = 'var(--neon-cyan-border)';
                e.target.style.boxShadow = 'none';
              }
            }}
            aria-label={`Filter projects by ${btn.label}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
        gap: '2rem', 
        marginTop: '2rem' 
      }}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Portfolio;
