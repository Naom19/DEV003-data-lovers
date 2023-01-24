import { searchAthleteByName, searchAthletesByCountry, listPropertiesCountries, searchAthletesByGender } from "../src/data.js";
import { expect, test } from '@jest/globals';


test('La funcion debe retornar un objeto vacio cuando no se proporcione un nombre', () => {
  // preparativos
  const name = null
  // ejecutar el caso de prueba 
  const result = searchAthleteByName(name);
  // validar los resultados 
  expect(result).toEqual({
    "name": "",
    "gender": "",
    "height": "",
    "weight": "",
    "sport": "",
    "team": "",
    "noc": "",
    "age": "",
    "event": "",
    "medal": ""
  })
})

//toContain es una propiedad del objeto resultante del método expect, por eso como lo teníamos antes no funcionaba

test('La funcion debe retornar un objeto con la informacion de Giovanni  cuando se proporcione el nombre de Giovanni Abagnale', () => {
  // preparando el escenario
  const name = 'Giovanni Abagnale'


  // ejecutando la prueba
  const result = searchAthleteByName(name);

  // validando los resultados
  expect(result).toEqual({
    "name": "Giovanni Abagnale",
    "gender": "M",
    "height": "198",
    "weight": "90",
    "sport": "Rowing",
    "team": "Italy",
    "noc": "ITA",
    "age": 21,
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  })

})


//Crear test para cada caso
describe('searchAthletesByCountry', () => {

  it('Evaluar que searchAthletesByCountry busque países si está escrito exactamente igual', () => {
    const country = "Brazil";
    const result = searchAthletesByCountry(country);
    //const arreglo=athletesData;
    const expected = [{
      "name": "Maurcio Borges Almeida Silva",
      "gender": "M",
      "sport": "Volleyball",
      "team": "Brazil",
      "event": "Volleyball Men's Volleyball",
      "medal": "Gold"
    }]
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  it('Evaluar que searchAthletesByCountry busque países si está escrito con minúsculas', () => {
    const country = "brazil";
    const result = searchAthletesByCountry(country);

    const expected = [{
      "name": "Maurcio Borges Almeida Silva",
      "gender": "M",
      "sport": "Volleyball",
      "team": "Brazil",
      "event": "Volleyball Men's Volleyball",
      "medal": "Gold"
    }]
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('Evaluar que searchAthletesByCountry busque países si está escrito con mayúsculas', () => {
    const country = "BRAZIL";
    const result = searchAthletesByCountry(country);

    const expected = [{
      "name": "Maurcio Borges Almeida Silva",
      "gender": "M",
      "sport": "Volleyball",
      "team": "Brazil",
      "event": "Volleyball Men's Volleyball",
      "medal": "Gold"
    }]
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  it('Evaluar que searchAthletesByCountry retorne un objeto vacío si el nombre ingresado no existe (contiene números)', () => { //preguntar si hay que editar este comentario
    const country = "Braz1";
    const result = searchAthletesByCountry(country);
    const expected = []
    expect(result).toEqual(expect.arrayContaining(expected));
  });

})

describe('searchAthletesByGender', () => {
  it('Evaluar que searchAthletesByGender busque género si está escrito en minúsculas', () => {
    const genderAthlete = "f";
    const result = searchAthletesByGender(genderAthlete);
    const expected = [{
      "name": "Denia Caballero Ponce",
      "gender": "F",
      "height": "175",
      "weight": "70",
      "sport": "Athletics",
      "team": "Cuba",
      "noc": "CUB",
      "age": 26,
      "event": "Athletics Women's Discus Throw",
      "medal": "Bronze"
    }]
    expect(result).toEqual(expect.arrayContaining(expected));
  });
})