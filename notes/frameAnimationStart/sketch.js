
var frameAmounts = 4;
//the name of this Array is frameArray; frames is its variables;
var frameArray = [];
var currentFrame = 0;
var interval = 500;
// interval determines when to change the value of variable frameArray;
// 1000 = 1 sec; 2000 = 2 sec;
var prevMillis = 0;

function preload(){
// var frameString = 'assests/Thatwasclose0.jpg';
// frameArray[0] = loadImage(frameString);

// why don't declare frame?
for(var frames = 0; frames < frameAmounts; frames++){

// the string of frames(pictures);
  var frameString = "assests/Thatwasclose" + frames + ".jpg";

  frameArray[frames] = loadImage(frameString);

}
}

function setup(){
  createCanvas(500,500);
}

function draw(){

  // frameRate(10)
  // console.log(millis());
  image(frameArray[currentFrame],0,0);

  if(millis() - prevMillis > interval){
    currentFrame++;
    prevMillis = millis();
  }


   // console.log(currentFrame);

  if(currentFrame > frameAmounts + 1){
   currentFrame = 0;
  }

  ellipse(mouseX, mouseY, 10, 10);
}
