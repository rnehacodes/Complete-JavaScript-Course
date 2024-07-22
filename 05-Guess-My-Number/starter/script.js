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

var correctNumber = getRandomInt(1, 20);

var score = Number(document.querySelector('.score').textContent),
  highScore = Number(document.querySelector('.highscore').textContent);

// console.log(score, typeof score, highScore, typeof highScore);

//"Check" button click event
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  //Player wins the game
  if (guess === correctNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = '🥳 Correct Number!🎉';
    score += 10;
    document.querySelector('.score').textContent = score;
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#60b347';
    document.querySelector('.number').textContent = correctNumber;
    correctNumber = getRandomInt(1, 20);
  }
  //Checking invalid values
  else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      '⛔ Invalid Input. Please try again!';
  }
  //Incorrect number
  else {
    if (score > 5) {
      if (guess > correctNumber) {
        document.querySelector('.message').textContent = '📈 Too High!';
      } else if (guess < correctNumber) {
        document.querySelector('.message').textContent = '📈 Too Low!';
      }
      score -= 5;
      document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game! 🥺';
        score = 0;
        document.querySelector('.score').textContent = score;
        document.getElementById(".check").disabled = true;
    }
  }
});
