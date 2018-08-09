

function setup() {
  // put setup code here
    createCanvas(840,680, WEBGL);
//    rect(1,1,838,678);
}

function draw() {
  // Paint Brush
    
   /*
   if (mouseIsPressed) {
        fill(255);
    } else {
        fill(200,5,60);
    }
    ellipse(mouseX, mouseY, 50,50);
    */
    
    background(200);
    fill(250,0,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    //box(75);
    sphere(200);
 
}
