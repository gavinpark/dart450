$(document).ready(function () {

  $('.faller').on('mouseover',function () {

    $(this).animate({
      opacity: '0',
      top: '500px'
    },1500,function () {
      $(this).css({
        top: '0px'
      });
      $(this).animate({
        opacity: '1'
      },6000);
    });
  });


});
