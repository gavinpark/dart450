/*

Blast.js template
Pippin Barr


*/

$(document).ready(function() {

  // Calling .blast() to our header01 element and separating the phrase by letter
  $ ('#header01') .blast({
    delimiter: 'character'
  }).mouseover(animateToRandomLocation)
// Calling .blast() to our header02 element and separating the phrase by word
  $ ('#header02') .blast({
    delimiter: 'word'
  }).mouseover(animateFadeIn)
// Calling .blast() to our header03 element and treating the whole phrase as one
  $ ('#header03') .blast({
    delimiter: 'sentance'
  }).mouseover(animateComeUp)

} );

// This function sends each letter to a random location on the page
function animateToRandomLocation () {
  var x = Math.floor(Math.random() * $(window).width());
  var y = Math.floor(Math.random() * $(window).width());

  $(this).css({
    position: 'absolute'
  });

// This animation sends each letter to a random location on the bottom of the page
  $(this).animate({
    bottom: '0'
  }, 2000);

// This animation brings each letter back to the centre of the page
  $(this).animate({
    bottom: '50%'
  }, 4000);

}


function animateFadeIn () {

// This animation fades out each letter over 1.5 seconds
$(this).animate({
  opacity: '0',
}, 1500,)

// This animation fades in each letter after 3 seconds
$(this).animate({
  opacity: '1',
}, 2000);

}

function animateComeUp () {



}
