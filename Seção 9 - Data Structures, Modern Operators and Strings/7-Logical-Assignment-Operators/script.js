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

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

/* OR assignment operator
   This operator assigns a value to a variable if that variable is currently falsy
   If numGuests is 0 then the value will be turn to 10 because 0 is a falsy value
*/

// rest1.numGuests = rest1.numGuests || 10;
// Same as above but more concise
// rest1.numGuests ||= 10

// rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests ||= 10

// nullish assignment operator(null or undefined)
// Using the logical nullish assignment operator. Will fix when numGuest is 0
rest1.numGuests ??= 10
rest2.numGuests ??= 10

// AND assignment operator
// And operator short circuits when the first values is falsy
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // undefined since owner does not exist

// What the logical AND operator does is to assign a value to a variable if it is
// currently truthy. If you ever need to assign a value to a variable that is already
// defined, so that has a value that is currently truthy then you can use the AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);



