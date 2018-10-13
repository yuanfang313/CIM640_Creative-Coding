

var  dg001, dg002, dg003, dg004, dg005, dg006, dg007, dg008, dg010, dg010, dg011, dg012, dg013, dg014, dg015, dg016, dg017, dg018, dg019, dg020, dg021, dg022;
var curImage;


var controls = {
  "fwd"  : [160,400,90,"white"],
  "back" : [260,400,90,"white"]

}



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
      curImage = dg022;
    }
    if(selection.value() == "21"){
      curImage = dg021;
    }
    if(selection.value() == "20"){
      curImage = dg020;
    }
    if(selection.value() == "19"){
      curImage = dg019;
    }
    if(selection.value() == "18"){
      curImage = dg018;
    }
    if(selection.value() == "17"){
      curImage = dg017;
    }
    if(selection.value() == "16"){
      curImage = dg016;
    }
    if(selection.value() == "15"){
      curImage = dg015;
    }
    if(selection.value() == "14"){
      curImage = dg014;
    }
    if(selection.value() == "13"){
      curImage = dg013;
    }
    if(selection.value() == "12"){
      curImage = dg012;
    }
    if(selection.value() == "11"){
      curImage = dg011;
    }
    if(selection.value() == "10"){
      curImage = dg010;
    }
    if(selection.value() == "9"){
      curImage = dg009;
    }
    if(selection.value() == "8"){
      curImage = dg008;
    }
    if(selection.value() == "7"){
      curImage = dg007;
    }
    if(selection.value() == "6"){
      curImage = dg006;
        }
      if(selection.value() == "5"){
        curImage = dg005;
          }
        if(selection.value() == "4"){
          curImage = dg004;
            }
          if(selection.value() == "3"){
            curImage = dg003;
              }
              if(selection.value() == "2"){
                curImage = dg002;
                  }
    if(selection.value() == "1"){
      curImage = dg001;
    }

  });

  curImage = dg001;


}

function draw(){

  background(0);
  image(curImage, 400, 0);


  for(var keys in controls){

      textSize(18);
      fill(255);
      text(keys, controls[keys][0], controls[keys][1] - 10);

      noStroke();
      fill(controls[keys][3]);
      rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);

      fill("red");
      beginShape();
      vertex(290, 465);
      vertex(320, 445);
      vertex(290, 425);
      endShape();

      beginShape();
      vertex(185, 445);
      vertex(215, 425);
      vertex(215, 465);
      endShape();

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] + controls[keys][2] && mouseY > controls[keys][1] && mouseY < controls[keys][1] + controls[keys][2]){
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
