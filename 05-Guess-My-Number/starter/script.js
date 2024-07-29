'use strict';

// //Read the text content of a DOM element
// console.log(document.querySelector('.message').textContent);

// //Modify the text content of a DOM element
// document.querySelector('.message').textContent = "🥳Correct Number!🎉";

// document.querySelector('.number').textContent = '23';
// document.querySelector('.score').textContent = '73';

// console.log(document.querySelector('.guess').nodeValue);

//Random number generating function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log('Actual answer: ' + random);
  return random;
}

function updateTextContent (elementSelector, msg) {
  document.querySelector(`${elementSelector}`).textContent = msg;
}

function getTextContent (elementSelector) {
  return document.querySelector(`${elementSelector}`).textContent;
}

var correctNumber = getRandomInt(1, 20);

var score = Number(getTextContent('.score')),
  highScore = Number(getTextContent('.highscore'));

// console.log(score, typeof score, highScore, typeof highScore);

//"Check" button click event
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  //Player wins the game
  if (guess === correctNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = '🥳 Correct Number!🎉';
    // score += 10;
    document.querySelector('.score').textContent = score;
    highScore = score > highScore ? score : highScore;
    updateTextContent('.highscore', highScore);
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#60b347';
    updateTextContent('.number', correctNumber);
    document.querySelector('.check').disabled = true;
  }
  //Checking invalid values
  else if (guess < 1 || guess > 20) {
    updateTextContent('.message', '⛔ Invalid Input. Please try again!');
  }
  //Incorrect number
  else {
    if (score > 5) {
      updateTextContent('.message', guess > correctNumber ? '📈 Too High!' : '📈 Too Low!');
      score -= 5;
    } else {
      updateTextContent('.message', 'You lost the game! 🥺');
      score = 0;
      document.querySelector('.check').disabled = true;
    }
    updateTextContent('.score', score);
  }
});

//"Again" button click event
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  updateTextContent('.message', 'Start guessing...');
  score = 20;
  updateTextContent('.number', '?');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.color = '#333';
  updateTextContent('.score', score);
  document.querySelector('.guess').value = "";
  correctNumber = getRandomInt(1, 20);
  document.querySelector('.check').disabled = false;
});
