var rosePic;

function setup() {
  createCanvas(800,800);
  rosePic = loadImage("assets/rose.jpg");
}

function draw() {
  image(rosePic,20,100);
}
