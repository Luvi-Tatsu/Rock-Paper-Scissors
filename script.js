// console.log("Hello World");




//   function score(){
//     console.log(`Final Scores=> Player: ${playerScore} Computer: ${computerScore}`)
//     if (computerScore > playerScore){
//         console.log("Computer is the Winner");}
//     else if (computerScore < playerScore){
//         console.log("Player is the Winner!");}
//     else{
//         console.log("its a tie");}  
// }

// function playGame(){
//     for (let i = 0; i < 5; i++){
//         const humanSelection = getPlayerChoice().toLowerCase();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
// score();
// }

// playGame()


// Define Container
const container = document.querySelector("#container");
//Create Header
const gameHeader = document.createElement("h1");
gameHeader.classList.add("gameHeader");
gameHeader.textContent = "Game Header";
container.appendChild(gameHeader);
//Create Container for Interactions
const userInterface = document.createElement('div');
userInterface.classList.add('userInterface');
container.appendChild(userInterface);
// Create Container for Player Interactions
const playerSide = document.createElement('div');
playerSide.classList.add('playerSide');
userInterface.appendChild(playerSide);

// Rock Button
const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = "Rock";
playerSide.appendChild(rock);

// Paper Button
const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = "Paper";
playerSide.appendChild(paper);
// Scissor Button
const scissor = document.createElement('button');
scissor.classList.add('scissor');
scissor.textContent = "Scissor";
playerSide.appendChild(scissor);

// Create Container for Computer Interactions
const computerSide = document.createElement('div');
computerSide.classList.add('computerSide');
userInterface.appendChild(computerSide);

// Prompt for computer Choice
const computerPrompt = document.createElement('h2');
computerPrompt.classList.add('computerPrompt');
computerPrompt.textContent = `Choose to Play`;
computerPrompt.style.marginTop = "0px"
computerPrompt.style.textAlign = "center";
computerSide.appendChild(computerPrompt);
//Create Score
const gameScore = document.createElement("h1");
gameScore.classList.add("gameScore");
gameScore.textContent = "Game Score";
container.appendChild(gameScore);

//Create Container for Scores
const scoreInterface = document.createElement('div');
scoreInterface.classList.add('scoreInterface');
container.appendChild(scoreInterface);

// Create Container for Player Score
const playerScore = document.createElement('div');
playerScore.classList.add('playerScore');
scoreInterface.appendChild(playerScore);

// Create Player Score
var scorePlayer = document.createElement('h3');
scorePlayer.classList.add('scorePlayer');
scorePlayer.textContent = `Player Score: `;
playerScore.appendChild(scorePlayer);

// Create Container for Computer Score
const computerScore = document.createElement('div');
computerScore.classList.add('computerScore');
scoreInterface.appendChild(computerScore);

// Create Computer Score
var scoreComputer = document.createElement('h3');
scoreComputer.classList.add('scoreComputer');
scoreComputer.textContent = `Computer Score: `;
computerScore.appendChild(scoreComputer);


// FUNCTIONS

const real = function getComputerChoice(){
    const picks = ["rock","paper","scissors"]
    return picks [Math.floor(Math.random()*picks.length)];  
    }

  let getPlayerChoice = rockButtonClick || paperButtonClick || scissorButtonClick;
    let computerScores = 0;
    let playerScores = 0;

// Click Rock
rock.addEventListener('click', rockButtonClick);
 function rockButtonClick(e){
    let rand = real(); 
    computerPrompt.textContent = `Computer Plays: ${rand}`;
    playRound("rock",rand);
}

// Click Paper
paper.addEventListener('click', paperButtonClick);
function paperButtonClick(e){
    let rand = real(); 
     computerPrompt.textContent = `Computer Plays: ${rand}`;
    playRound("paper",rand);}

// Click Scissor
scissor.addEventListener('click', scissorButtonClick);
function scissorButtonClick(e){
    let rand = real(); 
    computerPrompt.textContent = `Computer Plays: ${rand}`;
    playRound("scissors",rand);}


    function playRound(humanSelection, computerSelection) { 
            if (humanSelection === computerSelection){
                return console.log('tie');
            }  
            else if ((humanSelection === "scissors" && computerSelection === "paper")||
            (humanSelection === "rock" && computerSelection === "scissors")||
            (humanSelection === "paper" && computerSelection === "rock")){
                return console.log('You Win');
                    }
            else {
                return console.log (`You lose! ${computerSelection} beats ${humanSelection}`);
                    }
          }