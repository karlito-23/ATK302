function setup() {
createCanvas (800,800);
// rectMode(CENTER); //Center all rectangles
}

function draw() {
fill('red');
rect(100,100,100,100);
//put the score in a text command
}

function mouseReleased(){
  if ((mouseX > 100)&& (mouseX < 200)&& (mouseY > 100)&& (mouseY < 200)){
  console.log("beep");
}
}
