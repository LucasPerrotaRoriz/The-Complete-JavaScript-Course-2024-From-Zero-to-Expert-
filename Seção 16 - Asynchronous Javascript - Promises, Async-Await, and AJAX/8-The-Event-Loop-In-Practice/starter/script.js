'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
The timer and promise will finish at the same time 0 seconds. The timer because 0 was passed and the 
promise because it was resolved immediately.
*/

console.log('Test start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);
// resolve() allows you to build a promise that immediately resolves, so has a success value and the
// value is the one passed.
Promise.resolve('Resolved promise 1').then(res => console.log(res));

// The promise resolves immediately, but the microtask takes a long time to finish. This is a 
// test to block the callback from timer from executing.
Promise.resolve('Resolved promise 2').then(res => {
    for(let i = 0; i < 10000000000; i++) {}
    console.log(res)
});

console.log('Test end');



