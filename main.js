x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var screen_width = 0;

var screen_height = 0;

var apple = "";

var speak_data = "";

var to_number = "";

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number+"Apples drawn";
    speak()
  }
  for (i=1,i<=to_number,i++) {
    var x = Math.floor(Math.random * 700);
    var y = Math.floor(Math.random * 400);
    image(apple.png,x,y,innerWidth,innerHeight);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload() {
  function loadImage() {
    apple = "apple.png";
  }
}

to_number = Number(content);

if(Number.isInteger(to_number)) {
  console.log("Started drawing Apple");
  draw_apple = "set";
}
else {
  console.log("The speech has not recognized a number");
}

screen_width = window.innerWidth;

screen_height = window.innerHeight;

function createCanvas() {
  screen_width = -150;
  screen_height = -150;
}

function canvas.position(apple.png) {
  var posX = 0;
  var PosY = 150;
}