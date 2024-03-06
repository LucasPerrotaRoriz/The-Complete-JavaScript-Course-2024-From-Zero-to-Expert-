'use strict';

/*
Slide 175
The Student constructor function and its prototype property and then the mike object linked
to its prototype and that prototype is the constructor function prototype property. The link
between instance and prototype has been made automatically by creating the mike object with the new
operator.

Since a Student is also a Person you want them to be connected. Student be a child class and
inherit from Person, the parent class. So all instances of Student would get access to methods
from the Person's prototype property through the prototype chain.

In the diagram what you want to do is to make Person.prototype be the prototype of
Student.prototype. You want Student __proto__ property to be Person.prototype.

This connection needs to be made manually, to link this two prototype objects we are going to
use Object.create() because that's what Object.create() does.
-----

ES6 classes function the same way internally, it only changes the syntax.
*/

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
    // This is not good, repeating code breaks DRY and can lead to errors. So inheritance
    // comes into play since Student and Person have similar properties.
    // this.firstName = firstName;
    // this.birthYear = birthYear;

   // The code below will thrown an error because this Person constructor function is being called
   // as a regular function call. The new operator is not being used to call this Person
   // function constructor, so therefore this function call here is simply a regular function call.
   // In a regular function call the 'this' keyword is set to undefined, that's why it throws
   // an error. Instead of simply calling the Person function here you need to manually
   // set the 'this' keyword here.
    // Person(firstName, birthYear) // throws error

    // The call() method will call this function and be able to specify the 'this' keyword as
    // the first argument. In this case you want the 'this' inside Person to be the 'this' inside
    // this function here. In the beginning the 'this' keyword is going to be an empty object that
    // is created by the new operator. Is on that new object where you want to set the firstName
    // and birthYear
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Important do this at exactly this point. This connection must be made before any more methods
// are added to the prototype object of student. That's because Object.create() will return
// an empty object and them you add the methods like introduce. If it had been made after,
// Object.create would overwrite the methods added to the prototype property of Student.
// With this Student.prototype is now an object that inherits from Person.prototype
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

// Check slide 176
// Why not do this? Because this does not work. You will not end up with the prototype chain
// needed. In the diagram what is being showed is that The Student.prototype property and the
// Person.prototype property should be the exact same object. That't not what you want here,
// you want Person.prototype object to be the prototype of Student.prototype. You want to inherit
// from it not be the exact same object.
// Student.prototype = Person.prototype;

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

// After Object.create()
// This worked because JS will look up the method to the requested property.
// In summary you can call a method that is on Person.prototype property using a Student object.
mike.calcAge();

console.log('Mike first proto', mike.__proto__);
console.log('Mike second proto',mike.__proto__.__proto__);
console.log('Mike third proto',mike.__proto__.__proto__.__proto__);

// This happens because the prototypes were linked on line 62. The second console where
// would be false otherwise
console.log('Is Mike an instance of Student? ', mike instanceof Student)
console.log('Is Mike an instance of Person? ', mike instanceof Person)
console.log('Is Mike an instance of Object? ', mike instanceof Object)

// Ideally this should point to the Student constructor, but points to Person constructor
// The reason for that is that the Student prototype property was set using Object.create()
// This makes the Student.prototype constructor is still Person. This need to be fixed because
// sometimes you need to rely on the constructor property;
console.log('Student constructor', Student.prototype.constructor);
console.dir(Student.prototype.constructor);

// To fix
Student.prototype.constructor = Student;