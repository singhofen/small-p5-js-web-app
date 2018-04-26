var s = 'PARTY TIME!!!! - mouse over canvas';


function setup() {
  // put setup code here
  createCanvas(1600,600);
  
}

function draw() {
  // put drawing code here
  background(0, 204, 0);
  strokeWeight(1);//thickness of white rings in ellispe(s)
  stroke(25);//color of borders
  fill(5);
  text(s, 600,50); // Text wraps within text box
   textSize(50);

// y = the y axis in relation to pixels on screen
  for (var x =0; x <= mouseX; x += 50){//+= is speed of random flasing
    for (var x =0; x <= mouseX; x += 50){
    fill(random(0), 0, random(255));
    ellipse(x, 156, 35,35);//last 2 digits are size of ellipse(s).
    rect(x, 156,30,75 );
    
  
  }// y = the y axis in relation to pixels on screen
  for (var y =0; y <= mouseY; y += 50){
    for (var y =0; y <= mouseY; y += 50){
    fill(random(255), 102, random(0));
    ellipse(255, y,25,25);
    triangle(255,y,25,25);
}

}
}}
