"use strict";

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = (document.querySelector(".number").value = randomNumber);

document.querySelector(".check").addEventListener("click", () => {
  let guessValue = Number(document.querySelector(".guess").value);
  if (guessValue === secretNumber) {
    displayMessage("You have guess!✅");
    document.querySelector(".number").innerHTML = randomNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").innerHTML = highScore;
    }
  } else if (!guessValue) {
    displayMessage("No number 💥");
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      guessValue > secretNumber
        ? displayMessage("Too high 📈")
        : displayMessage("Too low 📉");
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      displayMessage("You have lost the game ❌");
      document.querySelector(".score").innerHTML = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumber = document.querySelector(".number").value = randomNumber;
  document.querySelector(".score").innerHTML = 20;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".number").style.width = "15rem";
});
