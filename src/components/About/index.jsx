import React from "react";
import { Card } from "primereact/card";
import HeroAnimation from "../HeroAnimation";
import profilePic from "../../assets/profilePic/C9A040E7-5C0C-4033-AA29-BE4741219C99_1_105_c.jpeg"

const aboutContent = [
    "Greetings! I am Brian Hopper, I reside in Shreveport, Louisiana. I hold a B.A. in Cellular and Molecular Biology, a Masters in Health Science, and an MBA in Project Management all received from Louisiana State University Shreveport.",
    "Furthermore, I have completed my certifications in Lean Six Sigma Green Belt and Lean Practitioner. I have completed my Scrum Master and Six Sigma Black Belt Certifications.",
    "As a full-stack software engineer, I specialize in building dynamic, scalable web applications using modern technologies. My expertise spans the entire development stack, from crafting responsive user interfaces to architecting robust backend systems. I'm passionate about writing clean, maintainable code and continuously learning new technologies to stay at the forefront of software development. You can explore my technical proficiencies and project portfolio to see the frameworks and tools I work with.",
    "Beyond my professional commitments, I am an active outdoorsman whether it be hiking, biking, wheeling, or just plain doing work outside my own home, I personally feel better outdoors.",
    "By embracing this active lifestyle, I strive to put forth the same effort when I am at work. I have dedicated my life to the pursuit of knowing as much as I can which is evident in my resume. I am always looking to upskill myself to better understand the processes of all things that life has laid in front of me and so much more."
];

function About() {
    return (
        <section className="my-5 intro" id="about-me">
            <div className="flex-row">
                <h1 id="about" className="section-title">About Me</h1>
            </div>
            <section className="hero">
                <HeroAnimation />
                <div className="hero-cta">
                    <h2>Welcome</h2>
                    <p>Welcome to Brian Hopper's Portfolio. Here, you will find the projects and frameworks I have used throughout my career.</p>
                </div>
            </section>
            <div className="flex-row" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Card className="intro-card" style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
                    <div className="introInfo">
                        <div className="about-header">
                            <h2 className="greeting-title">Greetings!</h2>
                        </div>
                        <div className="about-content-wrapper">
                            <div className="introImg">
                                <div className="profile-image-container">
                                    <img id="profileImage" src={profilePic} alt="Brian Hopper" />
                                </div>
                            </div>
                            <div className="intro-text-content">
                                {aboutContent.map((paragraph, index) => (
                                    <p key={index} className="about-paragraph">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

export default About;