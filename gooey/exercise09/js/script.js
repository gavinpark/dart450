/*

DART 450, Winter 2018
Final Project - gooey
Gavin Park

*/

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position

$(document).ready(function () {

  // This variable represents the dots and the mouse location
  var dots = [],
  mouse = {
    x: 0,
    y: 0
  };

  // This function checks the location of the last dot in the array.
  // It makes the last dot in the array trail the position of the cursor
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

  // The Dot.prototype.draw() method sets the position of the object's <div> node
  Dot.prototype.draw = function() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  };

  // This variable is for each new dot
  var d = new Dot();
  dots.push(d);

  // This function creates the new dot object every 5 seconds and adds to the dots array
  setInterval(function() {
    var d = new Dot();
    dots.push(d);
  }, 5000);

  // This is the screen redraw function which gets the cursor's location
  function draw() {

    var x = mouse.x,
    y = mouse.y;

    // This loop is where all each dot trails the one behind it
    dots.forEach(function(dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * .97;
      y += (nextDot.y - dot.y) * .97;

    });
  }

  // This event listener checks for the cursor's location on the page continuously
  addEventListener("mousemove", function(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  // This gets it started by calling animate().
  animate();
},3000);
