var posX = 0;
var posY = 0;
var rectsize = 100;
var colors = "green";

function setup(){
  createCanvas(400,400);
}


function draw(){
  background(255);
// display(random(width), random(height), random(255), random(0,100));
display(posX, posY, colors, rectsize);
var box1 = check(mouseX, mouseY, posX, posY, rectsize);

if(box1 == true){
  background("green");
}

display(posX+100, posY+100, "red", rectsize);

if(box2 == true){
  background("red");
}
var box2 = check(mouseX, mouseY, posX+100, posY+100, rectsize);
}

// function display(){
//   fill(colors);
//   rect(posX, posY, rectsize, rectsize);
// }

//this is the declare;
function display(tempX, tempY, tempC, tempS){
  fill(tempC);
  rect(tempX, tempY, tempS, tempS);
}

function check(mX, mY, locX, locY, tempRsize){
  if(mX > locX && mX < locX + tempRsize && mY > locY && mY < locY + tempRsize){
    console.log("in box");
    return true;
  } else{
    return false;
  }

}



///end of code
