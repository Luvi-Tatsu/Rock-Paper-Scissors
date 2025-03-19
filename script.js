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
scorePlayer.textContent = `Player Score: 0`;
playerScore.appendChild(scorePlayer);
// Create Container for Computer Score
const computerScore = document.createElement('div');
computerScore.classList.add('computerScore');
scoreInterface.appendChild(computerScore);
// Create Computer Score
var scoreComputer = document.createElement('h3');
scoreComputer.classList.add('scoreComputer');
scoreComputer.textContent = `Computer Score: 0`;
computerScore.appendChild(scoreComputer);

// FUNCTIONS
//Define Computer play
const real = function getComputerChoice(){
    const picks = ["rock","paper","scissors"]
    return picks [Math.floor(Math.random()*picks.length)];  
    }
//score values;
let computerScores = 0;
let playerScores = 0;
//Play Game when Player Choose:
// Click Rock
rock.addEventListener('click', rockButtonClick);
 function rockButtonClick(e){
    let rand = real(); 
    computerPrompt.textContent = `Computer Plays: ${rand}`;
    playRound("rock",rand);
    if (playRound("rock",rand) === 1){
        playerScores ++;
        scorePlayer.textContent = `Player Score: ${playerScores}`;
        console.log('You Win');
    }
    if (playRound("rock",rand) === 0){
        computerScores ++;
        console.log (`You lose! ${rand} beats rock`);
        scoreComputer.textContent = `Computer Score: ${computerScores}`;
    }
    if (playRound("rock",rand) === -1){
        console.log('Tie')
    }
    winner();}
// Click Paper
paper.addEventListener('click', paperButtonClick);
function paperButtonClick(e){
    let rand = real(); 
     computerPrompt.textContent = `Computer Plays: ${rand}`;
    playRound("paper",rand);
    if (playRound("paper",rand) === 1){
        playerScores ++;
        scorePlayer.textContent = `Player Score: ${playerScores}`;
        console.log('You Win');
    }
    if (playRound("paper",rand) === 0){
        computerScores ++;
        console.log (`You lose! ${rand} beats paper`);
        scoreComputer.textContent = `Computer Score: ${computerScores}`;
    }
    if (playRound("paper",rand) === -1){
        console.log('Tie')
    }
    winner();
    }
// Click Scissor
scissor.addEventListener('click', scissorButtonClick);
function scissorButtonClick(e){
    let rand = real(); 
    computerPrompt.textContent = `Computer Plays: ${rand}`;
    playRound("scissors",rand);
    if (playRound("scissors",rand) === 1){
        playerScores ++;
        scorePlayer.textContent = `Player Score: ${playerScores}`;
        console.log('You Win');
    }
    if (playRound("scissors",rand) === 0){
        computerScores ++;
        console.log (`You lose! ${rand} beats scissors`);
        scoreComputer.textContent = `Computer Score: ${computerScores}`;
    }
    if (playRound("scissors",rand) === -1){
        console.log('Tie')
    }
    winner();
}
// Play Function
    function playRound(humanSelection, computerSelection) { 
            if (humanSelection === computerSelection){
                return -1;
            }  
            else if ((humanSelection === "scissors" && computerSelection === "paper")||
            (humanSelection === "rock" && computerSelection === "scissors")||
            (humanSelection === "paper" && computerSelection === "rock")){
                
                return 1;
                    }
            else {
                
                return 0;
                    }
          }
// Score Function
    function winner (){
    if(playerScores >= 5){
        scorePlayer.textContent = `Player Score: ${playerScores}`;
        alert("Congratulations You Won!!!");
        alert("Play Again?");
        window.location.reload();
        
    }
    else if (computerScores >= 5){
        scoreComputer.textContent = `Computer Score: ${computerScores}`;
        alert("The Odds was Against You, Computer Won");
        alert("Play Again?");
        window.location.reload();
    }

}
