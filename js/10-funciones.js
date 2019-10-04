'use strict'

// Funciones

// function calculadora(num1, num2){
//   console.log("suma: " + (num1 + num2))
//   console.log("multiplicación: " + (num1 * num2))
//   console.log("división: " + (num1 / num2))
//   console.log("resta: " + (num1 - num2))
// }
//
//
//
// for (var i = 0; i < 10; i++) {
//  console.log(calculadora(i,8))
// }


// funciones anidadas

// function porConsola(nombre, apellido){
//   console.log("Me llamo " + nombre + apellido )
// }
//
// function porPantalla(nombre, apellido){
//   document.write("Mi perr@ se llama " + perro + " y es de raza " + raza)
// }
//
//
// function result(nombre, apellido, raza = true){
//   if (raza == true) {
//     porConsola(nombre, apellido)
//   }else{
//     porPantalla(nombre, apellido)
//   }
// }
//
// result("oliva", "vanegas", true)
// result("toby", "salazar")


// funciones anónimas, es una función que no tiene nombre

// var pelicula = function(nombre){
//   console.log("Mi película favorita es " + nombre)
// }
//
// pelicula("Brave")


// callbacks, es una función que se realiza dentro de otra
// es una función anónima que se le pasa como parámetro

// function sumame(num1, num2, division, multiplicacion){
//   var sumar = num1 + num2
//   console.log(sumar)
//
//   division(sumar)
//   multiplicacion(sumar)
// }
//
// sumame(1,2,function(dato){
//   console.log("La suma es: " + dato)
// }, function(dato){
//   console.log("La multiplicación es " + dato*3)
// });
