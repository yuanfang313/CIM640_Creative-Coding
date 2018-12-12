// //practice area;
//
//
// function setup(){
//
//
//
// function draw(){
//
// }

var riverFlow;
var button;
var amp;
var sliderRate;

function setup(){
  createCanvas(200,200);
  riverFlow = loadSound("assets/CowMoo.mp3", loaded);
  sliderRate = createSlider(0, 3, 1, 0.01);
  amp = new p5.Amplitude();
  background(255);

}

function loaded(){

  button = createButton("play");
  button.mousePressed(togglePlaying);

}

function togglePlaying(){
  if(!riverFlow.isPlaying()){
    riverFlow.play();
    // riverFlow.setVolume(0.3);
    button.html("stop");
  }else{
    riverFlow.stop();
    button.html("play");
  }
}

function draw(){
background(0);

riverFlow.rate(sliderRate.value());
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 30, 200);

  fill(255,255,0);
  rect(width/3, height/3, diam, 30);
  // rect(width/3, height/2, diam, 30);
}







//--3--//
// var riverFlow;
// var button;
// var jumpButton;
// var slider;
// var amp;
//
//
// function setup(){
//   createCanvas(200,200);
//   riverFlow = loadSound("assets/river.mp3", loaded);
//
//
//
//   slider = createSlider(0,1,0.5,0.01);
//   riverFlow.addCue(2,backgroundChanged,color(0,255,0));
//   riverFlow.addCue(4,backgroundChanged,color(66,200,0));
//   riverFlow.addCue(6,backgroundChanged,color(0,77,0));
//   amp = new p5.Amplitude();
//   background(255);
//
// }
//
// function loaded(){
//   button = createButton("play");
//   button.mousePressed(togglePlaying);
//   jumpButton = createButton("jump");
//   jumpButton.mousePressed(jumpSong);
//   console.log("loaded");
// }
//
// function backgroundChanged(col){
//   background(col);
// }
//
// // function backgroundChanged(){
// //   background(random(255), random(255), random(255));
// // }
//
// function jumpSong(){
//   var len = riverFlow.duration();
//   // riverFlow.jump(len/2);
//   var t = random(len);
//   riverFlow.jump(0);
//   console.log(t);
//
// }
//
// function togglePlaying(){
//   if(!riverFlow.isPlaying()){
//     riverFlow.play();
//     riverFlow.setVolume(0.1)
//     button.html("pause");
//   }else{
//     //the difference between "pause" and "play";
//     riverFlow.pause();
//     // riverFlow.stop();
//     button.html("play");
//   }
// }
//
// function draw(){
//   background(0);
//
//   riverFlow.setVolume(slider.value());
//
//   //--all about riverFlow.currentTime();--//
//
//   // if(riverFlow.currentTime()>5){
//   //   background("red");
//   // }
//
//   // background(riverFlow.currentTime()*50, riverFlow.currentTime()*10, riverFlow.currentTime());
//
// }

//--3--//



// var riverFlow;
// var button;
// var slider;
//
// function setup(){
//   createCanvas(200,200);
//   riverFlow = loadSound("assets/river.mp3", loaded);
//   button = createButton("play");
//   button.position(0,200);
//   slider = createSlider(0,1,0.5,0.01);
//   button.mousePressed(togglePlaying);
// }
//
// function loaded(){
//   console.log("loaded");
// }
//
// function togglePlaying(){
//   if(!riverFlow.isPlaying()){
//     riverFlow.play();
//     button.html("pause");
//   }else{
//     //the difference between "pause" and "play";
//     riverFlow.pause();
//     // riverFlow.stop();
//
//     button.html("play");
//   }
//
// }
//
// function draw(){
//   background(0);
//   riverFlow.setVolume(slider.value());
//
// }






//------01------//

// var moo;
// var slider;

// function setup(){
//
//   createCanvas(200,200);
//
//   moo = loadSound("assets/CowMoo.mp3", loaded);
//   slider = createSlider(0,1,0,0.01);
// }
//
// function loaded(){
//   moo.play();
// }
//
// function draw(){
//
//   background(random(255));
//   moo.setVolume(slider.value());
// }


//------02------//

// var moo;
// var slider;
//
// function preload(){
//   moo = loadSound("assets/CowMoo.mp3");
// }
//
// function setup(){
// createCanvas(200, 200);
// moo.play();
// slider = createSlider(0, 1, 0.5, 0.05);
// // moo.setVolume(0.5);
// }
//
//
// function draw(){
// background(0);
// moo.setVolume(slider.value());
// }



//------03------//

// var moo;
// var sliderRate;
// var sliderPan;
//
// function setup(){
//   createCanvas(200, 200);
//
//   moo = loadSound("assets/CowMoo.mp3",loaded);
//   sliderRate = createSlider(0, 1.5, 0.5, 0.01);
//   sliderPan = createSlider(0, 2, 0, 0.05);
// }
//
// function loaded(){
//   moo.play();
// }
//
// function draw(){
//   background(random(255));
//   // moo.rate(sliderRate.value());
//   moo.pan(sliderPan.value());
// }
