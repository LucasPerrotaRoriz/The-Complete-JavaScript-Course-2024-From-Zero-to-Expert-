'use strict';

/*

The logs will show  first because whereAmI() is an async function that runs on the background.

If you add the return `You are in ${dataGeo.city}, ${dataGeo.country}`, assign it to
a variable what it will return will be a Promise.

This happens because JS does not know of the string because the function is still running
and since it's async it does not block the code.

The value returned by async function will be the fulfilled value of the Promise and in this
case it will be the string.

To correctly print the string just use a then() which can handle a Promise.

Right now if an error happens the string will not be reached. However the console.log() will
still print undefined meaning the callback function, then() worked, the Promise was fulfilled 
and not rejected. You can catch the error

To fix that you can rethrow the error.
*/

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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo =
      await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
    &localityLanguage=en`);

    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
    );

    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(`${err}`);
    renderError(`Something went wrong ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// const city = whereAmI();
// console.log(city);

/*
console.log('1: will get location ');
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log('3: Finished getting location'))

*/ 

console.log('1: will get location ');
(async function() {
  try {
    const city = await whereAmI()
    console.log(`2: ${city}`);
  } catch(err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
  
})();
