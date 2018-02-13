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
