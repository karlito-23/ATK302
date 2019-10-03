var myFont;

function preload() {
  myFont = loadFont('assets/DabreGrunge.otf');  // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;
}
function draw() {
  fill('#ED225D');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(36);	// SETS the size of the font
  text('HELLO WORLD', 100, 150); // DISPLAYS TEXT WITH THE FONT
}
