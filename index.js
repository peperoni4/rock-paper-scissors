function getHumanChoice() {
    let userShape = null;
    while (!validateUserInput(userShape)) {
        userShape = prompt("Please, enter your shape R - rock, P - paper or S - scissors");
    }
    return userShape.toLocaleLowerCase();
}

function validateUserInput(shape) {
    if (!shape || shape.length === 0) return false;
    switch(shape[0].toLocaleLowerCase()) {
        case 'r':
        case 'p':
        case 's':
            return true;
    }

    return false;
}

function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"];
    return shapes[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    const roundResult = determineRoundResult(humanChoice, computerChoice);
    switch(roundResult) {
        case 'c': 
            console.log("You lost, seems like robots are gonna replace us soon D:");
            computerScore += 1;
            break;
        case 'h':
            console.log("Wow, human won this round!");
            humanScore += 1;
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


humanChoice = getHumanChoice();
console.log(humanChoice);

computerChoice = getComputerChoice();
console.log(computerChoice);

let humanScore = 0
let computerScore = 0;
playRound(humanChoice, computerChoice);