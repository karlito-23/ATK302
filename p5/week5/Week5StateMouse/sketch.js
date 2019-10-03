var myState =0;

function setup() {
createCanvas(800,800);
}

function draw() {
  switch(myState) {
      case 0:
        background(255,0,0);
      text("first state",100,100);
      break ;

      case 1:
      background(0,255,0);
      break ;

      case 2:
        background(0,0,255);
      break ;
  }
}

function mouseReleased() {
  myState = (myState =1) % 3;
  //or
//   myState++;
// if(myState >2) {
//   myState=0;
// }
}
