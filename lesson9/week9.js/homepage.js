const requestUrl= "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestUrl)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const towns= jsonObject['towns'];
    for(let i=0; i<towns.length; i++){
        let card= document.createElement('section');
        let p= document.createElement('p');
        let p1= document.createElement('p');
        let p2= document.createElement('p');
        let p3= document.createElement('p');
        h1.textContent=towns[i].name;
        card.appendChild(h1);
    }
});


