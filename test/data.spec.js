import { searchAthleteByName, searchAthletesByCountry } from "../src/data.js";
import {expect, test} from '@jest/globals';

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(typeof example).toBe('example');
//   });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(typeof anotherExample).toBe('OMG');
//   });
// });



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


//Crear test para casos en que el resultado sea nulo, vacío, números, mayúsculas y minúsculas. 
describe ('Evaluar que searchAthletesByCountry que busque países si está escrito exactamente igual', ()=>{
  const country= "Brazil";
  const result = searchAthletesByCountry(country);
  //const arreglo=athletesData;
  const expected=[{
    "name": "Maurcio Borges Almeida Silva",
    "gender": "M",
    "sport": "Volleyball",
    "team": "Brazil",
    "event": "Volleyball Men's Volleyball",
    "medal": "Gold"
  }]
  it('matches even if received contains additional elements', () => {
    expect(result).toEqual(expect.arrayContaining(expected));
  });
   
})

describe ('Evaluar que searchAthletesByCountry busque países si está escrito con minúsculas', ()=>{
  const country= "brazil";
  const result = searchAthletesByCountry(country);
  
  const expected=[{
    "name": "Maurcio Borges Almeida Silva",
    "gender": "M",
    "sport": "Volleyball",
    "team": "Brazil",
    "event": "Volleyball Men's Volleyball",
    "medal": "Gold"
  }]
  it('matches even if received contains additional elements', () => {
    expect(result).toEqual(expect.arrayContaining(expected));
  });
   
})

describe ('Evaluar que searchAthletesByCountry que busque países si está escrito con mayúsculas', ()=>{
  const country= "BRAZIL";
  const result = searchAthletesByCountry(country);
  
  const expected=[{
    "name": "Maurcio Borges Almeida Silva",
    "gender": "M",
    "sport": "Volleyball",
    "team": "Brazil",
    "event": "Volleyball Men's Volleyball",
    "medal": "Gold"
  }]
  it('matches even if received contains additional elements', () => {
    expect(result).toEqual(expect.arrayContaining(expected));
  });
   
})

describe ('Evaluar que searchAthletesByCountry retorne un objeto vacío si el nombre ingresado no existe (contiene números)', ()=>{
  const country= "Braz1";
  const result = searchAthletesByCountry(country);

  const expected=[]
  it('matches even if received contains additional elements', () => { //preguntar si hay que editar este comentario
    expect(result).toEqual(expect.arrayContaining(expected));
  });
   
})