const options = ['paper', 'rock', 'scissors'];

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', e => console.log(playRound(e)));

// scores
let [playerScore, computerScore] = [0, 0];

let playerResult = document.querySelector('.player-score');
let computerResult = document.querySelector('.computer-score');
const message = document.querySelector('.message');

[playerResult.value, computerResult.value] = [playerScore, computerScore];

// functions
const displayScores = () => {
  return `playerScore:${playerScore} vs computerScore:${computerScore}`;
};

const computerPlay = () => {
  const index = Math.floor(Math.random() * options.length); // gets random index
  return options[index];
};

const playRound = e => {
  playerSelection = e.target.dataset.select;
  computerSelection = computerPlay();

  [playerResult.textContent, computerResult.textContent] = [
    playerScore,
    computerScore
  ];

  return outcome(playerSelection, computerSelection);
};

//  comparing selections
function outcome(player, computer) {
  if (player == computer) {
    return `Draw `;
  } else if (player == 'paper' && computer == options[1]) {
    playerScore++;
    return `You win, ${player} beats ${computer} `;
  } else if (player == 'paper' && computer == options[2]) {
    computerScore++;
    return `You lose, ${computer} beats ${player} `;
  } else if (player == 'rock' && computer == options[0]) {
    computerScore++;
    return `You lose, ${computer} beats ${player} `;
  } else if (player == 'rock' && computer == options[2]) {
    playerScore++;
    return `You win, ${player} beats ${computer} `;
  } else if (player == 'scissors' && computer == options[0]) {
    playerScore++;
    return `You win, ${player} beats ${computer} `;
  }
  computerScore++;
  return `You lose, ${computer} beats ${player} `;
}
