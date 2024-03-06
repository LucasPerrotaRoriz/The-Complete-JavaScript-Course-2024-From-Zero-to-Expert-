'use strict';
/*
Some properties and method should not be easy to access. JS does not support yet true encapsulation,
so you can only fake it by using an underscore _. It's not a feature it's just a convention
made by developers. The property can still be accessed, _ just indicates that you should not mess
with it.
*/

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this. _pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`)
  }
  // Public interface
  getMovements() {
    return this._movements;
  }

  // Public interface
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if(this._approveLoan(val)) {
      this.deposit(val)
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// Don't do this. Better to have methods to avoid bugs.
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250)
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);