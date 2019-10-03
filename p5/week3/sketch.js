//1
//circle in the middle of the page
function setup() {

  createCanvas(windowWidth,windowHeight);
}

function draw() {
  ellipse(x, 100, 50, 50) ;

x++ ;

if (x > width) {

  x = 0 ;

}

function mouseReleased() {

}

//2
//drawing program that draws rectangles.
// function setup() {
//
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   rect(mouseX,mouseY, 90, 80);
// }
//
// function mouseReleased() {
//   background(255);
//
// }


// 3
// drawing program that draws rectangles
// and then resets when you click the mouse.
// function setup() {
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   rect(mouseX,mouseY, 90, 80);
// }
//
// function mouseReleased() {
// background(255);
// }


//4
// program that changes the background color
//(to a random color) every time you click the mouse.
// function setup() {
//
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   rect(mouseX,mouseY, 90, 80);
// }
//
// function mouseReleased() {
//   background(random(255), random(255), random(255));
//
// }


// 5
// program that displays the count of times someone has clicked the mouse
// var score=0
// function setup() {
//
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   rect(mouseX,mouseY, 90, 80);
// textSize()
//   text(score,30,30);
// }
//
// function mouseReleased() {
//   background(random(255), random(255), random(255));
//  score=score+1;
//  // or score++;
// }
//


//6
//differnt shades of reds
// function setup() {
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   rect(mouseX,mouseY,10,10);
//   textSize(100);
//   text(score,30,30);
// }
//
// function mouseReleased() {
// background(random(255),0,0);//random reds only
// score++;
// }
