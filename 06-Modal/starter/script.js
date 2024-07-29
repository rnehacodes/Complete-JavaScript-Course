'use strict';

//Page Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

//Close Modal function
const closeModal = function () {
  console.log("Modal's close button clicked");
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Open Modal function
const openModal = function (btn) {
  console.log(btn.textContent + ' Button Clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Collecting Show Modal buttons
for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', function () {
    openModal(openModalBtns[i]);
  });
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);