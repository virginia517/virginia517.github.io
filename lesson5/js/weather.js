//var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//var monthList=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/*var now=new Date();
var weekDays=days[now.getDay()];
var date= now.getDate();
var month=monthList[now.getMonth()];
var year=now.getFullYear();
var fullDate= weekDays + "," +" " + month + " " + date + "," + " " + year;
document.getElementById('currentDate').textContent=fullDate;*/
/*var dateNow=new Date(document.lastModified);
document.getElementById('currentDate').textContent=dateNow;*/

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



/*try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentdate2').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }*/
  const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
document.getElementById("currentDate").textContent = fulldate;

let n= new Date();
let dayOfWeek= n.getDay();
if(dayOfWeek==6){
	document.getElementsByClassName("bannerAd").style.display="block";
}
else{
	document.getElementsByClassName("bannerAd").style.display="none";
}