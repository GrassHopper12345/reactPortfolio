// Game utility functions for collision detection and game state management

/**
 * Check if two rectangles are colliding
 * @param {Object} rect1 - {x, y, width, height}
 * @param {Object} rect2 - {x, y, width, height}
 * @returns {boolean}
 */
export function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

/**
 * Generate random stars for starfield
 * @param {number} count - Number of stars to generate
 * @param {number} width - Canvas width
 * @param {number} height - Canvas height
 * @returns {Array} Array of star objects
 */
export function generateStars(count, width, height) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 2 + 0.5,
    });
  }
  return stars;
}

/**
 * Update star positions for scrolling effect
 * @param {Array} stars - Array of star objects
 * @param {number} height - Canvas height
 */
export function updateStars(stars, height) {
  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = Math.random() * (height * 1.5);
    }
  });
}

/**
 * Clamp a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Create explosion particles
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {number} count - Number of particles
 * @returns {Array} Array of particle objects
 */
export function createExplosion(x, y, count = 10) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = Math.random() * 5 + 2;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 30,
      maxLife: 30,
      size: Math.random() * 4 + 2,
    });
  }
  return particles;
}

/**
 * Update explosion particles
 * @param {Array} particles - Array of particle objects
 */
export function updateParticles(particles) {
  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life--;
    particle.vx *= 0.95;
    particle.vy *= 0.95;
  });
  return particles.filter((p) => p.life > 0);
}

