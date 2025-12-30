import React from "react";
import Section from "../Section";
import { Card } from "primereact/card";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { BsCloud, BsTools } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

// Production engineering skills
const skills = {
  frontend: [
    "TypeScript",
    "React",
    "Next.js",
    "PrimeReact",
    "JavaScript (ES6+)"
  ],
  backend: [
    "C# (.NET)",
    "REST API Development",
    "Node.js",
    "Express",
    "Golang",
    "MERN Stack",
    "PHP"

  ],
  data: [
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Data Modeling"
  ],
  cloudTools: [
    "Docker",
    "AWS (Basic / Hands-on Exposure)",
    "Git",
    "Bitbucket",
    "Jira"
  ],
  engineeringPractices: [
    "Agile / Scrum",
    "Cross-functional Collaboration",
    "Debugging & Troubleshooting",
    "Code Reviews",
    "Continuous Learning"
  ]
};

const skillCategories = [
  { 
    title: "Frontend", 
    items: skills.frontend, 
    icon: MdFoundation,
    color: "var(--neon-cyan)"
  },
  { 
    title: "Backend", 
    items: skills.backend, 
    icon: GrTechnology,
    color: "var(--neon-green)"
  },
  { 
    title: "Data", 
    items: skills.data, 
    icon: FaDatabase,
    color: "var(--neon-cyan)"
  },
  { 
    title: "Cloud & Engineering Tools", 
    items: skills.cloudTools, 
    icon: BsCloud,
    color: "var(--neon-green)"
  },
  { 
    title: "Engineering Practices", 
    items: skills.engineeringPractices, 
    icon: FaCode,
    color: "var(--neon-cyan)"
  }
];

function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills and Technologies">
      <div className="flex-row">
        <h2 className="section-title">Skills</h2>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem', 
        marginTop: '2rem' 
      }}>
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card 
              key={index} 
              className="skills-card"
              style={{ 
                background: 'var(--space-dark)', 
                border: '2px solid rgba(0, 255, 255, 0.8)', 
                borderRadius: '10px',
                padding: '1.75rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 0 8px rgba(0, 255, 255, 0.15)'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1.25rem' 
              }}>
                <Icon style={{ fontSize: '20px', width: '20px', height: '20px', color: category.color, flexShrink: 0 }} />
                <h3 style={{ 
                  color: category.color, 
                  fontSize: '1.2rem', 
                  margin: 0,
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.5), 0 0 4px rgba(0, 255, 255, 0.3)'
                }}>
                  {category.title}
                </h3>
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.6rem' 
              }}>
                {category.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    style={{
                      padding: '0.5rem 0.9rem',
                      background: 'rgba(0, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 255, 255, 0.8)',
                      borderRadius: '20px',
                      color: '#b0e0e6',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      textShadow: 'none',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 255, 255, 0.2)';
                      e.target.style.borderColor = 'var(--neon-green)';
                      e.target.style.color = 'var(--neon-green)';
                      e.target.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3), 0 0 6px rgba(0, 255, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                      e.target.style.borderColor = 'rgba(0, 255, 255, 0.8)';
                      e.target.style.color = '#b0e0e6';
                      e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 255, 255, 0.1)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
