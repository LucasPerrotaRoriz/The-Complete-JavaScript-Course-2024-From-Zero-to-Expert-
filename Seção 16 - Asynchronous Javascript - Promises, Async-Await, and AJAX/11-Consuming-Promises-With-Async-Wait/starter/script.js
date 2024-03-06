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
To make a function async use the keyword 'async'. When the function is done it will return a promise.
Inside a async function you can have one or more 'await' statements. 

'await' is used to wait for the result of the promise. 'await' will stop the code execution until the promise 
is fulfilled, until the data has been fetched in this case.

This will not block the main thread of execution. Stopping the execution of the function will not be a 
problem because the function is running asynchronously in the background.

When the value of the promise is resolved then the value of the await expression will be the resolved value of 
the promise.

async await is syntactic sugar for then() methods and promises. Behind the scenes promises are still being used.
*/


const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo =
    await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
  &localityLanguage=en`);
  if(!resGeo) throw new Error('Problem getting location data')

  const dataGeo = await resGeo.json();
  console.log(dataGeo)
  // Country data
  const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.countryName}`); 
  
  if(!res.ok) throw new Error('Problem getting country')

  const data = await res.json();
  renderCountry(data[0]);
};

whereAmI('portugal');


