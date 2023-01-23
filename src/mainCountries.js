import {listPropertiesCountries, searchAthletesByCountry, searchAthletesByGender} from "./data.js";

function buildTable(data) {
  let suma = "";
  const tableRows = data.length > 20 ? 20 : data.length;
  for (let i = 0; i < tableRows; i++) {
    const row = `<tr>
                <td> ${data[i].team}</td>
                <td> ${data[i].name}</td>
                <td> ${data[i].sport}</td>
                <td> ${data[i].event}</td>
                <td> ${data[i].gender}</td>
                <td> ${data[i].medal}</td>
                </tr>`
    suma += row;
  }
  return suma;
}

function showTable() {
  const tableBody = document.getElementById("tableCountries");
  tableBody.innerHTML += buildTable(listPropertiesCountries)
}
showTable(listPropertiesCountries);


const countryInput = document.getElementById("input_country");
function showAthletesByCountry(){
  const country = countryInput.value;
  const athletesByCountry = searchAthletesByCountry(country);
  if (athletesByCountry.length > 0){
    const athletesTable = buildTable(athletesByCountry);
    const tableBody = document.getElementById("tableCountries");
    tableBody.innerHTML = athletesTable;
  }
}
countryInput.addEventListener('input', showAthletesByCountry);


const genderInput = document.getElementById("input_gender");
function showAthletesByGender(){
  const gender = genderInput.value;
  const athletesByGender = searchAthletesByGender(gender);
  if (athletesByGender.length > 0){
    const athletesTable = buildTable(athletesByGender);
    const tableBody = document.getElementById("tableCountries");
    tableBody.innerHTML = athletesTable;
  }
}
genderInput.addEventListener('input', showAthletesByGender);