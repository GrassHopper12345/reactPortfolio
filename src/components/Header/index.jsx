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
        </div>
    );
}

export default Header;