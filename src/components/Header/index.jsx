import React from "react";
import { Button } from "primereact/button";
import Navi from "../Navi";

function Header(props) {
    const { currentTab, handleTabChange, gameMode, setGameMode } = props;
    return (
        <div>
            <section>
                <header>
                    <div>
                        <h1>Brian Hopper's Portfolio</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        <Button
                            icon={gameMode ? "pi pi-times" : "pi pi-gamepad"}
                            label={gameMode ? "Exit Game" : "Game Mode"}
                            onClick={() => setGameMode(!gameMode)}
                            className="game-mode-toggle"
                            severity={gameMode ? "danger" : "success"}
                        />
                        {!gameMode && (
                            <Navi
                                currentTab={currentTab}
                                handleTabChange={handleTabChange}
                            />
                        )}
                    </div>
                </header>
            </section>
        </div>
    );
}

export default Header;