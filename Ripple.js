class Ripple {
    constructor(x, y){
        this.xcoord = x;
        this.ycoord = y;
        this.r = 50;
        this.col = color(random(50,220), random(50,220), random(50,220));
    }

    //getters
    get x() {
        return this.xcoord;
    }
    get y() {
        return this.ycoord;
    }
    get radius() {
        return this.r;
    }
    get color() {
        return this.col;
    }

    //methods
    update(){
        this.r = this.r + 1;
    }
}