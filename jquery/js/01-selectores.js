$(document).ready(function(){
  console.log("Funcionando")

$("#rojo").css("background", "red")
                       .css("color", "white")
$("#amarillo").css("background", "yellow")
                               .css("color","blue")

// var miClase = $(".zebra")
// miClase.addClass('zebra')

$('.sin_borde').click(function(){
  $(this).addClass('zebra')

  })

  //Selectores de etiqueta

  var parrafos = $('p').css('cursor', 'pointer')

  parrafos.click(function(){
    var that = $(this)
    if (!that.hasClass('grande')) {
      that.addClass('grande')
    }else{
      that.removeClass('grande')
    }
  })

  //Selectores de atributo
  //se utilizan los corchetes

  $('[title = google]').css('background', '#ccc')
  $('[title = facebook]').css('background', 'pink')

  // otros
  // seleccionar varias cosas

  // $('p,a').addClass('margen-superior')

 // var busqueda = $('#caja').find('.resaltado') // o
 var busqueda = $('#caja .resaltado') // sirve cualquiera de las dos formas
 console.log(busqueda)

 var tag_parent = $('#caja .resaltado').parent().parent().find('resaltado') // sirve cualquiera de las dos formas
 console.log(tag_parent)

//focus y blur

var nombre = $("#nombre")

nombre.focus(function(){
  $(this).css("border", "2px solid green")
})

nombre.blur(function(){
  // $(this).css("border", "2px solid transparent")
  $(this).css("border", "2px solid #ccc")
  $(".cajita").text($(this).val()).show()
})

})
