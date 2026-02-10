console.log("Hello World");
//Input one of the three choices (rock, paper or scissors)
let choice = prompt("Rock, Paper, or Scissors?");
function getHumanChoice(choice) {
    let humChoice = "";
    if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
        humChoice = choice;
    } else {
        humChoice = "";
    }
    return "Your choice is: " + humChoice;
}
console.log(getHumanChoice(choice));

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
    return "Computer´s choice is: " + compChoice;
}
console.log(getComputerChoice());

//Tell the program how the game works rock wins to scissors, sissors wins to paper, and paper wins to rock
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("That´s a draw! " + humanChoice + " is equal to " + compChoice);
    }
    switch (humanChoice) {
        case "rock":
            if (compChoice == "Paper")
    }
}

//Tell the program how to keep score
let humanScore = 0;
let computerScore = 0;

