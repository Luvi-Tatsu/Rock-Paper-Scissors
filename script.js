console.log("Hello World");

// //this function declairs the computer move
function getComputerChoice(){
    const picks = ["rock","paper","scissors"]
    //math.random picks random characters from our variable "picks". Math.floor makes sure that the characters is not singular. picks.length targets the whole variable which in english the variable arrays.
    return picks [Math.floor(Math.random()*picks.length)];     
}

function getPlayerChoice(){
// Place is a variable for the prompt which the player will write to. its still not key insensitive
    place = prompt;
    return place("rock, paper or scissors");
}
let playerScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) { 
    if (humanSelection === computerSelection){
        return console.log('tie');
    }  
    else if ((humanSelection === "scissors" && computerSelection === "paper")||
    (humanSelection === "rock" && computerSelection === "scissors")||
    (humanSelection === "paper" && computerSelection === "rock")){
        playerScore ++;
        return console.log('You Win');
            }
    else {
        computerScore ++;
        return console.log (`You lose! ${computerSelection} beats ${humanSelection}`);
            }
  }

  function score(){
    console.log(`Final Scores=> Player: ${playerScore} Computer: ${computerScore}`)
    if (computerScore > playerScore){
        console.log("Computer is the Winner");}
    else if (computerScore < playerScore){
        console.log("Player is the Winner!");}
    else{
        console.log("its a tie");}  
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getPlayerChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
score();
}

playGame()