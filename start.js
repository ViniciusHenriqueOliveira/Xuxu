// start.js
const discoverButton = document.getElementById("discoverButton");
const startScreen = document.getElementById("startScreen");
const loveScreen = document.getElementById("loveScreen");
const timeline = document.getElementById("timeline");
const heartsContainer = document.querySelector(".hearts");

discoverButton.addEventListener("click", () => {
  // Esconde a tela inicial e mostra a tela de "te amo" com corações
  startScreen.classList.add("hidden");
  loveScreen.classList.remove("hidden");

  // Criar corações aleatórios
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);
  }

  // Depois de 5 segundos, vai para teamo.html
  setTimeout(() => {
    window.location.href = "teamo.html";
  }, 5000);
});
