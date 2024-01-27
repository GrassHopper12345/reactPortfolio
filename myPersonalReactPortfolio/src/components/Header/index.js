import React from "react";
import Navi from "../Navi";

function Header(props) {
    const { currentTab, handleTabChange } = props;
    return (
        <div>
            <section>
                <header>
                    <div>
                        <h1>Brian Hopper's Portfolio</h1>
                    </div>
                    <div>
                        <Navi
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        ></Navi>
                    </div>
                </header>
            </section>
            <section class="hero">
                <div class="hero-cta">
                    <h2>Welcome</h2>
                    <p>Welcome to Brian Hopper's Portfolio utilizing React. Here, you will find the projects and frameworks I have used throughout my Developer Bootcamp program.</p>
                </div>
            </section>
        </div>
    );
}

export default Header;