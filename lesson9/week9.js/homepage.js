const requestUrl= "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestUrl)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const towns= jsonObject['towns'];
    for(let i=0; i<towns.length; i++){
        if(towns[i].name=="Preston" || towns[i].name=="Fish Haven" || towns[i].name=="Soda Springs"){
            let card = document.createElement('section');
            let info = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');
            
            card.appendChild(info);

            card.setAttribute('class', 'townsect');

            info.setAttribute('class', 'info');

            h2.textContent = towns[i].name;
            info.appendChild(h2);

            motto.textContent = towns[i].motto;
            info.appendChild(motto);

            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            info.appendChild(founded);

            population.textContent = 'Population: ' + towns[i].currentPopulation;
            info.appendChild(population);

            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            info.appendChild(rainfall);
            
            image.setAttribute('class', 'townimg');
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', 'Image of ' + towns[i].name);
            card.appendChild(image);
          
            document.querySelector('div.home').appendChild(card);
        }
    }
});


