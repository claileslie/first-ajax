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
        console.log("Sweet success!")
        $('#step3456').append(responseData)
      }).fail(function (){
        console.log("Request failed :(")
        $('#step3456').append("your page did not load, I will try harder next time!!")
      }).always(function() {
        console.log("Request complete")
      });
    });
    $('.count').on('click', function(){
      $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function (responseData){
      $('#step7').append(responseData)
    });
  });
    $('.time').on('click', function(){
      $.ajax ({
        url: 'http://first-ajax-api.herokuapp.com/time',
        method: 'GET',
        data: {timezone: 'Pacific/Honolulu'},
        dataType: 'text'
      }).done(function (responseData){
        $('#step8').append(responseData)
      });
    });
    $('.car').on('click', function(){
      $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html',
    }).done(function (responseData){
      $('#car-list').append(responseData)
    });
    });

});
