
var inter;

var jerkSlide = function(){
  clearInterval(inter);
  $('.img_holder img:gt(0)').hide();

  inter = setInterval(function () {
    $('.img_holder :first-child').fadeOut()
                                 .next('img')
                                 .fadeIn()
                                 .end()
                                 .appendTo('.img_holder');
  }, 5000); // 4 seconds
  
}

jerkSlide();