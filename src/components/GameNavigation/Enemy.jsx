import React from 'react';

function Enemy({ x, y, label, isHit, hitCount = 0, onHit, isMobile = false }) {
  const healthPercent = Math.max(0, (10 - hitCount) / 10);
  const healthColor = healthPercent > 0.5 ? '#00ff00' : healthPercent > 0.25 ? '#ffff00' : '#ff0000';
  const size = isMobile ? { width: '60px', height: '45px' } : { width: '80px', height: '60px' };
  
  return (
    <div
      className="enemy"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        ...size,
        zIndex: 50,
        opacity: isHit ? 0 : 1,
        transition: isHit ? 'opacity 0.3s' : 'none',
        touchAction: 'none',
      }}
      onClick={onHit}
    >
      <div
            style={{
              ...size,
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
        {hitCount > 0 && hitCount < 10 && (
          <div
            style={{
              position: 'absolute',
              top: '-8px',
              left: '0',
              width: '100%',
              height: '4px',
              backgroundColor: '#333',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${healthPercent * 100}%`,
                height: '100%',
                backgroundColor: healthColor,
                transition: 'width 0.2s, background-color 0.2s',
                boxShadow: `0 0 5px ${healthColor}`,
              }}
            />
          </div>
        )}
        
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
          {label} {hitCount > 0 && hitCount < 10 && `(${hitCount}/10)`}
        </div>
      </div>
    </div>
  );
}

export default Enemy;

