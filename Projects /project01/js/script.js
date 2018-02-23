/*

Midterm Project
Gavin Park
02.25.2018

*/

var backgroundFadeTime = 3000;
var currentBackgroundColor = 0;
var backgroundColors = ['#F8F8F8','#F0F0F0','#DCDCDC','#D3D3D3','#C8C8C8','BEBEBE','#B0B0B0','#A8A8A8','#989898','#888888','#787878','#696969','#606060','#505050','#404040','#303030','#202020','#101010'	]

$(document).ready(function() {

//This calls a different colour after each 10 second interval.
  $('body').css({
    backgroundColor: backgroundColors[currentBackgroundColor]
  });
  fadeBackground();
  setInterval(fadeBackground,backgroundFadeTime);

// This lets each header appear at different times of the day.
// For the purposed of editing this code, the times are not currently set.

  $('#header01').hide();

  var now = new Date();
  var hour = now.getHours();
  if(hour>9 && hour<24){
    fallingLetters();
  }

  // $('#header02').hide();
  //
  // var now = new Date();
  // var hour = now.getHours();
  // if(hour>9 && hour<24){
  //   fallingLetters();
  // }
  //
  // $('#header03').hide();
  //
  // var now = new Date();
  // var hour = now.getHours();
  // if(hour>9 && hour<24){
  //   riseFromBelow();
  // }


});


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

// This function shows header03
// function riseFromBelow(){
//   $('#header03').show();
// // Calling .blast() to our header01 element and separating the phare by letter.
//   $('#header03').blast({
//   delimiter:'word'
// }).mouseover(sendToMiddle)
// }
//
// function sendToMiddle(){
//   $(this).css({
//     bottom:0
//   });
// }
