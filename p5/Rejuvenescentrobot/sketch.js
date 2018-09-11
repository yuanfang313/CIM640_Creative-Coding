//example/coordinates

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(204);

//face
fill(255,215,0);
strokeWeight(3);
rect(155,155,150,150);

//big white eyes
fill(255);
ellipse(190,220,45,45);
ellipse(270,220,45,45);

//small black eyes inside
fill(0);
ellipse(190,220,20,20);
ellipse(270,220,20,20);

//mouth
fill('red');
rect(190,250,80,30);


//tooth
if (mouseIsPressed){
  strokeWeight(0);
} else {
  strokeWeight(2);
}

if (mouseIsPressed){
  fill('red');
} else {
  fill(255);
}

rect(215,252,15,15);
rect(230,252,15,15);

if (mouseIsPressed){
  strokeWeight(0);
  } else {
  strokeWeight(5);
//hairs
strokeWeight(5);
line(200,155,200,180);
line(230,155,230,190);
line(260,155,260,180);



  }





}
