'use strict';

/*
There is another way of implementing prototypal inheritance or delegation, by using a function
called Object.create, that works in a different way of constructor functions and classes.

With Object.create there is still the idea of prototypal inheritance, however there are no
prototype properties involved, also no constructor functions and no new operator. Instead
you can use Object.create to essentially manually set the prototype of an object, to any
other object you want.

Slide 171
When you use the new operator in construction functions or classes it automatically sets
the prototype of the instances to the constructors prototype property.

With Object.create you can set the prototype of objects manually to any object you want.
Looking at properties or methods in the prototype chain works just like it worked in function
constructors or classes. The prototype chain in fact looks the exact same in the slide.
The big difference is that it didn't need any constructor function and also no prototype
property at all.

This is the least used way of implementing prototypal inheritance.
*/
// This Object will be literally the prototype of all Person objects.
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    // This just looks like a constructor function but has nothing to do with it because
    // the new operator is not being used.
    init(firstName, birthYear) {
        // 'this' will point to the Sarah object because we called init on sarah.
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// This will return a brand new object, this is a empty object linked to PersonProto
// object, which will be it's prototype that is linked to the prototype passed in here.
// They are linked through the proto property
const steven = Object.create(PersonProto);
console.log(steven);

// Don't do this
steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();