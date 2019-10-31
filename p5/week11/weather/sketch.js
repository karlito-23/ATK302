var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var wspeed = 0;
var x=0;
var tempr =0;
function setup() {
  createCanvas(800, 800);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'http://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=ecb75f3fa371cb618e6cd8946e66627d'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.

  wspeed = weather.wind.speed;
  tempr = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    text("we have weather", 20, 20) ;
    text("humidity="+weather.main.humidity,20,40);
    text("temp="+weather.main.temp,20,60);
    text("windspeed="+weather.wind.speed,20,80);
//make cloud go across the screen
    fill('white');
    noStroke();
    ellipse (x-245,335,50,78);
    ellipse (x-216,353,40,50);
    ellipse (x-271,353,70,50);
    ellipse (x-213,382,40,50);
    ellipse (x-247,379,67,50);
    x=x+ wspeed/4 ;
    if(x>width)x=0;

//make a thermometer
fill('red');
var tempMap=0;
tempMap=map(tempr,-10,100,0,height-10);
rect(350,height-10,30,-tempMap); //- height makes go up instead of down
      break;
  }
}
