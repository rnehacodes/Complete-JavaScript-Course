'use strict';

class Player {
  constructor(card, totalScore, _currentScore) {
    this.card = document.querySelector(card);
    this.totalScore = document.getElementById(totalScore);
    this.currentScore = document.getElementById(_currentScore);
  }

  updateCurrentScore(cScore) {
    this.currentScore.textContent = cScore;
  }

  updateTotalScore(tScore) {
    this.totalScore.textContent = tScore;
  }

  setActive(isActive) {
    this.card.classList.toggle('player--active', isActive);
  }

  declareWinner() {
    this.card.classList.add('player--winner');
  }
}

const players = [
  new Player('.player--0', 'score--0', 'current--0'),
  new Player('.player--1', 'score--1', 'current--1'),
];

var i = 0,
  currentPlayer = players[i],
  playerCurrentScore = 0;
const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

//Switch player event
function switchPlayer() {
  currentPlayer.setActive(false);
  currentPlayer.updateCurrentScore(0);
  i = (i + 1) % players.length;
  currentPlayer = players[i];
  currentPlayer.setActive(true);
  playerCurrentScore = 0;
}

//Function to show player win event
function playerWon() {
  currentPlayer.declareWinner();
  rollDiceBtn.disabled = true;
  holdBtn.disabled = true;
  dice.classList.add('hidden');
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
  dice.classList.remove('hidden');
});

//Hold button click event
holdBtn.addEventListener('click', () => {
  let totalScore = Number(currentPlayer.totalScore.textContent);
  totalScore += Number(currentPlayer.currentScore.textContent);
  currentPlayer.updateCurrentScore(0);
  currentPlayer.updateTotalScore(totalScore);
  if (totalScore >= 10) {
    playerWon();
  } else {
    switchPlayer();
  }
});

//New game button click event
newGameBtn.addEventListener('click', () => {
  location.reload();
});
