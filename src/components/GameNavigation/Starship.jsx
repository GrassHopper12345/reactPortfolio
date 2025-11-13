import React from 'react';

function Starship({ x, y }) {
  return (
    <div
      className="starship"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '40px',
        height: '40px',
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: '0',
          height: '0',
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderBottom: '30px solid #00ff00',
          filter: 'drop-shadow(0 0 10px #00ff00)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '15px',
            left: '-10px',
            width: '20px',
            height: '10px',
            backgroundColor: '#00cc00',
            borderRadius: '5px',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '8px',
          height: '8px',
          backgroundColor: '#ffff00',
          borderRadius: '50%',
          boxShadow: '0 0 10px #ffff00',
        }}
      />
    </div>
  );
}

export default Starship;

