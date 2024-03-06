'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring object
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/*
The result of the OR operator doesn't always have to be a boolean
Properties of logical operators:
  They can use any data type
  They can return any data type
  They do something called short circuiting/short circuit evaluation

In the case of OR operator short circuit means that if the first value is a truthy value it will
immediately return that first value. Meaning the second value in this case with OR will not be evaluated.
*/
console.log('--------- OR ----------');
console.log(3 || 'Jonas'); // 3

// '' is a falsy value
console.log('' || 'Jonas'); // Jonas

console.log(true || 0); // true

// undefined is a falsy value, returns null even though is a falsy value
console.log(undefined || null); // null

// Hello is the first truthy value in the chain of OR operations
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// numGuests doesn't exist so returns 10
// restaurant.numGuests = 23;
// restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Using short circuit
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

/*
When it comes to short circuit evaluation the AND operator works the exact opposite way
of the OR operator.
*/
console.log('--------- AND ---------');

// The AND operator short circuits when the first value is falsy.
console.log(0 && 'Jonas'); // 0

// When is truthy the evaluation continues and stops at the last value and returns it.
console.log(7 && 'Jonas'); // Jonas

// It stops a the falsy value, since the result will return false anyway.
console.log('Hello' && 23 && null && 'jonas'); // null

// Practical example
if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
This does not mean to replace all if statements with AND or OR operators because it will make
the code very hard to read.

We can use the OR operator to set default values and the AND operator
to execute code in the second operand if the first is true.
*/