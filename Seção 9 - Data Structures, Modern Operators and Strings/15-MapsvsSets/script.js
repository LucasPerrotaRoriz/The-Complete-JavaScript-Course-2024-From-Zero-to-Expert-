'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* If you need a simple list of values then use an array or a set. If you need
key value pairs then we need key and value objects. With key/value pairs you have a
way to describe values. On a array or a set you simply have the values without description.

They are also weaksets and weakmaps data structure.

## Arrays vs Sets ##
Used when you want simple lists off values and value don't need description.

Arrays - Use when you need ordered list of values(might contain duplicates)
       - Use when you need to manipulate data

Sets - Use when you need to work with unique values
     - Use when high-performance is really important
     - Use to remove duplicates from arrays

## Objects vs Maps ##
Used when you need to describe the values using keys

Objects - More 'traditional' key/value store
        - Easier to write and access values . and []
Maps - Better performance
     - Keys can have any data type
     - Easy to iterate
     - Easy to compute size
Use maps when you need to simply map keys to values and when you need keys that are
not strings.
If you need functions as values use an object. Objects are good for JSON.
*/