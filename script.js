console.log("Hello World");

//Make the computer choose one too randomly
function getComputerChoice(){
    let compChoice = "";
    let x = Math.random();
    if (x < 0.33) {
        compChoice = "Rock";
    } else if (x > 0.66) {
        compChoice = "Scissors";
    } else {
        compChoice = "Paper";
    }
    return compChoice;
}

//Set the different variables, nodes, and send them to the DOM
let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const divScore = document.querySelector(".score");
const divResult = document.querySelector(".results")
const score = document.createElement("p1");
score.textContent = humanScore + " - " + computerScore;
divScore.appendChild(score);

const result = document.createElement("p");
result.textContent = "Rock, Paper or Scissors?"
divResult.appendChild(result);

const endGame = document.createElement("p");

//Tell the program how the game works rock wins to scissors, sissors wins to paper, and paper wins to rock
function playRound (humanChoice, computerChoice) {
    console.log("Your choice is: " + humanChoice);
    console.log("Computer´s choice is: " + computerChoice);
    if (humanChoice == computerChoice) {
        result.textContent = "That´s a draw! " + humanChoice + " is equal to " + computerChoice;
    } else if (humanChoice === "Rock" && computerChoice === "Paper" || 
        humanChoice === "Paper" && computerChoice === "Scissors" || 
        humanChoice === "Scissors" && computerChoice === "Rock") {
        result.textContent = "You lost! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    } else {
        result.textContent = "You won! " + humanChoice + " beats " + computerChoice;
        humanScore++;
        return "You won!";
    }
}

//Make the buttons run the playRound 
rockButton.addEventListener("click", () => {
    divResult.removeChild(result);
    playRound("Rock", getComputerChoice());
    divResult.appendChild(result);
    score.textContent = humanScore + " - " + computerScore;
} );

paperButton.addEventListener("click", () => {
    divResult.removeChild(result)
    playRound("Paper", getComputerChoice());
    divResult.appendChild(result);
    score.textContent = humanScore + " - " + computerScore;
} );

scissorsButton.addEventListener("click", () => {
    divResult.removeChild(result)
    playRound("Scissors", getComputerChoice());
    divResult.appendChild(result);
    score.textContent = humanScore + " - " + computerScore;
} );


//Finish the game when a button is pressed and the score of one of the players is 5
const button = document.querySelectorAll("button.div");
button.forEach(button => button.addEventListener('click', () => {
    if (humanScore === 5 || computerScore ===5) {
        divScore.removeChild(score);
        divResult.removeChild(result);
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        if (humanScore < computerScore) {
            endGame.textContent = "The Computer won! Total Score: " + computerScore + "-" + humanScore;
            divScore.appendChild(endGame);
        } else {
            endGame.textContent = "You won! Total Score: " + humanScore + "-" + computerScore;
            divScore.appendChild(endGame);
        }
    }
}));


//Start over the game and set the score to 0
const startOver = document.querySelector(".startOver");
startOver.addEventListener("click", () => {
    if (divScore.contains(endGame)) {divScore.removeChild(endGame)} 
    result.textContent = "Rock, Paper or Scissors?"
    score.textContent = "0 - 0"
    divScore.appendChild(score);
    divResult.appendChild(result);
    humanScore = 0;
    computerScore = 0;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
});





