var bikes = []; // the array of all the spawned bike objects from the Bike() class
var frogPos;
var myState = 0;
var timer = 0;
var rober, roberRight, roberLeft;
var bikeAnim = [];  //  the array of the images of bikes
var welcome = [];
var splashscreen;
var song1;


function preload(){
  song1 = loadSound('assets/sneaky.mp3');
}

function setup() {

  createCanvas(800, 800);
song1.play();
splashscreen=loadImage("assets/welcome-01.png");

  bikeAnim[0] = loadImage("assets/bike1.png");
  bikeAnim[1] = loadImage("assets/bike2-01.png");
  bikeAnim[2] = loadImage("assets/bike3-01.png");
  // add more bikes here

  for (var i = 0; i < 7; i++) {
    bikes.push(new Bike());
  }

  roberRight = loadImage("assets/roberR-02.png");
  roberLeft = loadImage("assets/roberL-02.png");
  rober = roberRight;
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {

    case 0: // splash screen
image(splashscreen,0,0)
fill('#966111');
      textSize(60);
      textFont('Impact');
      text("Welcome to Bike Robbing",100,300);
      text("Click to Play", 250,400);
      break;

    case 1: // the game state
    background('pink')
      game(); //this should be in case 1 of a switch/case statement
      timer++;
      if (timer > 600) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2: // the lose state
      background('pink');
      textSize(100);
      textFont('Impact');
      text("loser!",250,400);
      break;

    case 3: // the win state
      background('light blue');
      textSize(100);
      textFont('Impact');
      text("Winner!", 250,400);
      break;

  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //this was the lose state
      resetTheGame();
      myState = 0;
      break;

    case 3: //this was the win state
      resetTheGame();
      myState = 0;
      break;
song1.pause();
  }
}

function resetTheGame() {
  bikes = []; //clear the array first

  //spawn the cars
  for (var i = 0; i < 10; i++) {
    bikes.push(new Bike());
  }
  timer = 0;
}


// car class!!
function Bike() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.bikeNum = floor(random(bikeAnim.length - 1));
  this.timer = 0;
  this.maxTimer = random(30, 60);

  // methods (what the car looks like)
  this.display = function() {
    fill(this.r, this.g, this.b);
    //   rect(this.pos.x, this.pos.y, 100, 50);
    //   ellipse(this.pos.x - 40, this.pos.y + 30, 25, 25); //wheels
    //   ellipse(this.pos.x + 40, this.pos.y + 30, 25, 25); //wheels
    // image(butterfly1,this.pos.x, this.pos.y, 150,150)
    image(bikeAnim[this.bikeNum], this.pos.x, this.pos.y, 300, 200);
    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.bikeNum = this.bikeNum + 1;
      if (this.bikeNum > bikeAnim.length - 1) this.bikeNum = 0;
      this.timer = 0;
    }
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) rober = roberLeft;
  if (keyCode === RIGHT_ARROW) rober = roberRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {
  background(200);
  //iterate through the cars array
  for (var i = 0; i < bikes.length; i++) {
    bikes[i].display();
    bikes[i].drive();

    //test if this car is close to the frog
    if (bikes[i].pos.dist(frogPos) < 50) {
      bikes.splice(i, 1); //take car out
      //this is where you put a sound
      //if the cars type is a killer type,myState=3
    }
  }

  if (bikes.length == 0) {
    tiemr = 0;
    myState = 3; //they WON!
  }
  // draw the frog
  fill('White');
  // ellipse(frogPos.x, frogPos.y, 60, 60);
  image(rober, frogPos.x, frogPos.y,600, 400);
  checkForKeys();
}
