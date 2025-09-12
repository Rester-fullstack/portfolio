const canvas = document.getElementById('bg-effect-home');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01{}[]()<>=+-*/;:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({length: columns}, () => Math.random() * canvas.height);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff99';
  ctx.font = fontSize + 'px monospace';

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    drops[i] = (y * fontSize > canvas.height && Math.random() > 0.975) ? 0 : y + 1;
  });
}

setInterval(draw, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



// ===== EFEITO DIGITAÇÃO =====
function typeWriter(element, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// ===== MENSAGENS PRINCIPAIS =====
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".home-content h1");
    const subtitle = document.querySelector(".subtitle");
    const logs = document.querySelector(".home-logs");

    const mainTitle = "printf('Bem-vindo ao meu código');";
    const subText = "while(vivo) { aprender(); }";
    const terminalMessages = [
        "[OK] Conexão estabelecida com o servidor de criatividade...",
        "[INFO] Carregando piadas ruins... e códigos bons!",
        "[WARN] Café não encontrado... prosseguindo mesmo assim ☕",
        "[DEBUG] Variável 'paciência' = infinita;",
        "[SYS] Digitando mais rápido que a própria sombra..."
    ];

    title.style.fontSize = "3rem";
    subtitle.style.fontSize = "1.8rem";
    logs.style.fontSize = "1.2rem";

    typeWriter(title, mainTitle, 70, () => {
        setTimeout(() => {
            typeWriter(subtitle, subText, 60, showLogs);
        }, 500);
    });

    function showLogs() {
        let index = 0;
        function nextLog() {
            if (index < terminalMessages.length) {
                const logLine = document.createElement("p");
                logLine.textContent = terminalMessages[index];
                logLine.style.margin = "8px 0";
                logLine.style.opacity = "0";
                logLine.style.transition = "opacity 0.8s ease";
                logs.appendChild(logLine);
                requestAnimationFrame(() => {
                    logLine.style.opacity = "1";
                });
                index++;
                setTimeout(nextLog, 1500);
            }
        }
        nextLog();
    }
});


