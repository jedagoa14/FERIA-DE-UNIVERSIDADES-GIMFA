// Cuenta regresiva de la Feria de Universidades 2026
const eventDate = new Date("2026-08-28T08:00:00-05:00");

function updateCountdown() {
  const now = new Date();
  let diff = eventDate - now;

  if (diff <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    return;
  }

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Menú móvil
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
