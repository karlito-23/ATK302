let bubbles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  let x =random ()
}

function mousePressed(){
  let r = random (10,50);
  let b = new bubble (mouseX,mouseY, r);
  bubbles.push (b);
}

function draw() {
  background(0);
  for (let i=0; i < bubbles.length; i++)
  bubbles[i].move();
  bubble[i].show();
}
