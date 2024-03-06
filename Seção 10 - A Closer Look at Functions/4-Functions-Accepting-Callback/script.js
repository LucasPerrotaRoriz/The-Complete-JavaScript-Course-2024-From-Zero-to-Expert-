'use strict';

/*
JS callbacks are used a lot and that's because it allows the code to be split up into
more reusable and interconnected parts. 

Callback functions allow the creation of abstractions. Abstraction means that the details of the code are 
hidden, because they are not important. This allow programmers to think about problems at a higher more 
abstract level.

For example the transformer function does not care for the details of the functions it receives.
The functions oneWord,upperFirstWord could have been written in transformer but instead 
they were abstracted into other functions.

Callback functions are a vital part of JS.
*/

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');
}

// this is a higher order function, it takes a function as a argument
const transformer = function(str, fn) { 
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}
// Passing the value not calling the function - upperFirstWord
// transformer is the one calling the function
transformer('Javascript is the best', upperFirstWord); 

transformer('Javascript is the best', oneWord); 

// Js uses callbacks all the time
const high5 = function() {
    console.log('High Five');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);