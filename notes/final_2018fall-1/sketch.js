
var cX = 50;
var cY = 50;

var keyCode;
var controls = {
                  "a" : [10, 10, 100, "white"],
                  "b" : [120, 10, 100, "white"],
                  "c"  : [230,10,100,"white"],
                  "d" : [340,10,100,"white"]
                  }
var state = "a";

var curImage, aa, bb;

 function preload(){
   aa = loadImage('assets/sun.png');
   bb = loadImage('assets/moon.png');
 }

function setup() {
createCanvas(1450, 780);

}


// function mousePressed(){
//
//   for(var keys in controls){
//     if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] &&
//        mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
//          state = keys;
//          if (state == "a"){
//           curImage = aa;};
//
//   }
//
// }
// }

function draw() {
  background(204);

for(var keys in controls){

  noStroke();
  fill(controls[keys][3]);
  rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);



  //change color when mouse hovers;
      if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] &&
         mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
        fill(230,230);
        rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);
state = keys;

if(state ==)
        image(aa, 300,300);

  }

  textSize(50);
  fill(150);
  text("A", 42, 70);


}
// image(curImage, 300,300);

// image(curImage, cX, cY);



}
