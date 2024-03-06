'use strict';

/*
Classes are just special types of functions.

It needs to be called constructor.

The constructor is a method of the class, it works similarly to a construction function.
To create a new object is also similar.

The 'this' keyword will also be set to the newly created empty object.

All of the methods written on the class outside of the constructor will be on the prototype
of the object and not on the object themselves.

PersonCl acts like any other constructor function, the only difference that it looks better.

Constructor functions are not old deprecated syntax so is fine to keep using them.
*/

// class expression
/*
const PersonCl = class {

} */


// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property.
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica)
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

/*
PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
}*/
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first class citizens. It means they can be passed into functions and
// also return them from functions.
// 3. The body of a class is always executed in strict mode
