import {listCountries } from "./data.js";

function buildTable(data) {
//   const countryTable = document.getElementById("countryTable");
  const tableBody = document.getElementById("tableCountries");
  console.log(tableBody);
//countryTable.innerHTML = ''; - esto hace que no se muestra la tabla
  for (let i = 0; i < data[20]; i++) {
    // let cou = `country-${i}`
    

    const row = `<tr>
                <td> ${data[i].country}</td>
                <td> ${data[i].name}</td>
                <td> ${data[i].sport}</td>
                <td> ${data[i].event}</td>
                <td> ${data[i].gender}</td>
                <td> ${data[i].medal}</td>
                </tr>`
    tableBody.innerHTML += row;
    tableBody.appendChild(row);
  }
  console.log("después del for", tableBody)
}

buildTable(listCountries);
//la ejecución antes de la definición
// showCountries.addEventListener("click", buildTable(listCountries));