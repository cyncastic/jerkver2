$(document).ready(function($) {


  // add a class of 'vowel' to each vowel using regex
  $(".nav-link a").each( function() {
    $(this).html(
      $(this).html().replace(/(a|e|i|o|u)/ig, "<span class='vowel'>$1</span>")
    );
  });


  $(".vowel").each( function() {   

    var myVowel = $(this);

    myVowel.data('width', myVowel.width());

    myVowel.parent().hover( 

      function(){
        if (matchMedia('only screen and (min-width: 408px)').matches) {
          myVowel.width(myVowel.data('width'));
        }
      }, function(){
        myVowel.width(0);
      }
    );

    myVowel.width(0);

  });
  
});