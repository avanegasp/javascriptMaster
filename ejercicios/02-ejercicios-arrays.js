'use strict'

// Pida 6 números y los ponga en un array


var numeros =[]

do {

  var pedir = prompt("Coloque un número")
  numeros.push(pedir)

} while (pedir != "pare");
numeros.pop()
document.write("Estos son los número ingresados: " + "<p>"+numeros+"</p>")
// numeros.sort(function(a, b){
//   console.log("esto es a:" + a + "esto es b:" + b)
//   return a - b

  var busqueda = numeros.findIndex(function(numero){
    if (numero == 4){
      console.log("encontrado en este indice " + busqueda)
    }else{
      console.log("sigue intentando")
    }
  })

  // console.log(busqueda)






  // var busqueda = prompt("escribe número")
  // var posicion = numeros.findIndex(numero => numero == busqueda);
  //
  // if (posicion && posicion != -1) {
  //   console.log("encontrado en la posición: " + posicion)
  // }else{
  //   console.log("no fue encontrado")
  // }
// })
// console.log(numeros)
// console.log(numeros.reverse())
// console.log(numeros.length)

// var busqueda = numeros.some(function(numero){
//   if (numero == 2){
//     console.log("hay un número" + 2)
//   }else{
//     console.log("sigue intentando")
//   }
// })
