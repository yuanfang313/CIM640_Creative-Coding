function setup(){

select("body").style("background-color", "pink");
var container0 = createDiv();
container0.id("container0");
select("#container0").html("<h1>Your project title goes here!</h1>");
select("#container0").style("width", "400px");
//0_top bottom; auto_left/right margin;
select("#container0").style("margin", "0 auto");
// select("#container0").style();

var cnv = createCanvas(400,400);
cnv.id("mycanvas");
// select("#mycanvas").center();
cnv.parent(container0);
}


function draw(){
background(0);
}
