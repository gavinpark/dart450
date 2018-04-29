/**********************************************

DART 450, Winter 2018
The Grid
Pippin Barr

Adds a grid of divs to the page

**********************************************/

var slowDiv = document.getElementById("appearDiv01");
//This "gets" the appearDiv02 element using get element by ID
var innerDiv = document.getElementById("appearDiv02");
var movX = 0;
var movY = 0;
let opacity = 0;
//global state

//mouse move allows us to track when the mouse is moving, because it is classified as a mouse event we need to make a function so that event listener can recognize it.
function mouseMove() {
  //this increases the opacity every time the function is called, dividing by 100 makes it "readable" as an opacity value.
  opacity = opacity + 1 / 100;

  //to change css in javascript we can use dot notation to access and manipulate the properties of it's id name which we have already "gotten" using get elementById
  slowDiv.style.opacity = opacity + "";
  if (opacity > 1) {
  innerDiv.style.opacity = 0.05;
}
}

function mouseMove02() {
  //this increases the opacity every time the function is called, dividing by 100 makes it "readable" as an opacity value.
  opacity = opacity + 1 / 200;

  //to change css in javascript we can use dot notation to access and manipulate the properties of it's id name which we have already "gotten" using get elementById
  innerDiv.style.opacity = opacity + "";

}




document.getElementById("appearDiv01").addEventListener("mousemove", mouseMove);
document.getElementById("appearDiv02").addEventListener("mousemove", mouseMove);
