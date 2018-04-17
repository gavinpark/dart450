/**********************************************

DART 450, Winter 2018
Gavin Park


**********************************************/

function setDate() {
  var getDate = new Date();
  var hourMinute = getDate.getMinutes();
  var dayMinute = getDate.getHours() * 60 + hourMinute;
  console.log("dayMinute ", dayMinute);

  var minuteDegree = dayMinute / 1440 * 360;
  console.log("degree ", minuteDegree);


  document.getElementById("gooeyClock").style.transform = "rotate(" + minuteDegree + "deg)";
}
setInterval(setDate, 1000);
