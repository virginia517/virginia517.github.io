const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=dcc0b52259c23e2902cb56cc6c6157f9";
const apUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=dcc0b52259c23e2902cb56cc6c6157f9";

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent=jsObject.main.temp;
    document.getElementById('humid').textContent=jsObject.main.humidity;
    document.getElementById('windSpeed').textContent=jsObject.wind.speed;

  });
  fetch(apUrl)
  .then((response) => response.json())
  .then((jsObject) => {
  // console.log(jsObject);
    
   
   const forecast= jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
   //console.log(forecast);
  
   let weekDay= new Array(7);
   weekDay[0]="Sun";
   weekDay[1]="Mon";
   weekDay[2]="Tues";
   weekDay[3]="Wed";
   weekDay[4]="Thurs";
   weekDay[5]="Fri";
   weekDay[6]="Sat";
   var x=1;

   for(i = 0; i < jsObject.list.length; i++){
   
    var myTime = jsObject.list[i].dt_txt.substring(11); 
    let date = new Date(jsObject.list[i].dt * 1000);
    let weather = weekDay[date.getDay()];
    if(myTime == '18:00:00' && x<=5 ) {
       document.getElementById('tray' + x).textContent = weather;
      
       document.getElementById('dayTemp' + x).textContent = Math.ceil(jsObject.list[i].main.temp);

       const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
       const desc = jsObject.list[i].weather[0].description;
       document.getElementById('icon' + x).setAttribute('src', imagesrc);
       document.getElementById('icon' + x).setAttribute('alt',desc);
       x++;
          
        
  }
  
   }
  });

  const eventUrl = "https://byui-cit230.github.io/weather/data/towndata.json";


  fetch(eventUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const towns= jsObject['towns'];

    console.log(towns[0].events[1]);
    
    //for(let i=0;i<towns.listlength;i++){
 /*if(towns.name="Preston"){
    
      let sect = document.createElement('section');
      let p1 = document.createElement('p');
      p1.textContent=towns[0].events[0];
      sect.appendChild('p1');
      document.querySelector('section.townEvents').appendChild(sect);
    }
   }*/
  });
