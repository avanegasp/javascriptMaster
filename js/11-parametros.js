'use strict'

// Parametros rest y spread

//rest se escribe con tres puntos suspensivos luego de los parametros
//y te muestra todo lo que va de ahí en adelante en un array
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
  console.log("fruta1:" + fruta1)
  console.log("fruta2:" + fruta2)
  console.log(resto_de_frutas)
  console.log(resto_de_frutas[3]) // en este caso solo me muestra la pera
}

listadoFrutas("mango", "papaya", "banano", "fresa", "naranja", "pera", "coco")

// Spread se escribe como un arreglo y reemplaza cualquier parámetro en mi casa fruta1 y fruta2,
// según lo que yo le pase como un arreglo, pero antes se debe colocar tres puntos ...

var frutas = ["Zapote", "mora", "marañón"]
listadoFrutas(...frutas, "pera", "melón", "coco")
