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


/*
Each and every object in JS automatically has a property called prototype, that includes
constructor functions.

Every object that is created by a constructor function will get access to all the methods
and properties that are defined on the constructor prototype property.

The prototype property of the constructor function is Person.prototype. All objects created
through Person constructor function will inherit all methods and properties that are
defined on the prototype property.

This works because any object has access to the methods and properties from its prototype.
Each object has a special property called __proto__. jonas.__proto__ is the prototype of
jonas, it's not the prototype property.

So the prototype of the jonas object is essentially the prototype property of the constructor
function.

Step number 3 is where __proto__ is created and sets it's value to the prototype property of the
function that is being called.

You can set properties on the prototype not just methods.
*/

// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
// matilda.calcAge();
//jack.calcAge();

console.log(jonas.__proto__);
/*
Person.prototype here is not the prototype of Person, but instead it is what going to be used as the
prototype of all the objects that are created with the Person constructor function
*/
console.log(jonas.__proto__ === Person.prototype);
// Person.prototype is the prototype of jonas.
console.log(Person.prototype.isPrototypeOf(jonas));
// Person.prototype is not the prototype of Person
console.log(Person.prototype.isPrototypeOf(Person));

// This property is not directly in the object, it's not it's own property.
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

