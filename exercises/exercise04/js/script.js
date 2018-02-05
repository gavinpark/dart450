/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

      $(".futureImages").hide();

      $("#futureLooks").click(function(){
          $(".futureImages").show();
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
