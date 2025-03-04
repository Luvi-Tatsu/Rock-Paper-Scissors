console.log("Hello World");

// const playerScore = 0;
// const computerScore = 0;

//this function declairs the computer move
function getComputerChoice(){
    const picks = ["rock","paper","scissors"]
    //math.random picks random characters from our variable "picks". Math.floor makes sure that the characters is not singular. picks.length targets the whole variable which in english the variable arrays.
    return picks [Math.floor(Math.random()*picks.length)];  
}

console.log(getComputerChoice());
// This function is for number 3, I put a function to promt a Players Choice
function getPlayerChoice(){
// Place is a variable for the prompt which the player will write to. its still not key insensitive
    place = prompt;
    return place("rock, paper or scissors");
}

console.log(getPlayerChoice());

// function playRound(getPlayerChoice, getComputerChoice) {
//     if (humanSelection === computerSelection){
//         return 'tie';}  

//     if (humanSelection === "scissors" && computerSelection === "paper"){
//             return 'you win';}
           
//     if (humanSelection === "rock" && computerSelection === "scissors"){
//             return 'you win';}
//     if (humanSelection === "paper" && computerSelection === "rock"){
//             return 'you win';}
//     else {
//         return `You lose! ${computerSelection} beats ${humanSelection}`;
//                 }
//   }
//   console.log(getComputerChoice());
//   const humanSelection = getPlayerChoice().toLowerCase();
//   const computerSelection = getComputerChoice();
  
//   playRound(humanSelection, computerSelection);

//   function playGame(){
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound());
//     }
//   }
   


