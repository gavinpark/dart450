/**********************************************

DART 450, Winter 2018
Midterm Project
Gavin Park

Description of what the script does...

**********************************************/
type="text/javascript"

var backgroundFadeTime = 30000;
var currentBackgroundColor = 0;
var backgroundColors = ['#D29B24','#E9809F','#202344','#0E3D29','#797EB3','#E5B30']

$(document).ready(function () {

  //This calls a different colour after each 10 second interval.
  $('body').css({
    backgroundColor: backgroundColors[currentBackgroundColor]
  });
  fadeBackground();
  setInterval(fadeBackground,backgroundFadeTime);

  // Insert jQuery code here to run when the page is loaded
  // This puts a span around each letter
  $('#header01').blast({
    delimiter:'character'
    //This calls the function animateToRandomLocation when the cursor rolls over each letter
  }).mouseover(animateToRandomLocation);

  // This puts a span around each word
  $('#header02').blast({
    delimiter:'word'
  }).mouseover(wordsFadeOut);

  $('#header03').blast({
    delimiter:'character'
  }).mouseover(wordsFloat);

});

function fadeBackground(){
  currentBackgroundColor=currentBackgroundColor+1;
  if (currentBackgroundColor >= backgroundColors.length){
    currentBackgroundColor = 0;
  }
  $('body').animate({
    backgroundColor:backgroundColors[currentBackgroundColor]
  },backgroundFadeTime)
}

function animateToRandomLocation () {
  var x = Math.floor(Math.random() * $(window).width());

  // Setting the position to be relative keeps the original position of each letter.
  $(this).css({
    position: 'relative'
  });

  // This animation sends each letter to a random location on the bottom of the page
  $(this).animate({
    left: x+'px',
    top:'1600px'
  }, 2500, function(){
    $(this).animate({
      top:0,
      left:0,
    }, 4000);
  });
}

function wordsFadeOut () {
  $(this).fadeTo(1800,0.04)
  $(this).fadeTo(18000,1)
}

function wordsFloat () {
  $(this).css({
    position:'relative'
  });
  $(this).animate({
    top: '-80px'
  });
  $(this).animate({
    top:'0'
  });
}
