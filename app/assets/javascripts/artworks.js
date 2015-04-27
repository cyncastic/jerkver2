$(document).ready(function($) {

  var $mainImg = $('.artwork-holder > img');

  $('.artwork-conveyor a').click( function(){
    event.preventDefault();
    $mainImg.attr('src', this.href);
    console.log(this.href);
  });



});