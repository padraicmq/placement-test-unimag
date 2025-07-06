// script.js

document.addEventListener("DOMContentLoaded", () => {
  const infoForm = document.getElementById("info-form");
  const testSection = document.getElementById("test-section");
  const timerElement = document.getElementById("timer");
  let timerInterval;

  // Handle info form submission
  infoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    infoForm.style.display = "none";
    testSection.style.display = "block";
    startTimer(120 * 60); // 120 minutes
  });

  function startTimer(duration) {
    let timeLeft = duration;

    timerInterval = setInterval(() => {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("¡Tiempo finalizado! Tus respuestas serán enviadas automáticamente.");
        document.getElementById("submit-button").click();
      } else if (timeLeft === 300) {
        alert("⏰ ¡Quedan 5 minutos!");
        timerElement.style.color = "red";
      } else if (timeLeft === 60) {
        alert("⏰ ¡Último minuto!");
        timerElement.style.color = "darkred";
      }

      timeLeft--;
    }, 1000);
  }
});
