import React from "react";
import { Card } from "primereact/card";
import HeroAnimation from "../HeroAnimation";
import profilePic from "../../assets/profilePic/C9A040E7-5C0C-4033-AA29-BE4741219C99_1_105_c.jpeg"

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
            <div className="flex-row">
                <Card className="intro-card">
                    <div className="introInfo">
                        <div className="introImg">
                            <img id="profileImage" src={profilePic} style={{ height: '700px', width: '50%', marginLeft: '25%'}} alt="profile" />
                        </div>
                        <p>
                            Greetings! I am Brian Hopper,  I reside in Shreveport, Louisiana. I hold a B.A. in Cellular and Molecular Biology, a Masters in Health Science, and an MBA in Project Management all recieved from Louisiana State University Shreveport.  
                        </p>
                        <p>Furthermore, I have completed my certifications in Lean Six Sigma Green Belt and Lean Practitioner. I have completed my Scrum Master and Six Sigma Black Belt Certifications.</p>
                        <p>As a full-stack software engineer, I specialize in building dynamic, scalable web applications using modern technologies. My expertise spans the entire development stack, from crafting responsive user interfaces to architecting robust backend systems. I'm passionate about writing clean, maintainable code and continuously learning new technologies to stay at the forefront of software development. You can explore my technical proficiencies and project portfolio to see the frameworks and tools I work with.</p>
                        <p>Beyond my professional commitments, I am an active outdoorsman whether it be hiking, biking, wheeling, or just plain doing work outside my own home, I personally feel better outdoors.</p>
                        <p>By embracing this active lifestyle, I strive to put forth the same effort when I am at work. I have dedicated my life to the pursuit of knowing as much as I can which is evident in my resume. I am always looking to upskill myself to better understand the processes of all things that life has layed infront of me and so much more.</p>
                    </div>
                </Card>
            </div>
        </section>
    );
}

export default About;