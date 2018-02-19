/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

var MAX_TIME = 60;

var buttonCanBeClicked = false;
var time = MAX_TIME;
var goodDogs = 0;

$(document).ready(function () {

<<<<<<< HEAD
<<<<<<< HEAD
  // Insert jQuery code here to run when the page is loaded
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
=======
=======
>>>>>>> 0cf53446c73439330f3271ff8c3f04278b82a2f6
  $('#goodDogs').text(goodDogs);

  setInterval(tick,1000);

  $('button').click(function() {
    if (!buttonCanBeClicked) {
      $('#message').text("Greedy dog!");
    }

    else {
      $('#message').text("Good dog.");
      goodDogs = goodDogs + 1;
      $('#goodDogs').text(goodDogs);
      resetTimer();

    }
  });
<<<<<<< HEAD
>>>>>>> 0cf53446c73439330f3271ff8c3f04278b82a2f6
=======
>>>>>>> 0cf53446c73439330f3271ff8c3f04278b82a2f6
});

function tick() {
  time = time - 1;
  $('#time').text(time);
  if (time <= 10) {
    buttonCanBeClicked = true;

  }
  if (time == 0) {
    $('#message').text("Bad dog.");
    resetTimer();
  }
}

function resetTimer() {
  time = MAX_TIME;
  buttonCanBeClicked = false;
}
