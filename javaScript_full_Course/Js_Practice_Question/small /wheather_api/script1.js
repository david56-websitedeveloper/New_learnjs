const API_KEY = "238293089dd31126314d94b24a7a257c"; 
let currentCity = "Kathmandu";

// Time Update Function
function updateTime() {
  const now = new Date(); 
  const timeString = now.toLocaleTimeString();
  document.getElementById("time").textContent = `Time: ${timeString}`; 
}

// Weather Fetch Function
async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();

    if (data.cod === 200) {
      const weatherHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
      document.getElementById("weather").innerHTML = weatherHTML;
    } else {
      document.getElementById("weather").textContent = "City not found";
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weather").textContent = "Error loading weather";
  }
}

// Search Function
function searchWeather() {
  const cityInput = document.getElementById("cityInput");
  currentCity = cityInput.value.trim() || currentCity;
  cityInput.value = "";
  fetchWeather();
}

// Initial Setup
setInterval(updateTime, 1000);
updateTime(); 
fetchWeather(); 


























































// let currentCountry = 'US';
// let currentWeather = {};
// let currentWeatherIcon = '';
// let currentWeatherIconURL = '';
// let currentWeatherDescription = '';
// let currentWeatherTemp = '';
// let currentWeatherFeelsLike = '';
// let currentWeatherHumidity = '';
// let currentWeatherWindSpeed = '';
// let currentWeatherWindDirection = '';
// let currentWeatherPressure = '';
// let currentWeatherVisibility = '';
// let currentWeatherSunrise = '';
// let currentWeatherSunset = '';
// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY;
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query="';

// Money exchANGE API key b6a85281f9f8f1e51aee1f9f
