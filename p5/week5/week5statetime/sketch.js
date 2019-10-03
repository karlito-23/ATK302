var myState=0;
var myTimer=0;
var myBackground;

function setup() {
  createCanvas(800,800);
  myBackground= color(random(255), random(255), random(255));
}

function draw() {
switch(myState){
 case 0:
 background(myBackground);
   text("case 0",100,100);
   myTimer++;
   if (myTimer>=200){
     myTimer=0;
     myState=1;
    background= color(random(255), random(255), random(255));
   }
   break;

 case 1:
 background(myBackground);
   text("case 1 ",100,100);
   myTimer++;
   if (myTimer>=200){
     myTimer=0;
     myState=2;
     background= color(random(255), random(255), random(255));
   }
 break;

 case 2:
 background(myBackground);
   text("case 2",100,100);
   myTimer++;
   if (myTimer>=200){
     myTimer=0;
     myState=0;
     background= color(random(255), random(255), random(255));
   }
 break;
}
}
