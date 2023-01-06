import {athletesData, searchAthleteByName} from "./data.js"
//Variable del input
const searchButton = document.querySelector(".searchBtn");
const nameNotFound = document.querySelector("#notFound");
//1. creamos una función que al hacer click en el botón busque la información del input (obtener nombre de atleta)
const inputName = document.getElementById("inputAthletes");
//searchButton.addEventListener("click", function (){


const totalAthletes = searchAthleteByName(athletesData);

searchButton.addEventListener ("click", tableAthletes, showTableAthletes); 

function showTableAthletes () {
  const showingTable = document.querySelector("#infoAthletes");
  showingTable.classList.toggle("tableAthletes");
}


window.addEventListener("DOMContentLoaded", function () {
  searchAthleteByName(totalAthletes);
  searchButton.textContent = totalAthletes.lenght;
});



function tableAthletes () {
  
  
  if ( inputName.value === "" || inputName.value === null ||inputName.value === undefined ) {
    nameNotFound.textContent = "Nombre no encontrado, por favor introduce un nombre válido"
 
} else {
    const selectAthlete = searchAthleteByName(inputName.value);
    const showName = document.querySelector("#nameTag");
    showName.textContent = selectAthlete.name;
    const showCountry = document.querySelector("#countryTag"); 
    showCountry.textContent = selectAthlete.team;
    const showSport = document.querySelector("#sportTag");
    showSport.textContent = selectAthlete.sport;
    const showEvent = document.querySelector("#eventTag");
    showEvent.textContent = selectAthlete.event;
    const showHeight = document.querySelector("#heightTag");
    showHeight.textContent = selectAthlete.height;
    const showWeight = document.querySelector("#weightTag")
    showWeight.textContent = selectAthlete.weight;
    const showMedal = document.querySelector("#medalTag");
    showMedal.textContent = selectAthlete.medal;
  }
  // 2.1 Definir una constante 'infoAtleta cuyo valor será el resultado del llamado del método buscarAtletla(valueToSearch)
  // 2.2 Manipular el DOM para mostrar los datos del atleta buscado en sus respectivos elementos de HTML
}
//});

