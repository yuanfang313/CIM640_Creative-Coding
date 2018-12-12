var xPos = 0;
var yPos = 250;


var trigger = false;


var trigger2;

var riverFlow;
var ballButton;
var amp;
var sliderRate;


function setup(){
  createCanvas(windowWidth, windowHeight);


riverFlow = loadSound('assets/river.mp3', loaded);


sliderRate = createSlider(0, 3, 1, 0.1);
sliderRate.position(width/2-50, height/2+50);
slider = createSlider()
amp = new p5.Amplitude();

}


function loaded(){

  ballButton = createButton("play");
  ballButton.position(width/2, height/2);
  ballButton.mousePressed(togglePlaying);

}

function togglePlaying(){
  if(!riverFlow.isPlaying()){
    riverFlow.play();
    ballButton.html("stop");
    riverFlow.setVolume(1);
  }else{
    riverFlow.stop();
    ballButton.html("play");

}
}


function draw(){

  background(0);

  riverFlow.rate(sliderRate.value());

  var speed = amp.getLevel();
  var speedAdd = map(speed, 0, 3, 0, 10);

  var ballSize = speedAdd;

  noStroke();
  fill(speedAdd*100 ,speedAdd*10, random(255));
  ellipse(xPos, yPos, ballSize*5+20, ballSize*5+20);
  ellipse(xPos+speedAdd*70, yPos+speedAdd*70, ballSize*100+10, ballSize*100+10);
  ellipse(xPos-speedAdd*70, yPos+speedAdd*70, ballSize*100+10, ballSize*100+10);
  ellipse(xPos-speedAdd*70, yPos-speedAdd*70, ballSize*100+10, ballSize*100+10);
  ellipse(xPos+speedAdd*70, yPos-speedAdd*70, ballSize*100+10, ballSize*100+10);
  // rect(xPos-10,yPos-10,speedAdd*50, speedAdd*5+20);

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
