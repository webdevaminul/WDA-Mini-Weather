import { searchWeather, fetchWeatherByCoordinates } from "./weather.js";

// Function to get the user's current location
export const getLoaction = () => {
  if (navigator.geolocation) {
    // Get the current position if geolocation is supported
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Fetch weather data using coordinates
        fetchWeatherByCoordinates(latitude, longitude);
      },
      (error) => {
        console.error("Geolocation error.", error.message);

        // Fallback to a default location (Bangladesh) if geolocation fails
        searchWeather("Bangladesh");
      }
    );
  } else {
    // Fallback to a default location (Bangladesh) if geolocation is not supported
    searchWeather("Bangladesh");
  }
};
