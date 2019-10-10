'use strict'

//JSON

var pelicula ={
  title: "Batman",
  year:2017,
  country: "Estados Unidos"
}

// para acceder
// console.log(pelicula)

// para acceder a título
// console.log(pelicula.title)

//para cambiar
// console.log(pelicula.year = 2019)

var peliculas = [
  {title: "El rey león", year:2019, pais:"Estados Unidos"},
  pelicula
]

console.log(peliculas)



var caja_peliculas = document.querySelector("#peliculas")

var index;
console.log(index)

for(index in peliculas){
  var p = document.createElement("p");
  p.append(peliculas[index].title + peliculas[index].year);
  caja_peliculas.append(p)
}
