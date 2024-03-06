'use strict';

console.log('first this', this); // window

const callAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log('calcAge this', this); // strict - undefined | normal - window
}
callAge(1991);

const callAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log('calcAgeArrow this', this); // window. Not his of this function but of the parent scope.
}
callAgeArrow(1980);

const jonas = {
    year:1991,
    calcAge: function() {
        console.log('object this', this); // the jonas object
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

/*
The this keyword will not simply point at the object in which we wrote the method.
In this case the calcAge method is inside the jonas object, but that is not the reason
why the this points to jonas.

The reason that the this keyword points to jonas, it's because jonas was the object calling
the method.
*/
const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; // copy method called method borrowing
matilda.calcAge();

const f = jonas.calcAge;
f();



