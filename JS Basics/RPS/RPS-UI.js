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

function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase()
    switch (getComputerChoice()) {
        case 'rock':
            if (humanChoice == 'paper') {
                return ["You Win! Paper beats Rock", "human"]
            } else if (humanChoice == 'scissor') {
                return ["You Lose! Rock beats Scissors", "computer"]
            } else {
                return ["It's a draw", "draw"]
            }

        case 'paper':
            if (humanChoice == 'scissor') {
                return ["You Win! Scissors beats Paper", "human"]
            } else if (humanChoice == 'rock') {
                return ["You Lose! Paper beats Rock", "computer"]
            } else {
                return ["It's a draw", "draw"]
            }

        case 'scissor':
            if (humanChoice == 'rock') {
                return ["You Win! Rock beats Scissors", "human"]
            } else if (humanChoice == 'paper') {
                return ["You Lose! Scissors beats Paper", "computer"]
            } else {
                return ["It's a draw", "draw"]
            }

    }
}



const buttons = document.querySelectorAll('button');

const win = document.querySelector('#win');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

let humanScore = 0
let computerScore = 0

buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        result = playRound(button.id)

        win.textContent = result[0]


        if (result[1] == "human") {
            humanScore = humanScore + 1
        } else if (result[1] == "computer") {
            computerScore = computerScore + 1
        } else {
        }

        score.textContent = "human: " + humanScore + " " + "computer: " + computerScore


        if (humanScore == 5 || computerScore == 5) {
            if (humanScore == 5) {
                winner.textContent = "Winner: Human"
            } else {
                winner.textContent = "Winner: Computer"
            }

            humanScore = 0;
            computerScore = 0;

        }



    });
});