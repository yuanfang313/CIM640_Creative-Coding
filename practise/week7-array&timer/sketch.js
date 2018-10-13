// function setup(){
//   createCanvas(480, 120);
//   strokeWeight(8);
// }
//
// function draw(){
//   background(204);
//   for(var i = 20; i < 400; i += 60){
//     line(i, 40, i + 60, 80);
//   }
// }


var interval2 = 2000;
var prevMillis2 = 0;

var counter = 480;


var time1 = 10;
var time2 = 20;
var prevMillis = 0;


function setup(){
  createCanvas(480, 120);
}

function draw(){
  background(204);
//
// if(millis() - prevMillis > time1){
//   counter ++;
//   prevMillis = millis();
// }
//
// if(counter > width){
//   counter = 0;
// }
//
//
// ellipse(counter, 60, 50, 50);

if(millis() - prevMillis2 > interval2){
  counter -= 50;
  prevMillis2 = millis();
}

if(counter < 0){
  counter = 480;
}

ellipse(counter, height/2, 20, 20);

}
