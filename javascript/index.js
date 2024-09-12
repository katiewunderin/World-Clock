function updateTime() {
//Dublin
let dublinElement = document.querySelector("#dublin")
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime = moment().tz("Europe/dublin");

dublinDateElement.innerHTML =moment().format("MMMM Do, YYYY");
dublinTimeElement.innerHTML =dublinTime.format("h:mm:ss [<small>]A[</small>]");



//Lisbon
let lisbonElement = document.querySelector("#lisbon")
let lisbonDateElement = lisbonElement.querySelector(".date");
let lisbonTimeElement = lisbonElement.querySelector(".time");
let lisbonTime = moment().tz("Europe/lisbon");

lisbonDateElement.innerHTML =moment().format("MMMM Do, YYYY");
lisbonTimeElement.innerHTML =lisbonTime.format("h:mm:ss [<small>]A[</small>]");

//Los-Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = moment().format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);