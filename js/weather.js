const API_KEY = "320d2f94d1e6402fce29fafd93359f80";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(position, "you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:nth-child(1)");
      const city = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:nth-child(3)");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;

      temp.innerText = `${data.main.temp}℃`;
      console.log(data.name, data.weather[0].main, data);
    });
}

function onGeoError() {
  alert("Can't find you No weater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
