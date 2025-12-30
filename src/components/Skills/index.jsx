import React from "react";
import Section from "../Section";
import { Card } from "primereact/card";
import { MdFoundation } from "react-icons/md";
import { GrTechnology, GrDocumentPerformance } from "react-icons/gr";
import { BsCloud, BsTools } from "react-icons/bs";
import { GiTestTubes } from "react-icons/gi";

// Reuse skills from Resume component
const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "Javascript",
    "ES5-ES7",
    "React",
    "RESTful APIs",
    "Materialize",
    "Bootstrap",
    "Handlebars"
  ],
  backend: [
    "Node.js",
    "Express",
    "Object-Relational Mapping",
    "Object-Oriented Programming",
    "Sequelize",
    "Jest",
    "Json Web Tokens (JWT)",
    "Bcrypt",
    "Model-View-Controller",
    "Webpack"
  ],
  cloudDevOps: [
    // TODO: Add actual cloud/DevOps skills if available
    "AWS (Basic)",
    "Git Version Control"
  ],
  testing: [
    "Jest",
    // TODO: Add more testing frameworks if available
  ],
  performance: [
    "MERN Stack",
    "MongoDB",
    "Mongoose",
    "NoSQL",
    "GraphQL",
    "Apollo",
    "State Management",
    "Progressive Web Apps"
  ],
  tools: [
    "Git",
    "Webpack",
    "Insomnia",
    // TODO: Add more tools if available
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
    title: "Cloud/DevOps", 
    items: skills.cloudDevOps, 
    icon: BsCloud,
    color: "var(--neon-cyan)"
  },
  { 
    title: "Testing", 
    items: skills.testing, 
    icon: GiTestTubes,
    color: "var(--neon-green)"
  },
  { 
    title: "Performance", 
    items: skills.performance, 
    icon: GrDocumentPerformance,
    color: "var(--neon-cyan)"
  },
  { 
    title: "Tools", 
    items: skills.tools, 
    icon: BsTools,
    color: "var(--neon-green)"
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
                border: '2px solid var(--neon-cyan)', 
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
                      border: '1px solid var(--neon-cyan)',
                      borderRadius: '20px',
                      color: 'var(--neon-cyan)',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(0, 255, 255, 0.2)';
                      e.target.style.borderColor = 'var(--neon-green)';
                      e.target.style.color = 'var(--neon-green)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                      e.target.style.borderColor = 'var(--neon-cyan)';
                      e.target.style.color = 'var(--neon-cyan)';
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

