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

  order: function(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring object
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// Destructuring Objects
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Giving new names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// Without parenthesis JS will throw an error because, when you start a line with curly
// braces JS expects a code block and since we cannot assign anything to a code block
// JS throws an error. To solve the trick is to wrap in a parenthesis
({a, b} = obj);
console.log(a, b); // Overwrites variables


// Nested Objects
const {fri: {open, close}} = openingHours;
//console.log(fri);
console.log(open, close);

const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

// Passing an object
restaurant.orderDelivery({
    time:'22:30',
    address: 'Vial del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});


restaurant.orderDelivery({
    address: 'Vial del Sole, 21',
    starterIndex: 1,
});