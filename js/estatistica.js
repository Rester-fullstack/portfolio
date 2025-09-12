const container = document.getElementById('falling-code-container');

const phrases = [
"</>",
"{ }",
"console.log()",
"404",
"while(true)",
"</bug>",
"💻",
"🧠",
"⚠️",
"null;",
"function() {}",
"if (bug) fix();",
"/* comment */"
];

function createCodeDrop() {
const el = document.createElement('div');
el.classList.add('falling-code');

// Escolher frase aleatória
el.textContent = phrases[Math.floor(Math.random() * phrases.length)];

// Aleatorizar estilo
el.style.left = Math.random() * window.innerWidth + "px";
el.style.fontSize = (Math.random() * 1.2 + 1) + "rem"; // 1rem a 2.2rem
const duration = Math.random() * 4 + 3; // 3s a 7s
el.style.animationDuration = duration + "s";

// Cor opcional: variação de verde
const greenVariants = ['#00ff99', '#00ffaa', '#00ffcc', '#33ff99'];
el.style.color = greenVariants[Math.floor(Math.random() * greenVariants.length)];

container.appendChild(el);

// Remove após animação
setTimeout(() => container.removeChild(el), duration * 1000);
}

// Criar novo a cada 200–400ms
setInterval(createCodeDrop, 300);