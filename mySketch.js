var r, g, b;

//'directions': tells whether an rgb value should be increasing or decreasing
var dirs;

var ripples = [];

function setup() {
    createCanvas(720, 480);
    r = random(0,85);
    g = random(85,170);
    b = random(170,256);
    background(r,g,b);

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
    stroke(100, 200, 220);
    strokeWeight(8);

    //draw all ripples
    for(let i = 0; i < ripples.length; i++){
       ellipse(ripples[i].x, ripples[i].y, ripples[i].radius);
       stroke(ripples[i].color);
       ripples[i].update();

       //delete ripple once it's too big
       if(ripples[i].radius > MAX_RADIUS){
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
    ripples.push(new Ripple(mouseX, mouseY));
    /* ADD SOUND EFFECTS HERE*/
}