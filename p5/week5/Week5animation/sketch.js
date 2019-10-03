var x=0;

function setup() {
  createCanvas(200,200);

}

function draw() {
  background(100);
  // rect(x,10,10,10);
  text("VOTE",x,100)
  x+=5; //will add 5 to x all the setTimeout(function ()
    if (x>200) { //never put a ; cause it will end it
      x=0;
    }
}
