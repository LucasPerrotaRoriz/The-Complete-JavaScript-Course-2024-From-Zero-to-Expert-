'use strict';

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
console.log('----------');
// marriedJessica = {}; // error

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

/*
To copy and object use the method assign(). assign({}, object) creates a new
object where the properties are copied.
*/
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
console.log('----------');
/*
There is a problem with this, it only works on the first level. So if you have a object inside a object, the inner
object will actually still be the same. So assign creates a shallow copy not a deep clone.

An array is just an object behind the scene.
*/

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
console.log('----------');

/*
To create a deep clone is difficult an would be necessary to use a external library like
Lo-Dash
*/