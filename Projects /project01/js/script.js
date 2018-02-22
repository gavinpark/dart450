/*

Midterm Project
Gavin Park
02.25.2018

*/

var backgroundFadeTime = 1000;
var currentBackgroundColor = 0;
var backgroundColors = {}

$(document).ready(function() {

//This calls a different colour after each 10 second interval.
  $('body').css({
    backgroundColor: backgroundColors[currentBackgroundColor]
  });
  fadeBackground();
  setInterval(fadeBackground,backgroundFadeTime);

// This lets each header appear at different times of the day.
  $('#header01').hide();

  var now = new Date();
  var hour = now.getHours();
  if(hour>10 && hour<15){
    fallingLetters();
  }
});

// // Calling .blast() to our header02 element and separating the phrase by word
//   $ ('#header02') .blast({
//     delimiter: 'word'
//   }).mouseover(animateFadeIn)
// // Calling .blast() to our header03 element and treating the whole phrase as one
//   $ ('#header03') .blast({
//     delimiter: 'sentance'
//   }).mouseover(animateComeUp)
//
// } );



function fallingLetters(){
  $('#header01').show();
// Calling .blast() to our header01 element and separating the phare by letter.
$('#header01').blast({
  delimiter:'character'
}).mouseover(animateToRandomLocation)
}

function fadeBackground(){
  currentBackgroundColor=currentBackgroundColor+1;
  if (currentBackgroundColor >= backgroundColors.length){
    currentBackgroundColor = 0;
  }
  $('body').animate({
    backgroundColor:backgroundColors[currentBackgroundColor]
  },backgroundFadeTime)
}

// This function sends each letter to a random location on the page
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


// function animateFadeIn () {
//
// // This animation fades out each letter over 1.5 seconds
// $(this).animate({
//   opacity: '0',
// }, 1500,)
//
// // This animation fades in each letter after 3 seconds
// $(this).animate({
//   opacity: '1',
// }, 2000);
//
// }
//
// function animateComeUp () {
//
//
//
// }
