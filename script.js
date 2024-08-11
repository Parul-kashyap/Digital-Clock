let times = document.getElementById("time");
let period = document.getElementById("period");


setInterval(() => {
   let minSec = new Date().toLocaleTimeString("en-Us",{minute:'2-digit',second:'2-digit', hour:"2-digit", hour12: true});
   times.innerHTML =  `${minSec}`;
});


// DATES
let dates = document.getElementById("date");

let date = new Date().getDate();
let month = new Date().toLocaleString("default", {month:"short"});
let year = new Date().getFullYear();
// let period = new Date().get();
let dayDate = new Date();
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = week[dayDate.getDay()];

dates.innerHTML = `${date} ${month} ${year}, ${day}`;
