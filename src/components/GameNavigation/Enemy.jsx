import React from 'react';

function Enemy({ x, y, label, isHit, onHit }) {
  return (
    <div
      className="enemy"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        width: '80px',
        height: '60px',
        zIndex: 50,
        opacity: isHit ? 0 : 1,
        transition: isHit ? 'opacity 0.3s' : 'none',
      }}
      onClick={onHit}
    >
      {/* Alien/enemy shape */}
      <div
        style={{
          width: '80px',
          height: '60px',
          backgroundColor: '#ff4444',
          borderRadius: '10px',
          border: '3px solid #ff0000',
          boxShadow: '0 0 20px #ff4444, inset 0 0 20px rgba(255, 0, 0, 0.5)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {/* Eyes */}
        <div
          style={{
            display: 'flex',
            gap: '15px',
            marginTop: '-10px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#000',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#000',
              borderRadius: '50%',
            }}
          />
        </div>
        {/* Label */}
        <div
          style={{
            position: 'absolute',
            bottom: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold',
            textShadow: '0 0 5px #000',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default Enemy;

