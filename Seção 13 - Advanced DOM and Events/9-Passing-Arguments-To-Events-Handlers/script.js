'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

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

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause.
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////////////////////////
// Menu fade animation
const handleHover = function(e) { // function(e, opacity)
  /*By default this === currentTarget, so the element in which the event listener is attached
  to but when this is set manually, it becomes what was set.*/
  //console.log(this, e.currentTarget);

  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    // The 'this' keyword is now opacity
    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

/*
The bind method creates a copy of the function is called on and it will set the 'this' keyword
in this function call to whatever value that is passed into bind.

bind returns a new function.
*/

// Passing 'argument' into handler
/*The quotes are because this is not really an argument. It is impossible to pass another
argument into an event handler function.

Any event handler function like this one can only have one real argument, one real parameter
and that is the event. If you want to pass additional values then use the 'this' keyword.*/
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/* Can't do this. It will throw an error because e is not defined. The main problem
here is that addEventListener here expects a function, but if the function is called
'e' and '0.5' will become some other value. In this case undefined because there is no
return in this function.*/
// nav.addEventListener('mouseover', handleHover(e, 0.5));

// There is a better way of doing this using the bind method
/*
nav.addEventListener('mouseover', function(e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function(e) {
  handleHover(e, 1);
});*/


/* This code is repetitive, need to apply the DRY principle.
mouseover is similar to mouseenter, the difference is that mouseenter does not bubble.
The opposite if mouseenter is mouseleave and the opposite of mouseover is mouseout.

nav.addEventListener('mouseover', function (e) {
  //closest was not used because there are not children elements that can be
  // clicked accidentally.
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // Selecting all the other links. Instead of moving up manually, simply search
    // for a parent which matches a certain query. This ways is more robust because even if
    // the HTML structure was changed the JS would keep working.
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});*/
