'use strict';

/*

Use a try block to put in the code that might throw an error. The catch block you can log the error message since Errors have a message property.

The promise will only get rejected if the user has no internet. In case of a 403, or 404 error the promise will not reject and you will need to check 
the status.
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
    if(!resGeo.ok) throw new Error('Problem getting location data')

    const dataGeo = await resGeo.json();
    console.log(dataGeo)
    
    // Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.countryName}`); 
    
    if(!res.ok) throw new Error('Problem getting country')

    const data = await res.json();
    renderCountry(data[0]);
  } catch(err) {
    // console.log(err.message);
    console.error(err);
    renderError(`Something went wrong ${err.message}`)
  }
};

whereAmI();
