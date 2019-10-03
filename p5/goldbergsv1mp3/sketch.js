var song1;

function preload() {
  song1 = loadSound('assets/GoldbergV1.mp3');  // find an otf or ttf
}

function setup () {
  createCanvas (800,800);
  song1.play();
}
function draw() {
  // put drawing code here
}

function mouseReleased(){
  if (song1.isplaying()) {
    song1.pause();

  }else {
    song1.play();
  }
}
