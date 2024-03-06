'use strict';

/*
As a example of a static method the Array.from() method. arrays can't use this method because
it's not in the prototype, it's simply attached to the Array constructor itself.

Another static method example is Number.parseFloat(). It's not available on numbers but only
on the Number constructor.

Static methods are used as helpers that should be related to a certain constructor.

Static methods are not available on the instances. They are useful to implement some kind of
helper function about a class or about a constructor function.
*/

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance methods
    // Methods will be added to the .prototype property
    // Implicity way
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    /* Explicit way
    PersonCl.prototype.calcAge = function() {
        console.log(2037 - this.birthYear);
    }*/

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        console.log(name)
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // To create an static method in the class add the static keyword
    static hey2 = function() {
        console.log('Hey there!!!');
        console.log(this);
    }
};
const jessica = new PersonCl('Jessica Davis', 1996);
const walter = new PersonCl('Walter White', 1965);

// Creating a static method outside the class. This is not inherited.
PersonCl.hey = function() {
    console.log('Hey there!!!');
    // Will appear the entire constructor, the reason for that is because that is exactly
    // the object that is calling the method. That's the rule, whatever object is calling
    // the method, will be the 'this' keyword inside of that function. In here the 'this'
    // keyword is the entire constructor.
    console.log(this);
}
PersonCl.hey();

// Just like you can't call from() on a array, you can't call hey on a PersonCl object
// it's simply not in the prototype of the jonas object.
// jonas.hey();

PersonCl.hey2(); // This time 'this' points to the entire class.