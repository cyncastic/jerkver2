var setCarousel = function () {

  $('.artwork-conveyor').each(function () {

    var $prev = $('.prev', this),
      $next = $('.next', this),
      $carousel = $('ul', this),
      $seats = $('.artwork-link', this);

    var next = function (el) {
      var e;
      if (el.next().length > 0) {
        e = el.next();
      } else {
        e = $seats.first();
      }
      return e;
    };


    $next.click(function () {
      var el, i, j, new_seat, ref;

      $carousel.removeClass('is-set');

      el = $('.is-ref', $carousel).removeClass('is-ref');
      new_seat = next(el);
      $(new_seat).addClass('is-ref').css('order', 1);

      for (i = j = 2, ref = $seats.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
        new_seat = next(new_seat).css('order', i);
      }

    });


    $prev.click(function () {
      return false;
    });


  });








  var $artworks = $('.artwork-link a');

  $('img', $artworks).load(function () {
    $(this).parent('a').removeClass('loading');
  });

  $artworks.click(function (e) { e.preventDefault(); });


};

// Call on page load
$(document).ready(function () {
  setCarousel();
});