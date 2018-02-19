/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

if ($(window).width() < 400) {
$('body').css({backgroundColor: 'blue'});
}

else if ($(window).width() <600) {
  $('body').css({backgroundColor:'green'});
}
else {
  $('body').css({backgroundColor: 'yellow'});


};

});
