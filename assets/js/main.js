'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Open menu
const openBtnModal = $('.menu__btn');
const closeBtnModal = $('.modal__close');
const modal = $('.modal__nav');

function openModal() {
  modal.classList.add('open-modal');
}

function closeModal() {
  modal.classList.remove('open-modal');
}

openBtnModal.addEventListener('click', openModal);
closeBtnModal.addEventListener('click', closeModal);

// Change background-color
const icon = $('#icon');

document.getElementById('btn-color').onclick = function () {
  const bannerInput = $('.search__input');
  const about = $('#about');
  const categories = $('#categories');
  const menu = $('#menu');
  const count = $('#count');
  const countItem = $$('.count__item');
  const media = $('#media');
  const blog = $('#blog');
  const testimonial = $('#testimonial');
  const testCaption = $$('.carousel-caption');

  bannerInput.classList.toggle('dark-mode');
  about.classList.toggle('dark-mode');
  categories.classList.toggle('dark-mode');
  menu.classList.toggle('dark-mode');
  count.classList.toggle('dark-mode');
  media.classList.toggle('dark-mode');
  blog.classList.toggle('dark-mode');
  testimonial.classList.toggle('dark-mode');

  for (let i = 0; i < countItem.length; i++) {
    let item = countItem[i];
    item.classList.toggle('dark-mode');
  };

  for (let i = 0; i < testCaption.length; i++) {
    let test = testCaption[i];
    test.classList.toggle('dark-mode');
  };

}

const countItem = $$('.count__item');

function changeIcon() {
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

icon.addEventListener('click', changeIcon);

// Back to top
const backTop = document.getElementById('btn-top');

window.onscroll = function () {
  scrollTop();
};

function scrollTop() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backTop.style.display = 'block';
  } else {
    backTop.style.display = 'none';
  }
}

function btnToTop() {
  document.documentElement.scrollTop = 0;
}

backTop.addEventListener('click', btnToTop);