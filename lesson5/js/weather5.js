/*
function displayMessage() {
	let now= new Date();
    let dayOfWeek= now.getDay();
    if(dayOfWeek==5){
	document.querySelector("message").style.display="block";
}
}*/

displaymessage();
function displaymessage(){
    let theDate = new Date();
    if (theDate.getDay()==5){
        document.querySelector("message").style.display = "block";
    }
}