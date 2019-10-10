'use strict'

var boton = document.querySelector('#start')

function cambiaColor(){
  console.log("entró")
  var bg = boton.style.background;

  if (bg == "orange") {
    boton.style.background = "red"
  }else{
    boton.style.background = "orange"
  }
  // return true
}


//click
boton.addEventListener('click', function(){
  cambiaColor()
  // boton.style.border = "12px solid yellow"
  this.style.border = "12px solid yellow"
})

// this hace referencia al objeto al cúal estoy haciendo click
