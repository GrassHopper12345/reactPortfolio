import React from "react";
import resume from "../../assets/files/myPersonalReactPortfolio/src/assets/files/Brian.Hopper.resume.FullStack.doc";
import { BsCloudDownload } from "react-icons/bs";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume() {
    return (
        <div>
            <section className="welcome-section" id="download-intro">
                <div className="flex-row">
                    <h2 className="section-title primary-border">My Resume</h2>
                </div>
                <div className="flex-row">
                    <div className="download-info">
                        <div className="download-text">
                            <a href={resume} className="download-logo" download><BsCloudDownload /></a>
                            <p>Please check out my Proficiencies!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resume-body" id="home-page-body">
                <div className="article column1">
                    <p className="column-title">Front-End Frameworks</p>
                    <p className="column-text">
                        <ul>
                            <li className="logo"><MdFoundation /></li>
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
                    </p>
                </div>

                <div className="article column2">
                    <p className="column-title">Back-End Frameworks</p>
                    <p className="column-text">
                        <ul>
                            <li className="logo"><GrTechnology /></li>
                            <li></li>
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
                    </p>
                </div>

                <div className="article column3">
                    <p className="column-title">Performance Frameworks</p>
                    <p className="column-text">
                        <ul>
                            <li className="logo"><GrDocumentPerformance /></li>
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
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Resume;