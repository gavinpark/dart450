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
      font-color: 'pink',
  },1000);
}
