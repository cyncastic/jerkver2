var setCarousel = function () {

  var $artworks = $('.artwork-link a');

  $('img', $artworks).load(function () {
    $(this).parent('a').removeClass('loading');
  });

  $artworks.click(function (e) {
    e.preventDefault();
  });

  //Conveyor belt functions
  $('.artwork-conveyor').each(function () {

    var $prev = $('.prev', this),
      $next = $('.next', this),
      $carousel = $('ul', this),
      totalWidth = $carousel.prop('scrollWidth'),
      increment =  $carousel.width() + 24;

    if (totalWidth > increment) { $next.addClass('active'); }

    $prev.click(function () {
      $next.addClass('active');
      if (parseInt($carousel.css('marginLeft'), 10) + increment <= 0) {
        $carousel.css('marginLeft', '+=' + increment);
      } else {
        $carousel.css('marginLeft', 0);
        $prev.removeClass('active');
      }
    });

    $next.click(function () {
      $prev.addClass('active');
      if (parseInt($carousel.css('marginLeft'), 10) - increment > -(totalWidth - increment)) {
        $carousel.css('marginLeft', '-=' + increment);
      } else {
        $carousel.css('marginLeft', -(totalWidth - increment + 24));
        $next.removeClass('active');
      }
    });

  });

};

// Call on page load
$(document).ready(function () {
  setCarousel();
});