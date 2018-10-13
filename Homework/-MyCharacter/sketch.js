//example/coordinates

//add text;
function setup() {
  createCanvas(500,500);



}

function draw() {
  background(204);

textFont("Arial");
  textSize(20);
  fill(0);
  text("CLICK!", 100,50);

  textFont("Times New Roman");
  textSize(15);
  text("How many loved your moments of glad grace", 100, 350);
  text("And loved your beauty with love false or true", 100, 380);
  text("But one man loved the pilgrim Soul in you", 100, 410);
  text("And loved the sorrows of your changing face", 100, 440);


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


//hairs
if (mouseIsPressed){
  strokeWeight(0);
  } else {
  strokeWeight(5);

strokeWeight(5);
line(200,155,200,180);
line(230,155,230,190);
line(260,155,260,180);



  }





}
