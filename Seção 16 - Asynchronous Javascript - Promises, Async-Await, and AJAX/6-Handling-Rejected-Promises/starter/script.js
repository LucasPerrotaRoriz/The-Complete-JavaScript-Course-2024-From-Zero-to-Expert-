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
};

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}

/* 
A promise where a error happens is a rejected promise. The error to handle in this case is if the user losses his internet connection.

Errors propagate down the chain until they are catch.

The error generated is a JS object. Errors can be created with a constructor like a map or a set.

finally can be used to execute something that always needs to happen no matter if the promise was fulfilled or rejected.

fetch only rejects if there is a no internet. So even though a 404 error happens the promise will this be fulfilled.
*/

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 😨😨`);
      renderError(`Something went wrong 😨😨 ${err.message}. Try Again!`)
    }) // will get all errors that happen in this promise chain.
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});