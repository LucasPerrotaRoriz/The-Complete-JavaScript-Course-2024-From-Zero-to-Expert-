'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

/*
x is the distance between the left border and the element, y is the distance between the
top and the element.
When you scroll down the value of y is changed. getBoundingClient() is relative to the
visible viewport.
*/
btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth);

    // Scrolling
    /*
    Will work only when at the top of the page. That happens because the top value is
    relative to the viewport, but not to the document.
    To solve this problem just add the current scroll position to the top value. This way it
    will determine the position of the section not relative to the viewport but instead to
    the top of the page.
    */
    // window.scrollTo(s1coords.left, s1coords.top);

    /* Fix
    window.scrollTo(
      s1coords.left + window.pageXOffset,
      s1coords.top + window.pageYOffset
    ); */

    /* To make the animation smooth - Old way
    window.scrollTo({
      left: s1coords.left + window.pageXOffset,
      top: s1coords.top + window.pageYOffset,
      behavior: 'smooth',
    }); */

    // New way - only works in modern browsers
    section1.scrollIntoView({behavior: 'smooth'});
});







