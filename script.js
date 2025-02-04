const buttonContainer = document.querySelector("#container");
const userdisplay = document.querySelector("#userdisplay");
const computerdisplay = document.querySelector("#computerdisplay");
const winnerdisplay = document.querySelector("#winnerdisplay");

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
})
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})

function getComputerChoice(){
    let computerInput = Math.floor(Math.random()*3)
    
    if (computerInput == 0){
        return "rock"
    }

    if (computerInput == 1){
        return "paper"
    }

    if (computerInput == 2){
        return "scissors"
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){

    alert (`computer's choice : ${computerChoice}`)

    if (humanChoice == computerChoice){
        alert ("It's a Draw")
        userdisplay.textContent = `Your score :${humanScore}`
        computerdisplay.textContent = `Computer score :${computerScore}`
    }

    else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper"){

            alert ("You Win")
            humanScore++
            userdisplay.textContent = `Your score :${humanScore}`
            computerdisplay.textContent = `Computer score :${computerScore}`
            }
    else if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock"){

            alert ("You lose")
            computerScore++
            userdisplay.textContent = `Your score :${humanScore}`
            computerdisplay.textContent = `Computer score :${computerScore}`
            }
    else {
            alert ("Enter rock/paper/scissors only")       
    }

    if (humanScore == 5 || computerScore == 5){
        if(humanScore>computerScore){
            winnerdisplay.textContent  = "You are the winner"
        }
        else if (humanScore < computerScore){
             winnerdisplay.textContent  = "Computer is the winner"
        }
        else if (humanScore == computerScore){
            winnerdisplay.textContent  = "Nobody wins"
        }
    humanScore = 0;
    computerScore = 0;
    }
}





