/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  if ($(window).width() < 200) {
    $('body').css({ backgroundColor: 'red' });
  }
  else if ($(window).width() < 400) {
    $('body').css({ backgroundColor: 'yellow' });
  }
  else if ($(window).width() < 600) {
    $('body').css({ backgroundColor: 'green' });
  }
  else if ($(window).width() < 800) {
    $('body').css({ backgroundColor: 'blue' });
  }
  else {
    $('body').css({ backgroundColor: 'orange' });
  }

});
