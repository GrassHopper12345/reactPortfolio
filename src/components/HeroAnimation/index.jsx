import React, { useEffect, useRef, useState } from 'react';
import './HeroAnimation.css';

function HeroAnimation() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Game state
    const ship = {
      x: dimensions.width / 2,
      y: dimensions.height - 50,
      width: 40,
      height: 30,
    };

    const aliens = [
      { x: dimensions.width * 0.2, y: 100, speed: 0.3, direction: 1 },
      { x: dimensions.width * 0.4, y: 80, speed: 0.4, direction: 1 },
      { x: dimensions.width * 0.6, y: 120, speed: 0.35, direction: -1 },
      { x: dimensions.width * 0.8, y: 90, speed: 0.3, direction: -1 },
    ];

    const projectiles = [];
    let lastShot = 0;
    const shootInterval = 1500; // Shoot every 1.5 seconds

    const drawShip = (x, y) => {
      ctx.fillStyle = '#00ff00';
      ctx.beginPath();
      // Ship body (triangle)
      ctx.moveTo(x, y);
      ctx.lineTo(x - 20, y + 30);
      ctx.lineTo(x + 20, y + 30);
      ctx.closePath();
      ctx.fill();
      
      // Ship glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00ff00';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Engine glow
      ctx.fillStyle = '#ffff00';
      ctx.beginPath();
      ctx.arc(x, y + 30, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ffff00';
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawAlien = (x, y) => {
      ctx.fillStyle = '#ff4444';
      // Draw rounded rectangle manually
      ctx.beginPath();
      const rx = 8;
      const ry = 8;
      ctx.moveTo(x - 30 + rx, y - 25);
      ctx.lineTo(x + 30 - rx, y - 25);
      ctx.quadraticCurveTo(x + 30, y - 25, x + 30, y - 25 + ry);
      ctx.lineTo(x + 30, y + 25 - ry);
      ctx.quadraticCurveTo(x + 30, y + 25, x + 30 - rx, y + 25);
      ctx.lineTo(x - 30 + rx, y + 25);
      ctx.quadraticCurveTo(x - 30, y + 25, x - 30, y + 25 - ry);
      ctx.lineTo(x - 30, y - 25 + ry);
      ctx.quadraticCurveTo(x - 30, y - 25, x - 30 + rx, y - 25);
      ctx.closePath();
      ctx.fill();
      
      // Alien glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#ff4444';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Eyes
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x - 10, y - 5, 4, 0, Math.PI * 2);
      ctx.arc(x + 10, y - 5, 4, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawProjectile = (x, y) => {
      ctx.fillStyle = '#00ffff';
      ctx.fillRect(x - 2, y - 8, 4, 12);
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00ffff';
      ctx.fillRect(x - 2, y - 8, 4, 12);
      ctx.shadowBlur = 0;
    };

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update aliens (move side to side)
      aliens.forEach((alien) => {
        alien.x += alien.speed * alien.direction;
        if (alien.x < 50 || alien.x > dimensions.width - 50) {
          alien.direction *= -1;
        }
      });

      // Shoot projectiles periodically
      if (timestamp - lastShot > shootInterval) {
        projectiles.push({
          x: ship.x,
          y: ship.y,
          speed: 5,
        });
        lastShot = timestamp;
      }

      // Update and draw projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const proj = projectiles[i];
        proj.y -= proj.speed;

        // Check collision with aliens
        let hit = false;
        for (let j = 0; j < aliens.length; j++) {
          const alien = aliens[j];
          if (
            proj.x > alien.x - 30 &&
            proj.x < alien.x + 30 &&
            proj.y > alien.y - 25 &&
            proj.y < alien.y + 25
          ) {
            // Reset alien position when hit
            alien.x = Math.random() * (dimensions.width - 100) + 50;
            alien.y = 50 + Math.random() * 100;
            hit = true;
            break;
          }
        }

        // Remove projectile if it hit or went off screen
        if (hit || proj.y < 0) {
          projectiles.splice(i, 1);
        }
      }

      // Draw everything in correct order (back to front)
      // Draw projectiles first (behind aliens)
      projectiles.forEach((proj) => {
        drawProjectile(proj.x, proj.y);
      });

      // Draw aliens
      aliens.forEach((alien) => {
        drawAlien(alien.x, alien.y);
      });

      // Draw ship (in front)
      drawShip(ship.x, ship.y);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-animation-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default HeroAnimation;

