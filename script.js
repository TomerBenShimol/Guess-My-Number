"use strict";

// Generates a random integer between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initial score
let score = 20;
// Initial High score
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// When the guess is wrong
function updateScore() {
  if (score > 0) score -= 1;
  document.querySelector(".score").textContent = score;
}

// When player wins
function updateHighScore(score) {
  if (highScore < score) {
    highScore = score;
    document.querySelector(".highscore").textContent = score;
  }
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No Number!");
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    updateHighScore(score);
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    // When the player has more turns
    if (score > 1) {
      // When guess is wrong
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      updateScore();
    }
    // When the player loses the game
    else {
      displayMessage("💥 You lost the game!");
      updateScore();
    }
  }
});

// Restart the game
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
});
