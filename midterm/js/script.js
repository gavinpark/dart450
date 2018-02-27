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
var backgroundColors = ['#444F3F','#4A4643','#A37300','#272430','#373740','#282D40','#FA6648']

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
  if(hour>=16 && hour<24){
    dispurse();
  };

  // Same process as above
  $('#header02').hide();

  var now = new Date();
  var hour = now.getHours();
  // This header will appear between 8am and 3pm
  if(hour>=8 && hour<15){
    disappear();
  };

  //same process as above
  $('#header03').hide();

  var now = new Date();
  var hour = now.getHours();
  // This header will appear between midnight and 7am
  if(hour>=0 && hour<7){
    rise();
  }
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

// This puts a span around each word
function disappear(){
  $('#header02').show();
  $('#header02').blast({
    delimiter:'word'
    //This calls the function wordsFadeOut when the cursor rolls over each word
  }).mouseover(wordsFadeOut);
};

// This puts a span around each letter
function rise(){
  $('#header03').show();
  $('#header03').blast({
    delimiter:'character'
    //This calls the function wordsFloat when the cursor rolls over each letter
  }).mouseover(wordsFloat);
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
    top:'1600px'
  }, 2500, function(){
    // Once the above function is finished, this animation sends each letter back to its starting location
    $(this).animate({
      top:0,
      left:0,
    }, 4000);
  });
}


// This function makes each word fade in and out on mouseover
function wordsFadeOut () {
  // This fades to an opactiy of 4% over 2.3 seconds
  $(this).fadeTo(3000,0.04)
  // This fades back to an opacty of 100% over 2 seconds
  $(this).fadeTo(3400,1)
}


// This function makes each letter 'float' on mouseover
function wordsFloat () {
  // Setting the position to be relative keeps the original position of each letter
  $(this).css({
    position:'relative'
  });
  // This animates each letter to 80px above its original position
  $(this).animate({
    top: '-80px'
  });
  // Once the above animation is finished, this animation sends each letter back to its starting location
  $(this).animate({
    top:'0'
  });
}
