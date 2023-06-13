function displayCurrentTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = `${day} ${hours}:${minutes}`;
}

function searchCity(event) {
  event.preventDefault();
  let h3 = document.querySelector("h3");
  let cityInput = document.querySelector("#city-input");
  cityInput = cityInput.value.trim();
  h3.innerHTML = `${cityInput}`;
}

let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", searchCity);

function convertToFahrenheit(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let celsiuslink = document.querySelector("#celsius-link");
celsiuslink.addEventListener("click", convertToCelsius);
displayCurrentTime();

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
