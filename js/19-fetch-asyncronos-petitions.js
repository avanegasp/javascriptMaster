'use strict'

// fetch
//Permite hacer peticiones ajax más fáciles, es un sustituto de ajax

//ajax
//es una llamada a un servicio REST o un backend que nos devuelve un resultado

// Api rest
// Es un servicio o backend que nos devuelve datos en JSON


// var usuarios = []
//
// fetch('https://jsonplaceholder.typicode.com/users') // esto es una promesa y esta el método then()
// .then(function(data){ //viene con un callback data
//   return data.json() //convierte un objeto que llega a un JSON
//   console.log(usuarios)
// })
//
// .then(function(users){
//  return usuarios = users.data;
//  console.log(usuarios)
// })



var div_usuarios = document.querySelector("#usuarios")
var usuarios =[]
// https://reqres.in/api/users
fetch('https://reqres.in/api/users') // fetch accede a un servicio remoto, hace una petición
.then(data => data.json()) // lo que llegue en data lo convierto a data.json()
.then(users =>{ // data ya tiene el objeto json
  usuarios = users.data; // y guardamos dara en la variable users
  console.log(usuarios)
  console.log(usuarios[1].email)

  usuarios.map((user, i) => {
    let nombre =  document.createElement('h3');
    nombre.innerHTML = i + user.first_name + " " + user.last_name + " " + user.avatar

    div_usuarios.appendChild(nombre)

    document.querySelector(".loading").style.display = 'none';
  })
})
