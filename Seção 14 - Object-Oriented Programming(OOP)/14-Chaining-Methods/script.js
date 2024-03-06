'use strict';
/*

*/

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
    return this; // current object
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if(this._approveLoan(val)) {
      this.deposit(val)
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods. For now Google will make it a field so it won't be on the prototype
  _approveLoan(val) {
    return true;
  }
}

const acc1= new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// Chaining
// returning 'this' will make the method chainable. This makes most sense in methods that
// set some property.
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());



