/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {
  seconds = 10;

  function decreaseTime(){
    document.frm.submit.value=seconds;
    seconds--;
    if(seconds<0){
      document.frm.submit.value='Submit';
      document.frm.submit.disabled=false;
      return true;
    }
    setTimeout('decreaseTime()',1000);
  }

  window.onload = function() {
    document.frm.submit.value=seconds;
    setTimeout('decreaseTime()',1000);
  }


  <form name="frm" action="">
    <input type="submit" name="submit" disabled />
  </form>
});
