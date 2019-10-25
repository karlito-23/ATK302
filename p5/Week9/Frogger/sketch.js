var cars = [];
var frogPos;
var myState = 0;
var timer = 0;

function setup() {

  createCanvas(800, 800);
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {

    case 0: // splash screen
    background('white');
    textSize(100);
textFont('Georgia');
      text("Welcome,Click to Play", 100, 100);

      break;

    case 1: // the game state
      game(); //this should be in case 1 of a switch/case statement
      timer++;
      if (timer > 600) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2: // the win state
    background('pink');
      text("loser!", 100, 100);
      break;

    case 3: // the lose state
    background('light blue');
    textSize(12);
textFont('Georgia');
text('Georgia', 12, 30);
      text("Winner!", 100, 100);
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

  }
}
function resetTheGame(){
  cars=[];//clear the array first

  //spawn the cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer=0;
}


// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  // methods (what the car looks like)
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
    ellipse(this.pos.x - 40, this.pos.y + 30, 25, 25); //wheels
    ellipse(this.pos.x + 40, this.pos.y + 30, 25, 25); //wheels
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {
  background(100);

  //iterate through the cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    //test if this car is close to the frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    tiemr = 0;
    myState = 3; //they WON!
  }
  // draw the frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 60, 60);
  checkForKeys();
}
