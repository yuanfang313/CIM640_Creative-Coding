var xPos = 0;
var yPos = 250;


var trigger = false;
var trigger2;

var riverFlow, yys, xn;
var ballButton;

var amp;
var sliderRate;
var sliderVol;

var selection1, selection2;
var sun0, moon0;
var curImage;


function setup(){
  createCanvas(windowWidth, windowHeight);

//load the music;
riverFlow = loadSound('assets/river.mp3', loaded);
yys =loadSound('assets/onmyoji2.mp3',loaded);
xn =loadSound('assets/aroma.mp3',loaded);

sun0 = loadImage('assets/sun.png',loaded);
moon0 = loadImage('assets/moon.png',loaded);

//create selection_sound;
selection1 = createSelect();
selection1.position(1140, 150);
selection1.option("choose the music");
selection1.option("River Flows In You");
selection1.option("Onmyoji2");
selection1.option("Aroma");

//create selection_image;
selection2 = createSelect();
selection2.position(1140,100);
selection2.option("sun");
selection2.option("moon");

selection2.changed(function(){
  if(selection2.value() == "sun"){
    curImage = sun0;
  }
});

//create sliders;
sliderVol = createSlider(0, 3, 1, 0.1);
sliderVol.position(1185,200);
sliderRate = createSlider(0, 3, 1, 0.1);
sliderRate.position(1185, 250);

amp = new p5.Amplitude();

}

function loaded(){

  ballButton = createButton("play");
  ballButton.position(1280,150);
  ballButton.mousePressed(togglePlaying);

}


function togglePlaying(){
  if(selection1.value() == "River Flows In You"){
    if(!riverFlow.isPlaying()){
      riverFlow.play();
      ballButton.html("stop");
      riverFlow.setVolume(1);
    }else{
      riverFlow.stop();
      ballButton.html("play");
  }
  }
  if(selection1.value() == "Onmyoji2"){
    if(!yys.isPlaying()){
      yys.play();
      ballButton.html("stop");
      yys.setVolume(1);
    }else{
      yys.stop();
      ballButton.html("play");
    }
  }
  if(selection1.value() == "Aroma"){
    if(!xn.isPlaying()){
      xn.play();
      ballButton.html("stop");
      xn.setVolume(1);
    }else{
      xn.stop();
      ballButton.html("play");
    }
  }
}




function draw(){
  background(0);
  imageMode(CENTER);
  image(curImage, xPos+speedAdd*70, yPos+speedAdd*70, sun0.width, sun0.height);
//panel;
  fill(255,50);
  noStroke();
  rect(1100, 0, 350, 900);

  fill(255,50);
  noStroke();
  rect(1100, 120, 350, 200);

//Rate;
  riverFlow.rate(sliderRate.value());
  yys.rate(sliderRate.value());
  xn.rate(sliderRate.value());
//Volume;
  riverFlow.setVolume(sliderVol.value());
  yys.setVolume(sliderVol.value());
  xn.setVolume(sliderVol.value());

  var speed = amp.getLevel();
  var speedAdd = map(speed, 0, 3, 0, 10);

  var ballSize = speedAdd;

  noStroke();
  fill(speedAdd*200 ,speedAdd*10, random(255),200);
  ellipse(xPos, yPos, ballSize*5+20, ballSize*5+20);



  // image(curImage,xPos+speedAdd*70, yPos+speedAdd*70, ballSize*100+10, ballSize*100+10);
  // image(curImage,xPos-speedAdd*70, yPos+speedAdd*70, ballSize*100+10, ballSize*100+10);
  // image(curImage,xPos-speedAdd*70, yPos-speedAdd*70, ballSize*100+10, ballSize*100+10);
  // image(curImage,xPos+speedAdd*70, yPos-speedAdd*70, ballSize*100+10, ballSize*100+10);
  // rect(xPos-10,yPos-10,speedAdd*50, speedAdd*5+20);

//annotation;
  // fill(255);
  // textSize(10);
  // text("normal speed", 1250, 240);

  fill(0);
  textSize(10);
  text("Volume:", 1145, 210);
  text("Rate:", 1145, 260);

  //the line of normal speed or rate of musics;
  stroke(255, 0, 0);
  strokeWeight(3);
  line(1232, 185, 1232, 195);
  line(1232, 235, 1232, 245);





//x axis;
//link xPos, yPos with trigger2;
  if(trigger2 == false){
    xPos += speedAdd;
    // yPos = yPos + speed;
  } else {
    xPos -= speedAdd;
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
    yPos += speedAdd;
    // yPos = yPos + speed;
  } else {
    yPos-= speedAdd;
  }


//link height with trigger;
  if(yPos > height){
    trigger = true;
  }

  if(yPos < 0){
    trigger = false;
  }
}
