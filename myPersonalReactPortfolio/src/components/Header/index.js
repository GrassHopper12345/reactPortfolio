import React from "react";
import Nav from "../Nav";

function Header() {
    return (
        <div>
            <section>
                <header>
                    <div>
                        <h1>Brian Hopper's Portfolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        ></Nav>
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