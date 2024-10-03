
console.log("lets play!")



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




const getComputerChoice = () => {
    if (getRandomInt(1, 3) === 1) {
        return "rock";
    } else if (getRandomInt(1, 3) === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    console.log("")
    let choice = prompt("choose rock, paper, or scissors!");
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    } else {
        console.log("wrong answer! try again")
    }
}

const playRound = (humanChoice, computerChoice) => {

    
    if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win!");
        humanScore++;
    } else if ((humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log("You lose!");
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log("tie! try again!")
    }

    console.log(`you have ${humanScore} points`);
    console.log(`computer has ${computerScore} points`);
}

const playGame = () => {
    
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("that's the end of the Game!")
    console.log(`final score:
        you: ${humanScore}
        computer: ${computerScore}`)
}
let humanScore = 0;
let computerScore = 0;




playGame()