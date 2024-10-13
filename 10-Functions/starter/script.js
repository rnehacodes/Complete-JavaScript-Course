'use strict';

//Function: Default Parameters
/* console.log('Function: Default Parameters'.padStart(30, '~').padEnd('32', '~'));

const bookings = [];

function createBooking (flightName, passengers = 40, seats = passengers * 1.5) {
    const booking = {
        flightName,
        passengers,
        seats
    };

    console.log(booking);
    bookings.push(booking);
}

createBooking('Airbus 320', 45, 65);
createBooking('Boeing 950');
console.log(...bookings); */

//Function: Arguments Passing - Value vs Reference
/*
console.log('Function: Arguments Passing - Value vs Reference'.padStart(35, '~').padEnd(37, '~'));

const passenger = {name : 'Neha Rajput', bookingID : 21051}, flight = 'ATR 72B';

const confirmedBookings = [{passengerName : 'Neha Rajput', PNR : 21051}];

function verifyBooking (flightName, passengerDetails) {
    flightName = flightName + ' will take off from Terminal 2!';
    if(confirmedBookings[0].PNR == passengerDetails.bookingID) {
        passengerDetails.bookingStatus = `Your booking with booking ID ${passengerDetails.bookingID} has been confirmed!`
    } else {
        passengerDetails.bookingStatus = `Your booking with booking ID ${passengerDetails.bookingID} has NOT been confirmed!`
    }
    console.log(`Dear ${passengerDetails.name},\n${passengerDetails.bookingStatus}`);
}

console.log(flight, passenger);
verifyBooking(flight, passenger);
console.log(flight, passenger);
*/

//Function Accepting Callback Function
/* console.log('Function Accepting Callback Function'.padStart(35, '~').padEnd(37, '~'));
const oneWord = function(str) {
    return str.replace(/ /g, ' ');
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher Order Function
function transformer(str, fun) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String using ${fun.name}: ${fun(str)}`);
}

const str = 'JavaScript is best!';
transformer(str, upperFirstWord); //upperFirstWord is an callback function here
transformer(str, oneWord); */

//Function Returning Function
/*
console.log('Function Returning Function'.padStart(35, '~').padEnd(37, '~'));
//Function Expression
// function greeting(str) {
//     return function greet(name) {
//         console.log(`${str} ${name}`);
//     }
// }

//Arrow Function
const greeting = (str) => {
    const greet = (name) => {
        console.log(`${str} ${name}`);
    }
    return greet;
}
greeting('Hii')('NEHA');

//Optimised Version
const greetArr = (str) => (name) => console.log(`${str} ${name}`);
greetArr('Hi(from arrow function)')('World');
*/

//Call and Apply Methods
/*
console.log('Call and Apply Methods'.padStart(30, '~').padEnd(35, '~'));
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LFTH',
  bookings: [],
  book(flightNum, name) {
    const booking = {
      passengerName: name,
      flight: `${this.iataCode}${flightNum}`,
    };
    this.bookings.push(booking);
    console.log(
      `${this.airline} airline alert 🔔: Booking confirmed for ${booking.passengerName} on flight ${booking.flight}`
    );
    console.log([this]);
  },
};

lufthansa.book(456, 'Neha Rajput');
lufthansa.book(999, 'John Doe');

const airIndia = {
    airline: 'Air India',
    iataCode: 'AI',
    bookings: []
}

const book = lufthansa.book;
can't do this as in this case book points to NO 'this' object
book(999, 'SFASDFSDF')

Book method called via call method of book function
book.call(airIndia, 927, 'Test Call Function');

//Apply method called via call method of book function
book.apply(airIndia, [274, 'Test Apply Function']);

book.call(airIndia, ...[306, 'Test Call Function via Apply method']);
*/

// //Bind method
/*
console.log('Bind Methods'.padStart(24, '~').padEnd(35, '~'));
// const indigo = {
//     airline: 'Indigo',
//     iataCode: '6E',
//     bookings: []
// }

// //Way 1
// const book6E = book.bind(indigo);
// book6E(1223, 'Rajput Family');

// // Way 2
// const book6E = book.bind(indigo, 876);
// book6E('Rajput Family');

const spiceJet = {
  airline: 'Indigo',
  iataCode: '6E',
  bookings: [],
};

spiceJet.planes = 0;
spiceJet.buyPlanes = function () {
  console.log('Before: ' + this.planes);
  this.planes++;
  console.log('After: ' + this.planes);
};

//This method would lead to NAN as when calling a function on an eventhandler, it points to the element on which it is attached and it called buyPlanes function on '.buy' button instead of spiceJet object
// document.querySelector('.buy'). addEventListener('click', spiceJet.buyPlanes)

//Correct Way
document
  .querySelector('.buy')
  .addEventListener('click', spiceJet.buyPlanes.bind(spiceJet));
*/

//Challenge #1
///////////////////////////////////////
// Coding Challenge #1
// console.log('Challenge #1'.padStart(24, '~').padEnd(35, '~'));
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // console.log('method called');
    let i = prompt(`What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)`);
    i = Number.parseInt(i);
    if (typeof i === 'number' && (i < 4 && i > -1)) {
      this.answers[i]++;
      this.displayResults(this.answers);
    } else {
      this.registerNewAnswer();
    }
},
  displayResults(type = 'array') {
    // console.log(...this.answers);
    if(type === 'array') {
        console.log(...this.answers);
    } else if(type === 'string') {
        console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  }
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

/*
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
/*
const test = [[5, 2, 3], [1, 5, 3, 9, 6, 1]];
// console.log(...test[0]);
poll.displayResults.call({answers: test[0]}, 'string');
poll.displayResults.call({answers: test[1]});
*/

//IIFE -> Immediately Invoked Function Expressions
/*
console.log('IIFE -> Immediately Invoked Function Expressions'.padStart(49+5, '~').padEnd(49+5+5, '~'));
(function() {
    console.log('This is an IIFE 1️⃣!');
})();

(() => console.log('This is an IIAF 1️⃣! (AF -> Arrow Function)'))();
*/

//Closures
/*
console.log('Closures'.padStart(8+15, '~').padEnd(8+15+15, '~'));
//Example #1
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
console.dir(booker);
for(let i = 0; i < 3; i++) booker();
console.dir(booker);

//Example #2
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

g(); f();
console.dir(f);

const h = function() {
    const a = 8;
    f = () => {
        console.log(a/4);
    }
}

h(); f();
console.dir(f);

//Example #3
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 people, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);
*/

//Challenge #2
console.log('Challenge #2'.padStart(12 + 15, '~').padEnd(12 + 15 + 15, '~'));
///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue'
  })
})();