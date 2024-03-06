'use strict';

/*

----- Promise.race()
Receives an array and returns a Promise. The Promise returned will be settled as
soon as one the Promises settles. This can means the Promise was fulfilled or rejected.

Using this function the first settled Promise wins. A rejected Promise can win.

Promise.race() short circuits when a Promise wills the race.

Promise.race() can be useful against Promises that never end or take too long. You can create a 
timeout Promise take rejects after some time.


----- Promise.allSettled() 

Receives an array of Promises and returns an array of all the settled Promises fulfilled or 
rejected.

Promise.allSettled() never short circuits.



----- Promise.any() [ES2021]

Similar to race() the different is rejected promises are ignored. So the result will always be
fulfilled Promises, unless of course they all reject.

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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
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

// Promise.race
(async function() {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ])
  // console.log(res[0]);
})();

const timeout = function(sec) {
  return new Promise(function (_, reject) {
    setTimeout(function() {
      reject(new Error('Request took too long!'))
    }, sec * 1000)
  })
}

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(5)
]).then(res => console.log(res[0])).catch(err => console.log(err))

// Promise.allSettled() 

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res))

// Promise.any() 
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res)).catch(err => console.error(err))

