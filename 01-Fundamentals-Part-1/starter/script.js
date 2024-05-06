//Introduction

console.log('Hello World');
let js = "javascript";
if (js == "javascript") alert("JavaScript is Cool");

n = 40 + 8 + 2;
console.log(n);

console.log('jonas');

let firstName = 'Bob';
console.log(firstName);

let country = 'India';
let continent = 'Asia';
let population = '141.72 crores';

console.log(country);
console.log(continent);
console.log(population);


//Values & Variables

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = false;
console.log(javascriptIsFun);

javascriptIsFun = 'Yes';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

console.log(typeof null);


//let vs const vs var
let letVariable;
letVariable = 'This variable did not have a value at the time of initialization, but now it HAS!!!';
console.log(letVariable);

letVariable = true;
console.log(letVariable);

letVariable = 56789;
console.log(letVariable);
console.log(typeof letVariable);

const PI = 3.14;
console.log(PI);
console.log(typeof PI);

//Operators
//Assignment & Basic Arithmetic Operators
let sum = 3 + 5;
let product = 90 * 30;
let exponentiation = 4 ** 4;

console.log('Sum: ' + sum + ', Product: ' + product + ', Exponentiation: ' + exponentiation);

//Comparison Operators
let x = 10, y = 'abc', z = 30;
console.log(x < z);
x += 40;
console.log(x < z);
