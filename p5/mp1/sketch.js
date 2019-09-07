function setup() {

  createCanvas(windowWidth,windowHeight);
  noStroke();
}

function draw() {
  background('white');


  if (mouseIsPressed) {
    fill('red')
    ellipse(660, 418, 300, 300);

    fill('white')
      ellipse(685,380, 90, 90);
      ellipse(635,383, 100, 100);

        fill('red')
          ellipse(643,382, 30, 30);
          ellipse(685, 383, 40, 40);

          fill('#194C4C')
            ellipse(664, 474, 40, 40);

          fill('#194C4C');
        rect(668, 331, 45, 10);
        rect(619, 329, 40, 10);

        fill('#194C4C');
        arc(603, 570, 100, 60, PI, TWO_PI);
        arc(706, 570, 100, 60, PI, TWO_PI);

        fill('white');
        triangle(652,457, 665, 453, 662, 474);

        fill('red');
      rect(3, 569, 1516, 660);

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
          rect(668, 331, 45, 10);
          rect(619, 329, 40, 10);

          fill('pink');
          arc(603, 570, 100, 60, PI, TWO_PI);
          arc(706, 570, 100, 60, PI, TWO_PI);

          fill('white');
          triangle(652,457, 665, 453, 662, 474);

          fill('#194C4C');
        rect(3, 569, 1516, 660);

      //     fill(100);
      // text(mouseX +','+ mouseY,40,20);
    }
}

// function mouseReleased() {
//   console.log( mouseX +','+ mouseY);
// }

//time log
//8-22-19	downloaded P5JS 			1hr
//8-25-19	looking over HW and researching ideas			2.5hr
//9-3-19	looking up the hw and working on it	4hrs
//9-4-19	working			3hrs
//9-5-19	working			3hrs
//9-6-19 working      1hr

//this little guys name is Murp his super power is the power of
//making things do what he wants when he is green and when he is red he can make them stop.
