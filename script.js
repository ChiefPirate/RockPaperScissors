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

function getHumanChoice(){

    let userInput = prompt("Rock, Paper or Scissors").toLowerCase()
    return userInput
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){

    alert (computerChoice)

    if (humanChoice == computerChoice){
        alert ("It's a Draw")
        alert (`Your score is :${humanScore}`)
        alert (`Computer score is : ${computerScore}`)
    }

    else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper"){

                alert ("You Win")
                humanScore++
                alert (`Your score is :${humanScore}`)
                alert (`Computer score is : ${computerScore}`)
            }
    else if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock"){

                alert ("You lose")
                computerScore++
                alert (`Your score is :${humanScore}`)
                alert (`Computer score is : ${computerScore}`)
            }
    else {
            alert ("Enter rock/paper/scissors only")       
    }
}


function playGame(){
    for (let i=1;i<=5;i++)
    playRound(getHumanChoice(), getComputerChoice())
    alert (`Your score is :${humanScore}`)
    alert (`Computer score is : ${computerScore}`)
}


playGame()



if (humanScore == computerScore){
    alert ("It's a draw")
}
if (humanScore > computerScore){
    alert ("You Win the game")
}

if (humanScore < computerScore){
    alert ("You Lose the game")
}