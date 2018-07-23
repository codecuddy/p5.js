var rad = 60; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 4.8; // Speed of the shape
var yspeed = 2.2; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

function setup() {
  // put setup code here
  createCanvas(1080, 600);
  noStroke();
  frameRate(60);
  fill(5,0,255);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;

}

function draw() {
  // put drawing code here
  background(0);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  fill(5,0,255);
  ellipse(xpos, ypos, rad, rad+180);
  ellipse(xpos, ypos, rad+180, rad);
  ellipse(xpos, ypos+150, rad, rad);
  ellipse(xpos, ypos-150, rad, rad);
  ellipse(xpos+150, ypos, rad, rad);
  ellipse(xpos-150, ypos, rad, rad);
  fill(0);
  ellipse(xpos, ypos, rad-20, rad-20);
  ellipse(xpos, ypos+150, rad-20, rad-20);
  ellipse(xpos, ypos-150, rad-20, rad-20);
  ellipse(xpos+150, ypos, rad-20, rad-20);
  ellipse(xpos-150, ypos, rad-20, rad-20);
}
