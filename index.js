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


// userShape = getHumanChoice();
// console.log(userShape);

computerShape = getComputerChoice();
console.log(computerShape);