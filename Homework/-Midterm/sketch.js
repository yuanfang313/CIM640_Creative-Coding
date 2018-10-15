
var frameAmounts =23;
var frameArray = [];
var currentFrame = 0;

var interval = 500;
var prevMillis = 0;

var controls = {
                  "play" : [415, 675, 90, "white"],
                  "stop" : [750, 675, 90, "white"],
                  "forward"  : [515,675,90,"white"],
                  "back" : [315,675,90,"white"]
}

var state = "stop";

var keyCode;

function preload(){

for (var frames = 0; frames < frameAmounts; frames++){
  var frameString = "assets/dg" + frames + ".jpg";
  frameArray[frames] = loadImage(frameString);

}

}




function setup(){
  createCanvas(2000, 1200);

//speed controls;
  selection = createSelect();
  selection. position(1000, 710);

  selection.option("normal");
  selection.option("0.25");
  selection.option("0.5");
  selection.option("0.75");
  selection.option("1.25");
  selection.option("1.5");
  selection.option("2");

  selection.changed(function(){

    if(selection.value() == "normal"){
      interval = 500;
    }
    if(selection.value() == "0.25"){
      interval = 2000;
    }
    if(selection.value() == "0.5"){
      interval = 1000;
    }
    if(selection.value() == "0.75"){
      interval = 650;
    }
    if(selection.value() == "1.25"){
      interval = 400;
    }
    if(selection.value() == "1.5"){
      interval = 333;
    }
    if(selection.value() == "2"){
      interval = 250;
    }
});

}

function draw(){

  background(204);

//panel;
  fill(50);
  rect(300,660,800,130);
//panel of speed;
  fill(150);
  rect(900,675,185,90);

  image(frameArray[currentFrame], 300, 50);

  //instruction;
  fill(0);

  textSize(35);
  text("The Dynamic Demonstration of Dougong", 300, 840);

  fill(80);
  textSize(28);
  text("Instruction", 300, 900);



  textSize(18);
  text("--Click to play, stop, check the frames forward or backward and select the speed;", 300, 930);
  text("--Press CONTROL to reset the demonstration;", 300, 950);



  if(millis() - prevMillis > interval && state == "play"){
    currentFrame++;
    prevMillis = millis();
  }

  if(currentFrame > frameAmounts - 1){
    currentFrame = 0;
  }

  for(var keys in controls){

//labels;
      textSize(20);
      fill(255);
      // text(keys, controls[keys][0], controls[keys][1] + 110);
      text("speed:", 920, 725);


//buttoms;
      noStroke();
      fill(controls[keys][3]);
      rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);

//icons on the buttoms;
      fill("orange");

//play;
      beginShape();
      vertex(445, 740);
      vertex(475, 720);
      vertex(445, 700);
      endShape();

//back;
      beginShape();
      vertex(355, 740);
      vertex(340, 720);
      vertex(355, 700);
      endShape();

      beginShape();
      vertex(375, 740);
      vertex(360, 720);
      vertex(375, 700);
      endShape();

//forward;
      beginShape();
      vertex(545, 740);
      vertex(560, 720);
      vertex(545, 700);
      endShape();

      beginShape();
      vertex(565, 740);
      vertex(580, 720);
      vertex(565, 700);
      endShape();

//stop;
rect(780, 705, 10, 30);
rect(800, 705, 10, 30);


if(keyIsPressed){
  if (keyCode == CONTROL){
    currentFrame = 0;
  }
}


//change color when mouse hovers;
    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] &&
       mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
      fill(127,200);
      rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);
// state = keys;
    }
  }

}

function mousePressed(){
  for (var keys in controls){
    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] &&
       mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
         state = keys;
         if (state == "forward"){
           currentFrame++;
           if (currentFrame >= frameArray.length){
             currentFrame = 0;
           }} else if (state == "back"){
             currentFrame--;
             if(currentFrame < 0){
               currentFrame = 0;
            }}
          }
        }


}

/// end of code
