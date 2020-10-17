let n= new Date();
let dayOfWeek= n.getDay();
if(dayOfWeek==6){
	document.getElementsByClassName("bannerAd").style.display="block";
}
else{
	document.getElementsByClassName("bannerAd").style.display="none";
}