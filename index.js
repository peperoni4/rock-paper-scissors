function getHumanChoice() {
    let userShape = null;
    while (!validateUserInput(userShape)) {
        userShape = prompt("Please, enter your shape - rock, paper or scissors:");
    }
    return userShape.toLocaleLowerCase();
}

function validateUserInput(shape) {
    if (!shape || shape.length === 0) return false;
    switch(shape.toLocaleLowerCase()) {
        case 'rock':
        case 'paper':
        case 'scissors':
            return true;
    }

    return false;
}

function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"];
    return shapes[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice, score) {
    const roundResult = determineRoundResult(humanChoice, computerChoice);
    switch(roundResult) {
        case 'c': 
            console.log(`You lost, seems like robots are gonna replace us soon D:`
                + `\n${capitalize(computerChoice)} beats ${humanChoice}.`);
            score.computerScore += 1;
            break;
        case 'h':
            console.log(`Wow, human won this round!`
                + `\n${capitalize(humanChoice)} beats ${computerChoice}.`);
            score.humanScore += 1;
            break;
        default:
            console.log("That's a tie!\nLet's play one more time!");
            break;
    }
}

function determineRoundResult(humanChoice, computerChoice) {
    if (humanChoice[0] === computerChoice[0]) return;

    switch(humanChoice[0]) {
        case 'r':
            switch(computerChoice[0]) {
                case 'p': return 'c';
                case 's': return 'h';
            }
        case 'p':
            switch(computerChoice[0]) {
                case 'r': return 'h';
                case 's': return 'c';
            }
        case 's':
            switch(computerChoice[0]) {
                case 'r': return 'c';
                case 'p': return 'h';
            }
    }
}

function playGame() {
    const pointsToWin = 3;
    const gameScore = { humanScore: 0, computerScore: 0};

    while (gameScore.humanScore < pointsToWin && gameScore.computerScore < pointsToWin) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice, gameScore);
        console.log(`Human: ${gameScore.humanScore} - `
            + `Computer: ${gameScore.computerScore}`);
    }
    console.log("Game is finished!");
}

playGame();