// why I don't use querySelectorAll('button')?
// because I want to add some buttons in the future
const shapeButtons = document.querySelector(".button-container").children;
const roundResult = document.querySelector(".roundResult");
const scoreText = document.querySelector(".score");

const pointsToWin = 3;
const gameScore = { humanScore: 0, computerScore: 0 };

for (const btn of shapeButtons) {
  btn.addEventListener("click", onShapeButtonClick);
}

function onShapeButtonClick(e) {
  const humanChoice = e.target.getAttribute("data-shape").toLowerCase();
  playRound(humanChoice, getComputerChoice());
  scoreText.innerHTML =
    `Human: ${gameScore.humanScore} <br>` +
    `Computer: ${gameScore.computerScore}`;
}

function getComputerChoice() {
  const shapes = ["rock", "paper", "scissors"];
  return shapes[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice) {
  const result = determineRoundResult(humanChoice, computerChoice);
  switch (result) {
    case "computer":
      roundResult.textContent =
        `You lost, seems like robots are gonna replace us soon D:` +
        `\n${capitalize(computerChoice)} beats ${humanChoice}.`;
      gameScore.computerScore += 1;
      break;
    case "human":
      roundResult.textContent =
        `Wow, human won this round!` +
        `\n${capitalize(humanChoice)} beats ${computerChoice}.`;
      gameScore.humanScore += 1;
      break;
    default:
      roundResult.textContent = "That's a tie!\nLet's play one more time!";
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
