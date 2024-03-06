'use strict';

/*
Javascript treats functions as first class citizens and they are treated as values.
Functions are just another type of objects and since objects are values functions are
values too.
Since functions are variables that are alo of things that can be done with them like:

- Store functions in variables or properties
Ex: 
const add = (a, b) => a + b;

const counter = {
    value: 23,
    inc: function() {this.values++};
}

- Pass functions as arguments to other functions
Ex:
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);

- Return functions from functions

- Call methods on functions
counter.inc.bind(someOtherObject);

A higher order function is a function that receives another function as an argument, that returns
a new function, or both. This is only possible because of first-class functions

- Functions that receive another function
Ex: 
AddEventListener is the higher order function, because it receives another function as
input, in this case greet. The function that is passed in (greet) is a callback function. 
That's because the callback function will be called later by the higher order function.

const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);

- Functions that returns another function
Ex:
function count() { // count is the higher order function
    let counter = 8;
    return function(){ // returned function
        counter++;
    };
}

First class functions is a feature that a language has or don't have, all it means is that
functions are values. There is no first-class functions in practice, it's a concept.
There are however higher order functions in practice, that are possible because the 
language supports first-class functions.
*/


