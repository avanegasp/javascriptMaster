'use strict'

//Formulario que nos permita añadir películas

var formulario = document.querySelector("#formpeliculas")

formulario.addEventListener('submit', function(){
  console.log("entra")
  var titulo = document.querySelector("#addpelicula").value;

  if (titulo.length >= 1) {
    localStorage.setItem(titulo, titulo)

  }
})

var añadir_peliculas = document.querySelector("#peliculas")

for(var index in localStorage){
  console.log(localStorage[index])

  if(typeof localStorage[index] == 'string') {
    var p = document.createElement("p")
    p.append(localStorage[index])
    añadir_peliculas.append(p)
  }
}

// Borrar peliculas

var formulario = document.querySelector("#formRemovePeliculas")

formulario.addEventListener('submit', function(){
  var titulo = document.querySelector("#removePelicula").value;

  if (titulo.length >= 1) {
    localStorage.removeItem(titulo)

  }
})
