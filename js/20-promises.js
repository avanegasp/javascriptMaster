'use strict'


var div_usuarios = document.querySelector("#usuarios")
var div_janet = document.querySelector("#janet")


getUsuarios()
.then(data => data.json()) // lo que llegue en data lo convierto a data.json()
.then(users =>{ // data ya tiene el objeto json
  listadoUsuarios(users.data)

  return getJanet()
})

.then(data => data.json())
.then(user => {
  mostrarJanet(user.data)
})

function getUsuarios(){
  return fetch('https://reqres.in/api/users')
}

function getJanet(){
  return fetch('https://reqres.in/api/users/2')
}

function listadoUsuarios(usuarios){
  console.log(usuarios)
  console.log(usuarios[1].email)

  usuarios.map((user, i) => {
    let nombre =  document.createElement('h3');
    nombre.innerHTML = i + user.first_name + " " + user.last_name + " " + user.avatar

    div_usuarios.appendChild(nombre)
    document.querySelector(".loading").style.display = 'none';
  })
}


function mostrarJanet(user){
  let nombre = document.createElement('h4')
  let avatar = document.createElement('img')

  nombre.innerHTML = user.first_name + " " + user.last_name
  avatar.src = user.avatar
  avatar.width = 100

  div_janet.appendChild(nombre)
  div_janet.appendChild(avatar)

}
