const valueSearch = document.getElementById("valueSearch");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.querySelector(".description");
const clouds = document.getElementById("clouds");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const form = document.querySelector("form");
const main = document.querySelector("main");
const loading = document.getElementById("loading");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (valueSearch.value != "") {
    searchWeather();
  }
});

const id = "9505fd1df737e20152fbd78cdb289b6a";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;

const searchWeather = () => {
  loading.classList.add("visible");
  fetch(url + "&q=" + valueSearch.value)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == 200) {
        updateWeatherInfo(data);
      } else {
        displayError(data.message);
      }
      valueSearch.value = "";
      loading.classList.remove("visible");
    })
    .catch(() => {
      loading.classList.remove("visible");
      displayError("An error occurred while fetching");
    });
};

const displayError = (message) => {
  alert(message);
  main.classList.add("error");
  setTimeout(() => {
    main.classList.remove("error");
  }, 1000);
};

const updateWeatherInfo = (data) => {
  city.querySelector("figcaption").innerText = data.name;
  city.querySelector("img").src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
  temperature.querySelector(
    "img"
  ).src = `https://openweathermap.org/img/wn/"${data.weather[0].icon}"@4x.png`;
  temperature.querySelector("figcaption span").innerText = data.main.temp;
  description.innerText = data.weather[0].description;
  clouds.innerText = data.clouds.all;
  humidity.innerText = data.main.humidity;
  pressure.innerText = data.main.pressure;
};

const initApp = () => {
  valueSearch.value = "Bangladesh";
  searchWeather();
};
initApp();
