$(document).ready(function($) {

  var $navLinks = $(".nav-link a");

  // add a class of 'vowel' to each vowel using regex
  $navLinks.each( function() {
    $(this).html( $(this).html().replace(/(a|e|i|o|u)/ig, "<span class='vowel'>$1</span>") );
  });

  // capture the width of each vowel
  $(".vowel").each( function() { 
    $(this).attr('data-width', $(this).width());
  });

  $navLinks.hover( 
    function(){
      $('.vowel', this).each( function(){ 
        $(this).width($(this).attr('data-width'));
      });
    }, 
    function(){
      if (!$(this).hasClass('current')) {
        $('.vowel', this).width(0);
      }
    }
  );

  $navLinks.click( function(){
    $navLinks.removeClass('current');
    $(this).addClass('current');
    $(".vowel", ".nav-link a:not('.current')").width(0);
  });

  $(".vowel", ".nav-link a:not('.current')").width(0);

});