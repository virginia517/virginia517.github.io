const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    for(let i=0; i<prophets.length; i++){
        let card= document.createElement('secction');
        let h2= document.createElement('h2');
        h2.textContent=prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);
       }
       document.querySelector('div.cards').appendchild(card);
});

//store the results of the converted response into an array
const prophets= jsonObject['prophets'];

