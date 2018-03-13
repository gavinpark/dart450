/**********************************************

DART 450, Winter 2018
Name Rememberer
Pippin Barr

Allows the user to type their name into an input and then
have the page remember their name from then on, even when
they leave and come back...

**********************************************/

$(document).ready(function () {


  // In order to collect the user's phrase we listen for a click
  // on the name input button
  $('#submitName').on('click', function() {
    // When they click, we save the value in th input field into a variable
    var inputName = $('#nameInput').val();
    // And we update the welcome message to reflect their name
    $('#welcomeMessage').text(inputName);
  });


});
