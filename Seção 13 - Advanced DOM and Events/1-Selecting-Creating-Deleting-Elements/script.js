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
/*
document.documentElement can select the entire document. Just document is not enough to select
the document element because this is not the real DOM element. This can be used to apply CSS
styles to the entire page.

getElementsByTagName('tag') returns a HTMLCollection which can also be called a live collection. This means
that if the DOM changes then this collection is also immediately updated automatically.
The same does not happen to a NodeList. That happens because the variable was created by the
time the section existed.

getElementsByClassName('class') also returns a live collection.

prepend(element) adds the element as the first child of the element.
append(element) adds the element as the last child of the element.
The element must be only at one place so prepend or append will overwrite the position.
That happens because DOM elements are unique, so it can only exist at one place at a time.

To insert both prepend and append use closeNode.

before(element) will insert before element.
after(element) will insert after element.

remove() removes an element.
removeChild(element) removes the child element and returns it.

Moving up and down the DOM tree selecting the parent element is called DOM traversing.
*/

// ----- Selecting elements -----
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
console.log('----------')

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log('----------')
console.log(document.getElementsByClassName('btn'));

// ----- Creating and inserting elements -----
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// ----- Delete elements -----
document.querySelector('.btn--close-cookie');
addEventListener('click', function() {
  // message.remove();
  message.parentElement.removeChild(message);
});