// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyz = 'text';

// console.log('test live server 123');
// console.log(xyz);

//Sample problem
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5],
//   temperatures2 = [9, 0, 5, 50];
// var amplitude;

// var calcAmplitude = (temperatures1, temperatures2) => {
//   const temperatures = temperatures1.concat(temperatures2);
//   var min = Number.MAX_VALUE,
//     max = Number.MIN_VALUE;
//   for (let i = 0; i < temperatures.length; i++) {
//     if (typeof temperatures[i] == 'number') {
//       min = Math.min(min, temperatures[i]);
//       max = Math.max(max, temperatures[i]);
//     }
//   }
//   return max - min;
// };

// amplitude = calcAmplitude(temperatures1, temperatures2);

// console.log(
//   `The temperature amplitude for given array of temperatures is ${amplitude}.`
// );

// 1) Understanding the problem
/*
1. What is Temperature Amplitude? -> difference between the minimum and maximum temperature that occurred within a specific recording time period (e.g. last 24h)

2. How to calculate minimum & maximum number(int) values in JS? -> Number.MIN_VALUE & Number.MAX_VALUE

3. Finding a way to calculate the minium and maximum values amongst the array elements -> Using Math.min() & Math.max() functions while iterating through array elements.
 */

// 2) Breaking up into sub—problems
/*
1. Initializing min & max temperatures to with Number.MAX_VALUE & Number.MIN_VALUE respectively.

2. Iterating through the array and updating min & max values accordingly.

3. Printing the temperature amplitude i.e. difference between max & min.
 */

// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these
temperatures.

Example: [17, 21, 23] will print "...17°C in 1 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an
array 'arr' and logs a string like the above to the
console.

Use the problem-solving framework: Understand the
problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr) {
  var log = '... ';
  for (let i = 0; i < arr.length; i++) {
    const str = ` ${arr[i]}°C in ${i + 1} days ...`;
    console.log(str);
    log = log.concat(str);
  }
  console.log(log);
}

const arr1 = [17, 21, 23],
  arr2 = [12, 5, -5, 0, 4];
printForecast(arr1);
printForecast(arr2);
