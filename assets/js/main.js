'use strict';

const openBtnModal = document.querySelector('.menu__btn');
const closeBtnModal = document.querySelector('.modal__close');
const modal = document.querySelector('.modal__nav');

function openModal() {
  modal.classList.add('open-modal');
}

function closeModal() {
  modal.classList.remove('open-modal');
}

openBtnModal.addEventListener('click', openModal);
closeBtnModal.addEventListener('click', closeModal);