// Reference "RandomWalker" for comments on position and velocity variables
// In this Physics Engine, putting velocity, and accelartion into Movement from move
// with specific inputs - not random

var m

function setup() {
  // put setup code here
    createCanvas(640, 640);
    m = new Movement()
}

function draw() {
  // put drawing code here
    background(51);
    m.update();
    m.display();
}

function Movement() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    // this.acc = createVector(0, 0.01); // this will make accelaration constant
    
    // another option to create random acc is to set a random angle here in the movement
    // and then to rotate the angle below ** commetted out for now
    // this.acc = p5.Vector.fromAngle(random(TWO_PI));
    // this.acc.setMag(0.2); // slows it down
    
    this.update = function() {
        // this.acc = createVector(random(-1, 1), random(-1, 1)); // makes accelaration smooth but random
        
        // instead of creating a vector with random location -> above...
        // you can create a vector with a random angle -> below
        
        this.acc = p5.Vector.fromAngle(random(TWO_PI)); // if you don't specificy a min its zero -> random(0,TWO_PI)
        
        // uncomment below if you plan to set a random angle -> above and then rotate it
        // this.acc.rotate(0.1); // note: rotate is in radians
        
        this.acc.mult(0.4);     // scalar multiplication to speed up/slow down acc
        this.vel.add(this.acc); // add the accelaration to velocity
        this.pos.add(this.vel); // add the velocity to the position
        
    }
    
    this.display = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 48, 48);
    }
}