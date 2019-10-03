var jokeOne =0;

function setup() {
createCanvas(800,800);
}

function draw() {
  switch(jokeOne) {
      case 0:
        background(255,0,0);
      text("Nobody ever asks how Coca Cola is doing.",100,100);
      break ;

      case 1:
      background(0,255,0);
      text("It’s always, “Is Pepsi okay?",100,100);
      break ;

  }
}

function mouseReleased() {
  jokeOne = (jokeOne =1) % 3;
}
