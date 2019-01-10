var cX = 100;
var cY = 100;

var aaa;
var bbb;
var ccc;

var a0 = false;
var b0 = false;
var c0 = false;

var soundFile;

function preload(){
  aaa = loadImage('assets/A.png');
  bbb = loadImage('assets/B.png');
  ccc = loadImage('assets/C.png');
  soundFile01 = loadSound('assets/A.wav');
  soundFile02 = loadSound('assets/B.wav');
  soundFile03 = loadSound('assets/C.wav');

}

function setup() {
createCanvas(windowWidth, windowHeight);

}

function draw() {

background(204);

fill(255);
noStroke();
rect(100,20,100,100);
rect(250,20,100,100);
rect(400,20,100,100);

fill(80);
textSize(50);
text("A", 130, 90);
text("B", 280, 90);
text("C", 430, 90);

textSize(35);
text("Let's learn Morse Code!", 750, 80);
textSize(25);
text("Introduction:", 550, 120);
textSize(15);
text("Click the letters to see their images of Morse Code, and listen to their sounds at the same time. ", 700, 120);




if(a0 == true ){
  aa();
}

if(b0 == true){
  bb();
}

if(c0 == true){
  cc();
}

  }


function aa(){
imageMode(CENTER);
  image(aaa, 700,400, aaa.width/10, aaa.height/10);

}

function bb(){
imageMode(CENTER);
  image(bbb, 700,400, bbb.width/10, bbb.height/10);

}

function cc(){
imageMode(CENTER);
  image(ccc, 700,400, ccc.width/10, ccc.height/10);

}

function mousePressed(){

  if(mouseX > 100 && mouseX < 100 + cX &&  mouseY> 20 && mouseY < 20 + cY){
    a0 = true;
    soundFile01.play();
  }else{
    a0 = false;
    soundFile01.stop();
  }

  if(mouseX > 250 && mouseX < 250 + cX && mouseY > 20 && mouseY < 20 + cY){
    b0 = true;
soundFile02.play();
  }else{
    b0 = false;
    soundFile02.stop();

  }

  if(mouseX > 400 && mouseX < 400 + cX && mouseY > 20 && mouseY < 20 + cY){
    c0 = true;
    soundFile03.play();

  }else{
    c0 = false;
soundFile03.stop();
  }
}
