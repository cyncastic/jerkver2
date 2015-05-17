var setCarousel = function () {

  // Set the flexbox carousel for each conveyor
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

  //  Remove the loading image when image is loaded.
  $('.artwork-link img').load(function () {
    $(this).parent('a').removeClass('loading');
  }).each(function () {
    if (this.complete) {
      $(this).trigger('load');
    }
  });

  //
  $('.artwork-link a').click(function (e) {
    e.preventDefault();

    var t = document.querySelector('#jerkbox');

    // Populate the src.
    t.content.querySelector('img').src = this.href;
    t.content.querySelector('li.title').textContent  = this.getAttribute('data-title');
    t.content.querySelector('li.size').textContent   = this.getAttribute('data-size');
    t.content.querySelector('li.year').textContent   = this.getAttribute('data-year');
    t.content.querySelector('li.medium').textContent = this.getAttribute('data-medium');

    var clone = document.importNode(t.content, true);
    document.body.appendChild(clone);

    t.content.querySelector('.jerkbox').addEventListener('click', function () {
      console.log('adf');
      document.querySelector('.jerkbox').remove();
    }, false);

    $(document).keyup(function (e) {
      // escape key maps to keycode `27`
      if (e.keyCode === 27) {
        document.querySelector('.jerkbox') && document.querySelector('.jerkbox').remove();
      }
    });

  });

};

// Call on page load
$(document).ready(function () {
  setCarousel();
});