/**********************************************

DART 450, Winter 2018
Exercise 08
Gavin Park


**********************************************/


$(document).ready(function () {

// $('p').click(function() {
  setInterval (function(){
    $('p').css({'font-size':fontSize});

    var fontSize = parseInt($(this).css("font-size"));
    fontSize = fontSize + 1 + "px";

}, 3000);
// });



});
