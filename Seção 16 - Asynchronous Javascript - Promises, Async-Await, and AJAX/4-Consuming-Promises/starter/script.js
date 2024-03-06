'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
To handle a fulfilled state of a promise use the then() method. then() expects a callback function that will be executed as 
soon as the promise is fulfilled. The function will receive one argument once it's called by JS. The argument is the 
resulting value of the fulfilled promise.

In the logged response the data will be present in the body as a ReadableStream. To read this data you need to call the 
JSON method on the response. json() is a method available in all response object coming from fetch, so all resolve values and 
in this case the 'response' variable is a resolved value.

json() is also a async function meaning it will also return a promise.

Promises do not get rid of callbacks, they get rid of nested callbacks.
*/

/* 
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    renderCountry(data[0]);
  })
};

getCountryData('portugal');
*/

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('portugal');
