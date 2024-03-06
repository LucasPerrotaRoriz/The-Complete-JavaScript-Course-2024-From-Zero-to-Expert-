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

// Rest operator looks like the spread operator with the ...
// The spread operator is to unpack an array and the rest operator is to pack elements into a array

/* 1) DESTRUCTURING */

// Spread, because on right side of =
const arr = [1,2, ...[3,4]];

// REST, because is on the left of the =
// It's called rest because it takes the rest of the elements of the array and puts into a new array
// The rest pattern basically collects the elements that are unused in the destructuring assignment
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b, others);

// Rest must always be last in the destructuring assignment
const [pizza , , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

/* 2) FUNCTIONS */
const add = function(...numbers) {
  //console.log(numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

// The rest operators is taking multiple values and packing them into one array
// With the spread operator we expand, with the rest operator we compress
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);


const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
