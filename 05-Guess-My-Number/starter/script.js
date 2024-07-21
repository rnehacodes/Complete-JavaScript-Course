'use strict';

// //Read the text content of a DOM element
// console.log(document.querySelector('.message').textContent);

// //Modify the text content of a DOM element
// document.querySelector('.message').textContent = "🥳Correct Number!🎉";

// document.querySelector('.number').textContent = '23';
// document.querySelector('.score').textContent = '73';

// console.log(document.querySelector('.guess').nodeValue);

document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(guess);
})