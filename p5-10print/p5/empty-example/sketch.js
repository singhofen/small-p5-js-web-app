let x = 0;
let y = 0;
let spacing = 50;//the higher the number the larger the spacing between printing out on screen
//let sw = 0.3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
 }


function draw() {
stroke(0, 64, 255);
strokeWeight(1);


if(random(1) < 0.5){
  line(x,y, x + spacing,  y + spacing);//changing the probability of back and forward slashes // & \\ examples: 0.6-0.9 (%)
  //option for rectangle : rect(x,y,spacing,spacing);
  // triangle(x+spacing, y+spacing, x, y, x+spacing, y-spacing);
  

} else {
stroke(255, 0, 64);
//(x,y, spacing,  spacing);
// triangle(x+spacing, y+spacing, x, y, x+spacing, y-spacing);
 line(x, y +spacing, x + spacing, y);
}

x = x + spacing;
//sw = sw + 0.1;


if(x > width) {
  x = 0;
  y = y + spacing;
}
}