import React, { useState, useEffect, useRef, useCallback } from 'react';
import Starship from './Starship';
import Projectile from './Projectile';
import Enemy from './Enemy';
import DecorativeAlien from './DecorativeAlien';
import GameCanvas from './GameCanvas';
import HighScoreModal from './HighScoreModal';
import HighScoreDisplay from './HighScoreDisplay';
import { Button } from 'primereact/button';
import { checkCollision, generateStars, updateStars, clamp, createExplosion, updateParticles } from '../../utils/gameUtils';

const getGameDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});
const SHIP_SPEED = 5;
const PROJECTILE_SPEED = 10;

function GameNavigation({ onNavigate, isActive }) {
  const [dimensions, setDimensions] = useState(getGameDimensions());
  
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
  const [touchPos, setTouchPos] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const gameContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const shipPosRef = useRef({ x: initialShipX, y: initialShipY });
  const lastShootTimeRef = useRef(0);
  const SHOOT_COOLDOWN = 150;

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

  useEffect(() => {
    const handleResize = () => {
      const newDims = getGameDimensions();
      setDimensions(newDims);
      const newX = newDims.width / 2;
      const newY = newDims.height - 80;
      setShipX(newX);
      setShipY(newY);
      shipPosRef.current = { x: newX, y: newY };
      setStars(generateStars(100, newDims.width, newDims.height));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [hitEnemies, setHitEnemies] = useState(new Set());
  const [enemyHitCounts, setEnemyHitCounts] = useState(new Map());
  const enemyHitCountsRef = useRef(new Map());
  const [decorativeAliens, setDecorativeAliens] = useState([]);
  const decorativeAliensRef = useRef([]);
  const navigationTimeoutRef = useRef(null);
  const hasNavigatedRef = useRef(false);
  const processedProjectilesRef = useRef(new Set());
  const [showGameOver, setShowGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showHighScoreModal, setShowHighScoreModal] = useState(false);
  const [showHighScoreDisplay, setShowHighScoreDisplay] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [enemyRowOffset, setEnemyRowOffset] = useState(0);
  const enemyRowDirectionRef = useRef(1);

  const getAlienCount = useCallback((currentScore) => {
    const baseCount = 8;
    const additionalCount = Math.floor(currentScore / 5000);
    return Math.min(baseCount + additionalCount, 20);
  }, []);

  const targetAlienCountRef = useRef(8);

  useEffect(() => {
    if (isActive && dimensions.width > 0 && dimensions.height > 0) {
      const targetCount = getAlienCount(score);
      targetAlienCountRef.current = targetCount;
      
      setDecorativeAliens((prevAliens) => {
        const isSmallScreen = dimensions.width <= 768;
        // On small screens, keep decorative aliens below the top navigation area (below 200px)
        const minY = isSmallScreen ? 200 : dimensions.height * 0.2;
        const maxY = dimensions.height * 0.8;
        const availableHeight = maxY - minY;
        
        if (prevAliens.length === 0) {
          const aliens = [];
          for (let i = 0; i < targetCount; i++) {
            aliens.push({
              id: `decorative-${i}`,
              x: Math.random() * dimensions.width,
              y: Math.random() * availableHeight + minY,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 1.5,
              variant: Math.floor(Math.random() * 3),
            });
          }
          decorativeAliensRef.current = aliens;
          return aliens;
        }
        
        if (prevAliens.length < targetCount) {
          const newAliens = [...prevAliens];
          for (let i = prevAliens.length; i < targetCount; i++) {
            newAliens.push({
              id: `decorative-${Date.now()}-${i}`,
              x: Math.random() * dimensions.width,
              y: Math.random() * availableHeight + minY,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 1.5,
              variant: Math.floor(Math.random() * 3),
            });
          }
          decorativeAliensRef.current = newAliens;
          return newAliens;
        }
        
        return prevAliens;
      });
    }
  }, [isActive, dimensions, score, getAlienCount]);

  useEffect(() => {
    if (isActive) {
      setHitEnemies(new Set());
      setEnemyHitCounts(new Map());
      enemyHitCountsRef.current = new Map();
      setProjectiles([]);
      setExplosions([]);
      setShowGameOver(false);
      setScore(0);
      setIsGamePaused(false);
      setGameStarted(false);
      setEnemyRowOffset(0);
      enemyRowDirectionRef.current = 1;
      hasNavigatedRef.current = false;
      processedProjectilesRef.current = new Set();
      targetAlienCountRef.current = 8;
      const newDims = getGameDimensions();
      const newX = newDims.width / 2;
      const newY = newDims.height - 80;
      setShipX(newX);
      setShipY(newY);
      shipPosRef.current = { x: newX, y: newY };
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = null;
      }
    }
  }, [isActive]);

  const enemies = React.useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) {
      return [];
    }
    const isSmallScreen = dimensions.width <= 768;
    const baseY = isSmallScreen ? 100 : 180;
    if (isSmallScreen) {
      // Position enemies at the top in a horizontal row on mobile/tablet
      const spacing = dimensions.width / 5;
      return [
        { id: 'About', label: 'About', x: spacing, y: baseY },
        { id: 'Portfolio', label: 'Portfolio', x: spacing * 2, y: baseY },
        { id: 'Contact', label: 'Contact', x: spacing * 3, y: baseY },
        { id: 'Resume', label: 'Resume', x: spacing * 4, y: baseY },
      ];
    }
    return [
      { id: 'About', label: 'About', x: dimensions.width * 0.2 + enemyRowOffset, y: baseY },
      { id: 'Portfolio', label: 'Portfolio', x: dimensions.width * 0.4 + enemyRowOffset, y: baseY },
      { id: 'Contact', label: 'Contact', x: dimensions.width * 0.6 + enemyRowOffset, y: baseY },
      { id: 'Resume', label: 'Resume', x: dimensions.width * 0.8 + enemyRowOffset, y: baseY },
    ];
  }, [dimensions, enemyRowOffset]);

  const shoot = useCallback(() => {
    const currentPos = shipPosRef.current;
    const newProjId = Date.now() + Math.random();
    setProjectiles((prev) => [
      ...prev,
      {
        id: newProjId,
        x: currentPos.x,
        y: currentPos.y - 20,
      },
    ]);
    processedProjectilesRef.current.delete(newProjId);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    if (!isActive || isGamePaused || showHighScoreModal || !gameStarted) return;

    const handleKeyDown = (e) => {
      if (isGamePaused || showHighScoreModal || !gameStarted) return;
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
    }, [isActive, shoot, isGamePaused, showHighScoreModal, gameStarted]);

  useEffect(() => {
    if (!isActive || isMobile || isGamePaused || showHighScoreModal || !gameStarted) return;

    const handleMouseMove = (e) => {
      if (isGamePaused || showHighScoreModal || !gameStarted) return;
      if (gameContainerRef.current) {
        const rect = gameContainerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleClick = (e) => {
      if (isActive && !isGamePaused && !showHighScoreModal && gameStarted) {
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
    }, [isActive, isMobile, shoot, isGamePaused, showHighScoreModal, gameStarted]);

  useEffect(() => {
    if (!isActive || !isMobile || isGamePaused || showHighScoreModal || !gameStarted) return;

    const handleTouchStart = (e) => {
      if (isGamePaused || showHighScoreModal || !gameStarted) return;
      e.preventDefault();
      if (gameContainerRef.current && e.touches.length > 0) {
        const rect = gameContainerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        setTouchPos({ x: touchX, y: touchY });
        setMousePos({ x: touchX, y: touchY });
        
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
  }, [isActive, isMobile, shoot, isGamePaused, showHighScoreModal, gameStarted]);

  useEffect(() => {
    if (!isActive) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    let lastTime = performance.now();
    const gameLoop = (currentTime) => {
      if (isGamePaused || showHighScoreModal || !gameStarted) {
        animationFrameRef.current = requestAnimationFrame(gameLoop);
        return;
      }

      const deltaTime = Math.min((currentTime - lastTime) / 16.67, 2);
      lastTime = currentTime;
      
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
            const newY = clamp(prevY - SHIP_SPEED, 30, dimensions.height - 30);
            shipPosRef.current.y = newY;
            return newY;
          });
        }
        if (keys['ArrowDown'] || keys['s'] || keys['S']) {
          setShipY((prevY) => {
            const newY = clamp(prevY + SHIP_SPEED, 30, dimensions.height - 30);
            shipPosRef.current.y = newY;
            return newY;
          });
        }
        if (!keys['ArrowLeft'] && !keys['ArrowRight'] && !keys['a'] && !keys['A'] && !keys['d'] && !keys['D']) {
          newX = prevX + (mousePos.x - prevX) * 0.1;
        }
        const finalX = clamp(newX, 20, dimensions.width - 20);
        shipPosRef.current.x = finalX;
        return finalX;
      });

      setShipY((prevY) => {
        if (!keys['ArrowUp'] && !keys['ArrowDown'] && !keys['w'] && !keys['W'] && !keys['s'] && !keys['S']) {
          const newY = clamp(prevY + (mousePos.y - prevY) * 0.1, 30, dimensions.height - 30);
          shipPosRef.current.y = newY;
          return newY;
        }
        return prevY;
      });

      setProjectiles((prev) =>
        prev
          .map((proj) => ({
            ...proj,
            y: proj.y - PROJECTILE_SPEED,
          }))
          .filter((proj) => proj.y > -20)
      );

      let speedMultiplier;
      if (score <= 10000) {
        speedMultiplier = 1 + (score / 10000) * 1.5;
      } else {
        const excessScore = score - 10000;
        speedMultiplier = 2.5 + Math.pow(excessScore / 10000, 1.5) * 4;
      }
      speedMultiplier = Math.min(speedMultiplier, 8);
      
      const variantSpeedMap = {
        0: 1.8,
        1: 1.2,
        2: 0.7,
      };

      setDecorativeAliens((prevAliens) => {
        if (prevAliens.length === 0) return prevAliens;
        const updated = prevAliens.map((alien) => {
          const baseSpeed = variantSpeedMap[alien.variant] || 1.0;
          const currentSpeed = baseSpeed * speedMultiplier;
          
          let newX = alien.x + alien.vx * currentSpeed * deltaTime;
          let newY = alien.y + alien.vy * currentSpeed * deltaTime;
          let newVx = alien.vx;
          let newVy = alien.vy;

          if (newX < 30 || newX > dimensions.width - 30) {
            newVx = -newVx;
            newX = clamp(newX, 30, dimensions.width - 30);
          }
          const isSmallScreen = dimensions.width <= 768;
          const minY = isSmallScreen ? 200 : 100;
          const maxY = dimensions.height - 100;
          if (newY < minY || newY > maxY) {
            newVy = -newVy;
            newY = clamp(newY, minY, maxY);
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

      if (dimensions.width > 768) {
        const maxOffset = dimensions.width * 0.12;
        let rowSpeed;
        if (score <= 10000) {
          rowSpeed = 0.4 + (score / 10000) * 1.0;
        } else {
          const excessScore = score - 10000;
          rowSpeed = 1.4 + Math.pow(excessScore / 10000, 1.3) * 2.5;
        }
        const baseSpeed = Math.min(rowSpeed, 4.5) * deltaTime;
        
        setEnemyRowOffset((prevOffset) => {
          let newOffset = prevOffset + enemyRowDirectionRef.current * baseSpeed;
          if (newOffset >= maxOffset || newOffset <= -maxOffset) {
            enemyRowDirectionRef.current *= -1;
            newOffset = clamp(newOffset, -maxOffset, maxOffset);
          }
          return newOffset;
        });
      }

      setProjectiles((prevProjectiles) => {
        const remainingProjectiles = [];
        const newExplosions = [];
        const hitProjectileIds = new Set();
        const currentHitCounts = new Map(enemyHitCountsRef.current);

        for (const proj of prevProjectiles) {
          if (processedProjectilesRef.current.has(proj.id)) {
            continue;
          }
          
          let hit = false;
          
          for (const enemy of enemies) {
            if (hit) break;
            if (!hitEnemies.has(enemy.id)) {
              const projRect = {
                x: proj.x - 2,
                y: proj.y - 6,
                width: 4,
                height: 12,
              };
              const isSmallScreen = dimensions.width <= 768;
              const enemySize = isSmallScreen ? { width: 40, height: 30 } : { width: 80, height: 60 };
              const enemyRect = {
                x: enemy.x - enemySize.width / 2,
                y: enemy.y - enemySize.height / 2,
                width: enemySize.width,
                height: enemySize.height,
              };

              if (checkCollision(projRect, enemyRect)) {
                hit = true;
                hitProjectileIds.add(proj.id);
                processedProjectilesRef.current.add(proj.id);
                
                const currentCount = currentHitCounts.get(enemy.id) || 0;
                const newCount = currentCount + 1;
                currentHitCounts.set(enemy.id, newCount);
                enemyHitCountsRef.current.set(enemy.id, newCount);
                
                setEnemyHitCounts(new Map(currentHitCounts));
                
                if (newCount >= 10) {
                  setHitEnemies((prevHit) => new Set([...prevHit, enemy.id]));
                  const explosionParticles = createExplosion(enemy.x, enemy.y, 15, 40);
                  if (explosionParticles && explosionParticles.length > 0) {
                    newExplosions.push(explosionParticles);
                  }
                  if (!hasNavigatedRef.current) {
                    hasNavigatedRef.current = true;
                    if (navigationTimeoutRef.current) {
                      clearTimeout(navigationTimeoutRef.current);
                    }
                    navigationTimeoutRef.current = setTimeout(() => {
                      if (onNavigate) {
                        onNavigate(enemy.id);
                      }
                      navigationTimeoutRef.current = null;
                    }, 300);
                  }
                } else {
                  const smallExplosion = createExplosion(enemy.x, enemy.y, 8, 15);
                  if (smallExplosion && smallExplosion.length > 0) {
                    newExplosions.push(smallExplosion);
                  }
                }
                
                break;
              }
            }
          }

          if (!hit) {
            const currentAliens = decorativeAliensRef.current;
            for (const alien of currentAliens) {
              if (hit) break;
              const projRect = {
                x: proj.x - 2,
                y: proj.y - 6,
                width: 4,
                height: 12,
              };
              const isSmallScreen = dimensions.width <= 768;
              const alienSize = isSmallScreen ? { width: 40, height: 30 } : { width: 60, height: 45 };
              const alienRect = {
                x: alien.x - alienSize.width / 2,
                y: alien.y - alienSize.height / 2,
                width: alienSize.width,
                height: alienSize.height,
              };

              if (checkCollision(projRect, alienRect)) {
                hit = true;
                hitProjectileIds.add(proj.id);
                setScore((prevScore) => prevScore + 100);
                const explosionParticles = createExplosion(alien.x, alien.y, 10, 20);
                if (explosionParticles && explosionParticles.length > 0) {
                  newExplosions.push(explosionParticles);
                }
                setDecorativeAliens((prevAliens) => {
                  const isSmallScreen = dimensions.width <= 768;
                  const minY = isSmallScreen ? 200 : dimensions.height * 0.2;
                  const maxY = dimensions.height * 0.8;
                  const availableHeight = maxY - minY;
                  const updated = prevAliens.map((a) => {
                    if (a.id === alien.id) {
                      return {
                        ...a,
                        x: Math.random() * dimensions.width,
                        y: Math.random() * availableHeight + minY,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 1.5,
                      };
                    }
                    return a;
                  });
                  decorativeAliensRef.current = updated;
                  return updated;
                });
                break;
              }
            }
          }

          if (!hit && !hitProjectileIds.has(proj.id)) {
            remainingProjectiles.push(proj);
          }
        }

        if (newExplosions.length > 0) {
          setExplosions((prev) => [...prev, ...newExplosions]);
        }

        return remainingProjectiles;
      });

      if (!hasNavigatedRef.current && !isGamePaused && gameStarted) {
        const shipRect = {
          x: shipPosRef.current.x - 20,
          y: shipPosRef.current.y - 15,
          width: 40,
          height: 30,
        };

        for (const enemy of enemies) {
          if (!hitEnemies.has(enemy.id)) {
            const isSmallScreen = dimensions.width <= 768;
            const enemySize = isSmallScreen ? { width: 40, height: 30 } : { width: 80, height: 60 };
            const enemyRect = {
              x: enemy.x - enemySize.width / 2,
              y: enemy.y - enemySize.height / 2,
              width: enemySize.width,
              height: enemySize.height,
            };

            if (checkCollision(shipRect, enemyRect)) {
              hasNavigatedRef.current = true;
              setIsGamePaused(true);
              setShowGameOver(true);
              const gameOverExplosion = createExplosion(shipPosRef.current.x, shipPosRef.current.y, 20, 50);
              if (gameOverExplosion && gameOverExplosion.length > 0) {
                setExplosions((prev) => [...prev, gameOverExplosion]);
              }
              setTimeout(() => {
                setShowGameOver(false);
                setShowHighScoreModal(true);
              }, 2000);
              break;
            }
          }
        }

        if (!hasNavigatedRef.current && !isGamePaused && gameStarted) {
          for (const alien of decorativeAliensRef.current) {
            const isSmallScreen = dimensions.width <= 768;
            const alienSize = isSmallScreen ? { width: 40, height: 30 } : { width: 60, height: 45 };
            const alienRect = {
              x: alien.x - alienSize.width / 2,
              y: alien.y - alienSize.height / 2,
              width: alienSize.width,
              height: alienSize.height,
            };

            if (checkCollision(shipRect, alienRect)) {
              hasNavigatedRef.current = true;
              setIsGamePaused(true);
              setShowGameOver(true);
              const gameOverExplosion = createExplosion(shipPosRef.current.x, shipPosRef.current.y, 20, 50);
              if (gameOverExplosion && gameOverExplosion.length > 0) {
                setExplosions((prev) => [...prev, gameOverExplosion]);
              }
              setTimeout(() => {
                setShowGameOver(false);
                setShowHighScoreModal(true);
              }, 2000);
              break;
            }
          }
        }
      }

      setExplosions((prev) => {
        const updated = prev.map((explosion) => {
          if (Array.isArray(explosion)) {
            return updateParticles(explosion);
          }
          return explosion;
        }).filter((particles) => Array.isArray(particles) && particles.length > 0);
        return updated;
      });

      if (!isGamePaused && !showHighScoreModal && gameStarted) {
        setStars((prevStars) => {
          const updated = [...prevStars];
          updateStars(updated, dimensions.height);
          return updated;
        });
      }

      if (!isGamePaused && !showHighScoreModal && gameStarted) {
        animationFrameRef.current = requestAnimationFrame(gameLoop);
      }
    };

    if (!isGamePaused && !showHighScoreModal && gameStarted) {
      animationFrameRef.current = requestAnimationFrame(gameLoop);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    }, [isActive, keys, mousePos, shipX, shipY, hitEnemies, enemyHitCounts, decorativeAliens, onNavigate, dimensions, enemies, isGamePaused, showHighScoreModal, gameStarted]);

  if (!isActive) return null;

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
          touchAction: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
      <GameCanvas stars={stars} width={displayWidth} height={displayHeight} />
      
      {decorativeAliens.map((alien) => (
        <DecorativeAlien
          key={alien.id}
          x={alien.x}
          y={alien.y}
          variant={alien.variant}
          isMobile={isMobile}
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
            onHit={() => {}}
          />
        );
      })}

      <Starship x={shipX} y={shipY} />

      {!gameStarted && (
        <div
          style={{
            position: 'absolute',
            left: `${shipX}px`,
            top: `${shipY}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 10003,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Button
            label="START GAME"
            onClick={() => setGameStarted(true)}
            className="game-themed-button"
            style={{
              fontSize: isMobile ? '16px' : '20px',
              padding: '1rem 2rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.4), rgba(0, 200, 0, 0.5))',
              border: '3px solid #00ff00',
              boxShadow: '0 0 20px #00ff00, inset 0 0 20px rgba(0, 255, 0, 0.3)',
            }}
          />
          <div
            style={{
              color: '#00ffff',
              fontSize: isMobile ? '12px' : '14px',
              textAlign: 'center',
              textShadow: '0 0 5px #000',
              maxWidth: '200px',
            }}
          >
            Click to begin your mission!
          </div>
        </div>
      )}

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

      {gameStarted && (
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
          <div>Shoot navigation enemies 10 times to navigate!</div>
          <div style={{ color: '#00ff00', marginTop: '10px', fontSize: isMobile ? '16px' : '18px', fontWeight: 'bold' }}>
            Score: {score.toLocaleString()}
          </div>
        </div>
      )}

      {gameStarted && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10000,
          }}
        >
          <Button
            icon="pi pi-trophy"
            label="High Scores"
            onClick={() => setShowHighScoreDisplay(true)}
            className="game-themed-button"
            size="small"
            style={{ fontSize: isMobile ? '12px' : '14px', padding: '0.5rem 1rem' }}
          />
        </div>
      )}

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

      <HighScoreModal
        visible={showHighScoreModal}
        score={score}
        onClose={() => {
          setShowHighScoreModal(false);
          setIsGamePaused(false);
          if (onNavigate) {
            onNavigate('About');
          }
        }}
        onSave={() => {
          setShowHighScoreModal(false);
          setIsGamePaused(false);
          if (onNavigate) {
            onNavigate('About');
          }
        }}
      />

      <HighScoreDisplay
        visible={showHighScoreDisplay}
        onClose={() => setShowHighScoreDisplay(false)}
      />
    </div>
  );
}

export default GameNavigation;

