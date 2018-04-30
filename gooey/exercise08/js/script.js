/*

DART 450, Winter 2018
Final Project - gooey
Gavin Park

*/

var lastScrollY = 0;
var lastScrollAmount = 0;

$(document).ready(function () {

  setInterval(function () {
    // This takes the current location, subtracts the previous location and provides a value
    lastScrollAmount = Math.abs(window.scrollY - lastScrollY);

    // This gets the previous location of the scroll on the y axis
    lastScrollY = window.scrollY;
    //this calls the disappear function and animates it over .5 seconds
    disappear();
  },50);

  window.onscroll = function(){
  };

  function disappear() {

    // This pulls the element's current opacity
    var opacity = $('#paragraph').css('opacity');
    // console.log(opacity);

    // This statement checks if the scroll speed is greater than 25 and if the current opacity is 1
    if (lastScrollAmount > 25 && opacity == 1){
      console.log("Animating to 0");
      // If the above is true, the paragraph will fade to opacity 0 over 1 second
      $('#paragraph').animate({
        "opacity": 0,
      }, 100);

      // This statement checks if the scroll speed is less than 25 but the opacity is 0
    } else if (lastScrollAmount <= 25 && opacity == 0) {
      console.log("Animating to 1");
      // If the above is true, the paragraph will fade to 0.01. this is so that the content never actually disappears
      $('#paragraph').css({
        "opacity": 0.01,
      })
      // This function animates the paragraph back to 1 over 3 seconds
      setTimeout (function(){
        $('#paragraph').animate({
          "opacity": 1,
        }, 1500);
      },3000)
    }
  }
});
