function setup() {

  createCanvas(windowWidth,windowHeight);
  noStroke();
}

function draw() {
  background('#3FBFBF');


  if (mouseIsPressed) {
    ellipse(width/2, height/2, 50, 50);

  } else {
      fill('#194C4C')
      ellipse(660, 418, 300, 300);

      fill('white')
        ellipse(685,380, 90, 90);
        ellipse(635,383, 100, 100);

          fill('#194C4C')
            ellipse(643,382, 30, 30);
            ellipse(685, 383, 40, 40);

            fill('pink')
              ellipse(664, 474, 40, 40);

            fill('pink');
          rect(673, 324, 40, 10);
          rect(619, 329, 40, 10);

          fill('pink');
          arc(603, 570, 100, 60, PI, TWO_PI);
          arc(706, 570, 100, 60, PI, TWO_PI);

          fill('pink');
        rect(673, 324, 40, 10);
        
          fill(100);
      text(mouseX +','+ mouseY,40,20);
    }
}

function mouseReleased() {
  console.log( mouseX +','+ mouseY);
}
