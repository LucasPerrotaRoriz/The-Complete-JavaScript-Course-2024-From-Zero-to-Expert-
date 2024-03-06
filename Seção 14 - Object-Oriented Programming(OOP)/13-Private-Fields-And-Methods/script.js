'use strict';
/*
Think of a field as a property that will be on all instances. In this example it could be
the movements and the locale because they will be present/set in all objects created with this
class. They are not on the prototype. The methods are added to the prototype but the fields
are on the instances.

This fields can be referenced by the 'this' keyword.

# makes fields and methods private.

You cannot define a field in the constructor, they have to be outside of any method.

Class fields are just like any other property.
*/
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// There is also the static version of this 4 so it's 8 features.

class Account {
  // 1) Defining a public field (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account ${owner}`)
  }

  // 3) Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    // if(this.#approveLoan(val)) {
    if(this._approveLoan(val)) {
      this.deposit(val)
      console.log('Loan approved');
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods. For now Google will make it a field so it won't be on the prototype
  // #approveLoan(val) { // no browser support
  _approveLoan(val) { // no browser support
    return true;
  }
}

const acc1= new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// Don't do this. Better to have methods to avoid bugs.
// acc1.movements.push(250);
// acc1.movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250)
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements); can't access outside class anymore.
// console.log(acc1.#pin);
// console.log(acc1.#approvedLoan(1000))
Account.helper();

