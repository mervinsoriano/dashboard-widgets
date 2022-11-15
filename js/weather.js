// API key. Replace with your API key
const APIKEY = 'f2f85762267ef18d0df71e18ec9f3737';
// City
const city = 'Spokane';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output
  const template = `
    <data value="${data.name}" class="city">${data.name}</data>
    <img src="https://github.com/mervinsoriano/dashboard-widgets/tree/main/img/${data.weather[0].icon}.svg" alt="Weather">
    <data value="${data.main.temp}" class="temp">${Math.ceil(data.main.temp)}&#8457;</data>
    <data value="${data.weather[0].description}" class="description">${data.weather[0].description}</data>
    <data value="${data.wind.speed}" class="wind">Wind: ${Math.ceil(data.wind.speed)} mph</data>
    <data value="${data.main.humidity}" class="humidity">Humidity: ${data.main.humidity}%</data>
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});