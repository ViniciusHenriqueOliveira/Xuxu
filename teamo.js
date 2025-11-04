// teamo.js
const loveScreen = document.getElementById("loveScreen");
const timeline = document.getElementById("timeline");
const music = document.getElementById("bgMusic");
const musicControl = document.getElementById("musicControl");
const heartsContainer = document.getElementById("hearts-container");

let isPlaying = true;

// Proteção caso o botão de música não exista (evita erro)
if (musicControl && music) {
  musicControl.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      musicControl.textContent = "🔇";
    } else {
      music.play();
      musicControl.textContent = "🔊";
    }
    isPlaying = !isPlaying;
  });
}

// Função para criar um coração flutuante (remove após animação)
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 22 + 14 + "px";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// Cria muitos corações enquanto a tela "Feliz aniversário" estiver visível
const heartsInterval = setInterval(createHeart, 200);

// Depois de 5 segundos: fade-out do "Feliz aniversário" e entrada da timeline
setTimeout(() => {
  // fade out visual
  if (loveScreen) {
    loveScreen.style.transition = "opacity 1s ease, transform 1s ease";
    loveScreen.style.opacity = "0";
    loveScreen.style.transform = "translateY(-20px)";
  }
  heartsContainer.style.transition = "opacity 1s ease";
  heartsContainer.style.opacity = "0";

  // parar de gerar corações
  clearInterval(heartsInterval);

  // após fim do fade, mostra a timeline e inicializa observer
  setTimeout(() => {
    if (loveScreen) loveScreen.classList.add("hidden");
    if (timeline) timeline.classList.remove("hidden");
    document.body.style.overflowY = "auto";

    // Inicializa IntersectionObserver apenas quando a timeline estiver visível
    initScrollReveal();
  }, 1000);
}, 5000);


// --- Função que inicializa o observer para revelar itens ao rolar ---
function initScrollReveal() {
  const items = document.querySelectorAll(".timeline-item");
  if (!items.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // opcional: parar de observar depois que ficou visível
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
}
