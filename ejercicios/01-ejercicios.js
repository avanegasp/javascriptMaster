'use strict'

/* programa que pida dos números y que nos diga cual es el mayor,
 menor y si son iguales
*/


// var num1 = prompt("Escribe un número uno")
// var num2 = prompt("Escribe un número dos")
//
// if (num1 > num2 ) {
//   console.log(num1 + " Es mayor a " + num2)
// }else if (num1 < num2) {
//   console.log(num1 + " Es menor a " + num2)
// }else {
//   console.log(num1 + " Es igual a " + num2)
// }


/* Programa para buscar el número*/

// var numero1 = prompt("Escribe el número")
// var numero2 = Math.floor(Math.random() * 6)
// console.log(numero2)

// do {
//   console.log("sigue intentando")
//   var numero1 = prompt("Escribe el número")
// } while (numero1 != numero2)


/*Si los números no son un número o son menores o iguales a 0 nos vuelva a pedir*/

// var num = prompt("Escribe un número")
//
// while (num <=0 || isNaN(num)) {
//   num = prompt("Escribe un número")
// }



/*Sumar dos números, mostrar la media, la suma */

// var suma = 0;
// var contador = 0;
//
//
// do {
//   var num = parseInt(prompt("Escribe número uno"))
//
// if (isNaN(num)) {
//     num = 0;
// }else if (num >= 0) {
//   suma = suma + num;
//
//   contador++;
// }
//
// console.log(suma)
// console.log(contador)
//
// } while (num >= 0);
//
// alert("la suma es :" + (suma))
// alert("la media es :" + (suma/contador))


/*Hacer un programa que me muestre los números que hay entre dos números que he pedido*/



//   var num1 = prompt("Escribe un número 1")
//   var num2 = prompt("Escribe un número 2")
//
// for (var i = num1; i <= num2; i++) {
//   console.log(i)
// }


/*Mostrar todos los números impares entre dos números*/

//   var num1 = prompt("Escribe un número 1")
//   var num2 = prompt("Escribe un número 2")
//
// while (num1 < num2) {
//   num1++
//
//   if (num1 % 2 != 0 ) {
//     console.log("Es número ímpar" + num1)
//   }
// }



/*decir si un número es par o impar*/

// var num = prompt("Escriba su número")
//
//
// if (num % 2 != 0) {
//   console.log("Este número es impar" + num)
// }else{
//   console.log("Este número es par" + num)
// }


/*Tabla de multiplicar*/

var num = prompt("Que número quiere multiplicar")


for (var i = 1; i <= 10; i++) {
  console.log(i + "x" + num + " es igual a " + num * i)
}
