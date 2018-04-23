/**********************************************

DART 450, Winter 2018
Exercise 08
Gavin Park


**********************************************/
// This variable represents where on the Y axis the scroll is
var lastScrollY = 0;
// This variable represents the distance between the last location and current
var lastScrollAmount = 0;

$(document).ready(function () {

// This function checks for the current and last scroll location and calls the disappear funciton (over 50 milliseconds)
  setInterval(function () {
    lastScrollAmount = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;
    disappear();
  },50);

  window.onscroll = function(){
  };

  function disappear() {
    // This variable represents the paragraph's opacity
    var opacity = $('#paragraph').css('opacity');
    // console.log(opacity);

    // This statement checks if the scroll amount is above or below 25
    if (lastScrollAmount > 25 && opacity == 1){
      console.log("Animating to 0");
      // This animates the paragraph to 0 over 100 milliseconds if scroll amount is too high
      $('#paragraph').animate({
        "opacity": 0,
      }, 100);
    }
    // This statement checks if the scroll amount is 0 it (nearly) invisible  
    else if (lastScrollAmount <= 25 && opacity == 0) {
      console.log("Animating to 1");
      $('#paragraph').css({
        "opacity": 0.01,
      })
      setTimeout (function(){
        $('#paragraph').animate({
          "opacity": 1,
        }, 1500);
      },1000)
    }
  }

  function noscroll() {
  window.scrollTo(0,0);
  }
 window.addEventListener('scroll', noscroll);
});
