document.getElementById("year").innerHTML = new Date().getFullYear();

// Code source:
// Author: Code with Sahand
// Publication date: Oct. 27 2023
// Title: HTML CSS JavaScript Project - Pomodoro Timer
// URL: https://www.youtube.com/watch?v=_9QQf-RpPlM

let timeLeft = 25 * 60;  // 25 minutes
let timer;
let isPaused = false;    // To track if the timer is paused
let remainingTime = timeLeft;

function startTimer() {
  if (isPaused) {
    isPaused = false;
    // If the timer is resumed, start it from the remaining time
    timer = setInterval(updateTimer, 1000);
  } else {
    // Start the timer from the full 25 minutes
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(timer);
    alert("Time's up! Take a break.");
    remainingTime = timeLeft;  // Reset timer after time is up
  }
}

function pauseTimer() {
  clearInterval(timer);   // Stop the timer
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);  // Stop the timer
  remainingTime = timeLeft; // Reset to initial time
  document.getElementById("timer").textContent = "25:00";  // Display the initial time
  isPaused = false;
}

// Code source:
// Author: decode (youtube channel)
// Publication date: March 27, 2019
// Title: Create a "Scroll To Top" Button with HTML, CSS & JavaScript | Web Design Tutorial For Beginners
// URL: https://www.youtube.com/watch?v=FK5DEa1Hvco

window.onscroll = function () {
  const topBtn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Smooth scroll to top
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});