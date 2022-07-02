'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉'
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 9;

document.querySelector('.guess').value =23;
console.log(document.querySelector('.guess').value)
*/

//number variable is created outside the 'check' EventListener. For the project, we want the random number to only happen once when page is reloaded. Putting 'number' variable inside the 'check' function will cause the function produce a random number every time a touchpad 'click' is registered.
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When a valid number is not the input
  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔️ Invalid entry, guess again!';

    //Whan player wins
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Yo! Way to Go! 🎯';
    document.querySelector('.number').textContent = secretNum;

    //Using DOM manipulation for inline styling
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Retain high score on game reset
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }

    //When guess is too high
  } else if (guess > secretNum) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        'Too high! Guess Again! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'LOL 😆 GAME OVER! 🫵';
    }

    //When guess is too low
  } else if (guess < secretNum) {
    document.querySelector('.message').textContent = 'Too low! Guess Again! 📉';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing . . .';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
