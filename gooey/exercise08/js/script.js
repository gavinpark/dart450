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
  };


  function disappear() {
    var opacity = $('#paragraph').css('opacity');
    // console.log(opacity);

    if (lastScrollAmount > 25 && opacity == 1){
      console.log("Animating to 0");
      $('#paragraph').animate({
        "opacity": 0,
      }, 100);
    }

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
