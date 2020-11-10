const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const prophets= jsonObject['prophets'];//store the results of the converted response into an array
    for(let i=0; i<prophets.length; i++){
        let card= document.createElement('secction');
        let h2= document.createElement('h2');
        let p= document.createElement('p');
        h2.textContent=prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);
        p.textContent=prophets[i].date
        document.querySelector('div.cards').appendChild(card);
       }
     
});
