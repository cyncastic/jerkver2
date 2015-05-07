var setCarousel = function(){


  var $holder   = $('.artwork-holder'),
      $image    = $('.artwork-holder > img'),
      $artworks = $('.artwork-link a'),
      $title    = $('.artwork-title'),
      $size     = $('.artwork-size'),
      $medium   = $('.artwork-medium'),
      $year     = $('.artwork-year');


  $image.load(function() {
    $holder.removeClass('loading');
  });
  $('img', $artworks).load(function() {
    $(this).parent('a').removeClass('loading');
  });

  $artworks.click(function(e) {
    e.preventDefault();

    $holder.addClass('loading');

    $image.attr('src', this.href)
      .load(function() {
        $holder.removeClass('loading');
      });

    $title.text($(this).attr('data-title'));
    $size.text($(this).attr('data-size'));
    $medium.text($(this).attr('data-medium'));
    $year.text($(this).attr('data-year'));

  });



  //Conveyor belt functions
  $('.artwork-conveyor').each(function() {

    var $prev = $('.prev', this),
        $next = $('.next', this),
        $carousel = $('ul', this),
        totalWidth = $carousel.prop('scrollWidth'),
        increment =  $carousel.width() + 24;

    if (totalWidth > increment) { $next.addClass('active'); }

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

  });

};

// Call on page load
$(document).ready(function() {
  setCarousel();
});