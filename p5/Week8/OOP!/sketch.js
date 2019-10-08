var myCar; //declare an object
var myCar1;
var myCar2;

function setup() {
  createCanvas(800, 800);
  myCar = new Car(); //spawn one object
  myCar1= new Car();
  myCar2= new Car();
}

function draw() {
  background('pink');
  myCar.display();
  myCar.drive();

  myCar1.display();
  myCar1.drive();

  myCar2.display();
  myCar2.drive();
}

//our car class. this is where we decide where they look like
function Car() {
  //attributes
  this.x = random(width);
  this.y = random(height);
  this.red = random(255);
  this.green = random(255);
  this.blue = random(255);
  this.vel = random(5);
  //methods
  this.display = function() {
    fill(this.red, this.blue, this.green);
    rect(this.x, this.y, 100, 50);
  }

  this.drive = function() {
    this.x = this.x + 5;
    if (this.x > width) {
      this.x = 0;
    }
  }
}
