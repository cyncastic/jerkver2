
var inter;

var jerkSlide = function(){
  clearInterval(inter);
  $('.img_holder.fade img:gt(0)').hide();

  inter = setInterval(function () {
    $('.img_holder.fade :first-child').fadeOut()
                                 .next('img')
                                 .fadeIn()
                                 .end()
                                 .appendTo('.img_holder.fade');
  }, 5000); // 4 seconds
  
}

jerkSlide();