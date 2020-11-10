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
        let h3= document.createElement('h3'); 
        let p= document.createElement('p');
        let image= document.createElement('image');
        h2.textContent=prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);
        h3.textContent='Date of Birth:' + prophets[i].birthdate;
        card.appendChild(h3);
        p.textContent='Place of Birth:' + prophets[i].birthplace;
        card.appendChild(p);
        image.setAttribute('src', prophets[i].imageurl);
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);
       }
     
});
