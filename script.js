const discoverButton = document.getElementById("discoverButton");
const startScreen = document.getElementById("startScreen");
const loveScreen = document.getElementById("loveScreen");
const timeline = document.getElementById("timeline");
const heartsContainer = document.querySelector(".hearts");

discoverButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  loveScreen.classList.remove("hidden");

  // Criar corações aleatórios
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);
  }

  // Depois de 5 segundos, mostra a linha do tempo
  setTimeout(() => {
    loveScreen.classList.add("hidden");
    timeline.classList.remove("hidden");
    document.body.style.overflowY = "auto";
  }, 5000);
});


// ✨ Animação das fotos ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});
