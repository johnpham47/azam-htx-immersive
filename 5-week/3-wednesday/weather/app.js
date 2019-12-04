const api = "d87524730c3bc9d7dab385d4c6a13d4e";

async function fetchWeather() {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=houston,uk&appid=${api}&units=imperial`
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

fetchWeather();
