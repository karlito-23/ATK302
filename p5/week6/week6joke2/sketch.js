var jokeTwo =0;
var myTimer=0;

function setup() {
createCanvas(800,800);
}

function draw() {
  switch(jokeTwo) {
      case 0:
        background("pink");
      text("I said, “Dad, can you tell me what a solar eclipse is?”",100,100);

      break ;

      case 1:
      background("purple");
      text("He replied, “No sun.”",100,100);
      break ;

  }
  myTimer++;
  if (myTimer>=200){
    myTimer=0;
    jokeTwo=jokeTwo+1;
}

function mouseReleased() {
  jokeTwo = (jokeTwo =1) % 3;
}
}
