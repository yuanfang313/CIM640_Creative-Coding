var xPos = 0;
var yPos = 250;

var trigger = false;
var trigger2;

var riverFlow, yys, xn;

var amp;
var sliderRate;
var sliderVol;

var selection;
var ballButton;



function setup(){
  createCanvas(windowWidth, windowHeight);

//loaded the music;
riverFlow = loadSound('assets/river.mp3', loaded);
yys =loadSound('assets/onmyoji2.mp3',loaded);
xn =loadSound('assets/aroma.mp3',loaded);

//create selection;
selection = createSelect();
selection.position(1140, 150);
selection.option("choose the music");
selection.option("River Flows In You");
selection.option("Onmyoji2");
selection.option("Aroma");

//create sliders;
sliderVol = createSlider(0, 3, 1, 0.1);
sliderVol.position(1185,200);
sliderRate = createSlider(0, 3, 1, 0.1);
sliderRate.position(1185, 250);

amp = new p5.Amplitude();
}

function loaded(){
  ballButton = createButton("play");
  ballButton.position(1270,150);
  ballButton.mousePressed(togglePlaying);
}

function togglePlaying(){

  if(selection.value() == "River Flows In You"){
    if(!riverFlow.isPlaying()){
      riverFlow.play();
      ballButton.html("stop");
      riverFlow.setVolume(1);
    }else{
      riverFlow.stop();
      ballButton.html("play");
  }
}

  if(selection.value() == "Onmyoji2"){
    if(!yys.isPlaying()){
      yys.play();
      ballButton.html("stop");
      yys.setVolume(1);
    }else{
      yys.stop();
      ballButton.html("play");
    }
  }
  if(selection.value() == "Aroma"){
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

//the core!//
  var speed = amp.getLevel();
  var speedAdd = map(speed, 0, 3, 0, 10);

  var ballSize = speedAdd;

  noStroke();
  fill(speedAdd*300 ,speedAdd*10, random(255),200);
  ellipse(xPos, yPos, ballSize*10+20, ballSize*10+20);
  ellipse(xPos+speedAdd*70, yPos+speedAdd*70, ballSize*100+10, ballSize*100+10);
  ellipse(xPos-speedAdd*70, yPos+speedAdd*70, ballSize*100+10, ballSize*100+10);
  ellipse(xPos-speedAdd*70, yPos-speedAdd*70, ballSize*100+10, ballSize*100+10);
  ellipse(xPos+speedAdd*70, yPos-speedAdd*70, ballSize*100+10, ballSize*100+10);


  fill(255);
  textSize(11);
  text("Volume:", 1145, 210);
  text("Rate:", 1145, 260);

//headline;
  fill(255);
  textSize(30);
  text("Visualize Music", 1150, 50);

//legend;
textSize(12);
text("normal speed", 1160, 340);

//intro;
  textSize(20);
  text("Introduction:", 1120, 420);

  textSize(12);
  text("It is an experiment of making connection between", 1120, 450);
  text("Images and Sounds.", 1120, 465);

  text("It can be a tool that users can install the music they", 1120, 495);
  text("like and making dynamic images. Users can create", 1120, 510);
  text("videos by editing the elements of the music.", 1120, 525);

  text("It can be a tool that help instruments beginners to", 1120, 555);
  text("visualize the various elements of pieces they are", 1120, 570);
  text("studying to memorize them.", 1120, 585);

  text("I expect that users can edit the images independently", 1120, 615);
  text("without losing the connection with the sounds that", 1120, 630);
  text("every user will have an unique video of their own", 1120, 645);
  text("based on their own interpretation of the music.", 1120, 660);





  //the line of normal speed or rate of musics;
  stroke(255, 0, 0);
  strokeWeight(3);
  line(1232, 185, 1232, 195);
  line(1232, 235, 1232, 245);
  //legend;
  line(1150, 330, 1150, 340);

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
