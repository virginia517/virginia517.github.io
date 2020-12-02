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
        "fullday" : 50,
        "halfday" : 40}
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
        "halfday":70,
        "fullday":80
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
document.getElementById('hondawalk1').textContent = JSON.parse(rentals)[0].walkIn.halfday;
document.getElementById('hondawalk2').textContent = JSON.parse(rentals)[0].walkIn.fullday;

document.getElementById('diores2').textContent = JSON.parse(rentals)[1].reservation.fullday;
document.getElementById('diores1').textContent = JSON.parse(rentals)[1].reservation.halfday;
document.getElementById('diowalk1').textContent = JSON.parse(rentals)[1].walkIn.halfday;
document.getElementById('diowalk2').textContent = JSON.parse(rentals)[1].reservation.fullday;

document.getElementById('pcxres1').textContent = JSON.parse(rentals)[2].reservation.halfday;
document.getElementById('pcxres2').textContent = JSON.parse(rentals)[2].reservation.fullday;
document.getElementById('pcxwalk2').textContent = JSON.parse(rentals)[2].walkIn.fullday;
document.getElementById('pcxwalk1').textContent = JSON.parse(rentals)[2].walkIn.halfday;

document.getElementById('pioneeres2').textContent = JSON.parse(rentals)[3].reservation.fullday;
document.getElementById('pioneeres1').textContent = JSON.parse(rentals)[3].reservation.halfday;
document.getElementById('pioneerwalk1').textContent = JSON.parse(rentals)[3].walkIn.halfday;
document.getElementById('pioneerwalk2').textContent = JSON.parse(rentals)[3].walkIn.fullday;

document.getElementById('4doores2').textContent = JSON.parse(rentals)[4].reservation.fullday;
document.getElementById('4doores1').textContent = JSON.parse(rentals)[4].reservation.halfday;
document.getElementById('4doorwalk2').textContent = JSON.parse(rentals)[4].walkIn.fullday;
document.getElementById('4doorwalk1').textContent = JSON.parse(rentals)[4].walkIn.halfday;

document.getElementById('2doores2').textContent = JSON.parse(rentals)[5].reservation.fullday;
document.getElementById('2doores1').textContent = JSON.parse(rentals)[5].reservation.halfday;
document.getElementById('2doorwalk2').textContent = JSON.parse(rentals)[5].walkIn.fullday;
document.getElementById('2doorwalk1').textContent = JSON.parse(rentals)[5].reservation.halfday;