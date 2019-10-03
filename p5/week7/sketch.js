var myState = 0;
var timer = 200;
var x=0;
var vel=3;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background('pink');
  fill('yellow');
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {

    case 0://green
      fill('#0CFC0C');
      ellipse(width / 2, height / 2, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 120, 100, 100);
      ellipse(width / 2, height / 2 + 120, 100, 100);
      doTimer(1,200);

      break;

    case 1://yellow
      fill('#FBFF38');
      ellipse(width / 2, height / 2 - 120, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 + 120, 100, 100);
      ellipse(width / 2, height / 2, 100, 100);
      doTimer(2,100);
      break;

    case 2://red
      fill('grey');
      ellipse(width / 2, height / 2, 100, 100);
      ellipse(width / 2, height / 2 - 120, 100, 100);
      fill('#FF2D2D');
      ellipse(width / 2, height / 2 + 120, 100, 100);
      doTimer(0,50);
      break;
  }
  //animated car
  fill('purple');
rect(x, height-380,80,50);
x=x+vel;
if(x>width){
  x=0;
}
}

function doTimer(whichState,variableTimer){
  timer--;
  if (timer <= 0) {
    timer = variableTimer;
    myState = whichState;
  }
}
