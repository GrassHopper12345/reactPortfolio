import React from 'react';

function DecorativeAlien({ x, y, variant = 0, isMobile = false }) {
  const colors = [
    { bg: '#ff6666', border: '#ff0000', glow: '#ff4444' },
    { bg: '#ffaa00', border: '#ff8800', glow: '#ff9900' },
    { bg: '#00ff66', border: '#00ff00', glow: '#00ff44' },
  ];
  
  const color = colors[variant % colors.length];
  const size = isMobile ? { width: '40px', height: '30px' } : { width: '60px', height: '45px' };
  
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        ...size,
        zIndex: 30,
      }}
    >
      <div
        style={{
          ...size,
          backgroundColor: color.bg,
          borderRadius: isMobile ? '6px' : '8px',
          border: `2px solid ${color.border}`,
          boxShadow: `0 0 ${isMobile ? '10px' : '15px'} ${color.glow}, inset 0 0 ${isMobile ? '10px' : '15px'} rgba(255, 255, 255, 0.3)`,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: isMobile ? '8px' : '12px',
            justifyContent: 'center',
            marginTop: isMobile ? '5px' : '8px',
          }}
        >
          <div
            style={{
              width: isMobile ? '7px' : '10px',
              height: isMobile ? '7px' : '10px',
              backgroundColor: '#000',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: isMobile ? '7px' : '10px',
              height: isMobile ? '7px' : '10px',
              backgroundColor: '#000',
              borderRadius: '50%',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: isMobile ? '5px' : '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? '20px' : '30px',
            height: isMobile ? '5px' : '8px',
            backgroundColor: color.border,
            borderRadius: isMobile ? '3px' : '4px',
          }}
        />
      </div>
    </div>
  );
}

export default DecorativeAlien;

