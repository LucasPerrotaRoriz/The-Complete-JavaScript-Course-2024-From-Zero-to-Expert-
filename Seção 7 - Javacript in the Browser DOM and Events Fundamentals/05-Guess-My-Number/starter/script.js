'use strict';

/*
// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

const displayHighScore = function(highscore) {
  document.querySelector('.highscore').textContent = highscore;
}

const displayNumber = function(secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
}

const changeStyle = function(color, width) {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  // When there is not input
  if (!guess) {
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number');
    displayNumber(secretNumber);
    changeStyle('#60b347', '30rem');

    if(score > highscore) {
        highscore = score;
        displayHighScore(highscore);
    }

    // When guess is wrong
  } else if(guess !== secretNumber) {
    if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'To low!');
        score--;
        displayScore(score);
      } else {
          displayMessage('You lost the game!');
          displayScore(0)
      }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    changeStyle('#222', '15rem');
});




