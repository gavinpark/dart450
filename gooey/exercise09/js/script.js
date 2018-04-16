/**********************************************

DART 450, Winter 2018
Exercise 08
Gavin Park


**********************************************/

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below

$(document).ready(function () {

var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

// The Dot object used to scaffold the dots

var Dot = function() {
  if (dots.length == 0) {
    this.x = mouse.x;
    this.y = mouse.y;
  }
  else {
    this.x = dots[dots.length-1].x;
    this.y = dots[dots.length-1].y;
  }
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

// The Dot.prototype.draw() method sets the position of
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array

var d = new Dot();
dots.push(d);

setInterval(function() {
  // for (var i = 0; i < 1; i++){
    var d = new Dot();
    dots.push(d);
  // }
}, 5000);


// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .97;
    y += (nextDot.y - dot.y) * .97;

  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
},3000);
