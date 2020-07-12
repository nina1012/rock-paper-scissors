const options = ['paper', 'rock', 'scissors'];
// scores
let playerScore = 0;
let computerScore = 0;

const displayScores = () => {
  return `playerScore:${playerScore} vs computerScore:${computerScore}`;
};

const computerPlay = () => {
  const index = Math.floor(Math.random() * options.length); // gets random index
  return options[index];
};

const playRound = (playerSelection, computerSelection) => {
  // 1. make case insensitive
  playerSelection = prompt('Enter paper,rock or scissors').toLowerCase();
  computerSelection = computerPlay();
  // 2.comparing the selections
  if (playerSelection == computerSelection) {
    return `Draw : ${displayScores()}`;
  } else if (playerSelection == 'paper' && computerSelection == options[1]) {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection} : ${displayScores()}`;
  } else if (playerSelection == 'paper' && computerSelection == options[2]) {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection} : ${displayScores()}`;
  } else if (playerSelection == 'rock' && computerSelection == options[0]) {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection} : ${displayScores()}`;
  } else if (playerSelection == 'rock' && computerSelection == options[2]) {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection} : ${displayScores()}`;
  } else if (playerSelection == 'scissors' && computerSelection == options[0]) {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection} : ${displayScores()}`;
  }
  computerScore++;
  return `You lose, ${computerSelection} beats ${playerSelection} : ${displayScores()}`;
};

function game() {
  return playRound();
}

for (let i = 0; i < 5; i++) {
  console.log(game());
  if (i == 4) {
    console.log(`end game ${displayScores()}`);
  }
}
