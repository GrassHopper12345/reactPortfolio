import React from 'react';

function DecorativeAlien({ x, y, variant = 0 }) {
  const colors = [
    { bg: '#ff6666', border: '#ff0000', glow: '#ff4444' },
    { bg: '#ffaa00', border: '#ff8800', glow: '#ff9900' },
    { bg: '#00ff66', border: '#00ff00', glow: '#00ff44' },
  ];
  
  const color = colors[variant % colors.length];
  
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        width: '60px',
        height: '45px',
        zIndex: 30,
      }}
    >
      <div
        style={{
          width: '60px',
          height: '45px',
          backgroundColor: color.bg,
          borderRadius: '8px',
          border: `2px solid ${color.border}`,
          boxShadow: `0 0 15px ${color.glow}, inset 0 0 15px rgba(255, 255, 255, 0.3)`,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '8px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#000',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#000',
              borderRadius: '50%',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '30px',
            height: '8px',
            backgroundColor: color.border,
            borderRadius: '4px',
          }}
        />
      </div>
    </div>
  );
}

export default DecorativeAlien;

