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
var backgroundColors = ['#c9532b','#7d6154','#6a7b94','#665b56','#373740','#282D40','#FA6648']

$(document).ready(function () {

  //This sets the starting background colour to the first in the array.
  $('body').css({
    backgroundColor: backgroundColors[currentBackgroundColor]
  });
  fadeBackground();
  setInterval(fadeBackground,backgroundFadeTime);

  // This hides each header until it is called
  $('#header01').hide();

  // This pulls the current date and time
  var now = new Date();
  var hour = now.getHours();
  // This tells each header when it is supposed to appear on the page and calls its function
  // This header will appear between 4pm and midnight
  if(hour>=0 && hour<24){
    dispurse();
  };


});


// This function calls the background colour to change to the next in the array
function fadeBackground(){
  currentBackgroundColor=currentBackgroundColor+1;
  // This tells the function to start back at the first colour when it reaches the end of the array
  if (currentBackgroundColor >= backgroundColors.length){
    currentBackgroundColor = 0;
  }
  // this uses the variables set at the beginning of the script to animate a fade between background colours
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


// This function sends each letter to a random location on the page
function animateToRandomLocation () {
  // This creates a random location on the x axis
  var x = Math.floor(Math.random() * $(window).width());

  // Setting the position to be relative keeps the original position of each letter.
  $(this).css({
    position: 'relative'
  });

  // This animation sends each letter to a random location on the x axis and 1600px from the top over 2.5 seconds
  $(this).animate({
    left: x+'px',
    top:'1300px'
  }, 2500, function(){
    // Once the above function is finished, this animation sends each letter back to its starting location
    $(this).animate({
      top:0,
      left:0,
    }, 30000);
  });
}
