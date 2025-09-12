document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "> Inicializando sequência...",
    "> Carregando função vida();",
    "> Compilando criatividade...",
    "> if (cafe && inspiração) { programar(); }",
    "> while(vivo) { aprender(); }",
    "> Alerta: talento excedeu os limites do compilador ⚠️",
    "> Fazendo deploy de ideias para o mundo real...",
    "> Preparando para invadir... digo, impressionar você 😏"
  ];

  const terminal = document.getElementById("terminal");
  let lineIndex = 0;
  let charIndex = 0;
  let typingSpeed = 50;

  function typeLine() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        terminal.textContent += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, typingSpeed);
      } else {
        terminal.textContent += "\n";
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, 300);
      }
    } else {
      terminal.innerHTML += '<span class="blink">_</span>';
      setTimeout(() => {
        window.location.href = "home.html"; 
      }, 3000);
    }
  }

  typeLine();
});


