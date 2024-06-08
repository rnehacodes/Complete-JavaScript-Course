'use strict';

// Strict Mode
let hasDriverLicense = false;
const testResult = true;

if (testResult == true) hasDriverLicense = true;
if(hasDriverLicense) console.log('Eligible to drive!');

Functions
function output(msg) {
    console.log(msg)
}

output("Test output function #1")
output("Test output function #2")
output("Test output function #3")

function sum(a, b) {
    console.log('Numbers are :', a, b);
    return a + b;
}

const sum1 = sum(2, 6);
console.log('Sum is', sum1);

function product(a, b) {
    console.log('Numbers are :', a, b);
    const product = `The product is ${a*b}`;
    return product;
}

let multiply = product(6, 10);
console.log(multiply)

///Function Declaration Vs Function Expression

//Function declaration
function sumTillN(n) {
    return (n * (n + 1)) / 2;
}

//Function expression
const square = function (n) {
    return n*n;
}

const a = 5;
console.log(sumTillN(a));

const b = square(4);
console.log(b);
console.log(square(b));

//Arrow Function
const diff = (a, b) => a-b;
const diff1 = diff(90, 7);
console.log(diff1);

const isOdd = a => {
    if(a % 2 != 0) {
        return 'Yes';
    } else {
        return 'false';
    }
}

let num = 902134;
console.log(isOdd(num))

//Calling a function within function
const add = (a, b) => {
    return(a + b);
}

const diff = (a, b) => {
    return(a - b);
}

const product = (a, b) => {
    return(a * b);
}

const division = (a, b) => {
    return(a / b);
}

const arithmetics = (a, b) => {
    console.log(`The numbers are ${a} & ${b} and the results of their arithmetic operations are: `)
    console.log('Sum is ' + add(a, b));
    console.log('Difference is ' + diff(a, b));
    console.log('Product is ' + product(a, b));
    console.log('Division is ' + division(a, b));
}

const operations = arithmetics(90, 10);