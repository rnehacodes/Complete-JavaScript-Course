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
const holdBtn = document.querySelector('.btn btn--hold');

function SwitchPlayer(currentPlayer, i, players) {
  currentPlayer.card.classList.remove('player--active');
  console.log(i, currentPlayer, currentPlayer.card);
  currentPlayer = players[i];
  currentPlayer.card.classList.add('player--active');
  console.log(i, currentPlayer, currentPlayer.card);
  return currentPlayer;
}

//Dice Roll Function to display dice number randomly
function GetDiceRollResult() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log('Dice roll result: ' + num);
  switch (num) {
    case 1:
      dice.src = './dice-1.png';
      break;
    case 2:
      dice.src = './dice-2.png';
      break;
    case 3:
      dice.src = './dice-3.png';
      break;
    case 4:
      dice.src = './dice-4.png';
      break;
    case 5:
      dice.src = './dice-5.png';
      break;
    case 6:
      dice.src = './dice-6.png';
      break;
  }
  return num;
}

// function

rollDiceBtn.addEventListener('click', () => {
  let diceResult = GetDiceRollResult();
  if (diceResult == 1) {
    console.log('Dice rolled to 1. Player changed');
    console.log('Value of i before switching players' + i);
    i = i < players.length - 1 ? ++i : 0;
    currentPlayer = SwitchPlayer(currentPlayer, i, players);
    console.log('Value of i after switching players' + i);
    playerCurrentScore = 0;
  } else {
    console.log(currentPlayer.card);
    playerCurrentScore += diceResult;
    console.log(playerCurrentScore);
    currentPlayer.updateCurrentScore(playerCurrentScore);
  }
});

holdBtn.addEventListener('click', () => {
  let diceResult = GetDiceRollResult();
  if (diceResult == 1) {
    console.log('Dice rolled to 1. Player changed');
    console.log('Value of i before switching players' + i);
    i = i < players.length - 1 ? ++i : 0;
    currentPlayer = SwitchPlayer(currentPlayer, i, players);
    console.log('Value of i after switching players' + i);
    playerCurrentScore = 0;
  } else {
    console.log(currentPlayer.card);
    playerCurrentScore += diceResult;
    console.log(playerCurrentScore);
    currentPlayer.updateCurrentScore(playerCurrentScore);
  }
});
