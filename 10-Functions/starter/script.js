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
// console.log('Call and Apply Methods'.padStart(30, '~').padEnd(35, '~'));
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LFTH',
    bookings: [],
    book(flightNum, name) {
        const booking = {passengerName: name, flight: `${this.iataCode}${flightNum}`};
        this.bookings.push(booking);
        console.log(`${this.airline} airline alert 🔔: Booking confirmed for ${booking.passengerName} on flight ${booking.flight}`);
        console.log([this]);
    }
}

// lufthansa.book(456, 'Neha Rajput');
// lufthansa.book(999, 'John Doe');

// const airIndia = {
//     airline: 'Air India',
//     iataCode: 'AI',
//     bookings: []
// }

const book = lufthansa.book;
//can't do this as in this case book points to NO 'this' object
// book(999, 'SFASDFSDF')

//Book method called via call method of book function
// book.call(airIndia, 927, 'Test Call Function');

// //Apply method called via call method of book function
// book.apply(airIndia, [274, 'Test Apply Function']);

// book.call(airIndia, ...[306, 'Test Call Function via Apply method']);

// //Bind method
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
    bookings: []
}

spiceJet.planes = 0;
spiceJet.buyPlanes = function() {
    console.log('Before: ' + this.planes);
    this.planes++;
    console.log('After: ' + this.planes);
}

//This method would lead to NAN as when calling a function on an eventhandler, it points to the element on which it is attached and it called buyPlanes function on '.buy' button instead of spiceJet object
// document.querySelector('.buy'). addEventListener('click', spiceJet.buyPlanes)

//Correct Way
document.querySelector('.buy'). addEventListener('click', spiceJet.buyPlanes.bind(spiceJet));
