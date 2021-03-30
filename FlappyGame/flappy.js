const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

//load var

var bird = new Image();
bird.src = "Assets/images/bird.png";
var bg = new Image();
bg.src = "Assets/images/bg.png";

var fg = new Image();
fg.src = "Assets/images/fg.png";

var pipeNorth = new Image();
pipeNorth.src = "Assets/images/pipeNorth.png";

var pipeSouth = new Image();
pipeSouth.src = "Assets/images/pipeSouth.png";




//load sound

var fly = new Audio();
var score = new Audio();

fly.src = "Assets/sounds/fly.mp3"
score.src = "Assets/sounds/score.mp3"

//const

var gap = 85;
var constant = pipeNorth.height + gap;

//draw

function draw(){

    ctx.drawImage(bg, 0, 0);

    
}

let game = setInterval(draw,150);
draw();