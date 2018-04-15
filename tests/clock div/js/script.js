/**********************************************

DART 450, Winter 2018
Exercise 08
Gavin Park


**********************************************/


$(document).ready(function () {

  var rotation = 0;
  var now = new Date();
  var hour = now.getHours();

  jQuery.fn.wrapper = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                   '-moz-transform' : 'rotate('+ degrees +'deg)',
                   '-ms-transform' : 'rotate('+ degrees +'deg)',
                   'transform' : 'rotate('+ degrees +'deg)'});
  };

  $('.wrapper').click(function() {
      if (hour>=23 && hour>24){}
      rotation += 5;
      $(this).wrapper(rotation);
  });
});
// function getTime(){
//   $
// }
//   });
