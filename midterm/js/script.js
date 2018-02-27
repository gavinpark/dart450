/**********************************************

DART 450, Winter 2018
Midterm Project
Gavin Park

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded

  $('#header01').blast({
    delimiter:'character'
  }).mouseover(animateToRandomLocation)

  $("#header02").click(function(){
          $("#header02").fadeTo(1000, 0.4);
      });

});

function animateToRandomLocation () {
  var x = Math.floor(Math.random() * $(window).width());

  // Setting the position to be relative keeps the original position of each letter.
  $(this).css({
    position: 'relative'
  });

  // This animation sends each letter to a random location on the bottom of the page
  $(this).animate({
    left: x+'px',
    top:'2000px'
  }, 3000, function(){
    $(this).animate({
      top:0,
      left:0,
    }, 4000);
  });
}
