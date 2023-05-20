const app = document.getElementById("app");
const vidContainer = document.querySelector(".vid-container");
const playerContainer = document.querySelector(".player-container");
const soundPicker = document.querySelector(".sound-picker");
const timeDisplay = document.querySelector(".time-display");
const playButton = document.querySelector(".play");

let audio1 = document.querySelector("audio:first-child");
let audio2 = document.querySelector("audio:last-child");
let time = 10;

playButton.addEventListener("click", () => {
  if (audio1.paused) {
    audio1.play();
    playButton.textContent = "Pause";
  } else {
    audio1.pause();
    playButton.textContent = "Play";
  }
});

soundPicker.addEventListener("click", (event) => {
  if (event.target.id === "smaller-mins") {
    time = 2;
  } else if (event.target.id === "medium-mins") {
    time = 5;
  } else if (event.target.id === "long-mins") {
    time = 10;
  }
  timeDisplay.textContent = time + ":00";
});

setInterval(() => {
  time--;
  timeDisplay.textContent = time + ":00";
  if (time === 0) {
    audio1.pause();
  }
}, 1000);
