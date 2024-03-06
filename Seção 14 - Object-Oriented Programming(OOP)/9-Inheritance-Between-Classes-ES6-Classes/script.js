'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!!!');
  }
}

/*
To implement inheritance with ES6 classes use 'extend' keyword and 'super' function.

super is the constructor function of the parent class.
*/
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first, because the super function is responsible for 
        // creating the 'this' in this subclass.
        super(fullName, birthYear);
        // You could have no other properties here at all. This is not necessary/mandatory
        // the same goes for the additional parameter. The Student class would simply have
        // new methods and share its properties with the parent. If you didn't want this
        // then you would not need an constructor function because the super function would
        // be called automatically with all arguments that were passed to the constructor.
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }
}

// This would work even without the constructor
// const martha = new StudentCl('Martha Jones', 2012);
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
