'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
Accepts two callbacks one for the success and other for the error. The first callback gets access to the position 
object. This is async so it won't block execution. This a callback based API.

navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);
*/

// Promisifying
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //  position =>  resolve(position),
    //   err => reject(err)
    // );

    // Same as above
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};



const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude, longitude } = pos.coords;
      return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}
    &localityLanguage=en`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Geocoding error ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Request denied ${response.status}`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`An error has occurred ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function(e) {
  whereAmI();
});
