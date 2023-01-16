import olympics from "./data/athletes/olympics.js"; 

//export const athletesData = olympics.athletes;
export function searchAthleteByName(athleteName,){
  
  // 1. Iterar todo el arreglo de atletas
  for (let i = 0; i < olympics.athletes.length; i++) { //aquí antes estaba como i<= olympics.athletes.lenght; 
    const athlete = olympics.athletes[i];
    
    if (athlete.name === athleteName) {
     
      return athlete;
    }
  }
  return {"name": "",
    "gender": "",
    "height": "",
    "weight": "",
    "sport": "",
    "team": "",
    "noc": "",
    "age": "",
    "event": "",
    "medal": ""}
}
// 2. Por cada atleta iterado comparar su campo name contra athleteName
// 3. Si coincide el nombre, retornar el atleta iterado
// 4. Si no coincide retornar objeto vacio

//import athletes from "./data/athletes/olympics.js"
  

/**function showPerson(person) { //Pasamos esta función de main.js a data.js
  const selectAthlete = olympics.athletes[person];
  showName.textContent = selectAthlete.name;
  showCountry.textContent = selectAthlete.team;
  showSport.textContent = selectAthlete.sport;
  showEvent.textContent = selectAthlete.event;
  showHeight.textContent = selectAthlete.height;
  showWeight.textContent = selectAthlete.weight;
  showMedal.textContent = selectAthlete.medal;
}**/


//console.log(JSON.stringify(athletesList)); de esta manera podemos visualizar todos los datos dentro de athletesList en la consola

//const searchCountry = document.querySelector(".searchCountries");
//const country = document.querySelector(".country");
//searchCountry.addEventListener('keypress', countries);


//function countries () {
  //const container= document.querySelector("#tableCountry");
  //const nameOfTheCountry = country.value;
  //for (let i = 0; i <= data.athletes.length; i++) {
    //const countriesTable = data.athletes[i].value;//antes[i].team;
    //const abreviationNocTable = data.athletes[i].value;//antes[i].noc;
    //let nAthletes = document.querySelector(".athletesNumber");
    
    //if (searchCountry === countriesTable || searchCountry === abreviationNocTable)  {
      //countriesFunction.textContent = athletes.team;
      //nameOfTheCountry.textContent = data.athletes[5].value;
      // como asignar a mi tabla/caja de texto el valor de athletes[i].PROPIEDADAUSAR
    //} 
  //} 
//}

