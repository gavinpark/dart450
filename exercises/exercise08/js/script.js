/**********************************************

DART 450, Winter 2018
Exercise 08
Gavin Park


**********************************************/

$(document).ready(function () {

  var checkScrollSpeed = (function(settings){
    settings = settings || {};

    var lastPos, newPos, timer, delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();



// listen to "scroll" event
window.onscroll = function(){
  console.log( checkScrollSpeed() );
  disappear();
};


function disappear() {
  if (checkScrollSpeed()>10){
    $('#paragraph').css({
      "opacity": '0',
    });
  };
}
