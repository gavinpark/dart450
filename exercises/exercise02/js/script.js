$(document).ready(function () {

  $('.faller').on('mouseover',function () {

    $(this).animate({
      opacity: '0',
      top: '600px'
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
