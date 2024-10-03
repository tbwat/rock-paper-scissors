
const buttons = document.querySelectorAll("button");
const totalScore = document.querySelector("#total-score p");
const results = document.querySelector("#results p");


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

const playRound = (humanChoice, computerChoice) => {

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        results.textContent = "You won this round!";
        
    } else if ((humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        results.textContent = "The computer wins this round!";
        
    } else if (humanChoice === computerChoice) {
        results.textContent = "tie! try again!";
    }
    totalScore.textContent = `You: ${humanScore} points
        Computer: ${computerScore} points`
    
}


let humanScore = 0;
let computerScore = 0;



buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(button.textContent, getComputerChoice())    
        }
        else if (humanScore === 5) {
            results.textContent = "YOU WIN!"
            totalScore.textContent = `Final Score:
            
            You {${humanScore} points} 
            
            Computer {${computerScore} points}`
        }
        else if (computerScore === 5) {
            results.textContent = "you lose:("
            totalScore.textContent = `Final Score: 
            
            You {${humanScore} points}
            
            Computer {${computerScore} points}`
        }
    })
})   
    

