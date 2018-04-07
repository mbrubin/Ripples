class Ripple {
    constructor(x, y){
        this.xcoord = x;
        this.ycoord = y;
        this.r = 50;
        this.col = color(random(50,220), random(50,220), random(50,220));
        this.rand = random(1, 5);
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
        this.ycoord = this.ycoord + 1;
        this.xcoord = this.xcoord + 1;
        //this.rand = random(1, 100);
    }

    draw(shape){
        rect(this.x+this.rand, this.y-this.rand, this.radius*this.rand, this.radius*this.rand);
        ellipse(this.x+this.rand, this.y-this.rand, this.radius*this.rand);
        this.update();
    }
}