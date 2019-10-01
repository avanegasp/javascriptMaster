// diferencia entre el let y var

'use strict'

var perro = "Oliva"
console.log(perro)

if(true){
  var perro = "Toby"
  console.log(perro)
}

console.log(perro)

// var, define una variable global, cambia sin importar si esta en un bloque



var dog = "Oliva Vanegas"
console.log(dog)

if(true){
  let dog = "Toby Salazar"
  console.log(dog)
}

console.log(dog)


// let solo cambia a nivel local, tiene un alcance limitado
