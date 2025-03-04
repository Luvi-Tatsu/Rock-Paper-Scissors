console.log("Hello World");
// we add a player Score variable
let playerScore = 0;
// we add a computer Score variable
 let computerScore = 0;
//this function declairs the computer move
function getComputerChoice(){
    const picks = ["rock","paper","scissors"]
    //math.random picks random characters from our variable "picks". Math.floor makes sure that the characters is not singular. picks.length targets the whole variable which in english the variable arrays.
    return picks [Math.floor(Math.random()*picks.length)];  
}

//console.log(getComputerChoice());
// This function is for number 3, I put a function to promt a Players Choice
function getPlayerChoice(){
// Place is a variable for the prompt which the player will write to. its still not key insensitive
    place = prompt;
    return place("rock, paper or scissors");
}
// console no longer needed but was helpfull
//console.log(getPlayerChoice());
// this is for a round for the game.
function playRound(playerChoice, computerChoice) {
    let playerWin ='You Win, Your Score: ';
    let compWin = 'You lose! ${computerSelection} beats ${humanSelection} Computer Score: ';
    // if human and computer choices were the same, its a tie
    if (humanSelection === computerSelection){
        return 'tie';}  
    // if human is scissor and compter is paper human wins
    if (humanSelection === "scissors" && computerSelection === "paper"){
            return  [playerWin, playerScore++] ;}
    // if human is rock and compter is scissors human wins       
    if (humanSelection === "rock" && computerSelection === "scissors"){
            return  [playerWin, playerScore++] ;}
    // if human is paper and compter is rock human wins       
    if (humanSelection === "paper" && computerSelection === "rock"){
            return  [playerWin, playerScore++] ;}
    // if its vice versa computer wins
    else {
            return  [compWin, computerScore++];
                }
  }
  //
  // we define our getPlayerChoice function as variable and make it all to lower case or key insensitive.
  const humanSelection = getPlayerChoice().toLowerCase();
  //we define our getComputerChoice funtion as variable note: im still confuse as to why we do it
  const computerSelection = getComputerChoice();
 
  
  playRound(humanSelection, computerSelection);
  console.log(playRound());
  console.log(playerScore);
  console.log(computerScore);
  

//   function playGame(){
//     if (playerScore && computerScore != 5){
//        return playRound(humanSelection, computerSelection);
//         console.log(playRound());
//     }
//   }
   


