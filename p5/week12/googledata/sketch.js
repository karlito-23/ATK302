var namesArray = [];
var hotdog;
var tacos;
function setup() {
  tacos=loadImage("assets/Taco-02.png");
  hotdog=loadImage("assets/hotdog-01.png");

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1UGdqc35EwIlw4f08t2xDSzBQFLZXTW6SsRMR5gEjOCM'; // this is KEY of the URL from the sheet (only thing we change)
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  // Regular setup code we usually have
  createCanvas(800, 800);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].question, data[i].name)) ;
   }
}
function draw() {
  background('#A55959');

  // // iterate through the namesArray and display the objects!
  for (let i = 0 ; i < namesArray.length ; i++) {
    namesArray[i].display() ;
    // call drive
  }
}
// my circle class
function Circle(myQ, myN) {
  this.pos = createVector(random(width), random(height));
  this.vel= createVector(random(-5, 5), random(-5, 5));
  this.name = myN;
  this.question = myQ;

  this.display = function() {
    if (this.question==="Hot Dogs"){
    image(hotdog,this.pos.x, this.pos.y, 100, 100);
  }else{
    image(tacos,this.pos.x,this.pos.y,100,100);
  }
  fill("white")
  textFont('Impact');
  textSize(20);
    text(this.name,this.pos.x,this.pos.y);
  }
  // drive method
  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}
