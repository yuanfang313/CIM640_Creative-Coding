//example/coordinates

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(204);


arc(90,60,80,80,0,HALF_PI);
arc(190,60,80,80,0,PI+HALF_PI);
arc(290,60,80,80,PI,TWO_PI+HALF_PI);
arc(390,60,80,80,QUARTER_PI, PI+HALF_PI+QUARTER_PI);
}
