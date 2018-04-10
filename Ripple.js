class Ripple {
    constructor(x, y){
        this.xcoord = x;
        this.ycoord = y;
		this.o_xcoord = x;
        this.o_ycoord = y;
        this.r = 0;
		this.shrink = false;
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
        if(!this.shrink)
			this.r = this.r + random(0,3);
		else
			this.r = this.r - 10
		
		if(this.r > 350)
			this.shrink = true;
		
		this.xcoord = this.o_xcoord + random(-r / 50, r / 50)// + (-mouseX * 2 / r )
		this.ycoord = this.o_ycoord + random(-r / 50, r / 50)// + (-mouseY  * 2/ r )
    }
}