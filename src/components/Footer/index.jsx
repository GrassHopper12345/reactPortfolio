import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <h2> Created by Brian Hopper</h2>
                <ul>
                    <li className="logo">
                        <a href="https://github.com/GrassHopper12345" aria-label="Visit GitHub profile">
                        <VscGithubAlt />
                        </a>
                    </li>
                    <li className="logo">
                        <a href="https://www.linkedin.com/in/mrhopper/" aria-label="Visit LinkedIn profile">
                        <AiOutlineLinkedin />
                        </a>
                    </li>
                </ul>
        </footer>
    );
}

export default Footer;