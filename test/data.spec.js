//import { example, anotherExample } from '../src/data.js';

//describe('example', () => {
  //it('is a function', () => {
    //expect(typeof example).toBe('function');
  // });

  // it('returns `example`', () => {
    // expect(example()).toBe('example');
  // });
// });

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
import {searchAthleteByName} from "../src/data.js";

test('La funcion debe retornar un objeto vacio cuando no se proporcie un nombre',() => {
  // preparativos
  const name = null

  // ejecutar el caso de prueba 
  const result = searchAthleteByName(name);


  // validar los resultados 
  expect(result).toEqual({"name": "",
    "gender": "",
    "height": "",
    "weight": "",
    "sport": "",
    "team": "",
    "noc": "",
    "age": "",
    "event": "",
    "medal": ""})


})

//toContain es una propiedad del objeto resultante del método expect, por eso como lo teníamos antes no funcionaba

test('La funcion debe retornar un objeto con la informacion de Giovanni  cuando se proporcien el nombre de Giovanni Abagnale',() => {
  // preparando el escenario
  const name = 'Giovanni Abagnale'
  

  // ejecutando la prueba
  const result = searchAthleteByName(name);

  // validando los resultados
  expect(result).toEqual( {
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

// test('searchAthleteByName', searchAthleteByName, () => {

//   const athlete = ["name",
//     "gender",
//     "height",
//     "weight",
//     "sport",
//     "team",
//     "noc",
//     "age",
//     "event",
//     "medal"];
//   it ('it returns athlete information', () => {
//     // const x = expect(athlete)
//     // x.toContain('name')
//     expect(athlete).toContain('name');
//   })
// });
