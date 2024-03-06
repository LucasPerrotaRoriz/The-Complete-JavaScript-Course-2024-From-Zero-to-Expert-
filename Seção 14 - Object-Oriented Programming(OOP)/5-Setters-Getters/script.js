'use strict';

/*
To transform a method into a getter use 'get'. Don't write it as a method, write it as a
property.

To create a setter use 'set'. Any setter method needs at least one parameter.
*/

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl {
    // Each time the constructor is executed, when setting fullName on the 'this' keyword it
    // will call the setter method fullName.
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // There will be an error thrown 'Maximum call stack size exceeded'. What happens here
    // is that there is a conflict, right now both the constructor function and the setter
    // function are trying to set the exact same property name, that gives origin to the error.
    // To fix this you have to create a new property name. When you have a setter trying to
    // set a property that already exists the convention is to add an _.
    // When doing this _fullName will take place of fullName. To avoid this create a getter
    // for the fullName property.
    set fullName(name) {
        console.log(name)
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
};
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica.age);
const walter = new PersonCl('Walter White', 1965);
