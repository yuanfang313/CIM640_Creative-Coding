var r = 255;
var g = 255;
var b = 255;

var rectX = 650;
var rectY = 250;
var rectSize = 500;

var danButton;

var moon1, moon2, moon3, moon4, moon5, moon6, sun;
var sunShow = false;
var moonShow = true;
var curImage;
// var backgroundShow;

function preload() {
  sun = loadImage("assets/07.png");
  moon1 = loadImage("assets/01.png");
  moon2 = loadImage("assets/02.png");
  moon3 = loadImage("assets/03.png");
  moon4 = loadImage("assets/04.png");
  moon5 = loadImage("assets/05.png");
  moon6 = loadImage("assets/06.png");
  // backgroundShow = loadImage("assets/background.png");

}


function setup() {

danButton = createButton("Day and Night");
danButton.position(300,100);

danButton.mousePressed(function(){
  if(sunShow == false){
    sunShow = true;
  } else {
    sunShow = false;

  }

});

selection = createSelect();
selection. position(300, 130);

selection.option("01");
selection.option("02");
selection.option("03");
selection.option("04");
selection.option("05");
selection.option("06");
selection.option("07");
selection.changed(function(){

  if(selection.value() == "07"){
    curImage = sun;
  }
  if(selection.value() == "06"){
    curImage = moon6;
      }
    if(selection.value() == "05"){
      curImage = moon5;
        }
      if(selection.value() == "04"){
        curImage = moon4;
          }
        if(selection.value() == "03"){
          curImage = moon3;
            }
            if(selection.value() == "02"){
              curImage = moon2;
                }
  if(selection.value() == "01"){
    curImage = moon1;
  }





//console.log(selection.value());
});






curImage = moon1;

}


function draw() {
  createCanvas(2024, 1500);
background(204);
fill(r, g, b);
rect(rectX, rectY, rectSize, rectSize);
imageMode(CENTER);

if(sunShow == true){
  image(sun, 900, 150, sun.width/2, sun.width/2);
} else {
  image(moon1, 900, 150, moon1.width/2, moon1.width/2);
}

if(mouseIsPressed){
  if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
    r = random(256);
    g = random(0, 256);
    b = random(256);
  }
}


image(curImage, 900, 500);




}
