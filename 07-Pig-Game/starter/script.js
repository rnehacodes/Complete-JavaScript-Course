'use strict';

class Player {
  constructor(card, totalScore, _currentScore) {
    this.card = document.querySelector(card);
    this.totalScore = document.getElementById(totalScore);
    this.currentScore = document.getElementById(_currentScore);
  }

  updateCurrentScore(cScore) {
    this.currentScore.textContent = cScore;
    console.log('score updated');
  }

  updateTotalScore(tScore) {
    this.totalScore.textContent = tScore;
  }

  setActive(isActive) {
    this.card.classList.toggle('player--active', isActive);
  }
}

const players = [
  new Player('.player--0', 'score--0', 'current--0'),
  new Player('.player--1', 'score--1', 'current--1'),
];

var i = 0, currentPlayer = players[i], playerCurrentScore = 0;
const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

function switchPlayer() {
  currentPlayer[i].setActive(false);
  currentPlayer.updateCurrentScore(0);
  i = (i + 1) % players.length;
  currentPlayer = players[i];
  currentPlayer[i].setActive(true);
}

//Dice Roll Function to display dice number randomly
function getDiceRollResult() {
  let num = Math.floor(Math.random() * 6) + 1;
  dice.src = `./dice-${num}.png`;
  return num;
}

//Roll Dice button Click
rollDiceBtn.addEventListener('click', () => {
  let diceResult = getDiceRollResult();
  if (diceResult === 1) {
    switchPlayer();
  } else {
    playerCurrentScore += diceResult;
    currentPlayer.updateCurrentScore(playerCurrentScore);
  }
  document.querySelector('.dice').classList.remove('hidden');
});

holdBtn.addEventListener('click', () => {
  let totalScore = Number (currentPlayer.totalScore.textContent);
  totalScore += Number (currentPlayer.currentScore.textContent);
  currentPlayer.updateTotalScore(totalScore);
  currentPlayer.updateCurrentScore(0);
  switchPlayer();
});

newGameBtn.addEventListener('click', () => {
  location.reload();
})