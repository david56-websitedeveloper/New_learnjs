const API_KEY = "238293089dd31126314d94b24a7a257c"; // Replace with your OpenWeatherMap API key
let currentCity = ""; // Default city

// Function to update the current time
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("time").textContent = `Current Time: ${timeString}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// Function to fetch weather data by city
function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const cityName = data.name;

      document.getElementById(
        "weather"
      ).textContent = `Weather in ${cityName}: ${temperature}°C, ${description}`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      document.getElementById("weather").textContent =
        "City not found. Try again!";
    });
}

// Function to fetch weather data using user's location
function fetchWeatherByLocation(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const city = data.name;

      document.getElementById(
        "weather"
      ).textContent = `Weather in ${city}: ${temperature}°C, ${description}`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      document.getElementById("weather").textContent = "Error loading weather.";
    });
}

// Get user's location and fetch weather
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        fetchWeatherByLocation(
          position.coords.latitude,
          position.coords.longitude
        ),
      (error) => {
        console.error("Geolocation error:", error);
        fetchWeather(currentCity); // Fallback to default city
      }
    );
  } else {
    fetchWeather(currentCity); // Fallback if geolocation is not supported
  }
}

// Function to search for a city manually
function searchWeather() {
  const cityInput = document.getElementById("cityInput").value;
  if (cityInput) {
    fetchWeather(cityInput);
  }
}

// Call location function when the page loads
getLocation();
