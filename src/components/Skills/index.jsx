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
    "REST API Design",
    "Node.js",
    "Express",
    "MERN Stack"
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
                padding: '1.5rem'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem' 
              }}>
                <Icon style={{ fontSize: '1.5rem', color: category.color }} />
                <h3 style={{ 
                  color: category.color, 
                  fontSize: '1.2rem', 
                  margin: 0,
                  textShadow: `0 0 5px ${category.color}`
                }}>
                  {category.title}
                </h3>
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem' 
              }}>
                {category.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    style={{
                      padding: '0.4rem 0.8rem',
                      background: 'rgba(0, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 255, 255, 0.8)',
                      borderRadius: '20px',
                      color: '#b0e0e6',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      textShadow: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 255, 255, 0.2)';
                      e.target.style.borderColor = 'var(--neon-green)';
                      e.target.style.color = 'var(--neon-green)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                      e.target.style.borderColor = 'rgba(0, 255, 255, 0.8)';
                      e.target.style.color = '#b0e0e6';
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
