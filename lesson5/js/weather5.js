let now= new Date();
let dayOfWeek= now.getDay();
if(dayOfWeek==6){
	document.getElementsByClassName("bannerAd").style.display="block";
}
else{
	document.getElementsByClassName("bannerAd").style.display="none";
}