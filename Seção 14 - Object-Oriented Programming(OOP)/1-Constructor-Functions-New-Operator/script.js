'use strict';

/*
Use constructor functions to build an object using a function. A constructor function is a
normal function, the only difference is that a constructor function is called with the new
operator.

An arrow functions will not work as a constructor function, because it does not have it's own
this keyword. Only function declarations and function expressions work.

The new operator is a special operator, it calls the Person function but more than that.
Behind the scenes happens 4 steps:
1 -  A new {} empty object is created
2 - The function is called and the this keyword will be set to this newly created object. this = {}
3 - {} linked to a prototype
4 - The object that was created in the beginning is automatically returned from the constructor
function.

Function constructors are not features of JS, they are simply a pattern that has been developed
by other developers.
*/

const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    /*Bad practice. Never create a method inside a constructor function. Imagine there
    thousands of Person objects using this constructor function. Then each object would
    have this function, there would be thousands of copies of this function. To solve
    this problem there is prototype and prototype inheritance.
    */
    this.calcAge = function() {
        console.log(2037 - this.birthYear);
    }
}

const jonas = new Person('Jonas', 1991); // Instance of Person
console.log(jonas);

const matilda = new Person('Matilda', 1917);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);


