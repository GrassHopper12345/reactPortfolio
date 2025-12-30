import React from "react";

function Section({ id, className = "", children, ariaLabel }) {
  return (
    <section 
      id={id} 
      className={`section-wrapper ${className}`}
      aria-label={ariaLabel || id}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}

export default Section;

