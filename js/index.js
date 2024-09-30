let userChoice = "";
let computerChoice = "";

function computerChoiceGeneration() {
    let options = ["rock", "paper", "scissors"];
    let rng = Math.floor(Math.random() * 3) + 1;
    return options[rng];
}

function rockSelection() {
    userChoice = "rock";
    console.log("User's Choice: Rock");
}
function paperSelection() {
    userChoice = "paper";
}
function scissorsSelection() {
    userChoice = "scissors";
}

function whoWon(){
    computerChoice = computerChoiceGeneration();
    if (userChoice === computerChoice) {
        console.log("Tie");
        displayResult("Tie");
    }
}