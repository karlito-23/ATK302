function setup() {

  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    ellipse(width/2, height/2, 50, 50); //if mouse is pressed this runs

  } else {
    rect(width/2, height/2, 50, 50); //if not pressed 'then this one is running
  }    // middle of the screen do width/2
}

function mouseReleased() {
  console.log( mouseX +','+ mouseY);
}
