var x = 0

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('pink');
  fill('yellow');
  rect(x, 100, 100,50);
  x++;//this makes it loop
  if (x>width) {
    x=0;
  }

}
