const valueSearch = document.getElementById("valueSearch");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.querySelector(".description");
const clouds = document.getElementById("clouds");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (valueSearch.value != "") {
    searchWeather();
  }
});

const id = "9585fd1df737e28152fbd78cdb289b6a";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=";
const searchWeather = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
