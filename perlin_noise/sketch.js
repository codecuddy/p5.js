// Perlin Noise is a random algorithm that has a smoothness to it, organic movement
// Input param for noise is "time" you're refrencing -> points are related to others near it in time

var xoff = 0;   // global variable for offset of the x value on the axis
var yoff = 0;

function setup() {
    createCanvas(640, 640);
    
}

function draw() {
    background(51);

    // var x = random(0, width); // gives random x value
    
    var x = noise(xoff) * width;  // must multiply here because noise is always between 0 and 1
                                  // replace 0 with xoff to have values relate instead reference origin
    xoff += 0.014;                // makes dot appear to move because 'randomly' picking points closer to it
    
    var y = noise(yoff) * height;
    
    yoff += 0.016;
    
    fill(255);
    ellipse(x, y, 48, 48);
}

