var w

function setup() {
  // put setup code here
    createCanvas(640, 360);
    w = new Walker()
}

function draw() {
  // put drawing code here
    background(51);
    w.walk();
    w.display();
}

function Walker() {
    this.pos = createVector(width/2, height/2);
    // replace two lines below with vector above
    // this.x = width/2;
    // this.y = height/2;
    // in the .walk and .display below use this.pos.x instead of this.x now
    
    this.walk = function() {
        this.vel = createVector(random(-10,10), random(-10,10));
        this.pos.add(this.vel);
    // replace two lines below with velocity vector above added to the position    
        //this.pos.x = this.pos.x + random(-10,10);
        //this.pos.y = this.pos.y + random(-10,10);
    }
    
    this.display = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 48, 48);
    }
}