let rentals= `[{
    "name" : "MetroScooter",
    "reservation":{
        "fullday" : 30,
        "halfday" : 20}
    ,
    "walkIn":{
        "halfday":25,
        "fullday":35
    }
},
{
    "name" : "DioScooter",
    "reservation":{
        "fullday" : 40,
        "halfday" : 30}
    ,
    "walkIn":{
        "halfday":35,
        "fullday":45
    }
},
{
    "name" : "PCX150",
    "reservation":{
        "fullday" : 40,
        "halfday" : 50}
    ,
    "walkIn":{
        "halfday":45,
        "fullday":55
    }
},
{
    "name" : "Pioneer",
    "reservation":{
        "fullday" : 70,
        "halfday" : 50}
    ,
    "walkIn":{
        "halfday":80,
        "fullday":60
    }
},
{
    "name" : "Wrangler",
    "reservation":{
        "fullday" : 100,
        "halfday" : 70}
    ,
    "walkIn":{
        "halfday":85,
        "fullday":125
    }
},
{
    "name" : "Jeep",
    "reservation":{
        "fullday" : 85,
        "halfday" : 60}
    ,
    "walkIn":{
        "halfday":70,
        "fullday":90
    }
}
]

`
console.log(JSON.parse(rentals));
console.log(JSON.parse(rentals)[5].name);

document.getElementById('hondares2').textContent = JSON.parse(rentals)[0].reservation.fullday;
document.getElementById('hondares1').textContent = JSON.parse(rentals)[0].reservation.halfday;
document.getElementById('hondawalk1').textContent = JSON.parse(rentals)[0].walkin.halfday;