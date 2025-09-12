const canvas = document.getElementById('circuit-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Pontos do circuito
const points = [];
const POINT_COUNT = 80;

for (let i = 0; i < POINT_COUNT; i++) {
  points.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
  });
}

// Função de desenho
function draw() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < POINT_COUNT; i++) {
    const p1 = points[i];
    p1.x += p1.vx;
    p1.y += p1.vy;

    // Rebate nas bordas
    if (p1.x < 0 || p1.x > width) p1.vx *= -1;
    if (p1.y < 0 || p1.y > height) p1.vy *= -1;

    // Desenha o ponto
    ctx.fillStyle = '#00ff99';
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
    ctx.fill();

    // Linhas para pontos próximos
    for (let j = i + 1; j < POINT_COUNT; j++) {
      const p2 = points[j];
      const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      if (dist < 120) {
        ctx.strokeStyle = `rgba(0, 255, 153, ${1 - dist / 120})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}

draw();
