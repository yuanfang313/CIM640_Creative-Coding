//click1-2


var cX = 300;
var cY = 300;
var cSize = 200;

var r = 255;
var g = 255;
var b = 255;

var rectX = 50;
var rectY = 50;
var rectSize = 100;

var sun;
var moon;

var sunShow = false;



function preload(){
sun = loadImage('assets/sun.png');
moon = loadImage('assets/moon.png');
}



function setup() {
createCanvas(800,800);
background(204);
}




function draw(){






       //hover_______(dist)_changing the fillcolor of ellipse between 255~0;

// var cdist = dist (mouseX, mouseY, cX, cY);
// if(cdist < 100){
//     fill(0);
//   } else {
//     fill(255);
//   }





       // click & hover_______(mouseIsPressed + dist)_changing the fillcolor of rect between 255~0;

//   fill(255);
//
//   if(mouseIsPressed){
//     if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
//       fill(0);
//   }
//   }
// rect(rectX, rectY, rectSize, rectSize);




      //click & hover_______{mouseIsPressed + dist}_changing the fillcolor of ellipse between 255~0;

// if(mouseIsPressed){
//   if(cdist < 100){
//     fill(0);
//   } else {
//     fill(255);
//   }
// }
// ellipse(cX, cY, cSize, cSize);




      //click & hover_______{mouseIsPressed + dist}_changing loadimage (at the original location) between two variables;

// imageMode(CENTER);
//
// image(moon, cX, cY);
//
// var cdist = dist(mouseX, mouseY, cX, cY);
//
// if(mouseIsPressed){
//   if(cdist < 100){
//   background(204);
//   image(sun, cX, cY);
//   }
// }


       // click & hover_______{mouseIsPressed + dist}_changing loadimage (at another place)between two variables;
imageMode(CENTER);
image(sun, cX, cY, sun.width/2, sun.height/2);

if(sunShow == true){
  image(sun, 500, 500);
}


var sunDist = dist(mouseX, mouseY, cX, cY);

  if(mouseIsPressed){
    if(sunDist < 50){
    if(sunShow == false){
      sunShow = true;
  }}} else  {
// how to use "true" & "false" to hide images?
fill(204);
strokeWeight(0);
ellipse(500, 500, 300, 300);

  }






}



function mousePressed(){

}
