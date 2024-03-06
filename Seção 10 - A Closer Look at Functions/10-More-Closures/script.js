'use strict';

/*
The f function close over any variables of the execution context in which it was defined.
That is true even when the variable itself, in this case f, was technically not even defined 
inside of the variable environment.

The f variable was created in the global scope, then as it was assigned a function in
the g function and it still close over the variable environment of the g function.
Therefore it is able to access the A variable, even after the g function has already
finished its execution.
*/

// Example 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}
const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
// The closure will have the value of B, and no longer has A.
console.dir(f); 


// Example 2
/*
The only way in which the callback function setTimeout, can have access to the variables
that are defined in the boardPassengers function, that has long finished execution
is if it created a closure.

A closure also includes the arguments, because they are local variables in the function.

A closure has priority over the scope chain.
*/
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

// If it wasn't for the closure it would use this. If the first value is removed
// it will use this value.
const perGroup = 1000;
boardPassengers(180, 3);
console.dir();