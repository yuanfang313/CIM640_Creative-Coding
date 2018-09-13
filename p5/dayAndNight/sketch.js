//readme is a intro file




var sun;
var moon;

function preload(){
  sun = loadImage('assets/sun.png');
  moon =loadImage('assets/moon.png');
}
function setup() {
createCanvas(400,400);
}

function draw() {
  background(255);
  console.log("mouseX:"+ mouseX + "mouseY:" + mouseY);

  //interface
  textSize(18);
  text('Move over each area to reveal a surprise!',20,20);

  //image(sun, 100,100);
  //image(moon, 200,100);
  line(width/2,0, width/2,height);
  text('Day', 20,360);
  text('Night', 350,360);

  //interaction


/*
  if(ture){
    execute this code
  }
*/
if(mouseX < width/2){
  console.log('Day Side');
  image(sun, 100,100);

}
if(mouseX >= width/2){
  console,log('Night Side');
  image(moon, 200,100);
}
}
