var myState=0;
var timer=0;

function setup() {
  // put setup code here
}

function draw() {
switch(myState){
  case 0:
  break;

  case 1:
  //put a timer in here, if timer counted up to 200,go to state 2 and reset timer!
  background(myBackground);
    text("case 0",100,100);
    myTimer++;
  if (myTimer>=200){
    myTimer=0;
    myState=1;
      background= color(random(255), random(255), random(255));

  break;

  case 2:
  break;

  case 3:
  break;

  case 4:
  break;

}
}

function mouseReleased(){
  if(myState==0){
    myState=1;
  }
}
