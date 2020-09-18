let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthList=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let now=new Date();
let weekDays=days[now.getDay()];
let date= now.getDate();
let month=monthList[now.getMonth()];
let year=now.getFullYear();
let fullDate= weekDays + "," +" " + month + " " + date + "," + " " + year;
document.getElementById('currentDate').textContent=fullDate;

