const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dcc0b52259c23e2902cb56cc6c6157f9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });