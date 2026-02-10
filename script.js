console.log("Hello World");
//Input one of the three choices (rock, paper or scissors)
function choice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice
}
function getHumanChoice(choice) {
    let humChoice = "";
    if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
        humChoice = choice;
    } else {
        humChoice = "";
    }
    return humChoice;
}


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


function playGame () {
    //Tell the program how to keep score
    let humanScore = 0;
    let computerScore = 0;

    //Tell the program how the game works rock wins to scissors, sissors wins to paper, and paper wins to rock
    function playRound (humanChoice, computerChoice) {
        console.log("Your choice is: " + humanChoice);
        console.log("Computer´s choice is: " + computerChoice);
        lowerCaseHumanChoice = humanChoice.toLowerCase();
        if (lowerCaseHumanChoice == computerChoice.toLowerCase()) {
            console.log("That´s a draw! " + humanChoice + " is equal to " + computerChoice);
        } else if (lowerCaseHumanChoice === "rock" && computerChoice === "Paper" || lowerCaseHumanChoice === "paper" && computerChoice === "Scissors" || lowerCaseHumanChoice === "scissors" && computerChoice === "Rock") {
            console.log("You lost! " + computerChoice + " beats " + humanChoice)
            computerScore++;
        } else {
            console.log("You won! " + humanChoice + " beats " + computerChoice)
            humanScore++;
        }
    }
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(choice()), getComputerChoice());
    }
    if (humanScore < computerScore) {
        console.log ("The Computer won: " + computerScore + "-" + humanScore)
    } else {
        console.log ("The Score was: " + humanScore + "-" + computerScore)
    }
}
playGame();



