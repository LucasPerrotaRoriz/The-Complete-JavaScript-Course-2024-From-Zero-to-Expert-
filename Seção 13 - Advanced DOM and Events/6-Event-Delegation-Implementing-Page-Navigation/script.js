'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

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
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////////////
// Page navigation

/*
In event delegation is used the fact that events bubble up. This is done by putting a event listener
on a common parent of all the element. In this case is the nav__links element.
*/

// returns NodeList
/*
document.querySelectorAll('.nav__link').forEach(function(el) {

  This function is attached to the 3 elements and that's unnecessary
  This would be fine for 3 elements but imagine it had more elements like 100, there would
  be 100 copies of the function and that would impact performance. The best solution is
  to use events delegation.

  el.addEventListener('click', function(e) {
    e.preventDefault(); // prevents scroll
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
}); */

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

/*
Event delegation is a lot better and a lot more efficient than simply attaching the same
event handler to multiple elements. Instead it was created one big event handler function to
the parent element of all the elements. Then simply determined were the click event came from.

The matching strategy was needed to ignore clicks that did not happen on the links.

There is one more important use case of event delegation which is when we are working with elements
that are not yet on the page on runtime, so by the time the page loads. A example are buttons that
are added dynamically while using the application. It's not possible to add event handlers on elements
that do not exist, but that can be done with event delegation.
*/

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});



