import React from "react";
import { Button } from "primereact/button";

function Nav(props) {
    const { currentTab, handleTabChange } = props;

    const navItems = [
        { id: "About", label: "About" },
        { id: "Portfolio", label: "Portfolio" },
        { id: "Contact", label: "Contact" },
        { id: "Resume", label: "Resume" },
    ];

    return (
        <nav style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {navItems.map((item) => (
                <Button
                    key={item.id}
                    label={item.label}
                    onClick={() => handleTabChange(item.id)}
                    className={`nav-button game-themed-button ${currentTab === item.id ? 'active' : ''}`}
                    severity={currentTab === item.id ? "info" : "secondary"}
                    outlined={currentTab !== item.id}
                />
            ))}
        </nav>
    );
}
export default Nav;