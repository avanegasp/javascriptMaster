$('document').ready(function(){

  //load
  //peticion ajax por get e incrustar en un div

  // $('.datos').load('https://reqres.in/')

  //Get

  // $.get("https://reqres.in/api/users", {page: 2}, function(response){
  //   console.log(response)
  //   response.data.forEach((element, index) => {
  //     console.log(element)
  //     $('.datos').append("<p>" + element.first_name + element.last_name + "</p>")
  //   })
  // })


  //Post


  $('#formulario').submit(function(e){
    e.preventDefault()
    var user = {
      name:$('input[name="name"]').val(),
      age: $('input[name="age"]').val()
    }

    $.post($(this).attr("action"), user , function(response){
      console.log(response)
      // $('.datos').append("<p>" + user.name + " "  + user.age + "</p>")
    }).done(function(){
      alert("usuario añadido correctamente")
    })

    $.ajax({
      type:'POST',
      url:$(this).attr("action"),
      data: user,
      beforeSend: function(){
        console.log("Envíando usuario...")
      },
      success: function(response){
        console.log(response)
      },
      error: function(){
        console.log("A ocurrido un error")
      },
      timeout:1000
    })
    return false;
  })
})
