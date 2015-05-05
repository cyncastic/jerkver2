// Call on page load
$(document).ready(function() {
  setCarousel();
});

var setCarousel = function(){

  $('.artwork-conveyor').each(function() {

    var $prev = $('.prev', this),
        $next = $('.next', this),
        $carousel = $('ul', this),
        totalWidth = $carousel.prop('scrollWidth'),
        increment =  $carousel.width() + 24;

    if(totalWidth > increment){
      $next.addClass('active');
    }

    $prev.click(function() {
      $next.addClass('active');
      if ( parseInt($carousel.css('marginLeft')) + increment <= 0) {
        $carousel.css('marginLeft', '+=' + increment);
      } else {
        $carousel.css('marginLeft', 0);
        $prev.removeClass('active');
      }
    });

    $next.click(function() {

      $prev.addClass('active');

      if (parseInt($carousel.css('marginLeft')) - increment > -(totalWidth - increment)) {
        $carousel.css('marginLeft', '-=' + increment);
      } else {
        $carousel.css('marginLeft', -(totalWidth - increment + 24));
        $next.removeClass('active');
      }
      
    });

  })

}






