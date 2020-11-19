const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=dcc0b52259c23e2902cb56cc6c6157f9";
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dcc0b52259c23e2902cb56cc6c6157f9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent=jsObject.main.temp;
    document.getElementById('humid').textContent=jsObject.main.humidity;
    document.getElementById('windSpeed').textContent=jsObject.wind.speed;

  });
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
  