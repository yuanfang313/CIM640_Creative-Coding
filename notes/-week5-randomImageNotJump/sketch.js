var curImage, sun, moon;
var selection, textInput, submitButton;

var numberOfImages = 0;

function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {

createCanvas(1000,400);

//selection process;
selection = createSelect();
selection. position(10, 10);

selection.option("sun");
selection.option("moon");
selection.changed(function(){
console.log(selection.value());
});


//textInput;
textInput = createInput("");
textInput.position(10, 30);


//submitButton;
submitButton = createButton("Create Pattern");
submitButton.position(10,50);

submitButton.mousePressed(function(){
//textInput
  numberOfImages = textInput.value();
//console.log(numberOfImages);
//selection
  if(selection.value() == "sun"){
    curImage = sun;
  } else if(selection.value() == "moon"){
    curImage = moon;
  }

});

}

function draw() {

  frameRate(5);
background(205);

for(var i = 0; i < numberOfImages; i++){
  //i++ means i=i+1
 //console.log(i);
image(curImage, random(width), random(height), curImage.width/random(1,5), curImage.height/random(1,2));

}

}
