

function getComputerChoice() {
    num = Math.random()
    if (num < 0.33) {
        return "rock"
    } else if (num >= 0.33 && num < 0.66) {
        return "paper"
    } else {
        return "scissor"
    }
}


function getHumanChoice() {
    usr = prompt('Enter choice: ')
    return usr
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    switch (computerChoice) {
        case 'rock':
            if (humanChoice == 'paper') {
                console.log("You Win! Paper beats Rock")
                return ("human")
            } else if (humanChoice == 'scissor') {
                console.log("You Lose! Rock beats Scissors")
                return ("computer")
            } else {
                console.log("Draw")
                return
            }
            break;

        case 'paper':
            if (humanChoice == 'scissor') {
                console.log("You Win! Scissors beats Paper")
                return ("human")
            } else if (humanChoice == 'rock') {
                console.log("You Lose! Paper beats Scissors")
                return ("computer")
            } else {
                console.log("Draw")
                return
            }

        case 'scissor':
            if (humanChoice == 'rock') {
                console.log("You Win! Rock beats Scissors")
                return ("human")
            } else if (humanChoice == 'paper') {
                console.log("You Lose! Scissors beats Paper")
                return ("computer")
            } else {
                console.log("Draw")
                return
            }

    }
}




function playGame() {
    humanScore = 0
    computerScore = 0



    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        a = playRound(humanSelection, computerSelection);
        if (a == "human") {
            humanScore = humanScore + 1
        } else if (a == "computer") {
            computerScore = computerScore + 1
        } else {
        }
    }

    console.log('human score: ', humanScore)
    console.log('computer score: ', computerScore)


}

playGame()
