'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  const selectedEl = document.querySelector('.message');
  selectedEl.textContent = `berke ${message}`;
};
const displayScoreText = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumberText = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayNumberStyleColor = function (number) {
  document.querySelector('.number').style.color = number;
};
const displayHighscoreText = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const displayStyleWidth = function (style) {
  document.querySelector('.number').style.width = style;
};
const displayStyleBackgroundColor = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};
const displayInputValue = function (input) {
  document.querySelector('input').value = input;
};
function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
// const hideEl = function (className = '.again') {
//   // document.querySelector(className).classList.add('hidden');
//   console.log(document.querySelector(className));}

// hideEl('.check');
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess && guess != 0) {
    displayMessage('You should try to enter numbers you know... (ㆆ_ㆆ)');
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Lower!' : 'Upper!');
      score--;
      displayScoreText(score);
      displayNumberText(guess > secretNumber ? `${guess}▼` : `${guess}▲`);
      displayNumberStyleColor(
        guess > secretNumber ? 'rgb(250, 2, 2)' : '#60b347'
      );
      //If score = 0
    } else {
      displayMessage('You lost the game ( ˘︹˘ ) ');
      displayScoreText(0);
    }
  }
  //When player enters invalid value
  if (guess > 20 || guess <= 0) {
    displayMessage('You have to enter a value between (1,20)');
    displayNumberText('?');
    displayNumberStyleColor('#222');
    displayInputValue('');
  }
  //When player wins the game
  else if (guess === secretNumber && guess <= 20 && guess > 0) {
    displayMessage('Correct number! ✔✔✔');
    displayHighscoreText(highscore);
    displayNumberText(guess);
    displayStyleBackgroundColor('#60b347');
    displayStyleWidth('30rem');
    displayNumberStyleColor('#222');
    if (score > highscore) {
      highscore = score;
      displayHighscoreText(highscore);
    }
  }
});
//Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScoreText(20);
  secretNumber = generateRandomNumber();
  displayMessage('Start guessing...');
  displayStyleBackgroundColor('#222');
  displayNumberText('?');
  displayInputValue('');
  displayNumberStyleColor('#222');
  displayStyleWidth('15rem');
  console.log(secretNumber);
});
