'use strict';

// This works because of closures
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greetArrow = greeting => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

const greetArrow2 = (greeting) => {
    return (name) => (console.log(`${greeting} ${name}`))
}

// this is now at function. function(name)  { ...
const greeterHey = greet('Hey');
const greeterHeyArrow = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');

greetArr('Hi')('Jonas');