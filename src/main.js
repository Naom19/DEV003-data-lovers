import {searchAthleteByName} from "./data.js";
//import olympics from "./data/athletes/olympics.js";
//Variable del input
const searchButton = document.querySelector(".searchBtn");
const nameNotFound = document.querySelector("#notFound");

//1. creamos una función que al hacer click en el botón busque la información del input (obtener nombre de atleta)
const inputName = document.getElementById("inputAthletes");


searchButton.addEventListener("click", function showAll (){
  showInfoAthletes();
  showingTable();
});

function showingTable() {
  document.querySelector("#infoAthletes").style.display = "block";
}
//4. Crear una función showAll que contenga las dos funciones de arriba y se utilice ese nombre de función en el evento onclick  


function showInfoAthletes () {

  // comenté algunos cambios, porque mandabamos la info de todo el array al botón y por eso no aparecía al cargar la interfaz
  /*const totalAthletes = searchAthleteByName(athletesData);*/

  //searchButton.addEventListener ("click", tableAthletes, showTableAthletes); 
  //searchButton.addEventListener ("click", searchAthletes);

  //function showTableAthletes (atletheInfo) {
  //const showingTable = document.querySelector("#infoAthletes");
  //showingTable.classList.toggle("tableAthletes");

  //1.2 Definir una constante valueToSearch cuyo valor será el de la caja de texto con ID const input name
  //2. Definir una condicional que evalúe si el valor de valueToSearch es diferente de vacío y nulo

  if ( inputName.value === "" || inputName.value === null ||inputName.value === undefined ) {
    nameNotFound.textContent = "Nombre no encontrado, por favor introduce un nombre válido";
    
    // modificas la propiedad de la tabla para ocultarla
  } else {
    const selectAthlete = searchAthleteByName(inputName.value);
    const showName =document.querySelector("#nameTag");
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
    // modificas la propiedad de la tabla para mostrarla
  }
}
//2.1 Definir una constante "infoAtleta" cuyo valor será el resultado del llamado del método buscarAtleta(valueToSearch)
//2.2 Manipular el DOM para mostrar los datos del atleta buscado en sus respectivos elementos de HTML
//3. Crear una función para mostrar y ocultar el contenido de la tabla
// obtengo en una variable/constante la referencia a la tabla

// PARA REALIZAR UNA FUNCIÓN QUE CARGUE LOS ELEMENTOS PARA EL INPUT DE PAÍSES

// function init (){
//   const select=document.createElement(select);
//   const option1=document.createElement("option");
//   option1.setAttribute("value", "value1");
//   const option1Text=document.createTextNode("option 1");
//   option1.appendChild(option1Text);

// }

// window.onload=init;
// //select Países


// const filtrerAthlete=listAthletes();
// //team de atletas 
// const teamAthletes = filtrerAthlete.map(({team})=>team);

// //elimina teams repetidos
// const ultimateTeam = teamAthletes.filter((item,index)=>{
//   return teamAthletes.indexOf(item) === index;
// })

// //ordenar team
// ultimateTeam.sort();


// function loadTeam() {
//   const team = ultimateTeam; //Tu array de teams
//   const select = document.getElementById("input_country"); //Seleccionamos el select

  
//   for(let i=0; i < team.length; i++){ 
//     const option = document.createElement("option"); //Creamos la opcion
//     option.setAttribute('value', team[i])
//     option.innerHTML = team[i]; //Metemos el texto en la opción
//     select.appendChild(option); //Metemos la opción en el select
    
//   }
  
// }
// loadTeam();

const showCountries=document.querySelector(".submit_show");


