/**********************************************

DART 450, Winter 2018
The Grid
Pippin Barr

Adds a grid of divs to the page

**********************************************/

var slowDiv = document.getElementById("appearDiv");
//each div or other html element must be "gotten" using get element by ID
var innerDiv = document.getElementById("innerDiv");
var movX = 0;
var movY = 0;
let opacity = 0;
//global state

//mouse move allows us to track when the mouse is moving, because it is classified as a mouse event we need to make a function so that event listener can recognize it.
function mouseMove() {
  //this increases the opacity every time the function is called, dividing by 100 makes it "readable" as an opacity value.
  opacity = opacity + 1 / 500;

  //to change css in javascript we can use dot notation to access and manipulate the properties of it's id name which we have already "gotten" using get elementById
  slowDiv.style.opacity = opacity + "";
  if (opacity > 1) {
    innerDiv.style.display = "block";
  }
}

document.getElementById("appearDiv").addEventListener("mousemove", mouseMove);
