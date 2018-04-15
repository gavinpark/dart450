/**********************************************

DART 450, Winter 2018
Exercise 08
Gavin Park


**********************************************/


$(document).ready(function () {

  // This pulls the current date and time
  var now = new Date();
  var hour = now.getHours();

  if (hour>=23 && hour<24){
    tilt();
  };

  });

function tilt(){
  $('#box').css({
    transform: rotate ("12deg"),
  })
}
