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
var gameover = new Audio();

fly.src = "Assets/sounds/fly.mp3"
score.src = "Assets/sounds/score.mp3"
gameover.src = "Assets/sounds/gameover.mp3"

//const

var gap = 340;
var constant = pipeNorth.height + gap;

var bX = 10;
var bY = 300;
//gravitacija
var gravity = 0.7;

//on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 30;
}

//pipe cords

var pipe = [];

pipe[0] = {
    x : 100,
    y : 0
}

//restart

function restartGame(){
    window.location.reload();
}

//draw

function draw(){

    ctx.drawImage(bg, 0, 0);

    for(var i = 0; i< pipe.length;i++){

        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

        pipe[i].x--;

        if(pipe[i].x == 90){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            });
        }
        //collision
        if(bX +bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + bird.height >=
            pipe[i].y+constant)){
                gameover.play();
                setTimeout('restartGame()',2000)
            }
    }

    
    ctx.drawImage(fg,0,cvs.height - fg.height);
    ctx.drawImage(bird,bX,bY);

    bY += gravity;

    requestAnimationFrame(draw);

    
}

let game = setInterval(draw,30000);
draw();