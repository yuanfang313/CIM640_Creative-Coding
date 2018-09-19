var sun
var moon

var r = 255;
var g = 255;
var b = 255;

var rectX = 500;
var rectY = 500;
var rectSize = 300;

var cX = 150;
var cY =150;
var cEdge =100;




var sunShow = false;
var sunButton;


function preload(){
  sun = loadImage('assets/sun.png');
  moon =loadImage('assets/moon.png');
}

function setup() {
createCanvas(1500,1500);
background(255);
}



// sunButton = createButton("Press to show/hide sun");
// sunButton.position(500, 100);
// sunButton.mousePressed(function(){
//   if(sunShow ==false){
//     sunShow = true
//   } else {
//     sunShow = false;
//   }
// });
// }

function draw() {
  fill(r, g, b);
  rect(rectX, rectY, rectSize, rectSize);

imageMode(CENTER);
  image(sun, cX, cY, sun.width/4, sun.height/4);

if(sunShow == true){
image(sun, 300, 300);
}

}



function mousePressed(){
  if (mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
  }
}



var dist
var sunDist = dist(cX, cY, mouseX, mouseY);
  console.log("sun Dist:" + sunDist);


if (sunDist < 40){
if(sunShow ==false){
  sunShow = true
} else {
  sunShow = false;
}
}
