$('.img_holder img:gt(0)').hide();

setInterval(function () {
  $('.img_holder :first-child').fadeOut()
                               .next('img')
                               .fadeIn()
                               .end()
                               .appendTo('.img_holder');
}, 6000); // 4 seconds