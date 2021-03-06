/*

DART 450, Winter 2018
Final Project - gooey
Gavin Park

*/

// This "gets" the appearDiv01 element using get element by ID
var appearDiv01 = document.getElementById("appearDiv01");
// This "gets" the appearDiv02 element using get element by ID
var appearDiv02 = document.getElementById("appearDiv02");
var movX = 0;
var movY = 0;
let opacity = 0;

// mouseMove allows us to track when the mouse is moving, because it is classified as a mouse event we need to make a function so that event listener can recognize it.
function mouseMove() {

  // This increases the opacity every time the function is called, dividing by 100 makes it "readable" as an opacity value.
  opacity = opacity + 1 / 1200;

  //to change css in javascript we can use dot notation to access and manipulate the properties of it's id name which we have already "gotten" using get elementById
  appearDiv01.style.opacity = opacity + "";
  if (opacity > 1) {
    appearDiv02.style.display = "block";
    // appearDiv02.style.opacity = 0.01 + "";
  }
}
// This listens for the mouseMove function from appearDiv01 and appearDiv02
document.getElementById("appearDiv01").addEventListener("mousemove", mouseMove);
document.getElementById("appearDiv02").addEventListener("mousemove", mouseMove);
