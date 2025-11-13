import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// import ResumeDoc from "../../assets/files/Brian.Hopper.resume.fullstack.doc"
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";
import ResumeSS from "../../assets/files/ResumeSS.png";

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
                <Card className="resume-column" title="Front-End Frameworks">
                    <div className="column-text">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 0 }}>
                            <li className="logo" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--neon-cyan)', textAlign: 'center' }}><MdFoundation /></li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>HTML5</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>CSS3</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Javascript</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>ES5-ES7</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>React</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>RESTful APIs</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Materialize</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Bootstrap</li>
                            <li style={{ marginBottom: 0, color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Handlebars</li>
                        </ul>
                    </div>
                </Card>

                <Card className="resume-column" title="Back-End Frameworks">
                    <div className="column-text">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 0 }}>
                            <li className="logo" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--neon-cyan)', textAlign: 'center' }}><GrTechnology /></li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Node.js</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Express</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Object-Relation--Mapping</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Object-Oriented Programming</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Sequelize</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Jest</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Json Web Tokens (JWT)</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Bcrypt</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Model-View-Controller</li>
                            <li style={{ marginBottom: 0, color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Web-Pack</li>
                        </ul>
                    </div>
                </Card>

                <Card className="resume-column" title="Performance Frameworks">
                    <div className="column-text">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 0 }}>
                            <li className="logo" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--neon-cyan)', textAlign: 'center' }}><GrDocumentPerformance /></li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>MERN Stack</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>MongoDB</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Mongoose</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>NoSQL</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>GraphQL</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Apollo</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>State Management</li>
                            <li style={{ marginBottom: '0.4rem', color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Progressive Web Apps</li>
                            <li style={{ marginBottom: 0, color: 'var(--neon-cyan)', paddingLeft: '1rem' }}>Git Version Control</li>
                        </ul>
                    </div>
                </Card>
            </section>
        </div>
    );
}

export default ResumeFunction;