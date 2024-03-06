'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    /*
    this.calcAge = function() {
        console.log(2037 - this.birthYear);
    } */
}

const jonas = new Person('Jonas', '1991');
// console.log(jonas);

const matilda = new Person('Matilda', 1917);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// Prototypes
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}
Person.prototype.species = 'Homo Sapiens';

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 5, 5, 7, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Not a good idea. Next version of JS might add a method with the same name and
// can create bugs when working in a team.
Array.prototype.unique = function() {
   return  [...new Set(this)]
}

console.log(arr.unique());

console.dir(x => x + 1);