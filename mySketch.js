var r, g, b;

//'directions': tells whether an rgb value should be increasing or decreasing
var dirs;

var ripples = [];

var mySound;

var sounds = [];

function setup() {
    createCanvas(displayWidth, displayHeight);
    r = random(0,85);
    g = random(85,170);
    b = random(170,256);
    background(r,g,b);

    ellipseMode(RADIUS);

    //initialize to increasing rgb values
    dirs = [1, 1, 1];
}

function preload(){
    soundFormats('mp3', 'wav');
   sound1 = loadSound('Assets/Loop1.mp3');
   sound2 = loadSound('Assets/engine.mp3');
   sound3 = loadSound('Assets/Bell.mp3');
   sound4 = loadSound('Assets/scream.mp3');
   sound5 = loadSound('Assets/sound.mp3');
   sound6 = loadSound('Assets/car.mp3');
   sound7 = loadSound('Assets/bass.mp3');
   sound8 = loadSound('Assets/Hello.mp3');
   sound9 = loadSound('Assets/gross.mp3');
   sound10 = loadSound('Assets/wat.mp3');
   sound11 = loadSound('Assets/stuff.mp3');
   sound12 = loadSound('Assets/bubble.mp3');
   sounds.push(sound1);
   sounds.push(sound2);
   sounds.push(sound3);
   sounds.push(sound4);
   sounds.push(sound5);
   sounds.push(sound6);
   sounds.push(sound7);
   sounds.push(sound8);
   sounds.push(sound9);
   sounds.push(sound10);
   sounds.push(sound11);
   sounds.push(sound12);
   soundsBest = loadSound('Assets/redwine.m4a')
	img = loadImage('Assets/david_3.jpg');
}

//affects the speed of color changing
const RAND_CHANGE_AMOUNT = 10;

//the maximum radius of a ripple before it is deleted
const MAX_RADIUS = -50;//width;

function draw() {
    setDirs();
	
	ripples.push(new Ripple(random(0,displayWidth), random(0,displayHeight)));
	mySound = random(sounds);
    mySound.setVolume(0.5);
    mySound.play();
	
    r = r + (dirs[0] * random(RAND_CHANGE_AMOUNT));
    g = g + (dirs[1] * random(RAND_CHANGE_AMOUNT));
    b = b + (dirs[2] * random(RAND_CHANGE_AMOUNT));
    background(r,g,b);

    noFill();
    stroke(100, 200, 220);
    strokeWeight(8);

    //draw all ripples
    for(let i = 0; i < ripples.length; i++){
       //ellipse(ripples[i].x, ripples[i].y, ripples[i].radius);
       //stroke(ripples[i].color);
       image(img, ripples[i].x, ripples[i].y, ripples[i].radius, random(-1, 1) * ripples[i].radius)
	   ripples[i].update();

       //delete ripple once it's too big
       if(ripples[i].radius < MAX_RADIUS){
           ripples.splice(i, 1);
       }
    }
}

const RGB_MAX = 200;
const RGB_MIN = 75; 

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
    if(ripples.length > 35)
        return;
    ripples.push(new Ripple(mouseX, mouseY));
    /* ADD SOUND EFFECTS HERE*/
    mySound = random(sounds);
    mySound.setVolume(0.5);
    mySound.play();
}