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
console.log('Function Returning Function'.padStart(35, '~').padEnd(37, '~'));
function greeting(str) {
    return function greet(name) {
        console.log(`${str} ${name}`);
    }
}
const myGreet  = greeting('Hii')('NEHA');

