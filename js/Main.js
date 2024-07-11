/* Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y reporte al final
el porcentaje de personas que son mayores de edad.
Se tienen las siguientes personas: Luis(15), Ana(19), Jose(21), Carmen(17), Rosa(18), Jose(22), Maria(17), 
Luz(19), Rafael(23), Liz(15), Marcos(20) y Leo(16).*/

import Cl_Persona from "./Cl_Persona.js";
import Cl_TodoPersona from "./Cl_TodoPersona.js";

//instanciar el objeto persona
let persona = new Cl_Persona("Luisa", 15);
let persona2 = new Cl_Persona("Ana", 19);
let persona3 = new Cl_Persona("Jose", 21);
let persona4 = new Cl_Persona("Carmen", 17);
let persona5 = new Cl_Persona("Rosa", 18);
let persona6 = new Cl_Persona("Jose", 22);
let persona7 = new Cl_Persona("Maria", 17);
let persona8 = new Cl_Persona("Luz", 19);
let persona9 = new Cl_Persona("Rafael", 23);
let persona10 = new Cl_Persona("Liz", 15);
let persona11 = new Cl_Persona("Marcos", 20);
let persona12 = new Cl_Persona("Leo", 16);

let todoPersona = new Cl_TodoPersona();
todoPersona.procesarPersona(persona);
todoPersona.procesarPersona(persona2);
todoPersona.procesarPersona(persona3);
todoPersona.procesarPersona(persona4);
todoPersona.procesarPersona(persona5);
todoPersona.procesarPersona(persona6);
todoPersona.procesarPersona(persona7);
todoPersona.procesarPersona(persona8);
todoPersona.procesarPersona(persona9);
todoPersona.procesarPersona(persona10);
todoPersona.procesarPersona(persona11);
todoPersona.procesarPersona(persona12);

//salida solicitada
let salida = document.getElementById('Salida');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> Cantidad de personas = ' + todoPersona.devolverContPersonas();
salida.innerHTML += '<br> Cantidad de personas mayor de edad = ' + todoPersona.devolverContMayorEdad();
salida.innerHTML += '<br> Porcentaje de personas mayor de edad = ' + todoPersona.porcentajeMayorEdad().toFixed(2) + "%";