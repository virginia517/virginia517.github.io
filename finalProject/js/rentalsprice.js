let rentals= `{
    "name" : "MetroScooter",
    "reservation":{
        "full day": 30,
        "half day": 20
    },
    "walk in": {
        "half day":25,
        "full day":35
    }
}`
console.log(JSON.parse(rentals.reservation.fullday));