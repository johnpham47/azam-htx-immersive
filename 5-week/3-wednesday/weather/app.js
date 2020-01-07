let cityForm = document.querySelector("#cityForm");
const api = "d87524730c3bc9d7dab385d4c6a13d4e";

// Fetches the API data
async function fetchWeather() {
  event.preventDefault();
  let cityName = document.querySelector("#cityName").value;
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`
  );
  let weatherDisplay = await response.json();
  console.log(weatherDisplay);
  try {
    x = await displayWeather(weatherDisplay);
  } catch (e) {
    console.log("Error");
  }
}

function displayWeather(i) {
  let display = document.getElementById("display");
  display.innerHTML = `
    <li>Min-Temperature: ${i.main.temp_min}</li>
    <li>Max-Temperature: ${i.main.temp_max}</li>
    <li>Pressure: ${i.main.pressure}</li>
    <li>City: ${i.name}</li>
  `;
  console.log(i.name);
}

cityForm.addEventListener("click", fetchWeather);
// function searchCity() {
//   cityForm.addEventListener("click", () => {
//     event.preventDefault();
//     let cityName = document.querySelector("#cityName").value;
//     fetchWeather(cityName);
//   });
//   let cityName = document.querySelector("#cityName").value;
//   fetchWeather(cityName);
//   event.preventDefault();
// }
// fetchWeather();
