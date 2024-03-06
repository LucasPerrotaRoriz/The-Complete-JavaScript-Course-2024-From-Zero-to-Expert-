'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
The Promise constructor takes one argument that's called the executor function. When the promise runs it,
will automatically run the executor function and when executing the function it will pass two arguments.
The arguments are the 'resolve' and 'reject' functions.

The executor function is the one that will have the async behavior that is handled by the promise. Then the 
function will result in a resolved value, a future value.

Most of the time you consume promises. Promises are built to wrap old callback based functions into promises,
this is called promisifying 
*/

/*
Recap
An executor function was created which will be called by the Promise constructor immediately. Promise calls 
the function and passes the resolve and reject functions, to mark the function as resolved or rejected.
*/
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('-- Lottery draw is happening -- ');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN!'); // a fulfilled promise, with the resolved value.
    } else {
      reject(new Error('You lost your money!')); //
    }
  }, 4000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

/* 
Promisifying  the setTimeout. 
Creating a function and then returning the promise. By doing this the async behavior get encapsulated. 
*/
const wait = function (seconds) {
  // In this case reject can be ignored because it's impossible to the timer to fail.
  return new Promise(function (resolve) {
    // It's not mandatory to pass a value to the 'resolve' function
    setTimeout(resolve, seconds * 1000);
  });
};

const waitArrow = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

// Consuming the promise. The promise will wait 2 seconds then resolve. No resolved value was passed.
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

// Create a fulfilled or rejected promise immediately
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
