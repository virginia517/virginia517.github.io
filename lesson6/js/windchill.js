displaymessage();
function displaymessage(){
    let t= 54;
    let w= 12;
    let compute= 35.74+0.6215*t-35.75*Math.pow(w,0.16)+0.4275*t*Math.pow(w,0.16);

    document.querySelector(".windChill").textContent= compute.toFixed()+" "+"°F";
}
