var mic;
var riverFlow, onmyoji, aroma;

var volhistory = [];

var selection;
var submitButton;
var curSound;

function toggleSound(){
  if(curSound.isPlaying()){
    curSound.pause();
  }else{
    curSound.play();
  }
}


function preload(){
  riverFlow = loadSound('assets/river.mp3');
  onmyoji = loadSound('assets/onmyoji2.mp3');
  aroma = loadSound('assets/aroma.mp3');
}

function setup(){
  createCanvas(200,200);
  selection = createSelect();
  selection.position(200,10);
  selection.option("riverFlow");
  selection.option("onmyoji0");
  selection.option("aroma0");

  submitButton = createButton("submit");
  submitButton.position(200,30);
  submitButton.mousePressed(function(){
    if(selection.value()=="riverFlow"){
      curSound = riverFlow;
    }
    if(selection.value()=="onmyoji"){
      curSound = onmyoji;
    }
    if(selection.value()=="aroma"){
      curSound = aroma;
    }
  });

  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSound);

  riverFlow.play();
  amp = new p5.Amplitude();

  // mic = new p5.AudioIn();
  // mic.start();
}

function draw(){
  background(0);

var vol = amp.getLevel();
  // var vol = mic.getLevel();
  console.log(volhistory);
  volhistory.push(vol);

stroke(255);
noFill();

translate(width/2, height/2);
beginShape();

for (var i =0; i < 360; i++){
  var r = map(volhistory[i], 0, 0.5, 10, 100);
  var x = r * cos(i);
  var y = r * sin(i);
  vertex(x, y);
}

// for(var i = 0; i < volhistory.length; i++){
//   var y = map(volhistory[i], 0, 0.5, height/1.5, 0);
//   vertex(i, y);
// }
endShape();

if(volhistory.length > 360){
  volhistory.splice(0,1);
}
// stroke(255, 0, 0);
// line(volhistory.length, 0, volhistory.length, height);
  // ellipse(100, 100, 200, vol*200);

}
