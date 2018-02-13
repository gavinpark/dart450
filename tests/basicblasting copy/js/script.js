/*

Basic Blasting
Pippin Barr

Some examples of the basics of the Blast plugin. Essentially changing the
styling of characters/words/sentences.

*/

$(document).ready(function() {

$ ('#blastbyword') .blast({
  delimiter: 'word'
}).mouseover(animateToRandomLocation)

} );

function animateToRandomLocation () {
  var x = Math.floor(Math.random() * $(window).width());
  var y = Math.floor(Math.random() * $(window).width());

  $(this).css({
    position: 'absolute'
  });

  $(this).animate({
    bottom: 0
  });
}
