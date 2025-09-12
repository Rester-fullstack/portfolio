const canvas = document.getElementById('digitalWaves');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const waveCount = 25;
const waves = [];

for (let i = 0; i < waveCount; i++) {
  waves.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 80 + 20,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
    alpha: Math.random() * 0.8 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  waves.forEach(w => {
    w.x += w.speedX;
    w.y += w.speedY;

    // Pisca suavemente
    w.alpha += (Math.random() - 0.5) * 0.05;
    if (w.alpha > 1) w.alpha = 1;
    if (w.alpha < 0.2) w.alpha = 0.2;

    if (w.x < 0 || w.x > width) w.speedX *= -1;
    if (w.y < 0 || w.y > height) w.speedY *= -1;

    ctx.beginPath();
    ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0, 255, 153, ${w.alpha})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

animate();

// Seleciona link e section
const linkCurriculo = document.getElementById('curriculo-link');
const sectionCurriculo = document.getElementById('curriculo-section');

linkCurriculo.addEventListener('click', (e) => {
  e.preventDefault(); // evita scroll automático
  sectionCurriculo.classList.toggle('hidden'); // mostra / esconde
  sectionCurriculo.scrollIntoView({ behavior: 'smooth' }); // rola suavemente até a section
});
