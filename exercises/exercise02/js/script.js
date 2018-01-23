$(document).ready(function () {
  // All our code goes in here!

  $('.faller').on('mouseover',function () {

    $(this).animate({
      opacity: '0',
      top: '1000px'
    },1500,function () {
      $(this).css({
        top: '0px'
      });
      $(this).animate({
        opacity: '1'
      },1000);
    });
  });


});
