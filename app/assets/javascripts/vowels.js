$(document).ready(function($) {
  $(".nav-link a").each( function() {
    $( this ).html(
      $( this ).html().replace(/(a|e|i|o|u)/ig, "<span class='vowel'>$1</span>")

    );
  });
});