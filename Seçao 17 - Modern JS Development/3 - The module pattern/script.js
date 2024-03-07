/*
    To create the module pattern and make it so you can have private data you create a function, more specifically. 
    an IFFE.

    You can manipulate and use the variables even though the IIFE ended is because of closures.

    The module pattern has some limitations such as:
    - Since it's not modules variables are global
    - They would be the need to link them in HTML and the order might mess somethings up
    - You could not bundle the code.
*/

// Importing module
console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js'

const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart. (shipping cost is ${shippingCost})`);
    }

    const orderStock = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} ordered from supplier.`);
    }

    return {
        addToCart,
        cart, 
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('pizza', 2)