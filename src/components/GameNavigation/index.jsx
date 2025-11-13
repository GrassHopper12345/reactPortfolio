import React, { useState, useEffect, useRef, useCallback } from 'react';
import Starship from './Starship';
import Projectile from './Projectile';
import Enemy from './Enemy';
import GameCanvas from './GameCanvas';
import { checkCollision, generateStars, updateStars, clamp, createExplosion, updateParticles } from '../../utils/gameUtils';

const getGameDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});
const SHIP_SPEED = 5;
const PROJECTILE_SPEED = 10;

function GameNavigation({ onNavigate, isActive }) {
  const [dimensions, setDimensions] = useState(getGameDimensions());
  const initialShipX = dimensions.width / 2;
  const initialShipY = dimensions.height - 100;
  const [shipX, setShipX] = useState(initialShipX);
  const [shipY, setShipY] = useState(initialShipY);
  const [projectiles, setProjectiles] = useState([]);
  const [stars, setStars] = useState(generateStars(100, dimensions.width, dimensions.height));
  const [explosions, setExplosions] = useState([]);
  const [keys, setKeys] = useState({});
  const [mousePos, setMousePos] = useState({ x: initialShipX, y: initialShipY });
  const gameContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const shipPosRef = useRef({ x: initialShipX, y: initialShipY });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newDims = getGameDimensions();
      setDimensions(newDims);
      const newX = newDims.width / 2;
      const newY = newDims.height - 100;
      setShipX(newX);
      setShipY(newY);
      shipPosRef.current = { x: newX, y: newY };
      setStars(generateStars(100, newDims.width, newDims.height));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [hitEnemies, setHitEnemies] = useState(new Set());

  // Navigation enemies configuration - recalculate on dimension changes
  const enemies = React.useMemo(() => [
    { id: 'About', label: 'About', x: dimensions.width * 0.2, y: 100 },
    { id: 'Portfolio', label: 'Portfolio', x: dimensions.width * 0.4, y: 100 },
    { id: 'Contact', label: 'Contact', x: dimensions.width * 0.6, y: 100 },
    { id: 'Resume', label: 'Resume', x: dimensions.width * 0.8, y: 100 },
  ], [dimensions]);

  // Handle keyboard input
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e) => {
      setKeys((prev) => ({ ...prev, [e.key]: true }));
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        shoot();
      }
    };

    const handleKeyUp = (e) => {
      setKeys((prev) => {
        const newKeys = { ...prev };
        delete newKeys[e.key];
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isActive]);

  // Handle mouse movement
  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e) => {
      if (gameContainerRef.current) {
        const rect = gameContainerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleClick = (e) => {
      if (isActive) {
        e.preventDefault();
        shoot();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [isActive]);

  // Shoot projectile - use ref to get current position
  const shoot = useCallback(() => {
    const currentPos = shipPosRef.current;
    setProjectiles((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x: currentPos.x,
        y: currentPos.y - 20,
      },
    ]);
  }, []);

  // Game loop
  useEffect(() => {
    if (!isActive) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const gameLoop = () => {
      // Update ship position based on keyboard or mouse
      setShipX((prevX) => {
        let newX = prevX;
        if (keys['ArrowLeft'] || keys['a'] || keys['A']) {
          newX -= SHIP_SPEED;
        }
        if (keys['ArrowRight'] || keys['d'] || keys['D']) {
          newX += SHIP_SPEED;
        }
        if (keys['ArrowUp'] || keys['w'] || keys['W']) {
          setShipY((prevY) => {
            const newY = clamp(prevY - SHIP_SPEED, 50, dimensions.height - 50);
            shipPosRef.current.y = newY;
            return newY;
          });
        }
        if (keys['ArrowDown'] || keys['s'] || keys['S']) {
          setShipY((prevY) => {
            const newY = clamp(prevY + SHIP_SPEED, 50, dimensions.height - 50);
            shipPosRef.current.y = newY;
            return newY;
          });
        }
        // Mouse following (smooth)
        if (!keys['ArrowLeft'] && !keys['ArrowRight'] && !keys['a'] && !keys['A'] && !keys['d'] && !keys['D']) {
          newX = prevX + (mousePos.x - prevX) * 0.1;
        }
        const finalX = clamp(newX, 20, dimensions.width - 20);
        shipPosRef.current.x = finalX;
        return finalX;
      });

      setShipY((prevY) => {
        if (!keys['ArrowUp'] && !keys['ArrowDown'] && !keys['w'] && !keys['W'] && !keys['s'] && !keys['S']) {
          const newY = prevY + (mousePos.y - prevY) * 0.1;
          shipPosRef.current.y = newY;
          return newY;
        }
        return prevY;
      });

      // Update projectiles
      setProjectiles((prev) =>
        prev
          .map((proj) => ({
            ...proj,
            y: proj.y - PROJECTILE_SPEED,
          }))
          .filter((proj) => proj.y > -20)
      );

      // Check collisions
      setProjectiles((prevProjectiles) => {
        const remainingProjectiles = [];
        const newExplosions = [];

        prevProjectiles.forEach((proj) => {
          let hit = false;
          enemies.forEach((enemy) => {
            if (!hitEnemies.has(enemy.id)) {
              const projRect = {
                x: proj.x - 2,
                y: proj.y - 6,
                width: 4,
                height: 12,
              };
              const enemyRect = {
                x: enemy.x - 40,
                y: enemy.y - 30,
                width: 80,
                height: 60,
              };

              if (checkCollision(projRect, enemyRect)) {
                hit = true;
                setHitEnemies((prev) => new Set([...prev, enemy.id]));
                const explosionParticles = createExplosion(enemy.x, enemy.y);
                if (explosionParticles && explosionParticles.length > 0) {
                  newExplosions.push(explosionParticles);
                }
                // Navigate to the section
                setTimeout(() => {
                  onNavigate(enemy.id);
                }, 100); // Small delay to show explosion
              }
            }
          });

          if (!hit) {
            remainingProjectiles.push(proj);
          }
        });

        if (newExplosions.length > 0) {
          setExplosions((prev) => [...prev, ...newExplosions]);
        }

        return remainingProjectiles;
      });

      // Update explosions
      setExplosions((prev) => {
        const updated = prev.map((explosion) => {
          if (Array.isArray(explosion)) {
            return updateParticles(explosion);
          }
          return explosion;
        }).filter((particles) => Array.isArray(particles) && particles.length > 0);
        return updated;
      });

      // Update stars
      setStars((prevStars) => {
        const updated = [...prevStars];
        updateStars(updated, dimensions.height);
        return updated;
      });

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    }, [isActive, keys, mousePos, shipX, shipY, hitEnemies, onNavigate, dimensions]);

  if (!isActive) return null;

  return (
    <div
      ref={gameContainerRef}
      className="game-navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        zIndex: 9998,
        overflow: 'hidden',
      }}
    >
      <GameCanvas stars={stars} width={dimensions.width} height={dimensions.height} />
      
      {enemies.map((enemy) => (
        <Enemy
          key={enemy.id}
          x={enemy.x}
          y={enemy.y}
          label={enemy.label}
          isHit={hitEnemies.has(enemy.id)}
          onHit={() => {
            if (!hitEnemies.has(enemy.id)) {
              setHitEnemies((prev) => new Set([...prev, enemy.id]));
              const explosionParticles = createExplosion(enemy.x, enemy.y);
              if (explosionParticles && explosionParticles.length > 0) {
                setExplosions((prev) => [...prev, explosionParticles]);
              }
              // Navigate to the section
              setTimeout(() => {
                onNavigate(enemy.id);
              }, 100); // Small delay to show explosion
            }
          }}
        />
      ))}

      <Starship x={shipX} y={shipY} />

      {projectiles.map((proj) => (
        <Projectile key={proj.id} x={proj.x} y={proj.y} />
      ))}

      {explosions.flat().map((particle, pIdx) => (
        <div
          key={pIdx}
          style={{
            position: 'absolute',
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: `rgba(255, ${255 - particle.life * 8}, 0, ${particle.life / particle.maxLife})`,
            borderRadius: '50%',
            boxShadow: `0 0 ${particle.size * 2}px rgba(255, ${255 - particle.life * 8}, 0, 0.8)`,
            pointerEvents: 'none',
            zIndex: 75,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: '#fff',
          fontSize: '16px',
          zIndex: 10000,
        }}
      >
        <div>Use Arrow Keys or Mouse to Move</div>
        <div>Spacebar or Click to Shoot</div>
        <div>Shoot the enemies to navigate!</div>
      </div>
    </div>
  );
}

export default GameNavigation;

