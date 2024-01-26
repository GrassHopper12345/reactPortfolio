import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
    return (
        <footer>
            <h2> Created by Brian Hopper</h2>
            <p>
                <ul>
                    <a href="https://github.com/GrassHopper12345"></a>
                    <li className="logo"><VscGithubAlt /></li>
                    <a href="https://www.linkedin.com/in/mrhopper/"></a>
                    <li className="logo"><AiOutlineLinkedin /></li>
                </ul>
            </p>
        </footer>
    );
}

export default Footer;