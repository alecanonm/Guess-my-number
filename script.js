"use strict";

let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = (document.querySelector(".number").value = randomNumber);

document.querySelector(".check").addEventListener("click", () => {
  let guessValue = Number(document.querySelector(".guess").value);
  if (guessValue === secretNumber) {
    document.querySelector(".message").innerHTML = "You have guess!✅";
    document.querySelector(".highscore").innerHTML = score;
    document.querySelector(".number").innerHTML = randomNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (!guessValue) {
    document.querySelector(".message").innerHTML = "No number 💥";
  } else if (guessValue > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").innerHTML = "Too high 📈";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").innerHTML =
        "You have lost the game ❌";
      document.querySelector(".score").innerHTML = 0;
    }
  } else if (guessValue < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").innerHTML = "Too low 📉";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").innerHTML =
        "You have lost the game ❌";
      document.querySelector(".score").innerHTML = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumber = document.querySelector(".number").value = randomNumber;
  document.querySelector(".score").innerHTML = 20;
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".number").style.width = "15rem";
});
