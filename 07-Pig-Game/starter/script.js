'use strict';

const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');

var currentScore1 = 0;

function GetDiceRollResult() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
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

rollDiceBtn.addEventListener('click', () => {
    let diceResult = GetDiceRollResult();
    if(diceResult == 1) {
        console.log('Dice rolled to 1');
    } else {
        currentScore1 += diceResult;
    }
});
