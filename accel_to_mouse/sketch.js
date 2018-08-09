// Reference "Physics Engine" for comments on position and velocity variables


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
    
    this.update = function() {
        var mouse = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos); // ex. of static function, 
                                                   // not called on an object like the addition below
        this.acc.setMag(0.2);
        // the two lines below can replaced with the setMag call above
        // this.acc.normalize(); // no matter the magintude of the vector, it'll shrink or grow it
        // this.acc.mult(0.2);   // multi by scalar to slow it down
        
        this.vel.add(this.acc); // add the accelaration to velocity
        this.pos.add(this.vel); // add the velocity to the position
        
    }
    
    this.display = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 48, 48);
    }
}