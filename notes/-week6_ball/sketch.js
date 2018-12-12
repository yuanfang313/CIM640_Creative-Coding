var xPos = 0;
var yPos = 250;
var ballSize = 20;

var trigger = false;
var speed = 10;

var trigger2;

function setup(){
  createCanvas(500, 500);

  // xPos = width/2;

}

function draw(){

  background(204);
  ellipse(xPos, yPos, ballSize, ballSize);

//x axis;

//link xPos, yPos with trigger2;
  if(trigger2 == false){
    xPos += speed;
    // yPos = yPos + speed;
  } else {
    xPos -= speed;
  }

//link width with trigger2;
  if(xPos > width){
    trigger2 = true;
  }

  if(xPos < 0){
    trigger2 = false;
  }

//y axis;
  if(trigger == false){
    yPos += speed;
    // yPos = yPos + speed;
  } else {
    yPos-= speed;
  }


//link height with trigger;
  if(yPos > height){
    trigger = true;
  }

  if(yPos < 0){
    trigger = false;
  }
}
