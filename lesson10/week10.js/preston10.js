const apiUrl = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=dcc0b52259c23e2902cb56cc6c6157f9";
const apUrl = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=dcc0b52259c23e2902cb56cc6c6157f9";
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent=jsObject.main.temp;
    document.getElementById('humid').textContent=jsObject.main.humidity;
    document.getElementById('windSpeed').textContent=jsObject.wind.speed;

  });
  fetch(apUrl)
  .then((response) => response.json())
  .then((jsObject) => {
   //console.log(jsObject);
    
   
   const forecast= jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
   console.log(forecast);
   const days= ['Mon','Tues','Wed', 'Thurs', 'Fri'];
   for(let day=0; day<forecast.length;day++){
    const d= new Date(forecast);
    const imagesrc = 'https://openweathermap.org/img/f/' + jsObject.weather[0].icon + 'png'; 
    document.getElementById('trayDay').textContent= days[d.getDay()];
    document.getElementsByClassName('dayTemp').textContent= forecast.main.temp;
    document.getElementById('icon').setAttribute('src', imagesrc);
  }
   
  });
