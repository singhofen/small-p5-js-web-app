
//This is a p5 js project file. TODO: Add more/different code later.

//make another p5 project and link to index.html
//remember to link the js folders <img src="logo.png" alt="The HTML5 logo">

function setup() {
  // put setup code here
  createCanvas(1800,1800);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed){
	  fill(0);
  }else{
	  fill(255);
  }
  ellipse(mouseX, mouseY, 80,80);
  
}
