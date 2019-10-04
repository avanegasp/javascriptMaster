'use strict'

// Pida 6 números y los ponga en un array


var numeros =[]

do {

  var pedir = prompt("Coloque un número")
  numeros.push(pedir)

} while (pedir != "pare");
numeros.pop()
console.log(numeros)
