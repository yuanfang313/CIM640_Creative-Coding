

var  dg001, dg002, dg003, dg004, dg005, dg006, dg007, dg008, dg010, dg010, dg011, dg012,
dg013, dg014, dg015, dg016, dg017, dg018, dg019, dg020, dg021, dg022;
var curImage;

var frameAmounts =22;
var frameArray = [];
var currentFrame;

var interval = 2000;
var prevMillis = 0;

var controls = {
                  "play" : [0, 400, 90, "green"],
                  "stop" : [100, 400, 90, "red"],
                  "forward"  : [200,400,90,"white"],
                  "back" : [300,400,90,"white"]
}

var state = "stop";


var currentFrame = 0;
var state = "fwd";


function preload(){

dg001 = loadImage("assets/1.jpg");
dg002 = loadImage("assets/2.jpg");
dg003 = loadImage("assets/3.jpg");
dg004 = loadImage("assets/4.jpg");
dg005 = loadImage("assets/5.jpg");
dg006 = loadImage("assets/6.jpg");
dg007 = loadImage("assets/7.jpg");
dg008 = loadImage("assets/8.jpg");
dg009 = loadImage("assets/9.jpg");
dg010 = loadImage("assets/10.jpg");
dg011 = loadImage("assets/11.jpg");
dg012 = loadImage("assets/12.jpg");
dg013 = loadImage("assets/13.jpg");
dg014 = loadImage("assets/14.jpg");
dg015 = loadImage("assets/15.jpg");
dg016 = loadImage("assets/16.jpg");
dg017 = loadImage("assets/17.jpg");
dg018 = loadImage("assets/18.jpg");
dg019 = loadImage("assets/19.jpg");
dg020 = loadImage("assets/20.jpg");
dg021 = loadImage("assets/21.jpg");
dg022 = loadImage("assets/22.jpg");


for (var frameString = 0; frames < frameAmounts; frames++){
  var frameString = "assests/" + frames + ".jpg";
  frameArray[frames] = loadImage(frameString);

}

}


// for(var frames = 0; frames< frameAmounts; frames++){
//   var frameString = "assests/" + frames +".jpg";
//   frameArray[frames] = loadImage(frameString);
// }
//
//
// }


function setup(){
  createCanvas(2000, 1200);

for (var keys in controls){
  console.log(keys + "values:" + controls[keys]);
}

  selection = createSelect();
  selection. position(300, 130);


  selection.option("1");
  selection.option("2");
  selection.option("3");
  selection.option("4");
  selection.option("5");
  selection.option("6");
  selection.option("7");
  selection.option("8");
  selection.option("9");
  selection.option("10");
  selection.option("11");
  selection.option("12");
  selection.option("13");
  selection.option("14");
  selection.option("15");
  selection.option("16");
  selection.option("17");
  selection.option("18");
  selection.option("19");
  selection.option("21");
  selection.option("22");

  selection.changed(function(){


    if(selection.value() == "22"){
      currentFrame = dg022;
    }
    if(selection.value() == "21"){
      currentFrame = dg021;
    }
    if(selection.value() == "20"){
      currentFrame = dg020;
    }
    if(selection.value() == "19"){
      currentFrame = dg019;
    }
    if(selection.value() == "18"){
      currentFrame = dg018;
    }
    if(selection.value() == "17"){
      currentFrame = dg017;
    }
    if(selection.value() == "16"){
      currentFrame = dg016;
    }
    if(selection.value() == "15"){
      currentFrame = dg015;
    }
    if(selection.value() == "14"){
      currentFrame = dg014;
    }
    if(selection.value() == "13"){
      currentFrame = dg013;
    }
    if(selection.value() == "12"){
      currentFrame = dg012;
    }
    if(selection.value() == "11"){
      currentFrame = dg011;
    }
    if(selection.value() == "10"){
      currentFrame = dg010;
    }
    if(selection.value() == "9"){
      currentFrame = dg009;
    }
    if(selection.value() == "8"){
      currentFrame = dg008;
    }
    if(selection.value() == "7"){
      currentFrame = dg007;
    }
    if(selection.value() == "6"){
      currentFrame = dg006;
        }
      if(selection.value() == "5"){
        currentFrame = dg005;
          }
        if(selection.value() == "4"){
          currentFrame = dg004;
            }
          if(selection.value() == "3"){
            currentFrame = dg003;
              }
              if(selection.value() == "2"){
                currentFrame = dg002;
                  }
    if(selection.value() == "1"){
      currentFrame = dg001;
    }

  });

  curImage = dg001;


}

function draw(){

  background(0);
  image(currentFrame, 700, 0);
  // image(frameArray[currentFrame], 700, 0);
  if(millis() - prevMillis > interval && state == "play"){
    currentFrame++;
    prevMillis = millis();

  }

  if(currentFrame > frameAmounts - 1){
    currentFrame = 0;
  }


  for(var keys in controls){

      textSize(18);
      fill(255);
      text(keys, controls[keys][0], controls[keys][1] - 10);

      noStroke();
      fill(controls[keys][3]);
      rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);

// the red triangles;
      fill("red");
      beginShape();
      vertex(350, 465);
      vertex(380, 445);
      vertex(350, 425);
      endShape();

      beginShape();
      vertex(245, 445);
      vertex(275, 425);
      vertex(275, 465);
      endShape();

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] &&
       mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
      fill(127,200);
      rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);

      state = keys;
    }
  }

}


  // for(var keys in controls){
  //   textSize(18);
  //   fill(255);
  //   text(keys, controls[keys][0], controls[keys][1] - 10);
  //
  //   noStroke();
  //   fill(controls[keys][3]);
  //   rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);
  //
  //   fill("red");
  //   beginShape();
  //   vertex(290, 465);
  //   vertex(320, 445);
  //   vertex(290, 425);
  //   endShape();
  //
  //   beginShape();
  //   vertex(185, 445);
  //   vertex(215, 425);
  //   vertex(215, 465);
  //   endShape();
  //
  //   if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] &&
  //     mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
  //     fill(127,200);
  //     rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);
  //
  //     state = keys;
  //   }
  // }


















// function mousePressed(){
//
// if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] &&
//   mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
//
//     state = keys;
//   }
//
//   if(state == "fwd"){
//   currentFrame++;
//   } else if(state == "back"){
//   currentFrame--;
//   }
//
//
// }
