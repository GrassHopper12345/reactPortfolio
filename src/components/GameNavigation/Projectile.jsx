import React from 'react';

function Projectile({ x, y }) {
  return (
    <div
      className="projectile"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '4px',
        height: '12px',
        backgroundColor: '#00ffff',
        boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
        borderRadius: '2px',
        zIndex: 100,
      }}
    />
  );
}

export default Projectile;

