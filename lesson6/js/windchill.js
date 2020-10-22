//displaymessage();
windChill();
function windChill(){
    let t= parseFloat(document.getElementById('temp').textContent);
    let w= parseFloat(document.getElementById('windSpeed').textContent);
    let output="N/A";
    if(t<=50 && w>=3){
        let compute= 35.74+0.6215*t-35.75*Math.pow(w,0.16)+0.4275*t*Math.pow(w,0.16);
        output="compute";
    }
    
document.getElementsByClassName("windChill").innerHTML= output;
    //document.querySelector(".windChill").textContent= output.toFixed()+" "+"°F";
}
