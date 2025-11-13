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
                <div className="flex-row" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
                            <p style={{ marginTop: '1rem' }}>Please check out my Proficiencies!</p>
                        </div>
                    </Card>
                </div>
            </section>
            <section className="resume-body" id="home-page-body" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <Card className="resume-column" title="Front-End Frameworks">
                    <div className="column-text">
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li className="logo" style={{ fontSize: '2rem', marginBottom: '1rem' }}><MdFoundation /></li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>ES5-ES7</li>
                            <li>GIT</li>
                            <li>APIs</li>
                            <li>Materialize</li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                        </ul>
                    </div>
                </Card>

                <Card className="resume-column" title="Back-End Frameworks">
                    <div className="column-text">
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li className="logo" style={{ fontSize: '2rem', marginBottom: '1rem' }}><GrTechnology /></li>
                            <li>Object-Relation--Mapping</li>
                            <li>Object-Oriented Programming</li>
                            <li>Sequelize</li>
                            <li>Express</li>
                            <li>Jest</li>
                            <li>Node.Js</li>
                            <li>Json Web Tokens</li>
                            <li>Bcrypt</li>
                            <li>Model-View-Controller</li>
                            <li>Web-Pack</li>
                        </ul>
                    </div>
                </Card>

                <Card className="resume-column" title="Performance Frameworks">
                    <div className="column-text">
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li className="logo" style={{ fontSize: '2rem', marginBottom: '1rem' }}><GrDocumentPerformance /></li>
                            <li>NoSQL</li>
                            <li>Mongoose</li>
                            <li>MongoDB</li>
                            <li>GraphQL</li>
                            <li>Apollo</li>
                            <li>MERN</li>
                            <li>State</li>
                            <li>React</li>
                            <li>Progressive Web Applications</li>
                        </ul>
                    </div>
                </Card>
            </section>
        </div>
    );
}

export default ResumeFunction;