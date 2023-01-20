import olympics from "./data/athletes/olympics.js"; 

export const athletesData = olympics.athletes;

export function searchAthleteByName(athleteName){
  
  // 1. Iterar todo el arreglo de atletas
  for (let i = 0; i < olympics.athletes.length; i++) { //aquí antes estaba como i<= olympics.athletes.lenght; 
    const athlete = olympics.athletes[i];
    
    if (athlete.name === athleteName) {
     
      return  athlete;
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
  

//console.log(JSON.stringify(athletesList)); de esta manera podemos visualizar todos los datos dentro de athletesList en la consola


// function countries () {
//   const container= document.querySelector("#tableCountry");
//   const nameOfTheCountry = country.value;
//   for (let i = 0; i <= data.athletes.length; i++) {
//    const countriesTable = data.athletes[i].value;//antes[i].team;
//    const abreviationNocTable = data.athletes[i].value;//antes[i].noc;
//    let nAthletes = document.querySelector(".athletesNumber");
    
//    if (searchCountry === countriesTable || searchCountry === abreviationNocTable)  {
//    countriesFunction.textContent = athletes.team;
//    nameOfTheCountry.textContent = data.athletes[5].value;
//    como asignar a mi tabla/caja de texto el valor de athletes[i].PROPIEDADAUSAR
//     } 
//   } 
// }


export const listCountries=athletesData.map(
  athlete=>athlete
);


export const listCountries1=athletesData.map(
  ({ team, name, sport, event, gender, medal  }) => ({ team, name, sport, event, gender, medal }));
//map nos permite obtener los elemento, aplicarles cambios para crear un nuevo arreglo.
//filter nos permite comparar la información ingresada con la del arreglo creado guardarla

export function searchAthletesByCountry(country) {
  const athletesByCountry = [];
  for(let index=0; index < athletesData.length; index++){
    if (athletesData[index].team.toLowerCase().includes(country.toLowerCase())){
      athletesByCountry.push({
        team: athletesData[index].team,
        name: athletesData[index].name,
        sport: athletesData[index].sport,
        event: athletesData[index].event,
        gender: athletesData[index].gender,
        medal: athletesData[index].medal,
      })
    }
  }
  return athletesByCountry;
}

//La función anterior puede resumirse de la siguiente manera, sin embargo es menos descriptiva
// export function searchAthletesByCountry(country) {
//   const athletesByCountry = athletesData.filter(athlete => athlete.team.toLowerCase().includes(country.toLowerCase()));
//   return athletesByCountry;
// }


export function searchAthletesByGender(genderAthlete) {
  const athletesByGender = athletesData.filter(athlete => athlete.gender.toLowerCase().includes(genderAthlete.toLowerCase()));
  return athletesByGender;
}

























export const  medalAthletes = athletesData.map(({gender})=>gender);
//  console.table(medalAthletes);




