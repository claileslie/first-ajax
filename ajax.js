$(document).ready(function () {
  $('.step_1_button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/' ,
      method: 'GET',
      // data: ,
      dataType: 'text',
    });
  });
  $('.ping').on('click', function() {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
      }).done(function (responseData){
        console.log(responseData)
        $('#step3456').append(responseData)
    });
  });
});
