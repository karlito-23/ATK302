var mic;
var vol;
var y = 0 ;
var x=0;
var hi=0;
var myTimer=0;

function setup() {
  createCanvas(800,800);
  mic = new p5.AudioIn();
  mic.start();
  noStroke();
}
function draw() {
  vol = mic.getLevel();
  vol = vol * 500;

 switch(hi){

   case 0:
   background("green")
   fill('white')
   textSize(50);
   text("Give me a click and sing to me",50,100);
   fill('black')
   ellipse (x,470,100,100)
   break;

   case 1:
   background("#28AFDC")
   fill('black')
   textSize(30);
   text("you have a wonderful voice,keep going",50,100);
   fill('white')
   ellipse (x,600,100,100)
   break;

   case 2:
   background("#A628DC")
   fill('white')
   textSize(50);
   text("I love this song, please don't stop",30,100);
   fill('black')
  ellipse (x,470,100,100)
   break;

   case 3:
   background("#FECCCC");
   fill('black')
   textSize(30);
   text("You have the voice of an angel,I want to hear more",30,100);
 fill('white')
 ellipse (x,600,100,100)
   break;

   case 4:
   background("#FC1F02")
   fill('white')
   textSize(50);
   text("ok thats enough I'm over it",50,100);
   fill('black')
  ellipse (x,470,100,100)
   break;

 }
 myTimer++;
 if (myTimer>=200){
   myTimer=0;
   hi=hi+1;
}

function mouseReleased() {
hi= (hi =1) % 3;
}

  if (vol > 3) {
    y++ ;
  }

  if (vol > 3){
    x++;
  }
}
// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
