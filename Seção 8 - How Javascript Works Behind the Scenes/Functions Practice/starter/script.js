'use strict'
/*
// Part 1
// You might think this block creates it own scope but it doesn't. It's not a code block
// it's a object literal. So all of this is in the global scope still.

// When you declare variables with var, that creates properties on the global object
//var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
    // The parent scope of the greet method is the global scope
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },
};
jonas.greet();

// When you try to access a property that doesn't exist, it does not throw an error
// but undefined.
//console.log(this.firstName);
*/

// Part 2
const jonas2 = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        //console.log(this);
        console.log(2037 - this.year);

        /*
        const isMillenial = function() {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        // Its a rule, inside a regular function call, the this keyword must be undefined
        // If the method was out of the object it would produce the same result
        isMillenial(); */

        /*
        // First solution - old
        // To fix the problem with the regular function use a variable outside
        // where you can have access to the this keyword set to Jonas
        const self = this; // self or that
        const isMillenial2 = function() {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        isMillenial2();*/

        // Second solution - More modern, using arrow functions
        // Since arrow functions don't have this they use the this from the
        // parent scope, in this case the calcAge method which has this as Jonas
        // An arrow function inherits the this keyword from the parent
        const isMillenial2 = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial2();

    },
    // changing to a regular function fixed the this problem
    greet: function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },
};
jonas2.greet();
jonas2.calcAge();


// Arguments keyword
const addExpr = function(a,b) {
    console.log(arguments);
    return a + b
}
addExpr(2,5);
addExpr(2,5,8,12);

// Does not have arguments keyword
var addArrow = (a,b) => {
    console.log(arguments);
    return a + b;
}
addArrow(2,5,8);




