import olympics from "./data/athletes/olympics.js";
// import data from './data/lol/lol.js';
//const athletesArray= athletes;
const searchAthletesBtn = document.querySelector(".searchBtn");
const inputName = document.querySelector("#inputAthletes");
const showName = document.querySelector("#nameTag");
const showCountry = document.querySelector("#countryTag"); 
const showSport = document.querySelector("#sportTag");
const showEvent = document.querySelector("#eventTag");
const showHeight = document.querySelector("#heightTag");
const showWeight = document.querySelector("#weightTag")
const showMedal = document.querySelector("#medalTag");
const searchButton = document.querySelector(".searchBtn");


let athleteItem = 0

window.addEventListener("DOMContentLoaded", function(){
  const selectAthlete = olympics.athletes[athleteItem];
  showName.textContent = selectAthlete.name;
  showCountry.textContent = selectAthlete.team;
  showSport.textContent = selectAthlete.sport;
  showEvent.textContent = selectAthlete.event;
  showHeight.textContent = selectAthlete.height;
  showWeight.textContent = selectAthlete.weight;
  showMedal.textContent = selectAthlete.medal;
});

function showPerson(person) {
  const selectAthlete = olympics.athletes[person];
  showName.textContent = selectAthlete.name;
  showCountry.textContent = selectAthlete.team;
  showSport.textContent = selectAthlete.sport;
  showEvent.textContent = selectAthlete.event;
  showHeight.textContent = selectAthlete.height;
  showWeight.textContent = selectAthlete.weight;
  showMedal.textContent = selectAthlete.medal;
}

searchButton.addEventListener("click", function (){
  console.log("El botón funciona");
  athleteItem = Math.floor(Math.random()*olympics.athletes.length);
  showPerson(athleteItem); });

//console.log(example, data);
