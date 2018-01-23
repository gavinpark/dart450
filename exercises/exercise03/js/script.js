/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

  // Insert jQuery code here to run when the page is loaded
  var counter = 0; 
  var updateInterval = 1000;  
  setInterval(function () { 
    counter = counter + 1;
    $('#counter').text(counter);
   },updateInterval);
});
