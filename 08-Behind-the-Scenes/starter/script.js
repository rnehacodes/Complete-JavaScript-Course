'use strict';

//Scoping
let output = 'test';
console.log(output);

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  console.log(output);

  output = 'updated';

  console.log(output);
}

const firstName = 'Jonas';
calcAge(1991);
console.log(output);


//Hoisting

//Variable Hoisting
console.log(thing);
console.log(color);
console.log(category);

var thing = 'Apple';
let color = 'red';
const category = 'fruit';

//Functions Hoisting
console.log(addNums(4, 5));
console.log(addVals(4, 5));
console.log(addArrow(4, 5));

function addNums(a, b) {
  return a + b;
}

var addVals = function(a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

//this keyword
console.log(this);

//Normal Function
const sumNums = function(a, b) {
    console.log(a + b);
    console.log(this);
}

sumNums(4, 6);

//Arrow Function
const diffNums = (x, y) => {
    console.log(x - y);
    console.log(this);
}

diffNums(6, 8);

const employee = {
    employeeName : 'Anna',
    ID : 45,
    getID : function () {
        console.log("ID: " + this.ID);
        console.log(this);
    },
    getName : function() {
        console.log("Name: " + this.employeeName);
    }
}

employee.getID();

const client = {
    clientName : "Ditto",
    ID : 77
} 

console.log(client);

client.getID = employee.getID;

client.getID();

//Arguments Keyword
var printFunction = (x) => {
    console.log(arguments);
    "Text given -> " + x;
}

printFunction("test123");

console.log(this);
console.log(this.year);

var gender = 'Male';

const employee = {
    firstName: "Alex",
    age: 20,
    getGender: function() {
        console.log(this.gender);
    }
}
console.log(employee);
console.log(employee.firstName);
console.log(employee.gender);
console.log(employee.getGender);

//Primitives Vs Reference Values
let oldAge = 29;
let currentAge = oldAge + 1;
oldAge = 35;
console.log(oldAge, currentAge);


let order1 = {
    id: 12345,
    month: "Jan"
}

let order2 = order1;

order2.id = 54321;

console.log(order1, order2);