// why I don't use querySelectorAll('button')?
// because I want to add some buttons in the future
const shapeButtons = document.querySelector(".container").children;
const roundResultText = document.querySelector(".roundResult");
const gameResultText = document.querySelector(".gameResult");
const scoreText = document.querySelector(".score");
const combinationInfo = document.querySelector(".combination-info");
const infoText = document.querySelector(".infoText");

const pointsToWin = 3;
const gameScore = { humanScore: 0, computerScore: 0 };

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    resetGame();
  }
});

for (const btn of shapeButtons) {
  btn.addEventListener("click", onShapeButtonClick);
}

function onShapeButtonClick(e) {
  const humanChoice = e.target.getAttribute("data-shape").toLowerCase();
  playRound(humanChoice, getComputerChoice());
  scoreText.innerHTML =
    `🦧: ${gameScore.humanScore} <br>` + `🤖: ${gameScore.computerScore}`;
  if (
    gameScore.computerScore === pointsToWin ||
    gameScore.humanScore === pointsToWin
  ) {
    const winner = gameScore.computerScore === pointsToWin ? "🤖" : "🦧";
    gameResultText.textContent = `${winner} won the game!`;
    gameResultText.style.color = "gold";
    infoText.style.display = "block";
    for (const btn of shapeButtons) {
      btn.removeEventListener("click", onShapeButtonClick);
    }
  }
}

function resetGame() {
  gameScore.computerScore = gameScore.humanScore = 0;
  scoreText.textContent = "Rock Paper Scissors";
  roundResultText.textContent = "Click on the shape to start the game";
  combinationInfo.textContent = "";
  gameResultText.textContent = "";
  infoText.style.display = "none";
  for (const btn of shapeButtons) {
    btn.addEventListener("click", onShapeButtonClick);
  }
}

function getComputerChoice() {
  const shapes = ["rock", "paper", "scissors"];
  return shapes[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice) {
  const roundResult = determineRoundResult(humanChoice, computerChoice);
  switch (roundResult) {
    case "computer":
      roundResultText.textContent = `You lost, seems like robots are gonna replace us soon D:`;
      combinationInfo.textContent = `${capitalize(
        computerChoice
      )} beats ${humanChoice}.`;

      combinationInfo.style.color = "rgb(235, 47, 47)";
      gameScore.computerScore += 1;
      break;
    case "human":
      roundResultText.textContent = `Wow, human won this round!`;
      combinationInfo.textContent = `${capitalize(
        humanChoice
      )} beats ${computerChoice}.`;

      combinationInfo.style.color = "green";
      gameScore.humanScore += 1;
      break;
    default:
      combinationInfo.textContent`${capitalize(
        computerChoice
      )} and ${humanChoice} :O`;

      combinationInfo.style.color = "grey";
      roundResultText.textContent = "That's a tie!\nLet's play one more time!";
      break;
  }
}

function determineRoundResult(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return;

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          return "computer";
        case "scissors":
          return "human";
      }
    case "paper":
      switch (computerChoice) {
        case "rock":
          return "human";
        case "scissors":
          return "computer";
      }
    case "scissors":
      switch (computerChoice) {
        case "rock":
          return "computer";
        case "paper":
          return "human";
      }
  }
}
