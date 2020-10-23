//displaymessage();


    let t= parseFloat(document.getElementById('temp').textContent);
    let w= parseFloat(document.getElementById('windSpeed').textContent);
    let compute= 35.74+0.6215*t-35.75*Math.pow(w,0.16)+0.4275*t*Math.pow(w,0.16);
    if(t <= 50 && w >= 3){
        document.querySelector(".windChill").textContent= Math.ceil(compute);
    }
    else{
        document.querySelector(".windChill").textContent=  "N/A";
    }

    //document.querySelector(".windChill").textContent= output.toFixed()+" "+"°F";

