// 'use strict';

// document.querySelector('.message').textContent = 'winner is';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value - 0;
  // When there is no input
  if (!guess) {
    displayMessage('⚠ Son tanlanmadi');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 To'g'ri. Siz topdingiz !");
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Pastroq son tanlang' : 'Balandroq son tanlang'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😫 Yutqazdingiz');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Taxmin...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000';
});
