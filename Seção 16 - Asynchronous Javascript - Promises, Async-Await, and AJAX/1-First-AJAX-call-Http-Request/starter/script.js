'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// https://restcountries.com/v3.1/

/* Tasks 
1 -  Create a XMLHttpRequest object 
2 - Make a request to the API 
3 - Send the request 
4 - Get the load event
5 - Convert to JS object and destruct
6 - Get the HTML to create the template literal
7- Put the data in the template literal
8- Insert the element
*/

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  /* You can't do this because the result is not here yet. The AJAX call happens in the background while the 
  rest of the code keeps running.
  data = request.send();
  */

  // The response is in the property responseText that will bet set when the data arrives.
  request.addEventListener('load', function () {
    // console.log(this.responseText);

    // Convert to js object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
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
  });
};

// They might appear in a different order since the data arrives a a different time.
getCountryData(`brasil`);
getCountryData(`italy`);
getCountryData(`spain`);
