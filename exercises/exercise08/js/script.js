/**********************************************

DART 450, Winter 2018
Waypoints
Pippin Barr

Basic example of using the Waypoints scrolling library

Uses:

Waypoints
http://imakewebthings.com/waypoints

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
};
});
