//example/coordinates

function setup() {
  createCanvas(720,400);
}

function draw() {
  background(0);
  noFill();
//the width and height is the Canvas(720,400)
  stroke(255);
  point(width*0.5, height*0.5);
  point(width*0.5, height*0.25);
//the parameters in the blacket is standing for RGB
  stroke(0,153,255);
  line(0, height*0.33, width, height*0.33);

  stroke(255,153,0);
  rect(width*0.25, height*0.1, width*0.5, height*0.8);
}
