var mic;
var vol;
var y = 0 ;
var x=0;

function setup() {
  createCanvas(800,800);
  mic = new p5.AudioIn();
  mic.start();
  noStroke();
}
function draw() {
  background("#FF8EC1");

  fill ('#8EFDFF')
  ellipse (470,y,100,100);
 fill('yellow')
  ellipse (x,470,100,100);
  text("AHHHHHH WATCH OUT",50,y)
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    y++ ;
  }

  if (vol > 3){
    x++;
  }
  textSize(18);
  text("CLICK ME AND SEE HOW LOUD YOU ARE. YOUR VOLUME IS" + vol, 80, 400);
}
// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
