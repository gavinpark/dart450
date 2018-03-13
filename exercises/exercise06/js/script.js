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
      color: '#DA70D6	',
  },800);
  $(this).css({
    'font-family':'comic sans MS'
  });
  $(this).animate({
    color: 'blue',
  }, 600);

}
