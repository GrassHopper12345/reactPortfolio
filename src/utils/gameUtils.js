export function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

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

export function updateStars(stars, height) {
  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = Math.random() * (height * 1.5);
    }
  });
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function createExplosion(x, y, count = 10, maxLife = 30) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = Math.random() * 8 + 3;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: maxLife,
      maxLife: maxLife,
      size: Math.random() * 6 + 3,
    });
  }
  return particles;
}

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

