'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.com/v2/

/*
Definitions of a promise
- A promise is an object that is used as a placeholder for the future result of an asynchronous operation.
- A promise can also be defined as a container for an asynchronously delivered value
- A container for a future value.

Example of a promise is a response from a AJAX call.

The benefits of promises is that you no longer need to rely on events and callbacks passed into asynchronous
functions to handle asynchronous results.

Instead of nesting callbacks promises can be chained for a sequence of async operations.

##### Promises Life Cycle #####

Promises are time sensitive since they work wih async operations, they change over time, being in different states that is
called a life cycle of a promise.

In the beginning the promise is 'pending' before the future value is available. During this the async task is running in the
background.
When the promise is finished it's 'settled'. There are two types of 'settled promises fulfilled and rejected.
A fulfilled promise is a promise that has resulted in a value expected. A rejected promise means there has bean an error
in the async task. An example of an error is that user is offline and can't connect to the web server.
A promise is only settle once. It's state will remain unchanged.

The process of using a promise to get a result is called consume a promise. A promise is consumed when you have a promise.
The fetch function builds the promise and return to be consumed.
*/

/* 
For more complex AJAX calls, fetch cna take an object of option.
The fetch function immediately returns a promise and is stored in request
*/
const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request)



