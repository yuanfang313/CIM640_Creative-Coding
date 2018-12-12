var autumnicon;
var springicon;
var summericon;
var wintericon;
var tree;
var leaf1;
var leaf2;
var x1 = 600;
var y1 = 500;
var x2 = 850;
var y2 = 550;
var speed1 = 0.4;
var speed2 = 0.2;
var button1, button2, button3, button4;
var r = 0;
var g = 0;
var b = 0;
var autumn0 = false;
var spring0 = false;
var summer0 = false;
var winter0 = false;
var color3;
var x4 = 30;
var x5 = 1250;
var speed3 = 5;
var y5 = 80;


function preload() {
  autumnicon = loadImage('assets/autumn.png');
  springicon = loadImage('assets/spring.png');
  summericon = loadImage('assets/summer.png');
  wintericon = loadImage('assets/winter.png');
  tree = loadImage('assets/tree.png');
  leaf1 = loadImage('assets/leaf1.png');
  leaf2 = loadImage('assets/leaf2.png');
  swim1 = loadImage('assets/swim1.png');
  swim2 = loadImage('assets/swim2.png');
  wave = loadImage('assets/wave.png');
  snow = loadImage('assets/snow.png');
  cloud = loadImage('assets/cloud.png');
  snowland = loadImage('assets/snowland.png');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background('#c7f5fe');
  fill('#eab4f8');
  textSize(60);
  text('ANIMATIONS OF FOUR SEASONS', 20, 210);
  textSize(12 + (mouseX / width)*72);
  text('Please click on each icon above and get animations of each season!', 20, 260);

  noStroke();
  fill('#eab4f8');
  ellipse(108, 100, 100, 100);
  ellipse(258, 100, 100, 100);
  ellipse(408, 100, 100, 100);
  ellipse(558, 100, 100, 100);
  fill('#fcc8f8');
  ellipse(100, 100, 100, 100);
  ellipse(250, 100, 100, 100);
  ellipse(400, 100, 100, 100);
  ellipse(550, 100, 100, 100);

  imageMode(CENTER);
  image(autumnicon, 100, 100, autumnicon.width/6, autumnicon.height/6);
  image(springicon, 250, 100, springicon.width/6, springicon.height/6);
  image(summericon, 400, 100, summericon.width/6, summericon.height/6);
  image(wintericon, 550, 100, wintericon.width/6, wintericon.height/6);

  if(autumn0 == true){
    autumn();
  }
  if(spring0 == true){
    spring();
  }
  if(summer0 == true){
    summer();
  }
  if(winter0 == true){
    winter();
  }


}

function autumn() {
  //mountain
  noStroke();
  fill('#fcc8f8');
  beginShape();
  vertex(0, windowHeight);
  vertex(windowWidth/10, windowHeight*0.78);
  vertex(windowWidth/7, windowHeight*0.76);
  vertex(windowWidth/4.3, windowHeight*0.6);
  vertex(windowWidth/2.5, windowHeight*0.8);
  vertex(windowWidth/2.2, windowHeight*0.75);
  vertex(windowWidth/2, windowHeight*0.82);
  vertex(windowWidth/1.5, windowHeight*0.65);
  vertex(windowWidth/1.3, windowHeight*0.78);
  vertex(windowWidth/1.23, windowHeight*0.75);
  vertex(windowWidth/1.14, windowHeight*0.6);
  vertex(windowWidth, windowHeight);
  endShape();

  //tree
  image(tree, windowWidth/2, windowHeight/1.4, tree.width/7, tree.height/7);
  image(leaf1, x1, y1, leaf1.width/30, leaf1.height/30);
  image(leaf2, x2, y2, leaf2.width/30, leaf2.height/30);

  if(autumn0 == true){
    if(y1 < windowHeight-leaf1.height/30){
        x1 = x1 - speed1;
        y1 = y1 + speed1;
      }

      if(y2 < windowHeight-leaf2.height/30){
        x2 = x2 + speed2;
        y2 = y2 + speed2;
      }
  }

}

function flower(x3, y3) {
  fill(r, g, b);
  noStroke();
  ellipse(x3, y3, 60);
  ellipse(x3-20, y3, 40);
  ellipse(x3+20, y3, 40);
  ellipse(x3, y3-20, 40);
  ellipse(x3, y3+20, 40);
}

function spring() {
  fill('#fcc8f8');
  beginShape();
  vertex(0, windowHeight);
  vertex(800, 0);
  vertex(1100, 0);
  vertex(windowWidth, 600);
  vertex(windowWidth, windowHeight);
  endShape();

  flower(mouseX+500, mouseY+300);
  flower(400, 700);
  flower(800, 500);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

}

function summer() {
  imageMode(CENTER);
  image(wave, windowWidth/2, windowHeight*0.75, windowWidth, windowHeight/2);
  image(swim1, x4, windowHeight*0.75);

  x4 = x4 + speed3;

}

function winter() {
  fill('#eab4f8');
  rect(0, windowHeight*0.85, windowWidth, windowHeight*0.15);
  image(cloud, windowWidth*0.7, windowHeight*0.15);
  image(snow, windowWidth*0.75, y5);
  image(snow, windowWidth*0.85, y5);
  if(y5 < windowHeight*0.8){
    y5 = y5 + 3;
  }else{
    fill('#f3f798');
    rect(0, windowHeight*0.7, windowWidth, windowHeight*0.15);
  }

 }

function mousePressed() {
  if(mouseX > 100 - autumnicon.width/12 && mouseX < 100 + autumnicon.width/12 && mouseY > 100 - autumnicon.height/12 && mouseY < 100 + autumnicon.height/12){
    autumn0 = true;
  }else{
    autumn0 = false;
  }

   if(mouseX > 250 - springicon.width/12 && mouseX < 250 + autumnicon.width/12 && mouseY > 100 - springicon.height/12 && mouseY < 100 + springicon.height/12){
     spring0 = true;
   }else{
     spring0 = false;
   }

   if(mouseX > 400 - summericon.width/12 && mouseX < 400 + summericon.width/12 && mouseY > 100 - summericon.height/12 && mouseY < 100 + summericon.height/12){
     summer0 = true;
   }else{
     summer0 = false;
   }

   if(mouseX > 550 - wintericon.width/12 && mouseX < 550 + wintericon.width/12 && mouseY > 100 - wintericon.height/12 && mouseY < 100 + wintericon.height/12){
     winter0 = true;
   }else{
     winter0 = false;
   }
 }
