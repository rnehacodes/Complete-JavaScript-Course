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

function SwitchPlayer(currentPlayer, i, players) {
  currentPlayer.card.classList.remove('player--active');
  currentPlayer = players[i];
  currentPlayer.card.classList.add('player--active');
  return currentPlayer;
}

//Dice Roll Function to display dice number randomly
function GetDiceRollResult() {
  let num = Math.floor(Math.random() * 6) + 1;
  dice.src = `./dice-${num}.png`;
  return num;
}

// function

rollDiceBtn.addEventListener('click', () => {
  let diceResult = GetDiceRollResult();
  if (diceResult === 1) {
    i = i < players.length - 1 ? ++i : 0;
    currentPlayer = SwitchPlayer(currentPlayer, i, players);
    console.log('Value of i after switching players' + i);
  } else {
    console.log(currentPlayer.card);
    playerCurrentScore += diceResult;
    console.log(playerCurrentScore);
    currentPlayer.updateCurrentScore(playerCurrentScore);
  }
  document.querySelector('.dice').classList.remove('hidden');
});

holdBtn.addEventListener('click', () => {
  let totalScore = Number (currentPlayer.totalScore.textContent);
  totalScore += Number (currentPlayer.currentScore.textContent);
  currentPlayer.updateTotalScore(totalScore);
  currentPlayer.updateCurrentScore(0);
    i = i < players.length - 1 ? ++i : 0;
    currentPlayer = SwitchPlayer(currentPlayer, i, players);
});

newGameBtn.addEventListener('click', () => {
  location.reload();
})