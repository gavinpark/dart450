$(document).ready(function () {
  // All our code goes in here!

  $('.faller').on('mouseover',function () {

    $(this).animate({
      opacity: '0',
      top: '700px'
    },1500,function () {
      $(this).css({
        top: '0px'
      });
      $(this).animate({
        opacity: '1'
      },500);
    });
  });


});
