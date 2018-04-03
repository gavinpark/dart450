/**********************************************

DART 450, Winter 2018
Exercise 08
Gavin Park


**********************************************/

var lastScrollY = 0;
var lastScrollAmount = 0;

$(document).ready(function () {

  setInterval(function () {
    lastScrollAmount = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;
    disappear();

  },50);

  window.onscroll = function(){
    // console.log( checkScrollSpeed() );
    // disappear();
  };


  function disappear() {
    var opacity = $('#paragraph').css('opacity');
    // console.log(opacity);
    // if (opacity == 0 || opacity == 1) {

      if (lastScrollAmount > 25 && opacity == 1){
        console.log("Animating to 0");
        $('#paragraph').animate({
          "opacity": 0,
        }, 100);
      } else if (lastScrollAmount <= 25 && opacity == 0) {
        console.log("Animating to 1");
        $('#paragraph').css({
          "opacity": 0.000000001
        })
        setTimeout (function(){
          $('#paragraph').animate({
            "opacity": 1,
          }, 3300);
        },1000)

      }
  // }
  }
});
