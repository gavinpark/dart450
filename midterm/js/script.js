/**********************************************

DART 450, Winter 2018
Midterm Project
Gavin Park

Description of what the script does...

**********************************************/
type="text/javascript"

// This sets how long between each colour transition
var backgroundFadeTime = 30000;
// This sets the initial background colour in the array
var currentBackgroundColor = 0;
// This is the array of colours that will appear in the background
var backgroundColors = ['#D29B24','#E9809F','#202344','#0E3D29','#797EB3','#E5B30']

$(document).ready(function () {

  //This sets the starting background colour to the first in the array.
  $('body').css({
    backgroundColor: backgroundColors[currentBackgroundColor]
  });
  fadeBackground();
  setInterval(fadeBackground,backgroundFadeTime);

// PRIMARY FUNCTIONS //

  $('#header01').hide();

var now = new Date();
var hour = now.getHours();
if(hour>=0 && hour<20){
  dispurse();
};

$('#header02').hide();

var now = new Date();
var hour = now.getHours();
if(hour>=0 && hour<20){
disappear();
};

$('#header03').hide();

var now = new Date();
var hour = now.getHours();
if(hour>=0 && hour<20){
rise();
}








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

// This puts a span around each letter
function dispurse(){
$('#header01').show();
$('#header01').blast({
  delimiter:'character'
  //This calls the function animateToRandomLocation when the cursor rolls over each letter
}).mouseover(animateToRandomLocation);
};

function disappear(){
$('#header02').show();
$('#header02').blast({
  delimiter:'word'
}).mouseover(wordsFadeOut);
};


  function rise(){
  $('#header03').show();
  $('#header03').blast({
    delimiter:'character'
  }).mouseover(wordsFloat);
};

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
  $(this).fadeTo(2000,0.04)
  $(this).fadeTo(1600,1)
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
