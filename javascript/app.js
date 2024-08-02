import { getLoaction } from "./geolocation.js";
import { searchWeather } from "./weather.js";

// DOM Elements
const valueSearch = document.getElementById("valueSearch");
const form = document.querySelector("form");

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (valueSearch.value != "") {
    // Trigger weather search based on user input
    searchWeather(valueSearch.value);
  }
});

// Initialize the application by fetching weather data based on geolocation
const initApp = () => {
  getLoaction();
};

// Start the app
initApp();
