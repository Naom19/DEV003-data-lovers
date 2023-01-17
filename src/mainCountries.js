import {listCountries, listCountries1 } from "./data.js";

function buildTable(data) {
  let suma="";
  for (let i = 0; i < 20; i++) {
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
// console.log(listCountries1);
// buildTable(listCountries1);

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