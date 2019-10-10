'use strict'
console.log("storage")
// localStorage
// memoria que tenemos en nuestro navegador guardada

//comprobar que el navegador es Compatible, si existe.

if(typeof(Storage) !== 'undefined') {
  console.log("disponible")
}else{
  console.log("no disponible")
}

//como guardar datos en el navegador en el local Storage
localStorage.setItem("title", "Este es el título")
//y lo veo en la consola, en la parte de application en storage/localStorage/file


// Recuperar un elemento de localStorage
console.log(localStorage.getItem("title"))

// Incluirlo en mi página web
document.querySelector("#peliculas").innerHTML = localStorage.getItem("title")

//Guardar Objetos

var usuario ={
  name: "Angie",
  email: "arco527@gmail.com",
  web:  "angie.com"
}

localStorage.setItem("user", usuario) // debo convertir mi objeto a un jsonString

localStorage.setItem("user", JSON.stringify(usuario))

// Recuperar objeto del localStorage

var userjs = JSON.parse(localStorage.getItem("user")) //convierte mi objetoJson en algo usable en JS
console.log(userjs)

document.querySelector("#peliculas").append(usuario.name + usuario.web + usuario.email)


//Borrar del localStorage

localStorage.removeItem("usuario")

// Vaciar todo el localStorage

// localStorage.clear(;)
