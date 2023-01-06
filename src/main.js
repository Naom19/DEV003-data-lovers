import {searchAthleteByName} from "./data.js"
//Variable del input
const searchButton = document.querySelector(".searchBtn");
//1. creamos una función que al hacer click en el botón busque la información del input (obtener nombre de atleta)
const inputName = document.getElementById("inputAthletes");
searchButton.addEventListener("click", function (){
  
  // 1.2 Definir una constante valueToSearch cuyo valor será el de la caja de texto con ID.... *const inputName*
  // 2. Definir una condicional que evalue si el valor de valueToSearch es diferente de vacío y de nulo  
  if ( inputName.value === "" || inputName.value === null ||inputName.value === undefined ) {
    inputName.placeholder = "Nombre no encontrado, por favor introduce un nombre válido" 
 
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

});
