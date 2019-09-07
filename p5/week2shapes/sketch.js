function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400); //always in the set up. it is the size
  background('#C14242'); //background color,1 number is grey scale, 255 is white
  noStroke(); // means dont put a line around it

  fill('#BF3FBF'); // fill means color. is every shape under it untill u make another shape
  triangle(18, 18, 18, 360, 81, 360);

  fill(0, 230,0);
  rect(0, 0, 100, 200);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(252, 144, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);
}
