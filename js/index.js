let userChoice = "";
let computerChoice = "";

let userScore = document.getElementById("user_score");
let uScore = 0;
userScore.innerHTML = uScore;
let computerScore = document.getElementById("computer_score");
let cScore = 0;
computerScore.innerHTML = cScore;
let tie = document.getElementById("ties");
let ties = 0
tie.innerHTML = ties;

function computerChoiceGeneration() {
    let options = ["Rock", "Paper", "Scissors"];
    let rng = Math.floor(Math.random() * options.length);
    return options[rng];
}
function updateChoices(x, y) {
    let usersChoice = document.getElementById("user_choice");
    usersChoice.innerHTML = x;
    let computersChoice = document.getElementById("computer_choice");
    computersChoice.innerHTML = y;
}
function whoWon() {
    let result = document.getElementById("result");
    if (userChoice === computerChoice) {
        console.log("Tie!");
        ties = ties + 1;
        tie.innerHTML = ties;
        result.innerHTML = "Tie!";
    } else if (
        userChoice === "Rock" && computerChoice === "Scissors" ||
        userChoice === "Paper" && computerChoice === "Rock" ||
        userChoice === "Scissors" && computerChoice === "Paper"
    ) {
        console.log("User Wins!");
        uScore = uScore + 1;
        userScore.innerHTML = uScore;
        result.innerHTML = "You Win!";
    } else {
        console.log("Computer Wins!");
        cScore = cScore + 1;
        computerScore.innerHTML = cScore;
        result.innerHTML = "Computer Wins!";
    }
}

function rockSelection() {
    userChoice = "Rock";
    console.log("User's Choice: " + userChoice);
    computerChoice = computerChoiceGeneration();
    console.log("Computers Choice: " + computerChoice);
    updateChoices(userChoice, computerChoice);
    whoWon();
}
function paperSelection() {
    userChoice = "Paper";
    console.log("User's Choice: " + userChoice);
    computerChoice = computerChoiceGeneration();
    console.log("Computers Choice: " + computerChoice);
    updateChoices(userChoice, computerChoice);
    whoWon();
}
function scissorsSelection() {
    userChoice = "Scissors";
    console.log("User's Choice: " + userChoice);
    computerChoice = computerChoiceGeneration();
    console.log("Computers Choice: " + computerChoice);
    updateChoices(userChoice, computerChoice);
    whoWon();
}