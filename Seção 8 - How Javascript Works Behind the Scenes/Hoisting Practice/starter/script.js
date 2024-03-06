'use strict';

// Variables Hoisting
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions Hoisting
console.log(addDecl(2,3));
//console.log(addExpr());
//console.log(addArrow());

function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
}

const addArrow = (a,b) => a + b;

// Will throw a different error because since var variables are undefined, when they
// are called they are undefined, its like this undefined(2,3)
var addExpr2 = function(a,b) {
    return a + b;
}

var addArrow2 = (a,b) => a + b;


// Exemple
console.log(numProducts);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

// The products get deleted even though they are 10 because of hoisting.
// numProducts is not 10 but undefined because of hoisting

// Use this with window object on the console
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// Variables created with var will create a property on the global window object


