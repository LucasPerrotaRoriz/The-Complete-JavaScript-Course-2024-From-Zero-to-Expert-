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

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

/*
In a event handler the this keyword points to the element on which the event handler is
attached.

e.target in the link will show that the target in all 3 will be the same. It appears in all
of them because all of them are essentially handling the exact same event.

e.currentTarget is the element in which the event handler is attached.

Now about the capture phase, events are captured when they come down form the document root
all the way to the target, but the event handlers are not picking up these events
during the capture phase. addEventListener is only listening to events in the bubbling
phase but no in the capturing phase. That is the default behavior of the addEventListener method.
The reason for that is that the capturing phase is usually irrelevant, it's not that
useful. Now the bubbling phase can be very useful for something called event delegation.

To capture events in the capturing phase, You have to define a third parameter in the
addEventListener function.

*/
document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  /*
  Stop propagation - It's not a good idea to stop propagation. Stopping the event propagation
  like this can sometimes fix problems in very complex applications with many handlers
  for the same events. But in general is not a good idea.
  */
  // e.stopPropagation();
});

/*
When clicking the link the container will also get a random background color.
The event is happening at the document root and from there it then travels down
to the target element, in this case the link. From there it bubbles up, is a if the event
had also happened in all of the parent elements
*/
document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
}, true); // will not listen to bubbling events but capture events. The default is false.
/*
The navigation will shown now as the first element, because this element is now
listening for the event as it travels down from the DOM, while the others listen
for the event as it travels back up.
*/





