import React, { useState, useEffect } from "react";
import Navi from "../Navi";
import { setupSectionTracking } from "../../utils/scrollUtils";

function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const cleanup = setupSectionTracking(setActiveSection);
    return cleanup;
  }, []);

  return (
    <div>
      <section>
        <header style={{ position: 'relative' }}>
          <div>
            <h1>Brian Hopper's Portfolio</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <Navi activeSection={activeSection} />
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
