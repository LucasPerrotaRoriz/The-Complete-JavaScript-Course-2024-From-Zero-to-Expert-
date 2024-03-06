'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method
book.call(eurowings, 23, 'Sarah Williamns');

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);
console.log('---------------------------------------------');

// Bind method
/*
Bind also allows to manually set the this keyword to any function call. The difference
is that bind does not immediately call the function, instead it returns a new function
where the this keyword is bound.
*/
// book.call(eurowings, 23, 'Sarah Williamns');

// Won't call book but will return a new function where the this keyword will always
// be set to eurowings
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams'); // Has already the this keyword set
//bookLH(239, 'Jonas Schedtmann');
//bookLX(583, 'Mary Cooper');

/*
In the call method we can pass multiple arguments besides THIS, in the bind method
the same can be done. All of the arguments will also be basically set in stone,
they will be defined and the function will then always be called with the same arguments

In this case it needs the flight number and the name like the book function. In the 
bookEW23 function when 23 is defined is as if the first argument was already set, now the
function(bookEW23) only needs the name.

When you specif parts of the argument beforehand is called partial application. It means
a part of the arguments of the original function are already applied.
*/
const bookEW23 = book.bind(eurowings, 23);
//const bookEW23 = book.bind(eurowings, 12345);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// This function will always book a flight for Jonas on flight 23
// const bookEW23v2 = book.bind(eurowings, 23, 'Jonas');
// bookEW23v2();

/* 
It will return not a number because the this keyword is the button element. That happens
because the this keyword always points to the element on which the handler is attached to.
*/
// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
/*
The handler function is attached to this element, therefore inside the handler function
or the event listener, the THIS keyword inside buyPlane, THIS will point to the button.
*/
// We need to pass a function not to call it. call method calls the function
// so in this case use bind that will return a new function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));



// Partial application
const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1, 200));

// Presets the rate, this function will be used to only calculate VAT
const addVAT = addTax.bind(null, 0.23); // THIS is not used in the function so pass null
// addTax = value => value + value * 0.23 // what the addVAT function looks like

console.log(addVAT(100));
console.log(addVAT(23));
/*
You might think that this could have been done with default parameters, but this is different.
bind is creating a simply new and more specific function based on a general function which 
is the addTax, using binds gives us a new function.
*/

const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));