const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=dcc0b52259c23e2902cb56cc6c6157f9";
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);
});