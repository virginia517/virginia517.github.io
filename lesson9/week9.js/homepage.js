const requestUrl= "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestUrl)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const towns= jsonObject['towns'];
    for(let i=0; i<towns.length; i++){
        if(towns[i].name=="Preston" || towns[i].name=="Fish Haven" || towns[i].name=="Soda Spring"){
            let card= document.createElement('section');
            let h1= document.createElement('h1');
            let p1= document.createElement('p');
            let p2= document.createElement('p');
            let p3= document.createElement('p');
            let p4= document.createElement('p');
            let image= document.createElement('img');
            card.appendChild(h1);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(image);
            card.appendChild(towninfo);

            //card.setAttribute('class', 'townsect');

           // towninfo.setAttribute('class', 'towninfo');

            h1.textContent = towns[i].name;
            h1.appendChild(h1);

            motto.textContent = towns[i].motto;
            towninfo.appendChild(motto);

            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            towninfo.appendChild(founded);

            population.textContent = 'Population: ' + towns[i].currentPopulation;
            towninfo.appendChild(population);

            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            towninfo.appendChild(rainfall);
            
            image.setAttribute('class', 'townimg');
            image.setAttribute('src', 'assets/' + towns[i].photo);
            image.setAttribute('alt', 'Image of ' + towns[i].name);
            card.appendChild(image);
            document.querySelector('div.home').appendChild(card);
        }
    }
});


