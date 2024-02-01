import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        currentTab, handleChange,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentTab.name);
    }, [currentTab]);

    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="about" onClick={() => props.handleTabChange("About")} className={currentTab === "About" ? "nav-link active" : "nav-link"}>About</a>
                </li>
                <li className="nav-item">
                    <a href="portfolio" onClick={() => props.handleTabChange("Portfolio")} className={currentTab === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
                </li>
                <li className="nav-link">
                    <a href="contact" onClick={() => props.handleTabChange("Contact")} className={currentTab === "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
                </li>
                <li className="nav-item">
                    <a href="resume" onClick={() => props.handleTabChange("Resume")} className={currentTab === "Resume" ? "nav-link active" : "nav-link"}>Resume</a>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;