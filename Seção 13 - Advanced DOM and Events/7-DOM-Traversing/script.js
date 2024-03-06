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

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

/*
DOM traversing is walking through the DOM, which means that we can select an element based on
another element.
*/

const h1 = document.querySelector('h1');

// Going downwards: child
/*
These are direct children of h1, but it would go down as deep as necessary into the DOM tree.
If there were other elements on the page with the same .highligh they would not get selected,
because they would not be children of the h1 element.
*/
console.log(h1.querySelectorAll('.highlight'));

// Sometimes you only need the direct children
/*
Nodes can be anything text, element or even comments. It gives every single node of
every single type.
*/
console.log(h1.childNodes); // not that used

/*
This returns a HTMLCollection which is a live collection.
*/
console.log(h1.children);

// First and last child
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';



// Going upwards: parents

// Direct parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// Goes upward to find element
/*
closest is the opposite of querySelector. querySelector receives a string and finds
children no matter how deep in the DOM tree while the closest method finds the parents
no matter how far up in the DOM tree.
*/
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';



// Going sideways: siblings
// In JS you can only access direct siblings, the previous and the next.
// Most used
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

/*
If you really need all the siblings and not just the previous and the next one, then use
the trick of moving up to the parent element and then read all the children.
*/
// console.log(h1.parentElement.children); // Gets all the siblings. Includes itself.

// HTMLCollection is an iterable so can be spread into an array.
// Change the style of siblings except the element itself.
[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
});