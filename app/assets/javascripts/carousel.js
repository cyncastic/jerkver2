var setCarousel = function () {

  //  Remove the loading image when image is loaded.
  $('.artwork-link img').load(function () {
    $(this).parent('a').removeClass('loading');
  // fix the JQ load problem with cached images
  }).each(function () {
    if (this.complete) {
      $(this).trigger('load');
    }
  });

  // Set the flexbox carousel for each conveyor
  $('.artwork-conveyor').each(function () {

    var $toggle = $('.toggle', this),
      $carousel = $('ul', this),
      $seats = $('.artwork-link', this),
      elTrigger,
      myInterval;

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

    $toggle.hover(
      function () {
        elTrigger = this;
        $(elTrigger).trigger('click');
        myInterval = setInterval(function () {
          $(elTrigger).trigger('click');
        }, 1000);
      },
      function () {
        clearInterval(myInterval);
      }
    );

  });

  // Have the jerkbox load on clicks
  $('.artwork-link a').click(function (e) {
    e.preventDefault();

    var t = document.querySelector('#jerkbox'),
      clone;

    // Populate the src.
    t.content.querySelector('img').src = this.href;
    t.content.querySelector('li.title').textContent    = this.getAttribute('data-title');
    t.content.querySelector('li.year').textContent     = this.getAttribute('data-year');

    if (t.content.querySelector('li.location')) {
      t.content.querySelector('li.location').textContent = this.getAttribute('data-location');
    }
    if (t.content.querySelector('li.size')) {
      t.content.querySelector('li.size').textContent     = this.getAttribute('data-size');
    }
    if (t.content.querySelector('li.medium')) {
      t.content.querySelector('li.medium').textContent   = this.getAttribute('data-medium');
    }

    clone = document.importNode(t.content, true);
    document.body.appendChild(clone);

    document.querySelector('.jerkbox .close').addEventListener('click', function () {
      document.querySelector('.jerkbox').remove();
    }, false);

    $(document).keyup(function (e) {
      // escape key maps to keycode `27`
      if (e.keyCode === 27 && document.querySelector('.jerkbox')) {
        document.querySelector('.jerkbox').remove();
      }
    });

  });


};

// Call on page load
$(document).ready(function () { setCarousel(); });