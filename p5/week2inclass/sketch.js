function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 500); //always in the set up. it is the size
  // background('#C14242'); //background color,1 number is grey scale, 255 is white
  // noStroke(); // means dont put a line around it

//   fill('#BF3FBF'); // fill means color. is every shape under it untill u make another shape
//   triangle(18, 18, 18, 360, 81, 360);
//
//   fill(0, 230,0);
//   rect(0, 0, 100, 200);
//
//   fill(204);
//   quad(189, 18, 216, 18, 216, 360, 144, 360);
//
//   fill(255);
//   ellipse(252, 144, 72, 72);
//
//   fill(204);
//   triangle(288, 18, 351, 360, 288, 360);
//
//   fill(255);
//   arc(479, 300, 280, 280, PI, TWO_PI);
// }

}

function draw() {
  background('#0DFBF7');
  noStroke();

  fill('#FBF70D');
  ellipse (230,144,200,200);

  fill ('#8E5705');
  rect(400,350,100,600)
    // x   y  wide tall
    // make something move x=x+1;

  fill ('#04A91A')
  ellipse (400,400,100,100)

  fill ('#04A91A')
  ellipse (450,420,80,80)

  fill ('#04A91A')
  ellipse (470,266,100,100)

  fill ('#04A91A')
  ellipse (382,327,75,75)

  fill ('#04A91A')
  ellipse (521,393,95,85)

  fill ('#04A91A')
  ellipse (411,295,60,85)

  fill ('#04A91A')
  ellipse (482,383,95,85)

  fill ('#04A91A')
  ellipse (517,326,60,65)

  fill ('#04A91A')
  ellipse (445,335,100,100)

fill ( 'white' ) ;
ellipse (245,335,50,78)

fill ( 'white' ) ;
ellipse (216,353,40,50)

fill ( 'white' ) ;
ellipse (271,353,70,50)

fill ( 'white' ) ;
ellipse (213,382,40,50)

fill ( 'white' ) ;
ellipse (247,379,67,50)

fill('green');
rect(0,483,800,100)


//   fill(255);
//   text('hello',20,20);
//
// fill(100);
//   text(mouseX +','+ mouseY,40,20); how you can find where the cordanis is at
}

function mouseReleased() {
  console.log( mouseX +','+ mouseY);
}
