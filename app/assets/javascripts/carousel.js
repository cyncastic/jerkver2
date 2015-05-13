var setCarousel = function () {

  $('.artwork-conveyor').each(function () {

    var $toggle = $('.toggle', this),
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

    var prev = function (el) {
      var e;
      if (el.prev().length > 0) {
        e = el.prev();
      } else {
        e = $seats.last();
      }
      return e;
    };

    $toggle.click(function () {
      var el, i, j, new_seat, ref;

      el = $('.is-ref', $carousel).removeClass('is-ref');

      if ($(this).hasClass('next')) {
        new_seat = next(el);
        $carousel.removeClass('is-reversing');
      } else {
        new_seat = prev(el);
        $carousel.addClass('is-reversing');
      }

      $(new_seat).addClass('is-ref').css('order', 1);

      for (i = j = 2, ref = $seats.length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
        new_seat = next(new_seat).css('order', i);
      }

      $carousel.removeClass('is-set');
      setTimeout(function () {
        return $carousel.addClass('is-set');
      }, 50);

    });

  });


  var $artworks = $('.artwork-link a');

  $('img', $artworks).load(function () {
    $(this).parent('a').removeClass('loading');
  });

  $artworks.click(function () {
    jerkbox(this);
  });

};

// Call on page load
$(document).ready(function () {
  setCarousel();
});