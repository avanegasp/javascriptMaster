'use stict'

// array : Colección de varios datos agrupados

// var lenguajes = ["ruby", "css", "js", "phyton", "php"]


//forEach

// lenguajes.forEach(function(lenguaje){
//   console.log(lenguaje)
// })

// Tambien se puede

// lenguajes.forEach(function(lenguaje, index, arr){
//   console.log(arr)
//   document.write("<li>"+index + "-" + lenguaje)
// })


//Arrays multidimensional
//son arrays dentro de otro array

// var categorias = ["terror", "comedia", "drama", "acción", "suspenso"]
// var peliculas = ["It", "yesterday", "forrest"]
//
// var cine = [categorias, peliculas]
//
// console.log(cine)
// console.log(cine[0][0])



//push: añades un elemento al arrays

// var elemento = "";
// var peliculas = []
//
//
// do {
//   elemento = prompt("Ingresa una película")
//   peliculas.push(elemento)
// } while (elemento != "oliva");
//
// console.log(peliculas)
// peliculas.pop()
// console.log(peliculas)
//pop : saca el último elemento

//join: convierte un array en un string

// var peli_string = peliculas.join()
// console.log(peli_string)


//SPLIT
//Una cadena de texto se convierte en un string

// var cadena = "texto1, text2, text3"
// var cadena_array = cadena.split(", ")
//
// console.log(cadena_array)


//ORDENAR UN ARRAY
//sort

// var lenguajes = ["ruby", "css", "js", "phyton", "php"]
// lenguajes.sort()

//orden inverso
// lenguajes.reverse()


// RECORRER UN ELEMENTO
// var lenguajes = ["ruby", "css", "js", "phyton", "php"]
//
// for(let lenguaje in lenguajes){
//   console.log("Estos son mis lenguajes" + lenguajes[lenguaje])
// }

//BUSQUEDA EN UN ARRAY
//find

// var lenguajes = ["ruby", "css", "js", "phyton", "php"]
//
// var busqueda = lenguajes.find(function(lenguaje){
//   return lenguaje == "ruby"
// })
//
// console.log(busqueda)

//SOME
//te busca una condición concreta

var precios = [20, 12, 55, 33]

var busqueda = precios.some(function(precio){
  return precio > 55
})

console.log(busqueda)
