import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";
import ResumeSS from "../../assets/files/ResumeSS.png";

const proficiencies = {
    frontEnd: [
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
    backEnd: [
        "Node.js",
        "Express",
        "Object-Relation--Mapping",
        "Object-Oriented Programming",
        "Sequelize",
        "Jest",
        "Json Web Tokens (JWT)",
        "Bcrypt",
        "Model-View-Controller",
        "Web-Pack"
    ],
    performance: [
        "MERN Stack",
        "MongoDB",
        "Mongoose",
        "NoSQL",
        "GraphQL",
        "Apollo",
        "State Management",
        "Progressive Web Apps",
        "Git Version Control"
    ]
};

const ProficiencyCard = ({ title, items, icon: Icon }) => (
    <Card className="resume-column" title={title}>
        <div className="column-text">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--neon-cyan)', textAlign: 'center' }}>
                <Icon />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {items.map((item, index) => (
                    <div 
                        key={index}
                        style={{ 
                            color: 'var(--neon-cyan)', 
                            paddingLeft: '1rem',
                            marginBottom: index === items.length - 1 ? 0 : '0.4rem'
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </Card>
);

function ResumeFunction() {
    return (
        <div>
            <section className="welcome-section" id="download-intro">
                <div className="flex-row">
                    <h2 className="section-title">My Resume</h2>
                </div>
                <div className="flex-row" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '0' }}>
                    <Card className="download-card" style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                        <div className="download-text" style={{ textAlign: 'center' }}>
                            <a href="/Resume.pdf" download="Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <img src={ResumeSS} style={{width: '50%', margin: '0 auto', display: 'block', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0, 255, 255, 0.2)'}} alt="Resume" />
                            </a>
                            <Button 
                                icon="pi pi-download" 
                                label="Download Resume" 
                                onClick={() => window.open('/Resume.pdf', '_blank')}
                                className="game-themed-button"
                                style={{ marginTop: '1rem' }}
                            />
                            <p style={{ marginTop: '1rem', marginBottom: '0' }}>Please check out my Proficiencies!</p>
                        </div>
                    </Card>
                </div>
            </section>
            <section className="resume-body" id="home-page-body" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))', gap: '2rem', padding: '0.5rem 2rem 8rem 2rem', maxWidth: '1400px', margin: '0 auto', justifyContent: 'center', alignItems: 'start' }}>
                <ProficiencyCard 
                    title="Front-End Frameworks" 
                    items={proficiencies.frontEnd} 
                    icon={MdFoundation} 
                />
                <ProficiencyCard 
                    title="Back-End Frameworks" 
                    items={proficiencies.backEnd} 
                    icon={GrTechnology} 
                />
                <ProficiencyCard 
                    title="Performance Frameworks" 
                    items={proficiencies.performance} 
                    icon={GrDocumentPerformance} 
                />
            </section>
        </div>
    );
}

export default ResumeFunction;