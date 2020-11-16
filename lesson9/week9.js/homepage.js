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
            let image= document.createElement('p');
            card.appendChild(h1);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(image);
            document.querySelector('div.home').appendChild(card);
        }
    }
});


