'use strict';

function printTopic(topic, max = 50) {
  if (topic.length <= 50) {
    const x = '~'.repeat((50 - topic.length) / 2);
    topic = x + topic + x;
  }
  console.log(topic);
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Simple Array Methods
// console.log('~~~~Simple Array Methods~~~~');

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
/*
console.log('Original array arr[] = ' + arr);
console.log('Sliced array with arr.slice(4) - ' + arr.slice(4));
console.log('Sliced array with arr.slice(3, 6) - ' + arr.slice(3, 6));
console.log('Extracting arr elements from behind using arr.slice(-2) - ' + arr.slice(-2));
console.log('Extracting arr elements from behind using arr.slice(-2) - ' + arr.slice(3, -2));
console.log('arr.slice() - ' + arr.slice());


console.log('arr.splice() - ' + arr.splice(4));
console.log('arr after splice() - ' + arr); //arr got mutated

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let arr2 = ['z', 'y', 'x', 'w', 'v', 'u', 't'];
console.log('arr2 - ' + arr2);
console.log('arr2.reverse() - ' + arr2.reverse());
console.log('arr2 after arr2.reverse() - ' + arr2); //arr2 got mutated

console.log('arr.concat(arr2) - ' + arr.concat(arr2));
console.log('arr after concat() - ' + arr); //Didn't mutate
console.log('arr2 after concat() - ' + arr2);

console.log(arr.join(' ~ ') + ' ~ ' + arr2.join(' ~ '));
*/

//The NEW method
/*
console.log('~~~~NEW Methods~~~~');
console.log('arr[0] method -> ' + arr[0]);
console.log('arr.at(0) method -> ' + arr.at(0));

//Getting last element of the array
console.log('arr[arr.length-1] method -> ' + arr[arr.length-1]);
console.log('arr.slice(-1)[0] method -> ' + arr.slice(-1)[0]);
console.log('arr.at(-1) method -> ' + arr.at(-1));
*/

//For-each method [Arrays]
//Comparing for-of with for-each
printTopic('For-each method [Arrays]');
console.log('--------For-of loop--------');
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//For-each method [Arrays]
console.log('--------For-each loop--------');
movements.forEach(function(movement, i, ) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
})

//For-each method [Maps & Sets]
printTopic('For-each method [Maps & Sets]');
currencies.forEach(function(value, key, currencies) {
  console.log(`Country: ${value} -> Currency: ${key}`);
});

const countries = new Set(currencies.keys());
countries.forEach(function(val, _val, countries) {
  console.log(`Country : ${val} (${_val})`);
})

//Creating DOM Elements
printTopic('Creating DOM Elements');
