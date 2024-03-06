'use strict';
/*
The extends keyword will automatically set the prototype chain.
*/

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert('Error. Invalid name');
  }

  get fullName() {
    return this._fullName;
  }

  calcAge() {
    return 2037 - this.birthYear;
  }
}

class Student extends Person {
  university = 'University of Lisbon'; // public field available on all objects created
  #studyHours = 0; // private field. Same as public but can't be accessed outside of class.
  #course;
  static numSubjects = 10; // static public fields. Available only on class.

  // constructor is automatically called by the new operator, when an instance of a
  // class is created. Mandatory on any regular class, but can be omitted on a child
  // class.
  constructor(fullName, birthYear, startYear, course) {
    // Calls parent class. Needs to happen first.
    super(fullName, birthYear);

    // Instance property. available on each created object. The difference of this and
    // a public field is that we set these instance properties based on input data of
    // the constructor. This properties are more personalized than public fields that are
    // the same on all objects.
    this.startYear = startYear;
    this.#course = course; // redefine private field.
  }

  // Public method
  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  // Referencing a private field and method.
  study(h) {
    this.#makeCoffe();
    this.#studyHours += h;
  }

  // Private method. Might not work on browser. You can fake with _.
  #makeCoffe() {
    return 'Here is a coffe to you :D'
  }

  // getter method.
  get testScore() {
    return this._testScore;
  }

  // setter method
  // If you have a setter for a property that is already defined then you need to
  // create a new property with _.
  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  // static method. Available only on class. It cannot access instance properties
  // or the methods, only the static ones. Helper methods for the class.
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

// Creating new object
const student = new Student('Jonas Schmedtmann', 2020, 2037, 'Medicine');