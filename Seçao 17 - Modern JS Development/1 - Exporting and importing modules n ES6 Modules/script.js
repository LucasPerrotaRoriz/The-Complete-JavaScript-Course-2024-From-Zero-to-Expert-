/*
    If you log something in the export file and in here you will see that the exporting file will log first.

    There is two types of exports named and default.
    Use a export like const cart = 10; to export specific value. Then for importing use import cart from ...

    For named imports you have to have the same name and {}. 
    Exports must be top level code if you put inside an if for example, it will cause an error.
    You can make multiple export by having them inside {}.

    You can change the name of an import and exports using as. If you do that you can't use the old name.
    You caN import everything from a class using * + as Name. It will return an Object with all the values.

    Default exports are from when you want to export only one thing from the module. You don't need to give a name
    on the export and when importing you can name it.

    You can have named and default exports together. This is not a good practice and should be avoid.

*/



// Importing module
console.log('Importing module');

/*
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

addToCart('bread', 5)
console.log(price, tq);
*/

/* 
import * as ShoppingCart from './shoppingCart.js'

ShoppingCart.addToCart('bread', 5)
console.log(ShoppingCart.totalPrice);
*/


// import add, { addToCart, totalPrice as price, tq }  from './shoppingCart.js'
import add, {cart} from './shoppingCart.js'
add('pizza', 2)
add('bread', 5)
add('apples', 4)

console.log(cart);
