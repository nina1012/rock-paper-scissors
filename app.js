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

// PRACTICE 
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 1.repeatString
// longer solution
// const repeatString = (str, num) => {
//   let repeat = '';
//   if (num < 0) {
//     return 'ERROR';
//   }
//   for (let i = 0; i < num; i++) {
//     repeat += str;
//   }

//   return repeat;
// };

// shorter solution
// const repeatString = (str, num) => str.repeat(num);

// console.log(repeatString('hey', 0));

// // // // // // // // // // // // // // // // // // // // // // // // // // // //

// 2.reverseString
// longer solution
// const reverseString = str => {
//   let letters = str.split('');
//   let reversed = '';
//   for (let i = letters.length - 1; i >= 0; i--) {
//     reversed += letters[i];
//   }
//   return reversed;
// };

// shorter solution
// const reverseString = str =>
//   str
//     .split('')
//     .reverse()
//     .join('');

// console.log(reverseString('123! abc!'));

// // // // // // // // // // // // // // // // // // // // // // // // // // // //

// 3. removeFromArray([...array],item)

// const removeFromArray = (arr, ...items) => {
//   return arr.filter(item => !items.includes(item));
// };
// console.log(removeFromArray([1, 2, 3, 4], 3)); // [1,2,4]
// console.log(removeFromArray([1, 2, 3, 4], 3, 2)); // [1,4]
// console.log(removeFromArray([1, 2, 3, 4], 7, 'tacos')); // [1,2,3,4]
// console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // [1,3,4]
// console.log(removeFromArray([1, 2, 3, 4], 3, 2)); // [1,4]
// console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)); // []
// console.log(removeFromArray(['hey', 2, 3, 'ho'], 'hey', 3)); // [2,'ho']
// console.log(removeFromArray([1, 2, 3], '1', 3)); // [1,2]

// // // // // // // // // // // // // // // // // // // // // // // // // // // //

// 4. sumAll
// const sumAll = (num1, num2) => {
//   let sum = 0;
//   for (let i = num1; i <= num2; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(sumAll(1, 4));

// // // // // // // // // // // // // // // // // // // // // // // // // // // //

// 5.leapYears
// Leap years are years divisible by four (like 1984 and 2004).
// However, years divisible by 100 are not leap years (such as 1800 and 1900)
//unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing, but not as confusing as having July in the middle of the winter, which is what would eventually happen.)

// const leapYears = year => {
//   if (year % 4 == 0) {
//     if (year % 400 == 0) {
//       return true;
//     } else if (year % 100 == 0) {
//       return false;
//     }
//     return true;
//   }
//   return false;
// };

// console.log(leapYears(1996)); // true
// console.log(leapYears(1997)); // false
// console.log(leapYears(34992)); // true
// console.log(leapYears(1900)); // false
// console.log(leapYears(1600)); // true
// console.log(leapYears(700)); // false

// // // // // // // // // // // // // // // // // // // // // // // // // // // //
// 6.tempConversion
// ftoc [°F] = [°C] × ​9⁄5 + 32

// const ftoc = temp => Math.floor((temp - 32) * (5 / 9) * 10) / 10;
// console.log(ftoc(32)); // 0
// console.log(ftoc(100)); // 37.8
// console.log(ftoc(-100)); // -73.4

// // ctof [°C] = ([°F] − 32) × ​5⁄9

// const ctof = temp => Math.floor(((temp * 9) / 5 + 32) * 10) / 10;
// console.log(ctof(0)); // 32
// console.log(ctof(73.2)); // 163.7
// console.log(ctof(-10)); // 14
