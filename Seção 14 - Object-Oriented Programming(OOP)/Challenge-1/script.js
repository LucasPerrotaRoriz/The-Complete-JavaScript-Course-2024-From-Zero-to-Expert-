'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// My solution
const Car = function (makeCar, carSpeed) {
  this.makeCar = makeCar;
  this.carSpeed = carSpeed;
};

Car.prototype.accelerate = function () {
  this.carSpeed += 10;
  console.log(this.carSpeed, ' KM/H');
};

Car.prototype.brake = function () {
  if (this.carSpeed !== 0) {
    this.carSpeed -= 5;
    console.log(this.carSpeed, 'KM/H');
  } else {
    console.log('Car speed is 0');
  }
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

// Jonas
const Car2 = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };

  Car2.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  Car2.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };

  const bmw = new Car2('BMW', 120);
  const mercedes = new Car2('Mercedes', 95);

  bmw.accelerate();
  bmw.accelerate();
  bmw.brake();
  bmw.accelerate();