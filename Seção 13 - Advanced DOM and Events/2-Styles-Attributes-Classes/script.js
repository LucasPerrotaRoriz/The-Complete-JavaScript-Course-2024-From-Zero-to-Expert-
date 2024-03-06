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

// ----- Creating and inserting elements -----
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

// ----- Delete elements -----
document.querySelector('.btn--close-cookie');
addEventListener('click', function () {
  message.parentElement.removeChild(message);
});

/*
These styles are set as inline styles, so they are set directly in the DOM.

You cannot read styles that are hidden inside a class using the style property. Using the
style property like this here only works for inline styles that were set by yourself using
the style property.

To get the styles of a element that is inside the css file use the function
getComputedStyle(element).

CSS custom properties also called CSS variables are defined in the document root. In JS that is the
equivalent to the document element.
To change CSS variables use setProperty('element', 'value')
*/

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); // the result of this is a string
console.log(getComputedStyle(message).height);

// message.style.height = getComputedStyle(message).height + 40 + 'px'; // here is trying to add a number to a string
// To work use Number.parseFloat
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// To change css custom property
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
/*
If this properties are specified in HTML then JS will automatically create these
properties on the object
*/
console.log(logo.alt);
console.log(logo.src); // returns absolute URL
console.log(logo.getAttribute('src')); // returns relative URL
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';

console.log('----------');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

console.log('----------');

/*
But if you have property that is not standard then JS will not automatically create a
property on the object
*/
// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer')); // now it will return
logo.setAttribute('company', 'Bankist');


// Data Attributes -
/*
The name must start with data in HTML. And here must be Camel Cased.
They are always stored in the dataset object.

Data attributes are used quite a lot when working with the UI, especially when there's the need
to store data in the user interface, basically in the HTML code.
*/
console.log(logo.dataset.versionNumber);


// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes s

// Don't use. Will overwrite all the existent classes
logo.className = 'Jonas';


