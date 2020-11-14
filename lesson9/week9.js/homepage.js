const requestUrl="https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const prophets= jsonObject['towns'];//store the results of the converted response into an array
   
});
