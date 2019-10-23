$('document').ready(function(){

  //load
  //peticion ajax por get e incrustar en un div

  // $('.datos').load('https://reqres.in/')

  //Get y Post

  $('.datos').get('/api/users?page=2')


})
