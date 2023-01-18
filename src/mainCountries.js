import {listCountries, listCountries1, searchAthletesByCountry } from "./data.js";

const countryInput = document.getElementById("input_country");
countryInput.addEventListener('input', showAthletesByCountry);

function showAthletesByCountry(){
  const country = countryInput.value;
  const athletesByCountry = searchAthletesByCountry(country);
  if (athletesByCountry.length > 0){
    const athletesTable = buildTable(athletesByCountry);
    const tableBody = document.getElementById("tableCountries");
    tableBody.innerHTML = athletesTable;
  }
}

function buildTable(data) {
  let suma="";

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

function showTable(){
  const tableBody = document.getElementById("tableCountries");
  // for(const country of  listCountries1){
  tableBody.innerHTML += buildTable(listCountries1)
  //}
  // tableBody.appendChild(rows);
  console.log("después del for", tableBody)

}
showTable(listCountries);

//la ejecución antes de la definición
// showCountries.addEventListener("click", buildTable(listCountries));
