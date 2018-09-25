
var cX = 900;
var cY = 500;
var danButton;

var moon1, moon2, moon3, moon4, moon5, moon6, sun;
var sunShow = false;
var moonShow = true;
var curImage;
var backgroundShow;

function preload() {
  sun = loadImage("assets/07.png");
  moon1 = loadImage("assets/01.png");
  moon2 = loadImage("assets/02.png");
  moon3 = loadImage("assets/03.png");
  moon4 = loadImage("assets/04.png");
  moon5 = loadImage("assets/05.png");
  moon6 = loadImage("assets/06.png");
  backgroundShow = loadImage("assets/background.png");

}


function setup() {

danButton = createButton("Day and Night");
danButton.position(100,100);

danButton.mousePressed(function(){
  if(sunShow == false){
    sunShow = true;
  } else {
    sunShow = false;

  }

});

// selection = createSelect();
// selection. position(100, 130);
// selection.option("00");
// selection.option("01");
// selection.option("02");
// selection.option("03");
// selection.option("04");
// selection.option("05");
// selection.option("06");
// selection.option("07");
// selection.changed(function(){
//
//   if(selection.value() == "07"){
//     curImage = sun;
//   }
//   if(selection.value() == "06"){
//     curImage = moon6;
//       }
//     if(selection.value() == "05"){
//       curImage = moon5;
//         }
//       if(selection.value() == "04"){
//         curImage = moon4;
//           }
//         if(selection.value() == "03"){
//           curImage = moon3;
//             }
//             if(selection.value() == "02"){
//               curImage = moon2;
//                 }
//   if(selection.value() == "01"){
//     curImage = moon1;
//   }
//   if(selection.value() == "00"){
//     curImage = backgroundShow;
//   }
//
//
// //console.log(selection.value());
// });
//
//
//
//
//
//
// curImage = moon1;

}


function draw() {
  createCanvas(2024, 1500);
background(204);
imageMode(CENTER);

if(sunShow == true){
  image(sun, cX, cY);
} else {
  image(moon1, cX, cY);
}


var cDist = dist(mouseX, mouseY, cX, cY);

  if(mouseIsPressed){
    if(cDist < 100){
  curImage = backgroundShow;
  }
  }


image(curImage, 900, 500);




}
