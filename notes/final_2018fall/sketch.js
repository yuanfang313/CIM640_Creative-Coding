var curImage, sun, moon;


function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup(){
  selection = createSelect();
  selection.position(10, 50);
  selection.option("A");
  selection.option("B");
  
  selection.change(function(){
    if(selection.value()== "A"){
      curImage = sun;
    }
  });

}

function draw(){

  background(255);
  image(curImage,cX, cY, curImage.width, curImage.height);

}
