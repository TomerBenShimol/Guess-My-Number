"use strict";

// Generates a random integer between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initial score
let score = 20;
// Initial High score
let highScore = 0;

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
    document.querySelector(".message").textContent = "⛔️ No Number!";
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    updateHighScore(score);
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    // When the player has more turns
    if (score > 1) {
      // When guess is too low
      if (guess < secretNumber) {
        document.querySelector(".message").textContent = "📉 Too Low!";
        updateScore();
      }
      // When guess is too high
      else {
        document.querySelector(".message").textContent = "📈 Too High!";
        updateScore();
      }
    }
    // When the player loses the game
    else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      updateScore();
    }
  }
});

// Restart the game
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
});
