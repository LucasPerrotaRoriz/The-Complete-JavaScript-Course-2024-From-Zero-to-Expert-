'use strict';

/*
IIFE is when you need a function to execute once and never again.
*/

const runOnce = function() {
    console.log('This will never run again');
}
runOnce(); // nothing stops this function to be executed again

// Error. Wrap with () so that JS thinks this is a expression 
// This is a IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

/*
All data defined inside a scope is private. You can also say the data is encapsulated.
let and const also create a scope inside a block
*/

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

/* 
IIFE are not that used anymore, because if all you want is to create a new scope
for data privacy all you need to do is create a block like the above.

On the other hand if you only need to execute a function once than an IIFE is still 
the way to go.
*/