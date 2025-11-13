import React, { useState, useEffect, useRef, useCallback } from 'react';
import Starship from './Starship';
import Projectile from './Projectile';
import Enemy from './Enemy';
import DecorativeAlien from './DecorativeAlien';
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
  
  // Update dimensions when component mounts or becomes active
  useEffect(() => {
    if (isActive) {
      const newDims = getGameDimensions();
      setDimensions(newDims);
    }
  }, [isActive]);

  const initialShipX = dimensions.width > 0 ? dimensions.width / 2 : window.innerWidth / 2;
  const initialShipY = dimensions.height > 0 ? dimensions.height - 80 : window.innerHeight - 80;
  const [shipX, setShipX] = useState(initialShipX);
  const [shipY, setShipY] = useState(initialShipY);
  const [projectiles, setProjectiles] = useState([]);
  const [stars, setStars] = useState(() => {
    const dims = dimensions.width > 0 && dimensions.height > 0 
      ? dimensions 
      : getGameDimensions();
    return generateStars(100, dims.width, dims.height);
  });
  const [explosions, setExplosions] = useState([]);
  const [keys, setKeys] = useState({});
  const [mousePos, setMousePos] = useState({ x: initialShipX, y: initialShipY });
  const [touchPos, setTouchPos] = useState(null); // Track active touch
  const [isMobile, setIsMobile] = useState(false);
  const gameContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const shipPosRef = useRef({ x: initialShipX, y: initialShipY });
  const lastShootTimeRef = useRef(0);
  const SHOOT_COOLDOWN = 150; // Milliseconds between shots

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768 ||
        ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newDims = getGameDimensions();
      setDimensions(newDims);
      const newX = newDims.width / 2;
      const newY = newDims.height - 80; // Start at bottom
      setShipX(newX);
      setShipY(newY);
      shipPosRef.current = { x: newX, y: newY };
      setStars(generateStars(100, newDims.width, newDims.height));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [hitEnemies, setHitEnemies] = useState(new Set());
  const [enemyHitCounts, setEnemyHitCounts] = useState(new Map()); // Track hit counts for each enemy
  const [decorativeAliens, setDecorativeAliens] = useState([]); // Decorative aliens that move around
  const decorativeAliensRef = useRef([]); // Ref to track current decorative aliens for collision detection
  const navigationTimeoutRef = useRef(null);
  const hasNavigatedRef = useRef(false);
  const [showGameOver, setShowGameOver] = useState(false); // Show "You Died" message

  // Initialize decorative aliens when game mode is activated
  useEffect(() => {
    if (isActive && dimensions.width > 0 && dimensions.height > 0) {
      // Create decorative aliens that move around
      const aliens = [];
      for (let i = 0; i < 8; i++) {
        aliens.push({
          id: `decorative-${i}`,
          x: Math.random() * dimensions.width,
          y: Math.random() * (dimensions.height * 0.6) + dimensions.height * 0.2, // Lower half of screen
          vx: (Math.random() - 0.5) * 2, // Random horizontal velocity
          vy: (Math.random() - 0.5) * 1.5, // Random vertical velocity
          variant: Math.floor(Math.random() * 3),
        });
      }
      setDecorativeAliens(aliens);
      decorativeAliensRef.current = aliens;
    }
  }, [isActive, dimensions]);

      // Reset hit enemies when game mode is activated
      useEffect(() => {
        if (isActive) {
          setHitEnemies(new Set());
          setEnemyHitCounts(new Map());
          setProjectiles([]);
          setExplosions([]);
          setShowGameOver(false);
          hasNavigatedRef.current = false;
          // Reset starship to bottom of screen
          const newDims = getGameDimensions();
          const newX = newDims.width / 2;
          const newY = newDims.height - 80; // Start at bottom
          setShipX(newX);
          setShipY(newY);
          shipPosRef.current = { x: newX, y: newY };
          // Clear any pending navigation timeouts
          if (navigationTimeoutRef.current) {
            clearTimeout(navigationTimeoutRef.current);
            navigationTimeoutRef.current = null;
          }
        }
        // Don't clear timeout when deactivating - let navigation complete
        // hasNavigatedRef will be reset when game mode is reactivated
      }, [isActive]);

  // Navigation enemies configuration - recalculate on dimension changes
  const enemies = React.useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) {
      return [];
    }
    // Adjust enemy positions for mobile
    const isSmallScreen = dimensions.width <= 768;
    if (isSmallScreen) {
      // Stack enemies vertically on mobile
      return [
        { id: 'About', label: 'About', x: dimensions.width * 0.5, y: dimensions.height * 0.15 },
        { id: 'Portfolio', label: 'Portfolio', x: dimensions.width * 0.5, y: dimensions.height * 0.3 },
        { id: 'Contact', label: 'Contact', x: dimensions.width * 0.5, y: dimensions.height * 0.45 },
        { id: 'Resume', label: 'Resume', x: dimensions.width * 0.5, y: dimensions.height * 0.6 },
      ];
    }
    return [
      { id: 'About', label: 'About', x: dimensions.width * 0.2, y: 100 },
      { id: 'Portfolio', label: 'Portfolio', x: dimensions.width * 0.4, y: 100 },
      { id: 'Contact', label: 'Contact', x: dimensions.width * 0.6, y: 100 },
      { id: 'Resume', label: 'Resume', x: dimensions.width * 0.8, y: 100 },
    ];
  }, [dimensions]);

  // Shoot projectile - use ref to get current position
  // Define this BEFORE the useEffect hooks that use it
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
  }, [isActive, shoot]);

  // Handle mouse movement (desktop)
  useEffect(() => {
    if (!isActive || isMobile) return;

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
        const now = Date.now();
        if (now - lastShootTimeRef.current > SHOOT_COOLDOWN) {
          lastShootTimeRef.current = now;
          shoot();
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [isActive, isMobile, shoot]);

  // Handle touch events (mobile/tablet)
  useEffect(() => {
    if (!isActive || !isMobile) return;

    const handleTouchStart = (e) => {
      e.preventDefault();
      if (gameContainerRef.current && e.touches.length > 0) {
        const rect = gameContainerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        setTouchPos({ x: touchX, y: touchY });
        setMousePos({ x: touchX, y: touchY }); // Use same system as mouse
        
        // Shoot on touch
        const now = Date.now();
        if (now - lastShootTimeRef.current > SHOOT_COOLDOWN) {
          lastShootTimeRef.current = now;
          shoot();
        }
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      if (gameContainerRef.current && e.touches.length > 0) {
        const rect = gameContainerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        setTouchPos({ x: touchX, y: touchY });
        setMousePos({ x: touchX, y: touchY });
      }
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      setTouchPos(null);
    };

    const container = gameContainerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isActive, isMobile, shoot]);

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
            const newY = clamp(prevY - SHIP_SPEED, 50, dimensions.height - 80);
            shipPosRef.current.y = newY;
            return newY;
          });
        }
        if (keys['ArrowDown'] || keys['s'] || keys['S']) {
          setShipY((prevY) => {
            const newY = clamp(prevY + SHIP_SPEED, 50, dimensions.height - 80);
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
          const newY = clamp(prevY + (mousePos.y - prevY) * 0.1, 50, dimensions.height - 80);
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

      // Update decorative aliens movement
      setDecorativeAliens((prevAliens) => {
        if (prevAliens.length === 0) return prevAliens;
        const updated = prevAliens.map((alien) => {
          let newX = alien.x + alien.vx;
          let newY = alien.y + alien.vy;
          let newVx = alien.vx;
          let newVy = alien.vy;

          // Bounce off edges
          if (newX < 30 || newX > dimensions.width - 30) {
            newVx = -newVx;
            newX = clamp(newX, 30, dimensions.width - 30);
          }
          if (newY < 100 || newY > dimensions.height - 100) {
            newVy = -newVy;
            newY = clamp(newY, 100, dimensions.height - 100);
          }

          return {
            ...alien,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });
        decorativeAliensRef.current = updated;
        return updated;
      });

      // Check collisions with navigation enemies and decorative aliens
      setProjectiles((prevProjectiles) => {
        const remainingProjectiles = [];
        const newExplosions = [];

        // Use for...of instead of forEach to allow proper break behavior
        for (const proj of prevProjectiles) {
          let hit = false;
          
          // Check collisions with navigation enemies first
          for (const enemy of enemies) {
            if (hit) break; // Exit immediately if already hit
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
                hit = true; // Mark as hit immediately
                // Increment hit count
                setEnemyHitCounts((prev) => {
                  const newCounts = new Map(prev);
                  const currentCount = newCounts.get(enemy.id) || 0;
                  const newCount = currentCount + 1;
                  newCounts.set(enemy.id, newCount);
                  
                  // If hit 5 times, destroy the enemy and navigate
                  if (newCount >= 5) {
                    setHitEnemies((prevHit) => new Set([...prevHit, enemy.id]));
                    const explosionParticles = createExplosion(enemy.x, enemy.y, 15, 40);
                    if (explosionParticles && explosionParticles.length > 0) {
                      newExplosions.push(explosionParticles);
                    }
                    // Navigate to the section only if we haven't navigated yet
                    if (!hasNavigatedRef.current) {
                      hasNavigatedRef.current = true;
                      // Clear any existing timeout
                      if (navigationTimeoutRef.current) {
                        clearTimeout(navigationTimeoutRef.current);
                      }
                      // Navigate to the section - use a small delay to show explosion
                      navigationTimeoutRef.current = setTimeout(() => {
                        if (onNavigate) {
                          onNavigate(enemy.id);
                        }
                        navigationTimeoutRef.current = null;
                      }, 300); // Delay to show explosion
                    }
                  } else {
                    // More pronounced hit effect for non-fatal hits
                    const smallExplosion = createExplosion(enemy.x, enemy.y, 8, 15);
                    if (smallExplosion && smallExplosion.length > 0) {
                      newExplosions.push(smallExplosion);
                    }
                  }
                  
                  return newCounts;
                });
                break; // Exit enemy loop immediately after first hit
              }
            }
          }

          // Check collisions with decorative aliens (only if projectile hasn't hit anything yet)
          if (!hit) {
            const currentAliens = decorativeAliensRef.current;
            for (const alien of currentAliens) {
              if (hit) break; // Exit immediately if already hit
              const projRect = {
                x: proj.x - 2,
                y: proj.y - 6,
                width: 4,
                height: 12,
              };
              const alienRect = {
                x: alien.x - 30,
                y: alien.y - 22.5,
                width: 60,
                height: 45,
              };

              if (checkCollision(projRect, alienRect)) {
                hit = true; // Mark as hit immediately
                // Create explosion for decorative alien
                const explosionParticles = createExplosion(alien.x, alien.y, 10, 20);
                if (explosionParticles && explosionParticles.length > 0) {
                  newExplosions.push(explosionParticles);
                }
                // Respawn hit alien somewhere else
                setDecorativeAliens((prevAliens) => {
                  const updated = prevAliens.map((a) => {
                    if (a.id === alien.id) {
                      return {
                        ...a,
                        x: Math.random() * dimensions.width,
                        y: Math.random() * (dimensions.height * 0.6) + dimensions.height * 0.2,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 1.5,
                      };
                    }
                    return a;
                  });
                  decorativeAliensRef.current = updated;
                  return updated;
                });
                break; // Exit alien loop after first hit
              }
            }
          }

          // Only add projectile to remaining if it didn't hit anything
          if (!hit) {
            remainingProjectiles.push(proj);
          }
        }

        if (newExplosions.length > 0) {
          setExplosions((prev) => [...prev, ...newExplosions]);
        }

        return remainingProjectiles;
      });

      // Check collision between starship and enemies (game over)
      if (!hasNavigatedRef.current) {
        const shipRect = {
          x: shipPosRef.current.x - 20,
          y: shipPosRef.current.y - 15,
          width: 40,
          height: 30,
        };

        // Check collision with navigation enemies
        for (const enemy of enemies) {
          if (!hitEnemies.has(enemy.id)) {
            const enemyRect = {
              x: enemy.x - 40,
              y: enemy.y - 30,
              width: 80,
              height: 60,
            };

            if (checkCollision(shipRect, enemyRect)) {
              // Game over - show message and navigate to About
              hasNavigatedRef.current = true;
              setShowGameOver(true);
              // Create large explosion at ship position
              const gameOverExplosion = createExplosion(shipPosRef.current.x, shipPosRef.current.y, 20, 50);
              if (gameOverExplosion && gameOverExplosion.length > 0) {
                setExplosions((prev) => [...prev, gameOverExplosion]);
              }
              // Navigate to About after showing message
              setTimeout(() => {
                if (onNavigate) {
                  onNavigate('About');
                }
                setShowGameOver(false);
              }, 2000); // Show message for 2 seconds
              break; // Exit loop after collision detected
            }
          }
        }

        // Check collision with decorative aliens (also game over)
        if (!hasNavigatedRef.current) {
          for (const alien of decorativeAliensRef.current) {
            const alienRect = {
              x: alien.x - 30,
              y: alien.y - 22.5,
              width: 60,
              height: 45,
            };

            if (checkCollision(shipRect, alienRect)) {
              // Game over - show message and navigate to About
              hasNavigatedRef.current = true;
              setShowGameOver(true);
              // Create large explosion at ship position
              const gameOverExplosion = createExplosion(shipPosRef.current.x, shipPosRef.current.y, 20, 50);
              if (gameOverExplosion && gameOverExplosion.length > 0) {
                setExplosions((prev) => [...prev, gameOverExplosion]);
              }
              // Navigate to About after showing message
              setTimeout(() => {
                if (onNavigate) {
                  onNavigate('About');
                }
                setShowGameOver(false);
              }, 2000); // Show message for 2 seconds
              break; // Exit loop after collision detected
            }
          }
        }
      }

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
      // Don't clear navigation timeout here - let it complete if navigation is in progress
      // It will be cleaned up when game mode is reactivated
    };
    }, [isActive, keys, mousePos, shipX, shipY, hitEnemies, enemyHitCounts, decorativeAliens, onNavigate, dimensions, enemies]);

  if (!isActive) return null;

  // Ensure dimensions are valid
  const displayWidth = dimensions.width > 0 ? dimensions.width : window.innerWidth;
  const displayHeight = dimensions.height > 0 ? dimensions.height : window.innerHeight;

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
          touchAction: 'none', // Prevent default touch behaviors
          WebkitOverflowScrolling: 'touch',
        }}
      >
      <GameCanvas stars={stars} width={displayWidth} height={displayHeight} />
      
      {/* Decorative aliens */}
      {decorativeAliens.map((alien) => (
        <DecorativeAlien
          key={alien.id}
          x={alien.x}
          y={alien.y}
          variant={alien.variant}
        />
      ))}
      
      {enemies.map((enemy) => {
        const hitCount = enemyHitCounts.get(enemy.id) || 0;
        const isDestroyed = hitEnemies.has(enemy.id);
        return (
          <Enemy
            key={enemy.id}
            x={enemy.x}
            y={enemy.y}
            label={enemy.label}
            isHit={isDestroyed}
            hitCount={hitCount}
            isMobile={isMobile}
            onHit={() => {
              // This is now handled in collision detection
            }}
          />
        );
      })}

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
          fontSize: isMobile ? '14px' : '16px',
          zIndex: 10000,
          textShadow: '0 0 5px #000',
          maxWidth: isMobile ? '90%' : 'auto',
        }}
      >
        <div>{isMobile ? 'Touch to Move & Shoot' : 'Use Arrow Keys or Mouse to Move'}</div>
        <div>{isMobile ? 'Touch anywhere to shoot!' : 'Spacebar or Click to Shoot'}</div>
        <div>Shoot navigation enemies 5 times to navigate!</div>
        <div style={{ color: '#00ffff', marginTop: '5px' }}>Decorative aliens move around for target practice</div>
      </div>

          {/* Game Over Message */}
          {showGameOver && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#ff0000',
                fontSize: isMobile ? '48px' : '72px',
                fontWeight: 'bold',
                zIndex: 10001,
                textShadow: 
                  '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000',
                animation: 'pulse 0.5s ease-in-out infinite alternate',
                pointerEvents: 'none',
                textAlign: 'center',
                padding: '0 20px',
              }}
            >
              YOU DIED
            </div>
          )}
        </div>
      );
    }

    export default GameNavigation;

