// DOM Elements
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.querySelector(".description");
const clouds = document.getElementById("clouds");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const main = document.querySelector("main");
const loading = document.getElementById("loading");

// OpenWeatherMap API key and base URL
const id = "9505fd1df737e20152fbd78cdb289b6a";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${id}`;

// Function to update the DOM with fetched weather information
const updateWeatherInfo = (data) => {
  city.querySelector("figcaption").innerText = data.name;
  city.querySelector("img").src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
  temperature.querySelector(
    "img"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  temperature.querySelector("figcaption span").innerText = data.main.temp;
  description.innerText = data.weather[0].description;
  clouds.innerText = data.clouds.all;
  humidity.innerText = data.main.humidity;
  pressure.innerText = data.main.pressure;
};

// Function to display error message and apply error styling
const displayError = (message) => {
  alert(message); // Display error message
  main.classList.add("error");
  setTimeout(() => {
    main.classList.remove("error");
  }, 1000);
};

// Function to search weather by city name
export const searchWeather = (cityName) => {
  loading.classList.add("visible"); // Show loading indicator
  fetch(`${url}&q=${cityName}`)
    .then((res) => res.json())
    .then((data) => {
      loading.classList.remove("visible"); // Hide loading indicator
      if (data.cod == 200) {
        // Update weather information if the API call is successful
        updateWeatherInfo(data);
      } else {
        // Display error message if the API call fails
        displayError(data.message);
      }
      // Clear the search input
      valueSearch.value = "";
    })
    .catch(() => {
      loading.classList.remove("visible"); // Hide loading indicator
      displayError("An error occurred while fetching. Please try again.");
    });
};

// Function to fetch weather by geographical coordinates
export const fetchWeatherByCoordinates = (lat, lon) => {
  loading.classList.add("visible"); // Show loading indicator
  fetch(`${url}&lat=${lat}&lon=${lon}`)
    .then((res) => res.json())
    .then((data) => {
      loading.classList.remove("visible"); // Hide loading indicator
      if (data.cod == 200) {
        // Update weather information if the API call is successful
        updateWeatherInfo(data);
      } else {
        // Display error message if the API call fails
        displayError(data.message);
      }
      // Clear the search input
      valueSearch.value = "";
    })
    .catch(() => {
      loading.classList.remove("visible"); // Hide loading indicator
      displayError("An error occurred while fetching. Please try again.");
    });
};
