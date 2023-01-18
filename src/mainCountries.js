import { listCountries, listCountries1, filtroGender } from "./data.js";

function buildTable(data) {
  let suma = "";
  for (let i = 0; i < data.length; i++) {
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
  // for(const country of  listCountries1){
  tableBody.innerHTML += buildTable(listCountries1)
  //}
  // tableBody.appendChild(rows);
}
showTable(listCountries);

//la ejecución antes de la definición























//Función para mostrar el filtro de género

function filterGenderTable(gender) {
  const inputFilterGender=document.getElementById("input_gender");
  inputFilterGender.addEventListener("change", (e) => {
    const medalName = e.target.value;
    const inputFilterGender = filtroGender(medalName)
    buildTable(gender);
    });
}

filterGenderTable();