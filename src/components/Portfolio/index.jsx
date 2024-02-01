import React from "react";
import cliLogoGen from "../../assets/projectPics/cliLogoGenerator.png";
import codeQuiz from "../../assets/projectPics/CodeQuiz.png";
import eCommerce from "../../assets/projectPics/E-Commerce-Back-End.png";
import fundMyFarm from "../../assets/projectPics/Fund_My_Farm.png";
import noteTaker from "../../assets/projectPics/NoteTaker.png";
import pwa from "../../assets/projectPics/PWA-TextEditor.png";
import readmeGen from "../../assets/projectPics/ReadMEGenerator.png";
import socialNetwork from "../../assets/projectPics/Social-Network-API.png";
import weatherApp from "../../assets/projectPics/weatherApp.png";
import weatherWays from "../../assets/projectPics/WeatherWays.png";

function Portfolio() {
    return (
        <div>
            <section id="work" className="jobs">
                <div className="flex-row">
                    <h2 className="section-title secondary-border">Work</h2>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/logoGenerator">
                                <img
                                    src={cliLogoGen}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="CLI-LogoGenerator" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>CLI-LogoGenerator</h4>
                            <p>
                                This application enables a user to enter select inputs into inquirer prompts that will generate a logo.svg file that contains the users select input data and save it as an svg file.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/codeQuiz">
                                {" "}
                                <img
                                    src={codeQuiz}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="CodeQuiz" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>CodeQuiz</h4>
                            <p>
                                AS A student, I wanted a way to test my coding knowledge as well as my fellow piers knowledge about web development. This application contains questions that will test the users knowledge about programming languages.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/ORM-E-Commerce-BE">
                                {" "}
                                <img
                                    src={eCommerce}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="E-Commerce: Back-End" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>E-Commerce: Back-End</h4>
                            <p>
                                ORM-E-Commerce-BE is a backend application that providesdatabase creation with the options to add, delete, update data into the application via Insominia. This application utilizes dotenv, mysql2, sequalize, and express frameworks.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/fund-my-farm">
                                {" "}
                                <img
                                    src={fundMyFarm}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="Fund My Farm" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Fund My Farm</h4>
                            <p>
                                What is Fund My Farm: E-Commerce? Well we wanted to bring back farms to the market through the internet. We felt that having the ability to see what type of agriculture a farm has just by going to the web could benefit someone looking for the right farm. Also did you know Fund my Farm will allow you to invest right from the website so you will be able to reserve the agriculture that you desire. As a team we learned a lot not just about farms and agriculture but we also learned many new techniques as a full stack development team.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/NoteTaker">
                                {" "}
                                <img
                                    src={noteTaker}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="NoteTaker" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>NoteTaker</h4>
                            <p>
                                Note Taker Express is a simple to use personal use note taking application. This application utilizes Node.js and Expresss.js. The express.js runs the backend as well as retrieves from and saves notes to the database as a JSON file.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/progressiveWebApplication-TextEditor">
                                {" "}
                                <img
                                    src={pwa}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="PWA: TextEditor" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>PWA: TextEditor</h4>
                            <p>
                                This application is a web based web application where a user can create code snippets or notes with or without a connection to the internet. A user can retrieve saved notes and code snippets once connected to the internet. Using the integrated service worker interface and Cache API's, the application will remain functional offline. This application will allow a user to interact with the application while remaining offline.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/readMeGenerator">
                                {" "}
                                <img
                                    src={readmeGen}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="Readme Generator" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Readme Generator</h4>
                            <p>
                                This project is a personal README file generator that prompts its user multiple questions to build a high quality README file.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/Social-Network-API">
                                {" "}
                                <img
                                    src={socialNetwork}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="Social-Network: API" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Social-Network: API</h4>
                            <p>
                                This API is for a social network application where a user can share their personal or professional thoughts, react to a friends' thought or thoughts, as well as creat a friends list. The web application uses MongoDB for databases, Mongoose for ODM, Express.js for routing, and Moment.js for date & timestamps. The data is seeded using Insomnia.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/weatherApp">
                                {" "}
                                <img
                                    src={weatherApp}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="WeatherApp" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>WeatherApp</h4>
                            <p>
                                This application contains a search input for a user to personally search any given city globally to determine the given destinations weather for 6 days. 6 days of weather include the current day and 5 additional days after. The application also contains quick links for major U.S. cities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/GrassHopper12345/WeatherWays">
                                {" "}
                                <img
                                    src={weatherWays}
                                    className="my-2"
                                    style={{ width: "" }}
                                    alt="WeatherWays" />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>WeatherWays</h4>
                            <p>
                                WeatherWay is a web application that allows users to input cities for its 7-day forecast and it current traffic. It was built using HTML, CSS, and JavaScript and is designed to be simple and user-friendly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
