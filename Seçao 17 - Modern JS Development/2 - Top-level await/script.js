/*
    You can use 'await' outside async functions but only inside modules. However this will block the execution of 
    the entire module.

    If you have 2 modules A and B. If B imports A and A has a top-level await, B will have to wait A finish the blocking code.
*/

// Importing module
console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js'

/*
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json();
console.log(data);
console.log('Something');
*/

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    // console.log(data);

    return {title: data.at(-1).title, text: data.at(-1).body}
}

const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last))

const lastPost2 = await getLastPost();
console.log(lastPost2); 