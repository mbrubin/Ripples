var r, g, b;

//'directions': tells whether an rgb value should be increasing or decreasing
var dirs;
var ripples = [];
var mySound;
var shape = 'rect';


function preload(){
    soundFormats('mp3', 'ogg');
    mySound = loadSound('med.mp3');
}

function setup() {
    createCanvas(720, 480);
    r = random(0,85);
    g = random(85,170);
    b = random(170,256);
    background(r,g,b);

    //translate(width/2, height/2);

    //initialize to increasing rgb values
    dirs = [1, 1, 1];
}

//affects the speed of color changing
const RAND_CHANGE_AMOUNT = 10;

//the maximum radius of a ripple before it is deleted
const MAX_RADIUS = 800;//width;

function draw() {
    setDirs();

    r = r + (dirs[0] * random(RAND_CHANGE_AMOUNT));
    g = g + (dirs[1] * random(RAND_CHANGE_AMOUNT));
    b = b + (dirs[2] * random(RAND_CHANGE_AMOUNT));
    background(r,g,b);

    noFill();
    strokeWeight(8);

    //draw all ripples
    rectMode(CENTER);
    var rand = random(1, 4);
    for(let i = 0; i < ripples.length; i++){
       ripples[i].draw(shape);
       stroke(ripples[i].color);
 
        //delete ripple once it's too big
        if(ripples[i].radius > MAX_RADIUS){
            ripples.splice(i, 1);
        }
     }
       //triangle(ripples[i].radius, ripples[i].radius/2, ripples[i].y, ripples[i].radius, ripples[i].radius, ripples[i].x)
       
}

const RGB_MAX = 200;
const RGB_MIN = 20; 

//sets the directions depending on the current rgb values
function setDirs(){
    if(r >= RGB_MAX){
        dirs[0] = -1;
    }
    else if(r <= RGB_MIN){
        dirs[0] = 1;
    }

    if(g >= RGB_MAX){
        dirs[1] = -1;
    }
    else if(g <= RGB_MIN){
        dirs[1] = 1;
    }

    if(b >= RGB_MAX){
        dirs[2] = -1;
    }
    else if(b <= RGB_MIN){
        dirs[2] = 1;
    }
}

function mouseClicked() {
    ripples.push(new Ripple(mouseX, mouseY));
    /* ADD SOUND EFFECTS HERE*/
    mySound.setVolume(0.1);
    mySound.play();
}

function keyTyped() {
    if(key === 'r'){
        ripples = []
    }

  }