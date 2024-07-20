'use strict';

//Read the text content of a DOM element
console.log(document.querySelector('.message').textContent);

//Modify the text content of a DOM element
document.querySelector('.message').textContent = "🥳Correct Number!🎉";

console.log(document.querySelector(".message").textContent);