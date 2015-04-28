
$('.artwork-conveyor').each(function(){


  var $carousel = $('ul', this);
  var increment = $carousel.width() + 24;

  $('.prev', this).click(function(){
    $carousel.css( "marginLeft", "+=" + increment  );
  });

  $('.next', this).click(function(){
    $carousel.css( "marginLeft", "-=" + increment + "px" );
  });

  console.log(increment);

})

// this is all nonsense right now...