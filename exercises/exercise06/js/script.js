/*

Blast.js template
Pippin Barr


*/

$(document).ready(function() {


$('#seriousText').blast({
    delimiter: 'character'
  }).mouseover(fadeToPink);

});

function fadeToPink () {
  $(this).animate({
      background-color: 'pink',
  },1000);
}
