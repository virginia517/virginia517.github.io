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
            let h1 = document.createElement('h1');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');
            
            card.appendChild(info);

            card.setAttribute('class', 'townsect');

            info.setAttribute('class', 'info');

            h1.textContent = towns[i].name;
            info.appendChild(h1);

            p1.textContent = towns[i].motto;
            info.appendChild(p1);

            p2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            info.appendChild(p2);

            p3.textContent = 'Population: ' + towns[i].currentPopulation;
            info.appendChild(p3);

            p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            info.appendChild(p4);
            
            image.setAttribute('class', 'townimg');
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            card.appendChild(image);
          
            document.querySelector('div.home').appendChild(card);
        }
    }
});


