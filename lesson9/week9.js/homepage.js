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
            document.querySelector('div.home').appendChild(card);
        }
    }
});


