var alpha, beta, gamma; // orientation data
var bunnyImage;
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;
var cars = []; // array of something
var frogPos;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  bunnyImage = loadImage("assets/bike3-01.png");
  imageMode(CENTER);
  rectMode(CENTER);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car(i));
  }

  frogPos = createVector(width / 2, height - 80);
  }

function draw() {

  background('#c6f5ff'); // light blue

  for (var i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].display();

    var distance = cars[i].pos.dist(frogPos);
    if (distance < 15) {
      // do either this
      cars[i].r = 0;
      cars[i].b = 0;
      cars[i].g = 0
      cars[i].alive = false;
      cars[i].vel = 0;

      // or this
      cars.splice(i, 1) ;
    }
    fill('green');
    ellipse(frogPos.x, frogPos.y, 50, 50);
    checkForKeys();
  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  image(bunnyImage, 0, 0, 500, 500);
  //  	rect(0, 0, 100, 100) ;
  pop();


  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  noStroke();
  textSize(300);
  textAlign(CENTER);
  text("atk", width / 2, height / 2);

}
}

function mouseReleased() {
  console.log("beep");
  // cars.pop(floor(random(cars.length)));
  console.log("length of car array is " + cars.length);
}

function Car(num) {
  // constructor
  // properties are here
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-3, 3), 0);
  this.wide = random(40, 80);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.alive = true ;
  this.name = num ;

  // methods

  this.move = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  this.display = function() {
    fill(0);
    textSize(20) ;
    text("car "+this.name, this.pos.x, this.pos.y - 30);
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, this.wide, 20);
    ellipse(this.pos.x - 5, this.pos.y + 20, 20, 20);
    ellipse(this.pos.x + 45, this.pos.y + 20, 20, 20);
  }

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
