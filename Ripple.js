class Ripple {
    constructor(x, y){
        this.xcoord = x;
        this.ycoord = y;
        this.r = 1;
        this.col = new ChangingColor(10, 50, 230);
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
    // get color() {
    //     return this.col;
    // }

    //methods
    update(){
        this.r = this.r + 1;
        this.col.update();
    }

    //override draw
    draw(shape){
        stroke(this.col.color);
        ellipse(this.x, this.y, this.radius);
        this.update();
    }
}