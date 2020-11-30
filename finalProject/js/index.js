function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
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

WebFont.load({
    google: {
      families: [
        'Raleway' , 'PT Serif'
      ]
    }
  });