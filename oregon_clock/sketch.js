var cx, cy;
var secondsRadius;
var minutesRadius;
var hoursRadius;
var clockDiameter;

function setup() {
  // put setup code here
  createCanvas(720, 400);
  stroke(255);

  var radius = min(width, height) / 2;
  secondsRadius = radius * 0.72;
  minutesRadius = radius * 0.65;
  hoursRadius = radius * 0.35;
  clockDiameter = radius * 1.6;

  cx = width / 2;
  cy = height / 2;
}

function draw() {
  // put drawing code here
  background(0);

  // Draw the clock background
  noStroke();
  fill(240,255,0);
  ellipse(cx, cy, clockDiameter + 80, clockDiameter + 10);
  fill(0);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255,255,255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  stroke(65,210,5);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);


  // Draw the minute ticks
  stroke(255,255,0);
  strokeWeight(2);
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = cx + cos(angle) * secondsRadius;
    var y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}
