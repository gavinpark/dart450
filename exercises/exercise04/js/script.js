/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  $(".futureImages").hide();
  $("#finalImage").hide();
  $("#finalWords").hide();

  $("#futureLooks").click(function(){
    $(".futureImages").show();
    setTimeout (function(){
      $("#finalImage").fadeIn(4000);
    },6000)
    setTimeout (function(){
      $("#finalWords").fadeIn(4000);
    },7000)

    });

  setInterval(function() {
    $('.futureImages').each(function(){
      var randomX = Math.random() * $(window).width();
      var randomY = Math.random() * $(window).height();
      $(this).css({
        position: 'absolute',
        top: randomY,
        left: randomX
      });
    });
  }, 1500);




});
