'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push(({ flight: `${this.iataCode}${flightNum}`, name }));
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
/*
Error. Because this is a regular function call, then the this will point to undefined
This is a separate function not like the one in lufthansa. It's a copy const book = lufthansa.book;
but it's function not a method. The this keyword depends on how the function is called

To fix this it's needed to tell JS explicitly what the this keyword should be like.
If you want to book a Lufthansa flight, the this keyword should point to it or a Eurowings
flight. There are three function methods to do that: call, apply, and bind. 
*/
// book(23, 'Sarah Williams'); // Error

/*
This time the book function was not called by me. Instead we called the call method which
called the book function, with the this keyword set to eurowings.
This allow to manually and explicitly set the this keyword of any function that i want to call.
The arguments after the first one are the arguments of the original function.
*/
// Call method
book.call(eurowings, 23, 'Sarah Williamns'); // this points to eurowings
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper'); // this points to lufthansa
console.log(lufthansa);

// The properties names need to have the exact same format as the original object because 
// the method book is trying to read the properties iataCode,booking and airline
const swiss = {
    airline: 'Swiss Air lines',
    iataCode: 'LX',
    bookings: [],
}
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
/*
Does exactly the same thing. Th only difference is that apply does not receive a list 
of arguments, but instead it will take an array of the arguments.
*/
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

/*
Apply is not that used anymore in modern JS, because there is a better way of doing
the exact same thing
*/
book.call(swiss, ...flightData);
console.log(swiss);