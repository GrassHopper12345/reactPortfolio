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
                    <a href="#about" onClick={() => handleChange("About")} className={currentTab === "About" ? "nav-link active" : "nav-link"}>About</a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio" onClick={() => handleTabChange("Portfolio")} className={currentTab === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
                </li>
                <li className="nav-link">
                    <a href="#contact" onClick={() => handleTabChange("Contact")} className={currentTab === "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
                </li>
                <link className="nav-item">
                    <a href="#resume" onClick={() => handleTabChange("Resume")} className={currentTab === "Resume" ? "nav-link active" : "nav-link"}>Resume</a>
                </link>
            </ul>
        </nav>
    );
}
export default Nav;