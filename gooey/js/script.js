/**********************************************

DART 450, Winter 2018
Gavin Park


**********************************************/

$(document).ready(function () {

  $('body').show();
  setDate();
  // This checks the time every second
  setInterval(setDate, 1000);

});



function setDate() {
  // This creates a variable to get the entire date
  var getDate = new Date();
  // This creates a variable that tells us the current minute (of the current hour)
  var hourMinute = getDate.getMinutes();
  // This creates a variable that calculates the minute of the entire day
  var dayMinute = getDate.getHours() * 60 + hourMinute;
  console.log("dayMinute ", dayMinute);

  // var daySeconds = dayMinute * 60 + getDate.getSeconds();

  // This creates a variable that turns the minute into a degree
  var minuteDegree = dayMinute / 1440 * 360;

  // console.log("degree ", secondDegree);

  // This pulls the div gooeyClock and changes the rotation to the degree that corresponds with the current minute
  document.getElementById("gooeyClock").style.transform = "rotate(" + minuteDegree + "deg)";
  // document.getElementById("gooeyClock").style.transform = "rotate(" + secondDegree + "deg)";
}
